<template>
  <div class="bpmn-modeler">
    <div id="js-drop-zone" class="content">
      <div class="message intro">
        <div class="note">
          Drop BPMN diagram from your desktop or
          <a id="js-create-diagram" href @click.prevent="createNewDiagram">create a new
            diagram</a> to get started.
        </div>
      </div>
      <div class="message error">
        <div class="note">
          <p>Ooops, we could not display the BPMN 2.0 diagram.</p>

          <div class="details">
            <span>cause of the problem</span>
            <pre></pre>
          </div>
        </div>
      </div>
      <div id="js-canvas" class="canvas bpmn-canvas"></div>
      <div id="js-properties-panel" class="properties-panel-parent"></div>
    </div>
    <!-- saver tools -->
    <saver-tools />
    <!-- editing tools -->
    <editing-tools />
    <!-- zoom control -->
    <zoom-controls />
    <!-- keybindings -->
    <key-bindings />
  </div>
</template>

<script>
import BpmnModeler from 'bpmn-js/lib/Modeler'
import diagramXML from '@/assets/newDiagram.bpmn'
import { debounce, registerFileDrop, setEncoded } from '@/helper'
import {
  BpmnPropertiesPanelModule, BpmnPropertiesProviderModule, CamundaPlatformPropertiesProviderModule
} from 'bpmn-js-properties-panel'
import qaExtension from '@/resources/qaPackage.json'
// camunda
import CamundaBpmnModdle from 'camunda-bpmn-moddle/resources/camunda.json' // new camunda properties
// minimap
import minimapModule from 'diagram-js-minimap'
// magic
import magicPropertiesProviderModule from '@/provider/magic'
import magicModdleDescriptor from '@/descriptors/magic'
// import ElementTemplateChooserModule from '@bpmn-io/element-template-chooser'
// import ZeebeBpmnModdle from 'zeebe-bpmn-moddle/resources/zeebe.json' // Camunda Cloud
// custom control
import customControlsModule from '@/custom'
// import ElementTemplateChooserModule from '@bpmn-io/element-template-chooser'
// create append anything
import { CreateAppendAnythingModule } from 'bpmn-js-create-append-anything'
// extract view component
import ZoomControls from '@/components/ZoomControls'
import EditingTools from '@/components/EditingTools'
import KeyBindings from '@/components/Keybindings'
import SaverTools from '@/components/SaverTools'
// This relies on elementTemplates to be provided via an external module, i.e. bpmn-js-element-templates.
// bpmn-js-connectors-extension
// translator
import translateFunc from '@/translate/translateFunc'

const customTranslateModule = {
  translate: ['value', translateFunc]
}
export default {
  name: 'BpmnModeler',
  components: {
    SaverTools,
    KeyBindings,
    EditingTools,
    ZoomControls
  },
  provide () {
    return {
      modeler: () => this.modeler
    }
  },
  data () {
    return {
      modeler: null,
      diagramXML
    }
  },
  beforeDestroy () {
    document.querySelector('body').classList.remove('shown')
  },
  mounted () {
    this.pageInit()
  },
  methods: {
    pageInit () {
      this.buildModeler()
      // check file api availability
      if (!window.FileList || !window.FileReader) {
        window.alert(
          'Looks like you use an older browser that does not support drag and drop. ' +
          'Try using Chrome, Firefox or the Internet Explorer > 10.')
      } else {
        registerFileDrop(document.getElementById('js-drop-zone'), this.openDiagram)
      }
      this.modeler.on('commandStack.changed', this.exportArtifacts.bind(this))
      // this.modeler.get('elementTemplatesLoader').setTemplates(TEMPLATES)
    },
    async buildModeler () {
      // this.canvas = this.$refs.canvas
      this.modeler = new BpmnModeler({
        container: '#js-canvas',
        keyboard: {
          bindTo: window
        },
        connectorsExtension: {
          appendAnything: false
        },
        propertiesPanel: {
          parent: '#js-properties-panel'
        },
        additionalModules: [
          BpmnPropertiesPanelModule,
          BpmnPropertiesProviderModule,
          CamundaPlatformPropertiesProviderModule,
          // ElementTemplatesPropertiesProviderModule,
          // ZeebePropertiesProviderModule,
          CreateAppendAnythingModule,
          minimapModule,
          magicPropertiesProviderModule,
          customControlsModule,
          customTranslateModule
          // ElementTemplateChooserModule
        ],
        moddleExtensions: {
          camunda: CamundaBpmnModdle,
          qa: qaExtension,
          magic: magicModdleDescriptor
          // zeebe: ZeebeBpmnModdle
        }
      })
    },
    createNewDiagram () {
      this.openDiagram(diagramXML)
    },
    async openDiagram (bpmn) {
      const container = document.getElementById('js-drop-zone')
      const body = document.querySelector('body')
      try {
        await this.modeler.importXML(bpmn)
        container.classList.remove('with-error')
        container.classList.add('with-diagram')
        body.classList.add('shown')
        // this.modeler.get('minimap').open() // open minimap
      } catch (err) {
        container.classList.remove('with-diagram')
        container.classList.add('with-error')
        console.log(err)
      }
    },
    exportArtifacts: debounce(async function () {
      const downloadSvgLink = document.getElementById('js-download-svg')
      const downloadLink = document.getElementById('js-download-diagram')
      try {
        const { svg } = await this.modeler.saveSVG()
        setEncoded(downloadSvgLink, 'diagram.svg', svg)
      } catch (err) {
        console.error('Error happened saving svg: ', err)
        setEncoded(downloadSvgLink, 'diagram.svg', null)
      }
      try {
        const { xml } = await this.modeler.saveXML({ format: true })
        setEncoded(downloadLink, 'diagram.bpmn', xml)
      } catch (err) {
        console.error('Error happened saving XML: ', err)
        setEncoded(downloadLink, 'diagram.bpmn', null)
      }
    }, 500)
  }
}
</script>

<style scoped>

</style>
