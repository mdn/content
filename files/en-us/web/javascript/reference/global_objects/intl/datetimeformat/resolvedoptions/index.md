---
title: Intl.DateTimeFormat.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions
tags:
  - DateTimeFormat
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.DateTimeFormat.resolvedOptions
---
{{JSRef}}

The **`Intl.DateTimeFormat.prototype.resolvedOptions()`**
method returns a new object with properties reflecting the locale and date and time
formatting options computed during initialization of this {{jsxref("Intl.DateTimeFormat")}}
object.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-resolvedoptions.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
resolvedOptions()
```

### Return value

A new object with properties reflecting the locale and date and time formatting options
computed during the initialization of the given {{jsxref("Intl.DateTimeFormat")}} object.

## Description

The resulting object has the following properties:

- `locale`
  - : The BCP 47 language tag for the locale actually used. If any Unicode extension
    values were requested in the input BCP 47 language tag that led to this locale,
    the key-value pairs that were requested and are supported for this locale are
    included in `locale`.
- `calendar`
  - : E.g. "gregory"
- `numberingSystem`
  - : The values requested using the Unicode extension keys `"ca"` and
    `"nu"` or filled in as default values.
- `timeZone`
  - : The value provided for this property in the `options` argument;
    {{jsxref("undefined")}} (representing the runtime's default time zone) if none was
    provided. Warning: Applications should not rely on {{jsxref("undefined")}} being
    returned, as future versions may return a {{jsxref("String")}} value identifying
    the runtime’s default time zone instead.
- `hour12`
  - : The value provided for this property in the `options` argument or
    filled in as a default.
- `weekday`, `era`, `year`, `month`, `day`, `hour`, `minute`, `second`, `timeZoneName`
  - : The values resulting from format matching between the corresponding properties in
    the `options` argument and the available combinations and
    representations for date-time formatting in the selected locale. Some of these
    properties may not be present, indicating that the corresponding components will
    not be represented in formatted output.

## Examples

### Using the resolvedOptions method

```js
var germanFakeRegion = new Intl.DateTimeFormat('de-XX', { timeZone: 'UTC' });
var usedOptions = germanFakeRegion.resolvedOptions();

usedOptions.locale;          // "de"
usedOptions.calendar;        // "gregory"
usedOptions.numberingSystem; // "latn"
usedOptions.timeZone;        // "UTC"
usedOptions.month;           // "numeric"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
