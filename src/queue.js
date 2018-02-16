'use strict';

const DoublyLinkedList = require('./doublyLinkedList');

class Queue extends DoublyLinkedList {
	constructor() {
		super();
	}

	enqueue(value) {
		return this.addLast(value);
	}
}

module.exports = Queue;