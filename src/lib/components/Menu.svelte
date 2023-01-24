<script>
	function scrollIntoView({ target }) {
		const element = document.querySelector(target.getAttribute('href'));
		if (!element) return;
		element.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="bg-white bg-opacity-0 flex justify-center  z-0 relative items-start mt-6 ">
	<div
		class="font-Heebo w-full relative flex justify-between items-center text-xl rounded-lg  text-primaryBright  "
	>
		<div class="flex gap-4 items-center">
			<img class="w-12" src="other/book-logo.svg" alt="rise tutoring logo" />

			<div class=" relative text-4xl text-secondary font-Caveat font-bold  ">Rise tutoring</div>
		</div>
		<div class=" relative flex   gap-14   ">
			<a
				href={'#section2'}
				class=" font-semibold  customUnderline"
				on:click|preventDefault={scrollIntoView}>My services</a
			>

			<a
				href={'#section3'}
				class=" font-semibold  customUnderline"
				on:click|preventDefault={scrollIntoView}>About me</a
			>
			<a
				href={'#section4'}
				class=" font-semibold  customUnderline"
				on:click|preventDefault={scrollIntoView}>Schedule</a
			>
			<a
				href={'#section5'}
				class=" font-semibold  customUnderline"
				on:click|preventDefault={scrollIntoView}>Contact</a
			>
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
