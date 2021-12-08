const {checkPassword} = require("../password")
const {toBeEmpty,toBeNil} = require("jest-extended")
expect.extend({toBeEmpty,toBeNil})


expect.extend({
toBeAString(data){
    if(typeof(data)==="string"){
        return {
            message: () =>
              `expected ${data} is a valid string`,
            pass: true,
          }
    }else{
        return {
            message: () =>
              `expected ${data} is not a valid string`,
            pass: false,
          }   
    };
}
})
expect.extend({
    toCheckLeng(data){
        if(data.length>=6){
            return {
                message: () =>
                  `expected ${data} is a valid string`,
                pass: true,
              }
        }else{
            return {
                message: () =>
                  `expected ${data} is not a valid string length should be more than 6`,
                pass: false,
              }   
        };
    }
    })

expect.extend({
    toCheckNum(data){
        let s = data.match(/\d+/);
        if(s){
            return {
            message: () =>
              `expected ${data} is a valid string`,
            pass: true,
          }
}else{
        return {
            message: () =>
              `expected ${data} is not a valid string enter a number`,
            pass: false,
          }   
    };
    }
})
expect.extend({
    toCheckUpper(data){
        let s = false;
        for(var i=0;i<data.length;i++){
            if(data.charCodeAt(i)>64&&data.charCodeAt(i)<91){
                s = true;
            }
        }
        if(s){
            return {
            message: () =>
              `expected ${data} is a valid string`,
            pass: true,
          }
}else{
        return {
            message: () =>
              `expected ${data} is not a valid string donot have a uppercase`,
            pass: false,
          }   
    };
    }
})
expect.extend({
    toCheckLower(data){
        let s = false;
        for(var i=0;i<data.length;i++){
            if(data.charCodeAt(i)>96&&data.charCodeAt(i)<123){
                s = true;
            }
        }
        if(s){
            return {
            message: () =>
              `expected ${data} is a valid string`,
            pass: true,
          }
}else{
        return {
            message: () =>
              `expected ${data} is not a valid string donot have a lower case letter`,
            pass: false,
          }   
    };
    }
})

expect.extend({
  toCheckSpecial(data){
      let s = false;
      let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
      if(spChars.test(data)){
        s = true
      }
      if(s){
          return {
          message: () =>
            `expected ${data} is a valid string`,
          pass: true,
        }
}else{
      return {
          message: () =>
            `expected ${data} is not a valid string dosenot have a special charecter`,
          pass: false,
        }   
  };
  }
})
test("if it is a string",()=>{
const data = "abc";
expect(data).toBeAString();
})

test("if not empty",()=>{
    expect(checkPassword("a")).not.toBeNil()
})

test("check the length",()=>{
    expect(checkPassword("abcdefg")).toCheckLeng()
})

test("if num there",()=>{
    expect(checkPassword("abcd2")).toCheckNum()
})
test("if uppercase letter is there",()=>{
    expect(checkPassword("bAd2")).toCheckUpper()
})
test("if lowercase letter is there",()=>{
    expect(checkPassword("bAd2")).toCheckLower()
})
test("if special charecter is there",()=>{
  expect(checkPassword("bAd@2")).toCheckSpecial()
})