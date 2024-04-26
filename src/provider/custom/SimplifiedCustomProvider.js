import CustomUserAssignmentProps from '@/provider/custom/parts/CustomUserAssignmentProps'
import { is } from 'bpmn-js/lib/util/ModelUtil'

const LOW_PRIORITY = 500
export default function SimplifiedCustomProvider (propertiesPanel, translate) {
  // constructor (propertiesPanel, translate) {
  //   this.translate = translate
  //   propertiesPanel.registerProvider(this)
  // }

  this.getGroups = function (element) {
    return function (groups) {
      console.log('simple groups------>', groups)
      if (is(element, 'bpmn:UserTask')) {
        console.log('group user task', groups)
        const userAssginGroup = groups.find(({ id }) => id === 'CamundaPlatform__UserAssignment')
        userAssginGroup.entries = [...CustomUserAssignmentProps({ element })]
      }
      const generalGroup = groups.find(({ id }) => id === 'general')
      // const formsGroup = groups.find(({ id }) => id === 'CamundaPlatform__Form')
      if (generalGroup) {
        generalGroup.entries = generalGroup.entries.filter(
          ({ id }) => id !== 'isExecutable'
        )
        console.log('general entries:--->', generalGroup.entries)
      }
      return groups
    }
  }

  propertiesPanel.registerProvider(LOW_PRIORITY, this)
}

SimplifiedCustomProvider.$inject = [
  'propertiesPanel',
  'translate'
]
