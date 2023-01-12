<script lang="ts">
	import Menu from '../lib/components/Menu.svelte';
	import { onMount } from 'svelte';
	import LandingBackground from '$lib/components/LandingBackground.svelte';
	import Services from '$lib/components/Services.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import LandingPage from '$lib/components/LandingPage.svelte';
	import Schedule from '$lib/components/Schedule.svelte';
</script>

<!-- TODO  - ON LARGE SCREEN MAKE EVERYTHING CLOSER TO THE TOP BY INCREASING THE NEGATIVE MARGIN TOP OR SOMETHING -->

<!-- the RELATIVE creates a reference point for the background item, which is absolute. Otherwise it would absolutely position relative to the page itself. And flex is used for the different pages/sections to be one after the other. flex necessary? -->
<div class="flex relative ">
	<LandingBackground />

	<!-- <div class=" flex justify-center items-center min-h-screen"> -->
	<div class=" grid grid-cols-1 max-w-[1400px] z-10 min-h-screen px-[3%]  ml-auto mr-auto">
		<LandingPage />
	</div>
</div>
<!-- end of container holding 2 columns with graphic and hero text-->

<!-- PAGE 2 --------------------------------------------------------------------------------->

<!-- REMEMBER THIS RELATIVE IS NEEDED SO THE SERVICES ABSOLUTE ATTRIBUTES (THE BACKGROUND/WAVE) HAVE SOMETHING TO ATTACH TO, OTHERWISE IT ATTACHES TO THE PAGE ITSELF (EG AT THE TOP RATHER THAN IN THIS SCROLLED DOWN PAGE 2 SECTION) -->

<Services />

<div class="min-h-screen relative bg-[#c3f2e5]">
	<AboutMe />
</div>

<div class="min-h-screen relative bg-[#aad3ff]">
	<Schedule />
</div>
