import { convert   } from "./Converter";


test("if returns in kb",()=>{
    let num =10 
    expect(convert(num,"kb")).toBe(num*1024)
})
test("if returns in mb",()=>{
    let num =1 
    expect(convert(num,"mb")).toBe(num*1048576)
})

test("if returns in gb",()=>{
    let num =1 
    expect(convert(num,"gb")).toBe(num*1073741824)
})
test("if returns in tb",()=>{
    let num =1 
    expect(convert(num,"tb")).toBe(num*1099511627776)
})
