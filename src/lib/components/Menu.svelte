<div class="bg-white bg-opacity-0 flex justify-center mt-3">
	<div
		class=" font-Heebo w-full max-w-[1400px] relative flex justify-between text-xl rounded-lg px-[3%] text-[#2606a6] py-2  overflow-hidden"
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
			<div class=" font-semibold  customUnderline">About me</div>
			<div class=" font-semibold  customUnderline">My services</div>
			<div class=" font-semibold customUnderline ">Contact</div>
		</div>
	</div>
</div>

<style>
	.customUnderline {
		position: relative;
	}

	.customUnderline:after {
		content: '';
		width: 100%;
		height: 4px;
		position: absolute;
		background: linear-gradient(120deg, #3709ee, #0284da 95% 100%);
		display: block;
		transform: scaleX(0.15);
		transform-origin: left;
		transition: transform 250ms ease-in;
	}

	.customUnderline:hover::after {
		background: linear-gradient(120deg, #3709ee, #0284da 35% 100%);
		transform: scaleX(1);
		transform-origin: left;
	}
</style>
