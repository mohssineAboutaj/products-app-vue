<template>
	<div class="products-list">
		<div class="row">
			<product-item v-for="item in list" :key="item.id" :item=item />
		</div>
	</div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
	name: "products",
	props: {
		list: Array
	},
	components: {
		'product-item': ProductItem,
	},
}
</script>