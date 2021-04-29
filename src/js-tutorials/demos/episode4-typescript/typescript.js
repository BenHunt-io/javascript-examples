"use strict";
/**
 * Tooling:
 * - Code Completion, References to variables, Refactorings to reorganize code.
 */
/**
 * Catching Errors
 */
// TSC will thow an type error, but still generates the .js file.
// Can use --noEmitOnError to not generate .js file.
/**
 * Uncomment to see error
 */
// let add = (augend, addend) => augend + addend;
// add(1,2,3);
// Type annotations, they get erased at transpile time.
var sub = function (minued, subtrahend) { return minued - subtrahend; };
var subtractionResult = sub(5, 2);
// Type implicitly inferred, backticks removed for 'DownLeveling'.
// Can use --target <version> to transpile to a specific version of .js.
var msg = "Result of Subtraction " + subtractionResult;
/**
 * Strictness : can transpile with diff strictness options,
 * - noImplicitAny (everything needs a type defined,
 *       except ones implicitly inferred)
 * - strictNullChecks (will give us an error if something is logically null)
 * - --strict (all enabled)
 */
/**
 * Uncomment to see error
 */
// let val = null;
// val.hello();
