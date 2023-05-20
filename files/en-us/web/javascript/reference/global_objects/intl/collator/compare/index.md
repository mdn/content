---
title: Intl.Collator.prototype.compare()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.Collator.compare
---

{{JSRef}}

The **`compare()`** method of {{jsxref("Intl.Collator")}} instances compares two
strings according to the sort order of this collator object.

{{EmbedInteractiveExample("pages/js/intl-collator-prototype-compare.html")}}

## Syntax

```js-nolint
compare(string1, string2)
```

### Parameters

- `string1`, `string2`
  - : The strings to compare against each other.

## Description

The `compare` getter function returns a number indicating how
`string1` and `string2` compare to each
other according to the sort order of this {{jsxref("Intl.Collator")}} object: a negative
value if `string1` comes before `string2`;
a positive value if `string1` comes after
`string2`; 0 if they are considered equal.

## Examples

### Using compare for array sort

Use the `compare` getter function for sorting arrays. Note that the function
is bound to the collator from which it was obtained, so it can be passed directly to
{{jsxref("Array.prototype.sort()")}}.

```js
const a = ["Offenbach", "Österreich", "Odenwald"];
const collator = new Intl.Collator("de-u-co-phonebk");
a.sort(collator.compare);
console.log(a.join(", ")); // "Odenwald, Österreich, Offenbach"
```

### Using compare for array search

Use the `compare` getter function for finding matching strings in arrays:

```js
const a = ["Congrès", "congres", "Assemblée", "poisson"];
const collator = new Intl.Collator("fr", {
  usage: "search",
  sensitivity: "base",
});
const s = "congres";
const matches = a.filter((v) => collator.compare(v, s) === 0);
console.log(matches.join(", ")); // "Congrès, congres"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Collator")}}
- {{jsxref("String.prototype.localeCompare()")}}
