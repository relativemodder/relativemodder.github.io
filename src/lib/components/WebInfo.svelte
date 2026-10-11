<script>
	import InfoCategory from "./InfoCategory.svelte";
	import InfoParagraph from "./InfoParagraph.svelte";

</script>

<InfoCategory 
    categoryName="Web development knowledge stack" 
    coverIcon="line-md:compass-twotone-loop">

    <InfoParagraph icon="flowbite:html-solid">
        HTML
    </InfoParagraph>

    <InfoParagraph icon="flowbite:css-solid">
        CSS
    </InfoParagraph>

    <InfoParagraph icon="flowbite:tailwind-solid">
        <a 
            class="underline underline-offset-2" 
            href="https://tailwindcss.com/"
            target="_blank">
                TailwindCSS
        </a>
    </InfoParagraph>

    <InfoParagraph icon="ri:nodejs-line">
        JavaScript / TypeScript
    </InfoParagraph>

    <InfoParagraph icon="ri:svelte-fill">
        <span class="opacity-50">This website is powered by</span>
        <a 
            class="underline underline-offset-2" 
            href="https://kit.svelte.dev/"
            target="_blank">
                SvelteKit
        </a>
    </InfoParagraph>

    <InfoParagraph icon="mdi:react">
        <a 
            class="underline underline-offset-2" 
            href="https://react.dev"
            target="_blank">
                React
        </a>
    </InfoParagraph>
</InfoCategory>
