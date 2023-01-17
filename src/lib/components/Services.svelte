<script>
	import ServicesBackground from './ServicesBackground.svelte';
	import OnPage from '$lib/actions/OnPage';
	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let visible = false;

	let delay1 = 500;
	let delay2 = 30;
	let delay3 = 30;
</script>

<!-- REMEMBER THIS RELATIVE IS NEEDED SO THE SERVICES ABSOLUTE ATTRIBUTES (THE BACKGROUND/WAVE) HAVE SOMETHING TO ATTACH TO, OTHERWISE IT ATTACHES TO THE PAGE ITSELF (EG AT THE TOP RATHER THAN IN THIS SCROLLED DOWN PAGE 2 SECTION) -->

<div class="min-h-screen relative flex bg-[#fad9d8]">
	<ServicesBackground />

	<div class="absolute layeredWaveRed waveStyleRed top-0 z-0 rotate-180 " />
	<div class="absolute layeredWaveRed waveStyleRed bottom-0 z-0  " />

	<div
		class="grid-cols-1 max-w-[1400px] w-full px-[3%] ml-auto mr-auto  mt-auto mb-auto relative "
		use:OnPage
		on:customOnKeyword={({ detail }) => {
			visible = detail;
		}}
	>
		<div
			bind:this={delayConnection}
			class="{visible ? 'visible hiddenPreTransition' : 'hiddenPreTransition'} 
				inline-block text-5xl font-bold mb-1 text-[#3A53B8] relative z-30 title "
		>
			Services
		</div>

		<!-- BULLETS ------------------------------------------------ -->

		<div class="flex {visible ? 'visible hiddenPreTransition' : 'hiddenPreTransition'}  ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 h-6 p-1  stroke-[#3A53B8] fill-none stroke-2"
			>
				<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
			</svg>
			<div class="text-[#3A53B8] text-l flex font-medium mb-1">
				Private, in-person or online sessions
			</div>
		</div>

		<div class="flex {visible ? 'visible hiddenPreTransition' : 'hiddenPreTransition'} ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 h-6 p-1  stroke-[#3A53B8] fill-none stroke-2"
			>
				<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
			</svg>
			<div class="text-[#3A53B8] text-l flex font-medium mb-1">
				Middle school and high school courses
			</div>
		</div>

		<div class="flex {visible ? 'visible hiddenPreTransition' : 'hiddenPreTransition'} ">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 h-6 p-1  stroke-[#3A53B8] fill-none stroke-2"
			>
				<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
			</svg>
			<div class="text-[#3A53B8] text-l flex font-medium mb-1">Specialty subjects include:</div>
		</div>

		<!-- SUBJECT ICONS ------------------------------------------------------------------ -->

		<div
			class="grid grid-cols-6 z-20 relative gap-x-36max-w-[800px] ml-auto mr-auto {visible
				? 'visible hiddenPreTransition'
				: 'hiddenPreTransition'} delay-[8000] "
		>
			<div class="mx-auto col-span-2 math ">
				<img class="h-[100px] w-[100px]" src="math-icon.svg" alt="Student studying math" />
			</div>

			<div class=" mx-auto col-span-2 economics ">
				<img
					class="h-[100px] w-[100px]"
					src="economics-icon.svg"
					alt="Student studying economics"
				/>
			</div>

			<div class="mx-auto col-span-2 history">
				<img class="h-[100px] w-[100px]" src="history-icon.svg" alt="Student studying history" />
			</div>
			<div class="mx-auto col-span-3 translate-x-14 english">
				<img class="h-[100px] w-[100px]" src="english-icon.svg" alt="Student studying english" />
			</div>
			<div class="mx-auto col-span-3 -translate-x-14 science">
				<img class="h-[100px] w-[100px]" src="science-icon.svg" alt="Student studying science" />
			</div>
		</div>
	</div>
</div>

<!-- style --------------------------------------------------------------------- -->
<style>
	:root {
		--delayVariable: inherit;
	}

	.hiddenPreTransition {
		opacity: 0.3;
		filter: blur(5px);
		transform: translateX(-100%);
		transition: all 1s;
		transition-delay: calc(100ms * var(--delayVariable));
	}

	.visible {
		opacity: 1;
		filter: blur(0);
		transform: translateX(0);
	}

	.waveStyleRed {
		aspect-ratio: 960/250;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layeredWaveRed {
		background-image: url('./layered-waves-orange-med.svg');
	}

	.title::after {
		content: '';
		width: 100%;
		height: 8px;
		opacity: 35%;
		position: relative;
		background: #f71912;
		display: block;
		transform: translate(-4px, -8px) scaleX(1) skew(-50deg);
		transform-origin: left;
		z-index: -1;
	}

	.math::before {
		content: 'Math';
		display: flex;
		justify-content: center;
		font-size: x-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #3a53b8;
	}

	.economics::before {
		content: 'Economics';
		display: flex;
		justify-content: center;
		font-size: x-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #3a53b8;
	}

	.history::before {
		content: 'History';
		display: flex;
		justify-content: center;
		font-size: x-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #3a53b8;
	}

	.english::before {
		content: 'English';
		display: flex;
		justify-content: center;
		font-size: x-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #3a53b8;
	}

	.science::before {
		content: 'Science';
		display: flex;
		justify-content: center;
		font-size: x-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #3a53b8;
	}
</style>
