---
title: "catch_all_ref: try_table clause"
short-title: catch_all_ref
slug: WebAssembly/Reference/Exception_handling/try_table/catch_all_ref
page-type: webassembly-instruction
browser-compat: webassembly.instructions.try_table.catch_all_ref
sidebar: webassemblysidebar
---

The **`catch_all_ref`** clause catches any exception and pushes an [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) value representing the exception to the stack.

{{InteractiveExample("Wat Demo: catch_all_ref", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the error tag and the log function
  (tag $my_error (import "env" "my_error") (param i32))
  (import "env" "log" (func $log))

  (func $try_and_catch (param $value i32)
    ;; Define a variable to store an exnref
    (local $err exnref)
    ;; catch_all_ref catches any exception thrown and pushes an exnref
    (block $handler (result exnref)
      (try_table (catch_all_ref $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )
    ;; Save exnref before calling log to notify user
    ;; that exception has been thrown
    (local.set $err)
    (call $log)
    ;; Restore exnref
    (local.get $err)
    ;; rethrow original exception
    (throw_ref)
  )

  ;; Function that throws an error of type $my_error
  ;; when its parameter is less than 0
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
  (export "try_and_catch" (func $try_and_catch))
)
```

```js interactive-example
// Define error tag in JS
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });

// Import the tag and the log function into the module
const env = {
  my_error: myErrorTag,
  log() {
    console.log("An error was caught!");
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { env }).then(
  // Negative value causes function to throw
  (result) => result.instance.exports.try_and_catch(-1),
);
```

## Syntax

```plain
catch_all_ref block_identifier
```

- `catch_all_ref`
  - : The `catch_all_ref` clause.
- `block_identifier`
  - : The identifier for the [`block`](/en-US/docs/WebAssembly/Reference/Control_flow/block) to branch to when the exception is caught. This can be:
    - An identifying name, as defined by the identifier of the corresponding block.
    - A block index number — `0` to identify the innermost block, `1` for the next innermost, etc.

### Type

```plain
[] -> [exception_ref]
```

- `exception_ref`
  - : An [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) value representing the thrown exception.

This value is not pushed onto the stack directly at the site of the `catch_all_ref` clause, rather it is pushed onto the stack at the site of the block branched to when the exception is thrown.

### Binary encoding

| Clause          | catch_all_ref type byte |
| --------------- | ----------------------- |
| `catch_all_ref` | `0x03`                  |

`catch_all_ref` is not a standalone instruction — instead, it is encoded as a clause within a `try_table` instruction with a byte of `0x03`. A `try_table` with a single `catch_all_ref` clause:

```wat
(try_table (catch_all_ref $handler) ... )
```

would be encoded like this:

```plain
... 0x01 0x03 0x00 ...
```

## Description

The `catch_all_ref` clause can be included inside a [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) block to catch any thrown exceptions. When an exception is thrown, the code branches to the specified `block`, at which point an [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) value representing the thrown exception is pushed to the stack.

The exception can then be rethrown using a [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction.

`catch_all_ref` is useful when you want to report that some kind of exception has been thrown, but you also want to rethrow the exception. You might for example want to perform an action such as cleanup or logging but then still let users know that an error occurred.

The referenced block must declare a result type that matches the pushed `exnref`. In the example shown earlier, the block branched to when the exception is caught specifies an `exnref` type in its `result`:

```wat
(block $handler (result exnref)
  ...
)
```

## See also

- [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction
- [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction
- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) instruction
  - [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch) clause
  - [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all) clause
  - [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref) clause
- [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) type
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
