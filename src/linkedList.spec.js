const LinkedList = require('./linkedList');
const assert = require('assert');

describe('A LinkedList,', () => {
	describe('with no items,', () => { 
		const linkedList = new LinkedList();
		
		describe('when calling count(),', () => {
			let actual;
			const expected = 0;
			before(() => {
				actual = linkedList.count;
			});
			it('should have count of zero', () => assert.equal(actual, expected));
		});

		describe('when calling getFirst(),', () => {
			let actual;
			const expected = null;
			before(() => {
				actual = linkedList.getFirst();
			});
			it('should return null', () => assert.equal(actual, expected));
		});

		describe('when calling getLast(),', () => {
			let actual;
			const expected = null;
			before(() => {
				actual = linkedList.getLast();
			});
			it('should return null', () => assert.equal(actual, expected));
		});
	});
});