class Developers {
  constructor() {
    this.developers = [];
  }
  getAllDeveloper() {
    return this.developers;
  }
  getSingleDeveloper(id) {
    const inNum = parseInt(id);
    return this.developers.find((developer) => developer.id === inNum);
  }
  createDeveloper(developer) {
    developer.id = this.developers.length + 1;
    this.developers.push(developer);
    return developer;
  }
  updateDeveloper(developer, id) {
    const isNum = parseInt(id);
    const index = this.developers.findIndex(
      (developer) => developer.id === isNum,
    );

    this.developers[index].name = developer.name || this.developers[index].name;
    this.developers[index].email =
      developer.email || this.developers[index].email;
    this.developers[index].phone =
      developer.phone || this.developers[index].phone;
    this.developers[index].skills =
      developer.skills || this.developers[index].skills;

    return this.developers[index];
  }
  deleteDeveloper(id) {
    const isNum = parseInt(id);
    const index = this.developers.find((developer) => developer.id === isNum);
    this.developers = this.developers.filter(
      (developer) => developer.id !== isNum,
    );
    return index;
  }
}

module.exports = new Developers();