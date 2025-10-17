<script lang="ts">
	let { children } = $props();
</script>

<div class="flex justify-center w-screen">
	<div class="prose dark:prose-invert max-w-[90%] mt-10 self-center w-screen">
		{@render children()}
	</div>
</div>
