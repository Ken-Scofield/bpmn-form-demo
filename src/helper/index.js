export function registerFileDrop (container, callback) {
  function handleFileSelect (e) {
    e.stopPropagation()
    e.preventDefault()
    const files = e.dataTransfer.files
    const file = files[0]
    const reader = new FileReader()
    reader.onload = function (e) {
      const xml = e.target.result
      callback(xml)
    }
    reader.readAsText(file)
  }

  function handleDragOver (e) {
    e.stopPropagation()
    e.preventDefault()
    e.dataTransfer.dropEffect = 'copy' // Explicitly show this is a copy.
  }

  container.addEventListener('dragover', handleDragOver, false)
  container.addEventListener('drop', handleFileSelect, false)
}

export function setEncoded (link, name, data) {
  const encodedData = encodeURIComponent(data)
  if (data) {
    link.classList.add('active')
    link.href = 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData
    link.download = name
  } else {
    link.classList.remove('active')
  }
}

export function debounce (fn, timeout) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      fn.apply(this, args)
    }, timeout)
  }
}
