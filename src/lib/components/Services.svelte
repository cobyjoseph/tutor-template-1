<script>
	import ServicesBackground from './ServicesBackground.svelte';
	import OnPage from '$lib/actions/OnPage';
	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let visible;
</script>

<!-- REMEMBER THIS RELATIVE IS NEEDED SO THE SERVICES ABSOLUTE ATTRIBUTES (THE BACKGROUND/WAVE) HAVE SOMETHING TO ATTACH TO, OTHERWISE IT ATTACHES TO THE PAGE ITSELF (EG AT THE TOP RATHER THAN IN THIS SCROLLED DOWN PAGE 2 SECTION) -->

<div class="max-h-screen relative  bg-[#fad9d8]">
	<ServicesBackground />
	<div class="relative layeredWaveRed waveStyleRed mt-auto z-0 rotate-180 outline outline-blue-500 mb-4 max-h-full object-contain p-1" />


	<!-- old classes for div below grid-cols-1 max-h-full max-w-[1400px] w-full px-[3%] ml-auto mr-auto  mt-auto mb-auto outline outline-green-500   -->
	<div
		class=""
		use:OnPage
		on:customOnKeyword={({ detail }) => {
			visible = detail;
		}}
	>
		<div
			class="{visible ? 'visible blurIn' : 'blurIn'} 
				inline-block text-5xl font-bold mb-1 text-[#2b217a] relative z-30 title "
			style="transition-delay: 100ms;"
		>
			Services
		</div>

		<!-- BULLETS ------------------------------------------------ -->

		<div class="flex {visible ? 'visible blurIn' : 'blurIn'} " style="transition-delay: 200ms;">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 h-6 p-1  stroke-title fill-none stroke-2"
			>
				<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
			</svg>
			<div class="text-titles text-l flex font-medium mb-1">
				Private, in-person or online sessions
			</div>
		</div>

		<div class="flex {visible ? 'visible blurIn' : 'blurIn'} " style="transition-delay: 1600ms;">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 h-6 p-1  stroke-title fill-none stroke-2"
			>
				<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
			</svg>
			<div class="text-titles text-l flex font-medium mb-1">
				Middle school and high school courses
			</div>
		</div>

		<div class="flex {visible ? 'visible blurIn' : 'blurIn'} " style="transition-delay: 3000ms;">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-6 h-6 p-1  stroke-title fill-none stroke-2"
			>
				<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
			</svg>
			<div class="text-titles text-l flex font-medium mb-1">Specialty subjects include:</div>
		</div>

		<!-- SUBJECT ICONS ------------------------------------------------------------------ -->

		<div class="grid grid-cols-12 z-20 relative gap-x-36max-w-[800px] ml-auto mr-auto ">
			<div
				class="mx-auto col-span-4 math {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 4000ms"
			>
				<img class="h-[100px] w-[100px]" src="math-icon.svg" alt="Student studying math" />
			</div>

			<div
				class=" mx-auto col-span-4 economics {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 4500ms"
			>
				<img
					class="h-[100px] w-[100px]"
					src="economics-icon.svg"
					alt="Student studying economics"
				/>
			</div>

			<div
				class="mx-auto col-span-4 history  {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 5000ms"
			>
				<img class="h-[100px] w-[100px]" src="history-icon.svg" alt="Student studying history" />
			</div>
			<div
				class="mx-auto col-span-7  english  {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 5500ms"
			>
				<img class="h-[100px] w-[100px]" src="english-icon.svg" alt="Student studying english" />
			</div>
			<div
				class="mx-auto col-span-5  science  {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 6000ms"
			>
				<img class="h-[100px] w-[100px]" src="science-icon.svg" alt="Student studying science" />
			</div>
		</div>
	</div>

	<div class="relative layeredWaveRed waveStyleRed mb-10 z-10  " />
</div>

<!-- style --------------------------------------------------------------------- -->
<style>
	.hiddenPreTransition {
		opacity: 0.3;
		filter: blur(5px);
		transform: translateX(-100vw);
		transition: all 1s;
		/* transition-delay: calc(100ms * var(--delayVariable)); */
	}

	.blurIn {
		opacity: 0.3;
		filter: blur(5px);
		transition: all 1s;
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
