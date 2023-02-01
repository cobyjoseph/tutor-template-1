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
			class="text-xl after:pl-1 after:font-medium after:text-[#544E4E] after:content-['|'] lg:after:text-5xl"
		>
			{typedChars}
		</div>
		<div>
			<div class="text-xl opacity-0 lg:text-5xl">{phrase2}</div>
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
</div>

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
