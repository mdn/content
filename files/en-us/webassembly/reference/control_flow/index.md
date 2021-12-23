---
title: WebAssembly control flow
slug: WebAssembly/Reference/Control_flow
tags:
  - WebAssembly
  - wasm
  - Landing page
  - Reference
  - Control flow
---
{{WebAssemblySidebar}}

WebAssembly control flow operators.

- [`block`](/en-US/docs/WebAssembly/Reference/Control_flow/block)
  - : Creates a label that can later be branched out of with a [`br`](/en-US/docs/WebAssembly/Reference/Control_flow/br).

<!---->

- [`br`](/en-US/docs/WebAssembly/Reference/Control_flow/br)
  - : Branches to a loop or block.

<!---->

- [`call`](/en-US/docs/WebAssembly/Reference/Control_flow/call)
  - : Calls a function.

<!---->

- [`end`](/en-US/docs/WebAssembly/Reference/Control_flow/end)
  - : Can be used to end a `block`, `loop`, `if`, or `else`.

<!---->

- [`if...else`](/en-US/docs/WebAssembly/Reference/Control_flow/if...else)
  - : Executes a statement if the last item on the stack is true (`1`).

<!---->

- [`loop`](/en-US/docs/WebAssembly/Reference/Control_flow/loop)
  - : Creates a label that can later be branched to with a [`br`](/en-US/docs/WebAssembly/Reference/Control_flow/br).

<!---->

- [`nop`](/en-US/docs/WebAssembly/Reference/Control_flow/nop)
  - : Does nothing.

<!---->

- [`return`](/en-US/docs/WebAssembly/Reference/Control_flow/return)
  - : Returns from a function.

<!---->

- [`unreachable`](/en-US/docs/WebAssembly/Reference/Control_flow/unreachable)
  - : Denotes a point in code that should not be reachable.
