<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-toolbar color="secondary" flat dark>
            <v-toolbar-title>Запчасти</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            Для наших любимых "самоделкиных".<br />Мы запускаем продажу
            запчастей для самостоятельной установки!
          </v-card-text>
          <v-card-text>
            <v-card>
              <v-card-title>
                <v-btn disabled outlined>
                  <v-icon>mdi-apple</v-icon>&nbsp;iPhone
                </v-btn>
              </v-card-title>
              <v-card-text class="d-flex flex-wrap">
                <v-card
                  v-for="model in models"
                  :key="model"
                  class="mr-4 mb-4"
                  width="180px"
                >
                  <v-img :src="`/parts/xs/prt_${model}__shleif_xs.jpg`"></v-img>
                </v-card>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      models: [
        'iphone5',
        'iphone6',
        'iphone6plus',
        'iphone6s',
        'iphone6splus',
        'iphone7'
      ]
    }
  }
}
</script>
