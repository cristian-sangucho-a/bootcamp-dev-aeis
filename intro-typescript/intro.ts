let variable:string = "txt"
console.log(variable)

let variable2:number = 13212
let array: number[] = [1,2,3,4,5,6]

type Person = {
    name: string
    age: number
    isAlive: boolean
    person?: Person
}

let objeto: Person = {
    name: "xxx",
    age: 111,
    isAlive: true,
}

objeto.person = objeto
