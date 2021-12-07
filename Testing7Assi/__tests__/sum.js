const {getSum} = require("../sum")
const {toBeArray,toBeNumber,toBeEmpty} = require("jest-extended")
expect.extend({ toBeArray,toBeNumber,toBeEmpty })


test("check answer",()=>{
    expect(getSum(1,2,3)).toBe(1+2+3)
})

test("check_function",()=>{
    expect(getSum).toBeDefined()
})



test("check data",()=>{
    const arr = [1,2,3,4,5]
    expect(arr).toBeArray()
})

test("check not empty",()=>{
    const arr = [1];
    expect(arr).not.toBeEmpty();
})