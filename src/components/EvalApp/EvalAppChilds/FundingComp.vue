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
        <div v-for="(item, index) in fundingCheckData" :key="index"
          class="flex justify-around items-center rounded w-[280px] h-[140px] bg-sky-100 shadow-[0px_4px_20px_rgba(0,0,0,0.66)]">

          <div class="w-[80px] h-full flex justify-center items-center border-r border-orange-600">
            <fa class="text-sky-950 text-5xl" :icon="item.icon" />
          </div>

          <div class="w-[200px] h-[120px] justify-between flex flex-col ml-2">
            <p class="font-bold text-xs text-sky-950 ">{{ item.title }}</p>
            <div class="w-[200px] flex flex-col ml-2">
              <div v-if="item.checkboxes">
                <label v-for="(checkbox, cIndex) in item.checkboxes" :key="cIndex"
                  class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" :checked="checkbox.checked"
                    @change="updateCheckboxValue(checkbox, item)" />
                  <div
                    class="w-11 h-6 bg-sky-950 mr-5 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-sky-100 peer-checked:after:bg-[#00dd00] after:rounded-full after:h-5 after:w-5 after:transition-all">
                  </div>
                  <div class="absolute bottom-7 right-8 text-sky-950 text-xs">
                    {{ checkbox.checked ? 'Oui' : 'Non' }}
                  </div>
                </label>
              </div>
              <div v-else>
                <select @change="updateSelectValue" v-model="selectFundingBox"
                  class="w-[180px] border rounded-sm border-sky-950 p-1">
                  <option value="" disabled selected>Votre enveloppe</option>
                  <option v-for="option in item.options" :value="option.value" :key="option.value">{{ option.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="flex flex-col items-center">
      <div class="w-4/5 border-t border-orange-600"></div>
      <div class="flex flex-col lg:flex-row lg:justify-between justify-center lg:w-4/5">
        <ButtonPreviousStep @click="goToPreviousStep('AmenitiesComp')" />
        <ButtonNextStep @click="goToNextStep('AddressComp');" />
      </div>
    </div>


  </div>
</template>
  
<script>
import ButtonPreviousStep from './ButtonPreviousStep.vue';
import ButtonNextStep from './ButtonNextStep.vue';

export default {
  name: "FundingComp",

  data() {
    return {
      title: "Financement",
      txt: "Merci de préciser quelques détails supplémentaires sur votre situation",
      selectFundingBox: "",

    };
  },

  props: {
    HouseOrBuildingSelectedChoice: String,
    fundingCheckData: Object,
  },

  components: {
    ButtonPreviousStep,
    ButtonNextStep,
  },

  methods: {
    updateCheckboxValue(checkbox, item) {
      checkbox.checked = !checkbox.checked;
      const value = checkbox.checked;
      this.$emit('update-funding-checkbox', value, item.id);
    },

    updateSelectValue() {
      this.$emit("select-funding", this.selectFundingBox)
    },

    selectFunding(selectedComponent) {
      this.$emit("update-title", "Adresse");
      this.$emit("change-component", selectedComponent);
    },

    // BOUTON NEXT
    goToNextStep(selectedComponent) {
      setTimeout(() => {
        this.$emit("update-title", "Adresse de votre logement : ");
        this.$emit("change-component", selectedComponent);
        this.scrollToTop();
      }, 500);
    },

    // BOUTON PREVIOUS
    goToPreviousStep(selectedComponent) {
      this.$emit("change-component", selectedComponent);
      this.scrollToTop();
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
  