<template>
  <div>
    <v-layout row wrap>
      <v-flex xs3>
        <Sidebar></Sidebar>
      </v-flex>
      <v-flex xs9>
        <Navbar titlename="Notifications"></Navbar>
        <v-layout row wrap class="notifi_row">
          <v-flex xs12>
            <v-card>
              <p class="notifi_head">Notifications</p>
                <v-layout row wrap class="notifi_alerts">
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="blue"
                    >
                      This is plain notification
                    </v-alert>
                  </v-flex>
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="blue"
                    >
                      This is info notification
                    </v-alert>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="notifi_alerts">
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="blue"
                      dismissible
                    >
                      This is a removable notification
                    </v-alert>
                  </v-flex>
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="green"
                    >
                      This is success notification
                    </v-alert>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="notifi_alerts">
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="blue"
                      type="info"
                    >
                      This is a plain notification with icon
                    </v-alert>
                  </v-flex>
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="orange"
                    >
                      This is warning notification
                    </v-alert>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="notifi_alerts">
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="blue"
                      type="info"
                      dismissible
                      outline
                    >
                      This is a plain notification with outling style
                    </v-alert>
                  </v-flex>
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="red"
                    >
                      This is danger notification
                    </v-alert>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="notifi_alerts">
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="blue"
                      icon="new_releases"
                    >
                      This is a regular notification with a custom icon.
                    </v-alert>
                  </v-flex>
                  <v-flex xs6>
                    <v-alert
                      :value="true"
                      color="pink"
                    >
                      This is primary notification
                    </v-alert>
                  </v-flex>
                </v-layout>
            </v-card>
          </v-flex>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card class="btns_card">
              <p class="notifi_place_head">Click on below buttons to place notifications</p>
                <v-layout row wrap>
                  <v-flex xs3>
                    <v-btn block color="orange" @click="placeNotif('top-right')" dark>Top Right</v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn block color="orange" @click="placeNotif('top-left')" dark>Top Left</v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn block color="orange" @click="placeNotif('btm-right')" dark>Bottom Right</v-btn>
                  </v-flex>
                  <v-flex xs3>
                    <v-btn block color="orange" @click="placeNotif('btm-left')" dark>Bottom Left</v-btn>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-layout>
        <div class="top_right_notif" v-if="top_right_notif">
          <v-alert
            :value="true"
            color="blue"
          >
            This is a top right notification
          </v-alert>
        </div>
        <div class="top_left_notif" v-if="top_left_notif">
          <v-alert
            :value="true"
            color="blue"
          >
            This is a top left notification
          </v-alert>
        </div>
        <div class="btm_right_notif" v-if="btm_right_notif">
          <v-alert
            :value="true"
            color="blue"
          >
            This is a bottom right notification
          </v-alert>
        </div>
        <div class="btm_left_notif" v-if="btm_left_notif">
          <v-alert
            :value="true"
            color="blue"
          >
            This is a top right notification
          </v-alert>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

export default {
  name: 'Notifications',
  data () {
    return {
      top_right_notif: false,
      top_left_notif: false,
      btm_right_notif: false,
      btm_left_notif: false
    }
  },
  components: {
    Sidebar,
    Navbar
  },
  methods: {
    placeNotif (tag) {
      if (tag === 'top-right') {
        this.top_right_notif = true
        setTimeout(function () {
          this.top_right_notif = false
        }.bind(this), 3000)
      }
      if (tag === 'top-left') {
        this.top_left_notif = true
        setTimeout(function () {
          this.top_left_notif = false
        }.bind(this), 3000)
      }
      if (tag === 'btm-right') {
        this.btm_right_notif = true
        setTimeout(function () {
          this.btm_right_notif = false
        }.bind(this), 3000)
      }
      if (tag === 'btm-left') {
        this.btm_left_notif = true
        setTimeout(function () {
          this.btm_left_notif = false
        }.bind(this), 3000)
      }
    }
  }
}
</script>

<style scoped>
.notifi_head {
  font-size: 20px;
  background-color: #8bc34e;
  padding: 15px;
  color: #fff;
  font-size: 20px;
}
.notifi_place_head {
  background-color: #35ad8f;
  padding: 15px;
  color: #fff;
  font-size: 18px;
  text-align: center;
}
.notifi_row .v-card {
  margin: 10px;
}
.notifi_row .v-alert {
  opacity: 0.8;
}
.v-card {
  border: 1px solid #ccc;
}
.notifi_alerts {
  padding: 10px;
}
.notifi_alerts .v-alert {
  margin-top: 1%;
}
.notifi_alerts .flex {
  padding-left: 3%;
}
.top_right_notif .v-alert, .top_left_notif .v-alert, .btm_left_notif .v-alert, .btm_right_notif .v-alert {
  width: 50%;
  padding: 3%;
  border-radius: 10px;
}
.top_right_notif {
  position: absolute;
  width: 70%;
  top: 10%;
  right: -16%;
}
.top_left_notif {
  position: absolute;
  width: 70%;
  top: 10%;
  left: 8%;
}
.btm_right_notif {
  position: absolute;
  width: 70%;
  right: -16%;
}
.btm_left_notif {
  position: absolute;
  width: 70%;
  left: 8%;
}
.v-btn {
  color: #fff;
}
.btns_card .flex {
  padding-left: 1%;
  padding-right: 1%
}
</style>
