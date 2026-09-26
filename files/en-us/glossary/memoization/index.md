---
title: Memoization
slug: Glossary/Memoization
page-type: glossary-definition
sidebar: glossarysidebar
---

**Memoization** is an optimization technique that stores the result of a {{glossary("function")}} call and returns the stored result when the function is called again with the same inputs. This avoids repeating the calculation.

The following is the common pattern for memoization:

```js
const argToResult = new Map();

function memoizedFunction(arg) {
  if (argToResult.has(arg)) {
    return argToResult.get(arg);
  }
  const result = heavyComputation(arg);
  argToResult.set(arg, result);
  return result;
}
```

Memoization trades additional memory for potentially faster execution. It is suitable for functions that return the same result for the same inputs and have no side effects, especially if the function is expected to be called a lot of times with the same input. For example, it is commonly used in {{Glossary("recursion")}} because there may be many recursive calls with the same argument.

## See also

- [Memoization](https://en.wikipedia.org/wiki/Memoization) on Wikipedia
- [Smart / self-overwriting / lazy getters](/en-US/docs/Web/JavaScript/Reference/Functions/get#smart_self-overwriting_lazy_getters)
