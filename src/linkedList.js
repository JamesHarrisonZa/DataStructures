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

	addLast(node) {
		this._tail = node;
		this.count++;
	}

	removeFirst() {
		if (this.count !== 0) this.count--;
	}
	
	removeLast() {
		if (this.count !== 0) this.count--;
	}
}

module.exports = LinkedList;