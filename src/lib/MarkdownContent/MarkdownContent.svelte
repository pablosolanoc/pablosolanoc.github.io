<script lang="ts">
	let { children } = $props();
</script>

<div class="flex justify-center">
	<div class="prose dark:prose-invert max-w-[90%] md:max-w-[40%] mt-10 self-center">
		{@render children()}
	</div>
</div>
