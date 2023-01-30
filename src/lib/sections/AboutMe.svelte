<script lang="ts">
	import OnPage from '$lib/actions/OnPage';
	import TestimonialCarousel from '$lib/components/TestimonialCarousel.svelte';

	let visible;
</script>

<!-- SCREEN -WIDE  -->
<section class=" min-h-screen relative flow-root bg-image   ">
	<!-- EVERYTHING BELOW IS ABSOLUTE -------------------------------------------------------------------------------------->
	<div class="absolute layeredWave waveStyle w-full top-0 rotate-180 " />
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

	<div class="flex-col flex relative text-[1.1em] text-primary pl-[5%] pr-[5%]">
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

		<div class="  pt-5  flex-col flex gap-5 min-h-[70dvh]    ">
			<!-- <div
					class="absolute bg-[#40C8A4] w-[120%] h-full z-0 -translate-x-[10%] translate-y-8 rounded-xl opacity-25"
				/> -->

			<div class=" max-w-[47rem]  z-20 ">
				<div class="relative z-20    ">
					My name is <span class="spanClass">Charlie Smith</span>, and I am a dedicated and
					experienced private tutor specializing in a range of middle and high school courses. I am
					able to effectively help students in a wide range of subjects including math, science,
					history, and economics. I am passionate about education and am committed to helping
					students achieve their full potential. With my personalized approach and a focus on
					building strong foundations, I have a proven track record of helping students improve
					their grades and reach their goals. Whether you're struggling with a specific subject or
					looking to get ahead, I can help you succeed.
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

	section {
		background-image: url(/other/headshot.png), url(/waves/central-wave.svg);
		background-position: bottom right -2rem;
		background-size: 50%, cover;
		background-repeat: no-repeat;
		display: block;
	}

	/* From https://css.glass */
	.frostedBox {
		background: rgba(255, 255, 255, 0.45);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border: 0.05rem solid rgba(255, 255, 255, 0.4);
	}

	.lessFrostedBox {
		background: rgba(255, 255, 255, 0.01);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(0.3px);
		-webkit-backdrop-filter: blur(0.3px);
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
		width: 17.5rem;
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
</style>