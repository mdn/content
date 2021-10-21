---
title: block
slug: WebAssembly/Reference/Control_flow/block
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

The **`block`** statement creates a label that can later be branched out of with a `br`.

The **`loop`** statement is the opposite of the `block` statement, in the sense that while branching to a `loop` jumps to the beginning of the loop, branching to a `block` jumps to the end of the block; that is, out of the block.

## Syntax

```wasm
;; label the block so that it can be branched to.
(block $my_block

  ;; branch to the block.
  ;; most of the time you'll want to put this in an if statement and only branch on condition,
  ;; otherwise the following control flow are unreachable.
  br $my_block

  ;; this will never be reached, since the br jumped out of the block already.
  unreachable

)
```

## Full working example

Wasm file

```wasm
(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  ;; create a function that takes in a number as a param,
  ;; and logs that number if it's not equal to 100.
  (func (export "log_if_not_100") (param $num i32)
    (block $my_block

      ;; $num is equal to 100
      get_local $num
      i32.const 100
      i32.eq

      (if

        ;; branch to the end of the block
        br $my_block

      )

      ;; not reachable when $num is 100
      get_local $num
      call $log

    )
  )
)
```

JavaScript file

```js
WebAssembly.instantiateStreaming(
  fetch("../out/main.wasm"),
  { console }
).then(result => {
  const log_if_not_100 = result.instance.exports.log_if_not_100;

  log_if_not_100(99); // should log 99
  log_if_not_100(100); // should not log anything
  log_if_not_100(101); // should log 101

});
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `block`     | `0x02`        |
