<template>
  <div class="sidebar_blk">
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
        <v-list dense class="pt-0 side_bar_li">
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            class="list_li"
            :to="item.name"
            :class="{li_active : item.name === activeli }"
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
      activeli: 'none',
      items: [
        { title: 'Dashboard', name: 'dashboard', icon: 'dashboard' },
        { title: 'User Profile', name: 'userprofile', icon: 'account_circle' },
        { title: 'Notifications', name: 'notifications', icon: 'notification_important' },
        { title: 'Typography', name: 'typography', icon: 'grain' },
        { title: 'Maps', name: 'maps', icon: 'place' },
        { title: 'Table List', name: 'tables', icon: 'table_chart' },

        { title: '', name: '', icon: '' },
        { title: '', name: '', icon: '' },
        { title: '', name: '', icon: '' },
        { title: '', name: '', icon: '' }
      ]
    }
  },
  mounted () {
    this.getPathName()
  },
  methods: {
    getPathName () {
      let pathname = window.location.hash
      for (var i = 0; i < this.items.length; i++) {
        if ('#/' + this.items[i].name === pathname) {
          this.activeli = this.items[i].name
        }
      }
    }

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
  padding: 20px;
  margin: 12px;
  border-radius: 10px;
}
.list_li a.v-list__tile--link:hover {
  background-color: transparent !important;
}
.side_bar_li .list_li a .v-list__tile__title {
  font-size: 16px;
}
.li_active {
  background-color: #8bc34e !important;
}
.sidebar_blk {
  position: fixed;
  width: 25%;
}

</style>
