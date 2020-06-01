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

        <v-divider />

        <v-list-item
          v-for="(item, i) in services"
          :key="i"
          :to="item.to"
          nuxt
          exact
          color="secondary"
          class="my-1"
        >
          <v-list-item-action>
            <v-icon color="secondary">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item
          class="my-1"
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:chained_@mail.ru?subject=%D0%92%D0%BE%D0%BF%D1%80%D0%BE%D1%81%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82%D0%B5%3A%20%28%20%D0%A2%D0%B5%D0%BC%D0%B0%20%D0%92%D0%B0%D1%88%D0%B5%D0%B3%D0%BE%20%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0%20%29"
        >
          <v-list-item-action>
            <v-icon color="red" class="py-1">mdi-email-send</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Написать
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          target="_blank"
          rel="noreferrer noopener"
          href="tel:+79119644740"
          class="my-1"
        >
          <v-list-item-action>
            <v-icon color="red">mdi-phone</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Позвонить
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
        <nuxt-link to="/map" style="text-decoration:none">
          <sub class="caption white--text">&nbsp;м.Пионерская</sub>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>

    <v-content class="blue-grey">
      <nuxt keep-alive :keep-alive-props="{ max: 2 }" />
      <!--  -->
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
  name: 'Default',
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
          icon: 'mdi-cellphone-cog',
          title: 'Каталог',
          to: '/catalogue'
        },
        {
          icon: 'mdi-calculator',
          title: 'Калькулятор',
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
