export default class Logger {
  container
  constructor(container) {
    this.container = container;
  }

  getCurrentUTCDate() {
    return (new Date()).toUTCString()
  }

  error(error) {
    console.error(`[${this.container}] `, {
      error,
      date: this.getCurrentUTCDate(),
      pid: process.pid
    });
  }

  debug(data) {
    console.debug(`[${this.container}] `, {
      data,
      date: this.getCurrentUTCDate(),
      pid: process.pid
    });
  }

  warning(data) {
    console.warn(`[${this.container}] `, {
      warning: data,
      date: this.getCurrentUTCDate(),
      pid: process.pid
    });
  }

  info(data) {
    console.info(`[${this.container}] `, {
      info: data,
      date: this.getCurrentUTCDate(),
      pid: process.pid

    });
  }

  trace(data) {
    console.trace(`[${this.container}] `, {
      trace: data,
      date: this.getCurrentUTCDate(),
      pid: process.pid
    });
  }
}

export const LoggerLevel = {
  TRACE: "trace",
  DEBUG: "debug",
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
  FATAL: "fatal"
};