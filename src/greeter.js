/**
 * @file greeter.js
 * @description
 * A small JavaScript utility used to demonstrate automatic documentation
 * generation with JSDoc for the FGCT6012 portfolio website assignment.
 *
 * @module Greeter
 */

/**
 * Builds a polite greeting for a supplied name.
 *
 * This function demonstrates how parameters, optional settings, return values,
 * and examples can be documented using JSDoc comments.
 *
 * @function greet
 * @memberof module:Greeter
 * @param {string} name - The name of the person to greet.
 * @param {Object} [opts] - Optional greeting settings.
 * @param {boolean} [opts.shout=false] - If true, the greeting is returned in uppercase.
 * @returns {string} A formatted greeting message.
 *
 * @example
 * greet("Alex");
 * // Returns: "Hello, Alex."
 *
 * @example
 * greet("Alex", { shout: true });
 * // Returns: "HELLO, ALEX."
 */
export function greet(name, opts = {}) {
  const base = `Hello, ${name}.`;

  if (opts.shout) {
    return base.toUpperCase();
  }

  return base;
}

/**
 * Returns the current calendar year.
 *
 * This function is included as a second documented code example so that the
 * generated JSDoc page contains more than one method.
 *
 * @function currentYear
 * @memberof module:Greeter
 * @returns {number} The current full year.
 *
 * @example
 * currentYear();
 * // Returns: 2026
 */
export function currentYear() {
  return new Date().getFullYear();
}
