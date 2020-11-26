<template>
  <div>
    <Header />
    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/ui/Header'
import Content from '@/components/ui/Content'

export default {
  name: 'Home',
  components: {
    Header,
    Content
  }
}
</script>
