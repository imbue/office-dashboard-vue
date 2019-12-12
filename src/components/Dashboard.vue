<template>
  <div
    class="fixed pin grid gap-spacing w-screen h-screen p-spacing font-normal leading-normal text-default bg-screen"
    :class="mode"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mode: 'light-mode'
    }
  }
}
</script>
