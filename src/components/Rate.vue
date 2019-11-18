<template>
	<div class="rate">
		<font-awesome-icon v-for="(s, index) in stars" :key="index" :icon="[s,'star']" class="icon active" />
	</div>
</template>

<script>
export default {
	name: 'rate',
	props: {
		score: Number,
	},
	data(props) {
		return {
			stars: this.addStars(props.score),
		}
	},
	methods: {
		addStars: (theScore) => {
			let rateStars = [];
			for (let i = 1;i <= 5;i++) {
				if (i <= theScore) {
					rateStars.push("fa")
				} else {
					rateStars.push("far")
				}
			}
			return rateStars;
		}
	},
}
</script>