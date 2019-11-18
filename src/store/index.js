import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

/* eslist-disabled: no-console */
export default new Vuex.Store({
  state: {
		productsList: [],
		apiUrl: "https://my-json-server.typicode.com/mohssineAboutaj/api/products",
		axiosOptions: {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		},
  },
  getters: {
		getItems: async (state) => {
			await Axios.get(
				state.apiUrl,
				state.axiosOptions
			).then(res => {
				res.data.map((el) => {
					state.productsList.push(el)
				})
			}).catch(err => {
				throw err
			})
		},
	},
	mutations: {},
  actions: {},
  modules: {},
})
