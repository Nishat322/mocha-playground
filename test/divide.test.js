/* eslint-disable indent */
'use strict';
const divide = require('../index');
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
      // spec code here
    });
  
    it('should throw an error when divide by zero', () => {
      // spec code here
    });
});