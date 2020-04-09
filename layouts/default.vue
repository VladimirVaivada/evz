<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app>
      <v-list nav tile>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          nuxt
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mb-4" />
        <v-list-item href="tel:+79119644740">
          <v-list-item-action>
            <v-icon>mdi-cellphone-sound</v-icon>
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
        <span class="headline">{{ title }}</span>
        <sub class="caption">&nbsp;ст.м.Пионерская</sub>
      </v-toolbar-title>
    </v-app-bar>

    <v-content class="amber lighten-5">
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
      items: [
        {
          icon: 'mdi-home',
          title: 'Главная страница',
          to: '/'
        },
        {
          icon: 'mdi-home-edit-outline',
          title: 'Мастер на дом',
          to: '/call-me-home'
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
