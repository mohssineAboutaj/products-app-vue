<template>
  <div class="home">
		<Products :list="items" />
  </div>
</template>

<script>
import Products from '../components/Products'

export default {
	name: 'home',
	components: {
		Products,
	},
	data() {
		return {
			items: this.$store.state.productsList,
		}
	},
	beforeMount() {
		return this.$store.getters.getItems
	},
}
</script>
