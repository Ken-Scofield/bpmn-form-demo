<template>
  <div class="io-zoom-controls">
    <ul class="io-zoom-reset io-control io-control-list">
      <li>
        <button title="reset zoom" @click="onZoomReset">
          <span class="icon-size-reset"></span>
        </button>
      </li>
      <li>
        <hr />
      </li>
      <li>
        <button title="zoom in" @click="onZoomIn">
          <span class="icon-plus"></span>
        </button>
      </li>
      <li>
        <hr />
      </li>
      <li>
        <button title="zoom out" @click="onZoomOut">
          <span class="icon-minus"></span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ZoomControls',
  inject: ['modeler'],
  methods: {
    onZoomIn () {
      this.modeler().get('zoomScroll').stepZoom(1)
    },
    onZoomOut () {
      this.modeler().get('zoomScroll').stepZoom(-1)
    },
    onZoomReset () {
      this.modeler().get('zoomScroll').reset()
    }
  }
}
</script>

<style scoped>

</style>
