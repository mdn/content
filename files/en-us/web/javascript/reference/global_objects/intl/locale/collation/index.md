---
title: Intl.Locale.prototype.collation
short-title: collation
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.collation
sidebar: jsref
---

The **`collation`** accessor property of {{jsxref("Intl.Locale")}} instances returns the [collation type](https://www.unicode.org/reports/tr35/tr35-collation.html#CLDR_Collation) for this locale, which is used to order strings according to the locale's rules.

## Description

Collation is the process of ordering strings of characters. It is used whenever strings must be sorted and placed into a certain order, from search query results to ordering records in a database. While the idea of placing strings in order might seem trivial, the idea of order can vary from region to region and language to language. For a list of supported collation types, see [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types).

The `collation` property's value is set at construction time, either through the `co` key of the locale identifier or through the `collation` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`.

The set accessor of `collation` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the collation type can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding a collation type via the locale string

In the [Unicode locale string spec](https://www.unicode.org/reports/tr35/), `collation` is an "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers using the `-u` extension key. To add the collation type to the initial locale identifier string passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor, first add the `-u` extension key if it doesn't exist. Next, add the `-co` extension to indicate that you are adding a collation type. Finally, add the collation type.

```js
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Adding a collation type via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument, which can contain any of several extension types, including collation types. Set the `collation` property of the configuration object to your desired collation type, and then pass it into the constructor.

```js
const locale = new Intl.Locale("zh-Hant", { collation: "zhuyin" });
console.log(locale.collation); // "zhuyin"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.getCollations()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations)
