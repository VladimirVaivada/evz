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
                :items="jobsList"
                label="Марка устройства"
                return-object
              />
              <v-select
                v-if="trademark"
                v-model="model"
                :items="trademark.children"
                label="Модель устройства"
                return-object
              />
              <v-select
                v-if="model"
                v-model="job"
                :items="model.children"
                label="Характер работ"
                chips
                clearable
                multiple
                menu-props="{style: 'white-space: none' }"
                return-object
                small-chips
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    color="secondary"
                    small
                    @click="select"
                  >
                    <strong>
                      {{ item.text }}
                    </strong>
                  </v-chip>
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
                <v-card-text class="caption">
                  <sup>*</sup>&nbsp;Приблизительная стоимость. <br />&nbsp;Не
                  является офертой. <br />&nbsp;Точную цену возможно узнать
                  только после проведения диагностики.
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
import jobsList from '~/assets/data/jobs.js'

export default {
  name: 'MyCalculator',
  data() {
    return {
      jobsList,
      trademark: false,
      model: '',
      job: ''
    }
  },
  computed: {
    price() {
      if (Array.isArray(this.job)) {
        let sum = 0
        this.job.forEach((job) => {
          sum += job.price
        })
        return sum
      } else return false
    }
  }
}
</script>
