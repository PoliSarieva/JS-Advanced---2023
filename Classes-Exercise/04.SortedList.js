class List {
    constructor () {
        this.rezult = [];
        this.size = this.rezult.length;
    }

    add (value) {
        this.rezult.push(value);
        this.size = this.rezult.length;
        this.rezult.sort((a,b)=>a-b);
    }

    remove (index) {
        if (index < 0 || index >= this.rezult.length) {
            throw new Error('Invalid index');
        }
        this.rezult.splice(index, 1);
        this.size = this.rezult.length;
    }

    get (index) {
        if (index < 0 || index >= this.rezult.length) {
            throw new Error('Invalid index');
        }
        return this.rezult[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
