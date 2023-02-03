<script lang="ts">
	import { onMount } from 'svelte';
	let phrase1 = 'Build confidence.';
	let typedChars = '';
	let index = 0;
	let phrase2 = 'Get results.';
	let typedChars2 = '';
	let index2 = 0;
	let pause = true;
	let noTypeDiv = false;
	setTimeout(() => {
		pause = false;
		noTypeDiv = true;
	}, 2000);
	const addChars = () => {
		if (index < phrase1.length) typedChars += phrase1[index];
		index++;
	};
	const addChars2 = () => {
		if (index2 < phrase2.length) typedChars2 += phrase2[index2];
		index2++;
	};
	const typing = () => setInterval(addChars, 100);
	const typing2 = () => {
		setTimeout(() => {
			setInterval(addChars2, 100);
		}, 2500);
	};
	typing();
	typing2();
</script>

<div>
	{#if pause}
		<div
			class="gradientText text-4xl after:pl-1 after:text-4xl after:font-medium after:text-[#544E4E] after:content-['|'] "
		>
			{typedChars}
		</div>
		<div>
			<div class="text-4xl opacity-0 md:text-5xl">{phrase2}</div>
		</div>
	{/if}
	{#if noTypeDiv}
		<div class="gradientText text-4xl md:text-5xl ">
			{typedChars}
		</div>

		<div
			class=" gradientText text-4xl after:animate-blinking after:pl-1 after:text-4xl after:font-medium after:text-[#544E4E] after:content-['|']"
		>
			{typedChars2}
		</div>
	{/if}
</div>

<!-- <div class="gradientText relative z-30 text-4xl lg:text-5xl">
	{#if pause}
		<div class=" after:pl-1 after:font-medium after:text-[#544E4E] after:content-['|'] ">
			{typedChars}
		</div>
		<div>
			<div>{phrase2}</div>
		</div>
	{/if}
	{#if noTypeDiv}
		{typedChars}

		<div
			class=" min-h-full text-xl after:animate-blinking after:pl-1 after:font-medium after:text-[#544E4E] after:content-['|'] lg:after:text-5xl"
		>
			{typedChars2}
		</div>
	{/if}
</div> -->

<!-- <script lang="ts">
		import { onMount } from 'svelte';
		import { current_component, text } from 'svelte/internal';

	let sentence1 = 'Build confidence.';
	let sentence2 = 'Get results.';
	let i = 0;
	
	$: typedSentence1 = [];
	
	let typedToIndex = 0;
	
	// $: typedSentence1 = sentence1.slice(0, typedToIndex);
	
	function typeWriter() {
		if (i < sentence1.length) {
			typedSentence1 = [...typedSentence1, sentence1.charAt(i)];
			i++;
			setTimeout(typeWriter, 300);
		}
	}
	
	// const handleTyping = () => {
		// 	if (typedToIndex + 1 <= typedSentence1.length) {
			// 		typedToIndex++;
			// 		typedSentence1 = [...typedSentence1, typedSentence1[typedToIndex]];
			// 	}
			// };
			
			onMount(() => {
				typeWriter();
	});
</script>

<div
	class="after:content-['|'] after:text-5xl after:animate-blinking after:font-medium after:pl-1 after:text-[#544E4E]"
>
	{typedSentence1}
</div>
<div>Get results.</div> -->
<style>
	.gradientText {
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

		/* 
		primary: '#1a1101',
				primaryDark: '#151225',
				primaryBright: '#2A2AAC',
				secondary: '#CC3232',
				secondaryDark: '#6b1b15',
				third: '#F6991B',
				shading: '#f0e8d8',
				accent: '#F6895A',
				textAlternate: '#2B217A' */
		/* Set the background size and repeat properties. */
		background-size: 100%;
		background-repeat: repeat;

		/* Use the text as a mask for the background. */
		/* This will show the gradient as a text color rather than element bg. */
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
