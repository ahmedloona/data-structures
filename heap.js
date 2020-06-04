class PQ {
    constructor(values, compare = (el1, el2) => el1.key < el2.key) { // pass in compare function to convert to maxHeap
        this.values = values;
        this.compare = compare;
        this.heapSize = 0;
        this.heap = [];
        this.createHeap();
    }

    // build the heap in O(n log n)
    createHeap() {
        this.values.forEach(v => {
            this.addElement(v);
        });
    }

    // add new element to heap in O(log n)
    addElement(el) {
        this.heap.push(el);
        this.heapSize += 1;
        const index = this.heapSize - 1;
        this.bubbleUp(index);
    }
    
    // restore heap invariant on new element add
    bubbleUp(index) {
        
        const isRoot = index === 0;
        if (isRoot) return;

        const pIndex = Math.floor((index - 1) / 2);
        
        const parent = this.heap[pIndex];
        const currEl = this.heap[index];

        if (this.compare(currEl, parent)) {
            this.swapElements(pIndex, index)
            this.bubbleUp(pIndex);
        }
    }
    
    // poll highest priority element from heap in O(log n)
    pollElement() {

        if (this.heapSize === 0) return;

        const lastLeafIndex = this.heapSize - 1;
        this.swapElements(0, lastLeafIndex)
        const polled = this.heap.pop();
        this.heapSize -= 1;

        if(this.heapSize > 1) this.bubbleDown(0);
        return polled;
    }
    
    // restore heap invariant on polling element
    bubbleDown(index) {
        
        // get index of the element to replace (among parent, left child, right child)
        const indexToBubbleDownTo = this.getIndexToBubbleDownTo(index);

        // if the parent is the element to replace, return because no bubble-down needed
        if (indexToBubbleDownTo === index) return;
        
        // swap parent with left child or right child, whichever is the index to bubble down to
        this.swapElements(index, indexToBubbleDownTo);

        // after bubbling down a level, try to bubble down further
        this.bubbleDown(indexToBubbleDownTo);
    }
    
    getIndexToBubbleDownTo(index) {
        const [leftChildIndex, rightChildIndex] = [2 * index + 1, 2 * index + 2];
        const hasLeftChild = leftChildIndex < this.heapSize;
        const hasRightChild = rightChildIndex < this.heapSize;

        // start with assuming that the parent is has the minimum value
        let indexToBubbleDownTo = index;
        
        // if there exists a right child with value smaller than the parent, reassign indexOdSmallest to rightChildIndex
        if (hasRightChild && this.compare(this.heap[rightChildIndex], this.heap[indexToBubbleDownTo])) {
            indexToBubbleDownTo = rightChildIndex;
        }
        
        // if there exists a left child with value even smaller than value at indexOfSmallet, reassign indexToBubbleDownTo to leftChildIndex
        if (hasLeftChild && this.compare(this.heap[leftChildIndex] , this.heap[indexToBubbleDownTo])) {
            indexToBubbleDownTo = leftChildIndex
        }
        
        return indexToBubbleDownTo;
    }

    swapElements(indexOne, indexTwo) {
        const valueOne = this.heap[indexOne];
        const valueTwo = this.heap[indexTwo];
        this.heap[indexOne] = valueTwo;
        this.heap[indexTwo] = valueOne;
    }

    peek() {
        return this.heap[0];
    }
}

// test min heap (default)
const h = new PQ([{key: 7}, {key: 5}, {key: 8}, {key: 1}, {key: 2}, {key: 6}, {key: 7}, {key: 3}], (el1, el2) => el1.key > el2.key);

console.log(h.heap)

h.pollElement()
console.log(h.heap)

h.pollElement()
console.log(h.heap)

h.pollElement()
console.log(h.heap)

h.pollElement()
console.log(h.heap)

h.pollElement()
console.log(h.heap)

h.pollElement()
console.log(h.heap)

h.pollElement()
console.log(h.heap)

h.pollElement()
console.log(h.heap)

h.pollElement()
console.log(h.heap)

// test max heap (custom comparator)
const h1 = new PQ([{key: 7}, {key: 5}, {key: 8}, {key: 1}, {key: 2}, {key: 6}, {key: 7}, {key: 3}]);

console.log(h1.heap)

h1.pollElement()
console.log(h1.heap)

h1.pollElement()
console.log(h1.heap)

h1.pollElement()
console.log(h1.heap)

h1.pollElement()
console.log(h1.heap)

h1.pollElement()
console.log(h1.heap)

h1.pollElement()
console.log(h1.heap)

h1.pollElement()
console.log(h1.heap)

h1.pollElement()
console.log(h1.heap)

h1.pollElement()
console.log(h1.heap)


