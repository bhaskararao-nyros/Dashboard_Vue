<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>{{titlename}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat><v-icon dark>dashboard</v-icon></v-btn>
        <v-btn flat>
          <v-badge left color="red">
            <span slot="badge">6</span>
           <v-icon dark>notification_important</v-icon>
          </v-badge>
        </v-btn>
        <v-btn flat><v-icon dark>account_circle</v-icon></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  props: ['titlename'],
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
