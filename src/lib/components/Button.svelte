<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';

	export let href: string;
	export let icon: string;
	export let target: string = '_self';

	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('click');
	}
</script>

<a
	role="button"
	on:click={handleClick}
	class="bg-white text-black
    font-bold gap-4 items-center
    justify-center w-100 p-3 flex
    text-xl
    rounded-2xl"
	{target}
	{href}
>
	<Icon {icon} />
	<slot />
</a>
