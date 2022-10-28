//Creating my own type
type Operation = 'multiply' | 'add' | 'divide'
type Result = number | string

const calculator = (a:number, b:number, op: Operation) => {

    if(op == 'multiply') return a * b

    if(op === 'add') return a + b

    if(op = 'divide'){
        if(b == 0) return "You can´t divide by 0"
        return a/b
    }
    
}
console.log(calculator(1, 3, 'add'))
