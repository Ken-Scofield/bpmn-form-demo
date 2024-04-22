<template>
  <div class="io-import-export">
    <ul class="io-export io-control io-control-text-list io-horizontal">
      <li>
        <span class="saver-down">Download</span>
      </li>
      <li>
        <a id="js-download-diagram" href title="download BPMN diagram" @click="linkAbandon">
          BPMN diagram
        </a>
      </li>
      <li>
        <a id="js-download-svg" href title="download as SVG image" @click="linkAbandon">
          SVG image
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SaverTools',
  methods: {
    linkAbandon (e) {
      if (!e.target.classList.contains('active')) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }
  }
}
</script>

<style scoped>

</style>
