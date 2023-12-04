<template>
    <div class="w-full min-h-screen bg-sky-950">

        <div class="flex flex-col w-full mx-auto items-center">
            <h1 class="font-bold text-xl uppercase text-sky-100 text-center mb-5 mt-5 mx-1 md:text-left sm:text-center py-2 border-b border-t border-orange-600">{{ titleEval }}</h1>
            <h2 class="font-bold text-base uppercase text-sky-100 text-center mb-5 mx-1 md:text-left sm:text-center">{{ subtitlePurchaseOrEstimate }}</h2>


            <div class="showComponents w-11/12 max-w-5xl flex flex-col items-center">

                <div v-if="selectedComponent === 'PurchaseOrEstimateComp'">
                    <PurchaseOrEstimateComp
                        v-bind:PurchaseOrEstimateChoice="PurchaseOrEstimateChoice"
                        v-on:change-subtitle="updateSubtitlePurchaseOrEstimate"
                        v-on:update-title="updateHouseOrBuildingTitle"
                        v-on:purchase-estimate-selected="updatePurchaseOrEstimateChoice"
                        v-on:change-component="changeComponent" />
                </div>

                <div v-if="selectedComponent === 'HouseOrBuildingComp'">
                    <HouseOrBuildingComp
                        v-bind:homeChoice="homeChoice" 
                        v-on:update-title="updateTypeTitle"
                        v-on:choice-selected="updateHouseOrBuildingChoice" 
                        v-on:change-component="changeComponent" />
                </div>

                <div v-if="selectedComponent === 'HouseTypeComp'">
                    <HouseTypeComp
                        v-bind:homeTypeChoice="homeTypeChoice" 
                        v-on:update-title="updateDataTitle"
                        v-on:home-type-selected="updateHomeTypeChoice" 
                        v-on:change-component="changeComponent" />
                </div>

                <div v-if="selectedComponent === 'BuildingTypeComp'">
                    <BuildingTypeComp
                        v-bind:homeTypeChoice="homeTypeChoice" 
                        v-on:update-title="updateDataTitle"
                        v-on:home-type-selected="updateHomeTypeChoice" 
                        v-on:change-component="changeComponent" />
                </div>

                <div v-if="selectedComponent === 'DataHouseComp'">
                    <DataHouseComp
                        v-on:update-title="updateAmenitiesTitle"
                        v-on:update-house-area="updateDataHouseAreaChoice"
                        v-on:update-garden-area="updateDataGardenAreaChoice"
                        v-on:update-year="updateDataYearChoice"
                        v-on:update-rooms-number="updateRoomsNumberChoice"
                        v-on:update-bedroom-number="updateBedroomNumberChoice"
                        v-on:update-bathroom-number="updateBathroomNumberChoice"
                        v-on:change-component="changeComponent" />
                </div>

                <div v-if="selectedComponent === 'DataBuildingComp'">
                    <DataBuildingComp
                        v-on:update-title="updateAmenitiesTitle"
                        v-on:update-house-area="updateDataHouseAreaChoice"
                        v-on:update-year="updateDataYearChoice"
                        v-on:update-rooms-number="updateRoomsNumberChoice"
                        v-on:update-bedroom-number="updateBedroomNumberChoice"
                        v-on:update-bathroom-number="updateBathroomNumberChoice"
                        v-on:change-component="changeComponent" />
                </div>

                <div v-if="selectedComponent === 'AmenitiesComp'">
                    <AmenitiesComp
                        :HouseOrBuildingSelectedChoice="HouseOrBuildingSelectedChoice"
                        v-on:update-title="updateFundingTitle"
                        v-on:update-amenities-checkbox="updateAmenitiesChecks"
                        v-bind:amenitiesCheckData="amenitiesCheckData"
                        v-on:change-component="changeComponent" />
                </div>


                <div v-if="selectedComponent === 'FundingComp'">
                    <FundingComp
                    :HouseOrBuildingSelectedChoice="HouseOrBuildingSelectedChoice"
                        v-on:update-title="updateAddressTitle"
                        v-on:update-funding-checkbox="updateFundingChecks"
                        v-on:select-funding="updateFundingSelect"
                        v-bind:fundingCheckData="fundingCheckData"
                        v-on:change-component="changeComponent" />
                </div>

                <div class="w-full" v-if="selectedComponent === 'AddressComp'">
                    <AddressComp
                        v-on:address-selected="updateAddressChoice"
                        v-on:change-component="changeComponent" />
                </div>

                <div v-if="selectedComponent === 'ContactComp'">
                    <ContactComp
                    v-on:contact-selected="updateContactChoice"

                    :purchase-or-estimate-selected="PurchaseOrEstimateSelectedChoice"
                    :house-or-building-title="HouseOrBuildingTitle"
                    :house-or-building-selected="HouseOrBuildingSelectedChoice"
                    :home-type-title="homeTypeTitle"
                    :home-type-selected="homeTypeSelectedChoice"

                    :data-title="dataTitle"
                    :data-house-area="dataHouseAreaChoice"
                    :data-garden-area="dataGardenAreaChoice"
                    :data-year="dataYearChoice"
                    :data-rooms-number="dataRoomsNumberChoice"
                    :data-bedroom-number="dataBedroomNumberChoice"
                    :data-bathroom-number="dataBathroomNumberChoice"

                    :amenities-title="amenitiesTitle"
                    :amenitiesCheckData="amenitiesCheckData"
                    :amenitiesChecks="amenitiesChecks"

                    :funding-title="fundingTitle"
                    :fundingCheckData="fundingCheckData"
                    :fundingChecks="fundingChecks"

                    :address-number="addressNumber"
                    :address-street="addressStreet"
                    :address-postal-code="addressPostalCode"
                    :address-city="addressCity"
                    :address-department="addressDepartment"
                    :address-region="addressRegion"
                    :address-country="addressCountry"

                    v-on:change-component="changeComponent"
                    />


                    <!-- TABLEAU DE DÉTAILS -->
                    <div id="detailsTable" v-if="selectedComponent === 'ContactComp'" 
                    class="bg-sky-100 p-4 rounded shadow-md max-w-3xl mt-1 mx-auto w-11/12">
                        <div class="py-2 px-4 text-center text-lg font-semibold text-sky-950">Détails de votre demande</div>


                    <!-- ACHAT OU ESTIMATION -->
                    <table id="detailsTableBuying" class="w-full table-auto border-separate border border-sky-300">
                        <tbody>
                            <tr class="bg-sky-200 flex sm:table-row flex-col sm:flex-raw">
                                <th class="py-2 px-4 text-left text-lg font-semibold text-sky-950">Acheter ou faire estimer :</th>
                                <td class="py-2 px-4 sm:text-right text-sm text-sky-900">{{ PurchaseOrEstimateSelectedChoice }}</td>
                            </tr>
                        </tbody>
                    </table>


                    <!-- CHOIX DE LOGEMENT -->
                    <table id="detailsTableAccomodation" class="w-full table-auto border-separate border border-sky-300 mt-4">
                        <tbody>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                            <th class="py-2 px-4 text-left text-lg font-semibold text-sky-950">{{ HouseOrBuildingTitle }}</th>
                            <td class="py-2 px-4 sm:text-right text-sm text-sky-900">{{ HouseOrBuildingSelectedChoice }}</td>
                        </tr>
                        </tbody>
                    </table>


                    <!-- TYPE DE MAISON OU D'APPARTEMENT -->
                    <table id="detailsTableType" class="w-full table-auto border-separate border border-sky-300 mt-4">
                        <tbody>
                        <tr class="bg-sky-200 flex sm:table-row flex-col sm:flex-raw">
                            <th class="py-2 px-4 text-left text-lg font-semibold text-sky-950">{{ homeTypeTitle }}</th>
                            <td class="py-2 px-4 sm:text-right text-sm text-sky-900">{{ homeTypeSelectedChoice }}</td>
                        </tr>
                        </tbody>
                    </table>


                    <!-- DONNÉES DE VOTRE LOGEMENT -->
                    <table id="detailsTableData" class="w-full table-auto border-separate border border-sky-300 mt-4">
                    <tbody>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                        <th class="py-2 px-4 text-left text-lg font-semibold text-sky-950">{{ dataTitle }}</th>
                        <td></td>
                        </tr>
                        <tr class="bg-sky-200 flex sm:table-row flex-col sm:flex-raw">
                        <td class="py-2 px-4 text-left font-semibold  text-sky-900">Surface habitable :</td>
                        <td class="py-2 px-4 sm:text-right text-sky-900">{{ dataHouseAreaChoice || 'Non renseignée' }}</td>
                        </tr>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                        <td class="py-2 px-4 text-left font-semibold  text-sky-900">Surface terrain :</td>
                        <td class="py-2 px-4 sm:text-right text-sky-900">{{ dataGardenAreaChoice || 'Non renseignée' }}</td>
                        </tr>
                        <tr class="bg-sky-200 flex sm:table-row flex-col sm:flex-raw">
                        <td class="py-2 px-4 text-left font-semibold  text-sky-900">Année de construction :</td>
                        <td class="py-2 px-4 sm:text-right text-sky-900">{{ dataYearChoice || 'Non renseignée' }}</td>
                        </tr>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                        <td class="py-2 px-4 text-left font-semibold  text-sky-900">Nombre de pièces :</td>
                        <td class="py-2 px-4 sm:text-right text-sky-900">{{ dataRoomsNumberChoice || 'Non renseigné' }}</td>
                        </tr>
                        <tr class="bg-sky-200 flex sm:table-row flex-col sm:flex-raw">
                        <td class="py-2 px-4 text-left font-semibold  text-sky-900">Nombre de chambres :</td>
                        <td class="py-2 px-4 sm:text-right text-sky-900">{{ dataBedroomNumberChoice || 'Non renseigné' }}</td>
                        </tr>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                        <td class="py-2 px-4 text-left font-semibold  text-sky-900">Nombre de salles d'eau :</td>
                        <td class="py-2 px-4 sm:text-right text-sky-900">{{ dataBathroomNumberChoice || 'Non renseigné' }}</td>
                        </tr>
                    </tbody>
                    </table>


                    <!-- COMMODITÉS ET AGRÉMENTS -->
                    <table id="detailsTableAmenities" class="w-full table-auto border-separate border border-sky-300 mt-4">
                        <tbody>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                            <th class="py-2 px-4 text-left text-lg font-semibold text-sky-950">{{ amenitiesTitle }}</th>
                            <td></td>
                        </tr>
                        <tr v-for="(value, idBox, index) in amenitiesChecks" :key="idBox"
                        :class="index % 2 === 0 ? 'bg-sky-200' : 'bg-sky-100'"
                        class="flex sm:table-row flex-col sm:flex-raw">
                            <td class="py-2 px-4 text-left font-semibold text-sky-900">{{ amenitiesCheckData[idBox].title }}</td>
                            <td class="py-2 px-4 sm:text-right text-sky-900">{{ value ? 'Oui' : 'Non' }}</td>
                        </tr>
                        </tbody>
                    </table>


                    <!-- FINANCEMENT -->
                    <table id="detailsTableFunding" class="w-full table-auto border-separate border border-sky-300 mt-4">
                        <tbody>
                            <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                                <th class="py-2 px-4 text-left text-lg font-semibold text-sky-950">{{ fundingTitle }}</th>
                                <td></td>
                            </tr>
                            <tr v-for="(value, idBox, index) in fundingChecks" :key="idBox"
                                :class="index % 2 === 0 ? 'bg-sky-200' : 'bg-sky-100'"
                                class="flex sm:table-row flex-col sm:flex-raw">
                                <td class="py-2 px-4 text-left font-semibold text-sky-900">{{ fundingCheckData[idBox].title }}</td>
                                <td class="py-2 px-4 sm:text-right text-sky-900">
                                    {{ idBox !== 'acquisition' ? value === true ? 'Oui' : 'Non' : value || 'Non renseigné' }}
                                </td>
                            </tr>
                        </tbody>
                    </table>



                    <!-- ADRESSE DU BIEN -->
                    <table id="detailsTableAddress" class="w-full table-auto border-separate border border-sky-300 mt-4">
                        <tbody>
                        <tr class="bg-sky-200 flex sm:table-row flex-col sm:flex-raw">
                            <th class="py-2 px-4 text-left text-lg font-semibold text-sky-950">Adresse du bien</th>
                            <td></td>
                        </tr>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                            <td class="py-2 px-4 text-left font-semibold  text-sky-900">Numéro :</td>
                            <td class="py-2 px-4 sm:text-right text-sky-900">{{ addressNumber }}</td>
                        </tr>
                        <tr class="bg-sky-200 flex sm:table-row flex-col sm:flex-raw">
                            <td class="py-2 px-4 text-left font-semibold  text-sky-900">Route :</td>
                            <td class="py-2 px-4 sm:text-right text-sky-900">{{ addressStreet }}</td>
                        </tr>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                            <td class="py-2 px-4 text-left font-semibold  text-sky-900">Code postal :</td>
                            <td class="py-2 px-4 sm:text-right text-sky-900">{{ addressPostalCode }}</td>
                        </tr>
                        <tr class="bg-sky-200 flex sm:table-row flex-col sm:flex-raw">
                            <td class="py-2 px-4 text-left font-semibold  text-sky-900">Ville :</td>
                            <td class="py-2 px-4 sm:text-right text-sky-900">{{ addressCity }}</td>
                        </tr>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                            <td class="py-2 px-4 text-left font-semibold  text-sky-900">Département :</td>
                            <td class="py-2 px-4 sm:text-right text-sky-900">{{ addressDepartment }}</td>
                        </tr>
                        <tr class="bg-sky-200 flex sm:table-row flex-col sm:flex-raw">
                            <td class="py-2 px-4 text-left font-semibold  text-sky-900">Région :</td>
                            <td class="py-2 px-4 sm:text-right text-sky-900">{{ addressRegion }}</td>
                        </tr>
                        <tr class="bg-sky-100 flex sm:table-row flex-col sm:flex-raw">
                            <td class="py-2 px-4 text-left font-semibold  text-sky-900">Pays :</td>
                            <td class="py-2 px-4 sm:text-right text-sky-900">{{ addressCountry }}</td>
                        </tr>
                        </tbody>
                    </table>

                    </div>
                    <!-- FIN DE TABLEAU DE DÉTAILS -->

                </div>

            </div>

        </div>
    </div>
</template>



<script>
import PurchaseOrEstimateComp from './EvalAppChilds/PurchaseOrEstimateComp.vue';
import HouseOrBuildingComp from './EvalAppChilds/HouseOrBuildingComp.vue';

import HouseTypeComp from './EvalAppChilds/HouseTypeComp.vue';
import BuildingTypeComp from './EvalAppChilds/BuildingTypeComp.vue';

import DataHouseComp from './EvalAppChilds/DataHouseComp.vue';
import DataBuildingComp from './EvalAppChilds/DataBuildingComp.vue';

import AmenitiesComp from './EvalAppChilds/AmenitiesComp.vue';
import FundingComp from './EvalAppChilds/FundingComp.vue';

import AddressComp from './EvalAppChilds/AddressComp.vue';
import ContactComp from './EvalAppChilds/ContactComp.vue';

export default {
    name: "EvalApp",

    data() {
        return {
            subtitlePurchaseOrEstimate: "Estimation ou vente de votre bien immobilier",

            ShowPurchaseOrEstimate: true,

            PurchaseOrEstimateChoice: ["Achat", "Estimation"],
            homeChoice: ["Maison", "Appartement"],
            homeTypeChoice: [["Individuelle", "Jumelée", "Contiguë", "Contiguë en pignon", "Autre"],
            ["Attique", "Combles", "Duplex", "Rez de jardin", "Traversant", "Autre"]],
            conditionChoice: ["À rénover", "Bon état", "Neuf / Rénové"],

            HouseOrBuildingTitle: null,
            homeTypeTitle: null,
            dataTitle: null,
            amenitiesTitle: null,
            fundingTitle: null,
            conditionTitle: null,
            addressTitle: null,
            contactTitle: null,

            PurchaseOrEstimateSelectedChoice: null,
            HouseOrBuildingSelectedChoice: null,
            homeTypeSelectedChoice: null,

            dataHouseAreaChoice: null,
            dataGardenAreaChoice: null,
            dataYearChoice: null,
            dataRoomsNumberChoice: null,
            dataBedroomNumberChoice: null,
            dataBathroomNumberChoice: null,

            amenitiesCheckData: {
            "garage-box": { icon: "warehouse", id:"garage-box", title: "Garage / Box", checkboxes: [{ checked: false }] },
            "parking-int": { icon: "parking", id:"parking-int", title: "Parking intérieur", checkboxes: [{ checked: false }] },
            "parking-ext": { icon: "parking", id:"parking-ext", title: "Parking extérieur", checkboxes: [{ checked: false }] },
            "cave": { icon: "stairs", id:"cave", title: "Cave", checkboxes: [{ checked: false }] },
            "balcon-terrasse": { icon: "th-large", id:"balcon-terrasse", title: "Balcon / Terrasse", checkboxes: [{ checked: false }] },
            },
            amenitiesChecks:  {
                "garage-box": false,
                "parking-int": false,
                "parking-ext": false,
                "cave": false,
                "balcon-terrasse": false,
                },

            fundingCheckData: {
                "budget": { icon: "handshake", id:"budget", title: "Avez-vous rencontré votre banquier / conseiller pour déterminer votre budget d'acquisition ?", checkboxes: [{ checked: false }] },
                "vendre": { icon: "file-signature", id:"vendre", title: "Devez-vous vendre un bien immobilier pour acheter ?", checkboxes: [{ checked: false }] },
                "estimation": { icon: "certificate", id:"estimation", title: "Souhaitez-vous une estimation gratuite de votre logement ?", checkboxes: [{ checked: false }] },
                "acquisition": { icon: "piggy-bank", id:"acquisition", title: "Quel est votre enveloppe d'acquisition ?",
                options: [
                { label: "20 000€ - 250 000€", value: "20 000€ - 250 000€" },
                { label: "250 000€ - 300 000€", value: "250 000€ - 300 000€" },
                { label: "300 000€ - 350 000€", value: "300 000€ - 350 000€" },
                { label: "350 000€ - 400 000€", value: "350 000€ - 400 000€" },
                { label: "400 000€ - 450 000€", value: "400 000€ - 450 000€" },
                { label: "450 000€ - 500 000€", value: "450 000€ - 500 000€" },
                { label: "500 000€ - 550 000€", value: "500 000€ - 550 000€" },
                { label: "550 000€ - 600 000€", value: "550 000€ - 600 000€" },
                { label: "600 000€ - 650 000€", value: "600 000€ - 650 000€" },
                { label: "650 000€ - 700 000€", value: "650 000€ - 700 000€" },
                { label: "700 000€ - 750 000€", value: "700 000€ - 750 000€" },
                { label: "750 000€ - 800 000€", value: "750 000€ - 800 000€" },
                { label: "800 000€ - 850 000€", value: "800 000€ - 850 000€" },
                { label: "850 000€ - 900 000€", value: "850 000€ - 900 000€" },
                { label: "900 000€ - 950 000€", value: "900 000€ - 950 000€" },
                { label: "950 000€ - 1 000 000€", value: "950 000€ - 1 000 000€" },
                { label: "1 000 000€ - 1 050 000€", value: "1 000 000€ - 1 050 000€" },
                { label: "1 050 000€ - 1 100 000€", value: "1 050 000€ - 1 100 000€" },
                { label: "1 100 000€ - 1 150 000€", value: "1 100 000€ - 1 150 000€" },
                { label: "1 150 000€ - 1 200 000€", value: "1 150 000€ - 1 200 000€" },
                { label: "1 200 000€ +", value: "1 200 000€ +" }
                ],},
            },
            fundingChecks:  {
                "budget": false,
                "vendre": false,
                "estimation": false,
                "acquisition": "",
            },

            addressSelectedChoice: null,
            addressNumber: "",
            addressStreet: "",
            addressCity: "",
            addressDepartment: "",
            addressRegion: "",
            addressCountry: "",
            addressPostalCode: "",

            contactSelectedChoice: null,

            selectedComponent: 'PurchaseOrEstimateComp'
        }
    },

    props: {
        titleEval: String,
    },

    components: {
        "PurchaseOrEstimateComp": PurchaseOrEstimateComp,
        "HouseOrBuildingComp": HouseOrBuildingComp,
        "HouseTypeComp": HouseTypeComp,
        "BuildingTypeComp": BuildingTypeComp,
        "DataHouseComp": DataHouseComp,
        "DataBuildingComp": DataBuildingComp,
        "AmenitiesComp": AmenitiesComp,
        "FundingComp": FundingComp,
        "AddressComp": AddressComp,
        "ContactComp": ContactComp,
    },

    methods: {
        updateSubtitlePurchaseOrEstimate(newTitle) {
            this.subtitlePurchaseOrEstimate = newTitle;
        },
        updateHouseOrBuildingTitle(newTitle) {
            this.HouseOrBuildingTitle = newTitle;
        },
        updateTypeTitle(newTitle) {
            this.homeTypeTitle = newTitle;
        },
        updateDataTitle(newTitle) {
            this.dataTitle = newTitle;
        },
        updateAmenitiesTitle(newTitle) {
            this.amenitiesTitle = newTitle;
        },
        updateFundingTitle(newTitle) {
            this.fundingTitle = newTitle;
        },
        updateAddressTitle(newTitle) {
            this.addressTitle = newTitle;
        },
        updateContactTitle(newTitle) {
            this.contactTitle = newTitle;
        },


        updatePurchaseOrEstimateChoice(choice) {
            this.PurchaseOrEstimateSelectedChoice = choice;
        },
        updateHouseOrBuildingChoice(choice) {
            this.HouseOrBuildingSelectedChoice = choice;
        },
        updateHomeTypeChoice(choice) {
            this.homeTypeSelectedChoice = choice;
        },
        updateDataHouseAreaChoice(choice) {
            this.dataHouseAreaChoice = choice;
        },
        updateDataGardenAreaChoice(choice) {
            this.dataGardenAreaChoice = choice;
        },
        updateDataYearChoice(choice) {
            this.dataYearChoice = choice;
        },
        updateRoomsNumberChoice(choice) {
            this.dataRoomsNumberChoice = choice;
        },
        updateBedroomNumberChoice(choice) {
            this.dataBedroomNumberChoice = choice;
        },
        updateBathroomNumberChoice(choice) {
            this.dataBathroomNumberChoice = choice;
        },


        updateAmenitiesChecks (value, id) {
            this.amenitiesChecks[id]= value
        },

        
        updateFundingChecks (value, id) {
            this.fundingChecks[id]= value
            console.log(value);
        },
        updateFundingSelect (value) {
            this.fundingChecks["acquisition"] = value
            console.log(value);
        },


        changeComponent(selectedComponent) {
            this.selectedComponent = selectedComponent;
            this.ShowPurchaseOrEstimateComp = !this.ShowPurchaseOrEstimateComp;           
        },


// ---------------------------
    updateAddressChoice(data) {
    this.addressSelectedChoice = data.formatted_address;

        const addressDetails = {
            number: "",
            street: "",
            city: "",
            department: "",
            region: "",
            country: "",
            postalCode: ""
        };

        if (data.address_components) {
            data.address_components.forEach(component => {
            const types = component.types;

            if (types.includes('street_number')) {
                addressDetails.number = component.long_name;
            } else if (types.includes('route')) {
                addressDetails.street = component.long_name;
            } else if (types.includes('locality')) {
                addressDetails.city = component.long_name;
            } else if (types.includes('administrative_area_level_2')) {
                addressDetails.department = component.long_name;
            } else if (types.includes('administrative_area_level_1')) {
                addressDetails.region = component.long_name;
            } else if (types.includes('country')) {
                addressDetails.country = component.long_name;
            } else if (types.includes('postal_code')) {
                addressDetails.postalCode = component.long_name;
            }
            });
        }
            this.addressNumber = addressDetails.number;
            this.addressStreet = addressDetails.street;
            this.addressPostalCode = addressDetails.postalCode;
            this.addressCity = addressDetails.city;
            this.addressDepartment = addressDetails.department;
            this.addressRegion = addressDetails.region;
            this.addressCountry = addressDetails.country;
    },
// ---------------------------

        updateContactChoice(data) {
            this.contactSelectedChoice = data;
        },

    }
}

</script>
