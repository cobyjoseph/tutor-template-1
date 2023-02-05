<script lang="ts">
	import OnPage from '$lib/actions/OnPage';
	import TestimonialCarousel from '$lib/components/TestimonialCarousel.svelte';
	import AboutMeBlobs from '$lib/components/blobs/AboutMeBlobs.svelte';
	import InView from '$lib/components/InView.svelte';

	let visible;
</script>

<!-- SCREEN -WIDE  -->
<section class=" bg-image relative flow-root min-h-screen   ">
	<AboutMeBlobs />

	<!-- container for profile picture background -->
	<div class="picContainer invisible lg:visible " />

	<!-- EVERYTHING BELOW IS ABSOLUTE -------------------------------------------------------------------------------------->
	<div
		class="layeredWave waveStyle absolute top-0 h-[28rem] w-full rotate-180 lg:h-[25rem] xl:h-[32rem] "
	/>
	<div class="layeredWave waveStyle absolute bottom-0 h-[28rem] w-full lg:h-[25rem] xl:h-[32rem]" />

	<div
		class="font-caveat z-5 absolute -left-4 -top-[1rem]  text-[4.5rem] font-bold text-shading sm:-left-9 sm:-top-[2.5rem] sm:text-[8rem] lg:text-[10rem] landscape:h602:-left-4 landscape:h602:-top-[1rem] landscape:h602:text-[4.5rem]"
	>
		ABOUT ME
	</div>

	<!-- EVERYTHING ABOVE IS ABSOLUTE -------------------------------------------------------------------------------------->

	<InView let:isVisible={visible}>
		<div class="relative flex flex-col px-[8%] text-primary sm:gap-2 xl:gap-4 ">
			<div
				class="{visible ? 'blurIn delay100 visible' : 'blurIn'} 
			titlePseudo z-30 pt-[2rem] text-3xl font-bold text-primaryBright sm:text-6xl lg:pt-[3.6rem] landscape:h602:pt-[2rem] landscape:h602:text-3xl  "
				use:OnPage
				on:customOnKeyword={({ detail }) => {
					visible = detail;
				}}
			>
				About me
			</div>

			<img
				class="z-40 -mt-[5.3rem] flex aspect-auto w-[8rem] self-end  lg:hidden"
				src="other/headshot-cut.png"
				alt="tutor headshot"
			/>

			<div
				class=" mt-[-5.9rem] flex  min-h-[70dvh] min-h-[70vh]  flex-col justify-between gap-5 pb-5 lg:mt-1 lg:min-h-[76dvh]  lg:min-h-[76vh] xl:min-h-[80dvh]  xl:min-h-[80vh] minh820:gap-10 minh820:pt-3 landscape:h415:mt-[-7rem] landscape:lg:h415:mt-[-6.5rem]  "
			>
				<div
					class=" z-20 flex max-w-[42rem] md:max-w-full  xl:max-w-[42.5rem] 2xl:max-w-[46rem]  3xl:max-w-[50rem] "
				>
					<!-- don't put flex on the container below. It messes up the span elements in it -->
					<div
						class=" lessFrostedBox z-1 relative  px-[1.5rem] py-[0.9rem] text-[1rem] lg:text-[1.4rem] xl:text-[1.4rem]  2xl:text-[1.6rem]  landscape:h415:px-[0.9rem] landscape:h415:text-[0.92rem] {visible
							? 'blurIn delay100 visible'
							: 'blurIn'} "
					>
						<div
							class=" float-right flex h-[4rem] w-[7rem] rounded-full lg:hidden h415:h-[4.5rem] "
						/>

						My name is<span class="lg:spanClass">Charlie Smith</span>, and I am a dedicated and
						experienced private tutor specializing in a range of middle and high school courses. I
						am passionate about education and am committed to helping students achieve their full
						potential.<span class=" inline minh820:inline landscape:h415:hidden">
							With my focus on building strong foundations, I have a proven track record of helping
							students reach their goals.</span
						>
					</div>
				</div>

				<TestimonialCarousel />
			</div>
		</div>
	</InView>
</section>

<style>
	/* PATTERNED BACKGROUND BEHIND HEADSHOT FROM SVGBACKGROUNDS.COM */

	.delay100 {
		transition-delay: 100ms;
	}

	.delaylong {
		transition-delay: 2300ms;
	}

	.spanClass {
		position: relative;
	}

	.spanClass::before {
		content: '';
		width: 5.8em;
		height: 5px;
		opacity: 25%;
		position: absolute;
		background: #cc3232;
		transform: translate(0em, 1em) skew(-50deg);
		transform-origin: left;
		z-index: -1;
	}

	.picContainer {
		position: absolute;
		height: 100%;
		width: 70%;
		right: 0;
		z-index: 10;
		background-image: url(/other/headshot.png);
		background-position: bottom right;
		background-size: contain;
		background-repeat: no-repeat;
		display: block;
	}

	section {
		background-image: url(/waves/central-wave.svg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		display: block;
	}

	.lessFrostedBox {
		background: rgba(255, 255, 255, 0.4);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 0.05rem solid rgba(255, 255, 255, 0.2);
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
	.titlePseudo::after {
		content: '';
		width: 9rem;
		height: 8px;
		opacity: 40%;
		position: relative;
		background: #f6991b;
		display: block;
		transform: translate(-4px, -8px) scaleX(1) skew(-50deg);
		transform-origin: left;
		z-index: -1;
	}

	.waveStyle {
		aspect-ratio: 960/250;
		/* width: 100%;  */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layeredWave {
		background-image: url('/waves/short-3.svg');
	}

	/* MEDIA QUERIES */

	@media (min-width: 640px) {
		.lessFrostedBox {
			background: rgba(255, 255, 255, 0.4);

			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}
	}

	@media (min-width: 640px) {
		.spanClass::before {
			height: 8px;
		}
	}

	@media (orientation: portrait) and (min-width: 640px) {
		.titlePseudo::after {
			width: 17.5rem;
		}
	}

	@media (orientation: landscape) and (min-width: 640px) and (min-height: 602px) {
		.titlePseudo::after {
			width: 17.5rem;
		}
	}
	/* WHY ISN'T THIS ONE INCLUSIVE????? */
	@media (min-width: 640px) {
		.picContainer {
			width: 40%;
		}
	}

	@media (min-width: 1024px) {
		.picContainer {
			width: 55%;
		}
	}

	@media (min-width: 1280px) {
		.picContainer {
			width: 55%;
		}
	}
	@media (min-width: 1536px) {
		.picContainer {
			width: 60%;
		}
	}
	@media (min-width: 1750px) {
		.picContainer {
			width: 65%;
		}
	}
</style>
