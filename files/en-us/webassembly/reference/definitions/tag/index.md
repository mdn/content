---
title: "tag: Wasm definition"
short-title: tag
slug: WebAssembly/Reference/Definitions/tag
page-type: webassembly-instruction
browser-compat: webassembly.definitions.tag
sidebar: webassemblysidebar
---

The **`tag`** [definition](/en-US/docs/WebAssembly/Reference/Definitions) declares an exception type that can be thrown in the module.

{{InteractiveExample("Wat Demo: tag", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Declare an exception tag $my_error with two i32 parameters
  (tag $my_error (param i32) (param i32))

  ;; Import console.log
  (import "env" "log" (func $log (param i32)))

  ;; Define $try_and_catch function that tries running the $might_throw function
  ;; and catches the $my_error exception if thrown, returning the exception's
  ;; arguments from the block
  (func $try_and_catch (param $value i32)
    (block $handler (result i32) (result i32)
      (try_table (catch $my_error $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )

    ;; Log the exception's arguments
    call $log
    call $log
  )

  (func $might_throw (param $value i32)
    ;; If value is negative, throw an exception
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        ;; Push the error code onto the stack, then throw
        (i32.const 0)       ;; error code
        (i32.const 42)      ;; error payload
        (throw $my_error)   ;; throw $my_error exception
      )
    )
  )

  ;; Export $try_and_catch function
  (export "try_and_catch" (func $try_and_catch))
)
```

```js interactive-example
// Import object containing console.log
const env = {
  log: console.log,
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { env }).then(
  (result) => {
    // Negative value causes function to throw
    result.instance.exports.try_and_catch(-1);
  },
);
```

## Syntax

```plain
tag identifier parameters
```

- `tag`
  - : The `tag` definition type. Must always be included first.
- `identifier` {{optional_inline}}
  - : An identifying name for the tag. This must begin with a `$` symbol, for example `$my_error`.
- `parameters`
  - : One or more values specifying the exception's parameters and their types. Each one consists of:
    - The keyword `param`
    - The type of the parameter. Possible types are:
      - `i32`
      - `i64`
      - `f32`
      - `f64`
      - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128)
      - [`funcref`](/en-US/docs/WebAssembly/Reference/Types/funcref)
      - [`externref`](/en-US/docs/WebAssembly/Reference/Types/externref)
      - [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref)

## Description

The WebAssembly `tag` definition allows exception types to be defined for the module. Each one consists of an optional identifying name preceded by a `$` symbol, followed by one or more parameter definitions. For example:

```wat
(tag $my_error (param i32))
```

Later in the module, you can reference the exception type by its identifying name, `$my_error` in this case.

> [!NOTE]
> If an `identifier` is not specified, the tag can be identified by its tag index number — `0` for the first specified tag, `1` for the second, etc.

For example, the following function takes an `i32` parameter and evaluates whether it is less than `0` using the [`lt_s`](/en-US/docs/WebAssembly/Reference/Numeric/lt_s) instruction. If this is the case, we throw an exception of type `$my_error`, passing it a value of `42`, which could represent an error code or payload.

```wat
(func $might_throw (param $value i32)
  (local.get $value)
  (i32.const 0)
  (i32.lt_s)
  (if
    (then
      (i32.const 42)
      (throw $my_error)
    )
  )
)
```

The thrown exception could then be handled and the payload accessed using a Wasm try/catch block. You can see an example in the [Try it](#try_it) section at the top of the page; also see the following pages for more examples:

- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table)
- [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch)
- [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all)
- [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_ref)
- [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all_ref)

### Handling Wasm exceptions in JavaScript

Alternatively, if the function that throws the exception is exported, the exception can be handled via a regular JavaScript [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement.

For example, we could export the `$might_throw` function seen earlier like this:

```wat
(export "might_throw" (func $might_throw))
```

To access the exception's payload, you have to export the tag as well:

```wat
(export "my_error" (tag $my_error))
```

Back over in the JavaScript, we can instantiate the module and then call the exported function (via the [`exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) object) with a number argument that is less than `0` to cause it to throw the `$my_error` exception. We can also access the exported tag via the `exports` object.

We can then access the exception payload inside the `catch` block via the [`Exception.getArg()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) method.

```js
let myErrorTag;

WebAssembly.instantiateStreaming(fetch("module.wasm")).then((result) => {
  myErrorTag = result.instance.exports.my_error;
  try {
    result.instance.exports.might_throw(-1); // negative value causes function to throw
  } catch (e) {
    if (e instanceof WebAssembly.Exception && e.is(myErrorTag)) {
      console.log("Error code:", e.getArg(myErrorTag, 0));
    } else {
      throw e; // throw other errors
    }
  }
});
```

You can see this in action along with a complete explanation in our [Full JavaScript exception handling example](#full_javascript_exception_handling_example) example later on.

### Creating tags in JavaScript

It is also possible to create a Wasm tag from within the JavaScript host using the [`WebAssembly.Tag()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) constructor:

For example:

```js
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
```

You can import it into the module:

```js
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("module.wasm"), { env });
```

Then, reference it inside the Wasm module like so:

```wat
(module
  (tag $my_error (import "env" "my_error") (param i32))

  ...
)
```

## Examples

### Full JavaScript exception handling example

In this example, we demonstrate how to handle a Wasm exception defined and thrown inside a Wasm module from the associated JavaScript host.

#### Wasm

In our Wasm module, we start by defining an exception tag called `$my_error` with a single `i32` parameter, then export it. We then define a function called `$might_throw` that takes a single `i32` parameter, checks whether it is less than `0`, and then throws the `$my_error` exception if so, with a payload of `42`. Finally, we export the `$might_throw` function.

```html hidden live-sample___tag_definition
<p></p>
```

```wat live-sample___tag_definition
(module
  (tag $my_error (param i32))
  (export "my_error" (tag $my_error))

  (func $might_throw (param $value i32)
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        (i32.const 42)
        (throw $my_error)
      )
    )
  )

  (export "might_throw" (func $might_throw))
)
```

#### JavaScript

We begin our script by defining a variable called `myErrorTag`, grabbing a reference to an output {{htmlelement("p")}} to output results into, and instantiating our Wasm module using [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

```js live-sample___tag_definition
let myErrorTag;
const output = document.querySelector("p");
const wasm = WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"));
```

When the `instantiateStreaming()` promise resolves, we set the `myErrorTag` variable equal to the exported `my_error` tag, then try running the exported `might_throw()` function inside a `try` block with a negative number argument to make it throw.

Inside the respective `catch` block, the thrown Wasm exception will be available in the `error` object will be a [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) instance. We check that this is true using `error instanceof WebAssembly.Exception`, and whether the `error` object represents an exception of the exported `myErrorTag` type (using the [`is()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/is) method).

If both of these are true, we access the Wasm exception payload using the [`getArg()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg) method and write it to the output `<p>`. If not, we write the error object to the output `<p>`.

```js live-sample___tag_definition
wasm.then((result) => {
  myErrorTag = result.instance.exports.my_error;
  try {
    result.instance.exports.might_throw(-1);
  } catch (error) {
    if (error instanceof WebAssembly.Exception && error.is(myErrorTag)) {
      output.textContent = `Error code: ${error.getArg(myErrorTag, 0)}`;
    } else {
      output.textContent = `Error: ${error}`; // report other errors
    }
  }
});
```

#### Result

{{embedlivesample("tag_definition", "100%", 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction
- [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction
- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) instruction
- [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch) instruction
- [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all) instruction
- [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_ref) instruction
- [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all_ref) instruction
- [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) type
- [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) JavaScript interface
- [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) JavaScript interface
