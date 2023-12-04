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
            
            <button 
                v-on:click="selectBuildingType(homeTypeChoice[1][0], 'DataBuildingComp')"
                @mousedown="isHoveredAttique = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
                
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"

                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="building" />
                <p class="font-bold text-base text-sky-950">Attique</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredAttique ? 'check-circle' : 'circle-right'" />
                </div>
            </button>


            <button 
                v-on:click="selectBuildingType(homeTypeChoice[1][1], 'DataBuildingComp')"
                @mousedown="isHoveredCombles = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
                
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"

                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="building" />
                <p class="font-bold text-base text-sky-950">Combles</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredCombles ? 'check-circle' : 'circle-right'" />
                </div>
            </button>


            <button 
                v-on:click="selectBuildingType(homeTypeChoice[1][2], 'DataBuildingComp')"
                @mousedown="isHoveredDuplex = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
                
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"

                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="building" />
                <p class="font-bold text-base text-sky-950">Duplex</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredDuplex ? 'check-circle' : 'circle-right'" />
                </div>
            </button>

            <button 
                v-on:click="selectBuildingType(homeTypeChoice[1][3], 'DataBuildingComp')"
                @mousedown="isHoveredRezJardin = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
                
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"

                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="building" />
                <p class="font-bold text-base text-sky-950">Rez de jardin</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredRezJardin ? 'check-circle' : 'circle-right'" />
                </div>
            </button>

            <button 
                v-on:click="selectBuildingType(homeTypeChoice[1][4], 'DataBuildingComp')"
                @mousedown="isHoveredTraversant = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
                
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"

                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="building" />
                <p class="font-bold text-base text-sky-950">Traversant</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredTraversant ? 'check-circle' : 'circle-right'" />
                </div>
            </button>

            <button 
                v-on:click="selectBuildingType(homeTypeChoice[1][5], 'DataBuildingComp')"
                @mousedown="isHoveredOther = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
                
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"

                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="building" />
                <p class="font-bold text-base text-sky-950">Autre</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredOther ? 'check-circle' : 'circle-right'" />
                </div>
            </button>

        </div>
    </div>

    <div class="flex flex-col items-center">
            <div class="w-4/5 border-t border-orange-600"></div>
            <div class="flex flex-wrap md:justify-center w-4/5 sm:justify-center">
                <ButtonPreviousStep v-on:click="selectHouseOrBuilding('HouseOrBuildingComp'), scrollToTop()" />
            </div>
        </div>

    </div>
</template>



<script>
import ButtonPreviousStep from './ButtonPreviousStep.vue';

export default {
    name: "buildingTypeComp",

    data() {
        return {
            title: "Type d'appartement",
            txt: "Précisez la nature du logement concerné",
            isHoveredAttique: false,
            isHoveredCombles: false,
            isHoveredDuplex: false,
            isHoveredRezJardin: false,
            isHoveredTraversant: false,
            isHoveredOther: false,
        }
    },

    components: {
        "ButtonPreviousStep": ButtonPreviousStep
    },

    props: {
        homeTypeChoice: Array,
    },
    
    methods: {
        selectBuildingType(choice, selectedComponent) {
            setTimeout(() => {
                
            this.$emit("home-type-selected", choice);

            const comparTable = this.homeTypeChoice[1];

            for (const valeur of comparTable) {
                if (choice === valeur) {
                    this.$emit("update-title", "Données de votre appartement");
                    break;
                }
            }
            
            this.$emit("change-component", selectedComponent);
            this.scrollToTop();

        }, 500);
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        },

        selectHouseOrBuilding(selectedComponent) {
            this.$emit("change-component", selectedComponent);
        },
    }
}
</script>

