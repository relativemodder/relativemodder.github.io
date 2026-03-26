<script>
	import InfoCategory from './InfoCategory.svelte';
	import InfoParagraph from './InfoParagraph.svelte';
</script>

<InfoCategory
	categoryName="Backend / scripting knowledge stack"
	coverIcon="eos-icons:rotating-gear"
>
	<InfoParagraph icon="mdi:language-python">Python</InfoParagraph>

	<InfoParagraph icon="simple-icons:fastapi">
		<a class="underline underline-offset-2" href="https://fastapi.tiangolo.com/" target="_blank">
			FastAPI
		</a>
	</InfoParagraph>

	<InfoParagraph icon="simple-icons:sqlalchemy">
		<a class="underline underline-offset-2" href="https://www.sqlalchemy.org/" target="_blank">
			SQLAlchemy
		</a>
	</InfoParagraph>

	<InfoParagraph icon="mdi:language-cpp">C++</InfoParagraph>

	<InfoParagraph icon="mdi:language-rust">Rust</InfoParagraph>

	<InfoParagraph icon="zondicons:php-elephant">
		PHP
		<span class="opacity-50">(Plain, but I also know how to MVC)</span>
	</InfoParagraph>

	<InfoParagraph icon="mdi:sql-query">SQL</InfoParagraph>
</InfoCategory>
