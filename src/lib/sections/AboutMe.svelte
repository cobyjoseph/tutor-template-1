<script lang="ts">
	import OnPage from '$lib/actions/OnPage';
	import TestimonialCarousel from '$lib/components/TestimonialCarousel.svelte';
	import AboutMeBlobs from '$lib/components/blobs/AboutMeBlobs.svelte';

	let visible;
</script>

<!-- SCREEN -WIDE  -->
<section class=" bg-image relative flow-root min-h-screen   ">
	<AboutMeBlobs />

	<!-- container for profile picture background -->
	<div class="picContainer invisible md:visible " />

	<!-- EVERYTHING BELOW IS ABSOLUTE -------------------------------------------------------------------------------------->
	<div
		class="layeredWave waveStyle absolute top-0 h-[28rem] max-w-[100vw] rotate-180 lg:h-[25rem] xl:h-[32rem] "
	/>
	<div class="layeredWave waveStyle absolute bottom-0 h-[28rem] w-full lg:h-[25rem] xl:h-[32rem]" />

	<div
		class="font-caveat z-5 absolute -left-4 -top-[1rem]  text-[4.5rem] font-bold text-shading sm:-left-9 sm:-top-[2.5rem] sm:text-[8rem] md:text-[10rem] "
	>
		ABOUT ME
	</div>

	<!-- EVERYTHING ABOVE IS ABSOLUTE -------------------------------------------------------------------------------------->

	<div class="relative flex flex-col px-[8%] text-primary">
		<div
			class="{visible ? 'blurIn delay100 visible' : 'blurIn'} 
			titlePseudo z-30 pt-[2rem] text-3xl font-bold text-primaryBright sm:text-6xl md:pt-[3.6rem]   "
			style="transition-delay: 100ms;"
			use:OnPage
			on:customOnKeyword={({ detail }) => {
				visible = detail;
			}}
		>
			About me
		</div>

		<img
			class="z-40 -mt-[5rem] flex aspect-auto w-[8rem] self-end  md:hidden"
			src="other/headshot-cut.png"
			alt="tutor headshot"
		/>

		<div
			class="  -mt-[6.5rem] flex min-h-[70dvh] min-h-[70vh] flex-col gap-5 pt-5 lg:min-h-[76dvh] lg:min-h-[76vh] xl:min-h-[80dvh] xl:min-h-[80vh]  "
		>
			<div
				class=" z-20 max-w-[42rem] lg:max-w-full  xl:max-w-[42.5rem] 2xl:max-w-[46rem]  3xl:max-w-[50rem] "
			>
				<div
					class="lessFrostedBox z-1 relative text-[1rem] lg:text-[1.4rem] xl:text-[1.4rem] 2xl:text-[1.6rem]  "
				>
					<div class=" float-right h-[4rem] w-[7rem] rounded-full " />

					My name is<span class="md:spanClass">Charlie Smith</span>, and I am a dedicated and
					experienced private tutor specializing in a range of middle and high school courses. I am
					passionate about education and am committed to helping students achieve their full
					potential. With my personalized approach and a focus on building strong foundations, I
					have a proven track record of helping students improve their grades and reach their goals.
				</div>
			</div>

			<TestimonialCarousel />
		</div>
	</div>
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
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.9rem;
		padding-bottom: 0.9rem;
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
			padding-left: 2rem;
			padding-right: 2rem;
			padding-top: 1rem;
			padding-bottom: 1rem;
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}
	}

	@media (min-width: 640px) {
		.spanClass::before {
			height: 8px;
		}
	}

	@media (min-width: 640px) {
		.titlePseudo::after {
			width: 17.4rem;
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
