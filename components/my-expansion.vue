<template>
  <v-expansion-panels focusable hover transition="false">
    <v-expansion-panel v-for="item in items" :key="item.id">
      <v-expansion-panel-header>{{ item.name }}</v-expansion-panel-header>
      <v-expansion-panel-content v-if="item.children">
        <my-expansion :items="item.children" />
      </v-expansion-panel-content>
      <v-expansion-panel-content v-else color="secondary" class="white--text">
        <div class="pa-4">
          <div class="title">
            {{ item.price * 1.2 }}&nbsp;
            <v-icon small dark>{{ mdiCurrencyRub }}</v-icon
            ><sup>*</sup>
          </div>
          <div class="caption">
            <sup>*</sup>&nbsp;Приблизительная стоимость. <br />&nbsp;&nbsp;Не
            является офертой.
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mdiCurrencyRub } from '@mdi/js'
export default {
  name: 'MyExpansion',
  components: {
    myExpansion: () => import('~/components/my-expansion.vue')
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      mdiCurrencyRub
    }
  }
}
</script>
