import { html } from 'htm/preact'

// import { TextFieldEntry, isTextFieldEntryEdited } from '@bpmn-io/properties-panel'
// load async data
import { isSelectEntryEdited, SelectEntry } from '@bpmn-io/properties-panel'
import { useService } from 'bpmn-js-properties-panel'

// import hooks from the vendored preact package
import { useEffect, useState } from '@bpmn-io/properties-panel/preact/hooks'

export default function (element) {
  return [
    {
      id: 'spell',
      element,
      component: Spell,
      isEdited: isSelectEntryEdited
    }
  ]
}

function Spell (props) {
  const {
    element,
    id
  } = props

  const modeling = useService('modeling')
  const translate = useService('translate')
  const debounce = useService('debounceInput')

  const getValue = () => {
    return element.businessObject.spell || ''
  }

  const setValue = value => {
    return modeling.updateProperties(element, {
      spell: value
    })
  }

  const spellsList = [
    'Avada Kedavra',
    'Crucio',
    'Vulnera Sanentur',
    'Vingardium Leviosa',
    'Alohomora'
  ]

  const [spells, setSpells] = useState([])

  const getSpellsList = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(spellsList)
      }, 500)
    })
  }

  getSpellsList().then(res => {
    console.log('请求结果', res)
  })

  useEffect(() => {
    function fetchSpells () {
      getSpellsList()
        // .then(res => res.json())
        .then(spellbook => setSpells(spellbook))
        .catch(error => console.error(error))
    }

    fetchSpells()
  }, [setSpells])

  const getOptions = () => {
    return [
      {
        label: '<none>',
        value: undefined
      },
      ...spells.map(spell => ({
        label: spell,
        value: spell
      }))
    ]
  }

  // return html`
  //   <${TextFieldEntry}
  //     id=${id}
  //     element=${element}
  //     description=${translate('Apply a black magic spell')}
  //     label=${translate('Spell')}
  //     getValue=${getValue}
  //     setValue=${setValue}
  //     debounce=${debounce}
  //     tooltip=${translate('Check available spells in the spellbook.')}
  //   />`
  return html`
    <${SelectEntry}
      id=${id}
      element=${element}
      description=${translate('Apply a black magic spell')}
      label=${translate('Spell')}
      getValue=${getValue}
      setValue=${setValue}
      getOptions=${getOptions}
      debounce=${debounce}
    />`
}
