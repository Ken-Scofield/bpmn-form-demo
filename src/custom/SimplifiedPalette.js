export default class SimplifiedPalette {
  constructor (eventBus, palette, translate) {
    this.eventBus = eventBus
    this.translate = translate

    palette.registerProvider(this)
  }

  getPaletteEntries (element) {
    return function (entries) {
      delete entries['create.group']
      delete entries['create.data-object']
      delete entries['create.data-store']
      delete entries['create.participant-expanded']
      delete entries['create.subprocess-expanded']
      delete entries['create.intermediate-event']
      delete entries['create.sub-progress']
      return entries
    }
  }
}

SimplifiedPalette.$inject = [
  'eventBus',
  'palette',
  'translate'
]
