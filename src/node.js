class Node {
	/**
	 * @param {any} value 
	 * @param {Node} next 
	 * @param {Node} previous
	 */
	constructor(value, next, previous) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
}

module.exports = Node;