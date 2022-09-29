// const person: {
//    name: string
//    age: number
// }= {
    // const person:{
    //     name: string
    //     age: number
    //     hobbies: string[]
    //     role: [number, string]



    //  const ADMIN = 0
    //  const READ_ONLY = 1
    //  const AUTHOR = 2
     
    enum Role {ADMIN, READ_ONLY, AUTHOR }
    const person={
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'cooking'],
    role: Role.ADMIN
};


if(person.role === Role.ADMIN){
    console.log('THIS IS ADMIN')
}

// person.role.push('admin')
// person.role[0] = 10

let favouriteActivities: string[]
favouriteActivities= ['Sports']

console.log(person)



for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase()
    )
}