---
title: "exnref: Wasm value type"
short-title: exnref
slug: WebAssembly/Reference/Value_types/exnref
page-type: webassembly-instruction
browser-compat: webassembly.types.exnref
sidebar: webassemblysidebar
---

The **`exnref`** value type represents a thrown exception in a Wasm module, allowing it to be rethrown.

{{InteractiveExample("Wat Demo: exnref", "tabbed-taller")}}

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

```wat
;; Define variable to hold exnref
(local $err exnref)
```

## Description

The `exnref` type represents a thrown exception in a Wasm module. This value type is returned by the [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref) and [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) clauses, providing a reference to the exception that was just thrown, and allowing it to be rethrown if required using the [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction.

The [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) JavaScript interface represents a Wasm exception in the JavaScript host.

> [!NOTE]
> You cannot call a Wasm function from JavaScript that has an `exnref` value as a parameter or result. Trying to do so will result in an error.

## See also

- [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction
- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) instruction
  - [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref) clause
  - [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) clause
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
- [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) JavaScript interface
