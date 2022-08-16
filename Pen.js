class Pen {
    #hasInk;
    #colorInk;
    #numInk;

    constructor(){
        let colors = ["Black", "Blue"];
        this.#colorInk = colors[Math.floor(Math.random() * colors.length)];
        this.#numInk = 15;
        this.#hasInk = true;
    }

    getHasInk(){
        return this.#hasInk;
    }

    getColorInk(){
        return this.#colorInk;
    }

    getNumInk(){
        return this.#numInk;
    }

    setHasInk(bool){
        this.#hasInk = bool;
    }

    setColorInk(color){
        this.#colorInk = color;
    }

    setNumInk(num){
        this.#numInk = num;
    }

    write(sentence){
        console.log(sentence);
    }

    sign(){
        console.log("John Doe");
    }
}

let myPen = new Pen();
console.log(myPen.getColorInk());
console.log(myPen.getHasInk());
console.log(myPen.getNumInk());