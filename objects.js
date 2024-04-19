// Write a function that returns a new array containing the names of all people who are 18 years old or olser

const people = [
    {name:'Alice', age:17},
    {name:'Eunice', age:22},
    {name:'Charlie', age:14},
    {name:'Max', age:19}
]

function manyPeople(people){
    let result = []
    for(let i = 0; i <people.length; i++){
        if(people[i].age >=18){
            result.push(people[i].name)
        }
    }
    return result
}

console.log(manyPeople(people));

// Write a function that should return an object that groups the products by their categories, with the category names as keys and the array of 
// products as values.
const products = [
    {name:'laptop', price:1200, category:'Electronics'},
    {name:'shirt', price:25, category:'Clothing'},
    {name:'headphones', price:80, category:'Electronics'},
    {name:'shoes', price:60, category:'Clothing'}
]
function strOfObjects(){
    var ObjectConstructor = Object.groupBy( products, item =>{
        return item.category
    })
    console.log(ObjectConstructor);
}
strOfObjects()



// Write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85
function averageScore(marks){
    const averageScore= (marks)=>{
        return marks.reduce((sum,marks)=>sum+marks,0)/marks.length;
    }
    const result= students.filter(students=>
        averageScore(students.marks)>=85)

        const names = result.map(students=>students.name);
        console.log(names);
};


const students =[
    {name:"John", marks:[90,80,85]},
    {name:"Jane", marks:[95,92,88]},
    {name:"Jim", marks:[70,80,75]},
    {name:"Jill", marks:[85,90,84]},
]
averageScore(students)


// Write a function that takes the car object and adds a new method to the object called age. The age method should return
// the current age of the car based on the current year and the cars years property.
const car = {
    make:'Ford',
    model:'Ranger',
    year:2023,
    displayInfo:function(){
      console.log(`make:${this.make}, model:${this.model}, year:${this.year}`);
    }

};


car.age = 14;
console.log({car});
const car = {
    make: 'Ford',
    model: 'Ranger',
    year: 2023,
    displayInfo: function() {
       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    },
  };

  function addAgeMethod (car) {
    let currentYear = new Date().getFullYear();
    car.age = (currentYear - car.year);
    return car
   }
    
    console.log(addAgeMethod(car));
    car.displayInfo();