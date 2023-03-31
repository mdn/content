---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
page-type: javascript-class
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

## Instance properties

These properties are defined on `Intl.PluralRules.prototype` and shared by all `Intl.PluralRules` instances.

- {{jsxref("Object/constructor", "Intl.PluralRules.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Intl.PluralRules` instances, the initial value is the {{jsxref("Intl/PluralRules/PluralRules", "Intl.PluralRules")}} constructor.
- `Intl.PluralRules.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Intl.PluralRules"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Intl/PluralRules/resolvedOptions", "Intl.PluralRules.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.
- {{jsxref("Intl/PluralRules/select", "Intl.PluralRules.prototype.select()")}}
  - : Returns a string indicating which plural rule to use for locale-aware formatting.
- {{jsxref("Intl/PluralRules/selectRange", "Intl.PluralRules.prototype.selectRange()")}}
  - : This method receives two values and returns a string indicating which plural rule to use for locale-aware formatting.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl")}}
- [A polyfill of `Intl.PluralRules` in FormatJS](https://formatjs.io/docs/polyfills/intl-pluralrules/)
