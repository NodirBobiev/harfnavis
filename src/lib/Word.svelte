<script lang="ts">
    import { WordElement } from "$lib/wordElement"
    export let wordOptions : string[];

    export let clickHandler = (w: WordElement)=>{}

    export let highlight: boolean = false

    function focus(){
        highlight = true
    }
    function unfocus(){
        highlight = false
    }
    function choose(index: number){
        currentIndex = index
    }

    function onClick(event: MouseEvent){
        const spanElement = event.target as HTMLElement;
        const rect = spanElement.getBoundingClientRect()
        let el = new WordElement(wordOptions, rect.top, rect.right, rect.bottom, rect.left, focus, unfocus, choose)
        clickHandler(el)
    }

    let currentIndex = 0

</script>

{#if wordOptions.length > currentIndex }
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <span on:click={onClick} class="{highlight?"highlight":""}">
        {wordOptions[currentIndex]}
    </span>
{/if}


<style>
    span{
        cursor: pointer;
    }
    .highlight{
        color: rgb(80, 0, 185);
        /* font-weight: bold;/ */
    }
</style>
