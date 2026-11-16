---
title: "catch_ref: try_table clause"
short-title: catch_ref
slug: WebAssembly/Reference/Exception_handling/try_table/catch_ref
page-type: webassembly-instruction
browser-compat: webassembly.instructions.try_table.catch_ref
sidebar: webassemblysidebar
---

The **`catch_ref`** clause catches exceptions matching a specified error [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag), pushing the exception payload and an [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) value representing the exception to the stack.

{{InteractiveExample("Wat Demo: catch_ref", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import error tag
  (tag $my_error (import "env" "my_error") (param i32))

  (func $try_and_rethrow (param $value i32)
    ;; Define a variable to store an exnref
    (local $err exnref)

    (block $handler (result i32 exnref)
      (try_table (catch_ref $my_error $handler)
        (call $might_throw (local.get $value))
      )
      (return)
    )

    ;; catch_ref returns error value and exnref
    ;; Stack is now: i32, exnref (exnref on top)
    (local.set $err)      ;; pop exnref
    (drop)                ;; drop the i32 payload
    (local.get $err)      ;; push exnref back
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

  (export "try_and_rethrow" (func $try_and_rethrow))
)
```

```js interactive-example
// Define error tag in JS
const myErrorTag = new WebAssembly.Tag({ parameters: ["i32"] });

// Import the tag into the module
const env = {
  my_error: myErrorTag,
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { env }).then(
  (result) => {
    try {
      // Negative value causes function to throw
      result.instance.exports.try_and_rethrow(-1);
    } catch (e) {
      if (e instanceof WebAssembly.Exception && e.is(myErrorTag)) {
        // 0 is the first payload value, which is equal to 42
        const errorCode = e.getArg(myErrorTag, 0);
        console.log("Error code:", errorCode);
      } else {
        // Throw other errors
        throw e;
      }
    }
  },
);
```

## Syntax

```plain
catch_ref tag_identifier block_identifier
```

- `catch_ref`
  - : The `catch_ref` clause.
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
[] -> [payload*, exception_ref]
```

- `payload*`
  - : Zero or more payload values created by the thrown exception, which typically represent identifying error codes.
- `exception_ref`
  - : An [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) value representing the thrown exception.

These values are not pushed onto the stack directly at the site of the `catch_ref` clause, rather they are pushed onto the stack at the site of the block branched to when the exception is thrown.

### Binary encoding

| Clause      | catch_ref type byte |
| ----------- | ------------------- |
| `catch_ref` | `0x01`              |

`catch_ref` is not a standalone instruction — instead, it is encoded as a clause within a `try_table` instruction with a byte of `0x01`. A `try_table` with a single `catch_ref` clause:

```wat
(try_table (catch_ref $my_error $handler) ... )
```

would be encoded like this:

```plain
... 0x01 0x01 0x00 0x00 ...
```

## Description

The `catch_ref` clause can be included inside a [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) block to catch exceptions with a specific error [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag). When such an exception is thrown, the code branches to the specified `block`, at which point the exception's payload values and an [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) value representing the thrown exception are pushed to the stack.

The exception can then be rethrown using a [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction.

`catch_ref` is useful when you want to report that a specific exception type has been thrown, but you also want to rethrow the exception. You might for example want to perform an action such as cleanup or logging but then still let users know that a specific error occurred.

The referenced block must declare a result type that matches the exception's payload and the `exnref`. In the example shown earlier, the exception type is defined with a single `i32` parameter in its `tag` definition:

```wat
(tag $my_error (import "env" "my_error") (param i32))
```

When the exception is caught, the block branched to specifies the same data type for the payload plus an `exnref` type in its `result`:

```wat
(block $handler (result i32 exnref)
  ...
)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction
- [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction
- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) instruction
  - [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch) clause
  - [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all) clause
  - [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) clause
- [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) type
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
