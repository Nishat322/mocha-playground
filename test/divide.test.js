/* eslint-disable indent */
'use strict';
const divide = require('../functions/divide');
const chai = require('chai');
const expect = chai.expect;
// const expect = require('chai').expect; (combine the two statements)
/*
Example of how a test will look like : 
    describe('A SUITE DESCRIPTION', () => {
    // define test specs here
    });
*/
/*
All tests cases have a similar pattern
    - Set up data needed
    - Invoke the function needed to be tested
    - Assert that when the function is called under various circumstances the expected results in all situations occur
*/ 
/* Mocha does not have its own assertion library, any assertion library can be used and in this case we will use the Chai Library*/

describe('Divide function', () => {
    it('should divide positive integers correctly', () => {
      const a = 8;
      const b = 4;
      const expectedAnswer = 2;
      const actualAnswer = divide(a,b);
      expect(actualAnswer).to.equal(expectedAnswer);
    });

    /* Condensed Format
        it('should divide positive integers correctly', () => {
            expect(divide(8, 4)).to.equal(2);
        });
    */
  
    it('should throw an error when divide by zero', () => {
      const a = 8; 
      const b = 0;
    
      const fn = () => {divide(a,b);};
      //we use a callback fxn because the normal handling of this function causes an error to throw which disturbs the normal excution of the function. 
      //We want the error to throw, but avoid the normal handling of the function so we put it in a callback fxn.
    /* Condensed Format
        it('should throw an error when divide by zero', () => {
            expect(() => { divide(8, 0) }).to.throw();
        });
    */
      expect(fn).to.throw();
    });
});