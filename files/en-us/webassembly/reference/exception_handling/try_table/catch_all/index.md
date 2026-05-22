---
title: "catch_all: try_table clause"
short-title: catch_all
slug: WebAssembly/Reference/Exception_handling/try_table/catch_all
page-type: webassembly-instruction
browser-compat: webassembly.instructions.try_table.catch_all
sidebar: webassemblysidebar
---

The **`catch_all`** clause catches any exception and pushes nothing to the stack.

{{InteractiveExample("Wat Demo: catch_all", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the error tag and the log function
  (tag $my_error (import "env" "my_error") (param i32))
  (import "env" "log" (func $log))

  (func $try_and_catch (param $value i32)
    ;; catch_all catches any exception thrown
    (block $handler
      (try_table (catch_all $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )
    ;; Call log to notify user that exception has been thrown
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
  log: () => {
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
catch_all block_identifier
```

- `catch_all`
  - : The `catch_all` clause.
- `block_identifier`
  - : The identifier for the [`block`](/en-US/docs/WebAssembly/Reference/Control_flow/block) to branch to when the exception is caught. This can be:
    - An identifying name, as defined by the identifier of the corresponding block.
    - A block index number — `0` to identify the innermost block, `1` for the next innermost, etc.

### Type

```plain
[] -> []
```

### Binary encoding

| Clause      | catch_all type byte |
| ----------- | ------------------- |
| `catch_all` | `0x02`              |

`catch_all` is not a standalone clause — instead, it is encoded as a clause within a `try_table` instruction with a byte of `0x02`. A `try_table` with a single `catch_all` clause:

```wat
(try_table (catch_all $handler) ... )
```

would be encoded like this:

```plain
... 0x01 0x02 0x00 ...
```

## Description

The `catch_all` clause can be included inside a [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) block to catch any thrown exceptions. When an exception is thrown, the code branches to the specified `block`.

`catch_all` is useful when you don't need to rethrow an exception, and you don't want to catch a specific exception, but you do want to report that an exception of some kind has been thrown.

In the case of `catch_all`, the referenced block doesn't need to declare a result type that matches the exception's payload, because no result is pushed to the stack. In the example shown earlier, the `block` has no result type declared:

```wat
(block $handler
  ...
)
```

## See also

- [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction
- [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction
- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) instruction
  - [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch) clause
  - [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref) clause
  - [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) clause
- [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) type
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
