<script lang="ts">
	import OnPage from '$lib/actions/OnPage';

	let visible;
</script>

<!-- SCREEN -WIDE  -->
<div class=" min-h-screen relative bg-[#c3f2e5] outline outline-black flow-root   ">
	<div class="absolute layeredWaveGreen waveStyleRed top-0 z-0 rotate-180 " />
	<div class="absolute layeredWaveGreen waveStyleRed bottom-0 z-0  " />

	<div
		class="grid-cols-1 max-w-[1400px]  px-[3%] max-h-[800px] mt-[100px] mb-auto ml-auto mr-auto outline outline-slate-400  "
		use:OnPage
		on:customOnKeyword={({ detail }) => {
			visible = detail;
		}}
	>
		<div
			class="{visible ? 'visible blurIn' : 'blurIn'} 
			inline-block text-5xl font-bold mb-1 text-titles relative z-30 title outline outline-blue-400 "
			style="transition-delay: 100ms;"
		>
			About me
		</div>

		<div class="outline outline-purple-400 ">
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</div>

			<div class="max-w-[30%] max-h-[30%] w-full box-border grid outline outline-4 outline-red-500">
				<img
					class=" w-max-[150px] h-max-[50px] w-full aspect-auto "
					src="headshot.jpg"
					alt="professoinal headshot "
				/>
			</div>
		</div>
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
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

	.layeredWaveGreen {
		background-image: url('./layered-waves-green.svg');
	}
</style>
