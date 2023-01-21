<script lang="ts">
	import OnPage from '$lib/actions/OnPage';
	let visible;
</script>

<!-- SCREEN -WIDE  -->
<div class=" min-h-full relative bg-[#c3f2e5] grid justify-center content-center ">
	<div class="absolute layeredWaveGreen waveStyleRed w-full h-[50%] top-0 z-0 rotate-180 " />
	<div class="absolute layeredWaveGreen waveStyleRed w-full h-[50%] bottom-0 z-0  " />

	<div
		class="grid-cols-1 max-w-[83rem] px-7  justify-center content-center outline outline-slate-400 flow-root "
		use:OnPage
		on:customOnKeyword={({ detail }) => {
			visible = detail;
		}}
	>
		<div
			class="{visible ? 'visible blurIn' : 'blurIn'} 
			inline-block text-5xl font-bold mb-1 text-titles relative z-30 title "
			style="transition-delay: 100ms;"
		>
			About me
		</div>

		<!-- Central 2 column grid -->

		<div>
			<div class="outline outline-purple-400 grid grid-cols-2 gap-10 p-5">
				<div class="relative flex outline outline-black items-center">
					<div class=" relative  outline-red-500 outline m-2 flex-wrap  ">
						<div class="relative z-20">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							laborum. sdfds
						</div>
						<div
							class="absolute bg-white z-10 w-full h-full -translate-y-[80%] -translate-x-4 opacity-100 blur-md"
						/>
					</div>
				</div>

				<div class="min-w-10  w-full box-border grid outline outline-4 outline-red-500">
					<img
						class=" w-max-[150px] h-max-[50px] w-full aspect-auto "
						src="headshot.jpg"
						alt="professoinal headshot "
					/>
				</div>
			</div>
		</div>

		<!-- end of central grid -->
	</div>
</div>

<style>
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
	.waveStyleRed {
		aspect-ratio: 960/250;
		/* height: 50%;
		width: 100%; */
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}
	.layeredWaveGreen {
		background-image: url('/waves/green.svg');
	}
</style>
