<script lang="ts">
    import Icon from "@iconify/svelte";
    import InfoCover from "./InfoCover.svelte";

    export let categoryName: string;
    export let coverIcon: string;
</script>

<div class="mt-10 m-5 p-5 bg-zinc-900 rounded-xl relative max-w-96">
    <div>
        <h2 class="mx-3 text-2xl flex gap-5 w-full items-center font-semibold">
            <Icon icon="octicon:chevron-right-12" font-size="14pt" />
            { categoryName }
        </h2>
        <div class="mt-5"></div>
        <slot />
    </div>
    <InfoCover icon={ coverIcon } />
</div>
