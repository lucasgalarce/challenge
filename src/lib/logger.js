/* eslint-disable no-console */
module.exports = () => ({
  info: console.log.bind(this, "[ API ] "),
  warn: console.warn.bind(this, "[ API ] "),
  error: console.error.bind(this, "[ API ] "),
});
