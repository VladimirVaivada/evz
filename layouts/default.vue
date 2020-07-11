<template lang="pug">
  v-app(style="position:relative;")
    v-navigation-drawer(v-model="drawer" temporary light right app)
      v-list(nav tile)
        v-list-item(
          v-for="item in pages"
          :key="item.title"
          :to="item.to"
          nuxt
          exact
          color="primary darken-3"
        )
          v-list-item-action
            v-icon(color="primary") {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="item.title")
        v-divider
        v-list-item(
          v-for="(item, i) in services"
          :key="i"
          :to="item.to"
          nuxt
          exact
          color="secondary"
          class="my-1"
        )
          v-list-item-action
            v-icon(color="secondary") {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="item.title")
        v-divider
        v-list-item(
          class="my-1"
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:chained_@mail.ru?subject=evrosvyaz.com:%20"
        )
          v-list-item-action
            v-icon(color="red" class="py-1") {{ mdiEmailSend }}
          v-list-item-content Написать
        v-list-item(
          target="_blank"
          rel="noreferrer noopener"
          href="tel:+79119644740"
          class="my-1"
        )
          v-list-item-action
            v-icon(color="red") {{ mdiPhone }}
          v-list-item-content Позвонить

    v-app-bar(
      :clipped-right="clipped"
      color="primary darken-4"
      dark
      app
    )
      v-toolbar-title(class="pr-1")
        nuxt-link(to="/" class="headline white--text" style="text-decoration:none")
          | {{ title }}
        nuxt-link(to="/map" style="text-decoration:none")
          sub(class="caption white--text") &nbsp;м.Пионерская
      v-spacer
      v-app-bar-nav-icon(aria-label="Навигация по сайту" @click.stop="drawer = !drawer")

    // *****
    v-content(class="blue-grey" v-scroll="onScroll")
      nuxt(keep-alive :keep-alive-props={ max: 2 })
    // *****

    v-fab-transition
      v-btn(
        fab
        big
        color="secondary lighten-1"
        bottom
        right
        fixed
        dark
        style="bottom:80px;"
        v-show="!hidden"
        @click="onFAB"
      )
        v-icon {{ mdiChevronUp }}

    v-footer(color="primary darken-3" elevation="16" dark app absolute)
      span &copy; {{ new Date().getFullYear() }}
      v-spacer
      v-btn(
        v-for="(item, n) in social"
        :key="n + item.link"
        :aria-label="item.title"
        :href="item.link"
        icon
      )
        v-icon(size="24px") {{ item.icon }}
</template>

<script>
import {
  mdiHome,
  mdiMap,
  mdiInformation,
  mdiTools,
  mdiCellphoneCog,
  mdiCalculator,
  mdiVk,
  mdiInstagram,
  mdiEmailSend,
  mdiPhone,
  mdiChevronUp
} from '@mdi/js'

export default {
  name: 'Default',

  data() {
    return {
      hidden: false,

      mdiChevronUp,

      mdiEmailSend,

      mdiPhone,

      clipped: false,

      drawer: null,

      pages: [
        {
          icon: mdiHome,
          title: 'Главная страница',
          to: '/'
        },
        {
          icon: mdiMap,
          title: 'Мы на карте',
          to: '/map'
        },
        {
          icon: mdiInformation,
          title: 'О нас',
          to: '/about'
        },
        {
          icon: mdiTools,
          title: 'Ремонт',
          to: '/repair'
        }
      ],

      services: [
        {
          icon: mdiCellphoneCog,
          title: 'Каталог',
          to: '/catalogue'
        },
        {
          icon: mdiCalculator,
          title: 'Калькулятор',
          to: '/calculator'
        }
      ],

      social: [
        {
          link: 'https://vk.com/eurosvaz',
          icon: mdiVk,
          title: 'Наша группа во ВКонтакте'
        },
        {
          link: 'https://www.instagram.com/evrosvyaz_spb/',
          icon: mdiInstagram,
          title: 'Наш аккаунт в Инстаграмм'
        }
      ],

      title: 'ЕВРОСВЯЗЬ'
    }
  },

  methods: {
    onFAB() {
      this.$vuetify.goTo(0)
    },

    onScroll(e) {
      console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop > 200) this.hidden = false
      else this.hidden = true
    }
  }
}
</script>
