<script lang="ts">
    export let options: string[] = []
    export let posX: number;
    export let posY: number;

    export let clickOption = (index: number)=>{
        console.log("clicked index: " + index )
    }

</script>


{#if options.length > 0}
    <div class="box" style="transform:translate({posX}px, {posY}px);">
        {#each options as option, index}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="option" on:click={()=>clickOption(index)}>{option}</div>
        {/each}
    </div>
{/if}


<style>
    .box{
        position: absolute;
        inset: 0px auto auto 0px;
        z-index: 12;
        background-color: white;
        width:  200px;
        max-height: 150px;
        overflow-y: scroll;
        line-height: 1.5;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 22px 0px;
        font-family: "Open Sans", sans-serif;
    }
    .box::-webkit-scrollbar{
        width: 5px;
        height: 5px;
        background-color: rgb(228, 228, 228);
    }
    .box::-webkit-scrollbar-thumb{
        background-color: #ababab;
    }
    .option{
        padding: 3px 3px 3px 8px;
        cursor: pointer;
        font-size: 14px;
        line-height: 1.4;
    }
    .option:hover{
        background-color: rgb(228, 228, 228);
    }
</style>