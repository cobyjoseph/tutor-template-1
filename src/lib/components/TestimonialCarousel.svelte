<script lang="ts">
	import { testimonialsStore } from '$lib/stores/Testimonials';
	import { fade, fly } from 'svelte/transition';
	import { sineIn, sineOut, quintOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';

	let testimonials;
	let postCount: Number;
	let stopCar = true;

	onMount(async () => {
		if (stopCar) {
			setInterval(autoScroll, 8000);
		} else if (!stopCar) {
			clearInterval(autoScroll);
		}
	});

	testimonialsStore.subscribe((value) => {
		testimonials = value;
	});

	console.log(testimonials);
	$: postCount = testimonials.length;

	$: direction = 'right';
	$: currentCard = 0;

	let autoScroll = () => {
		direction = 'right';
		currentCard = (currentCard + 1) % postCount;
	};

	function nextCard() {
		direction = 'right';
		currentCard = (currentCard + 1) % postCount;
		stopCar = false;
	}

	function prevCard() {
		direction = 'left';
		if (currentCard != 0) {
			currentCard = (currentCard - 1) % postCount;
		} else {
			currentCard = postCount - 1;
		}
	}
</script>

<div class="flex justify-between px-3 frostedBox gap-3 min-h-[7rem] mt-auto relative z-10">
	<!-- arrow left -->
	<button on:click={prevCard}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-[26px] w-[26px] justify-center stroke-primaryBright stroke-[3px]"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<!-- this w-full makes this a central box that takes up the whole center, while the arrows are still pushed to either side with justify-between -->
	<!-- {#key testimonials[currentCard]} -->
	<div class="flex w-full">
		{#each [testimonials[currentCard]] as testimonial, index (testimonial.id)}
			<div
				in:fly={{
					delay: 0,
					duration: direction === 'right' ? 500 : 500,
					x: direction === 'right' ? 100 : -100,
					easing: sineIn
				}}
				out:fly={{
					duration: 600,
					x: direction === 'right' ? -100 : 100,
					easing: sineOut
				}}
				animate:flip={{
					delay: 0,
					easing: quintOut
				}}
				class="flex  gap-5  p-2  items-center bg-opacity-30 "
			>
				<!-- this extra div around the image and name divs is so I can apply shirnk-0 to that whole container around these items, so they don't decrease their width based on the quote. then then the quote is a separate flex item that wraps itself. -->
				<div in:blur={{ duration: 600 }} class="flex shrink-0 gap-1">
					<div class="rounded-full overflow-hidden   ">
						<img
							class=" shrink-0 w-[90px] h-[90px] object-cover  "
							src="/testimonials/{testimonial.image}"
							alt="carousel images of students"
						/>
					</div>
					<div
						class=" flex shrink-0 text-xl font-semibold font-Caveat text-primaryBright self-end "
					>
						- {testimonial.name}
					</div>
				</div>
				<div class="flex text-[.9em] italic pseudoQuote relative">
					{testimonial.quote}
				</div>
			</div>
		{/each}
	</div>
	<!-- {/key} -->

	<!-- arrow right -->
	<button on:click={nextCard}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-[26px] w-[26px] justify-center stroke-primaryBright stroke-[3px]"
			fill="none"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
		</svg>
	</button>
</div>

<!-- Nav dots group -->
<!-- <div class="mx-12 flex h-[26px] items-center justify-center gap-1.5 "> -->
<!-- {#each testimonials as i, index (i.id)}
				{#if currentCard === index}
					<div class="h-[18px] w-[18px]  rounded-sm bg-secondary" />
				{:else}
					<div class="h-[15px] w-[15px] rounded-sm bg-white" />
				{/if}
			{/each} -->

<!-- </div> -->
<style>
	/* From https://css.glass */
	.frostedBox {
		background: rgba(255, 255, 255, 0.45);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border: 0.05rem solid rgba(255, 255, 255, 0.4);
	}

	.pseudoQuote::before {
		content: '"';
		position: absolute;
		top: -2rem;
		left: -2rem;
		font-size: 6rem;
		color: #a46e57;
		opacity: 0.4;
		font-family: IM Fell English;
		transform: scaleX(-1);
		z-index: -20;
	}
	.pseudoQuote::after {
		content: '"';
		position: absolute;
		transform: translateY(1rem);

		right: -0.8rem;
		font-size: 6rem;
		color: #a46e57;
		opacity: 0.4;
		font-family: IM Fell English;
		z-index: -20;
	}
</style>
