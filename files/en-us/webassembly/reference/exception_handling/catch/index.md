---
title: "catch: Wasm exception handling instruction"
short-title: catch
slug: WebAssembly/Reference/Exception_handling/catch
page-type: webassembly-instruction
browser-compat: webassembly.instructions.catch
sidebar: webassemblysidebar
---

The **`catch`** [exception handling](/en-US/docs/WebAssembly/Reference/Exception_handling) instruction catches exceptions matching a specified error [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag), pushing the exception payload to the stack.

{{InteractiveExample("Wat Demo: catch", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import error tag and console.log
  (tag $my_error (import "env" "my_error") (param i32))
  (import "env" "log" (func $log (param i32)))

  (func $try_and_catch (param $value i32)
    (block $handler (result i32)
      ;; In try_table block, catch thrown exception of type $my_error
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
catch tag_identifier block_identifier
```

- `catch`
  - : The `catch` instruction.
- `tag_identifier`
  - : The identifier for the exception type to catch. This can be:
    - An identifying name, as defined by the [`identifier`](/en-US/docs/WebAssembly/Reference/Definitions/tag#identifier) of the corresponding tag type.
    - A tag index number — `0` to identify the first specified tag, `1` for the second, etc.
- `block_identifier`
  - : The identifier for the [`block`](/en-US/docs/WebAssembly/Reference/Control_flow/block) to branch to when the exception is caught. This can be:
    - An identifying name, as defined by the identifier of the corresponding block.
    - A block index number — `0` to identify the innermost block, `1` for the next innermost, etc.

### Type

```plain
[] -> [payload*]
```

- `payload*`
  - : Zero or more payload values created by the thrown exception, which typically represent identifying error codes.

These values are not pushed onto the stack directly at the site of the `catch` instruction, rather they are pushed onto the stack at the site of the block branched to when the exception is thrown.

### Binary encoding

| Instruction | Catch type byte |
| ----------- | --------------- |
| `catch`     | `0x00`          |

`catch` is not a standalone instruction — instead, it is encoded as a clause within a `try_table` instruction with a byte of `0x00`. A `try_table` with a single `catch` clause:

```wat
(try_table (catch $my_error $handler) ... )
```

would be encoded like this:

```plain
... 0x01 0x00 0x00 0x00 ...
```

## Description

The `catch` instruction can be included inside a [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) block to catch exceptions with a specific error [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag). When such an exception is thrown, the code branches to the specified `block`, at which point the exception's payload values are pushed to the stack.

`catch` is useful when you don't need to rethrow an exception, but you do want to report that a specific exception type has been thrown.

The referenced block must declare a result type that matches the exception's payload. In the example shown earlier, the exception type is defined with a single `i32` parameter in its `tag` definition:

```wat
(tag $my_error (import "env" "my_error") (param i32))
```

When the exception is caught, the block branched to specifies the same data type for its `result`:

```wat
(block $handler (result i32)
  ...
)
```

## See also

- [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction
- [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction
- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) instruction
- [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all) instruction
- [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_ref) instruction
- [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/catch_all_ref) instruction
- [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) type
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
