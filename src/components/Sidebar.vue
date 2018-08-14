<template>
  <div>
    <v-card dark color="primary">
      <v-navigation-drawer permanent class="side_bar">
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">
                Application
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list dense class="pt-0">
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            class="list_li"
            :to="item.name"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Notifications',
  data () {
    return {
      items: [
        { title: 'Dashboard', name: 'dashboard', icon: 'dashboard' },
        { title: 'User Profile', name: 'userprofile', icon: 'account_circle' },
        { title: 'Notifications', name: 'notifications', icon: 'notification_important' },
        { title: 'Icons', name: 'icons', icon: 'grain' },
        { title: 'Maps', name: 'maps', icon: 'place' },
        { title: 'Table List', name: 'tables', icon: 'table_chart' },

        { title: '', name: '', icon: '' },
        { title: '', name: '', icon: '' },
        { title: '', name: '', icon: '' },
        { title: '', name: '', icon: '' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.side_bar {
  width: 100% !important;
  position: relative;
  top: 0;
  bottom: 0;
}
.list_li {
  height: 80px !important;
  padding: 10px;
}

</style>
