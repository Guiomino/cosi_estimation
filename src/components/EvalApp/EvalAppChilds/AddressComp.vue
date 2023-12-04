<template>
    <div class="flex flex-col gap-5 w-full">
      
      <div class="flex flex-col mx-auto">
        <h2 class="font-semibold text-2xl text-sky-100 mb-2 md:text-left sm:text-center">
          <fa class="iconBtn" icon="circle-right" /> {{ title }}
        </h2>
        <p class="font-medium text-sm text-sky-100 md:text-left sm:text-center">{{ txt }}</p>
      </div>

      <div class="flex flex-col gap-5 mx-auto mb-10 w-full">
        
        <div class="w-full flex items-center rounded h-[100px] bg-sky-100 shadow-[0px_4px_20px_rgba(0,0,0,0.66)]">
          <div class="w-[80px] h-[100px] flex justify-center items-center border-r border-orange-600">
            <fa class="text-sky-950 text-5xl" icon="map-location-dot" />
          </div>
          <div class="w-full flex flex-col justify-center ml-2 gap-3">
            <div class="flex font-bold text-xs text-sky-950">Adresse : 
            </div>
            <div>
              <input
                type="search"
                placeholder="Recherchez une adresse"
                ref="addressInput"
                v-model="userInputValue"
                class="w-11/12 border rounded-sm border-sky-950 text-sm p-1"
                v-on:input="resetInput"/>
              <div v-if="missingAddressError" class="font-bold text-xs text-red-600"> Merci de renseigner une adresse</div>
            </div>
          </div>
        </div>

        <div ref="mapContainer" class="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]"></div>
      </div>
  
      <div class="flex flex-col items-center">
        <div v-if="missingAddressError" class="font-bold text-xs text-white"> Merci de renseigner une adresse</div>
        <div class="w-4/5 border-t border-orange-600"></div>
        <div class="flex flex-col lg:flex-row lg:justify-between justify-center lg:w-4/5">
          <ButtonPreviousStep v-on:click="selectConditionHousing('FundingComp'), scrollToTop()" />
          <ButtonNextStep v-on:click="addressPlace ? selectContact('ContactComp'): missingAddressError = true" />
        </div>
      </div>
    </div>
  </template>
  

  <script>
  import ButtonPreviousStep from './ButtonPreviousStep.vue';
  import ButtonNextStep from './ButtonNextStep.vue';
  import { ref, onMounted, getCurrentInstance } from 'vue';
  import APIKey from '../../../../APIKey.json';
  
  const APIKeyValue = APIKey.APIGoogleMapKey;
  
  export default {
    name: 'AdressComp',
  
    data() {
      return {
        title: "Adresse de votre bien immobilier",
        txt: "Renseignez l'adresse de votre bien",
        missingAddressError: false,
      }
    },
  
    setup() {
      let addressPlace = ref(null);
      const addressInput = ref('null');
      const mapContainer = ref(null);
      const userInputValue = ref('');
      const GoogleAPIlink = `https://maps.googleapis.com/maps/api/js?key=${APIKeyValue}&libraries=places&language=fr`;
      let marker = null;
  
      const emit = getCurrentInstance().emit;
  
      onMounted(() => {
        new Promise((resolve, reject) => {
          let googleScript = document.querySelector(`script[src="${GoogleAPIlink}"]`);
  
          if (!googleScript) {
            googleScript = document.createElement('script');
            googleScript.src = GoogleAPIlink;
            googleScript.async = true;
            document.head.append(googleScript);
  
            googleScript.addEventListener('error', () => {
              reject();
            });
  
            googleScript.addEventListener('load', () => {
              window.google = window.google || {};
              resolve();
            });
          } else {
            resolve();
          }
        }).then(() => {
          const mapOptions = {
            center: { lat: 46.603354, lng: 1.888334 },
            zoom: 6,
          };
  
          const map = new window.google.maps.Map(mapContainer.value, mapOptions);
  
          const autocomplete = new window.google.maps.places.Autocomplete(
            addressInput.value
          );
          autocomplete.bindTo('bounds', map);
  
          autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
  
            if (!place.geometry || !place.geometry.location) {
              return;
            }
  
            map.setCenter(place.geometry.location);
            map.setZoom(15);
  
            if (marker) {
              marker.setMap(null);
            }
  
            marker = new window.google.maps.Marker({
              map,
              position: place.geometry.location,
              draggable:true,
            });

            // RECUPERER NOUVELLE ADRESSE LORS DU DRAK DU MARKER
            marker.addListener('dragend', updateAddressOnMarkerDrag);

            function updateAddressOnMarkerDrag() {
            let newPosition = marker.getPosition();

            // Géocodification inverse
            let geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ 'location': newPosition }, function(results, status) {
              if (status === 'OK') {
                if (results[0]) {
                  let newAddress = results[0].formatted_address;

                  userInputValue.value = newAddress;

                  console.log("Nouvelle adresse : " + newAddress);
                } else {
                  console.log('Aucun résultat trouvé');
                }
              } else {
                console.log('Erreur de géocodage inverse : ' + status);
              }
            });
          }
  
            const userInput = addressInput.value.value;
            userInputValue.value = userInput;

            addressPlace.value = true
  
            emit("address-selected", place);
          });
        });
      });
  
      return {
        userInputValue,
        addressInput,
        mapContainer,
        addressPlace,
      };
    },
  
    components: {
      "ButtonPreviousStep": ButtonPreviousStep,
      "ButtonNextStep": ButtonNextStep,
    },
  
    methods: {

        inputAddressUpdate() {
            this.$emit("address-selected", this.addressInput);
        },

        selectContact(selectedComponent) {
            this.scrollToTop();
            this.$emit("change-component", selectedComponent);
        },

        resetInput() {
            this.missingAddressError = false;
        },

        selectConditionHousing(selectedComponent) {
            this.$emit("change-component", selectedComponent);
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
    }
  };
  </script>
  