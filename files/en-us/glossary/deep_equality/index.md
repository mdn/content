---
title: Deep equality
slug: Glossary/Deep_equality
page-type: glossary-definition
sidebar: glossarysidebar
---

**Deep equality** is a comparison of compound values, such as objects or arrays, that compares their contents recursively. Two separate objects can be deeply equal even though they are not the same object. In contrast, an identity comparison asks whether two references refer to one object.

Deep equality is usually implemented recursively as such:

1. The two objects have the same type. The prototype objects may or may not be compared deeply (and usually they are not), but for example an {{jsxref("Array")}} should never be deeply equal to a plain object.
2. For each own property of one object, a property with the same key exists on the other object, with deeply equal values. If the values are primitives, they are equal by value.
3. Any data that's not exposed as properties, such as {{jsxref("Map")}}, is deeply compared, provided that the implementation recognizes the object type and knows how to retrieve the data.
4. Usually there's some support for circular references.

Note that because JavaScript has no built-in mechanism that performs a deep equality, library implementations often diverge on technical details, such as:

- Whether the comparison is property-order-sensitive
- Which primitive equality rule they use, including how they handle `NaN` and signed zero
- Are non-enumerable or symbol properties compared
- Are property descriptors compared
- Are accessor properties compared as accessors, or do they trigger getters and compare the return values
- Are prototype chains compared by identity
- What data structures support retrieving non-property data

For example, Node.js provides [`assert.deepEqual()`](https://nodejs.org/api/assert.html#assertdeepequalactual-expected-message) and [`assert.deepStrictEqual()`](https://nodejs.org/api/assert.html#assertdeepstrictequalactual-expected-message), whose comparison rules differ. Check a utility's documented rules before relying on it for your data.

A {{glossary("deep copy")}} aims to reproduce an object's data without sharing mutable nested objects; whether a copy compares equal depends on the copying and comparison rules.

Comparing the results of {{jsxref("JSON.stringify()")}} is not a general deep equality check. Serialization can omit properties or transform values, property order affects the resulting string, and circular references cause an error.

## See also

- Related glossary terms:
  - {{Glossary("Deep copy")}}
- [Equality comparisons and sameness](/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
