<script lang="ts">
	import { onMount } from 'svelte';

	let phrase1 = 'Build confidence.';
	let typedChars = '';
	let index = 0;

	const addChars = () => {
		if (index < phrase1.length) typedChars += phrase1[index];
		index++;
	};

	const typing = () => setInterval(addChars, 100);

	typing();
</script>

<div
	class="after:content-['|'] after:text-5xl after:animate-blinking after:font-medium after:pl-1 after:text-[#544E4E]"
>
	{typedChars}
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
