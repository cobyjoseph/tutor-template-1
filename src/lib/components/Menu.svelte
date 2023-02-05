<script>
	import { backIn, sineIn } from 'svelte/easing';
	import { blur } from 'svelte/transition';

	let showMenu = false;

	function handleMenu() {
		showMenu = !showMenu;
	}

	function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="  mt-6 w-full items-start justify-center lg:mt-10  ">
	<div
		class=" flex w-full items-center justify-between rounded-lg font-Heebo  text-xl text-primaryBright  xl:text-4xl "
	>
		<div class="flex items-center gap-4">
			<img class="w-7 sm:w-12" src="other/book-logo.svg" alt="rise tutoring logo" />

			<div
				class=" relative font-Caveat text-2xl font-bold text-secondary md:text-5xl landscape:h415:text-2xl  "
			>
				Rise tutoring
			</div>
		</div>

		<!-- THIS IS FULL MENU-->

		<div class="  flex  gap-20   ">
			<!-- this extra div is so that I can put the menu svg and the menu names in the same div that makes the justify-between work. But then they also need to be in separate divs so the titles can be hidden on small -->
			<div class="hidden gap-14 lg:flex ">
				<a
					href={'#section2'}
					class=" customUnderline   font-semibold"
					on:click|preventDefault={scrollIntoView}>My services</a
				>

				<a
					href={'#section3'}
					class=" customUnderline  font-semibold"
					on:click|preventDefault={scrollIntoView}>About me</a
				>

				<a
					href={'#section5'}
					class=" customUnderline  font-semibold"
					on:click|preventDefault={scrollIntoView}>Contact</a
				>
			</div>

			<!-- THIS IS MENU ICON -->
			<div class="flex gap-8  lg:hidden ">
				{#if !showMenu}
					<button on:click={handleMenu} in:blur>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class=" flex h-6 w-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				{/if}

				{#if showMenu}
					<div class="relative">
						<button on:click={handleMenu} in:blur>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="flex h-6 w-6"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						<div
							class="frostedBox absolute top-7 right-0 z-[300] grid w-[14rem] grid-cols-1 gap-4 self-stretch p-6"
							in:blur={{ duration: 300, easing: sineIn }}
						>
							<a
								href={'#section2'}
								class=" underlineMenu   font-semibold  "
								on:click|preventDefault={scrollIntoView}>My services</a
							>

							<a
								href={'#section3'}
								class=" underlineMenu  font-semibold"
								on:click|preventDefault={scrollIntoView}
								>About me
							</a>

							<a
								href={'#section5'}
								class=" underlineMenu  font-semibold"
								on:click|preventDefault={scrollIntoView}
								>Contact
							</a>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.customUnderline {
		position: relative;
	}

	.customUnderline:hover {
		color: transparent;
		background-clip: text;
		/* background-image: linear-gradient(90deg, #cc3232, #f6991b 100%); */

		background-color: #ca4246;

		/* Create the gradient. */
		background-image: linear-gradient(
			45deg,
			#2a2aac 16.666%,
			#cc3232 16.666%,
			#cc3232 33.333%,
			#f6991b 33.333%,
			#f6991b 50%,
			#f6895a 50%,
			#f6895a 66.666%,
			#c8c0b2 66.666%,
			#c8c0b2 83.333%,
			#c8c0b2 83.333%
		);

		background-size: 100%;
		background-repeat: repeat;

		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.customUnderline:after {
		content: '';
		width: 100%;
		height: 4px;
		opacity: 70%;
		position: relative;
		background: #f6991b;
		display: block;
		transform: translate(-2px, -4px) scaleX(0.42) skew(-50deg);
		transform-origin: left;
		transition: transform 250ms ease-in;
		z-index: -1;
	}

	.customUnderline:hover::after {
		/* background: linear-gradient(90deg, #cc3232, #f6991b 100%); */
		transform: translate(-2px, -5px) skew(-40deg);
		opacity: 70%;
		width: 100%;

		background-image: linear-gradient(
			45deg,
			#2a2aac 16%,
			#cc3232 16%,
			#cc3232 33%,
			#f6991b 33%,
			#f6991b 70%,
			#f6895a 70%,
			#f6895a 96%,
			#c8c0b2 96%,
			#c8c0b2 98%,
			#c8c0b2 98%
		);
	}

	.underlineMenu:after {
		content: '';
		width: 40%;
		height: 4px;
		opacity: 70%;
		position: relative;
		background: #f6991b;
		display: block;
		transform: translate(-2px, -4px) scaleX(0.42) skew(-50deg);
		transform-origin: left;
		transition: transform 250ms ease-in;
		z-index: -1;
	}

	.underlineMenu:hover::after {
		/* background: linear-gradient(90deg, #cc3232, #f6991b 100%); */
		transform: translate(-2px, -5px) skew(-40deg);
		opacity: 70%;
		width: 4.5rem;

		background-image: linear-gradient(
			45deg,
			#2a2aac 16%,
			#cc3232 16%,
			#cc3232 33%,
			#f6991b 33%,
			#f6991b 70%,
			#f6895a 70%,
			#f6895a 96%,
			#c8c0b2 96%,
			#c8c0b2 98%,
			#c8c0b2 98%
		);
	}

	.blurIn {
		opacity: 0.3;
		filter: blur(5px);
		transition: all 1s;
	}

	.frostedBox {
		background: rgba(255, 255, 255, 0.45);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 0.05rem solid rgba(255, 255, 255, 0.4);
	}
</style>
