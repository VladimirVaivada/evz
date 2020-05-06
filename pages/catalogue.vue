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
import db01 from '~/assets/data/price__01.js'
import db02 from '~/assets/data/price__02.js'
import db03 from '~/assets/data/price__03.js'
import db04 from '~/assets/data/price__04.js'
import db05 from '~/assets/data/price__05.js'
import db06 from '~/assets/data/price__06.js'
import db07 from '~/assets/data/price__07.js'
import db08 from '~/assets/data/price__08.js'
import db09 from '~/assets/data/price__09.js'
import db10 from '~/assets/data/price__10.js'
import db11 from '~/assets/data/price__11.js'
import db12 from '~/assets/data/price__12.js'
import db13 from '~/assets/data/price__13.js'
import db14 from '~/assets/data/price__14.js'

import myExpansion from '~/components/my-expansion.vue'

export default {
  components: {
    'my-expansion': myExpansion
  },
  data() {
    return {
      db: [
        db01,
        db02,
        db03,
        db04,
        db05,
        db06,
        db07,
        db08,
        db09,
        db10,
        db11,
        db12,
        db13,
        db14
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
