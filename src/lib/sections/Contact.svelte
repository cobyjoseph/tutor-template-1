<script>
	import InView from '$lib/components/InView.svelte';

	let visible;
</script>

<section class="bg-image relative flow-root min-h-screen  ">
	<!-- <ServicesBackground /> -->

	<div
		class="layeredWave waveStyle absolute top-0 h-[28rem] w-full rotate-180 lg:h-[25rem] xl:h-[32rem] "
	/>
	<div class="layeredWave waveStyle absolute bottom-0 h-[28rem] w-full lg:h-[25rem] xl:h-[32rem]" />

	<div
		class="font-caveat z-5 absolute -left-4 -top-[1rem]  text-[4.5rem] font-bold text-shading sm:-left-9 sm:-top-[2.5rem] sm:text-[8rem] md:text-[10rem] landscape:h602:-left-4 landscape:h602:-top-[1rem] landscape:h602:text-[4.5rem]"
	>
		CONTACT
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
				Contact
			</div>
		</div>
	</InView>
</section>

<style>
	.waveStyle {
		aspect-ratio: 960/250;
		/* width: 100%;  */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layeredWave {
		background-image: url('/waves/short-4.svg');
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
</style>
