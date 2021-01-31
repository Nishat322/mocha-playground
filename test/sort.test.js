/* eslint-disable indent */
'use strict';
const sort = require('../index');
const expect = require('chai').expect;

describe ('Sort List', () => {
    it('Sorts List Ascending', () => {
        const arr = [8, 7 ,9];
        const expectedAnswer = [7, 8, 9];
        const actualAnswer = sort(arr);

        expect(actualAnswer).to.deep.equal(expectedAnswer);
    });
});
