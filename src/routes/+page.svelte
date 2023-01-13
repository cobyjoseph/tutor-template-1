<script lang="ts">
	import Services from '$lib/components/Services.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import Menu from '$lib/components/Menu.svelte';
</script>


<div class="snap-container">
	<div class="snap-item">
		<Menu />
		<LandingPage />
	</div>
	<div class="snap-item">
		<Services />
	</div>
	<div class="snap-item">
		<AboutMe />
	</div>
	<div class="snap-item">
		<Schedule />
	</div>
</div>

<style>
	/* Add scroll snap styles */
	.snap-container {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory; /* enable vertical snap scrolling and make it mandatory */
	}
	.snap-item {
		scroll-snap-align: start; /* align each item to the start of the container when snapped */
		height: 100vh; /* set the height of each item to the viewport height */
	}
</style>
