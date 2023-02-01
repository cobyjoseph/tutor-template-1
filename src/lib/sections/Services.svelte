<script>
	import ServicesBackground from '$lib/components/blobs/ServicesBlobs.svelte';
	import OnPage from '$lib/actions/OnPage';
	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let visible;
</script>

<!-- REMEMBER THIS RELATIVE IS NEEDED SO THE SERVICES ABSOLUTE ATTRIBUTES (THE BACKGROUND/WAVE) HAVE SOMETHING TO ATTACH TO, OTHERWISE IT ATTACHES TO THE PAGE ITSELF (EG AT THE TOP RATHER THAN IN THIS SCROLLED DOWN PAGE 2 SECTION) -->

<section class="bg-image relative flow-root min-h-screen  ">
	<!-- <ServicesBackground /> -->

	<div
		class="layeredWave waveStyle absolute top-0 h-[28rem] w-full rotate-180 lg:h-[25rem] xl:h-[32rem] "
	/>
	<div class="layeredWave waveStyle absolute bottom-0 h-[28rem] w-full lg:h-[25rem] xl:h-[32rem]" />

	<div
		class="font-caveat z-5 absolute -left-4 -top-[1rem]  text-[4.5rem] font-bold text-shading sm:-left-9 sm:-top-[2.5rem] sm:text-[8rem] md:text-[10rem]"
	>
		SERVICES
	</div>

	<!-- This flex-col below contains the page title and all it's content -->
	<div class="relative flex flex-col gap-1 px-[8%] text-primary sm:gap-2">
		<!-- only two things at this top level, the page title and a div that holds the bullet points and the graphic -->
		<div
			class="{visible ? 'blurIn visible' : 'blurIn'} 
			titlePseudo z-30 pt-[2rem] text-3xl font-bold text-primaryBright sm:text-6xl md:pt-[3.6rem]   "
			use:OnPage
			on:customOnKeyword={({ detail }) => {
				visible = detail;
			}}
		>
			Services
		</div>

		<div class=" flex max-w-[83rem] flex-col justify-between gap-5 sm:gap-5 landscape:gap-12  ">
			<!-- I put the gap at this level below because that contains the two bullet points, and I want the gap between them -->
			<div
				class=" flex flex-col gap-3 text-xl  font-semibold text-primary sm:gap-6  sm:text-3xl lg:text-4xl "
			>
				<div class=" {visible ? 'blurIn visible' : 'blurIn'} " style="transition-delay: 100ms;">
					<div class=" bulletPseudo flex ">Private, in-person or online sessions</div>
				</div>

				<div class="  {visible ? 'blurIn visible' : 'blurIn'} " style="transition-delay: 300ms;">
					<div class=" bulletPseudo flex ">Middle school and high school courses</div>
				</div>
			</div>

			<!-- SUBJECT ICONS ------------------------------------------------------------------ -->

			<!-- change these margins on each grid element on differnet sized screens -->

			<div
				class="grid w-full grid-cols-4 gap-y-10 xs:gap-y-[15%] sm:gap-y-[7%] landscape:flex landscape:gap-[10%] "
			>
				<div
					class=" math col-span-2 row-span-2 row-start-1 {visible
						? 'hiddenPreTransition visible'
						: 'hiddenPreTransition'}"
					style="transition-delay: 300ms"
				>
					<img
						class="h-[100px] w-[100px] sm:h-[190px] sm:w-[190px]"
						src="subjects/math.svg"
						alt="Student studying math"
					/>
				</div>

				<div
					class="  economics col-span-2 col-start-4 row-span-2 row-start-2   {visible
						? 'hiddenPreTransition visible'
						: 'hiddenPreTransition'}"
					style="transition-delay: 500ms"
				>
					<img
						class="h-[100px] w-[100px] sm:h-[190px] sm:w-[190px]"
						src="subjects/economics.svg"
						alt="Student studying economics"
					/>
				</div>

				<div
					class=" history col-span-2 row-span-2 row-start-3  {visible
						? 'hiddenPreTransition visible'
						: 'hiddenPreTransition'}"
					style="transition-delay: 700ms"
				>
					<img
						class="h-[100px] w-[100px] sm:h-[190px] sm:w-[190px]"
						src="subjects/history.svg"
						alt="Student studying history"
					/>
				</div>
				<div
					class=" english col-span-2 col-start-4 row-span-2 row-start-4   {visible
						? 'hiddenPreTransition visible'
						: 'hiddenPreTransition'}"
					style="transition-delay: 900ms"
				>
					<img
						class="h-[100px] w-[100px] sm:h-[190px] sm:w-[190px]"
						src="subjects/english.svg"
						alt="Student studying english"
					/>
				</div>
				<div
					class=" science col-span-2 row-span-2 row-start-5 {visible
						? 'hiddenPreTransition visible'
						: 'hiddenPreTransition'}"
					style="transition-delay: 1100ms"
				>
					<img
						class="h-[100px] w-[100px] sm:h-[190px] sm:w-[190px]"
						src="subjects/science.svg"
						alt="Student studying science"
					/>
				</div>
				<div
					class="col-span-2 col-start-3 row-start-6 ml-4 mb-4 font-Caveat text-4xl text-primaryBright sm:text-5xl {visible
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
	section {
		background-image: url(/waves/central-wave.svg);
		background-position-y: bottom;
		background-size: cover;
		background-repeat: no-repeat;
		display: block;
	}

	.bulletPseudo::before {
		content: '';
		position: relative;
		top: 0.4rem;
		right: 0.3rem;
		width: 1.3rem;
		height: 1rem;

		background-image: url('/other/bullet-point.svg');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
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
		width: 7.5rem;
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
		color: #2a2aac;
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
		color: #2a2aac;
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

	@media (min-width: 640px) {
		.bulletPseudo::before {
			top: 0.8rem;
		}
	}

	@media (min-width: 640px) {
		.math::before {
			top: 2rem;
			left: 13rem;
		}
	}

	@media (min-width: 640px) {
		.history::before {
			top: 2rem;
			left: 13rem;
		}
	}

	@media (min-width: 640px) {
		.science::before {
			top: 2rem;
			left: 13rem;
		}
	}
	/* orientation landscape */

	@media (orientation: landscape) {
		.math::before {
			top: -1rem;
			left: 0rem;
		}
	}

	@media (orientation: landscape) {
		.economics::before {
			top: 4rem;
			left: -2rem;
		}
	}

	@media (orientation: landscape) {
		.history::before {
			top: -1rem;
			left: 0rem;
		}
	}

	@media (orientation: landscape) {
		.english::before {
			top: 4rem;
			left: -1rem;
		}
	}

	@media (orientation: landscape) {
		.science::before {
			top: -1rem;
			left: 0rem;
		}
	}
</style>
