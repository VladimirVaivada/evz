<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" dense app>
      <v-list nav tile>
        <v-list-item
          v-for="(item, i) in pages"
          :key="i + item.title"
          :to="item.to"
          nuxt
          exact
          color="deep-orange"
        >
          <v-list-item-action>
            <v-icon color="deep-orange">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mb-4" />

        <v-list-item
          v-for="(item, i) in services"
          :key="i + item.title"
          :to="item.to"
          nuxt
          exact
          color="purple"
        >
          <v-list-item-action>
            <v-icon color="purple">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mb-4" />

        <v-list-item href="tel:+79119644740" color="blue darken-2">
          <v-list-item-action>
            <v-icon color="red darken-1">mdi-cellphone-sound</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Позвонить мастеру
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" color="primary" dark dense app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="pl-0">
        <nuxt-link
          to="/"
          class="headline white--text"
          style="text-decoration:none"
        >
          {{ title }}
        </nuxt-link>
        <sub class="caption">&nbsp;ст.м.Пионерская</sub>
      </v-toolbar-title>
    </v-app-bar>

    <v-content class="amber lighten-4">
      <nuxt keep-alive :keep-alive-props="{ max: 2 }" />
    </v-content>

    <v-footer color="primary" elevation="16" dark app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
      <v-btn v-for="icon in icons" :key="icon" class="white--text" icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: null,
      pages: [
        {
          icon: 'mdi-home',
          title: 'Главная страница',
          to: '/'
        },
        {
          icon: 'mdi-map',
          title: 'Мы на карте',
          to: '/map'
        },
        {
          icon: 'mdi-information',
          title: 'О нас',
          to: '/about'
        }
      ],
      services: [
        {
          icon: 'mdi-home-edit-outline',
          title: 'Вызвать на дом',
          to: '/call-me-home'
        },
        {
          icon: 'mdi-calculator',
          title: 'Рассчитать',
          to: '/calculator'
        }
      ],
      icons: [
        'mdi-vk',
        'mdi-telegram',
        'mdi-instagram',
        'mdi-twitter',
        'mdi-facebook'
      ],
      title: 'ЕВРОСВЯЗЬ'
    }
  }
}
</script>
