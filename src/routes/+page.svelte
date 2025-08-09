<script lang="ts">
	import Experience from '$lib/pages/experience.svelte';
	import Home from '$lib/pages/home.svelte';
	import Projects from '$lib/pages/projects.svelte';
	import Skills from '$lib/pages/skills.svelte';
	import Testimonials from '$lib/pages/testimonials.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SEOInfo } from '$lib/stores/seo';
</script>

<SEO data={SEOInfo} />

<Home />
<Experience />
<Testimonials />
<Skills />
<Projects />
