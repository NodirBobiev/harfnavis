<script lang="ts">
	import OptionsBox from "$lib/OptionsBox.svelte";
	import TextBox from "$lib/TextBox.svelte";
	import type { WordElement } from "$lib/wordElement";
	import "./styles.css"
	

	let wordOptions: string[]
	let boxPosX: number = 200;
	let boxPosY: number = 200;
	let currentWord: WordElement;

	let wordClickHander = (word: WordElement)=>{
		wordOptions = word.options
		boxPosX = word.left
		boxPosY = word.bottom
		if ( currentWord != undefined){
			currentWord.unfocus()
		}
		currentWord = word
		word.focus()
	}
	let clickOptionHandler = (index: number)=>{
		currentWord.choose(index)
	}
</script>


<div class="box">
	<TextBox {wordClickHander}/>
	<span class="line"></span>
	<TextBox {wordClickHander}></TextBox>
</div>

<OptionsBox options={wordOptions} posX={boxPosX} posY={boxPosY} clickOption={clickOptionHandler}/>

<style>
	.box{
		/* width: 1000px; */
		display: flex;
		flex-direction: row;
		flex-grow: 1;
		justify-content: center;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 22px 0px;
	}
	.line{
		width: 4px;
		background: #000;
		opacity: 0.2;
		/* border-bottom: 0px; */
		box-sizing: border-box;
		background-clip: padding-box;
		/* cursor: col-resize; */
	}
	/* .line:hover{
		border-right: 4px solid rgba(0, 0, 0, 1);
    	width: 7px;
	} */
	@media (max-width:700px){
		.box{
			flex-direction: column;
		}
		.line{
			height: 4px;
			width: auto;
		}
	}
</style>

