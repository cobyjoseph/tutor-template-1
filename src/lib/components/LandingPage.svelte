<script lang="ts">
	import TypingAnimation from './TypingAnimation.svelte';
	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import LandingBackground from './LandingBackground.svelte';

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

	<div class="absolute layeredWave waveStyle bottom-0 z-0" />

	<div class=" grid grid-cols-1 max-w-[83rem] z-10 min-h-screen px-7  ml-auto mr-auto">
		<div class="grid grid-cols-2 ">
			<!-- LEFT COLUMN -->

			<div class=" mt-auto mb-auto -translate-y-12">
				<div class="text-5xl font-extrabold text-transparent bg-clip-text gradient ">
					<TypingAnimation />
				</div>
				{#if mountLandingAnimation}
					<div
						transition:fly={{ duration: 400, delay: 3500, easing: sineIn, x: -30 }}
						class="mt-3  text-xl text-[#544E4E]"
					>
						Personalized high school and middle school tutoring for a range of subjects.
					</div>
					<a
						href={'#section2'}
						on:click|preventDefault={scrollIntoView}
						transition:fly={{ duration: 200, delay: 4200, easing: sineIn, y: 30 }}
						class="  inline-block buttonUnderline mt-2 text-4xl text-titles font-bold bg-clip   "
					>
						See services
					</a>
				{/if}
			</div>

			<!-- LEFT COLUMN END -->

			<div class="mt-auto mb-auto -translate-y-12">
				<img src="tutor-graphic-1.svg" alt="Student working at computer" />
			</div>
		</div>
	</div>
</div>

<!-- both columns end -->
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

	.gradient {
		background-image: linear-gradient(120deg, #3709ee, #0284da 35% 100%);
	}

	.waveStyle {
		aspect-ratio: 960/250;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layeredWave {
		background-image: url('./layered-waves-purple-lg.svg');
	}
</style>
