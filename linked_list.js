class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
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
    console.log(linkedList);
    return linkedList;
}

toLinkedList([5, 4, 8, 9, 2]);
