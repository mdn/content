---
title: Invariant
slug: Glossary/Invariant
page-type: glossary-definition
sidebar: glossarysidebar
---

In program semantics, an **invariant** of a piece of code is a condition that is provably true throughout the execution of that code. Defining invariants helps to reason about the code's correctness and behavior.

For example, in the following code:

```js
let count = 0;
while (hasMessages()) {
  count++;
  processMessage();
}
```

We can prove that `count` is a non-negative integer from the beginning to the end. This means that anywhere in the code, we can pass `count` to a function that expects a non-negative integer, and the function will work correctly.

Invariants can be established in two ways: by the nature of the program, or by explicit assertions (runtime checks). For example, the code above does not perform any checks, but by virtue of `count` being an incrementing integer starting from `0`, we can guarantee its range. If we are receiving input from an external source, we can use checks to establish invariants at the boundary:

```js
function processInput(input) {
  if (input < 0 || !Number.isInteger(input)) {
    throw new Error("Input must be a non-negative integer");
  }
  // Process input...
}
```

Invariants are particularly useful in complex systems that cannot afford to perform exhaustive checks at every step. We establish invariants at the system boundary, and then any following code can assume those properties without checking them again.

In general, anything that can be assumed to be true is an invariant. For example, a specification can leave a feature as implementation-defined but with certain invariants, meaning those properties will always hold true regardless of the exact behavior.
