<template>
  <tile :position="position" no-fade>
      <div class="markup">
        <h1>{{ date }}</h1>
      </div>
      <div class="align-self-center font-bold text-4xl tracking-wide leading-none">{{ time }}</div>
  </tile>
</template>

<script>
import Tile from './Tile'
import moment from 'moment-timezone'
export default {
  components: {
    Tile
  },
  props: {
    dateFormat: {
      type: String,
      default: 'DD-MM-YYYY'
    },
    timeFormat: {
      type: String,
      default: 'HH:mm'
    },
    timeZone: {
      type: String
    },
    position: {
      type: String
    }
  },
  data () {
    return {
      date: '',
      time: ''
    }
  },
  created () {
    this.refreshTime()
    setInterval(this.refreshTime, 1000)
  },
  methods: {
    refreshTime () {
      this.date = moment()
        .tz(this.timeZone)
        .format(this.dateFormat)
      this.time = moment()
        .tz(this.timeZone)
        .format(this.timeFormat)
    }
  }
}
</script>
