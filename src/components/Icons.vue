<template>
  <div>
    <v-layout row wrap>
      <v-flex xs3>
        <Sidebar></Sidebar>
      </v-flex>
      <v-flex xs9>
        <Navbar titlename="Icons"></Navbar>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default {
  name: 'Icons',
  data () {
    return {
    }
  },
  components: {
    Sidebar,
    Navbar
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
