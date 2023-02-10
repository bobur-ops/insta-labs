import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost:3000',
	integrations: [react(), tailwind(), prefetch(), sitemap()],
});
