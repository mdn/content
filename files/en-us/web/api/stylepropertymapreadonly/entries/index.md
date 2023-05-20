---
title: "StylePropertyMapReadOnly: entries() method"
short-title: entries()
slug: Web/API/StylePropertyMapReadOnly/entries
page-type: web-api-instance-method
browser-compat: api.StylePropertyMapReadOnly.entries
---

{{APIRef("CSS Typed Object Model API")}}

The **`StylePropertyMapReadOnly.entries()`** method returns an
array of a given object's own enumerable property `[key, value]` pairs, in
the same order as that provided by a {{jsxref("Statements/for...in", "for...in")}} loop
(the difference being that a for-in loop enumerates properties in the prototype chain as
well).

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

An array of the given `StylePropertyMapReadOnly` object's own enumerable
property `[key, value]` pairs.

## Examples

Here shows an example of using `StylePropertyMapReadOnly.entries()` method
on an elements computed styles.

```js
// grab a DOM element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// entries returns an iterable of the items
const iterableStyles = allComputedStyles.entries();

// returns a two item array with align-content as the first item and CSSStyleValue as the second
console.log(iterableStyles.next().value);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
