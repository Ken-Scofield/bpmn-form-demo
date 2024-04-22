<template>
  <div class="home">
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/bpmn-demo">Bpmn Modeler</router-link>
      |
      <router-link to="/bpmn-demo">Bpmn Viewer</router-link>
      |
      <router-link to="/form-builder">Form Builder</router-link>
      |
      <router-link to="/form-playground">Form Playground</router-link>
    </nav>
    <test-jsx />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import TestJsx from '@/components/TestJsx'

export default {
  name: 'HomeView',
  components: {
    TestJsx
    // HelloWorld
  }
}
</script>
