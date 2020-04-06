<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :clipped="clipped">
      <v-list>
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
        <v-divider />
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

    <v-app-bar app dark :clipped-left="clipped" color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <span class="headline">{{ title }}</span>
        <sub class="caption">&nbsp;ст.м. Пионерская</sub>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <Nuxt />
      </v-container>
    </v-content>

    <v-footer app dark color="primary">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
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
          to: '/contacts'
        },
        {
          icon: 'mdi-information',
          title: 'О нас',
          to: '/about'
        }
      ],
      title: 'ЕВРОСВЯЗЬ'
    }
  }
}
</script>
