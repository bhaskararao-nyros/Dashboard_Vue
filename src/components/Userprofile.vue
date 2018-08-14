<template>
  <div>
    <v-layout row wrap>
      <v-flex xs3>
        <Sidebar></Sidebar>
      </v-flex>
      <v-flex xs9>
        <Navbar titlename="Userprofile"></Navbar>
        <v-layout row wrap class="profile_row">
          <v-flex xs8>
            <v-card>
              <p class="profile_head">Update your profile</p>
              <v-form ref="form" class="user_form">
                <v-text-field
                  v-model="name"
                  label="Username"
                  required
                ></v-text-field>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-text-field
                      v-model="email"
                      label="Firstname"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      v-model="email"
                      label="Lastname"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Phone"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  label="Organization"
                  required
                ></v-text-field>
                <v-btn color="green"
                  @click="submit"
                >
                  submit
                </v-btn>
              </v-form>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-media
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                height="185px"
                class="profile_card"
              ></v-card-media>

              <v-card-title primary-title>
                <div class="card_desc">
                  <h3 class="headline mb-0">Software Engineer</h3>
                  <div>Steve jobs</div>
                </div>
              </v-card-title>

              <v-card-actions class="follow_blk">
                <v-btn color="blue">Follow</v-btn>
              </v-card-actions>
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
  name: 'Userprofile',
  data () {
    return {
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
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
.profile_head {
  font-size: 20px;
  background-color: #8bc34e;
  padding: 15px;
  text-align: center;
  color: #fff;
}
.v-card {
  border: 1px solid #ccc;
}
.user_form .v-input {
  padding: 15px;
  opacity: 0.7;
}
.user_form {
  padding: 20px;
}
.profile_card {
  border-radius: 200px !important;
  width: 55%;
  margin: auto;
  margin-top: 10%;
}
.v-card__title {
  display: block !important; 
}
.card_desc {
  text-align: center;
}
.follow_blk {
  margin-left: 34%;
}
.follow_blk button {
  border-radius: 19px;
}
.profile_row .v-card {
  margin: 10px;
}
.v-btn {
  color: #fff;
}
</style>
