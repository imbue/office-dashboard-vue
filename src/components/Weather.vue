<template>
  <tile :position="position" no-fade>
    <div class="markup">
      <h1>{{ weatherCity }}</h1>
      <h1>{{ weather.temperature }}° <span class="text-sm uppercase text-dimmed">outside</span></h1>
      <div v-for="icon in weather.icons" v-bind:key="icon" class="text-4xl mt-2 inline-block -ml-4" v-html="icon"></div>
    </div>
  </tile>
</template>

<script>
import { emoji } from '../utils/helpers'
import Tile from './Tile'
import weather from '../services/weather'

export default {
  components: {
    Tile
  },
  props: {
    weatherCity: {
      type: String
    },
    position: {
      type: String
    }
  },
  data () {
    return {
      weather: {
        temperature: '',
        icons: []
      }
    }
  },
  created () {
    this.fetchWeather()
    setInterval(this.fetchWeather, 15 * 60 * 100)
  },
  methods: {
    async fetchWeather () {
      const condition = await weather.forCity(this.weatherCity)
      let icons = []
      condition.weather
        .slice(0, 1) // There's not enough room for > 1 emoji -> only display the first weather condition
        .forEach(weatherCondition => {
          const isNight = weatherCondition.icon.includes('n')
          const icon = weather.getEmoji(weatherCondition.id, isNight)
          icons.push(emoji(icon))
        })
      this.weather.temperature = condition.main.temp.toFixed(1)
      this.weather.icons = icons
    }
  }
}
</script>
