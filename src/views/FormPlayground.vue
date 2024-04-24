<template>
  <div id="form-editor"></div>
</template>

<script>
import { FormPlayground } from '@bpmn-io/form-js'
// import FeedbackButtonRenderExtension from '@/extension/custom-button/render'
// import FeedbackButtonPropertiesPanelExtension from '@/extension/custom-button/propertiesPanel'
import schema from '@/resources/schemas/empty.json'
import RenderExtension from '@/extension/custom-range/render'
import PropertiesPanelExtension from '@/extension/custom-range/propertiesPanel'
import aa from '@/assets/logo.png'
import bb from '@/extension/custom-range/render/range.svg'

console.log('导入png', aa)
console.log('导入svg', bb)
export default {
  name: 'FormPlayground',
  data () {
    return {
      formPlayground: null
    }
  },
  mounted () {
    this.initFormBuilder()
  },
  beforeDestroy () {
    this.formPlayground && this.formPlayground.destroy()
  },
  methods: {
    async initFormBuilder () {
      this.formPlayground = new FormPlayground({
        container: document.querySelector('#form-editor'),
        schema: schema,
        data: {},
        additionalModules: [
          // FeedbackButtonRenderExtension,
          RenderExtension
        ],
        editorAdditionalModules: [
          // FeedbackButtonPropertiesPanelExtension,
          PropertiesPanelExtension
        ]
      })
      console.log(this.formPlayground)
    }
  }
}
</script>

<style scoped>

</style>
