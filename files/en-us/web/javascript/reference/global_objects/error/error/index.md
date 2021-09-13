---
title: Error() constructor
slug: Web/JavaScript/Reference/Global_Objects/Error/Error
tags:
  - Constructor
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Error.Error
---
{{JSRef}}

The **`Error`** constructor creates an error object.

## Syntax

```js
new Error()
new Error(message)
new Error(message, options)
new Error(message, options, fileName)
new Error(message, options, fileName, lineNumber)
```

### Parameters

- `message` {{Optional_Inline}}
  - : A human-readable description of the error.
- `options` {{Optional_Inline}}
  - : An object that has the following properties:

    - `cause` {{Optional_Inline}}
      - : A property indicating the specific cause of the error.
          When catching and re-throwing an error with a more-specific or useful error message, this property should be used to pass the original error.
- `fileName` {{Optional_Inline}}{{Non-standard_inline}}
  - : The value for the `fileName` property on the created `Error` object.
    Defaults to the name of the file containing the code that
    called the `Error()` constructor.
- `lineNumber` {{Optional_Inline}}{{Non-standard_inline}}
  - : The value for the `lineNumber` property on the created `Error` object. 
     Defaults to the line number containing the `Error()` constructor invocation.

## Examples

### Function call or new construction

When `Error` is used like a function -- without {{JSxRef("Operators/new",  "new")}}, it will return an `Error` object.
Therefore, a mere call to `Error` will produce the same output that constructing an `Error` object via the `new` keyword would.

```js
// this...
const x = Error('I was created using a function call!')

// ...has the same functionality as this.
const y = new Error('I was constructed via the "new" keyword!')
```

### Rethrowing an error with a `cause`

It is sometimes useful to catch an error and re-throw it with a new message.
In this case you should pass the original error into the constructor for the new `Error`, as shown.

```js
  try {
    frameworkThatCanThrow();
  } catch (err) {
    throw new Error('New error message', { cause: err });
  }
```

For a more detailed example see [Error > Differentiate between similar errors](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}
- [Error causes](https://v8.dev/features/error-cause) (v8.dev/features)
