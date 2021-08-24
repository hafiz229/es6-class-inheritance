class TeamMember {
  name;
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}

class Support extends TeamMember {
  groupSupportTime;
  constructor(name, address, time) {
    super(name, address);
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

class StudentCare extends TeamMember {
  buildARouting(student) {
    console.log(this.name, "Build a routine for", student);
  }
}

class NeptuneDev extends TeamMember {
  codeEditor;
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApps(version) {
    console.log(this.name, "release app version ", version);
  }
}

const aamir = new Support("Aamir Khan", "BD", 12);
const salman = new Support("Solaiman Khan", "Dubai", 10);

const alia = new StudentCare("Alia Bhatt", "Mumbai");
// console.log(alia);
// console.log(alia);
const neptune = new NeptuneDev("Ash", "Mumbai", "Android studio");
// console.log(neptune);
neptune.releaseApps("1.4.5");
