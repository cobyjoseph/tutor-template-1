<script lang="ts">
	import { testimonialsStore } from '$lib/stores/Testimonials';
	import { fade, fly } from 'svelte/transition';
	import { sineIn, sineOut, quintOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';
	import InView from '$lib/components/InView.svelte';

	let testimonials;
	let postCount: Number;
	let visible;
	let stopCar = true;

	onMount(async () => {
		if (stopCar) {
			setInterval(autoScroll, 8000);
		} else if (!stopCar) {
			clearInterval(autoScroll);
		}
	});

	// have a variable that settimeout in addition to interval, and after every interval set back the initial state and reset

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

<InView let:isVisible={visible}>
	<div
		class="frostedBox relative z-10 mt-auto flex min-h-[7rem] justify-between gap-1  px-[0.1rem] lg:gap-1 lg:px-3 xl:min-h-[10rem] minh820:p-[0.8rem] landscape:h415:gap-1 landscape:h415:px-[0.3rem]  {visible
			? 'blurIn delay100 visible'
			: 'blurIn'}  "
	>
		<!-- arrow left -->
		<button on:click={prevCard}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="relative z-50 h-[26px] w-[26px] justify-center stroke-primaryBright stroke-[3px] "
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
					animate:flip={{
						delay: 0,
						easing: quintOut
					}}
					class="flex flex-col items-center gap-[0.4rem] bg-opacity-30 p-2 lg:flex-row lg:gap-0 landscape:h415:flex-col landscape:h415:gap-[0.4rem]"
				>
					<!-- this extra div around the image and name divs is so I can apply shirnk-0 to that whole container around these items, so they don't decrease their width based on the quote. then then the quote is a separate flex item that wraps itself. -->

					<!-- the negative ml below pushes it to the side of the box, which looks better, but can't be too big a neg ml or it will overlap with the left arrow. -->
					<div
						in:blur={{ duration: 600 }}
						class="  -mt-6 -ml-4  flex min-w-[13.5rem] shrink-0 items-center gap-1 self-start  lg:mt-0 lg:justify-center lg:self-center  landscape:h415:mt-[-1rem] landscape:h415:justify-start  landscape:h415:self-start  "
					>
						<img
							class="h-[40px] w-[40px]   shrink-0 overflow-hidden rounded-full object-cover lg:h-[90px] lg:w-[90px] minh820:mt-[-2rem] minh820:h-[60px] minh820:w-[60px] minh820:lg:h-[75px] minh820:lg:w-[75px]  minh820:xl:h-[90px] minh820:xl:w-[90px] landscape:h415:mt-[-0.7rem] landscape:h415:h-[40px]  landscape:h415:w-[40px] "
							src="/testimonials/{testimonial.image}"
							alt="carousel images of students"
						/>
						<div
							class=" flex shrink-0 self-end font-Caveat text-sm font-semibold text-primaryBright lg:text-xl minh820:text-[1.2rem] "
						>
							- {testimonial.name}
						</div>
					</div>

					<div
						class=" relative  mr-0  flex text-[1rem] italic lg:mr-[-2.5rem] lg:pt-0 lg:pr-5 lg:text-[1.2rem] xl:pt-0 xl:text-[1.3rem]  md:minh600:text-[1.2rem] minh820:text-[1.13rem] minh820:2xl:text-[1.6rem]  minh962:text-[1.55rem] minh962:xl:text-[1.6rem] landscape:h415:text-[0.72rem]"
					>
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
				class="relative z-50 h-[26px] w-[26px] justify-center stroke-primaryBright stroke-[3px]"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			</svg>
		</button>
	</div>
</InView>

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
		top: 0.7rem;
		left: 0.8rem;
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

	@media (min-width: 1024px) {
		.pseudoQuote::before {
			font-size: 5rem;
			top: -1rem;
			left: 13.5rem;
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
