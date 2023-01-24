<script lang="ts">
	import OnPage from '$lib/actions/OnPage';
	let visible;
</script>

<!-- SCREEN -WIDE  -->
<div class=" min-h-screen relative flex-col items-center  ">
	<!-- EVERYTHING BELOW IS ABSOLUTE -------------------------------------------------------------------------------------->
	<div class="absolute layeredWave waveStyle w-full top-0 rotate-180 " />
	<div class="absolute layeredWave waveStyle w-full bottom-0 " />

	<img
		class=" absolute z-0 aspect-auto w-full"
		src="waves/central-wave.svg"
		alt="professoinal headshot "
	/>

	<div class="absolute -top-9 -left-9 text-[10rem] font-caveat font-bold -z-1 text-shading ">
		ABOUT ME
	</div>

	<div
		class="{visible ? 'visible blurIn' : 'blurIn'} 
			inline-block absolute top-20 left-16 text-6xl font-bold mb-1 text-primaryBright  z-30 title "
		style="transition-delay: 100ms;"
		use:OnPage
		on:customOnKeyword={({ detail }) => {
			visible = detail;
		}}
	>
		About me
	</div>

	<div class=" max-w-[45rem] -bottom-8 overflow-clip  -right-16  absolute  ">
		<img
			class="   aspect-auto z-30 rounded-l-2xl rounded-r-[2rem]  "
			src="other/headshot.png"
			alt="professoinal headshot "
		/>
	</div>

	<!-- EVERYTHING ABOVE IS ABSOLUTE -------------------------------------------------------------------------------------->

	<div class=" max-w-[72rem] flex-grow   bg-blue-300 mt-[10rem]   ">
		<!-- <div
					class="absolute bg-[#40C8A4] w-[120%] h-full z-0 -translate-x-[10%] translate-y-8 rounded-xl opacity-25"
				/> -->

		<div class=" flex max-w-[44rem] frostedBox z-20 self-start ">
			<div class="relative z-20 text-titles p-3">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
			</div>
			<!-- <div
				class=" bg-white z-10 w-full h-full  rounded-lg  opacity-30 outline-[0.1rem] outline outline-white shadow-lg  shadow-slate-800/40 backdrop-blur-md  "
			/> -->
		</div>

		<div class=" w-full mt-10 frostedBox p-4">
			Testimonials Testimonials Testimonials Testimonials Testimonials Testimonials Testimonials
			Testimonials Testimonials Testimonials Testimonia Testimonials Testimonia Testimonials
			Testimonia Testimonials Testimonia
			TestimonialsTestimonialsTestimonialsTestimonialsTestimonialsTestimonialsTestimonialsTestimonialsTestimonialsTestimonialsTest
		</div>
	</div>

	<!-- end of central grid -->
</div>

<style>
	/* From https://css.glass */
	.frostedBox {
		background: rgba(255, 255, 255, 0.4);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(3px);
		-webkit-backdrop-filter: blur(3px);
		border: 0.1rem solid rgba(255, 255, 255, 0.68);
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
