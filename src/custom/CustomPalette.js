// const _getPaletteEntries = PaletteProvider.prototype.getPaletteEntries
export default class CustomPalette {
  constructor (create, elementFactory, palette, translate) {
    this.create = create
    this.elementFactory = elementFactory
    this.translate = translate

    palette.registerProvider(this)
  }

  getPaletteEntries (element) {
    const {
      create,
      elementFactory,
      translate
    } = this

    // const entries = _getPaletteEntries.apply(this)
    // delete entries['create.data-store']

    function createServiceTask (event) {
      const shape = elementFactory.createShape({ type: 'bpmn:ServiceTask' })

      create.start(event, shape)
    }

    return {
      // ...entries,
      'create.service-task': {
        group: 'activity',
        className: 'bpmn-icon-service-task',
        title: translate('Create ServiceTask'),
        action: {
          dragstart: createServiceTask,
          click: createServiceTask
        }
      }
    }
  }
}

CustomPalette.$inject = [
  'create',
  'elementFactory',
  'palette',
  'translate'
]
