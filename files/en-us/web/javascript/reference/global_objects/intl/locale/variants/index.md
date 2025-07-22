---
title: Intl.Locale.prototype.variants
short-title: variants
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/variants
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.variants
sidebar: jsref
---

The **`variants`** accessor property of {{jsxref("Intl.Locale")}} instances returns the variants associated with this locale, as a string of dash (`-`) separated identifiers in the originally specified order.

## Description

Variants are a part of the main language ID. They select variants of a language that the (language, region, script) triple cannot differentiate. Usually, they represent the same language in different eras or different orthographies. For example, German has the `1901` and `1996` orthography variants, which are written as `de-1901` and `de-1996`; the "Early Modern English (1500-1700)" variant is written as `en-emodeng`. The subtag can contain multiple identifiers separated by dashes (`-`). These identifiers are technically unordered, although in practice they often have a semantic hierarchy—for example, the Resian dialect of Slovenian is written as `sl-rozaj`, and the San Giorgio/Bila dialect of Resian is written as `sl-rozaj-biske`. The `variants` property's value is set at construction time, either through the `variants` subtag (following any language, region, and script subtags, if present) of the locale identifier or through the `variants` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`.

The set accessor of `variants` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the variants can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding variants via the locale string

The variants, if present, are the last parts of a valid Unicode language identifier string, and can be added to the initial locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. Note that the variants are not a required part of a locale identifier.

```js
const locale = new Intl.Locale("sl-rozaj-biske");
console.log(locale.variants); // Prints "rozaj-biske"
```

### Adding variants via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument. Set the `variants` property of the configuration object to your desired variants, and then pass it into the constructor.

```js
const locale = new Intl.Locale("sl", { variants: "rozaj-biske" });
console.log(locale.variants); // Prints "rozaj-biske"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [Unicode variant subtag](https://www.unicode.org/reports/tr35/#unicode_variant_subtag_validity) in the Unicode locale data markup language spec
