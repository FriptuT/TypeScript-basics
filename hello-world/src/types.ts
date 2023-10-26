type Employee = {
    readonly id: number,
    name: string,
    hired: (date: Date) => void
}

let employee : Employee =   {
    id :1 ,
    name: "Teodor",
    hired: (date: Date) => {
        console.log(date);
    }
}

let date = new Date();
employee.hired(date);