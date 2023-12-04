<template>
    <div class="flex flex-col gap-5">

        <div class="flex flex-col mx-auto">
            <h2 class="font-semibold text-2xl text-sky-100 mb-2 md:text-left sm:text-center">
                <fa class="iconBtn" icon="circle-right" /> {{ title }}
            </h2>
            <p class="font-medium text-sm text-sky-100 md:text-left sm:text-center">{{ txt }}</p>
        </div>

        <div class="flex flex-wrap justify-center gap-5 mx-10 mb-10">


            <!-- À rénover -->
            <button 
                v-on:click="selectCondition(conditionChoice[0], 'AddressComp')"
                @mousedown="isHoveredNotGood = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
                
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"
                
                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="screwdriver-wrench" />
                <p class="font-bold text-base text-sky-950">{{ titleCard[0] }}</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredNotGood ? 'check-circle' : 'circle-right'" />
                </div>
            </button>

            <!-- Bon état -->
            <button 
                v-on:click="selectCondition(conditionChoice[1], 'AddressComp')"
                @mousedown="isHoveredGood = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
                
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"

                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="thumbs-up" />
                <p class="font-bold text-base text-sky-950">{{ titleCard[1] }}</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredGood ? 'check-circle' : 'circle-right'" />
                </div>
            </button>

            <!-- Neuf / Rénové -->
            <button 
                v-on:click="selectCondition(conditionChoice[2], 'AddressComp')"
                @mousedown="isHoveredPerfect = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
                
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"

                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="recycle" />
                <p class="font-bold text-base text-sky-950">{{ titleCard[2] }}</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredPerfect ? 'check-circle' : 'circle-right'" />
                </div>
            </button>

        </div>

        <div class="flex flex-col items-center">
            <div class="w-4/5 border-t border-orange-600"></div>
            <div class="flex flex-wrap md:justify-center w-4/5 sm:justify-center">
                <ButtonPreviousStep v-on:click="selectAmenities('AmenitiesComp'), scrollToTop()" />
            </div>
        </div>

    </div>
</template>



<script>
import ButtonPreviousStep from './ButtonPreviousStep.vue';

export default {
    name: "ConditionHousingComp",

    data() {
        return {
            title: "État du votre bien immobilier",
            txt: "Indiquez l'état de votre logement",
            titleCard: ["À rénover", "Bon état", "Neuf / Rénové"],
            isHoveredNotGood: false,
            isHoveredGood: false,
            isHoveredPerfect: false,
        }
    },

    components: {
        "ButtonPreviousStep": ButtonPreviousStep
    },

    props: {
        conditionChoice: Array
    },

    methods: {
        selectCondition(choice, selectedComponent) {
            setTimeout(() => {

                this.$emit("condition-selected", choice);
                this.$emit("update-title", "Adresse de votre logement : ");
                this.$emit("change-component", selectedComponent);
                this.scrollToTop();

            }, 500);
        },

        selectAmenities(selectedComponent) {
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
