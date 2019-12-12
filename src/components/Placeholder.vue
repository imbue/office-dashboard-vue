<template>
  <tile :position="position" no-fade>
  </tile>
</template>

<script>
import Tile from './Tile'

export default {
  components: {
    Tile
  },
  props: {
    position: {
      type: String
    }
  }
}
</script>
