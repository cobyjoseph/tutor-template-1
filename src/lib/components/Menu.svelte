<script>
	function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="relative z-0 mt-6 w-full items-start justify-center  ">
	<div
		class="relative flex w-full items-center justify-between rounded-lg font-Heebo  text-xl text-primaryBright "
	>
		<div class="flex items-center gap-4">
			<img class="w-7 sm:w-12" src="other/book-logo.svg" alt="rise tutoring logo" />

			<div class=" relative font-Caveat text-2xl font-bold text-secondary md:text-4xl  ">
				Rise tutoring
			</div>
		</div>
		<div class=" relative flex    gap-14  ">
			<!-- this extra div is so that I can put the menu svg and the menu names in the same div that makes the justify-between work. But then they also need to be in separate divs so the titles can be hidden on small -->
			<div class="hidden md:flex">
				<a
					href={'#section2'}
					class=" customUnderline  font-semibold"
					on:click|preventDefault={scrollIntoView}>My services</a
				>

				<a
					href={'#section3'}
					class=" customUnderline  font-semibold"
					on:click|preventDefault={scrollIntoView}>About me</a
				>
				<a
					href={'#section4'}
					class=" customUnderline  font-semibold"
					on:click|preventDefault={scrollIntoView}>Schedule</a
				>
				<a
					href={'#section5'}
					class=" customUnderline  font-semibold"
					on:click|preventDefault={scrollIntoView}>Contact</a
				>
			</div>

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
		background-image: linear-gradient(90deg, #cc3232, #f6991b 100%);
	}

	.customUnderline:after {
		content: '';
		width: 100%;
		height: 4px;
		opacity: 70%;
		position: relative;
		background: #f6991b;
		display: block;
		transform: translate(-2px, -8px) scaleX(0.42) skew(-50deg);
		transform-origin: left;
		transition: transform 250ms ease-in;
		z-index: -1;
	}

	.customUnderline:hover::after {
		background: linear-gradient(90deg, #cc3232, #f6991b 100%);
		transform: translate(-2px, -5px) skew(-40deg);
		opacity: 70%;
	}
</style>
