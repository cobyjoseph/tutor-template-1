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
<section class="relative flex  ">
	<LandingBackground />

	<div class="layeredWave waveStyle absolute bottom-0 h-[32rem] w-full" />

	<div class="  flex min-h-screen flex-col px-[7%] pt-40  ">
		<!-- <Menu /> -->

		<div class=" flex flex-col gap-3">
			<div class="gradient relative z-50 bg-clip-text font-extrabold text-transparent ">
				<TypingAnimation />
			</div>

			<img
				class=" relative z-20  flex max-w-[100%] -scale-x-100 self-end "
				src="other/tutor-graphic-1.svg"
				alt="Student working at computer"
			/>
			{#if mountLandingAnimation}
				<div
					transition:fly={{ duration: 400, delay: 3500, easing: sineIn, x: -30 }}
					class=" text-xl text-primary"
				>
					Personalized high school and middle school tutoring for a range of subjects.
				</div>
				<a
					href={'#section2'}
					on:click|preventDefault={scrollIntoView}
					transition:fly={{ duration: 200, delay: 4200, easing: sineIn, y: 30 }}
					class="  buttonUnderline bg-clip relative z-40 mt-4 inline-block text-4xl font-bold text-primaryBright   "
				>
					See services
				</a>
			{/if}
		</div>
	</div>
</section>

<!-- both columns end -->
<style>
	section {
		background-image: url(/waves/central-wave.svg);
		background-position: 3%;
		background-size: cover;
		background-repeat: no-repeat;
		display: block;
	}

	.gradient {
		background-image: linear-gradient(120deg, #cc3232, #f6991b 100%);
	}

	.buttonUnderline {
		position: relative;
		z-index: 50;
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
