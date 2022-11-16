<script lang="ts">
	import Menu from '../lib/components/Menu.svelte';
	import { onMount } from 'svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<Background />

<!-- TODO  - ON LARGE SCREEN MAKE EVERYTHING CLOSER TO THE TOP BY INCREASING THE NEGATIVE MARGIN TOP OR SOMETHING -->

<div class="-mt-16 flex justify-center items-center h-[100vh]">
	<div class="px-[3%] grid grid-cols-1 max-w-[1400px] z-10">
		<div class="grid grid-cols-2  ">
			<!-- LEFT COLUMN -->
			<div class="flex items-center">
				<div class=" ">
					<div class="text-5xl font-extrabold text-transparent  bg-clip-text gradient">
						<div>Build confidence.</div>
						<div>Get results.</div>
					</div>
					<div class="mt-3  text-xl text-[#544E4E]">
						Tutoring for a wide range of subjects and ages.
					</div>
					<div
						class=" rounded-full mt-4 inline-block bg-primary px-7 text-xl text-white font-semibold py-2 "
					>
						See services
					</div>
				</div>
			</div>
			<!-- LEFT COLUMN END -->

			<img src="tutor-graphic-1.svg" alt="Student working at computer" />
		</div>
	</div>
</div>

<style>
	.gradient {
		background-image: linear-gradient(120deg, #3709ee, #0284da 35% 100%);
	}
</style>
