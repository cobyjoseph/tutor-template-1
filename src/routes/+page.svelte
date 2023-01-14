<script lang="ts">
	import Services from '$lib/components/Services.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
	import Menu from '$lib/components/Menu.svelte';

	let scroll;
</script>

<svelte:window bind:scrollY={scroll} />

<div class="">
	<div class="snap-item">
		<Menu />
		<LandingPage />
	</div>
	<div id="section2" class="snap-item">
		<Services text={scroll} />
	</div>
	<div id="section3" class="snap-item">
		<AboutMe />
	</div>
	<div id="section4" class="snap-item">
		<Schedule />
	</div>
</div>

<!-- adding the div below messes up the scroll bar. and doesn't appear. not sure why -->

<!-- <div class="h-10">TEst</div> -->
<style>
	/* Add scroll snap styles */
	.snap-container {
		height: 100vh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory; /* enable vertical snap scrolling and make it mandatory */
	}
	.snap-item {
		scroll-snap-align: center; /* align each item to the start of the container when snapped */
		height: 100vh; /* set the height of each item to the viewport height */
	}
</style>
