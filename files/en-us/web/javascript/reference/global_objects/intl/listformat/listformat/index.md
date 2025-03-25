---
title: Intl.ListFormat() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
page-type: javascript-constructor
browser-compat: javascript.builtins.Intl.ListFormat.ListFormat
---

{{JSRef}}

The **`Intl.ListFormat()`** constructor creates {{jsxref("Intl.ListFormat")}} objects.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat() constructor", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## Syntax

```js-nolint
new Intl.ListFormat()
new Intl.ListFormat(locales)
new Intl.ListFormat(locales, options)
```

> **Note:** `Intl.ListFormat()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag or an {{jsxref("Intl.Locale")}} instance, or an array of such locale identifiers. The runtime's default locale is used when `undefined` is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : An object containing the following properties, in the order they are retrieved (all of them are optional):
    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are `"lookup"` and `"best fit"`; the default is `"best fit"`. For information about this option, see [Locale identification and negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `type`
      - : Indicates the type of grouping. Possible values are:
        - `"conjunction"` (default)
          - : For "and"-based grouping of the list items: "A, B, and C"
        - `"disjunction"`
          - : For "or"-based grouping of the list items: "A, B, or C"
        - `"unit"`
          - : For grouping the list items as a compound unit (neither "and"-based nor "or"-based): "A, B, C"
    - `style`
      - : The grouping style (for example, whether list separators and conjunctions are included). Possible values are:
        - `"long"` (default)
          - : The typical list format. For example, "A, B, and C"
        - `"short"`
          - : The spacing, the length or presence of a conjunction, and the separators may change. Usually, you would want the input elements to be abbreviated too. For example, "A, B, & C"
        - `"narrow"`
          - : Where possible, the list format is further abbreviated, so that the output is as short as possible. For example, "A, B, C"

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `locales` or `options` contain invalid values.

## Examples

### Using format

The following example shows how to create a List formatter using the English language.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { type: "disjunction" }).format(list));
// Motorcycle, Bus or Car
```

### Oxford comma

[Oxford comma](https://en.wikipedia.org/wiki/Serial_comma) is a comma placed immediately before the coordinating conjunction (usually "and" or "or") in a list of three or more terms. Somewhat controversially, the `en-US` locale uses the Oxford comma, while the `en-GB` locale does not.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(new Intl.ListFormat("en-GB", { type: "conjunction" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-US", { type: "conjunction" }).format(list));
// Motorcycle, Bus, and Car
```

### Unit formatting

Use `style: "unit"` to format the list items as a compound unit. In fact, {{jsxref("Intl.DurationFormat")}} uses unit-style list formatting under the hood to format durations.

```js
const marathon = [
  [42, "kilometer"],
  [195, "meter"],
];

console.log(
  new Intl.ListFormat("en-US", { type: "unit" }).format(
    marathon.map((component) =>
      component[0].toLocaleString("en-US", {
        style: "unit",
        unit: component[1],
        unitDisplay: "long",
      }),
    ),
  ),
);
// 42 kilometers, 195 meters
```

### Short and narrow style

The `"short"` and `"narrow"` styles are useful for compact representations of lists.

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(new Intl.ListFormat("en-US", { style: "short" }).format(list));
// Motorcycle, Bus, & Car

console.log(new Intl.ListFormat("en-US", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car

console.log(new Intl.ListFormat("en-GB", { style: "short" }).format(list));
// Motorcycle, Bus and Car

console.log(new Intl.ListFormat("en-GB", { style: "narrow" }).format(list));
// Motorcycle, Bus, Car
```

The input elements are not transformed, but you will often want to abbreviate them too.

```js
const marathon = [
  [42, "kilometer"],
  [195, "meter"],
];

function formatDistance(locale, distance, style) {
  return new Intl.ListFormat(locale, { type: "unit", style }).format(
    marathon.map((component) =>
      component[0].toLocaleString(locale, {
        style: "unit",
        unit: component[1],
        unitDisplay: style,
      }),
    ),
  );
}

console.log(formatDistance("en-US", marathon, "long"));
// 42 kilometers, 195 meters
console.log(formatDistance("en-US", marathon, "short"));
// 42 km, 195 m
console.log(formatDistance("en-US", marathon, "narrow"));
// 42km 195m
```

### Selection of conjunction

The conjunction word used may depend on the list items' string values. For example, in Spanish, the conjunction is `"y"` for most words, but `"e"` for words starting with the vowel `"i"`.

```js
const words = ["fuerte", "indomable"];
const formatter = new Intl.ListFormat("es-ES", { type: "conjunction" });

console.log(formatter.format(words));
// fuerte e indomable
console.log(formatter.format(words.toReversed()));
// indomable y fuerte
```

The algorithm used to determine the conjunction is not perfect (for example, it can't always tell a word's pronunciation from its spelling), but it should work in the general case.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Intl")}}
