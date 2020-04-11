<template>
  <v-card color="primary">
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
                &nbsp;<span>{{ item.text }}</span>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="tel:+79119644740">
            <v-list-item-content>
              <div>
                <v-icon color="red" class="py-1">mdi-phone</v-icon>
                +7(911) 964-47-40
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
        { icon: 'mdi-clock', text: 'с 11:00 до 20:00, ежедневно;' },
        {
          icon: 'mdi-home',
          text: 'Коломяжский пр., д.26, ст.м.Пионерская;',
          link: '/map'
        }
      ]
    }
  }
}
</script>
