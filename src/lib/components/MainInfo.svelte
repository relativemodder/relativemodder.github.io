<script>
	import { getAge } from '$lib';
	import Button from './Button.svelte';
	import InfoCategory from './InfoCategory.svelte';
	import InfoParagraph from './InfoParagraph.svelte';

	let pressedOnEmail = false;
</script>

<InfoCategory categoryName="Main Info" coverIcon="mdi:about">
	<InfoParagraph icon="bi:person-fill">
		Andrew, {getAge()} y.o.
	</InfoParagraph>

	<InfoParagraph icon="material-symbols:work">
		Full-stack, mostly front-end web developer
	</InfoParagraph>

	<InfoParagraph icon="fluent:hat-graduation-12-filled">Junior</InfoParagraph>

	<InfoParagraph icon="mdi:arch">
		<a class="underline underline-offset-2" href="https://archlinux.org" target="_blank">
			Arch Linux
		</a>
		is my main OS
	</InfoParagraph>

	<InfoParagraph icon="lucide:languages">Russian (Native), English (B2-C1, idk)</InfoParagraph>

	<InfoParagraph icon="mdi:github">
		<a
			class="underline underline-offset-2"
			href="https://github.com/relativemodder"
			target="_blank"
		>
			Explore my code
		</a>
		on GitHub
	</InfoParagraph>

	<div class="mt-5"></div>

	<Button
		href="mailto:kezin636@gmail.com"
		icon="fluent-emoji-high-contrast:e-mail"
		on:click={() => (pressedOnEmail = true)}
		target="_blank"
	>
		{pressedOnEmail ? 'kezin636@gmail.com' : 'E-mail me'}
	</Button>
</InfoCategory>
