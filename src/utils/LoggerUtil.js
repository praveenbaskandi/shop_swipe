class Logger {
  devMode = __DEV__;

  log(...args) {
    if (this.devMode) {
      console.log(...args);
    }
  }

  warn(...args) {
    if (this.devMode) {
      console.warn(...args);
    }
  }
}

export default new Logger();
