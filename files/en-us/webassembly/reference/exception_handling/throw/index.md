---
title: "throw: Wasm exception handling instruction"
short-title: throw
slug: WebAssembly/Reference/Exception_handling/throw
page-type: webassembly-instruction
browser-compat: webassembly.instructions.throw
sidebar: webassemblysidebar
---

The **`throw`** [exception handling](/en-US/docs/WebAssembly/Reference/Exception_handling) instruction throws an exception of a specified type, as defined by a [tag](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition.

{{InteractiveExample("Wat Demo: throw", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the error tag from JS
  (tag $my_error (import "env" "my_error") (param i32))

  (func $might_throw (param $value i32)
    ;; If value is negative, run the if block
    (local.get $value)
    (i32.const 0)
    (i32.lt_s)
    (if
      (then
        ;; Push the error code onto the stack, then throw an exception
        (i32.const 42)        ;; error code payload
        (throw $my_error)     ;; throw with the tag
      )
    )
  )
  (export "might_throw" (func $might_throw))
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
      result.instance.exports.might_throw(-1);
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
throw identifier
```

- `throw`
  - : The `throw` instruction.
- `identifier`
  - : An identifier for the exception tag type to throw. This can be:
    - An identifying name, as defined by the [`identifier`](/en-US/docs/WebAssembly/Reference/Definitions/tag#identifier) of the corresponding tag type.
    - A tag index number — `0` to identify the first specified tag, `1` for the second, etc.

### Type

```plain
[payload1, payload2, payloadN] -> []
```

- `payload` values
  - : The payload values, which typically represents identifying error codes.

The payload values can be retrieved when the exception is caught, either by clauses such as [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch) and [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref), or in JavaScript via a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statement.

See the [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition reference page for examples of both.

### Binary encoding

| Instruction | Binary format   | Example text => binary                                 |
| ----------- | --------------- | ------------------------------------------------------ |
| `throw`     | `0x08 x:tagidx` | `(throw $tag (i32.const 42))` => `0x41 0x2a 0x08 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref) instruction
- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table) instruction
  - [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch) clause
  - [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all) clause
  - [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref) clause
  - [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref) clause
- [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref) type
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
