---
title: WebAssembly.JSTag
slug: WebAssembly/Reference/JavaScript_interface/JSTag_static
page-type: webassembly-static-property
browser-compat: webassembly.api.JSTag
sidebar: webassemblysidebar
---

The **`JSTag`** read-only static property of the [`WebAssembly`](/en-US/docs/WebAssembly/Reference/JavaScript_interface) interface is a built-in [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) representing exceptions thrown in the JavaScript host — it allows exceptions thrown in JavaScript to be handled from inside a Wasm module.

{{InteractiveExample("WebAssembly.JSTag demo", "tabbed-taller")}}

```wat interactive-example
(module
  (tag $js_tag (import "env" "js_tag") (param externref))
  (import "env" "do_work" (func $do_work))
  (import "env" "log" (func $log (param externref)))

  (func $try_and_catch
    (block $handler (result externref)
      (try_table (catch $js_tag $handler)
        ;; Call a JS function that throws
        (call $do_work)
      )
      (return)
    )
    ;; The JS Error object is on the stack as an externref
    ;; Pass it back to JS for logging
    (call $log)
  )

  (export "try_and_catch" (func $try_and_catch))
)
```

```js interactive-example
async function run() {
  const { instance } = await WebAssembly.instantiateStreaming(
    fetch("{%wasm-url%}"),
    {
      env: {
        js_tag: WebAssembly.JSTag,
        // This JS function throws, which Wasm will catch via JSTag
        do_work() {
          throw new Error("An exception was thrown in JS");
        },
        log(error) {
          // errRef is the JS Error object passed back as an externref
          console.log(error.message);
        },
      },
    },
  );

  instance.exports.try_and_catch();
}

run();
```

## Value

A [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) with a type of [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref) (`(tag (param externref))`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly](/en-US/docs/WebAssembly) overview
- [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag)
- [tag](/en-US/docs/WebAssembly/Reference/Definitions/tag) Wasm definition
