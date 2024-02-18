const {sum, subtrack, multiply} = require('../print-booking-history')


test('adds 2 and 3', ()=> {
    const rv = sum(2, 3)
    expect(rv).toBe(5);
});

test('subtracts 3 from 10 returns 7', ()=> {
    const rv = subtrack(10, 3)
    expect(rv).toBe(7)
})

test('multiplies 2 with 10', ()=> {
    const rv = multiply(2, 10)
    expect(rv).toBe(20)
})