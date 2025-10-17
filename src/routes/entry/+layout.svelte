<script lang="ts">
	import MarkdownContent from '$lib/MarkdownContent/MarkdownContent.svelte';

	let { children } = $props();
</script>

<div class="min-h-screen w-screen">
	<MarkdownContent>{@render children()}</MarkdownContent>
</div>
