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

	<div
		class="  flex min-h-screen flex-col gap-[12vh] px-[7%] sm:gap-[10vh] landscape:h1025:gap-[8vh] landscape:lg:h1025:gap-[18vh] "
	>
		<div class="relative z-[300] flex w-full flex-row place-self-start">
			<Menu />
		</div>

		<div class=" flex flex-col gap-4 landscape:h1025:grid landscape:h1025:grid-cols-4">
			<div class=" relative z-50 bg-clip-text font-extrabold landscape:h1025:col-span-4 ">
				<TypingAnimation />
			</div>

			<img
				class=" relative z-20  flex max-w-[100%] -scale-x-100 self-end  landscape:h415:absolute landscape:h415:top-1/2 landscape:h415:left-1/2 landscape:h415:h-[13rem] landscape:h415:w-[13rem] landscape:h415:-translate-x-[12rem] landscape:h1025:col-span-2 landscape:h1025:col-start-3 landscape:h1025:mt-[-5rem] landscape:h1025:w-full "
				src="other/tutor-graphic-1.svg"
				alt="Student working at computer"
			/>
			{#if mountLandingAnimation}
				<div
					class=" pt-2 landscape:h1025:col-span-2 landscape:h1025:col-start-1 landscape:h1025:row-start-2"
				>
					<div
						transition:fly={{ duration: 400, delay: 3500, easing: sineIn, x: -30 }}
						class=" text-xl text-primary md:text-2xl landscape:h769:md:text-lg "
					>
						Personalized high school and middle school tutoring for a range of subjects.
					</div>
					<a
						href={'#section2'}
						on:click|preventDefault={scrollIntoView}
						transition:fly={{ duration: 200, delay: 4200, easing: sineIn, y: 30 }}
						class="  buttonUnderline bg-clip relative z-40 inline-block pt-3 text-4xl font-bold text-primaryBright sm:pt-6 md:text-5xl md:text-5xl landscape:h415:md:text-xl landscape:h769:md:text-3xl    "
					>
						See services
					</a>
				</div>
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

	.gradientText {
		background-color: #ca4246;

		/* Create the gradient. */
		background-image: linear-gradient(
			45deg,
			#2a2aac 16.666%,
			#cc3232 16.666%,
			#cc3232 33.333%,
			#f6991b 33.333%,
			#f6991b 50%,
			#f6895a 50%,
			#f6895a 66.666%,
			#c8c0b2 66.666%,
			#c8c0b2 83.333%,
			#c8c0b2 83.333%
		);

		background-size: 100%;
		background-repeat: repeat;

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.buttonUnderline {
		position: relative;
		z-index: 50;
	}

	.buttonUnderline:hover {
		background-color: #ca4246;

		/* Create the gradient. */
		background-image: linear-gradient(
			45deg,
			#2a2aac 5%,
			#cc3232 5%,
			#cc3232 10%,
			#f6991b 10%,
			#f6991b 20%,
			#f6895a 20%,
			#f6895a 30%,
			#c8c0b2 30%,
			#c8c0b2 40%,
			#c8c0b2 40%
		);

		background-size: 100%;
		background-repeat: repeat;

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.buttonUnderline:after {
		content: '';
		width: 12rem;
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
		transform: translate(-6px, -3px) skew(-40deg);
		width: 100%;
		opacity: 70%;

		/* Create the gradient. */
		background-image: linear-gradient(
			45deg,
			#2a2aac 16%,
			#cc3232 16%,
			#cc3232 33%,
			#f6991b 33%,
			#f6991b 70%,
			#f6895a 70%,
			#f6895a 96%,
			#c8c0b2 96%,
			#c8c0b2 98%,
			#c8c0b2 98%
		);
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
