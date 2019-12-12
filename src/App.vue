<template>
  <div id="app">
    <dashboard class="font-sans">
      <Time position="a1:a8" date-format="ddd DD/MM" time-zone="Europe/Amsterdam"></Time>
      <weather position="a9:a16" weather-city="Zwijndrecht"></weather>
      <placeholder position="a17:a24"></placeholder>
      <internet-connection position="b1:b8"></internet-connection>
      <traffic-jam position="c1:c8"></traffic-jam>
    </dashboard>
  </div>
</template>

<script>
import Dashboard from './components/Dashboard'
import Weather from './components/Weather'
import InternetConnection from './components/InternetConnection'
import TrafficJam from './components/TrafficJam'
import Placeholder from './components/Placeholder'
import Time from './components/Time'

export default {
  name: 'app',
  components: {
    TrafficJam,
    Dashboard,
    Time,
    Weather,
    InternetConnection,
    Placeholder
  }
}
</script>

<style lang="postcss">
  @import 'assets/app.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
