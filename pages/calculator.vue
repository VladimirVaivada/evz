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
                @change="job = false"
              />
              <v-select
                v-if="trademark"
                v-model="model"
                :items="trademark.children"
                label="Модель устройства"
                return-object
                @change="job = false"
              />
              <v-select
                v-if="model"
                v-model="job"
                :items="model.children"
                label="Характер работ"
                chips
                clearable
                multiple
                :menu-props="{ value: isOpen, closeOnClick: true }"
                return-object
                @click.stop="isOpen = !isOpen"
              >
                <template v-slot:selection="{ attrs, item, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    color="secondary"
                    x-small
                  >
                    {{ item.text }}
                  </v-chip>
                </template>
                <template v-slot:prepend-item>
                  <div class="px-3 pb-1 d-flex justify-end" color="secondary">
                    <v-btn
                      v-if="price"
                      block
                      small
                      outlined
                      color="secondary"
                      @click.stop="isOpen = !isOpen"
                    >
                      OK
                    </v-btn>
                    <v-btn
                      v-else
                      color="error"
                      small
                      block
                      outlined
                      @click.stop="isOpen = !isOpen"
                    >
                      Закрыть меню</v-btn
                    >
                  </div>
                </template>
                <template v-slot:item="{ on, attrs, item }">
                  <v-list-item v-bind="attrs" v-on="on">
                    <v-list-item-content class="pb-4">
                      {{ item.text }}
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-select>
              <v-card v-if="price" color="secondary" dark>
                <v-card-title>
                  <span class="caption">от&nbsp;</span>
                  <strong>{{ price }}&nbsp; </strong>
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
      isOpen: false,
      trademark: false,
      model: false,
      job: false
    }
  },
  computed: {
    price() {
      const t = this.trademark
      const m = this.model
      const j = this.job
      let sum = 0
      if (t && m && Array.isArray(j) && j.length >= 1) {
        j.forEach((item) => {
          sum += item.price
        })
        return sum
      } else return false
    }
  },
  head() {
    return {
      title: 'Калькулятор'
    }
  }
}
</script>
