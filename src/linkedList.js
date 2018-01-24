class LinkedList { 
	constructor() {
		this.count = 0;
		this._head = null;
		this._tail = null;
	}

	getFirst() {
		return null;
	}

	getLast() {
		return null;
	}

	addFirst(node) {
		this._head = node;
		this.count ++;
	}

	//addLast(node)
	//removeFirst()
	//removeLast()
}

module.exports = LinkedList;