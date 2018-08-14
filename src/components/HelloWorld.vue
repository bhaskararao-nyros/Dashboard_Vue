<template>
  <div>
    <v-layout row wrap>
      <v-flex xs3>
        <Sidebar></Sidebar>
      </v-flex>
      <v-flex xs9 class="main_blk">
        <Navbar titlename="Dashboard"></Navbar>
        <v-layout row wrap class="chart_row">
          <v-flex xs4>
            <v-card class="charts_blk">
              <div class="chart_div">
                <GChart
                  type="ColumnChart"
                  :data="chartData"
                  :options="chartOptions"
                />
                <h3>Daily Sales</h3>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card class="charts_blk">
              <div class="chart_div">
                <GChart
                  type="LineChart"
                  :data="chartData"
                  :options="chartOptions"
                />
                <h3>Email Subscription</h3>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card class="charts_blk">
              <div class="chart_div">
                <GChart
                  type="PieChart"
                  :data="chartData"
                  :options="chartOptions"
                />
                <h3>Completed Tasks</h3>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="info_row">
          <v-flex xs3>
            <v-card>
              <v-icon class="money_icon">money</v-icon>
              <span class="money_txt">$34,245</span><br>
              <span class="money_tag">Revenue</span>
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-card>
              <v-icon class="storage_icon">bookmarks</v-icon>
              <span class="storage_txt">49/50 GB</span><br>
              <span class="money_tag">Used space</span>
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-card>
              <v-icon class="err_icon">error_outline</v-icon>
              <span class="err_txt">75</span><br>
              <span class="money_tag">Fixed issues</span>
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-card>
              <v-icon class="social_icon">error_outline</v-icon>
              <span class="social_txt">+245</span><br>
              <span class="money_tag">Followers</span>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="last_row">
          <v-flex xs6>
            <v-card>
              <div class="emp_status_head">
                <h3>Employee Status</h3>
              </div>
              <v-list>
                <v-list-tile
                  v-for="emp in employees"
                  :key="emp.id"
                  avatar
                >
                  <v-list-tile-content>
                    <v-list-tile-title v-text="emp.id"></v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-content>
                    <v-list-tile-title v-text="emp.name"></v-list-tile-title>
                  </v-list-tile-content>

                  <v-list-tile-content>
                    <v-list-tile-title v-text="emp.salary"></v-list-tile-title>
                  </v-list-tile-content>

                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
           <v-flex xs6>
            <v-card class="tabs_card">
              <div class="tasks_head">
                <h3>Tasks</h3>
              </div>
              <v-toolbar
                color="cyan"
                dark
                tabs
                class="tabs_toolbar"
              >
                <v-tabs
                  slot="extension"
                  v-model="tab"
                  color="cyan"
                  grow
                  class="tab_bb"
                >
                  <v-tabs-slider color="yellow"></v-tabs-slider>
                  <v-tab
                    v-for="item in items"
                    :key="item"
                  >
                    {{ item }}
                  </v-tab>
                </v-tabs>
              </v-toolbar>
               <v-tabs-items v-model="tab">
                <v-tab-item
                  v-for="item in items"
                  :key="item"
                >
                  <v-card flat>
                    <v-list>
                      <v-list-tile v-for="i in 5"
                  :key="i">
                        <v-list-tile-content>
                          <v-list-tile-title>
                          <v-checkbox
                            :label="Checkbox"
                          ></v-checkbox>
                          </v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-content>
                          <v-list-tile-title>Information</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-content>
                          <v-list-tile-title><v-icon>edit</v-icon></v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-content>
                          <v-list-tile-title><v-icon>clear</v-icon></v-list-tile-title>
                        </v-list-tile-content>

                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
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
  name: 'HelloWorld',
  data () {
    return {
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      },
      employees: [{id: 'ID', name: 'Name', salary: 'Salary'},
        {id: 1, name: 'John', salary: '$2000'},
        {id: 2, name: 'Albert', salary: '$2500'},
        {id: 3, name: 'Dhoni', salary: '$3500'},
        {id: 4, name: 'Kohli', salary: '$4500'},
        {id: 5, name: 'Sindhu', salary: '$5000'}],
      tab: null,
      items: [
        'bugs', 'website', 'server'
      ]
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.charts_blk {
  text-align: center;
}
.chart_div {
  padding: 10px;
}
.info_row, .last_row{
  margin-top: 2%;
}
.info_row .xs3 .v-card {
  padding: 10px;
}
.money_icon {
  background-color: #3dcb9b;
  padding: 20px;
}
.storage_icon {
  background-color: #e0cb2d;
  padding: 20px;
}
.err_icon {
  background-color: #f8564a;
  padding: 20px;
}
.social_icon {
  background-color: #3ddee4;
  padding: 20px;
}
.money_txt, .storage_txt, .err_txt, .social_txt {
  font-size: 25px;
  opacity: 0.6;
  padding-left: 4%;
}
.main_blk {
  background-color: #fff;
}
.money_tag {
  font-size: 18px;
  opacity: 0.7;
}
.chart_div h3 {
  opacity: 0.7;
}
.emp_status_head {
  padding: 20px;
  background-color: #f5b534;
  text-align: center;
}
.tasks_head {
  padding: 19.5px;
  background-color: #3dcc67;
  text-align: center;
}
nav.tabs_toolbar div.v-toolbar__content {
  height: 10px !important;
}
.chart_row {
  margin-top: 2%;
}
/*.main_blk {
  background-color: #ccc;
}*/
</style>
