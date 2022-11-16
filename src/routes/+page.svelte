<script lang="ts">
	import Menu from '../lib/components/Menu.svelte';
	import { onMount } from 'svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<Background />

<div class="relative mx-4 mb-6 grid h-full grid-cols-1 max-w-[1200px] ml-auto mr-auto bg-green-400">
	<div class="relative transform top-1/2 -translate-y-1/2  ml-16 overflow-hidden z-10">
		<div class="font-extrabold text-transparent text-5xl bg-clip-text gradient">
			<div>Build confidence.</div>
			<div>Get results.</div>
		</div>
		<div class="mt-3  text-xl text-[#544E4E]">Tutoring for a wide range of subjects and ages.</div>

		<div class="flex items-end ">
			<div
				class=" rounded-full mt-4 inline-block bg-primary px-7 text-xl text-white font-semibold py-2 "
			>
				See services
			</div>
		</div>
	</div>

	<!-- PHOTO OF STUDENT -->
	<div class="">
		<div class="absolute transform top-1/2 -translate-y-1/2 right-12 max-w-xl z-10 ">
			<img src="tutor-graphic-1.svg" alt="Student working at computer" />
		</div>
	</div>
</div>
<!-- END OF PHOTO OF STUDENT -->

<!-- Photo from https://www.flickr.com/photos/83633410@N07/7658219802/  from CollegeDegrees360, Flickr 2012, background edited -->
