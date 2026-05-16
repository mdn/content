---
title: "try_table: Wasm exception handling instruction"
short-title: try_table
slug: WebAssembly/Reference/Exception_handling/try_table
page-type: webassembly-instruction
browser-compat: webassembly.instructions.try_table
sidebar: webassemblysidebar
---

The **`try_table`** [exception handling](/en-US/docs/WebAssembly/Reference/Exception_handling) instruction enables you to test a block of code to see whether it throws an exception, handling the exception with a `catch` clause if so.

{{InteractiveExample("Wat Demo: try_table", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import error tag and console.log
  (tag $my_error (import "env" "my_error") (param i32))
  (import "env" "log" (func $log (param i32)))

  (func $try_and_catch (param $value i32)
    (block $handler (result i32)
      ;; In try_table block, catch thrown exception
      (try_table (catch $my_error $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )
    ;; Log value returned by handler block
    call $log
  )

  ;; Function that throws an error of type $my_error
  ;; when its parameter is less than 0
  (func $might_throw (param $value i32)
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        ;; Throw exception with payload of 42
        (i32.const 42)
        (throw $my_error)
      )
    )
  )

  (export "try_and_catch" (func $try_and_catch))
)
```

```js interactive-example
// Define error tag in JS
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });

// Import error tag and console.log into the module
const env = {
  my_error: myErrorTag, // import the tag into the module
  log: console.log,
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { env }).then(
  // Negative value causes function to throw
  (result) => result.instance.exports.try_and_catch(-1),
);
```

## Syntax

```plain
try_table catch* instruction*
```

- `try_table`
  - : The `try_table` instruction.
- `catch*`
  - : One or more `catch` clauses, each representing criteria for catching exceptions, and specifying a [`block`](/en-US/docs/WebAssembly/Reference/Control_flow/block) to branch to as a result. Each clause can be one of the following instructions:
    - [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch)
    - [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all)
    - [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_ref)
    - [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all_ref)
- `instruction*`
  - : Zero or more instructions to execute inside the try block.

### Type

```plain
[] -> [result*]
```

- `result*`
  - : Zero or more result values produced by the `try_table` block, as declared in the corresponding `block` instruction.

## Description

A `try_table` instruction, when combined with `catch` instruction types, creates the Wasm equivalent of a JavaScript [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement. The instructions inside the `try_table` block are run, and if an exception is thrown that is caught by the available `catch` instructions, the code branches to the specified outer [`block`](/en-US/docs/WebAssembly/Reference/Control_flow/block), and the values produced by the `catch` instruction are pushed onto the stack.

The different `catch` instructions behave as follows:

- [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch)
  - : If an exception with a matching tag is thrown, branch to the specified `block`, pushing the payload values onto the stack.
- [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all)
  - : If any exception is thrown, branch to the specified `block`, pushing nothing onto the stack.
- [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_ref)
  - : If an exception with a matching tag is thrown, branch to the specified `block`, pushing the payload values and an [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) value representing the exception onto the stack.
- [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all_ref)
  - : If any exception is thrown, branch to the specified `block`, pushing an [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) value representing the exception onto the stack.

Each `catch` clause that branches to an outer `block` must produce values matching that `block`'s result type when a thrown exception is caught.

### Binary encoding

| Instruction | Binary format                                                            |
| ----------- | ------------------------------------------------------------------------ |
| `try_table` | `0x1f bt:blocktype n:u32 (ct:catchtype tl:labelidx)^n instruction* 0x0b` |

A basic `try_table` with a single `catch` clause:

```wat
(try_table (catch $my_error $handler)
  ;; instructions ...
)
```

Would be encoded like so:

```plain
0x1f 0x7f 0x01 0x00 0x00 0x00 ...instructions binary... 0x0b
```

## Examples

### Handling multiple exceptions

This example shows how to handle multiple exceptions in a single `try_table` structure.

#### JavaScript

In our script, we start by grabbing a reference to a {{htmlelement("p")}} element that we will output results to. We then define two different error tags to represent a type error and a range error using the [`WebAssembly.Tag()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag/Tag) constructor.

```html hidden live-sample___multiple-exceptions
<p></p>
```

```js live-sample___multiple-exceptions
const output = document.querySelector("p");

const typeErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });
const rangeErrorTag = new WebAssembly.Tag({ parameters: ["i32", "i32"] });
```

Next, we compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the two error tags and a function to log results to the `<p>` element.

We invoke the exported Wasm `try_multiple()` function available on the WebAssembly [`Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) object multiple times, passing it two different parameters to throw different exceptions, and then finally one value that doesn't throw an exception.

```js live-sample___multiple-exceptions
async function init() {
  const { instance } = await WebAssembly.instantiateStreaming(
    fetch("{%wasm-url%}"),
    {
      env: {
        type_error: typeErrorTag,
        range_error: rangeErrorTag,
        log: (code) => {
          output.textContent += `Error code: ${code} | `;
        },
      },
    },
  );

  instance.exports.try_multiple(-1); // Throws type_error, logs 10
  instance.exports.try_multiple(101); // Throws range_error, logs 99
  instance.exports.try_multiple(50); // Doesn't throw
}

init();
```

#### Wasm

In our Wasm module, we first import our two error tags and log function. We then create a function called `$try_multiple` that has two nested `block`s to handle `$type_error`s and `$range_error`s, respectively. In the middle of the `block`s is a `try_table` structure containing two `catch` instructions, one to catch each type of error. We then call the `$might_throw` function defined later on to see whether it throws any exceptions:

- If a `$type_error` is thrown, we branch to the `$on_type_error` `block` and log the payload value.
- If a `$range_error` is thrown, we branch to the `$on_range_error` `block`, drop the first of the two payload values and log the second one, then return out of the `block`.
- If no exception is thrown, we just return out of the `block`.

The `$might_throw` function itself takes a single parameter, and checks its value. If the value is less than `0`, it throws a `$type_error` with error code `10`. If the value is greater than `100`, it throws a `$range_error` with code `99`.

```wat live-sample___multiple-exceptions
(module
  (tag $type_error (import "env" "type_error") (param i32))
  (tag $range_error (import "env" "range_error") (param i32 i32))  ;; carries two values
  (import "env" "log" (func $log (param i32)))

  (func $try_multiple (param $value i32)
    (block $on_type_error (result i32)
      (block $on_range_error (result i32 i32)
        (try_table
          (catch $type_error $on_type_error)
          (catch $range_error $on_range_error)
          (call $might_throw (local.get $value))
        )
        (return)  ;; no exception thrown
      )
      ;; $range_error was caught — stack has i32 i32
      (drop)                   ;; drop second payload value
      (call $log)              ;; log first payload value
      (return)
    )
    ;; $type_error was caught — stack has i32
    (call $log)                ;; log the payload
  )

  (func $might_throw (param $value i32)
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        (i32.const 10)
        (throw $type_error)
      )
    )
    (local.get $value)
    (i32.const 100)
    (i32.gt_s)
    (if
      (then
        (i32.const 99)
        (i32.const 100)
        (throw $range_error)
      )
    )
  )

  (export "try_multiple" (func $try_multiple))
)
```

#### Result

{{embedlivesample("multiple-exceptions", "100%", 100)}}

We call the `try_multiple()` function three times. The first time throws a `$type_error`, so error code `10` is logged. The second throws a `$range_error`, so error code `99` is logged. The third does not throw an exception.

## See also

- [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction
- [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction
- [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch) instruction
- [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all) instruction
- [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_ref) instruction
- [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all_ref) instruction
- [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) type
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
