<template>
    <div class="flex flex-col gap-5">

        <div class="flex flex-col mx-auto">
            <h2 class="font-semibold text-2xl text-sky-100 mb-2 md:text-left sm:text-center">
                <fa class="iconBtn" icon="circle-right" /> {{ title }}
            </h2>
            <p class="font-medium text-sm text-sky-100 md:text-left sm:text-center">{{ txt }}</p>
        </div>

        <div class="max-w-3xl mx-auto">
        <div class="flex flex-wrap justify-center gap-5 mx-10 mb-10">

            <!-- SURFACE HABITABLE -->
            <div
                class="flex justify-around items-center rounded w-[280px] h-[100px] bg-sky-100 shadow-[0px_4px_20px_rgba(0,0,0,0.66)]">
                <div class="w-[80px] h-[100px] flex justify-center items-center border-r border-orange-600">
                    <fa class="text-sky-950 text-5xl" icon="expand" />
                </div>
                <div class="w-[200px] flex flex-col justify-center ml-2 gap-3">
                    <div class="flex-col">
                        <p class="font-bold text-xs text-sky-950">{{ titleCard[0] }}</p>
                    </div>
                    <div>
                        <select v-model="houseAreaValue" v-on:change="selectHouseAreaUpdate"
                        class="w-[180px] border rounded-sm border-sky-950 p-1">
                        <option value="" disabled class="text-sky-950">choisir une surface</option>
                            <option value="70m² à 80m²">70m² à 80m²</option>
                            <option value="80m² à 100m²">80m² à 100m²</option>
                            <option value="100m² à 120m²">100m² à 120m²</option>
                            <option value="120m² à 140m²">120m² à 140m²</option>
                            <option value="140m² à 180m²">140m² à 180m²</option>
                            <option value="180+m²">180+m²</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- SURFACE TERRAIN -->
            <div 
                class="flex justify-around items-center rounded w-[280px] h-[100px] bg-sky-100 shadow-[0px_4px_20px_rgba(0,0,0,0.66)]">
                <div class="w-[80px] h-[100px] flex justify-center items-center border-r border-orange-600">
                    <fa class="text-sky-950 text-5xl" icon="tree" />
                </div>
                <div class="w-[200px] flex flex-col justify-center ml-2 gap-3">
                    <div class="flex-col">
                        <p class="font-bold text-xs text-sky-950">{{ titleCard[1] }}</p>
                    </div>
                    <div>
                        <select v-model="gardenAreaValue" v-on:change="inputGardenAreaUpdate"
                        class="w-[180px] border rounded-sm border-sky-950 p-1">
                        <option value="" disabled class="text-sky-950">choisir une surface</option>
                            <option value="10m² à 25m²">10m² à 25m²</option>
                            <option value="25m² à 50m²">25m² à 50m²</option>
                            <option value="50m² à 75m²">50m² à 75m²</option>
                            <option value="75m² à 100m²">75m² à 100m²</option>
                            <option value="100m² à 150m²">100m² à 150m²</option>
                            <option value="150m² à 200m²">150m² à 200m²</option>
                            <option value="200m² à 300m²">200m² à 300m²</option>
                            <option value="300m² à 500m²">300m² à 500m²</option>
                            <option value="500+m²">500+m²</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- ANNÉE DE CONSTRUCTION -->
            <div
                class="flex justify-around items-center rounded w-[280px] h-[100px] bg-sky-100 shadow-[0px_4px_20px_rgba(0,0,0,0.66)]">
                <div class="w-[80px] h-[100px] flex justify-center items-center border-r border-orange-600">
                    <fa class="text-sky-950 text-5xl" icon="clock-rotate-left" />
                </div>
                <div class="w-[200px] flex flex-col justify-center ml-2 gap-3">
                    <div class="flex-col">
                        <p class="font-bold text-xs text-sky-950">{{ titleCard[2] }}</p>
                    </div>
                    <div>
                        <select v-model="yearValue" v-on:change="inputYearUpdate"
                        class="w-[180px] border rounded-sm border-sky-950 p-1">
                        <option value="" disabled class="text-sky-950">choisir une période</option>
                            <option value="de 1900 à 1925">de 1900 à 1925</option>
                            <option value="de 1925 à 1950">de 1925 à 1950</option>
                            <option value="de 1950 à 1960">de 1950 à 1960</option>
                            <option value="de 1960 à 1970">de 1960 à 1970</option>
                            <option value="de 1980 à 1990">de 1980 à 1990</option>
                            <option value="de 1990 à 2000">de 1990 à 2000</option>
                            <option value="de 2000 à 2010">de 2000 à 2010</option>
                            <option value="de 2010 à 2020">de 2010 à 2020</option>
                            <option value="après 2020">après 2020</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- NOMBRE DE PIÈCES -->
            <div
                class="flex justify-around items-center rounded w-[280px] h-[100px] bg-sky-100 shadow-[0px_4px_20px_rgba(0,0,0,0.66)]">
                <div class="w-[80px] h-[100px] flex justify-center items-center border-r border-orange-600">
                    <fa class="text-sky-950 text-5xl" icon="cubes" />
                </div>
                <div class="w-[200px] flex flex-col justify-center ml-2 gap-3">
                    <div class="flex-col">
                        <p class="font-bold text-xs text-sky-950">{{ titleCard[3] }}</p>
                    </div>
                    <div>
                        <select v-model="roomsNumberValue" v-on:change="inputRoomsNumberUpdate"
                        class="w-[180px] border rounded-sm border-sky-950 p-1">
                        <option value="" disabled class="text-sky-950">choisir un nombre</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="8+">8+</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- NOMBRE DE CHAMBRES -->
            <div
                class="flex justify-around items-center rounded w-[280px] h-[100px] bg-sky-100 shadow-[0px_4px_20px_rgba(0,0,0,0.66)]">
                <div class="w-[80px] h-[100px] flex justify-center items-center border-r border-orange-600">
                    <fa class="text-sky-950 text-5xl" icon="bed" />
                </div>
                <div class="w-[200px] flex flex-col justify-center ml-2 gap-3">
                    <div class="flex-col">
                        <p class="font-bold text-xs text-sky-950">{{ titleCard[4] }}</p>
                    </div>
                    <div>
                        <select v-model="bedroomNumberValue" v-on:change="inputBedroomNumberUpdate"
                        class="w-[180px] border rounded-sm border-sky-950 p-1">
                        <option value="" disabled selected class="text-sky-950">choisir un nombre</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="5+">5+</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- NOMBRE DE SDB -->
            <div
                class="flex justify-around items-center rounded w-[280px] h-[100px] bg-sky-100 shadow-[0px_4px_20px_rgba(0,0,0,0.66)]">
                <div class="w-[80px] h-[100px] flex justify-center items-center border-r border-orange-600">
                    <fa class="text-sky-950 text-5xl" icon="shower" />
                </div>
                <div class="w-[200px] flex flex-col justify-center ml-2 gap-3">
                    <div class="flex-col">
                        <p class="font-bold text-xs text-sky-950">{{ titleCard[5] }}</p>
                    </div>
                    <div>
                        <select v-model="bathroomNumberValue" v-on:change="inputBathroomNumberUpdate"
                        class="w-[180px] border rounded-sm border-sky-950 p-1">
                        <option value="" disabled selected class="text-sky-950">choisir un nombre</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4+">4+</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
    </div>

        <div class="flex flex-col items-center">
            <div class="w-4/5 border-t border-orange-600"></div>
            <div class="flex flex-col lg:flex-row lg:justify-between justify-center lg:w-4/5">
                <ButtonPreviousStep v-on:click="selectHouseType('HouseTypeComp'), scrollToTop()" />
                <ButtonNextStep v-on:click="selectAmenities('AmenitiesComp'), scrollToTop()" />
            </div>
        </div>

    </div>
</template>


<script>
import ButtonPreviousStep from './ButtonPreviousStep.vue';
import ButtonNextStep from './ButtonNextStep.vue';

export default {
    name: "DataHouseComp",

    data() {
        return {
            title: "Données de votre maison",
            txt: "Complétez les données de votre bien immobilier",
            titleCard: ["Surface habitable : ", "Surface de terrain : ", "Année de construction : ", "Nombre de pièces : ",
                "Nombre de chambres : ", "Nombre de salles d'eau : "],

            houseAreaValue: '',
            gardenAreaValue: '',
            yearValue: '',
            roomsNumberValue: '',
            bedroomNumberValue: '',
            bathroomNumberValue: '',
        }
    },

    components: {
        "ButtonPreviousStep": ButtonPreviousStep,
        "ButtonNextStep": ButtonNextStep,
    },

    created() {
        const fieldsToLoad = [
            'houseAreaValue',
            'gardenAreaValue',
            'yearValue',
            'roomsNumberValue',
            'bedroomNumberValue',
            'bathroomNumberValue',
        ];

        for (const field of fieldsToLoad) {
            const storedValue = localStorage.getItem(field);
            if (storedValue) {
            this[field] = storedValue;
            }
        }
        window.addEventListener('beforeunload', this.clearLocalStorage);
        },
        
    beforeUnmount() {
        // Détache le gestionnaire d'événements avant de détruire le composant
        window.removeEventListener('beforeunload', this.clearLocalStorage);
        },

    methods: {
        clearLocalStorage() {
            console.log('Clearing Local Storage');
            localStorage.clear(this.fieldsToLoad);
        },

        selectHouseAreaUpdate() {
            this.$emit("update-house-area", this.houseAreaValue)
            localStorage.setItem('houseAreaValue', this.houseAreaValue);
        },
        inputGardenAreaUpdate() {
            this.$emit("update-garden-area", this.gardenAreaValue)
            localStorage.setItem('gardenAreaValue', this.gardenAreaValue);
        },
        inputYearUpdate() {
            this.$emit("update-year", this.yearValue)
            localStorage.setItem('yearValue', this.yearValue);
        },
        inputRoomsNumberUpdate() {
            this.$emit("update-rooms-number", this.roomsNumberValue)
            localStorage.setItem('roomsNumberValue', this.roomsNumberValue);
        },
        inputBedroomNumberUpdate() {
            this.$emit("update-bedroom-number", this.bedroomNumberValue)
            localStorage.setItem('bedroomNumberValue', this.bedroomNumberValue);
        },
        inputBathroomNumberUpdate() {
            this.$emit("update-bathroom-number", this.bathroomNumberValue)
            localStorage.setItem('bathroomNumberValue', this.bathroomNumberValue);
        },


        selectAmenities(selectedComponent) {
            this.$emit("update-title", "Commodités et agréments");
            this.$emit("change-component", selectedComponent);
        },

        selectHouseType(selectedComponent) {
            this.$emit("change-component", selectedComponent);
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },
    }

}
</script>
