---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
tags:
  - Class
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - PluralRules
  - Reference
browser-compat: javascript.builtins.Intl.PluralRules
---

{{JSRef}}

The **`Intl.PluralRules`** object enables plural-sensitive formatting and plural-related language rules.

## Constructor

- {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules()")}}
  - : Creates a new `Intl.PluralRules` object.

## Static methods

- {{jsxref("Intl/PluralRules/supportedLocalesOf", "Intl.PluralRules.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.
- {{jsxref("Intl/PluralRules/select", "Intl.PluralRules.prototype.select()")}}
  - : Returns a {{jsxref("String")}} indicating which plural rule to use for locale-aware formatting.

## Examples

### Using locales

This example shows some of the variations in localized plural rules. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

```js
// Arabic has different plural rules

new Intl.PluralRules("ar-EG").select(0);
// → 'zero'
new Intl.PluralRules("ar-EG").select(1);
// → 'one'
new Intl.PluralRules("ar-EG").select(2);
// → 'two'
new Intl.PluralRules("ar-EG").select(6);
// → 'few'
new Intl.PluralRules("ar-EG").select(18);
// → 'many'
```

## Polyfill

[formatjs Intl.PluralRules polyfill](https://formatjs.io/docs/polyfills/intl-pluralrules)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl")}}
