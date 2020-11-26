<template>
  <div>
    <div>
      <Navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/ui/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>
  
</style>
