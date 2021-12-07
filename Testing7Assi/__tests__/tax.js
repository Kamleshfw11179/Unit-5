const {taxCal} = require("../tax_cal")
const {toBeNumber,toBeNil,toBeEmpty} = require("jest-extended")
expect.extend({ toBeNumber,toBeNil,toBeEmpty})

test("if num is greater than zero",()=>{
    let num = 1000
    expect(num).toBeGreaterThanOrEqual(0)
})

test("tax at or below 250000",()=>{
    const num = 250000
    expect(taxCal(num)).toBe(0)
})

test("tax above 250000",()=>{
    const num = 300000;
    expect(taxCal(num)).toBeGreaterThan(25000)
    expect(taxCal(num)).toBeLessThan(100000)
})
test("tax above 500000",()=>{
    const num = 600000;
    expect(taxCal(num)).toBeGreaterThan(100000)
    expect(taxCal(num)).toBeLessThan(300000)
})
test("tax above 1000000",()=>{
    const num = 1100000;
    expect(taxCal(num)).toBeGreaterThan(300000)
})

test("check data",()=>{
    const num = 10
    expect(num).toBeNumber()
})
test("check data",()=>{
    const num = 10
    expect(num).toBeNumber()
})

test("check null",()=>{
    const num = 10;
    expect(num).not.toBeNil()
})

test("check if Empty",()=>{
    const num = 10
    expect(num).not.toBeEmpty()
})