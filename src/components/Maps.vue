<template>
  <div>
    <v-layout row wrap>
      <v-flex xs3>
        <Sidebar></Sidebar>
      </v-flex>
      <v-flex xs9>
        <Navbar titlename="Maps"></Navbar>
        <GmapMap
          :center="{lat:16.970150, lng:82.204604}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100%; height: 750px"
        >
        </GmapMap>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default {
  name: 'Maps',
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
