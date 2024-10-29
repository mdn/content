---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.region
---

{{JSRef}}

The **`region`** accessor property of {{jsxref("Intl.Locale")}} instances returns the region of the world (usually a country) associated with this locale.

## Description

Region is one of the core attributes of a locale. It allows selection for differences between the same language in, say, different countries. For example, English is spoken in the United Kingdom and the United States of America, but there are differences in spelling and other language conventions between those two countries. Knowing the locale's region helps JavaScript programmers make sure that the content from their sites and applications is correctly displayed when viewed from different areas of the world. The `region` property's value is set at construction time, either through the `region` subtag (third part if `script` is present, second part otherwise) of the locale identifier or through the `region` option of the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The latter takes priority if they are both present; and if neither is present, the property has value `undefined`.

The set accessor of `region` is `undefined`. You cannot change this property directly.

## Examples

Like other locale subtags, the region can be added to the {{jsxref("Intl.Locale")}} object via the locale string, or a configuration object argument to the constructor.

### Adding a region via the locale string

The region, if present, is the third part (if `script` is present, second part otherwise) of a valid Unicode language identifier string, and can be added to the initial locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. Note that the region is not a required part of a locale identifier.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"
```

### Adding a region via the configuration object argument

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor has an optional configuration object argument. Set the `region` property of the configuration object to your desired region, and then pass it into the constructor.

```js
const locale = new Intl.Locale("fr-Latn", { region: "FR" });
console.log(locale.region); // Prints "FR"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.Locale")}}
- [Unicode region chart](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_containment_un_m_49.html)
