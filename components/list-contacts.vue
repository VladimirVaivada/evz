<template>
  <v-card color="yellow darken-1">
    <v-card-title>Наши контакты</v-card-title>
    <v-card-subtitle>Звоните по любым вопросам!</v-card-subtitle>
    <v-card-text>
      <v-card>
        <v-list dense>
          <v-list-item v-for="(item, n) in contacts" :key="n">
            <v-list-item-content class="py-0">
              <div>
                <v-icon class="pb-1">{{ item.icon }}</v-icon>
                &nbsp;{{ item.text }}
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="tel:+79119644740">
            <v-list-item-content>
              <div>
                <v-icon>mdi-phone</v-icon>
                &nbsp;+7(911) 964-47-40
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
        { icon: 'mdi-home', text: 'Коломяжский пр., 26, м.Пионерская;' }
      ]
    }
  }
}
</script>
