import { useService } from 'bpmn-js-properties-panel'
import { getBusinessObject } from 'bpmn-js/lib/util/ModelUtil'
import { TextFieldEntry } from '@bpmn-io/properties-panel'

export function AssigneeComponent (props) {
  const {
    element
  } = props
  const commandStack = useService('commandStack')
  const translate = useService('translate')
  const debounce = useService('debounceInput')
  const businessObject = getBusinessObject(element)
  const getValue = () => {
    return businessObject.get('camunda:assignee')
  }
  const setValue = value => {
    commandStack.execute('element.updateModdleProperties', {
      element,
      moddleElement: businessObject,
      properties: {
        'camunda:assignee': value
      }
    })
  }
  return TextFieldEntry({
    element,
    id: 'assignee',
    label: translate('Assignee'),
    getValue,
    setValue,
    debounce
  })
}
