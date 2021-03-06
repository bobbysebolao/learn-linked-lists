class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = () => {
            let count = 0;
            let currNode = this.head
            while (currNode) {
                currNode = currNode.next;
                count++;
            }
            return count;
        }
        this.clear = () => this.head = null;
        this.getFirst = () => this.head;
        this.getLast = () => {
            let lastNode = this.head
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
            return lastNode;
        }
        this.reverse = () => {
            let currNode = this.head;
            let prevNode = null;
            while (currNode) {
                if (!currNode.next) this.head = currNode;
                let tempNext = currNode.next;
                currNode.next = prevNode;
                prevNode = currNode;
                currNode = tempNext;
            }
            return this.head;
        }
    }
}

const toLinkedList = (arr) => {
    let listNodes = [];
    for (let i = 0; i < arr.length; i++) {
        const newNode = new ListNode(arr[i]);
        listNodes.push(newNode);
    }
    for (let i = 0; i < listNodes.length; i++) {
        if (listNodes[i+1]) listNodes[i].next = listNodes[i+1];
        else listNodes[i].next = null;
    }
    const linkedList =  new LinkedList(listNodes[0]);
    return linkedList;
}

toLinkedList([5, 4, 8, 9, 2]);
