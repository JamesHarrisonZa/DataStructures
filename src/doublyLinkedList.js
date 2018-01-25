class DoublyLinkedList {
	constructor() {
		this.count = 0;
		this._head = null;
		this._tail = null;
	}

	getFirst() {
		return (this._head !== null) ? this._head : null;
	}

	getLast() {
		return (this._tail !== null) ? this._tail : null;
	}

	addFirst(node) {
		this.count++;
		if (this.count === 1) this._tail = node;

		if (this._head !== null) {
			this._head.previous = node;
			node.next = this._head;
		}
		this._head = node;
	}

	addLast(node) {
		this.count++;
		if (this.count === 1) this._head = node;
		
		this._tail = node;
	}

	removeFirst() {
		if (this.count !== 0) this.count--;
	}

	removeLast() {
		if (this.count !== 0) this.count--;
	}
}

module.exports = DoublyLinkedList;