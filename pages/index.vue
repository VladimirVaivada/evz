<template>
  <v-container>
    <v-row align="start">
      <v-col lg="8" order-lg="2" class="pt-0">
        <v-row>
          <v-col cols="12">
            <v-card dark>
              <v-toolbar color="primary darken-3" dense elevation="12">
                <v-toolbar-title class="title">
                  Текущие акции
                </v-toolbar-title>
              </v-toolbar>
              <v-carousel
                :show-arrows="false"
                height="300px"
                cycle
                progress
                progress-color="secondary"
              >
                <v-carousel-item
                  v-for="(slide, i) in slides"
                  :key="i"
                  :src="slide.src"
                >
                  <v-container fluid height="100%">
                    <v-card color="rgba(50,50,60,0.7)" tile>
                      <v-card-title
                        class="text-uppercase"
                        style="word-break: keep-all"
                      >
                        {{ slide.caption || 'Слайд без заголовка' }}
                      </v-card-title>
                    </v-card>
                  </v-container>
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>

          <v-col>
            <v-card color="primary darken-3" dark>
              <v-card-title>
                Приветствуем Вас!
              </v-card-title>
              <v-card-subtitle>
                Вы на главной странице
              </v-card-subtitle>
              <v-card-text>
                <v-card light>
                  <v-card-text>
                    <p>
                      Наша компания рада предложить Вам услуги по скупке,
                      ремонту и продаже планшетов, мобильных телефонов и прочей
                      цифровой техники.
                    </p>
                    <p>
                      Мы дорожим своей репутацией и всегда стремимся предложить
                      свойм клиетам самый высокий уровень сервиса, отличное
                      качество работ и самые лучшие цены.
                    </p>
                    <p>
                      Ждём Вас в нашем салоне, а также будем счастливы ответить
                      на Ваши вопросы по телефону либо электронным письмом.
                    </p>
                  </v-card-text>
                </v-card>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col lg="4" cols="12" order-lg="1" class="pt-lg-3 pt-0">
        <v-row>
          <v-col cols="12" class="pt-0">
            <v-card color="primary darken-3" dark>
              <v-card-title>Интерактивные сервисы</v-card-title>
              <v-card-subtitle>Всё для Вашего удобства</v-card-subtitle>
              <v-card-text>
                <v-card light>
                  <v-card-text>
                    Мы постоянно развиваемся и совершенствуем наши интерактивные
                    сервисы созданные для Вашего удобства.
                  </v-card-text>
                  <v-divider />
                  <v-card-text>
                    Сервис
                    <strong>"Каталог"</strong> поможет подобрать аксессуары и
                    детали необходимые для ремонта Вашего устройства и узнать их
                    атуальную стоимость.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="secondary"
                      style="justify-content: flex-start"
                      block
                      nuxt
                      to="/catalogue"
                      dark
                    >
                      <v-icon class="pr-2">mdi-cellphone-cog</v-icon>
                      Каталог
                    </v-btn>
                  </v-card-actions>
                  <v-card-text>
                    Сервис
                    <strong>"Калькулятор"</strong> поможет Вам предварительно
                    рассчитать стоимость ремонта Вашего устройства.
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="secondary"
                      style="justify-content: flex-start"
                      block
                      nuxt
                      to="/calculator"
                      dark
                    >
                      <v-icon class="pr-2">mdi-calculator</v-icon>
                      Калькулятор
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12">
            <list-contacts />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import listContacts from '~/components/list-contacts.vue'

export default {
  components: { listContacts },
  data() {
    return {
      showArrows: false,
      slides: [
        {
          src: '/hero.optim.webp',
          caption:
            'До 31 августа при любом ремонте - Защитное стекло в подарок (с установкой)'
        }
        //        { src: '/hero.optim.jpg', caption: 'Слайд 2' },
        //        { src: '/hero.optim.jpg', caption: 'Слайд 3' }
      ]
    }
  },
  head() {
    return {
      title: 'Главная',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Главная страница компании Евросвязь, Санкт-Петербург, м.Политехническая. Мы предлагаем качественный и быстрый ремонт телефонов и другой цифровой техники. Высокий уровень сервиса и умеренные цены. На этой странице Вы найдёте всю необходимую информацию про наши акции, интерактивные сервисы, услуги по ремонту телефонов и другой техники, продажу аксессуаров для мобильных телефонов, услуги диагностики, наши контакты и месторасположение.'
        }
      ]
    }
  }
}
</script>
