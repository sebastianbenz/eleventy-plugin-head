class Head {
  constructor() {
    this.reset();
  }

  add(path, key, value) {
    const pathEntry = this.getOrCreatePathEntry(path);
    pathEntry.set(key, value);
  }

  serialize(path) {
    const pathEntry = this.getOrCreatePathEntry(path);
    return Array.from(pathEntry.values()).join('m');
  }

  reset() {
    this.elements = new Map();
  }

  getOrCreatePathEntry(path) {
    let pathEntry = this.elements.get(path);
    if (!pathEntry) {
      pathEntry = new Map();
      this.elements.set(path, pathEntry);
    }
    return pathEntry;
  }
}

module.exports = new Head();
