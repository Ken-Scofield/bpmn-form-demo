import { is } from 'bpmn-js/lib/util/ModelUtil'
import { isTextFieldEntryEdited } from '@bpmn-io/properties-panel'
import { AssigneeComponent } from '@/provider/custom/parts/AssigneeComponent'

export default function CustomUserAssignmentProps (props) {
  const { element } = props
  if (!is(element, 'camunda:Assignable')) {
    return []
  }
  return [
    {
      id: 'assignee',
      component: AssigneeComponent,
      isEdited: isTextFieldEntryEdited
    }
    // {
    //   id: 'candidateGroups',
    //   component: CandidateGroups,
    //   isEdited: isTextFieldEntryEdited
    // },
    // {
    //   id: 'candidateUsers',
    //   component: CandidateUsers,
    //   isEdited: isTextFieldEntryEdited
    // },
    // {
    //   id: 'dueDate',
    //   component: DueDate,
    //   isEdited: isTextFieldEntryEdited
    // },
    // {
    //   id: 'followUpDate',
    //   component: FollowUpDate,
    //   isEdited: isTextFieldEntryEdited
    // },
    // {
    //   id: 'priority',
    //   component: Priority,
    //   isEdited: isTextFieldEntryEdited
    // }
  ]
}
