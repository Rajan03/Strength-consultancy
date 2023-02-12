import {buildLegacyTheme, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {theme} from 'https://themer.sanity.build/api/hues?preset=tw-cyan'
import SanityNavbar from '@/components/sanity/SanityNavbar'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/studio',
  name: 'SSC_DEV_STUDIO',
  title: 'SSC DEV STUDIO',

  projectId: projectId || '',
  dataset: dataset || 'production',

  plugins: [deskTool(), visionTool()],

  studio: {
    components: {
      navbar: SanityNavbar,
    },
  },

  schema: {
    types: schemaTypes,
  },

  theme,
})
