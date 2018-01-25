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
		this._head = node;
		if (this.count === 0) this._tail = node;
		this.count++;
	}

	addLast(node) {
		this._tail = node;
		if (this.count === 0) this._head = node;
		this.count++;
	}

	removeFirst() {
		if (this.count !== 0) this.count--;
	}

	removeLast() {
		if (this.count !== 0) this.count--;
	}
}

module.exports = DoublyLinkedList;