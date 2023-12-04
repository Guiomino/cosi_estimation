<template>
    <button
      class="relative overflow-hidden font-semibold text-sm text-sky-100 bg-orange-600 border-2 border-orange-600 py-2 px-4 my-5 rounded duration-100 group">
      <span class="relative z-10">
        <span class="ml-2">
          <fa class="iconBtn" icon="circle-left" /> Étape précédente
        </span>
      </span>
      <span class="absolute inset-0 bg-sky-900 opacity-0 group-hover:opacity-100 transform scale-0 origin-center transition-transform duration-300 group-hover:scale-100"></span>
      <span class="absolute inset-0 bg-sky-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"></span>
    </button>
  </template>
  
  <script>
  export default {
    name: "ButtonPreviousStep",
  };
  </script>
  