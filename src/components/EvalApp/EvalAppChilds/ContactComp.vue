<template>
  <div class="flex flex-col gap-5">

    <div class="flex flex-col mx-auto">
      <h2 v-if="!formSubmitted" @submit.prevent="submitForm" class="font-semibold text-2xl text-sky-100 mb-2 md:text-left text-center">
        <fa class="iconBtn" icon="circle-right" /> {{ title }}
      </h2>
      <p v-if="!formSubmitted" @submit.prevent="submitForm" class="font-medium text-sm text-sky-100 md:text-left text-center">{{ txt }}</p>

      <div v-if="formSubmitted" class="pt-20 pb-5 mx-auto text-center flex flex-col">
        <div class="mb-2">
          <fa v-if="showIcon" class="text-sky-100 text-4xl mb-2" icon="envelope-circle-check" />
        </div>
        <div class="font-semibold text-2xl text-sky-100 md:text-left sm:text-center">
          {{ successMessage }}
        </div>

        <button id="generatePDF" @click="generatePDF"
          class="w-[200px] mx-auto relative overflow-hidden font-semibold text-sm text-sky-100 bg-orange-600 border-2 border-orange-600 py-2 px-4 my-5 rounded duration-100 group">
          <span class="relative z-10">
            <span class="ml-2"> 
            <fa class="iconBtn" icon="download" /> {{ successMessagePDF }}
            </span>
          </span>
          <span class="absolute inset-0 bg-sky-900 opacity-0 group-hover:opacity-100 transform scale-0 origin-center transition-transform duration-300 group-hover:scale-100"></span>
          <span class="absolute inset-0 bg-sky-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"></span>
        </button>
        <fa class="iconBtn text-xl text-sky-100 animate-bounce mt-5" icon="arrow-down" />
      </div>
    </div>


    <div class="max-w-3xl mx-auto w-11/12">
      <form v-if="!formSubmitted" @submit.prevent="submitForm">

        <div class="bg-sky-900 mb-2 p-5 mx-auto rounded gap-5 md:flex">
          <!-- NOM -->
          <div class="flex flex-col mb-2 rounded w-full">
            <label for="firstName" class="text-sky-100 font-semibold text-base">
              <fa class="text-sky-100 text-base" icon="user" /> Nom: <span class="text-orange-600">*</span>
            </label>
            <input type="text" ref="firstName" oninput="setCustomValidity('')" maxlength="50"
              oninvalid="setCustomValidity('Veuillez entrer votre Nom s\'il vous plaît')" id="firstName"
              v-model="formData.firstName" placeholder="Entrez votre Nom"
              :class="{ 'border': formData.firstName === '' && !formData.firstNameValid, 'border': !formData.firstNameValid }"
              @input="validateFirstName" required class="px-3 py-2 rounded-md w-full" />
            <p class="text-sky-100">{{ formData.firstName.length }} / 50 caractères</p>
          </div>

          <!-- PRENOM -->
          <div class="flex flex-col mb-2 rounded w-full">
            <label for="lastName" class="text-sky-100 font-semibold text-base">
              <fa class="text-sky-100 text-base" icon="user" /> Prénom: <span class="text-orange-600">*</span>
            </label>
            <input type="text" ref="lastName" oninput="setCustomValidity('')" maxlength="50"
              oninvalid="setCustomValidity('Veuillez entrer votre Prénom s\'il vous plaît')" id="lastName"
              v-model="formData.lastName" placeholder="Entrez votre Prénom"
              :class="{ 'border': formData.lastName === '' && !formData.lastNameValid, 'border': !formData.lastNameValid }"
              @input="validateLastName" required class="px-3 py-2 rounded-md w-full" />
            <p class="text-sky-100">{{ formData.lastName.length }} / 50 caractères</p>
          </div>
        </div>


        <!-- EMAIL -->
        <div class="bg-sky-900 mb-2 p-5 mx-auto rounded gap-5 md:flex">
          <div class="flex flex-col mb-2 rounded w-full">
            <label for="email" class="text-sky-100 font-bold text-base">
              <fa class="text-sky-100 text-base" icon="envelope" /> E-mail: <span class="text-orange-600">*</span>
            </label>
            <input type="email" ref="email" oninput="setCustomValidity('')" maxlength="80"
              oninvalid="setCustomValidity('Veuillez entrer une adresse mail valide s\'il vous plaît')" id="email"
              v-model="formData.email" placeholder="Entrez votre adresse e-mail"
              :class="{ 'border': formData.email === '' && !formData.emailValid, 'border': !formData.emailValid }"
              @input="validateEmail" required class="px-3 py-2 rounded-md w-full" />
            <p class="text-sky-100">{{ formData.email.length }} / 80 caractères</p>
          </div>

          <!-- TELEPHONE -->
          <div class="flex flex-col mb-2 rounded w-full">
            <label for="phone" ref="phone" class="text-sky-100">
              <fa class="text-sky-100 text-base" icon="phone" /> Téléphone:
            </label>
            <input type="tel" id="phone" v-model="formData.phone" placeholder="Entrez votre numéro de téléphone"
              maxlength="12" @input="validatePhoneNumber" class="px-3 py-2 rounded-md w-full" />
            <p class="text-sky-900">null</p>
          </div>
        </div>


        <!-- BUDGET -->
        <div class="bg-sky-900 mb-2 p-5 mx-auto rounded gap-5 md:flex">

          <div class="w-full md:w-1/2">
            <div class="flex flex-col mb-2 rounded w-full">
              <label for="budget" class="text-sky-100">
                <fa class="text-sky-100 text-base" icon="coins" /> Fourchette de valeur souhaitée:
              </label>
              <select id="budget" v-model="formData.budget" class="px-3 py-2 rounded-md w-full">
                <option value="">Sélectionnez une fourchette de valeur souhaitée</option>
                <option value="50000-100000">De 50,000 € à 100,000 €</option>
                <option value="100000-150000">De 100,000 € à 150,000 €</option>
                <option value="150000-200000">De 150,000 € à 200,000 €</option>
                <option value="200000-250000">De 200,000 € à 250,000 €</option>
                <option value="250000-300000">De 250,000 € à 300,000 €</option>
                <option value="300000-500000">De 300,000 € à 500,000 €</option>
                <option value="500000-1000000">De 500,000 € à 1,000,000 €</option>
                <option value="1000000+">1,000,000 € et plus</option>
              </select>
            </div>
          </div>

          <!-- CHOIX DE PRISE DE CONTACT -->
          <div class="flex flex-col mb-2 rounded w-full md:w-1/2">
            <label for="budget" class="text-sky-100">
              <fa class="text-sky-100 text-base" icon="comments" /> Comment voulez-vous être contacté:
            </label>
            <div>
              <label for="contactByEmail" class="text-sky-100 flex items-center mb-2">
                <input type="checkbox" id="contactByEmail" v-model="formData.contactByEmail"
                  class="form-checkbox h-5 w-5 text-sky-400" />
                <p class="ml-2">Par mail</p>
              </label>
              <label for="contactByPhone" class="text-sky-100 flex items-center">
                <input type="checkbox" id="contactByPhone" v-model="formData.contactByPhone"
                  class="form-checkbox h-5 w-5 text-sky-400" />
                <p class="ml-2">Par téléphone</p>
              </label>
            </div>
          </div>

        </div>

        <!-- TEXT AREA -->
        <div class="flex flex-col mb-2 bg-sky-900 p-5 rounded">
          <label for="message" class="text-sky-100">
            <fa class="text-sky-100 text-base" icon="message" /> Message:
          </label>
          <textarea id="message" v-model="formData.message" placeholder="Écrivez votre message ici" maxlength="250"
            class="pt-2 px-3 py-10 rounded-md"></textarea>
          <p class="text-sky-100">{{ formData.message.length }} / 250 caractères</p>
        </div>

        <div class="flex flex-col items-center">
      <div class="flex flex-col lg:flex-row lg:justify-between justify-center lg:w-4/5">
        <ButtonPreviousStep @click="goToPreviousStep('AddressComp')" />
        <!-- SOUMISSION DU FORMULAIRE -->
        <button type="submit"
          class="relative overflow-hidden inline-flex items-center font-semibold text-sm text-sky-100 bg-orange-600 border-2 border-orange-600 py-2 px-4 my-5 rounded duration-100 group"
          @click="validateForm, submitForm" :disabled="loading">
          <span
            class="absolute inset-0 bg-sky-900 opacity-0 group-hover:opacity-100 transform scale-0 origin-center transition-transform duration-300 group-hover:scale-100"></span>
          <span
            class="absolute inset-0 bg-sky-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"></span>
          <span class="relative z-10">
            <span class="ml-2" v-if="!loading">
              <fa class="iconBtn" icon="envelope" /> Envoyer votre demande
            </span>
            <span class="ml-2" v-else>Demande en cours...</span>
          </span>
          <span class="w-5 h-5 ml-2 -mr-1 text-white animate-spin" v-if="loading">
            <svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
          </span>
        </button>
      </div>
    </div>

      </form>
    </div>

  </div>
</template>
  


<style>
.invalid-border {
  background-color: #ffffff22;
  border: solid 2px red;
}
</style>



<script>
import ButtonPreviousStep from './ButtonPreviousStep.vue';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default {
  name: "ContactComp",

  data() {
    return {
      title: "Formulaire de contact",
      txt: "Veuillez nous indiquer vos coordonnées pour que nous puissions vous recontacter rapidement",
      
      formData: {
        firstName: "",
        firstNameValid: false,
        lastName: "",
        lastNameValid: false,
        email: "",
        emailValid: false,
        phone: "",
        budget: "",
        contactByEmail: false,
        contactByPhone: false,
        message: "",
      },
      formSubmitted: false,
      showIcon: false,
      successMessage: "Merci pour votre demande. Nous reviendrons vers vous rapidement !",
      successMessagePDF: "Télécharger le détail",

      loading: false,
    };
  },

  components: {
      ButtonPreviousStep,
    },

  props: {
    purchaseOrEstimateSelected: String,
    houseOrBuildingTitle: String,
    houseOrBuildingSelected: String,
    homeTypeTitle: String,
    homeTypeSelected: String,

    dataTitle: String,
    dataHouseArea: String,
    dataGardenArea: String,
    dataYear: String,
    dataRoomsNumber: String,
    dataBedroomNumber: String,
    dataBathroomNumber: String,

    amenitiesTitle: String,
    amenitiesCheckData: Object,
    amenitiesChecks: Object,

    fundingTitle: String,
    fundingCheckData: Object,
    fundingChecks: Object,

    addressNumber: String,
    addressStreet: String,
    addressPostalCode: String,
    addressCity: String,
    addressDepartment: String,
    addressRegion: String,
    addressCountry: String,
  },

  methods: {
      // BOUTON PREVIOUS
    goToPreviousStep(selectedComponent) {
        this.$emit("change-component", selectedComponent);
        this.scrollToTop();
      },

      
    submitForm() {
      localStorage.clear();
      
      this.loading = true;
      setTimeout(() => {

        this.formSubmitted = true;
        this.successMessage;
        this.successMessagePDF;
        this.showIcon = true;
        this.scrollToTop();
                setTimeout(() => {
      }, 100);

        this.loading = false;
      }, 1000);
    },

    validateFirstName() {
      this.formData.firstNameValid = this.formData.firstName !== '';
      this.formData.firstNameValid = this.formData.firstName.length > 0 && this.formData.firstName.length <= 50;
    },

    validateLastName() {
      this.formData.lastNameValid = this.formData.lastName !== '';
      this.formData.lastNameValid = this.formData.lastName.length > 0 && this.formData.lastName.length <= 50;
    },

    validateEmail() {
      const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      this.formData.emailValid = emailRegex.test(this.formData.email);
      this.formData.emailValid = this.formData.email.length > 0 && this.formData.email.length <= 80;
    },

    validatePhoneNumber() {
      this.formData.phone = this.formData.phone.replace(/\D/g, '');
    },

    validateMessage() {
      this.formData.message = this.formData.message.length > 0 && this.formData.message.length <= 250;
    },

    validateForm() {
      // Valide les champs requis
      this.validateFirstName();
      this.validateLastName();
      this.validateEmail();

      // Applique la classe invalid-border aux champs invalides
      if (!this.formData.firstNameValid) {
        this.$refs.firstName.classList.add('invalid-border');
      } else {
        this.$refs.firstName.classList.remove('invalid-border');
      }

      if (!this.formData.lastNameValid) {
        this.$refs.lastName.classList.add('invalid-border');
      } else {
        this.$refs.lastName.classList.remove('invalid-border');
      }

      if (!this.formData.emailValid) {
        this.$refs.email.classList.add('invalid-border');
      } else {
        this.$refs.email.classList.remove('invalid-border');
      }

      // Empêche l'envoi du form si l'un des champs requis est invalide
      if (
        !this.formData.firstNameValid ||
        !this.formData.lastNameValid ||
        !this.formData.emailValid
      ) {
        return;
      }
    },

    scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },



    generatePDF() {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [210, 297],
      });

      // COORDONNÉES
      doc.addImage('/Cosi-Immo-Logo.png', 'PNG', 15, 5, 88.75, 35.5);
      doc.setFontSize(11);
      doc.text('C.O.S.I.', 120, 20);
      doc.text('Compagnie de service en immobilier', 120, 25);
      doc.text('53 rue Ancienne', 120, 30);
      doc.text('CH-1227 Carouge', 120, 35);
      doc.text('Tel: +41 22 700 39 30', 120, 40);

      // DATE DE CRÉATION
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1; // Les mois sont indexés de 0 à 11
      const year = today.getFullYear();
      const newdat = "Date : " + day + '/' + month + '/' + year;
      doc.setFontSize(11);
      doc.text(120, 50, newdat);


      // Créer un tableau de style avec autotable
      const tableData = [];
      // Ajoutez des entrées de tableau au format [libellé, valeur]
      tableData.push(['DÉTAILS DE VOTRE DEMANDE', ``]);
      tableData.push(['']);
      tableData.push(['Acheter ou faire estimer', this.purchaseOrEstimateSelected]);
      tableData.push([`${this.houseOrBuildingTitle}`, `${this.houseOrBuildingSelected}`]);
      tableData.push([`${this.homeTypeTitle}`, `${this.homeTypeSelected}`]);

      tableData.push(['']);
      tableData.push([this.dataTitle]);
      tableData.push(['Surface habitable :', this.dataHouseArea || 'Non renseigné']);
      tableData.push(['Surface terrain :', this.dataGardenArea || 'Non renseigné']);
      tableData.push(['Année de construction :', this.dataYear || 'Non renseigné']);
      tableData.push(['Nombre de pièces :', this.dataRoomsNumber || 'Non renseigné']);
      tableData.push(['Nombre de chambres :', this.dataBedroomNumber || 'Non renseigné']);
      tableData.push(['Nombre de salles d\'eau :', this.dataBathroomNumber || 'Non renseigné']);

      tableData.push(['']);
      tableData.push([this.amenitiesTitle]);
      Object.entries(this.amenitiesCheckData).forEach(([key, value]) => {
      console.log(key);
      tableData.push([value.title, this.amenitiesChecks[value.id] ? "Oui" : "Non"])
      });

      tableData.push(['']);
      tableData.push([this.fundingTitle, ``]);
      Object.entries(this.fundingCheckData).forEach(([key, value]) => {
        if (key === "acquisition") {
          tableData.push([value.title, this.fundingChecks[key] === "" ? "Non renseigné" : this.fundingChecks[key]])
        } else {
          tableData.push([value.title, this.fundingChecks[key] ? "Oui" : "Non"])
        }
      });

      tableData.push(['']);
      tableData.push(['Adresse du bien', ``]);
      tableData.push(['Numéro :', this.addressNumber]);
      tableData.push(['Route :', this.addressStreet]);
      tableData.push(['Code postal :', this.addressPostalCode]);
      tableData.push(['Ville :', this.addressCity]);
      tableData.push(['Département :', this.addressDepartment]);
      tableData.push(['Région :', this.addressRegion]);
      tableData.push(['Pays :', this.addressCountry]);

      tableData.push(['']);
      tableData.push(['Coordonnées client', ``]);
      tableData.push(['Nom : ', this.formData.firstName]);
      tableData.push(['Prénom :', this.formData.lastName]);
      tableData.push(['Email :', this.formData.email]);
      tableData.push(['Téléphone :', this.formData.phone]);
      tableData.push(['Fourchette de valeur souhaitée :', this.formData.budget]);
      tableData.push(['Contact par mail :', this.formData.contactByEmail ? 'Oui' : 'Non']);
      tableData.push(['Contact par téléphone :', this.formData.contactByPhone ? 'Oui' : 'Non']);
      tableData.push(['Message :', this.formData.message]); 

      const pageHeight = 297; // Hauteur de la page
      const startY = 70; // Position de départ pour la première partie du tableau

      // Vérifie si la première partie du tableau dépasse la fin de la page
      if (startY + tableData.length * 10 > pageHeight) {
        // Si oui, divise le tableau en 2 parties
        // const halfIndex = Math.ceil(tableData.length / 1.4);
        const halfIndex = tableData.findIndex(row => row[0] === this.fundingTitle);
        const firstPart = tableData.slice(0, halfIndex);
        const secondPart = tableData.slice(halfIndex);
        doc.autoTable({
          body: firstPart,
          startY,
          margin: { top: 20, left: 20, right: 20, bottom: 10 },
          theme: 'striped',
          styles: {
            fontSize: 11,
            lineColor: [192, 192, 192],
            lineWidth: 0.2,
            cellPadding: 2,
          },
          columnStyles: {
            0: { fontStyle: 'bold' }, // Colonne de libellé en gras
          },
        });

        // Ajoute une nouvelle page pour la deuxième partie du tableau
        doc.addPage();
        doc.autoTable({
          body: secondPart,
          startY: 20, // Commence à partir du haut de la deuxième page
          margin: { top: 20, left: 20, right: 20, bottom: 10 },
          theme: 'striped',
          styles: {
            fontSize: 11,
            lineColor: [192, 192, 192],
            lineWidth: 0.2,
            cellPadding: 2,
          },
          columnStyles: {
            0: { fontStyle: 'bold' },
          },
        });
      } else {
        doc.autoTable({
          body: tableData,
          startY,
          margin: { top: 20, left: 20, right: 20, bottom: 10 },
          theme: 'striped',
          styles: {
            fontSize: 11,
            lineColor: [192, 192, 192],
            lineWidth: 0.2,
            cellPadding: 2,
          },
          columnStyles: {
            0: { fontStyle: 'bold' },
          },
        });
      }

      doc.setPage(1);
      doc.text('1/2', 200, 280);
      doc.setPage(2);
      doc.text('2/2', 200, 280);

      doc.save('details.pdf');
    }


  },
};
</script>
