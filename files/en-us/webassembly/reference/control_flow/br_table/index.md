---
title: br_table
slug: WebAssembly/Reference/Control_flow/br_table
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`br_table`** statement branches to different [`loop`](/en-US/docs/WebAssembly/Reference/Control_flow/loop), [`block`](/en-US/docs/WebAssembly/Reference/Control_flow/block), or [`if`](/en-US/docs/WebAssembly/Reference/Control_flow/if...else) statements, based on an argument.

In some ways, `br_table` is similar to the [`switch`](/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement, branching to different code blocks depending on the argument.

{{InteractiveExample("Wat Demo: br_table", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import the browser console object, which you'll need to pass in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    ;; label each block for easy reference.
    ;; (could also be referenced by index)
    (block $outer_block
      (block $middle_block
        (block $inner_block

          ;; choose which block to break out of based on their order in the br_table
          ;; 0 is `$inner_block`, 1 is `$outer_block`, 2 is `$middle_block`
          i32.const 0

          ;; create a br_table with three targets
          (br_table $inner_block $outer_block $middle_block)

          ;; we'll never reach this point since we broke out of the block
          unreachable

        )

        ;; if you jump out of the `$inner_block` block but stay in `$middle_block`,
        ;; 42 will be logged.
        ;; if also jump out of the `$middle_block` block, either by jumping out of
        ;; `$middle_block` or `$outer_block`, this will be skipped.
        i32.const 42
        call $log

      )
    )
  )

  (start 1) ;; run the first function automatically
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```wat
;; Add true to the top of the stack so that the `if` statement is executed.
i32.const 1
(if ;; 2
  (then
    (block ;; 1
      (loop ;; 0
        ;; Add a variable to the top of the stack
        i32.const 2

        ;; 0 = jump to the block, item 0 in br_table is 1 so we jump to 1 level.
        ;; 1 = jump to the if, item 1 in br_table is 2 so we jump to 2 levels.
        ;; 2 = jump to the loop, item 2 in br_table is 0 so we jump to 0 levels. (this will cuase an infinite loop)
        (br_table 1 2 0)
      )
    )
  )
)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `br_table`  | `0x0e`        |
