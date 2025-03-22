---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
page-type: javascript-class
browser-compat: javascript.builtins.Intl.ListFormat
---

{{JSRef}}

The **`Intl.ListFormat`** object enables language-sensitive list formatting.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat", "taller")}}

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

## Constructor

- {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : Creates a new `Intl.ListFormat` object.

## Static methods

- {{jsxref("Intl/ListFormat/supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance properties

These properties are defined on `Intl.ListFormat.prototype` and shared by all `Intl.ListFormat` instances.

- {{jsxref("Object/constructor", "Intl.ListFormat.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Intl.ListFormat` instances, the initial value is the {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat")}} constructor.
- `Intl.ListFormat.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Intl.ListFormat"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
  - : Returns a language-specific formatted string representing the elements of the list.
- {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}}
  - : Returns an array of objects representing the different components that can be used to format a list of values in a locale-aware fashion.
- {{jsxref("Intl/ListFormat/resolvedOptions", "Intl.ListFormat.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and style formatting options computed during the construction of the current `Intl.ListFormat` object.

## Examples

### Using format

The following example shows how to create a List formatter using the English language.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
```

### Using formatToParts

The following example shows how to create a List formatter returning formatted parts

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(
  new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  }).formatToParts(list),
);

// [ { "type": "element", "value": "Motorcycle" },
//   { "type": "literal", "value": ", " },
//   { "type": "element", "value": "Bus" },
//   { "type": "literal", "value": ", and " },
//   { "type": "element", "value": "Car" } ];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Intl.ListFormat` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-listformat/)
- {{jsxref("Intl")}}
