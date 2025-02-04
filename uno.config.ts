import {defineConfig, presetWind} from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [presetWind({important: '#__nuxt'})],
})
