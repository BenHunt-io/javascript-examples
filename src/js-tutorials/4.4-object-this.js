let ben = {
    firstName: "Ben",
    lastName: "Hunt",
    eat: function() {
        console.log(this.firstName + " " + this.lastName + " is eating");
    }
}

ben.eat();