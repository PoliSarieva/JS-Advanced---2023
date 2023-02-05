const lookupChar = require('./charLookup');
const { assert } = require('chai');

describe('lookupChar function test', ()=>{
    it('Return char at index', ()=>{
        assert(lookupChar('text', 1)==='e');
    });

    it('Return char at index', ()=>{
        assert(lookupChar('t', 0)==='t');
    });

    it('Return index over the string length', ()=>{
        assert(lookupChar('text', 10)==='Incorrect index');
    });

    it('Return if index is negative', ()=>{
        assert(lookupChar('text', -5)==='Incorrect index');
    });

    it('Return undefined if first parametar is not a string', ()=>{
        assert(lookupChar(50, 0)===undefined);
    });

    it('Return undefined if second parametar is not a number', ()=>{
        assert(lookupChar('text', 'df')===undefined);
    });

    it('Return undefined if second parametar is a decimal', ()=>{
        assert(lookupChar('text', 5.5)===undefined);
    });

    it('Return undefined if wrong parameters', ()=>{
        assert(lookupChar(100, 'df')===undefined);
    });
});