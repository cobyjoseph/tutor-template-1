<script lang="ts">
	import Services from '$lib/sections/Services.svelte';
	import AboutMe from '$lib/sections/AboutMe.svelte';
	import LandingPage from '$lib/sections/LandingPage.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { onMount } from 'svelte';
	import Contact from '$lib/sections/Contact.svelte';

	let mountPassThrough = false;

	onMount(async () => {
		mountPassThrough = true;
	});
</script>

<div class="snap-container">
	<div class="snap-item">
		<LandingPage mountLandingAnimation={mountPassThrough} />
	</div>
	<div id="section2" class="snap-item">
		<Services />
	</div>
	<div id="section3" class="snap-item ">
		<AboutMe />
	</div>
	<div id="section4" class="snap-item">
		<Contact />
	</div>
</div>

<!-- adding the div below messes up the scroll bar. and doesn't appear. not sure why -->

<!-- <div class="h-10">TEst</div> -->
<style>
	/* Add scroll snap styles */
	.snap-container {
		height: 100vh;
		height: 100dvh;
		overflow-y: scroll;
		scroll-snap-type: y mandatory; /* enable vertical snap scrolling and make it mandatory */
	}
	.snap-item {
		scroll-snap-align: center; /* align each item to the start of the container when snapped */
		height: 100%; /* set the height of each item to the viewport height */
	}
</style>
