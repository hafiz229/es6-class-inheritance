class Support {
  name;
  designation = "support Web Dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

const aamir = new Support("Aamir Khan", "BD");
const salman = new Support("Solaiman Khan", "Dubai");
// console.log(aamir);
// console.log(salman);
aamir.startSession();
salman.startSession();
