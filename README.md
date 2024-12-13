# Next.js 15 Metadata Route Caching Issue

This repository demonstrates an unexpected caching issue encountered when using the `next/server` MetadataRoute in Next.js 15.  The `Cache-Control` header is set to `public, max-age=600`, which should result in a cache refresh every 10 minutes. However, in practice, the cache persists significantly longer.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the caching behavior in your browser's developer tools. The cache should ideally refresh every 10 minutes, but it doesn't.

## Potential Causes

- Possible interaction between Next.js 15's caching mechanism and the `Cache-Control` header.
- A potential bug in the `next/server` module related to metadata route handling.

## Solution

The solution involves using a more robust approach to caching, possibly involving server-side mechanisms beyond simply setting the `Cache-Control` header. Details are provided in the `metadataSolution.js` file.