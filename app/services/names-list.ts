export class NamesList {
  names: Array<string>;
  constructor() {
    this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
  }
  get() {
    return this.names;
  }
  add(value) {
    this.names.push(value);
  }
}