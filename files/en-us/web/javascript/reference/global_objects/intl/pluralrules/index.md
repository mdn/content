---
title: Intl.PluralRules
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
page-type: javascript-class
browser-compat: javascript.builtins.Intl.PluralRules
---

{{JSRef}}

The **`Intl.PluralRules`** object enables plural-sensitive formatting and plural-related language rules.

## Concepts and usage

Languages use different patterns for expressing both plural numbers of items (cardinal numbers) and for expressing the order of items (ordinal numbers).
The plural rules methods [`PluralRules.select()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/select) and [`PluralRules.selectRange()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) return tags that represent the form of a particular cardinal or ordinal number (or range) in a specified language.

In English there are two forms for expressing cardinal numbers: one for the singular "item" (1 hour, 1 dog, 1 fish) and the other for zero or any other number of "items" (0 hours, 2 lemmings, 100000.5 fish).
The `PluralRules.select()` method returns the tag `"one"` for the singular case, and `"other"` for all other cardinal numbers.
Code can use the returned tag to format strings appropriately.
For example: "1 dog _is_ happy" and "10 dogs _are_ happy", or "1 fish _is_ golden" and "10 fish _are_ golden".

For ordinal numbers English has four forms: "th", "st", "nd", "rd", giving the sequence: 0th, 1st, 2nd, 3rd, 4th, 5th, ..., 21st, 22nd, 23rd, 24th, 25th, and so on.
Again, `PluralRules.select()` returns tags to represent each of the allowed forms: `one` for "st" numbers (1, 21, 31, ...), `two` for "nd" numbers (2, 22, 32, ...), `few` for "rd" numbers (3, 33, 43, ...), and `other` for "th" numbers (0, 4-20, etc.).

Other languages have their own rules and forms.
Chinese has only one form for expressing cardinal numbers and another for ordinal numbers: in both cases `ther` is returned.
Arabic has six forms for cardinal numbers and only one for ordinal numbers.
The full set of tags that might be returned are: `zero`, `one`, `two`, `few`, `many`, `other` (the "general" plural form, used if the language only has one form).

For more information about the rules and how they are used see [Plural Rules](https://cldr.unicode.org/index/cldr-spec/plural-rules).
For a list of the rules and how they apply for different languages see the [LDML Language Plural Rules](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html).

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

This example shows some of the variations in localized plural rules. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the [constructor `locales`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules#locales) argument:

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
