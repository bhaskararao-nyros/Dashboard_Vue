<template>
  <div>
    <v-layout row wrap>
      <v-flex xs3>
        <Sidebar></Sidebar>
      </v-flex>
      <v-flex xs9>
        <Navbar titlename="Typography"></Navbar>
        <v-layout row wrap class="typo_row">
          <v-flex xs12>
            <v-card>
              <p class="typo_head">Typography</p>
              <div class="typo_blk">
                <p><code>.display-4</code><span class="display-4"> Light 112sp</span></p>
                <p><code>.display-3</code><span class="display-3"> Regular 56sp</span></p>
                <p><code>.display-2</code><span class="display-2"> Regular 45sp</span></p>
                <p><code>.display-1</code><span class="display-1"> Regular 34sp</span></p>
                <p><code>.headline</code><span class="headline"> Regular 24sp</span></p>
                <p><code>.title</code><span class="title"> Medium 20sp</span></p>
                <p><code>.subheading</code><span class="subheading"> Regular 16sp</span></p>
                <p><code>.body-2</code><span class="body-2"> Medium 14sp</span></p>
                <p><code>.body-1</code><span class="body-1"> Regular 14sp</span></p>
                <p><code>.caption</code><span class="caption"> Regular 12sp</span></p>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default {
  name: 'Typography',
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
.typo_head {
  font-size: 20px;
  background-color: #43bf8e;
  padding: 15px;
  color: #fff;
  font-size: 20px;
}
.typo_row .v-card {
  margin: 10px;
  border: 1px solid #ccc;
  background-color: #adc9a2;
}
.typo_blk {
  margin: 10px;
}
</style>
