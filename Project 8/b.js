function speak(){
    console.log(this.name);
}
const person={
    name:"sandy",
    speak
}
// speak(); // here it is window object
person.speak();  //person here is invoke object or call speak