---
title: Delta
slug: Glossary/Delta
page-type: glossary-definition
---

{{GlossarySidebar}}

The term **delta** refers to the difference between two values or states.

The name originates from the Greek letter Δ (delta), which is equivalent to the letter _D_ in the Roman alphabet. _Delta_ refers to the use of the letter Δ as a shorthand for _difference_.

The term _delta_ is commonly used when communicating changes in speed, position, or acceleration of a physical or virtual object. It's also used when describing changes in the volume or frequency of sound waves.

For example, when describing how far an object on the screen moves left-to-right, one might use the term _delta x_ or _Δx_.

Likewise, given the new value of _X_ and its old value, you might compute the delta like this:

```js
let deltaX = newX - oldX;
```

More commonly, you receive the delta and use it to update a saved previous condition:

```js
let newX = oldX + deltaX;
```

For example, mouse wheel events {{domxref("WheelEvent")}} offer the amount the wheel moved since the last event in its {{domxref("WheelEvent.deltaX", "deltaX")}}, {{domxref("WheelEvent.deltaY", "deltaY")}}, and {{domxref("WheelEvent.deltaZ", "deltaZ")}} properties.
