'use strict';

const ListNode = require('./listNode');

class DoublyLinkedList {
	constructor(...values) {
		this.count = 0;
		this._head = null;
		this._tail = null;

		for (const value of values) {
			this.addLast(value);
		}
	}

	[Symbol.iterator](){
		let currentNode;
		let head = this._head;
		return {
			next() {
				currentNode = (currentNode === undefined) ? head : currentNode.next;
				let done = !currentNode;
				return { currentNode, done };
			}
		}
	}

	getFirst() {
		return (this._head !== null) ? this._head : null;
	}

	getLast() {
		return (this._tail !== null) ? this._tail : null;
	}

	addFirst(value) {
		this.count++;
		const node = new ListNode(value);
		if (this.count === 1) this._tail = node;

		if (this._head !== null) {
			this._head.previous = node;
			node.next = this._head;
		}
		this._head = node;
		return this;
	}

	addLast(value) {
		this.count++;
		const node = new ListNode(value);
		if (this.count === 1) this._head = node;
		
		if (this._tail !== null) {
			this._tail.next = node;
			node.previous = this._tail;
		}
		this._tail = node;
		return this;
	}

	removeFirst() {
		if (this.count !== 0) this.count--;
		if (!(this._head && this._head.next))
			this._head = null;
		else if (this._head) {
			this._head = this._head.next;
			this._head.previous = null;
		}
		return this;
	}

	removeLast() {
		if (this.count !== 0) this.count--;
		if (this._tail) {
			this._tail = this._tail.previous;
			this._tail.next = null;
		}
		return this;
	}
}

module.exports = DoublyLinkedList;