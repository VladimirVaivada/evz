<template>
  <v-card color="primary" dark>
    <v-card-title>Наши контакты</v-card-title>
    <v-card-subtitle>Звоните по любым вопросам!</v-card-subtitle>
    <v-card-text>
      <v-card light>
        <v-list dense>
          <v-list-item
            v-for="(item, n) in contacts"
            :key="n"
            :to="item.link || ''"
          >
            <v-list-item-content>
              <div style="display:flex; align-items:center">
                <v-icon class="py-1" color="green">
                  {{ item.icon }}
                </v-icon>
                &nbsp;<span v-html="item.text"></span>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-list-item
            href="mailto:chained_@mail.ru?subject=%D0%92%D0%BE%D0%BF%D1%80%D0%BE%D1%81%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5%3A%20%28%20%D0%A2%D0%B5%D0%BC%D0%B0%20%D0%92%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0%20%29"
          >
            <v-list-item-content>
              <div>
                <v-icon color="red" class="py-1">mdi-email-send</v-icon>
                Написать: Chained_@mail.ru
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="tel:+79119644740">
            <v-list-item-content>
              <div>
                <v-icon color="red" class="py-1">mdi-phone</v-icon>
                Позвонить: +7(911) 964-47-40
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          icon: 'mdi-clock',
          text: 'с <time>11:00</time> до <time>20:00</time>, ежедневно;'
        },
        {
          icon: 'mdi-home',
          text: 'ст.м.Пионерская, аллея Поликарпова, д.2;',
          link: '/map'
        }
      ]
    }
  }
}
</script>
