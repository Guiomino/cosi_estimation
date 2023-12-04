const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// CHANGER DYNAMIQUEMENT LE TITRE DE LA PAGE
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Agence immobilière du pays de Gex',
    },
  }
}