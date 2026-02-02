export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        try {
            // Try to get the asset from KV/Assets
            return await env.ASSETS.fetch(request);
        } catch (e) {
            // If not found, and it's a navigation request (not an image/css), verify if we should serve index.html
            // For a simple hash-based app, we can just return 404, but for correct SPA behavior:
            /*
            if (!url.pathname.match(/\..+$/)) {
                return await env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
            }
            */
            return new Response("Not Found", { status: 404 });
        }
    },
};
