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

		const tweenOrangeBlob2 = KUTE.fromTo(
			'#orangeBlob3',
			{ path: '#orangeBlob3' },
			{ path: '#orangeBlob4' },
			{ repeat: 999, duration: 3000, yoyo: true }
		);

		tweenOrangeBlob2.start();
	});
</script>

<!--ANIMATED BLOB  -->

<div class=" z-10  ">
	<div class="absolute transform translate-x-24 -translate-y-44 top-1/2 left-1/2  ">
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
					fill="#FFCBC8"
				/></g
			>
			<g style="visibility: hidden;" transform="translate(451 121)"
				><path
					id="orangeBlob2"
					style="visibility: hidden;"
					d="M36 -55C44.5 -43.3 48 -30 48.5 -18.1C49.1 -6.3 46.8 4.1 43.6 14.2C40.3 24.2 36 34 28.6 47.2C21.2 60.4 10.6 77.1 -3.7 82.2C-18 87.3 -36.1 80.9 -44.3 67.9C-52.5 55 -51 35.5 -50.5 20.3C-50.1 5.2 -50.7 -5.8 -49.6 -18.3C-48.5 -30.8 -45.7 -44.9 -37.2 -56.7C-28.6 -68.4 -14.3 -77.7 -0.3 -77.3C13.7 -76.9 27.4 -66.8 36 -55"
					fill="#FFCBC8"
				/></g
			>
		</svg>
	</div>

	<div class="absolute transform rotate-45 -translate-x-96 translate-y-32 top-1/2 left-1/2  ">
		<svg
			id="visual"
			viewBox="400 25 130 180"
			width="100"
			height="100"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			><g transform="translate(448.4255488482558 111.54036856465676)"
				><path
					id="orangeBlob3"
					d="M39.2 -47.8C53.3 -43.7 69 -35.6 73.8 -23.4C78.6 -11.1 72.6 5.3 67.7 22.5C62.8 39.7 58.9 57.8 47.8 69.5C36.7 81.2 18.4 86.6 4.6 80.3C-9.2 74 -18.4 56 -31.5 44.9C-44.7 33.8 -61.8 29.7 -68.6 19.7C-75.5 9.7 -72 -6.3 -66.3 -20.8C-60.5 -35.3 -52.6 -48.4 -41.2 -53.4C-29.8 -58.3 -14.9 -55.2 -1.2 -53.5C12.5 -51.9 25.1 -51.9 39.2 -47.8"
					fill="#FFCBC8"
				/></g
			>
			<g visibility="hidden" transform="translate(450 131)"
				><path
					id="orangeBlob4"
					d="M33 -44.7C47.5 -34.8 67.5 -31.6 75.9 -21.1C84.3 -10.5 81.2 7.4 74.5 23.1C67.9 38.7 57.7 52.1 44.7 57.2C31.7 62.4 15.9 59.2 0.3 58.8C-15.3 58.4 -30.6 60.7 -45.4 56.2C-60.3 51.7 -74.7 40.3 -79.4 25.8C-84.2 11.3 -79.2 -6.4 -70.7 -20C-62.2 -33.6 -50.2 -43.1 -37.8 -53.7C-25.5 -64.4 -12.7 -76.2 -1.8 -73.8C9.2 -71.3 18.4 -54.6 33 -44.7"
					fill="#FFCBC8"
				/></g
			>
		</svg>
	</div>
</div>
