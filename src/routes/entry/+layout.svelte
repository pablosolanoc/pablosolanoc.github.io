<script lang="ts">
	import MarkdownContent from '$lib/MarkdownContent/MarkdownContent.svelte';

	let { children } = $props();
</script>

<MarkdownContent>{@render children()}</MarkdownContent>
