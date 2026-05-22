---
title: "throw_ref: Wasm exception handling instruction"
short-title: throw_ref
slug: WebAssembly/Reference/Exception_handling/throw_ref
page-type: webassembly-instruction
browser-compat: webassembly.instructions.throw_ref
sidebar: webassemblysidebar
---

The **`throw_ref`** [exception handling](/en-US/docs/WebAssembly/Reference/Exception_handling) instruction rethrows a previously-thrown exception represented by an [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) value.

{{InteractiveExample("Wat Demo: throw_ref", "tabbed-taller")}}

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
throw_ref
```

- `throw_ref`
  - : The `throw_ref` instruction.

### Type

```plain
[exception] -> []
```

- `exception`
  - : The exception to rethrow, which must be an `exnref` value.

### Binary encoding

| Instruction | Binary format | Example text => binary |
| ----------- | ------------- | ---------------------- |
| `throw_ref` | `0x0a`        | `throw_ref` => `0x0a`  |

## Description

A `throw_ref` instruction can be used to rethrow a previously-thrown exception, as represented by an [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) value. Values of type `exnref` are pushed onto the stack by [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref) and [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) clauses.

Generally, rethrowing exceptions is useful because you might want to perform an action such as cleanup or logging but then still let users know that an error ocurred.

## See also

- [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw) instruction
- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) instruction
  - [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch) clause
  - [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all) clause
  - [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref) clause
  - [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) clause
- [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) type
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
