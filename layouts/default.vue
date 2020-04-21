<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" light right app>
      <v-list nav tile>
        <v-list-item
          v-for="item in pages"
          :key="item.title"
          :to="item.to"
          nuxt
          exact
          color="primary darken-2"
        >
          <v-list-item-action>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mb-4" />

        <v-list-item
          v-for="(item, i) in services"
          :key="i"
          :to="item.to"
          nuxt
          exact
          color="secondary"
        >
          <v-list-item-action>
            <v-icon color="secondary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>

        <v-divider class="mb-4" />

        <v-list-item href="tel:+79119644740">
          <v-list-item-action>
            <v-icon color="red">mdi-cellphone-sound</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Позвонить мастеру
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-right="clipped" color="primary darken-2" dark app>
      <v-toolbar-title class="pr-1">
        <nuxt-link
          to="/"
          class="headline white--text"
          style="text-decoration:none"
        >
          {{ title }}
        </nuxt-link>
        <sub class="caption">&nbsp;ст.м.Пионерская</sub>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content class="blue-grey">
      <nuxt />
      <!-- keep-alive :keep-alive-props="{ max: 2 }" -->
    </v-content>

    <v-footer color="primary" elevation="16" dark app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <v-spacer />
      <v-btn
        v-for="(item, n) in social"
        :key="n + item.link"
        :href="item.link"
        icon
      >
        <v-icon size="24px">{{ item.icon }}</v-icon>
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
      social: [
        { link: 'https://vk.com/eurosvaz', icon: 'mdi-vk' },
        {
          link: 'https://www.instagram.com/p/B-fYCVFIKRW/?igshid=escfq5u0yzog',
          icon: 'mdi-instagram'
        }
      ],
      title: 'ЕВРОСВЯЗЬ'
    }
  }
}
</script>
