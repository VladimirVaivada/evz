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
				target="_blank"
				rel="noreferrer noopener"
				href="tel:+79523873723"
				class="my-1"
			)
				v-list-item-action
					v-icon(color="red") {{ mdiPhone }}
				v-list-item-content Позвонить

	v-app-bar(:clipped-right="clipped" color="primary darken-4" dark app)
		nuxt-link(to="/" aria-label="На главную страницу" style="text-decoration:none")
			v-img(src="/logo-with-text-optimized.svg" alt="Логотип в виде заряжающейся батарейки")
		// TODO: Сделать логотип на первой странице просто картинкой, без ссылки
		v-spacer
		v-app-bar-nav-icon(aria-label="Навигация по сайту" @click.stop="drawer = !drawer")

			// *****
	v-content(class="blue-grey lighten-5")
		nuxt(keep-alive :keep-alive-props={ max: 2 })
			// *****

	v-footer(color="primary darken-4" elevation="16" dark app fixed)
		v-btn(
			v-for="(item, n) in social"
			:key="n + item.link"
			:aria-label="item.title"
			:href="item.link"
			icon
		)
			v-icon(size="24px") {{ item.icon }}
		v-spacer
		v-btn(aria-label="Позвонить в компанию Евросвязь" href="tel:+79523873723" outlined)
			| Позвонить&nbsp;&nbsp;
			v-icon(size="24px" color="secondary") {{mdiPhone}}
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
  mdiPhone
} from '@mdi/js'

export default {
  name: 'Default',

  data() {
    return {
      hidden: true,

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
  }
}
</script>
