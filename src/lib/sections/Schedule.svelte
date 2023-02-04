<script>
	import InView from '$lib/components/InView.svelte';

	let visible;
</script>

<div class="relative min-h-screen ">
	<InView let:isVisible={visible}>
		{#if visible}
			<div class="h-20 w-20 bg-red-600">VISIBLE</div>
		{:else}
			<div class="h-20 w-20 bg-blue-600">NOT VISIBLE</div>
		{/if}
		<div class="layeredWave waveStyle absolute top-0 w-full rotate-180 " />
		<div class="layeredWave waveStyle absolute bottom-0 w-full " />

		<div class="flex flex-col flex-wrap gap-5 px-4 pt-4">
			<div class="flex max-h-[10rem] min-w-[10rem] bg-red-500 p-2">
				DIV 1 text DIV 1 text DIV 1 text DIV 1 text DIV 1 text DIV 1 text DIV 1 text DIV 1 text DIV
				1 text DIV 1 text DIV 1 text DIV 1 text DIV 1 text DIV 1 text DIV 1 text DIV 1 text DIV 1
				text DIV 1 text DIV 1 text DIV 1 text
			</div>
			<div class="flex max-h-[10rem] min-w-[10rem] bg-blue-500 p-2">
				DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV
				2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2
				text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text DIV 2 text
			</div>
			<div class="flex max-h-[10rem] min-w-[10rem] bg-green-500 p-2">
				DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV
				3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3
				text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text DIV 3 text
				DIV 3 text DIV 3 text DIV 3 text
			</div>
			<div class="flex max-h-[10rem] min-w-[10rem] bg-slate-500 p-2">
				DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV
				4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4
				text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text
				DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV
				4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4 text DIV 4
				text DIV 4 text DIV 4 text
			</div>
		</div>
	</InView>
</div>

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
</style>
