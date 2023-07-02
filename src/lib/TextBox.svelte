<script lang="ts">
	import Word from "./Word.svelte";
	import type { WordElement } from "./wordElement";

    export let wordClickHander: (w: WordElement)=>void
    
    export let text : string[][] = [
        ["I", "We", "You", "They", "He", "She", "It"], 
        ["go", "went", "goes", "run", "runs", "work", "works", "live", "lives"], 
        ["to", "at", "on", "in"], 
        ["school", "class", "college", "classrom", "university", "work", "house", "appartment", "a house", "the house", "an appartment", "the appartment", "the school", "the college", "a school"]
    ];
</script>


<div class="box">
    {#each text as word}
        <Word wordOptions={word} clickHandler={wordClickHander}></Word>
        <span> </span>
    {/each}
</div>



<style>
    .box{
        /* border: 1px solid black; */
        flex-grow: 1;
        width: 48%;
        min-height: 500px;
        padding: 1rem;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        user-select: text;
        overflow-x: scroll;
    }
    @media (max-width:700px){
		.box{
            min-height: 250px;
            width: auto;
        }
	}
    ::-webkit-scrollbar{
        width: 7px;
        height: 7px;
        background-color: rgb(255, 255, 255);
        
    }
    ::-webkit-scrollbar-thumb{
        background-color: #ababab;
    }
</style>
