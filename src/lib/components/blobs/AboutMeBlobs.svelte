<script lang="ts">
	import { onMount } from 'svelte';
	import KUTE from 'kute.js';

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

<div class="absolute top-0 right-0 translate-x-[20%] -translate-y-[10%] transform  ">
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
