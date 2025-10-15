/**
 * A tiny greeting utility to demonstrate JSDoc.
 * @module Greeter
 */

/**
 * Build a polite greeting.
 * @param {string} name - The name to greet.
 * @param {Object} [opts] - Optional settings.
 * @param {boolean} [opts.shout=false] - Whether to shout the greeting.
 * @returns {string} The formatted greeting.
 * @example
 * greet('Alex') // => "Hello, Alex."
 * greet('Alex', { shout: true }) // => "HELLO, ALEX!"
 */
export function greet(name, opts = {}) {
  const base = `Hello, ${name}.`;
  if (opts.shout) return base.toUpperCase();
  return base;
}

/**
 * Return the current year as a number.
 * @returns {number}
 */
export function currentYear() {
  return new Date().getFullYear();
}
