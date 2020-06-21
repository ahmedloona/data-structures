class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.dummyHead = new ListNode(undefined);
        this.tail = this.dummyHead;
        this.length = 0;
    }

    // INSERTION
    // return head
    insertAtHead(value) {
        const newNode = new ListNode(value);
        newNode.next = this.dummyHead.next;
        this.dummyHead.next = newNode;

        if (this.size() === 0) { 
            this.tail = newNode;
        }

        this.length += 1;
        return this.dummyHead.next;
    }

    // return head
    insertAtTail(value) {
        const newNode = new ListNode(value);
        newNode.next = null;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length += 1;
        return this.dummyHead.next;
    }

    // return boolean
    insertAtIndex(index, value) {

        // Allow inserting to max index + 1
        if (this.isIndexInvalid(index) && index !== this.size()) return false;
            
        if (index === 0) {
            this.insertAtHead(value);
            return true;
        }

        if (index === this.size()) {
            this.insertAtTail(value);
            return true;
        }

        const prev = this.getPointerToPrev(index);

        const newNode = new ListNode(value);
        newNode.next = prev.next;
        prev.next = newNode;

        this.length += 1;
        return true;
    }

    // DELETION
    // return head
    deleteHead() {
        if (this.size() === 0) {
            return null;
        }

        this.dummyHead.next = this.dummyHead.next.next;
        this.length -= 1;

        if (this.size() === 1) {
            this.tail = this.dummyHead;
        }
        return this.dummyHead.next
    }

    // return head
    deleteTail() {
        if (this.size() <= 1) {
            return this.deleteHead();
        }

        const tailIndex = this.size() - 1;
        const prev = this.getPointerToPrev(tailIndex);

        this.tail = prev;
        prev.next = prev.next.next;

        this.length -= 1;

        return this.dummyHead.next;
    }

    // return deleted node || -1
    deleteAtIndex(index) {

        if (this.isIndexInvalid(index)) return -1;

        if (index === 0) {
            const deletedNode = this.dummyHead.next;
            this.deleteHead();
            return deletedNode;
        }

        if (index === this.size() - 1) {
            const deletedNode = this.tail;
            this.deleteTail();
            return deletedNode;
        }

        const prev = this.getPointerToPrev(index);
        const deleted = prev.next;
        prev.next = prev.next.next;

        this.length -= 1;

        return deleted;

    }

    // ACCESS
    // return node || - 1
    get(index) {

        if (this.isIndexInvalid(index)) return -1;

        const prev = this.getPointerToPrev(index);
        const node = prev.next;
        return node;
    }

    // return boolean
    set(index, value) {
 
        if (this.isIndexInvalid(index)) return false;

        const prev = this.getPointerToPrev(index);
        const node = prev.next;
        node.value = value;
        return true;
    }

    // SEARCH
    // return boolean
    contains(value) {
        let currNode = this.dummyHead.next;
        while (currNode) {
            if (currNode.value === value) return true;
            currNode = currNode.next;
        }
        return false;
    }

    // META
    // return number
    size() {
        return this.length;
    }

    getPointerToPrev(index) {
        let currIndex = -1;
        let pointer = this.dummyHead;
        while (currIndex !== index - 1) {
            pointer = pointer.next;
            currIndex += 1;
        }

        return pointer;
    }

    isIndexInvalid(index) {
        return index < 0 || index > this.size() - 1;
    }

    printValues() {
        let currNode = this.dummyHead.next;
        while (currNode) {
            console.log(currNode.value)
            currNode = currNode.next;
        };
        console.log(currNode);
        console.log('---------------')
    }
}

const ll = new LinkedList();