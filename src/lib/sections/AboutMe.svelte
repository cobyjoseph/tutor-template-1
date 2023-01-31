<script lang="ts">
	import OnPage from '$lib/actions/OnPage';
	import TestimonialCarousel from '$lib/components/TestimonialCarousel.svelte';

	import { onMount } from 'svelte';

	import KUTE from 'kute.js';

	let visible;

	onMount(() => {
		const tweenBlob = KUTE.fromTo(
			'#blob5',
			{ path: '#blob5' },
			{ path: '#blob6' },
			{ repeat: 999, duration: 3000, yoyo: true }
		);
		tweenBlob.start();
	});
</script>

<!-- SCREEN -WIDE  -->
<section class=" min-h-screen relative flow-root bg-image   ">
	<!-- ANIMATED BLOB -->
	<div class="absolute transform translate-x-[20%] -translate-y-[10%] top-0 right-0  ">
		<svg
			id="visual"
			viewBox="0 0 1200 450"
			width="600"
			height="450"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			class=""
			><g transform="translate(444 340)"
				><path
					id="blob5"
					d="M139.6 -164.7C184.9 -128.3 228.3 -88.1 230 -45.5C231.7 -2.8 191.6 42.4 156.8 79.2C122 116 92.5 144.4 58.7 153.3C24.9 162.3 -13.2 151.6 -67 147.8C-120.8 144 -190.3 147 -211.5 118.3C-232.6 89.5 -205.4 29 -188.6 -27.5C-171.8 -84 -165.3 -136.6 -135.6 -175.7C-105.8 -214.8 -52.9 -240.4 -2.9 -237C47.1 -233.5 94.3 -201 139.6 -164.7"
					fill="#F0DDC1"
				/></g
			>
			<g transform="translate(435 264)"
				><path
					id="blob6"
					style="visibility: hidden;"
					d="M119.7 -129.7C162.7 -106.6 210.4 -76 227.6 -32.2C244.8 11.7 231.5 68.8 197 99.9C162.6 131 107 136 59.2 146.1C11.5 156.3 -28.3 171.7 -80.1 173.2C-132 174.7 -195.9 162.3 -231.3 122.9C-266.8 83.5 -273.7 17 -257.8 -40.7C-242 -98.4 -203.3 -147.2 -156.5 -169.7C-109.7 -192.1 -54.9 -188 -8.2 -178.2C38.4 -168.4 76.7 -152.7 119.7 -129.7"
					fill="#F0DDC1"
				/></g
			></svg
		>
	</div>

	<!-- END OF ANIMATED BLOB -->

	<!-- container for profile picture background -->
	<div class="picContainer" />
	<!-- EVERYTHING BELOW IS ABSOLUTE -------------------------------------------------------------------------------------->
	<div class="absolute layeredWave waveStyle w-full top-0 rotate-180 max-lg:h-[30rem] " />
	<div class="absolute layeredWave waveStyle w-full bottom-0 " />

	<!-- <img
		class=" absolute z-0 aspect-auto w-full opacity-30 translate-y-20"
		src="waves/central-wave-2.png"
		alt="background wave shape"
	/> -->
	<!-- <img
		class=" absolute z-0 aspect-auto w-full "
		src="waves/central-wave.svg"
		alt="background wave shape"
	/> -->

	<div class="absolute -top-[2.5rem] -left-9  text-[10rem] font-caveat font-bold z-5 text-shading ">
		ABOUT ME
	</div>

	<!-- <div class=" max-w-[45rem] -bottom-8 overflow-clip  -right-16  absolute  ">
		<img
			class="   aspect-auto z-30 rounded-l-2xl rounded-r-[2rem]  "
			src="other/headshot.png"
			alt="professoinal headshot "
		/>
	</div> -->

	<!-- EVERYTHING ABOVE IS ABSOLUTE -------------------------------------------------------------------------------------->

	<div class="flex-col flex relative  text-primary pl-[5%] pr-[5%]">
		<div
			class="{visible ? 'visible blurIn' : 'blurIn'} 
			text-6xl font-bold  text-primaryBright pt-[3.6rem] z-30 titlePseudo   "
			style="transition-delay: 100ms;"
			use:OnPage
			on:customOnKeyword={({ detail }) => {
				visible = detail;
			}}
		>
			About me
		</div>

		<div
			class="  pt-5  flex-col flex gap-5 min-h-[70dvh] min-h-[70vh] xl:min-h-[80dvh] xl:min-h-[80vh] lg:min-h-[76dvh] lg:min-h-[76vh]  "
		>
			<!-- <div
					class="absolute bg-[#40C8A4] w-[120%] h-full z-0 -translate-x-[10%] translate-y-8 rounded-xl opacity-25"
				/> -->

			<div
				class=" max-w-[42rem] lg:max-w-full xl:max-w-[42.5rem]  2xl:max-w-[46rem] 3xl:max-w-[50rem]  z-20 "
			>
				<div
					class="relative z-20 text-[0.9em] lg:text-[1.4em] xl:text-[1.4em] 2xl:text-[1.6em] lessFrostedBox  "
				>
					My name is <span class="spanClass">Charlie Smith</span>, and I am a dedicated and
					experienced private tutor specializing in a range of middle and high school courses. I am
					able to effectively help students in a wide range of subjects including math, science,
					history, and economics. I am passionate about education and am committed to helping
					students achieve their full potential. With my personalized approach and a focus on
					building strong foundations, I have a proven track record of helping students improve
					their grades and reach their goals.
				</div>
				<!-- <div
				class=" bg-white z-10 w-full h-full  rounded-lg  opacity-30 outline-[0.1rem] outline outline-white shadow-lg  shadow-slate-800/40 backdrop-blur-md  "
			/> -->
			</div>

			<TestimonialCarousel />
		</div>
	</div>
</section>

<style>
	.spanClass {
		position: relative;
	}

	.spanClass::before {
		content: '';
		width: 5.8em;
		height: 8px;
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
		width: 50rem;
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
		padding: 1rem;
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
		width: 17.4rem;
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

	/* WHY ISN'T THIS ONE INCLUSIVE????? */
	@media (max-width: 639px) {
		.picContainer {
			width: 70%;
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
