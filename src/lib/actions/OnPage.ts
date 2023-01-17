// import type { Actions } from './$types';

// this code comes from here: https://www.youtube.com/watch?v=x7tzr-fSqhE

// and it follows general syntax for actions, explained here https://svelte.dev/tutorial/actions

export default function onPage(node) {
	const handleIntersect = (e) => {
		node.dispatchEvent(
			new CustomEvent('customOnKeyword', {
				detail: e[0].isIntersecting
			})
		);
	};

	const root = null;
	const rootMargin = '0px 0px 0px 0px';
	const options = { root, rootMargin };
	const observer = new IntersectionObserver(handleIntersect, options);
	observer.observe(node);

	return {
		destroy() {
			if (observer) observer.disconnect();
		}
	};
}



// export const actions: Actions = {
// 	onPage: async (node) => {
// 	const handleIntersect = (e) => {
// 			node.dispatchEvent(
// 				new CustomEvent('customOnKeyword', {
// 				detail: e[0].isIntersecting
// 			})
// 		)};

// 	const root = null;
// 	const rootMargin = '0px 0px 0px 0px';
// 	const options = { root, rootMargin };
// 	const observer = new IntersectionObserver(handleIntersect, options);
// 	observer.observe(node);

// 	return {
// 		destroy() {
// 			if (observer) observer.disconnect();
// 		}
// 	};
// }
