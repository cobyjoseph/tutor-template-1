import { writable } from 'svelte/store';

export const testimonialsStore = writable([
	{
		id: 1,
		name: 'Jim Collins',
		image: 'Jim-Collins',
		quote:
			'I had an amazing experience with Charlie. He helped me understand the material and provided clear explanations. His teaching style was perfect for me and I was able to see a significant improvement in my grades. I highly recommend Charlie to any high school student looking to improve their understanding of the subject matter.'
	},
	{
		id: 2,
		name: 'Wei Lee',
		image: 'Wei-Lee',
		quote:
			'Charlie was an amazing Math tutor. He was able to break down complex concepts and make them easy to understand. He was patient and always willing to help me with any questions I had. I saw a huge improvement in my math grades thanks to him.'
	},
	{
		id: 3,
		name: 'Michael Smith',
		image: 'Michael-Smith',
		quote:
			'Charlie was an excellent tutor in Economics, English, and History. He helped me not only understand the material, but also develop critical thinking skills. He was always available and willing to go the extra mile to ensure I understood the subject matter. I highly recommend him.'
	},
	{
		id: 4,
		name: 'Maria Rodriguez',
		image: 'Maria-Rodriguez',
		quote:
			'Charlie was an exceptional tutor in History, Biology, and Math. He was able to help me understand the material and make connections between the subjects. He was patient, knowledgeable and always willing to help me with any questions I had. I highly recommend him to anyone who needs help with these subjects.'
	}
]);
