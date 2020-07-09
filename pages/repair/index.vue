<template lang="pug">
  v-container
    v-row
      v-col(cols="12")
        v-card(light)

          v-toolbar(color="primary darken-3" dark)
            v-toolbar-title Ремонт

          v-breadcrumbs(:items="breadcrumbs")

          v-card-text
            v-card-title О ремонте цифровой техники в нашей компании

            p В этом разделе мы постарались собрать для Вас полезную информацию по вопросам ремонта мобильных телефонов, планшетов, ноутбуков и иной цифровой техники.

            p Ищите ремонт поблизости от Вас, нужен ремонт айфона или другого устройства на Пионерской? Вашему смартфону пора бы заменить стекло или защитный экран? Хотите чтобы ваш планшет снова работал, даже после того, как Вы случайно уронили его в ванной?

            p Мы с радостью Вам поможем! Мы расскажем Вам, что сломалось и как это починить. Сколько потребуется времени и сколько это будет стоить.

            p Наши специалисты знают и могут рассказать Вам гораздо больше, чем возможно разместить на страницах данного раздела. Но не волнуйтесь, если после прочтения у Вас останутся какие-то вопросы, Вы всегда сможете задать их по электронной почте, позвонив потелефону, написав в группах в социальных сетях или при личном посещении нашего сервисного центра.

            p Перечислим основные виды работ по ремонту смартфонов:

            ul
              li Замена экрана (тачскрина), дисплея или дисплейного модуля;
              li Замена шлейфа;
              li Ремонт или замена кнопки, джойстика, разъёма;
              li Замена корпуса смартфона (полная или частичная);
              li Ремонт или замена любой платы (процессора, контроллера питания и др.);
              li Восстановление boot записи (системного загрузчика);
              li Восстановление телефона после после падения или попадания воды (залития);
              li Замена прошивки телефона (перепрошивка);
              li Восстановление данных на телефоне;

            v-card-title Профессионально ремонтируем смартфоны и планшеты марок:

            ul
              li: nuxt-link(to="/repair/apple") Apple
              li: nuxt-lina(to="/repair/acer") Acer
              li: nuxt-lina(to="/repair/asus") Asus
              li: nuxt-lina(to="/repair/alcatel") Alcatal
              li: nuxt-lina(to="/repair/htc") HTC
              li: nuxt-lina(to="/repair/huawei") Huawei
              li: nuxt-lina(to="/repair/lenovo") Lenovo
              li: nuxt-lina(to="/repair/lg") LG
              li: nuxt-lina(to="/repair/meizu") Meizu
              li: nuxt-lina(to="/repair/microsoft") Microsoft
              li: nuxt-lina(to="/repair/motorola") Motorola
              li: nuxt-lina(to="/repair/nokia") Nokia
              li: nuxt-lina(to="/repair/oppo") Oppo
              li: nuxt-lina(to="/repair/prestigio") Prestigio
              li: nuxt-lina(to="/repair/samsung") Samsung
              li: nuxt-lina(to="/repair/sony") Sony
              li: nuxt-lina(to="/repair/xiaomi") Xiaomi
              li: nuxt-lina(to="/repair/zte") ZTE
              li и многие другие...

            p В данном списке, конечно же, перечислены далеко не все марки смартфонов. Мы берёмся за ремонт телефона, планшета или ноутбука практически любой из известных миру марок и любой модели.

            p Приходите к нам и лично оцените уровень нашего сервиса, профессионализм наших мастеров и ассортимент продаваемых аксессуаров.

            p Пишите нам на электронную почту или звоните по телефону. Мы всегда рады помочь и ответить на любые Ваши вопросы о ремонте мобильных телефонов, планшетов, ноутбуков или другой цифровой техники.

            p Не забудьте также вступить в наши группы в социальных сетях #[a(href="https://vk.com/eurosvaz") ВКонтакте] и #[a(href="https://www.instagram.com/evrosvyaz_spb/") Инстаграм].

      v-col(cols="12")
        listContacts
</template>

<script>
import listContacts from '@/components/list-contacts.vue'

export default {
  components: {
    listContacts
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Главная', disabled: false, exact: true, link: true, to: '/' },
        {
          text: 'Ремонт',
          disabled: true
        }
      ]
    }
  }
}
</script>
