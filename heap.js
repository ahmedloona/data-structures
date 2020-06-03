class minHeap {
    constructor(values) {
        this.values = values;
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
        
        const pIndex = Math.floor((index - 1) / 2);
        const isRoot = pIndex === index;
        if (isRoot) return;
        
        const parent = this.heap[pIndex];
        const currEl = this.heap[index];
        
        if (parent > currEl) {
            this.swapElements(pIndex, index)
            this.bubbleUp(pIndex);
        }
    }
    
    // poll highest priority (min) element from heap in O(log n)
    pollElement() {

        if (this.heapSize === 0) return;

        const lastLeafIndex = this.heapSize - 1;
        this.swapElements(0, lastLeafIndex)
        const polled = this.heap.pop();
        this.heapSize -= 1;

        if(this.size > 1) this.bubbleDown(0);
        return polled;
    }
    
    // restore heap invariant on polling element
    bubbleDown(index) {
        
        // get index of the smallest element (among parent, left child, right child)
        const indexOfSmallestNode = this.getSmallestElementsIndex(index);

        // if the parent is the smallest, return because no bubble-down needed
        if (indexOfSmallestNode === index) return;
        
        // swap parent with left child or right child, whichever has the smaller value
        this.swapElements(index, indexOfSmallestNode);

        // after swapping try to bubble down further
        this.bubbleDown(indexOfSmallestNode);
    }
    
    getSmallestElementsIndex(index) {
        const [leftChildIndex, rightChildIndex] = [2 * index + 1, 2 * index + 2];
        const hasLeftChild = leftChildIndex < this.heapSize;
        const hasRightChild = rightChildIndex < this.heapSize;

        // start with assuming that the parent is has the minimum value
        let indexOfSmallest = index;
        
        // if there exists a right child with value smaller than the parent, reassign indexOdSmallest to rightChildIndex
        if (hasRightChild && this.heap[rightChildIndex] < this.heap[indexOfSmallest]) {
            indexOfSmallest = rightChildIndex;
        }
        
        // if there exists a left child with value even smaller than value at indexOfSmallet, reassign indexOfSmallest to leftChildIndex
        if (hasLeftChild && this.heap[leftChildIndex] < this.heap[indexOfSmallest]) {
            indexOfSmallest = leftChildIndex
        }
        
        return indexOfSmallest;
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

const h = new minHeap([7, 5, 8, 1, 2, 6, 7, 3]);

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



