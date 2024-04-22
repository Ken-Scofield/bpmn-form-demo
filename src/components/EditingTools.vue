<template>
  <div class="io-editing-tools">
    <ul class="io-control-list io-control">
      <li class="">
        <button title="Toggle keyboard shortcuts overlay"
                @click="onShowKeyboard">
          <span class="icon-keyboard" />
        </button>
      </li>
      <li>
        <hr />
      </li>
      <li class="">
        <button jsaction="click:bio.toggleFullscreen"
                title="Toggle Fullscreen">
          <span class="icon-resize-full"> </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EditingTools',
  methods: {
    onShowKeyboard () {
      // const n = navigator.platform
      const bindings = document.querySelector('.keybindings-dialog')
      // const removes = /Mac/.test(n) ? bindings.querySelector('.bindings-default') : bindings.querySelector('.bindings-mac')
      // bindings.removeChild(removes)
      bindings.classList.add('open')
    }
  }
}
</script>

<style scoped>

</style>
