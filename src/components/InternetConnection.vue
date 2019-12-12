<template>
  <tile :position="position" class="h-full" no-fade>
    <div class="markup">
      <h1>Internet</h1>
      <p class="text-xl">{{ isOnline ? 'Online' : 'No connection'}}</p>
    </div>
  </tile>
</template>

<script>
import Tile from './Tile'

const EVENTS = ['online', 'offline', 'load']

export default {
  components: {
    Tile
  },
  props: ['position'],
  data: () => ({
    isOnline: navigator.onLine || false
  }),
  created () {
    EVENTS.forEach(event => window.addEventListener(event, this.updateOnlineStatus))
  },
  beforeDestroy () {
    EVENTS.forEach(event => window.removeEventListener(event, this.updateOnlineStatus))
  },
  methods: {
    updateOnlineStatus () {
      this.isOnline = navigator.onLine || false
      this.$emit('detected-condition', this.isOnline)
    }
  }
}
</script>
