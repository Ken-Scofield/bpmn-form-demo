<template>
  <div class="io-dialog keybindings-dialog" @click="onHideKeyboard">
    <div v-show="isMacOS" class="content bindings-mac" @click.stop>
      <h1>Keyboard Shortcuts</h1>
      <table>
        <tbody>
          <tr>
            <td>Open diagram from local file system</td>
            <td class="binding">⌘ + O</td>
          </tr>
          <tr>
            <td>Download BPMN 2.0 diagram</td>
            <td class="binding">⌘ + S</td>
          </tr>
          <tr>
            <td>Undo</td>
            <td class="binding">⌘ + Z</td>
          </tr>
          <tr>
            <td>Redo</td>
            <td class="binding">⌘ + ⇧ + Z</td>
          </tr>
          <tr>
            <td>Select All</td>
            <td class="binding">⌘ + A</td>
          </tr>
          <tr>
            <td>Scrolling (Vertical)</td>
            <td class="binding">⌥ + Scrolling</td>
          </tr>
          <tr>
            <td>Scrolling (Horizontal)</td>
            <td class="binding">⌥ + ⇧ + Scrolling</td>
          </tr>
          <tr>
            <td>Direct Editing</td>
            <td class="binding">E</td>
          </tr>
          <tr>
            <td>Hand Tool</td>
            <td class="binding">H</td>
          </tr>
          <tr>
            <td>Lasso Tool</td>
            <td class="binding">L</td>
          </tr>
          <tr>
            <td>Space Tool</td>
            <td class="binding">S</td>
          </tr>
          <tr>
            <td>Replace Tool</td>
            <td class="binding">R</td>
          </tr>
          <tr>
            <td>Append anything</td>
            <td class="binding">A</td>
          </tr>
          <tr>
            <td>Create anything</td>
            <td class="binding">N</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="!isMacOS" class="content bindings-default" @click.stop>
      <h1>Keyboard Shortcuts</h1>
      <table>
        <tbody>
          <tr>
            <td>Open diagram from local file system</td>
            <td class="binding"><code>ctrl + O</code></td>
          </tr>
          <tr>
            <td>Download BPMN 2.0 diagram</td>
            <td class="binding"><code>ctrl + S</code></td>
          </tr>
          <tr>
            <td>Undo</td>
            <td class="binding"><code>ctrl + Z</code></td>
          </tr>
          <tr>
            <td>Redo</td>
            <td class="binding"><code>ctrl + ⇧ + Z</code></td>
          </tr>
          <tr>
            <td>Select All</td>
            <td class="binding"><code>ctrl + A</code></td>
          </tr>
          <tr>
            <td>Scrolling (Vertical)</td>
            <td class="binding"><code>ctrl + Scrolling</code></td>
          </tr>
          <tr>
            <td>Scrolling (Horizontal)</td>
            <td class="binding"><code>ctrl + ⇧ + Scrolling</code></td>
          </tr>
          <tr>
            <td>Direct Editing</td>
            <td class="binding"><code>E</code></td>
          </tr>
          <tr>
            <td>Hand Tool</td>
            <td class="binding"><code>H</code></td>
          </tr>
          <tr>
            <td>Lasso Tool</td>
            <td class="binding"><code>L</code></td>
          </tr>
          <tr>
            <td>Space Tool</td>
            <td class="binding"><code>S</code></td>
          </tr>
          <tr>
            <td>Replace Tool</td>
            <td class="binding">R</td>
          </tr>
          <tr>
            <td>Append anything</td>
            <td class="binding">A</td>
          </tr>
          <tr>
            <td>Create anything</td>
            <td class="binding">N</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeyBindings',
  computed: {
    isMacOS () {
      return /Mac/.test(navigator.platform)
    }
  },
  methods: {
    onHideKeyboard () {
      console.log(22222)
      const bindings = document.querySelector('.keybindings-dialog')
      bindings.classList.remove('open')
    },
    onContentClick () {
      return false
    }
  }
}
</script>

<style scoped>

</style>
