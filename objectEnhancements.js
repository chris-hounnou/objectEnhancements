function createInstructor(firstName, LastName){
    return {
        firstName, 
        lastName 
    }
}

let favoriteNumber = 42;
const instructor = {
    firstname: "colt",
    [favoriteNumber]: "That is my favorite!"
}

const instructor = {
    firstName: "Colt", 
    saayHi(){
        return "Hi!"
    },
    sayBye() {
        return this.firstName + "says bye!"
    }
}

const d = createAniimal ("dog", "bark", "Wooof!")
d.bark()
const s = createAnimal ("sheep", "bleet", "BAAAaaa")
s.bleet()
function createAnimal (species, verb, noise)
return {
    species, 
    [verb](){
        return noise;
    }
}