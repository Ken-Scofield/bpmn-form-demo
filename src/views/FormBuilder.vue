<template>
  <div id="form-editor"></div>
</template>

<script>
import { FormEditor } from '@bpmn-io/form-js'
// import FeedbackButtonRenderExtension from '@/extension/form/render'
// import FeedbackButtonPropertiesPanelExtension from '@/extension/form/propertiesPanel'
import schema from '@/resources/schemas/empty.json'

export default {
  name: 'FormBuilder',
  data () {
    return {
      formBuilder: null
    }
  },
  mounted () {
    this.initFormBuilder()
  },
  beforeDestroy () {
    this.formBuilder && this.formBuilder.destroy()
  },
  methods: {
    async initFormBuilder () {
      // const schema = {
      //   components: [
      //     {
      //       key: 'creditor',
      //       label: 'Creditor',
      //       type: 'textfield',
      //       validate: {
      //         required: true
      //       }
      //     }
      //   ]
      // }
      // const schema = {
      //   schemaVersion: 1,
      //   exporter: {
      //     name: 'form-js',
      //     version: '0.1.0'
      //   },
      //   components: [
      //     {
      //       type: 'text',
      //       text: '# File an Invoice\n\n__Lorem ipsum dolor__ sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu bibendum at [varius vel pharetra vel](http://foo) turpis nunc eget.\n\nAenean et tortor at risus. Ligula ullamcorper malesuada proin libero nunc consequat. Volutpat maecenas volutpat blandit aliquam etiam. Sodales neque sodales ut etiam sit amet nisl purus. Dictumst vestibulum rhoncus est pellentesque elit. \n\n# Another issue\n\n## Sub-heading\n\nArcu bibendum at varius vel pharetra vel turpis nunc eget.\n\n1. Scelerisque varius morbi enim nunc faucibus a. Senectus et netus et malesuada fames ac. \n2. Lorem sed risus ultricies tristique nulla aliquet. \n\nScelerisque felis imperdiet proin fermentum. \n\n* Purus semper eget duis at tellus at. \n* Imperdiet sed euismod nisi porta lorem mollis aliquam. \n* Dictum non consectetur a erat nam at lectus urna duis.\n\n\n## Images\n\n![some small image](https://via.placeholder.com/400x150)\n![ſome big image](https://via.placeholder.com/1000x150)'
      //     }
      //   ],
      //   type: 'default'
      // }
      this.formBuilder = new FormEditor({
        container: document.querySelector('#form-editor')
        // additionalModules: [
        //   FeedbackButtonRenderExtension
        // ],
        // editorAdditionalModules: [
        //   FeedbackButtonPropertiesPanelExtension
        // ]
      })
      console.log(this.formBuilder)
      try {
        await this.formBuilder.importSchema(schema)
      } catch (err) {
        console.error('failed to import form', err)
      }
    }
  }
}
</script>

<style scoped>

</style>
