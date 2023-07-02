export class WordElement {
    options: string[]
    top: number;
    right: number;
    bottom: number;
    left: number;
    focus: ()=>void
    unfocus: ()=>void
    choose: (index:number)=>void
    constructor(options: string[], top: number, right: number, bottom:number, left:number, focus:()=>void, unfocus:()=>void, choose:(index:number)=>void){
        this.options = options;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.focus = focus;
        this.unfocus = unfocus
        this.choose = choose
    }
}
