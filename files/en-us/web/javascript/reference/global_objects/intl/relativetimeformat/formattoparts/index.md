---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
  - RelativeTimeFormat
browser-compat: javascript.builtins.Intl.RelativeTimeFormat.formatToParts
---
{{JSRef}}

The **`Intl.RelativeTimeFormat.prototype.formatToParts()`** method returns an {{jsxref("Array")}} of objects representing the relative time format in parts that can be used for custom locale-aware formatting.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-formattoparts.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
formatToParts(value, unit)
```

### Parameters

- `value`
  - : Numeric value to use in the internationalized relative time message.
- `unit`
  - : Unit to use in the relative time internationalized message. Possible values are: "`year`", "`quarter`", "`month`", "`week`", "`day`", "`hour`", "`minute`", "`second`". Plural forms are also permitted.

### Return value

An {{jsxref("Array")}} of objects containing the formatted relative time in parts.

## Description

The `Intl.RelativeTimeFormat.prototype.formatToParts` method is a version of the format method which it returns an array of objects which represent "parts" of the object, separating the formatted number into its consituent parts and separating it from other surrounding text. These objects have two properties: type a `NumberFormat` formatToParts type, and value, which is the String which is the component of the output. If a "part" came from `NumberFormat`, it will have a unit property which indicates the unit being formatted; literals which are part of the larger frame will not have this property.

## Examples

### Using formatToParts

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using the day unit
rtf.formatToParts(-1, "day");
// > [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// > [{ type: "literal", value: "in " },
// >  { type: "integer", value: "100", unit: "day" },
// >  { type: "literal", value: " days" }]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}
