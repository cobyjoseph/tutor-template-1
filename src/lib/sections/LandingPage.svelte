<script lang="ts">
	import TypingAnimation from '$lib/components/TypingAnimation.svelte';
	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import LandingBackground from '$lib/components/LandingBackground.svelte';
	import Menu from '$lib/components/Menu.svelte';

	export let mountLandingAnimation: Boolean;

	function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<!-- the RELATIVE creates a reference point for the background item, which is absolute. Otherwise it would absolutely position relative to the page itself. And flex is used for the different pages/sections to be one after the other. flex necessary? -->
<div class="flex relative  ">
	<LandingBackground />

	<div class="absolute layeredWave waveStyle w-full bottom-0 " />

	<div class=" grid grid-cols-1 max-w-[83rem] z-10 min-h-screen px-14  ml-auto mr-auto">
		<Menu />

		<div class="grid grid-cols-2 ">
			<!-- LEFT COLUMN -->

			<div class=" mt-auto mb-auto -translate-y-12">
				<div class="text-5xl font-extrabold text-transparent bg-clip-text gradient ">
					<TypingAnimation />
				</div>
				{#if mountLandingAnimation}
					<div
						transition:fly={{ duration: 400, delay: 3500, easing: sineIn, x: -30 }}
						class="mt-4  text-xl text-primary"
					>
						Personalized high school and middle school tutoring for a range of subjects.
					</div>
					<a
						href={'#section2'}
						on:click|preventDefault={scrollIntoView}
						transition:fly={{ duration: 200, delay: 4200, easing: sineIn, y: 30 }}
						class="  inline-block buttonUnderline mt-7 text-4xl text-primaryBright font-bold bg-clip   "
					>
						See services
					</a>
				{/if}
			</div>

			<!-- LEFT COLUMN END -->

			<div class="mt-auto mb-auto -translate-y-12">
				<img src="other/tutor-graphic-1.svg" alt="Student working at computer" />
			</div>
		</div>
	</div>
</div>

<!-- both columns end -->
<style>
	.gradient {
		background-image: linear-gradient(120deg, #1a1101, #1a1101 55% 100%);
	}

	.buttonUnderline {
		position: relative;
	}

	.buttonUnderline:hover {
		color: transparent;
		background-clip: text;
		background-image: linear-gradient(90deg, #cc3232, #f6991b 100%);
	}

	.buttonUnderline:after {
		content: '';
		width: 100%;
		height: 8px;
		opacity: 70%;
		position: relative;
		background: #f6991b;
		display: block;
		transform: translate(-4px, -8px) scaleX(0.42) skew(-50deg);
		transform-origin: left;
		transition: transform 250ms ease-in;
		z-index: -1;
	}

	.buttonUnderline:hover::after {
		background: linear-gradient(90deg, #cc3232, #f6991b 100%);
		transform: translate(-4px, -3px) skew(-40deg);
		opacity: 70%;
	}

	.waveStyle {
		aspect-ratio: 960/250;
		/* width: 100%; */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layeredWave {
		background-image: url('/waves/short-1.svg');
	}
</style>
