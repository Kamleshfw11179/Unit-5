const {timer} = require("../timer")
const {toBeString} = require("jest-extended")
expect.extend({toBeString})


test("if valid number",()=>{
    const num = 1000
    return(
        expect(num).toBeGreaterThanOrEqual(1000)
    )
})

test("if valid data" ,()=>{
    const num = 1000;
    return(
        expect(num).not.toBeNull()
    )
})
test ("if num not undefined",()=>{
    const num = 1000;
    return(
        expect(num).not.toBeUndefined()
    )
})
test("if valid function",()=>{
    return(
        expect(timer).toBeDefined()
    )
})
test("if answer is a string",()=>{
    expect(timer(10000)).toBeString()
})