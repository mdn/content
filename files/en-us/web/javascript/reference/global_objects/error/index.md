---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
tags:
  - Class
  - JavaScript
  - Object
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Error
---
{{JSRef}}

`Error` objects are thrown when runtime errors occur. The `Error` object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.

## Description

Runtime errors result in new `Error` objects being created and thrown.

`Error` is a {{Glossary("serializable object")}}, so it can be cloned with {{domxref("structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker.postMessage()", "postMessage()")}}.

### Error types

Besides the generic `Error` constructor, there are other core error constructors in JavaScript. For client-side exceptions, see [Exception handling statements](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{JSxRef("EvalError")}}
  - : Creates an instance representing an error that occurs regarding the global function {{JSxRef("Global_Objects/eval", "eval()")}}.
- {{JSxRef("RangeError")}}
  - : Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.
- {{JSxRef("ReferenceError")}}
  - : Creates an instance representing an error that occurs when de-referencing an invalid reference.
- {{JSxRef("SyntaxError")}}
  - : Creates an instance representing a syntax error.
- {{JSxRef("TypeError")}}
  - : Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
- {{JSxRef("URIError")}}
  - : Creates an instance representing an error that occurs when {{JSxRef("encodeURI", "encodeURI()")}} or {{JSxRef("decodeURI", "decodeURI()")}} are passed invalid parameters.
- {{JSxRef("AggregateError")}}
  - : Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by {{JSxRef("Promise.any()")}}.
- {{JSxRef("InternalError")}} {{non-standard_inline}}
  - : Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".

## Constructor

- {{jsxref("Error/Error", "Error()")}}
  - : Creates a new `Error` object.

## Static methods

- `Error.captureStackTrace()` {{non-standard_inline}}
  - : A non-standard V8 function that creates the {{JSxRef("Error.prototype.stack", "stack")}} property on an Error instance.

- `Error.stackTraceLimit` {{non-standard_inline}}
  - : A non-standard V8 numerical property that limits how many stack frames to include in an error stacktrace.

- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : A non-standard V8 function that, if provided by usercode, is called by the V8 JavaScript engine for thrown exceptions, allowing the user to provide custom formatting for stacktraces.

## Instance properties

- {{jsxref("Error.prototype.message")}}
  - : Error message. For user-created `Error` objects, this is the string provided as the constructor's first argument.
- {{jsxref("Error.prototype.name")}}
  - : Error name. This is determined by the constructor function.
- {{jsxref("Error.prototype.cause")}}
  - : Error cause indicating the reason why the current error is thrown — usually another caught error. For user-created `Error` objects, this is the value provided as the `cause` property of the constructor's second argument.
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
  - : A non-standard Mozilla property for the path to the file that raised this error.
- {{jsxref("Error.prototype.lineNumber")}} {{non-standard_inline}}
  - : A non-standard Mozilla property for the line number in the file that raised this error.
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
  - : A non-standard Mozilla property for the column number in the line that raised this error.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : A non-standard property for a stack trace.

## Instance methods

- {{jsxref("Error.prototype.toString()")}}
  - : Returns a string representing the specified object. Overrides the {{jsxref("Object.prototype.toString()")}} method.

## Examples

### Throwing a generic error

Usually you create an `Error` object with the intention of raising it using the {{JSxRef("Statements/throw", "throw")}} keyword.
You can handle the error using the {{JSxRef("Statements/try...catch", "try...catch")}} construct:

```js
try {
  throw new Error('Whoops!');
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Handling a specific error type

You can choose to handle only specific error types by testing the error type with the error's {{JSxRef("Object.prototype.constructor", "constructor")}} property or, if you're writing for modern JavaScript engines, {{JSxRef("Operators/instanceof", "instanceof")}} keyword:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(`${e.name}: ${e.message}`);
  } else if (e instanceof RangeError) {
    console.error(`${e.name}: ${e.message}`);
  }
  // etc.

  else {
    // If none of our cases matched leave the Error unhandled
    throw e;
  }
}
```

### Differentiate between similar errors

Sometimes a block of code can fail for reasons that require different handling, but which throw very similar errors (i.e. with the same type and message).

If you don't have control over the original errors that are thrown, one option is to catch them and throw new `Error` objects that have more specific messages.
The original error should be passed to the new `Error` in the constructor `option` parameter (`cause` property), as this ensures that the original error and stack trace are available to higher level try/catch blocks.

The example below shows this for two methods that would otherwise fail with similar errors (`doFailSomeWay()` and `doFailAnotherWay()`):

```js
function doWork() {
  try {
    doFailSomeWay();
  } catch (err) {
    throw new Error('Failed in some way', { cause: err });
  }
  try {
    doFailAnotherWay();
  } catch (err) {
    throw new Error('Failed in another way', { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch(err.message) {
    case 'Failed in some way':
      handleFailSomeWay(err.cause);
      break;
    case 'Failed in another way':
      handleFailAnotherWay(err.cause);
      break;
  }
}
```

> **Note:** If you are making a library, you should prefer to use error cause to discriminate between different errors emitted — rather than asking your consumers to parse the error message. See the [error cause page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) for an example.

[Custom error types](#custom_error_types) can also use the [`cause`](#error.prototype.cause) property, provided the subclasses' constructor passes the `options` parameter when calling `super()`:

```js
class MyError extends Error {
  constructor(/* some arguments */) {
    // Needs to pass both `message` and `options` to install the "cause" property.
    super(message, options);
  }
}
```

### Custom error types

You might want to define your own error types deriving from `Error` to be able to `throw new MyError()` and use `instanceof MyError` to check the kind of error in the exception handler. This results in cleaner and more consistent error handling code.

See ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) on StackOverflow for an in-depth discussion.

#### ES6 CustomError class

> **Warning:** Versions of Babel prior to 7 can handle `CustomError` class methods, but only when they are declared with [Object.defineProperty()](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). Otherwise, old versions of Babel and other transpilers will not correctly handle the following code without [additional configuration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend).

> **Note:** Some browsers include the `CustomError` constructor in the stack trace when using ES2015 classes.

```js
class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = 'CustomError';
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError('baz', 'bazMessage');
} catch (e) {
  console.error(e.name);    // CustomError
  console.error(e.foo);     // baz
  console.error(e.message); // bazMessage
  console.error(e.stack);   // stacktrace
}
```

#### ES5 CustomError object

> **Warning:** All browsers include the `CustomError` constructor in the stack trace when using a prototypal declaration.

```js
function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.foo = foo;
  Object.setPrototypeOf(instance, CustomError.prototype);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

Object.setPrototypeOf(CustomError.prototype, Error.prototype);

Object.setPrototypeOf(CustomError, Error);

CustomError.prototype.name = 'CustomError';

try {
  throw new CustomError('baz', 'bazMessage');
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A polyfill of `Error`](https://github.com/zloirock/core-js#ecmascript-error) with modern behavior like support `cause` is available in [`core-js`](https://github.com/zloirock/core-js)
- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}
- The [V8 documentation](https://v8.dev/docs/stack-trace-api) for `Error.captureStackTrace()`, `Error.stackTraceLimit`, and `Error.prepareStackTrace()`.
