<script>
	import { updateAppState } from '../../routes/+layout.svelte';
</script>

<div class="toggle-container ml-4">
	<input type="checkbox" onclick={updateAppState} id="toggle" class="toggle-input" />
	<label for="toggle" class="toggle-label">
		<span class="toggle-slider"></span>
	</label>
</div>

<style>
	/* Container to center the toggle */
	.toggle-container {
		display: flex;
		align-items: center;
		justify-content: center;
		/* height: 100vh; */
		/* background-color: #f3f4f6; */
	}

	/* Hide the checkbox input */
	.toggle-input {
		display: none;
	}

	/* Label acts as the toggle switch */
	.toggle-label {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 30px;
		background-color: #ccc;
		border-radius: 30px;
		cursor: pointer;
		transition: background-color 0.3s ease;
	}

	/* The slider (circle inside the toggle) */
	.toggle-slider {
		position: absolute;
		top: 3px;
		left: 3px;
		width: 24px;
		height: 24px;
		background-color: #fff;
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		transition: transform 0.3s ease;
	}

	/* Change background color when checked */
	.toggle-input:checked + .toggle-label {
		background-color: #8750f7;
	}

	/* Slide the circle to the right when checked */
	.toggle-input:checked + .toggle-label .toggle-slider {
		transform: translateX(30px);
	}
</style>
