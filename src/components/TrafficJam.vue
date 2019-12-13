<template>
  <tile :position="position" no-fade>
    <div class="markup">
      <h1>Traffic</h1>
      <p class="text-xl">{{ trafficJam }}</p>
    </div>
  </tile>
</template>

<script>
import Tile from './Tile'
import anwb from '../services/anwb'

export default {
  components: {
    Tile
  },
  props: {
    position: {
      type: String
    }
  },
  data () {
    return {
      trafficJamDistance: null
    }
  },
  computed: {
    trafficJam () {
      let metric = 'm'
      let distance = this.trafficJamDistance
      if (this.trafficJamDistance > 999) {
        metric = 'km'
        distance = this.trafficJamDistance / 1000
      }
      return distance + metric
    }
  },
  created () {
    this.fetchTrafficJamDistance()
    setInterval(this.fetchTrafficJamDistance, 15 * 60 * 100)
  },
  methods: {
    async fetchTrafficJamDistance () {
      this.trafficJamDistance = 0
      await anwb.trafficJam().then((data) => {
        data.roadEntries.map((roadEntries) => {
          roadEntries.events.trafficJams.forEach((trafficJam) => {
            const distance = trafficJam.distance
            if (distance) {
              this.trafficJamDistance += distance
            }
          })
        })
      })
    }
  }
}
</script>
