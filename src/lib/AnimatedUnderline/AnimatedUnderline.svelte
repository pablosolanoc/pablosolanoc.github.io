<script lang="ts">
	let { show } = $props();
</script>

{#if show}
	<div
		class="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-500 ease-out group-hover:w-full"
	></div>
{/if}
