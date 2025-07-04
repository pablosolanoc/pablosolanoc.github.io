<script lang="ts">
	import Experience from '$lib/pages/experience.svelte';
	import Home from '$lib/pages/home.svelte';
	import Projects from '$lib/pages/projects.svelte';
	import Skills from '$lib/pages/skills.svelte';
	import Testimonials from '$lib/pages/testimonials.svelte';

	let { data } = $props();
</script>

<Home {data} />
<Experience />
<Testimonials />
<Skills />
<Projects />
