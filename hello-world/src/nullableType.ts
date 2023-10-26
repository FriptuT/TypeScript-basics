

// function greet(name: string | null | undefined) {
//     if (name) {
//         console.log(name.toUpperCase());
//     }
//     else
//     {
//         console.log('Null or undefined!');
//     }

// }

// greet(undefined); 

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}


// if (customer !== null && customer !== undefined) {
//     console.log(customer.birthday);
// }
// else
// {
//     console.log("null | undefined");
// }

let customer = getCustomer(1); 
// OPTIONAL PROPERTY ACCESS OPERATOR
console.log(customer?.birthday.getFullYear());