<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form>
          <v-card>
            <v-toolbar color="secondary" dense dark flat>
              <v-toolbar-title style="word-break: keep-all">
                Заполните форму
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-select
                id="trademark"
                v-model="trademark"
                :items="trademarks"
                label="Марка устройства"
                outlined
                required
              />
              <v-select
                id="model"
                v-model="model"
                :items="models"
                label="Модель устройства"
                outlined
                required
              />
              <v-select
                id="breakdown"
                v-model="breakdown"
                :items="breakdowns"
                label="Характер неисправности"
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
                  <!--   (+{{ breakdown.length - 3 }}) -->
                  <!-- </span> -->
                </template>
              </v-select>
              <v-card v-if="price" color="secondary" dark>
                <v-card-title>
                  {{ price }}&nbsp;
                  <v-icon small>mdi-currency-rub</v-icon>
                  <sup>*</sup>
                </v-card-title>
                <v-card-text>
                  <sup>*</sup>Приблизительная стоимость. Не является офертой.
                </v-card-text>
              </v-card>
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
          'iPhone 3G': {
            'нет изображения': 1500,
            'не включается': 1200
          },
          'iPhone 4': {
            'нет изображения': 1650,
            'не включается': 1250,
            'не заряжается': 1050,
            'нет звука': 1950,
            'нет сети': 2250
          }
        },
        Samsung: {
          'Galaxy A20s': {
            'нет изображения': 1300,
            'не включается': 1000
          }
        }
      },
      trademark: 'Apple',
      model: '',
      breakdown: ''
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
    breakdowns() {
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
        if (Array.isArray(this.breakdown)) {
          let sum = 0
          this.breakdown.forEach((element) => {
            sum += this.tmpObj[element]
          })
          return sum
        } else return this.tmpObj[this.breakdown]
      } else return false
    }
  }
}
</script>

<style>
/*  */
</style>
