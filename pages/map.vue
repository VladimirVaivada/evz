<template>
  <v-container
    fill-height
    style="flex-direction: column; align-items: end"
    class="py-6"
  >
    <v-card id="js-ymap" class="map" color="primary darken-3">
      <p
        style="position:absolute; top: 1em; left: 1em;"
        class="headline white--text"
      >
        Загрузка карты...
      </p>
    </v-card>
    <v-overlay v-if="!mapLoaded">
      <v-progress-circular v-if="!mapLoaded" indeterminate size="64" />
    </v-overlay>
  </v-container>
</template>

<script>
// FIXME: Изменить поведение карты при изменении размеров экрана
export default {
  data() {
    return {
      mapLoaded: false,
      currentMap: undefined
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.showYandexMap()
    })
  },
  methods: {
    declareYandexMapInitFunction() {
      const scriptTag = document.createElement('script')
      scriptTag.type = 'text/javascript'
      scriptTag.innerHTML = `
      var myMap;
      var myPlacemark;

      function initializeYandexMap(ymaps) {
        myMap = new ymaps.Map('js-ymap', {
          center: [60.0045, 30.2965],
          zoom: 16
        });
        myPlacemark1 = new ymaps.Placemark(
          [60.0055664124, 30.296174999794],
          {
			hintContent: 'Евросвязь',
			balloonContent: '"Евросвязь" - скупка, ремонт и продажа',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: 'placemark.png',
            iconImageSize: [80, 66],
            iconImageOffset: [-20, -66]
          }
        );
        myPlacemark2 = new ymaps.Placemark(
          [60.003556, 30.296627],
          {
			hintContent: 'Евросвязь',
			balloonContent: '"Евросвязь" - скупка, ремонт и продажа',
          },
          {
            iconLayout: 'default#image',
            iconImageHref: 'placemark.png',
            iconImageSize: [80, 66],
            iconImageOffset: [-20, -66]
          }
        );
        myMap.geoObjects.add(myPlacemark1).add(myPlacemark2);
      }`
      document.body.appendChild(scriptTag)
    },
    loadYandexMap() {
      const scriptTag = document.createElement('script')
      scriptTag.type = 'text/javascript'
      scriptTag.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=c4b1cf5e-6c57-4516-bc46-fb491cb96848&onload=initializeYandexMap`
      document.body.appendChild(scriptTag)
      return scriptTag
    },
    showYandexMap() {
      if (!this.mapLoaded) {
        this.declareYandexMapInitFunction()
        this.currentMap = this.loadYandexMap()
        this.mapLoaded = true
      } else {
        document.body.removeChild(this.currentMap)
        this.currentMap = this.loadYandexMap()
      }
    }
  },
  head() {
    return {
      title: 'Карта',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Страница с картой расположения компании Евросвязь, Санкт-Петербург, м.Политехническая. Которая предлагает качественный и быстрый ремонт телефонов и другой цифровой техники. Высокий уровень сервиса и умеренные цены.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.map {
  overflow: hidden;
  height: 100%;
  width: 100%;
}
</style>
