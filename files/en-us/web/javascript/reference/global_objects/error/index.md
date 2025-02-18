---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
page-type: javascript-class
browser-compat: javascript.builtins.Error
---

{{JSRef}}

**`Error`** objects are thrown when runtime errors occur. The `Error` object can also be used as a base object for user-defined exceptions. See below for standard built-in error types.

## Description

Runtime errors result in new `Error` objects being created and thrown.

`Error` is a {{Glossary("serializable object")}}, so it can be cloned with {{DOMxRef("Window.structuredClone", "structuredClone()")}} or copied between [Workers](/en-US/docs/Web/API/Worker) using {{domxref("Worker/postMessage()", "postMessage()")}}.

### Error types

Besides the generic `Error` constructor, there are other core error constructors in JavaScript. For client-side exceptions, see [Exception handling statements](/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements).

- {{jsxref("EvalError")}}
  - : Creates an instance representing an error that occurs regarding the global function {{jsxref("Global_Objects/eval", "eval()")}}.
- {{jsxref("RangeError")}}
  - : Creates an instance representing an error that occurs when a numeric variable or parameter is outside its valid range.
- {{jsxref("ReferenceError")}}
  - : Creates an instance representing an error that occurs when de-referencing an invalid reference.
- {{jsxref("SyntaxError")}}
  - : Creates an instance representing a syntax error.
- {{jsxref("TypeError")}}
  - : Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.
- {{jsxref("URIError")}}
  - : Creates an instance representing an error that occurs when {{jsxref("encodeURI()")}} or {{jsxref("decodeURI()")}} are passed invalid parameters.
- {{jsxref("AggregateError")}}
  - : Creates an instance representing several errors wrapped in a single error when multiple errors need to be reported by an operation, for example by {{jsxref("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Creates an instance representing an error that occurs when an internal error in the JavaScript engine is thrown. E.g. "too much recursion".

## Constructor

- {{jsxref("Error/Error", "Error()")}}
  - : Creates a new `Error` object.

## Static properties

- {{jsxref("Error.stackTraceLimit")}} {{non-standard_inline}}
  - : A non-standard numerical property that limits how many stack frames to include in an error stack trace.

## Static methods

- {{jsxref("Error.captureStackTrace()")}} {{non-standard_inline}}
  - : A non-standard function that creates the {{jsxref("Error/stack", "stack")}} property on the provided object.
- `Error.prepareStackTrace()` {{non-standard_inline}} {{optional_inline}}
  - : A non-standard function that, if provided by user code, is called by the JavaScript engine for thrown exceptions, allowing the user to provide custom formatting for stack traces. See the [V8 Stack Trace API](https://v8.dev/docs/stack-trace-api#customizing-stack-traces) docs.

## Instance properties

These properties are defined on `Error.prototype` and shared by all `Error` instances.

- {{jsxref("Object/constructor", "Error.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Error` instances, the initial value is the {{jsxref("Error/Error", "Error")}} constructor.
- {{jsxref("Error.prototype.name")}}
  - : Represents the name for the type of error. For `Error.prototype.name`, the initial value is `"Error"`. Subclasses like {{jsxref("TypeError")}} and {{jsxref("SyntaxError")}} provide their own `name` properties.
- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
  - : A non-standard property for a stack trace.

These properties are own properties of each `Error` instance.

- {{jsxref("Error/cause", "cause")}}
  - : Error cause indicating the reason why the current error is thrown — usually another caught error. For user-created `Error` objects, this is the value provided as the `cause` property of the constructor's second argument.
- {{jsxref("Error/columnNumber", "columnNumber")}} {{non-standard_inline}}
  - : A non-standard Mozilla property for the column number in the line that raised this error.
- {{jsxref("Error/fileName", "fileName")}} {{non-standard_inline}}
  - : A non-standard Mozilla property for the path to the file that raised this error.
- {{jsxref("Error/lineNumber", "lineNumber")}} {{non-standard_inline}}
  - : A non-standard Mozilla property for the line number in the file that raised this error.
- {{jsxref("Error/message", "message")}}
  - : Error message. For user-created `Error` objects, this is the string provided as the constructor's first argument.

## Instance methods

- {{jsxref("Error.prototype.toString()")}}
  - : Returns a string representing the specified object. Overrides the {{jsxref("Object.prototype.toString()")}} method.

## Examples

### Throwing a generic error

Usually you create an `Error` object with the intention of raising it using the {{jsxref("Statements/throw", "throw")}} keyword.
You can handle the error using the {{jsxref("Statements/try...catch", "try...catch")}} construct:

```js
try {
  throw new Error("Whoops!");
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
```

### Handling a specific error type

You can choose to handle only specific error types by testing the error type with the {{jsxref("Operators/instanceof", "instanceof")}} keyword:

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
The original error should be passed to the new `Error` in the constructor's [`options`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#options) parameter as its `cause` property. This ensures that the original error and stack trace are available to higher-level try/catch blocks.

The example below shows this for two methods that would otherwise fail with similar errors (`doFailSomeWay()` and `doFailAnotherWay()`):

```js
function doWork() {
  try {
    doFailSomeWay();
  } catch (err) {
    throw new Error("Failed in some way", { cause: err });
  }
  try {
    doFailAnotherWay();
  } catch (err) {
    throw new Error("Failed in another way", { cause: err });
  }
}

try {
  doWork();
} catch (err) {
  switch (err.message) {
    case "Failed in some way":
      handleFailSomeWay(err.cause);
      break;
    case "Failed in another way":
      handleFailAnotherWay(err.cause);
      break;
  }
}
```

> [!NOTE]
> If you are making a library, you should prefer to use error cause to discriminate between different errors emitted — rather than asking your consumers to parse the error message. See the [error cause page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#providing_structured_data_as_the_error_cause) for an example.

[Custom error types](#custom_error_types) can also use the `cause` property, provided the subclasses' constructor passes the `options` parameter when calling `super()`. The `Error()` base class constructor will read `options.cause` and define the `cause` property on the new error instance.

```js
class MyError extends Error {
  constructor(message, options) {
    // Need to pass `options` as the second parameter to install the "cause" property.
    super(message, options);
  }
}

console.log(new MyError("test", { cause: new Error("cause") }).cause);
// Error: cause
```

### Custom error types

You might want to define your own error types deriving from `Error` to be able to `throw new MyError()` and use `instanceof MyError` to check the kind of error in the exception handler. This results in cleaner and more consistent error handling code.

See ["What's a good way to extend Error in JavaScript?"](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) on Stack Overflow for an in-depth discussion.

> [!WARNING]
> Builtin subclassing cannot be reliably transpiled to pre-ES6 code, because there's no way to construct the base class with a particular `new.target` without {{jsxref("Reflect.construct()")}}. You need [additional configuration](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) or manually call {{jsxref("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} at the end of the constructor; otherwise, the constructed instance will not be a `CustomError` instance. See [the TypeScript FAQ](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) for more information.

> [!NOTE]
> Some browsers include the `CustomError` constructor in the stack trace when using ES2015 classes.

```js
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (non-standard)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.error(e.name); // CustomError
  console.error(e.foo); // baz
  console.error(e.message); // bazMessage
  console.error(e.stack); // stack trace
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Error` with `cause` support in `core-js`](https://github.com/zloirock/core-js#ecmascript-error)
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
- [Stack trace API](https://v8.dev/docs/stack-trace-api) in the V8 docs
