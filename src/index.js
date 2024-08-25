import PEM from './certificates.js';

export default {
	async fetch(request, env, ctx) {
		return new Response(PEM, {
			headers: { 'Content-Type': 'text/plain' },
		});
	},
};
