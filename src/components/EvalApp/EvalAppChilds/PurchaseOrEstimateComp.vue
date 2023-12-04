<template>
    <div class="flex flex-col gap-5">

        <div class="flex flex-col mx-10">
            <h2 class="font-semibold text-2xl text-sky-100 mb-2"> <fa class="iconBtn" icon="circle-right" /> {{ title }}</h2>
            <p class="font-medium text-sm text-sky-100">{{ txt }}</p>
        </div>

        <div class="flex flex-wrap justify-center gap-5 mx-10 mb-10">


            <button 
                v-on:click="selectChoice(PurchaseOrEstimateChoice[0], 'HouseOrBuildingComp'), changeSubtitleToOptionSelected(changeSubtitleToOption[0])"
                @mousedown="isHoveredPurchase = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]

                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"

                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="tag" />
                <p class="font-bold text-base text-sky-950">Achat</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredPurchase ? 'check-circle' : 'circle-right'" />
                </div>
            </button>


            <button
                v-on:click="selectChoice(PurchaseOrEstimateChoice[1], 'HouseOrBuildingComp'), changeSubtitleToOptionSelected(changeSubtitleToOption[1])"
                @mousedown="isHoveredEstimate = true"
                class="relative flex flex-col justify-around items-center rounded w-[180px] h-[280px] bg-sky-100 
                shadow-[0px_4px_20px_rgba(0,0,0,0.66)] transform duration-200 hover:shadow-[0px_4px_20px_rgba(255,255,255,0.33)]
               
                before:border-transparent focus:before:border-white
                before:absolute before:-bottom-2 before:-right-2 before:h-0 before:w-0 before:border-b before:border-r before:transition-all before:duration-500
                after:border-transparent focus:after:border-white
                after:absolute after:-top-2 after:-left-2 after:h-0 after:w-0 after:border-t after:border-l after:transition-all after:duration-500
                focus:before:h-[calc(100%+16px)] focus:before:w-[calc(100%+16px)] focus:after:h-[calc(100%+16px)] focus:after:w-[calc(100%+16px)]"
                
                onmouseover="this.querySelector('.text-sky-950').style.color = '#ea580c'; this.querySelector('.bg-sky-950').style.backgroundColor = '#ea580c'; this.querySelector('p').style.color = '#ea580c';"
                onmouseout="this.querySelector('.text-sky-950').style.color = ''; this.querySelector('.bg-sky-950').style.backgroundColor = ''; this.querySelector('p').style.color = '';">
                <fa class="text-sky-950 text-7xl" icon="calculator" />
                <p class="font-bold text-base text-sky-950">Estimation</p>
                <div class="font-semibold flex text-sm text-sky-100 bg-sky-950 py-2 px-4 border-none rounded hover:bg-orange-500 duration-100">
                    <span class="flex items-center">Sélectionner</span>
                    <fa class="iconBtn text-xl ml-4" :icon="isHoveredEstimate ? 'check-circle' : 'circle-right'" />
                </div>
            </button>

        </div>
    </div>
</template>




<script>

export default {
    name: "PurchaseOrEstimateComp",

    data() {
        return {
            title: "Voulez-vous acheter ou faire estimer ?",
            txt: "Indiquez l'objet de votre demande",
            changeSubtitleToOption: ["Achat de votre bien immobilier", "Estimation de votre bien immobilier"],
            isHoveredPurchase: false,
            isHoveredEstimate: false,
        }
    },

    props: {
        PurchaseOrEstimateChoice: Array,
        subtitlePurchaseOrEstimate: Array,
    },

    methods: {
        selectChoice(choice, selectedComponent) {
            setTimeout(() => {
                this.$emit("purchase-estimate-selected", choice);
                this.$emit("update-title", "Votre bien immobilier : ");
                this.$emit("change-component", selectedComponent);
                this.scrollToTop();
            }, 500);
        },

        changeSubtitleToOptionSelected(newSubtitle) {
            this.$emit("change-subtitle", newSubtitle);
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
