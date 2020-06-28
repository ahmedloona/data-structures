class ArraySet {
    constructor() {
        this.values = [];
    }

    //O(N)
    insert(value) {
        if (!this.includes(value)) {
            this.values.push(value);
            return true;
        }
        return false;
    }

    //O(N)
    delete(value) {
        const idxToDelete = this.values.findIndex(el => el === value);
        if (idxToDelete === -1) {
            return false;
        } else {
            this.values.splice(idxToDelete, 1);
            return true;
        }
    }

    //O(N)
    includes(value) {
        const found = this.values.find(el => el === value);
        if (found === undefined) {
            return false;
        } else {
            return true;
        }
    } 
}

const set = new ArraySet();

set.insert(3)
set.insert(4)
set.insert(0)

console.log(set.includes(0))
console.log(set.includes(1))

console.log(set.delete(0))
console.log(set.delete(7))
console.log(set.delete(3))
console.log(set.delete(4))
console.log(set.delete(4))

console.log(set.insert(55))
console.log(set.insert(55))

console.log(set.values)