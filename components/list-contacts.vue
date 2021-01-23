<template>
  <v-card color="primary darken-3" dark>
    <v-card-title>Наши контакты</v-card-title>
    <v-card-subtitle>Звоните по любым вопросам!</v-card-subtitle>
    <v-card-text>
      <v-card light>
        <v-list>
          <v-list-item
            v-for="(item, n) in contacts"
            :key="n"
            :to="item.location.link || ''"
          >
            <v-list-item-content>
              <div style="display:flex; align-items:center">
                <v-icon class="py-1" color="green">
                  {{ item.location.icon }}
                </v-icon>
                &nbsp;<span v-html="item.location.text"></span>
              </div>
              <div style="display:flex; align-items:center">
                <v-icon class="py-1" color="amber">
                  {{ item.schedule.icon }}
                </v-icon>
                &nbsp;<span v-html="item.schedule.text"></span>
              </div>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="tel:+79523873723">
            <v-list-item-content>
              <div>
                <v-icon color="red" class="py-1">{{ mdiPhone }}</v-icon>
                Позвонить: +7(952) 387-37-23
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiEmailSend, mdiPhone, mdiClock, mdiMap } from '@mdi/js'
export default {
  data() {
    return {
      mdiEmailSend,
      mdiPhone,
      contacts: [
        {
          location: {
            icon: mdiMap,
            text: 'м.Пионерская, аллея Поликарпова, д.2;',
            link: '/map'
          },
          schedule: {
            icon: mdiClock,
            text: 'с <time>11:00</time> до <time>21:00</time>, ежедневно;'
          }
        },
        {
          location: {
            icon: mdiMap,
            text: 'м.Пионерская, пр. Испытателей, д.9, к.3;',
            link: '/map'
          },
          schedule: {
            icon: mdiClock,
            text: 'с <time>10:00</time> до <time>22:00</time>, ежедневно;'
          }
        }
      ]
    }
  }
}
</script>
