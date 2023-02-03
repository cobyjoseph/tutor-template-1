<script lang="ts">
	import { testimonialsStore } from '$lib/stores/Testimonials';
	import { fade, fly } from 'svelte/transition';
	import { sineIn, sineOut, quintOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';

	let testimonials;
	let postCount: Number;
	let stopCar = true;

	// onMount(async () => {
	// 	if (stopCar) {
	// 		setInterval(autoScroll, 8000);
	// 	} else if (!stopCar) {
	// 		clearInterval(autoScroll);
	// 	}
	// });

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

<div
	class="frostedBox relative z-10 mt-auto flex min-h-[7rem] justify-between gap-1 px-[0.1rem] md:gap-3 md:px-3 xl:min-h-[10rem]  "
>
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
	<div class="  pseudoQuote  flex w-full   ">
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
				class="flex flex-col items-center gap-[0.4rem] bg-opacity-30  p-2  md:flex-row md:gap-5 "
			>
				<!-- this extra div around the image and name divs is so I can apply shirnk-0 to that whole container around these items, so they don't decrease their width based on the quote. then then the quote is a separate flex item that wraps itself. -->

				<div
					in:blur={{ duration: 600 }}
					class=" -mt-6 -ml-12 flex min-w-[13.5rem] shrink-0 gap-1 self-start md:justify-start md:self-center"
				>
					<img
						class="h-[40px] w-[40px]   shrink-0 overflow-hidden rounded-full object-cover md:h-[90px] md:w-[90px] "
						src="/testimonials/{testimonial.image}"
						alt="carousel images of students"
					/>
					<div
						class=" flex shrink-0 self-end font-Caveat text-sm font-semibold text-primaryBright md:text-xl "
					>
						- {testimonial.name}
					</div>
				</div>

				<div class=" relative -mt-1 flex pt-2 text-[1rem] italic md:pt-0 md:pr-5  xl:text-[1.3rem]">
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

<style>
	.test {
		background-color: green;
	}
	/* From https://css.glass */
	.frostedBox {
		background: rgba(255, 255, 255, 0.45);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border: 0.05rem solid rgba(255, 255, 255, 0.4);
	}

	.pseudoQuote::after {
		content: '"';
		position: absolute;
		/* transform: translateY(1rem); */
		bottom: -3rem;
		right: 0.5rem;
		font-size: 4rem;
		color: #a46e57;
		opacity: 0.4;
		font-family: IM Fell English;
		z-index: -20;
	}

	.pseudoQuote::before {
		content: '"';
		position: absolute;
		top: 1.1rem;
		left: 0.3rem;
		font-size: 4rem;
		color: #a46e57;
		opacity: 0.4;
		font-family: IM Fell English;
		transform: scaleX(-1);
		z-index: -20;
	}
	/* .pseudoQuoteAfter::after {
		content: '"';
		position: absolute;

		bottom: -2.5rem;
		right: 2.2rem;
		font-size: 4rem;

		color: red;
		opacity: 0.4;
		font-family: IM Fell English;
		z-index: -20;
	} */

	/* MEDIA QUERIES BELOW ------------------------------------------- */

	@media (min-width: 768px) {
		.pseudoQuote::before {
			font-size: 5rem;
			top: -1rem;
			left: 15rem;
		}
	}

	@media (min-width: 1280px) {
		.pseudoQuote::before {
			font-size: 6rem;
			top: -1rem;
			left: 14rem;
		}
	}

	@media (min-width: 768px) {
		.pseudoQuote::after {
			font-size: 5rem;
			bottom: -3.5rem;
			right: 2rem;
		}
	}

	@media (min-width: 1280px) {
		.pseudoQuote::after {
			font-size: 6rem;
			bottom: -3.5rem;
			right: 2rem;
		}
	}
</style>
