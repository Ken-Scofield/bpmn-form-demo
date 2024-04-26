// const _getPaletteEntries = PaletteProvider.prototype.getPaletteEntries
// import PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider'
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

    function createServiceTask (event) {
      const shape = elementFactory.createShape({ type: 'bpmn:ServiceTask' })

      create.start(event, shape)
    }

    function createUserTask (event) {
      const shape = elementFactory.createShape({ type: 'bpmn:UserTask' })
      create.start(event, shape)
    }

    return {
      // ...entries,
      'create.user-task': {
        group: 'activity',
        className: 'bpmn-icon-user-task',
        title: translate('Create UserTask'),
        action: {
          dragstart: createUserTask,
          click: createUserTask
        }
      },
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
