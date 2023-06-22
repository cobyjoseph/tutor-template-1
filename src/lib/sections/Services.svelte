<script>
	import ServicesBackground from '$lib/components/blobs/ServicesBlobs.svelte';
	import OnPage from '$lib/actions/OnPage';
	import { fly } from 'svelte/transition';
	import { sineIn, backIn, backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import InView from '$lib/components/InView.svelte';

	let visible;
	console.log('visible', visible);
</script>

<!-- REMEMBER THIS RELATIVE IS NEEDED SO THE SERVICES ABSOLUTE ATTRIBUTES (THE BACKGROUND/WAVE) HAVE SOMETHING TO ATTACH TO, OTHERWISE IT ATTACHES TO THE PAGE ITSELF (EG AT THE TOP RATHER THAN IN THIS SCROLLED DOWN PAGE 2 SECTION) -->

<section class="bg-image relative flow-root min-h-screen  ">
	<!-- <ServicesBackground /> -->

	<div
		class="layeredWave waveStyle absolute top-0 h-[28rem] w-full rotate-180 lg:h-[25rem] xl:h-[32rem] "
	/>
	<div class="layeredWave waveStyle absolute bottom-0 h-[28rem] w-full lg:h-[25rem] xl:h-[32rem]" />

	<div
		class="font-caveat z-5 absolute -left-4 -top-[1rem]  text-[4.5rem] font-bold text-shading sm:-left-9 sm:-top-[2.5rem] sm:text-[8rem] md:text-[10rem] landscape:h602:-left-4 landscape:h602:-top-[1rem] landscape:h602:text-[4.5rem]"
	>
		SERVICES
	</div>

	<!-- This flex-col below contains the page title and all it's content -->
	<!-- landscape:h719:gap-1  -->

	<InView let:isVisible={visible}>
		<div class=" relative flex flex-col gap-1 pl-[8%] pr-[6%] text-primary sm:gap-2 xl:gap-4 ">
			<!-- only two things at this top level, the page title and a div that holds the bullet points and the graphic -->
			<div
				class="{visible ? 'blurIn delay100 visible' : 'blurIn'} 
			titlePseudo z-30 pt-[2rem] text-3xl font-bold text-primaryBright sm:text-6xl md:pt-[3.6rem] landscape:h602:pt-[2rem] landscape:h602:text-3xl  "
				use:OnPage
				on:customOnKeyword={({ detail }) => {
					visible = detail;
				}}
			>
				Services
			</div>

		
			<div
				class=" flex  flex-col  gap-3 sm:gap-5  md:grid landscape:md:grid-cols-2 landscape:h602:flex landscape:h602:gap-8  "
			>
				<!-- I put the gap at this level below because that contains the two bullet points, and I want the gap between them -->
				
				<div
					class="  flex flex-col gap-3   text-xl font-semibold text-primary sm:gap-6 sm:text-3xl lg:text-4xl xl:gap-10 landscape:h602:gap-3 landscape:h602:text-xl "
				>
					<div class=" {visible ? 'blurIn delay300 visible' : 'blurIn'} ">
						<div class=" bulletPseudo flex ">Middle school and high school courses.</div>
					</div>

					<div class="  {visible ? 'blurIn delay500 visible' : 'blurIn'} ">
						<div class=" bulletPseudo flex ">
							Private, in person sessions in the Kansas City area, or online sessions for students
							anywhere.
						</div>
					</div>
				</div>

				<!-- SUBJECT ICONS ------------------------------------------------------------------ -->

				<!-- change these margins on each grid element on differnet sized screens -->

				<!--landscape:h415:gap-[6%]  landscape:h719:flex landscape:h719:flex-wrap landscape:h719:items-center  landscape:h719:justify-center landscape:h719:gap-[10%]  -->
				<div
					class=" grid w-full grid-cols-4 gap-y-[6vh] sm:gap-y-[4.5vh]  landscape:md:gap-y-[3.8vh] landscape:h602:flex landscape:h602:gap-[8%] landscape:h602:mt-3  "
				>
					<div
						class=" math col-span-2 row-span-2 row-start-1 {visible
							? 'hiddenPreTransition delay700 visible'
							: 'hiddenPreTransition'}"
					>
						<img
							class="h-[100px] w-[100px] sm:h-[22vh] sm:w-[190px] landscape:h602:h-[100px] landscape:h602:w-[100px]  "
							src="subjects/math.svg"
							alt="Student studying math"
						/>
					</div>

					<div
						class="  economics col-span-2 col-start-4 row-span-2 row-start-2   {visible
							? 'hiddenPreTransition delay900 visible'
							: 'hiddenPreTransition'}"
					>
						<img
							class="h-[100px] w-[100px] sm:h-[22vh] sm:w-[190px] landscape:h602:h-[100px] landscape:h602:w-[100px]  "
							src="subjects/economics.svg"
							alt="Student studying economics"
						/>
					</div>

					<div
						class=" history col-span-2 row-span-2 row-start-3 {visible
							? 'hiddenPreTransition delay1100 visible'
							: 'hiddenPreTransition'}"
					>
						<img
							class="h-[100px] w-[100px] sm:h-[22vh] sm:w-[190px] landscape:h602:h-[100px] landscape:h602:w-[100px]  "
							src="subjects/history.svg"
							alt="Student studying history"
						/>
					</div>
					<div
						class=" english col-span-2 col-start-4 row-span-2 row-start-4   {visible
							? 'hiddenPreTransition delay1300 visible'
							: 'hiddenPreTransition'}"
					>
						<img
							class="h-[100px] w-[100px] sm:h-[22vh] sm:w-[190px] landscape:h602:h-[100px] landscape:h602:w-[100px]  "
							src="subjects/english.svg"
							alt="Student studying english"
						/>
					</div>
					<div
						class=" science col-span-2 row-span-2 row-start-5 {visible
							? 'hiddenPreTransition delay1500 visible'
							: 'hiddenPreTransition'}"
					>
						<img
							class="h-[100px] w-[100px] sm:h-[18vh] sm:w-[190px] landscape:h602:h-[100px] landscape:h602:w-[100px]  "
							src="subjects/science.svg"
							alt="Student studying science"
						/>
					</div>
					<!-- landscape:text-2xl  -->
					<div
						class="col-span-2 col-start-3 row-start-6  m-auto font-Caveat text-4xl text-primaryBright sm:text-5xl lg:pl-6 {visible
							? 'hiddenPreTransition delay1700 visible'
							: 'hiddenPreTransition'}"
					>
						...and more
					</div>
				</div>
			</div>
		</div>
	</InView>
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
		position: absolute;
		top: 0.4rem;
		left: -1.2rem;
		width: 1.1rem;
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

	.delay100 {
		transition-delay: 100ms;
	}

	.delay300 {
		transition-delay: 300ms;
	}

	.delay500 {
		transition-delay: 500ms;
	}

	.delay700 {
		transition-delay: 700ms;
	}

	.delay900 {
		transition-delay: 900ms;
	}
	.delay1100 {
		transition-delay: 1100ms;
	}
	.delay1300 {
		transition-delay: 1300ms;
	}

	.delay1500 {
		transition-delay: 1500ms;
	}

	.delay1700 {
		transition-delay: 1700ms;
	}

	/* MEDIA QUERIES ------------------------------------------------ */
	@media (orientation: portrait) and (min-width: 640px) {
		.titlePseudo::after {
			width: 14.5rem;
		}
	}

	@media (orientation: landscape) and (min-width: 640px) and (min-height: 602px) {
		.titlePseudo::after {
			width: 14.5rem;
		}
	}

	/* ---------------- */

	@media (min-width: 640px) and (min-height: 600px) {
		.bulletPseudo::before {
			top: 0.7rem;
		}
	}

	@media (min-width: 1280px) and (max-height: 602px) {
		.bulletPseudo::before {
			left: -1.4rem;
			top: 0.8rem;
		}
	}

	/* ---- */

	@media (orientation: portrait) and (min-width: 640px) {
		.math::before {
			top: 2rem;
			left: 13rem;
		}
	}

	@media (orientation: portrait) and (min-width: 640px) {
		.history::before {
			top: 2rem;
			left: 13rem;
		}
	}

	@media (orientation: portrait) and (min-width: 640px) {
		.science::before {
			top: 2rem;
			left: 13rem;
		}
	}

	/* ------------- */

	@media (max-height: 602px) and (orientation: landscape) {
		.math::before {
			top: -2rem;
			left: 0rem;
		}
	}

	@media (max-height: 602px) and (orientation: landscape) {
		.economics::before {
			top: 5rem;
			left: -2rem;
		}
	}

	@media (max-height: 602px) and (orientation: landscape) {
		.history::before {
			top: -2rem;
			left: 0rem;
		}
	}

	@media (max-height: 602px) and (orientation: landscape) {
		.english::before {
			top: 5rem;
			left: -1rem;
		}
	}

	@media (max-height: 602px) and (orientation: landscape) {
		.science::before {
			top: -2rem;
			left: 0rem;
		}
	}

	/* ------------- */

	@media (min-width: 768px) and (min-height: 602px) and (orientation: landscape) {
		.math::before {
			top: 2rem;
			left: 12rem;
		}
	}

	@media (min-width: 768px) and (min-height: 602px) and (orientation: landscape) {
		.economics::before {
			top: 2rem;
			left: -8rem;
		}
	}

	@media (min-width: 768px) and (min-height: 602px) and (orientation: landscape) {
		.history::before {
			top: 2rem;
			left: 12rem;
		}
	}

	@media (min-width: 768px) and (min-height: 602px) and (orientation: landscape) {
		.english::before {
			top: 2rem;
			left: -6rem;
		}
	}

	@media (min-width: 768px) and (min-height: 602px) and (orientation: landscape) {
		.science::before {
			top: 2rem;
			left: 12rem;
		}
	}

	/* ----------------- */
	@media (min-width: 1280px) and (max-height: 602px) or (min-height: 1300px) {
		.math::before {
			font-size: 2.5rem;
			top: 6rem;
			left: 12rem;
		}
	}

	@media (min-width: 1280px) and (max-height: 602px) or (min-height: 1300px) {
		.economics::before {
			font-size: 2.5rem;
			top: 6rem;
			left: -10.5rem;
		}
	}

	@media (min-width: 1280px) and (max-height: 602px) or (min-height: 1300px) {
		.history::before {
			font-size: 2.5rem;
			top: 6rem;
			left: 12rem;
		}
	}

	@media (min-width: 1280px) and (max-height: 602px) or (min-height: 1300px) {
		.english::before {
			font-size: 2.5rem;
			top: 6rem;
			left: -8rem;
		}
	}

	@media (min-width: 1280px) and (max-height: 602px) or (min-height: 1300px) {
		.science::before {
			font-size: 2.5rem;
			top: 6rem;
			left: 12rem;
		}
	}

	/* changed for one screen size below */

	/* @media (min-height: 602px) and (max-height: 769px) and (orientation: landscape) {
		.math::before {
			top: -2rem;
			left: 3rem;
		}
	}

	@media (min-height: 602px) and (max-height: 769px) and (orientation: landscape) {
		.economics::before {
			top: -2rem;
			left: 3rem;
		}
	}

	@media (min-height: 602px) and (max-height: 769px) and (orientation: landscape) {
		.history::before {
			top: -2rem;
			left: 2rem;
		}
	}

	@media (min-height: 602px) and (max-height: 769px) and (orientation: landscape) {
		.english::before {
			top: 11rem;
			left: 3rem;
		}
	}

	@media (min-height: 602px) and (max-height: 769px) and (orientation: landscape) {
		.science::before {
			top: 11rem;
			left: 3rem;
		}
	} */

	/* orientation and min-width */

	/* @media (min-width: 1024px) and (orientation: landscape) {
		.math::before {
			top: -2.5rem;
			left: -2rem;
		}
	}

	@media (min-width: 1024px) and (orientation: landscape) {
		.economics::before {
			top: -2.5rem;
			left: -2rem;
		}
	}

	@media (min-width: 1024px) and (orientation: landscape) {
		.history::before {
			top: -2.5rem;
			left: -2rem;
		}
	}

	@media (min-width: 1024px) and (orientation: landscape) {
		.english::before {
			top: 12rem;
			left: -2rem;
		}
	}

	@media (min-width: 1024px) and (orientation: landscape) {
		.science::before {
			top: 12rem;
			left: -2rem;
		}
	} */
</style>
