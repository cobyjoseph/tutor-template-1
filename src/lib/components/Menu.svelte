<script>
	// let color = 'green';
	// let background = 'linear-gradient(120deg, #3709ee, #0284da 35% 100%)';
	let intrinsicwidth = 8;
</script>

<div class="bg-white bg-opacity-0 flex justify-center mt-3">
	<div
		class=" font-Heebo w-full max-w-[1400px] relative flex justify-between text-xl rounded-lg px-[3%] text-[#2F2E41] py-2  overflow-hidden"
	>
		<div class="flex gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="w-8 h-8"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
				/>
			</svg>
			<div class=" relative font-semibold text-2xl  ">Company Name</div>
		</div>
		<div class=" relative flex   gap-14   ">
			<div class=" font-semibold hover-underline-animation after:hover-underline-animation ">Who we are</div>
			<div class=" font-semibold hover:bg-red-400 hover:cursor-pointer">Our services</div>
			<div class=" font-semibold ">Contact us</div>
		</div>
	</div>
</div>

<!-- SEE HERE FOR THE SOURCE OF THE UNDERLINE STYLING https://codepen.io/Ash/pen/WBMxpp?editors=0100 -->

<!-- <svelte:head>
	<style>
		:root {
			/* The intrinsic width of the underline stroke (in pixels). This is 
   * the same as the height of the cap images. Don't specify the
   * units! This is because of some of the calculations we do later on. */
			--underline-intrinsic-width: 8;

			/* The actual width of the underline stroke we want to render (in pixels).
   * You can modify this, and the sizing and positioning should be calculated
   * accordingly. Again, Don't specify the units! */
			--underline-width: 12;

			/* The colour used to draw the underline. It should match the colour
   * used in the cap images... unfortunately we can't modify the SVG
   * fill via CSS because it's a background image. */
			--underline-color: #0284DA;

			/* We need to know the width of the cap images so that we
   * can position everything on the x axis accordingly. */
			--underline-cap-width: 4px;

			/* The border is positioned relative to the bottom of the line.
   * We can move it upwards a little to create an overlap effect. */
			--underline-offset-y: -5px;

			/* The padding to add to the x axis. By default, the caps would be
   * aligned with the beginning and end of the line. */
			--underline-padding-x: 0.12em;

			/* The cap images to use that form the left and right rounded
   * shape. I guess these could be any shape, they don't
   * necessarily have to be round 🙂.
   */
			--cap-image-left: url(https://files-d4s40otz1.now.sh/left.svg);
			--cap-image-right: url(https://files-4vvqilj8v.now.sh/right.svg);
		}
	</style>
</svelte:head> -->
<style>
	.hover-underline-animation {
		display: inline-block;
		position: relative;
		color: #0087ca;
	}

	.hover-underline-animation::after {
		content: 'test';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #0087ca;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	/* .underlined {
		--underline-width-scale: calc(var(--underline-width) / var(--underline-intrinsic-width));
		padding: 0
			calc(
				var(--underline-padding-x) + calc(var(--underline-cap-width) * var(--underline-width-scale))
			);
		box-decoration-break: clone;
		background-repeat: no-repeat;
		background-image: linear-gradient(180deg, var(--underline-color), var(--underline-color)),
			var(--cap-image-left), var(--cap-image-right);
		background-position-x: calc(var(--underline-cap-width) * var(--underline-width-scale)), 0, 100%;
		background-position-y: calc(100% - var(--underline-offset-y) * -1);
		background-size: calc(
					100% - calc(var(--underline-cap-width) * var(--underline-width-scale) * 2)
				)
				calc(var(--underline-width) * 1px),
			auto calc(var(--underline-width) * 1px), auto calc(var(--underline-width) * 1px);
	} */
</style>
