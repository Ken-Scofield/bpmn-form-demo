<template>
  <div id="form-editor"></div>
</template>

<script>
import { FormPlayground } from '@bpmn-io/form-js'
import FeedbackButtonRenderExtension from '@/extension/custom-button/render'
import FeedbackButtonPropertiesPanelExtension from '@/extension/custom-button/propertiesPanel'
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
      formBuilder: null
    }
  },
  mounted () {
    this.initFormBuilder()
  },
  methods: {
    async initFormBuilder () {
      const formPlayground = new FormPlayground({
        container: document.querySelector('#form-editor'),
        schema: schema,
        data: {},
        additionalModules: [
          FeedbackButtonRenderExtension,
          RenderExtension
        ],
        editorAdditionalModules: [
          FeedbackButtonPropertiesPanelExtension,
          PropertiesPanelExtension
        ]
      })
      console.log(formPlayground)
    }
  }
}
</script>

<style scoped>

</style>
