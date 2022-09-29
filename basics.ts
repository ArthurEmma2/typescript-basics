
function add(n1:number, n2:number, showResult:boolean, phrase:string){
    let result = n1 + n2
    if(showResult){
        console.log(phrase + result)
      
    }else{
        return result
    }
    
}

let number1:number
number1= 8
const number2 = 2.8
const printResult = true
let resultPhrase: string
resultPhrase="result is: "


const result = add(number1, number2,printResult, resultPhrase)
                     