export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c8dc0ba1.js","app":"_app/immutable/entry/app.6277b6e6.js","imports":["_app/immutable/entry/start.c8dc0ba1.js","_app/immutable/chunks/index.bca4a7a4.js","_app/immutable/chunks/singletons.e6c63f67.js","_app/immutable/chunks/index.15f46245.js","_app/immutable/entry/app.6277b6e6.js","_app/immutable/chunks/index.bca4a7a4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
