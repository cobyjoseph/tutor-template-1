<script>
	import ServicesBackground from '$lib/components/blobs/ServicesBlobs.svelte';
	import OnPage from '$lib/actions/OnPage';
	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let visible;
</script>

<!-- REMEMBER THIS RELATIVE IS NEEDED SO THE SERVICES ABSOLUTE ATTRIBUTES (THE BACKGROUND/WAVE) HAVE SOMETHING TO ATTACH TO, OTHERWISE IT ATTACHES TO THE PAGE ITSELF (EG AT THE TOP RATHER THAN IN THIS SCROLLED DOWN PAGE 2 SECTION) -->

<section class="bg-image relative flow-root min-h-screen">
	<!-- <ServicesBackground /> -->

	<div
		class="layeredWave waveStyle absolute top-0 h-[28rem] w-full rotate-180 lg:h-[25rem] xl:h-[32rem] "
	/>
	<div class="layeredWave waveStyle absolute bottom-0 h-[28rem] w-full lg:h-[25rem] xl:h-[32rem]" />

	<div
		class="font-caveat z-5 absolute -left-9  -top-[1rem] text-[4.5rem] font-bold text-shading md:-top-[2.5rem] md:text-[10rem] "
	>
		SERVICES
	</div>

	<div class="relative flex flex-col  pl-[5%] pr-[5%] text-primary">
		<div
			class="{visible ? 'blurIn visible' : 'blurIn'} 
			titlePseudo z-30 pt-[2.5rem] text-3xl font-bold text-primaryBright md:pt-[3.6rem] sm:text-6xl   "
			style="transition-delay: 100ms;"
			use:OnPage
			on:customOnKeyword={({ detail }) => {
				visible = detail;
			}}
		>
			Services
		</div>
		<!-- Columns separating the text and the icons -->
		<div class="relative ml-auto mr-auto mt-14 grid w-full max-w-[83rem] grid-cols-2  px-14  ">
			<!-- this container div for the two bullets keeps them in the same grid column -->
			<div class="text-3xl font-semibold text-primary  ">
				<div
					class="mb-10 flex flex-grow  {visible ? 'blurIn visible' : 'blurIn'} "
					style="transition-delay: 100ms;"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="flex h-12 w-12 fill-none stroke-secondary stroke-2"
					>
						<path d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
					</svg>
					<div class="flex">Private, in-person or online sessions</div>
				</div>

				<div
					class="flex flex-grow  {visible ? 'blurIn visible' : 'blurIn'} "
					style="transition-delay: 100ms;"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="h-12 w-12 fill-none  stroke-secondary stroke-2 p-1"
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
					class=" math col-span-2 row-span-2 row-start-1 ml-8 {visible
						? 'hiddenPreTransition visible'
						: 'hiddenPreTransition'}"
					style="transition-delay: 300ms"
				>
					<img class="h-[100px] w-[100px]" src="subjects/math.svg" alt="Student studying math" />
				</div>

				<div
					class="  economics col-span-2 col-start-4 row-span-2 row-start-2 mr-8  {visible
						? 'hiddenPreTransition visible'
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
					class=" history col-span-2 row-span-2 row-start-3 ml-8  {visible
						? 'hiddenPreTransition visible'
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
					class=" english col-span-2 col-start-4 row-span-2 row-start-4 mr-8  {visible
						? 'hiddenPreTransition visible'
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
					class=" science col-span-2 row-span-2 row-start-5 ml-8 {visible
						? 'hiddenPreTransition visible'
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
					class="col-span-2 col-start-3 row-start-6 ml-4 mb-4 font-Caveat text-5xl text-secondary {visible
						? 'hiddenPreTransition visible'
						: 'hiddenPreTransition'}"
					style="transition-delay: 1300ms"
				>
					...and more
				</div>
			</div>
		</div>
	</div>
</section>

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

	.titlePseudo::after {
		content: '';
		width: 8rem;
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

	/* MEDIA QUERIES ------------------------------------------------ */
	@media (min-width: 640px) {
		.titlePseudo::after {
			width: 14.5rem;
		}
	}
</style>
