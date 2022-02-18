---
title: Intl.DurationFormat.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/formatToParts
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - DurationFormat
  - Format
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DurationFormat.formatToParts
---
{{JSRef}} {{SeeCompatTable}}

The **`Intl.DurationFormat.prototype.formatToParts()`** method formats a
duration according to the locale and formatting options of this
{{jsxref("Intl.DurationFormat")}} object.

## Syntax

```js
formatToParts(duration)
```

### Parameters

- `duration`
  - : The duration to be formatted. This could either be a Temporal.Duration object or a string or options bag that can be converted into one.


## Description

The `format` getter function formats a duration into a {{jsxref("Array")}} containing the formatted duration in parts, according to the locale and formatting options of this {{jsxref("Intl.DurationFormat")}} object.


## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DurationFormat")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
