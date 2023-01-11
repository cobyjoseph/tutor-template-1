<script lang="ts">
	import Menu from '../lib/components/Menu.svelte';
	import { onMount } from 'svelte';
	import Background from '$lib/components/Background.svelte';
	import TypingAnimation from '$lib/components/TypingAnimation.svelte';
	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import Serivces from '$lib/components/Serivces.svelte';

	let mountAnimations = false;

	onMount(async () => {
		mountAnimations = true;
	});
</script>

<!-- TODO  - ON LARGE SCREEN MAKE EVERYTHING CLOSER TO THE TOP BY INCREASING THE NEGATIVE MARGIN TOP OR SOMETHING -->

<!-- the RELATIVE creates a reference point for the background item, which is absolute. Otherwise it would absolutely position relative to the page itself. And flex is used for the different pages/sections to be one after the other. flex necessary? -->
<div class="flex relative ">
	<Background />

	<!-- <div class=" flex justify-center items-center min-h-screen"> -->
	<div class="px-[3%] grid grid-cols-1 max-w-[1400px] z-10 ml-auto mr-auto min-h-screen ">
		<div class="grid grid-cols-2  p-2 ">
			<!-- LEFT COLUMN -->

			<div class=" mt-auto mb-auto -translate-y-12">
				<div class="text-5xl font-extrabold text-transparent bg-clip-text gradient ">
					<TypingAnimation />
				</div>
				{#if mountAnimations}
					<div
						transition:fly={{ duration: 400, delay: 3500, easing: sineIn, x: -30 }}
						class="mt-3  text-xl text-[#544E4E]"
					>
						Tutoring for a wide range of subjects and ages.
					</div>
					<div
						transition:fly={{ duration: 200, delay: 4200, easing: sineIn, y: 30 }}
						class=" inline-block buttonUnderline mt-2 text-4xl text-[#2b217a] font-bold bg-clip   "
					>
						See services
					</div>
				{/if}
			</div>

			<!-- LEFT COLUMN END -->

			<div class="mt-auto mb-auto -translate-y-12">
				<img src="tutor-graphic-1.svg" alt="Student working at computer" />
			</div>
		</div>
		<!-- both columns end -->
	</div>
	<!-- end of container holding 2 columns with graphic and hero text-->
</div>

<!-- PAGE 2 --------------------------------------------------------------------------------->

<!-- REMEMBER THIS RELATIVE IS NEEDED SO THE SERVICES ABSOLUTE ATTRIBUTES (THE BACKGROUND/WAVE) HAVE SOMETHING TO ATTACH TO, OTHERWISE IT ATTACHES TO THE PAGE ITSELF (EG AT THE TOP RATHER THAN IN THIS SCROLLED DOWN PAGE 2 SECTION) -->
<div class="min-h-screen relative bg-[#fca7a4]">
	<Serivces />
</div>

<div class="min-h-screen relative bg-[#40C9A5]">
	<Serivces />
</div>

<div class="min-h-screen relative bg-[#56A6F9]">
	<Serivces />
</div>

<!-- STYLE------------------------------------------------------------------------------ -->
<style>
	.gradient {
		background-image: linear-gradient(120deg, #3709ee, #0284da 55% 100%);
	}

	.buttonUnderline {
		position: relative;
	}

	.buttonUnderline:hover {
		color: transparent;
		background-clip: text;
		background-image: linear-gradient(90deg, #3709ee, #0284da 55% 100%);
	}

	.buttonUnderline:after {
		content: '';
		width: 100%;
		height: 8px;
		opacity: 40%;
		position: relative;
		background: #0284da;
		display: block;
		transform: translate(-4px, -8px) scaleX(0.42) skew(-50deg);
		transform-origin: left;
		transition: transform 250ms ease-in;
		z-index: -1;
	}

	.buttonUnderline:hover::after {
		background: linear-gradient(90deg, #3709ee, #0284da 65% 100%);
		transform: translate(-4px, -3px) skew(-40deg);
		opacity: 70%;
	}
</style>
