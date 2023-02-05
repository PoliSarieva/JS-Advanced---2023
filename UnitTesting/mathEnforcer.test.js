const mathEnforcer = require('./mathEnforcer');
const { assert } = require('chai');
//const { describe } = require('mocha');

describe('mathEnforcer function test', ()=> {
    describe('addFive function test',()=>{
        //incorect input
        it('Return undefined if parametar is a string',()=>{
            assert.equal(mathEnforcer.addFive('hi'), undefined);
        });

        it('Return undefined if parametar is a object',()=>{
            assert.equal(mathEnforcer.addFive({}), undefined);
        });

        it('Return undefined if parametar is a array',()=>{
            assert.equal(mathEnforcer.addFive([]), undefined);
        });

        it('Return undefined if parametar is null',()=>{
            assert.equal(mathEnforcer.addFive(null), undefined);
        });

        it('Return undefined if parametar is a undefined',()=>{
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });

        //correct input
        it('Return number plus five if input positive number',()=>{
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('Return number plus five if input is negative number',()=>{
            assert.equal(mathEnforcer.addFive(-5), 0);
        });

        it('Return number plus five if input decimal number',()=>{
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
        });
    });

    describe('subtractTen function test',()=>{
        //incorect input
        it('Return undefined if parametar is a string',()=>{
            assert.equal(mathEnforcer.subtractTen('hi'), undefined);
        });

        it('Return undefined if parametar is a array',()=>{
            assert.equal(mathEnforcer.subtractTen ([]), undefined);
        });

        it('Return undefined if parametar is a object',()=>{
            assert.equal(mathEnforcer.subtractTen ({}), undefined);
        });

        it('Return undefined if parametar is null',()=>{
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        });

        it('Return undefined if parametar is a undefined',()=>{
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });

        //correct input
        it('Return number minus ten if input positive number',()=>{
            assert.equal(mathEnforcer.subtractTen(15), 5);
        });

        it('Return number minus ten if input negative number',()=>{
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });

        it('Return number minus ten if input decimal number',()=>{
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
        });
    });
    
    describe('sum function test',()=>{
        //incorect input
        it('Return undefined if first parametar is a string',()=>{
            assert.equal(mathEnforcer.sum('hi', 5), undefined);
        });

        it('Return undefined if second parametar is a string',()=>{
            assert.equal(mathEnforcer.sum(5, 'hi'), undefined);
        });


        //correct input
        it('Return sum of num1 and num2',()=>{
            assert.equal(mathEnforcer.sum(15, 5), 20);
        });

        it('Return sum of num1 and num2, if they are is negative',()=>{
            assert.equal(mathEnforcer.sum(-10, -5),-15);
        });

        it('Return sum of num1 and num2, if they are decimal',()=>{
            assert.equal(mathEnforcer.sum(2.5, 1.5),4);
        });
    });

});