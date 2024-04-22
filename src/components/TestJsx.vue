<script type="text/jsx">
export default {
  name: 'TestJsx',
  data () {
    return {
      name: 'JSX'
    }
  },
  render (createElement, context) {
    // const { data } = context
    return <div>{this.name} cp</div>
  }
}
</script>

<style scoped>

</style>
