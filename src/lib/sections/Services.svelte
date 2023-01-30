<script>
	import ServicesBackground from '$lib/components/ServicesBackground.svelte';
	import OnPage from '$lib/actions/OnPage';
	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let visible;
</script>

<!-- REMEMBER THIS RELATIVE IS NEEDED SO THE SERVICES ABSOLUTE ATTRIBUTES (THE BACKGROUND/WAVE) HAVE SOMETHING TO ATTACH TO, OTHERWISE IT ATTACHES TO THE PAGE ITSELF (EG AT THE TOP RATHER THAN IN THIS SCROLLED DOWN PAGE 2 SECTION) -->

<div class=" relative flex  min-h-screen">
	<!-- <ServicesBackground /> -->

	<div class="absolute layeredWave waveStyle w-full top-0 rotate-180 " />
	<div class="absolute layeredWave waveStyle w-full bottom-0 " />

	<div class="absolute -top-[2.5rem] -left-9  text-[10rem] font-caveat font-bold z-5 text-shading ">
		SERVICES
	</div>

	<div
		class="{visible ? 'visible blurIn' : 'blurIn'} 
			inline-block absolute top-12 left-16 text-6xl font-bold mb-1 text-primaryBright  z-30 title "
		style="transition-delay: 100ms;"
		use:OnPage
		on:customOnKeyword={({ detail }) => {
			visible = detail;
		}}
	>
		Services
	</div>

	<!-- Columns separating the text and the icons -->
	<div class="grid grid-cols-2 max-w-[83rem] w-full px-14 ml-auto mr-auto mt-14  relative  ">
		<!-- this container div for the two bullets keeps them in the same grid column -->
		<div class="text-primary text-3xl font-semibold  ">
			<div
				class="flex flex-grow mb-10  {visible ? 'visible blurIn' : 'blurIn'} "
				style="transition-delay: 100ms;"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="w-12 h-12 flex stroke-secondary fill-none stroke-2"
				>
					<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
				</svg>
				<div class="flex">Private, in-person or online sessions</div>
			</div>

			<div
				class="flex flex-grow  {visible ? 'visible blurIn' : 'blurIn'} "
				style="transition-delay: 100ms;"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="w-12 h-12 p-1  stroke-secondary fill-none stroke-2"
				>
					<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
				</svg>

				Middle school and high school courses
			</div>
		</div>

		<!-- SUBJECT ICONS ------------------------------------------------------------------ -->

		<!-- change these margins on each grid element on differnet sized screens -->
		<div class="grid grid-cols-4 gap-y-10 ">
			<div
				class=" col-span-2 row-span-2 row-start-1 math ml-8 {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 300ms"
			>
				<img class="h-[100px] w-[100px]" src="subjects/math.svg" alt="Student studying math" />
			</div>

			<div
				class="  col-span-2 row-span-2 row-start-2 col-start-4 mr-8 economics  {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 500ms"
			>
				<img
					class="h-[100px] w-[100px]"
					src="subjects/economics.svg"
					alt="Student studying economics"
				/>
			</div>

			<div
				class=" col-span-2 row-span-2 row-start-3 history ml-8  {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 700ms"
			>
				<img
					class="h-[100px] w-[100px]"
					src="subjects/history.svg"
					alt="Student studying history"
				/>
			</div>
			<div
				class=" col-span-2 row-span-2 row-start-4 col-start-4 mr-8 english  {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 900ms"
			>
				<img
					class="h-[100px] w-[100px]"
					src="subjects/english.svg"
					alt="Student studying english"
				/>
			</div>
			<div
				class=" col-span-2 row-span-2 row-start-5 science ml-8 {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 1100ms"
			>
				<img
					class="h-[100px] w-[100px]"
					src="subjects/science.svg"
					alt="Student studying science"
				/>
			</div>
			<div
				class="col-span-2 row-start-6 col-start-3 ml-4 text-secondary text-5xl mb-4 font-Caveat {visible
					? 'visible hiddenPreTransition'
					: 'hiddenPreTransition'}"
				style="transition-delay: 1300ms"
			>
				...and more
			</div>
		</div>
	</div>
</div>

<!-- style --------------------------------------------------------------------- -->
<style>
	.test::before {
		content: 'before';
		margin-right: 1rem;
	}

	.hiddenPreTransition {
		opacity: 0.3;
		filter: blur(5px);
		/* transform: translateX(35vw); */
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

	.waveStyle {
		aspect-ratio: 960/250;
		/* width: 100%;  */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layeredWave {
		background-image: url('/waves/short-2.svg');
	}

	.title::after {
		content: '';
		width: 100%;
		height: 8px;
		opacity: 40%;
		position: relative;
		background: #f6991b;
		display: block;
		transform: translate(-4px, -8px) scaleX(1) skew(-50deg);
		transform-origin: left;
		z-index: -1;
	}

	.math::before {
		content: 'Math';
		position: absolute;
		top: 1rem;
		left: 7rem;
		font-size: xx-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #cc3232;
	}

	.economics::before {
		content: 'Economics';
		position: absolute;
		top: 1rem;
		left: -8rem;
		font-size: xx-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #cc3232;
	}

	.history::before {
		content: 'History';
		position: absolute;
		top: 1rem;
		left: 7rem;
		font-size: xx-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #cc3232;
	}

	.english::before {
		content: 'English';
		position: absolute;
		top: 1rem;
		left: -6rem;
		font-size: xx-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #cc3232;
	}

	.science::before {
		content: 'Science';
		position: absolute;
		top: 1rem;
		left: 7rem;
		font-size: xx-large;
		font-weight: 700;
		font-family: 'Caveat', cursive;
		color: #cc3232;
	}
</style>
