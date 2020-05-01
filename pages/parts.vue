<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-toolbar color="secondary" dark>
            <v-toolbar-title>
              Каталог
            </v-toolbar-title>
          </v-toolbar>
          <my-expansion
            v-for="section in db"
            :key="section[0].id"
            :items="section"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import accumulators from '~/assets/data/price_moba_23-04-20__accumulators.js'
import accessories from '~/assets/data/price_moba_23-04-20__accessories.js'
import displays from '~/assets/data/price_moba_23-04-20__displays.js'
import parts from '~/assets/data/price_moba_23-04-20__parts.js'
import memoryCards from '~/assets/data/price_moba_23-04-20__memory-cards.js'
import cases from '~/assets/data/price_moba_23-04-20__cases.js'
import caseParts from '~/assets/data/price_moba_23-04-20__case-parts.js'
import glasses from '~/assets/data/price_moba_23-04-20__glasses.js'
import matrixes from '~/assets/data/price_moba_23-04-20__matrixes.js'
import touchscreens from '~/assets/data/price_moba_23-04-20__touchscreens.js'
import microschemes from '~/assets/data/price_moba_23-04-20__microschemes.js'
import shleifses from '~/assets/data/price_moba_23-04-20__shleifses.js'
import tools from '~/assets/data/price_moba_23-04-20__tools.js'
import tvSets from '~/assets/data/price_moba_23-04-20__tv-sets.js'

import myExpansion from '~/components/my-expansion.vue'

export default {
  components: {
    'my-expansion': myExpansion
  },
  data() {
    return {
      db: [
        accumulators,
        accessories,
        displays,
        parts,
        memoryCards,
        cases,
        caseParts,
        glasses,
        matrixes,
        touchscreens,
        microschemes,
        shleifses,
        tools,
        tvSets
      ],
      selection: []
    }
  },
  computed: {
    cost() {
      let x = 0
      this.selection.forEach((item) => {
        x += Number(item.price)
      })
      return x || 'Выберите товар...'
    }
  }
}
</script>
