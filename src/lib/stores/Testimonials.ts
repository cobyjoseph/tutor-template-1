import { writable } from 'svelte/store';

export const testimonialsStore = writable([
	{
		id: 1,
		name: 'Jim Collins',
		image: 'Jim-Collins.jpg',
		// Photo by Emma Freeman Portraits / Flickr, 2006 https://www.flickr.com/photos/emmafreemanportraits/401938829/
		quote:
			'I had an amazing experience with Charlie. He helped me understand the material and provided clear explanations. His teaching style was perfect for me and I was able to see a significant improvement in my grades. I highly recommend Charlie to any high school student looking to improve their understanding of the subject matter.'
	},
	{
		id: 2,
		name: 'Emma Brown',
		image: 'Emma-Brown.jpg',
		// Photo by Jenn Durfey / Flickr, 2012 https://www.flickr.com/photos/dottiemae/7770244716/
		quote:
			'Charlie was a fantastic Math tutor. He was able to break down complex concepts and make them easy to understand. He was patient and always willing to help me with any questions I had. I saw a huge improvement in my math grades thanks to him.'
	},
	{
		id: 3,
		name: 'Michael Smith',
		image: 'Michael-Smith.jpg',
		// Photo by JON_CF / Flickr 2010 https://www.flickr.com/photos/ferronj/4957881435/
		quote:
			'Charlie was an excellent tutor in Economics, English, and History. He helped me not only understand the material, but also develop critical thinking skills. He was always available and willing to go the extra mile to ensure I understood the subject matter. I highly recommend him.'
	},
	{
		id: 4,
		name: 'Maria Freeman',
		image: 'Maria-Freeman.jpg',
		// Photo by stevetulk / Flickr, 2011 https://www.flickr.com/photos/epicsurfgt/5323017850/
		quote:
			'Charlie was an exceptional tutor in History, Biology, and Math. He was able to help me understand the material and make connections between the subjects. He was patient, knowledgeable and always willing to help me with any questions I had. I highly recommend him to anyone who needs help with these subjects.'
	}
]);
