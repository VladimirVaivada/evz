<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form>
          <v-card>
            <v-toolbar color="secondary" dense dark flat>
              <v-toolbar-title style="word-break: keep-all">
                Калькулятор
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-select
                v-model="trademark"
                :items="trademarks"
                label="Марка устройства"
                outlined
                required
              />
              <v-combobox
                v-model="model"
                :items="models"
                label="Модель устройства"
                clearable
                outlined
                required
              />
              <v-select
                v-model="job"
                :items="jobs"
                label="Характер работ"
                chips
                clearable
                multiple
                outlined
                required
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    color="secondary"
                    small
                    @click="select"
                  >
                    <span>
                      <strong>
                        {{ item }}
                      </strong>
                    </span>
                  </v-chip>
                  <!-- <span v-if="index === 3" class="grey--text caption"> -->
                  <!--   (+{{ job.length - 3 }}) -->
                  <!-- </span> -->
                </template>
              </v-select>
              <v-card v-if="price" color="secondary" dark>
                <v-card-title>
                  <strong> {{ price }}&nbsp; </strong>
                  <v-icon small>mdi-currency-rub</v-icon>
                  <sup>*</sup>
                  <span class="caption">
                    &nbsp;+&nbsp;запчасти
                  </span>
                </v-card-title>
                <v-card-text>
                  <sup>*</sup>Приблизительная стоимость.<br />Не является
                  офертой.
                </v-card-text>
              </v-card>
              <v-btn v-else color="warning" dark>
                <v-icon>mdi-alert</v-icon>&nbsp;Введите данные
              </v-btn>
            </v-card-text>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MyCalculator',
  data() {
    return {
      db: {
        Apple: {
          'iPad 2 (2011)': {
            'Замена дисплейного модуля': null
          },
          'iPad 3 (2012)': {
            'Замена дисплейного модуля': null
          },
          'iPad Mini (2012)': {
            'Замена дисплейного модуля': null
          },
          'iPad 4 (2012)': {
            'Замена дисплейного модуля': null
          },
          'iPad Mini 2 (2013)': {
            'Замена дисплейного модуля': null
          },
          'iPad Air (2013)': {
            'Замена дисплейного модуля': null
          },
          'iPad Mini 3 (2014)': {
            'Замена дисплейного модуля': null
          },
          'iPad Air 2 (2014)': {
            'Замена дисплейного модуля': null
          },
          'iPad Mini 4 (2015)': {
            'Замена дисплейного модуля': null
          },
          'iPad Pro 12.9" (2015 )': {
            'Замена дисплейного модуля': null
          },
          'iPad Pro 9.7" (2016)': {
            'Замена дисплейного модуля': null
          },
          'iPad 10.2" (2017)': {
            'Замена дисплейного модуля': null
          },
          'iPad Pro 10.5" (2017)': {
            'Замена дисплейного модуля': null
          },
          'iPad Pro 12.9" (2017)': {
            'Замена дисплейного модуля': null
          },
          'iPad 9.7" (2018)': {
            'Замена дисплейного модуля': null
          },
          'iPad Pro 11" (2018)': {
            'Замена дисплейного модуля': null
          },
          'iPad Pro 12.9" (2018)': {
            'Замена дисплейного модуля': null
          },
          'iPad Mini 7.9" (2019)': {
            'Замена дисплейного модуля': null
          },
          'iPad Air 10.5" (2019)': {
            'Замена дисплейного модуля': null
          },
          'iPad 10.2" (2019)': {
            'Замена дисплейного модуля': null
          },
          'iPad Pro 11" (2020)': {
            'Замена дисплейного модуля': null
          },
          'iPad Pro 12.9" (2020)': {
            'Замена дисплейного модуля': null
          },
          iPhone: {
            'Замена дисплейного модуля': null,
            'Замена шлейфа (верх, низ)': null
          },
          'iPhone 3G': {
            'Замена дисплейного модуля': null,
            'Замена шлейфа (верх, низ)': null
          },
          'iPhone 3GS': {
            'Замена дисплейного модуля': null,
            'Замена шлейфа (верх, низ)': null
          },
          'iPhone 4': {
            'Замена дисплейного модуля': null,
            'Замена шлейфа (верх, низ)': null
          },
          'iPhone 4S': {
            'Замена дисплейного модуля': null,
            'Замена шлейфа (верх, низ)': null
          },
          'iPhone 5': {
            'Замена дисплейного модуля': 700,
            'Замена шлейфа (верх, низ)': 700
          },
          'iPhone 5C': {
            'Замена дисплейного модуля': null,
            'Замена шлейфа (верх, низ)': null
          },
          'iPhone 5S': {
            'Замена дисплейного модуля': 700,
            'Замена шлейфа (верх, низ)': 700
          },
          'iPhone 6': {
            'Замена дисплейного модуля': 700,
            'Замена шлейфа (верх, низ)': 700
          },
          'iPhone 6 Plus': {
            'Замена дисплейного модуля': 700,
            'Замена шлейфа (верх, низ)': 700
          },
          'iPhone 6S': {
            'Замена дисплейного модуля': 700,
            'Замена шлейфа (верх, низ)': 700
          },
          'iPhone 6S Plus': {
            'Замена дисплейного модуля': 700,
            'Замена шлейфа (верх, низ)': 700
          },
          'iPhone SE': {
            'Замена дисплейного модуля': 700,
            'Замена шлейфа (верх, низ)': 700
          },
          'iPhone 7': {
            'Замена дисплейного модуля': 1100,
            'Замена шлейфа (верх, низ)': 800
          },
          'iPhone 7 Plus': {
            'Замена дисплейного модуля': 1100,
            'Замена шлейфа (верх, низ)': 800
          },
          'iPhone 8': {
            'Замена дисплейного модуля': 1100,
            'Замена шлейфа (верх, низ)': 800
          },
          'iPhone 8 Plus': {
            'Замена дисплейного модуля': 1100,
            'Замена шлейфа (верх, низ)': 800
          },
          'iPhone X': {
            'Замена дисплейного модуля': 1100,
            'Замена шлейфа (верх, низ)': 800
          },
          'iPhone XS': {
            'Замена дисплейного модуля': 1100,
            'Замена шлейфа (верх, низ)': 800
          },
          'iPhone XS Max': {
            'Замена дисплейного модуля': 1600,
            'Замена шлейфа (верх, низ)': 2500
          },
          'iPhone 11': {
            'Замена дисплейного модуля': 1600,
            'Замена шлейфа (верх, низ)': 2500
          },
          'iPhone 11 Pro': {
            'Замена дисплейного модуля': 1600,
            'Замена шлейфа (верх, низ)': 2500
          },
          'iPhone 11 Pro Max': {
            'Замена дисплейного модуля': null,
            'Замена шлейфа (верх, низ)': null
          }
        }
      },
      trademark: 'Apple',
      model: '',
      job: ''
    }
  },
  computed: {
    trademarks() {
      return Object.keys(this.db)
    },
    models() {
      const tmpObj = this.db[this.trademark]
      if (tmpObj) {
        return Object.keys(tmpObj)
      } else {
        return []
      }
    },
    jobs() {
      if (this.tmpObj) {
        return Object.keys(this.tmpObj)
      } else {
        return []
      }
    },
    tmpObj() {
      return this.db[this.trademark][this.model]
    },
    price() {
      if (this.tmpObj) {
        if (Array.isArray(this.job)) {
          let sum = 0
          this.job.forEach((element) => {
            sum += this.tmpObj[element]
          })
          return sum
        } else return this.tmpObj[this.job]
      } else return false
    }
  }
}
</script>
