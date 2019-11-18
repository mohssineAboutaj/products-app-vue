<template>
	<div class="product-item grid sm-12 md-6 lg-4 xl-3">
		<div class="product-card">
			<img class="product-img" :src=item.imgUrl :alt=item.title />
			<div class="product-info">
				<h3 class="product-title">{{item.title}}</h3>
				<div class="product-price">
					<span class="product-price-new">
						$ {{item.price.new}}
					</span>
					<span class="product-price-old">
						$ {{item.price.old}}
					</span>
				</div>
				<div class="product-rate">
					<rate :score="item.rate" />
				</div>
				<div class="product-description">
					{{item.description}}
				</div>
				<div class="product-btn">
					<button>
						<font-awesome-icon :icon="['fa','cart-plus']" class="icon" />
						add to cart
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Rate from './Rate'

export default {
	name: 'product-item',
	props: {
		item: Object,
	},
	components: {
		'rate': Rate,
	},
}
</script>