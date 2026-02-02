export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname.startsWith('/src/')) {
            // Allow access to src directory
            return env.ASSETS.fetch(request);
        }
        if (url.pathname === '/') {
            return env.ASSETS.fetch(request);
        }
        // Fallback to serving the requested asset if it exists, or index.html for SPA (optional)
        try {
            return await env.ASSETS.fetch(request);
        } catch (e) {
            return new Response("Not Found", { status: 404 });
        }
    },
};
