export class Todo {
    // In this Todo class definition, we specify that each Todo instance will have three properties:
    id: number= 0;
  title: string = '';
  complete: boolean = false;

//   constructor definition as well
// We also provide constructor logic that lets us 
// specify property values during instantiation so we can easily create new Todo instances
  constructor(values: Object = {}) {
    Object.assign(this, values);
    this.id = 0;
  }
}
