class titles{
    constructor(num){
        this.num = num;
    }
getTitles(){
    let out = "";
    for(let i = 0; i < this.num; i++){
        out += "Titles ";
    }
    return out;
}
}