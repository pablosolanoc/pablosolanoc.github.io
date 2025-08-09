<script>
	import { Icon } from 'svelte-icons-pack';

	import { SiNestjs } from 'svelte-icons-pack/si';

	const { class: className, ...props } = $props();
</script>

<Icon src={SiNestjs} className={`${className}`} {...props} />
