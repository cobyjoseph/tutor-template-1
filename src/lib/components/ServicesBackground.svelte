<script>
	import { onMount } from 'svelte';

	import KUTE from 'kute.js';

	onMount(() => {
		const tweenOrangeBlob = KUTE.fromTo(
			'#orangeBlob1',
			{ path: '#orangeBlob1' },
			{ path: '#orangeBlob2' },
			{ repeat: 999, duration: 3000, yoyo: true }
		);
		tweenOrangeBlob.start();
	});
</script>

<!--ANIMATED BLOB  -->

<div class=" z-10  ">
	<div
		class="absolute transform translate-x-24 -translate-y-44 top-1/2 left-1/2 outline-green-500 outline outline-4 "
	>
		<svg
			id="visual"
			viewBox="400 25 130 180"
			width="100"
			height="100"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			><g transform="translate(456 129)"
				><path
					id="orangeBlob1"
					d="M30.6 -42.2C38 -36.7 41.3 -25.6 48.2 -13.5C55.1 -1.4 65.6 11.7 63.3 21.2C61.1 30.8 46.1 36.8 33.4 42.9C20.8 48.9 10.4 55 0.5 54.3C-9.4 53.6 -18.8 46.2 -28.5 39.2C-38.1 32.2 -48.1 25.5 -58 14.3C-67.8 3.1 -77.7 -12.7 -77.2 -28.5C-76.7 -44.2 -65.9 -60 -51.3 -63.3C-36.7 -66.6 -18.4 -57.3 -3.4 -52.6C11.6 -47.9 23.1 -47.8 30.6 -42.2"
					fill="#FFB3AC"
				/></g
			>
			<g style="visibility: hidden;" transform="translate(451 121)"
				><path
					id="orangeBlob2"
					d="M36 -55C44.5 -43.3 48 -30 48.5 -18.1C49.1 -6.3 46.8 4.1 43.6 14.2C40.3 24.2 36 34 28.6 47.2C21.2 60.4 10.6 77.1 -3.7 82.2C-18 87.3 -36.1 80.9 -44.3 67.9C-52.5 55 -51 35.5 -50.5 20.3C-50.1 5.2 -50.7 -5.8 -49.6 -18.3C-48.5 -30.8 -45.7 -44.9 -37.2 -56.7C-28.6 -68.4 -14.3 -77.7 -0.3 -77.3C13.7 -76.9 27.4 -66.8 36 -55"
					fill="#FFB3AC"
				/></g
			>
		</svg>
	</div>
</div>
