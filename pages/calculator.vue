<template>
  <v-container>
    <v-card light>
      <v-card-title>
        Рассчитать стомость ремонта
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-combobox
            id="trademark"
            v-model="selectedTrademark"
            :items="trademarks"
            label="Марка устройства"
            clearable
            outlined
            required
          />
          <v-text-field
            id="model"
            label="Модель устройства"
            outlined
            required
          />
          <v-combobox
            id="breakdown"
            v-model="selectedBreakdownType"
            :items="brakedownTypes"
            label="Характер неисправности"
            clearable
            outlined
            required
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary" block>Рассчитать</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      trademarks: [
        'Apple',
        'Samsung',
        'Honor',
        'Huawei',
        'HTC',
        'Lenovo',
        'Xiaomi',
        'ZTE'
      ],
      brakedownTypes: [
        'нет изображения',
        'не включается',
        'не заряжается',
        'нет звука',
        'нет сети',
        'не работает Wi-Fi',
        'не работает Bluetooth',
        'не работает тачскрин',
        'не работает камера передняя',
        'не работает камера задняя'
      ],
      selectedTrademark: '',
      selectedBreakdownType: ''
    }
  }
}
</script>

<style>
/*  */
</style>
