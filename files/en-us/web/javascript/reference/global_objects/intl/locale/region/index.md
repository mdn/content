---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.region
---

{{JSRef}}

The **`region`** accessor property of {{jsxref("Intl.Locale")}} instances returns the region of the world (usually a country) associated with this locale.

## Description

Using a region indicates a region- or country- specific preference for a locale identifier, allowing selection for differences between the same locale in, say, different countries. For example, English is spoken in the United Kingdom and the United States of America, but there are differences in spelling and other language conventions between those two countries. Knowing the locale's region helps JavaScript programmers make sure that the content from their sites and applications is correctly displayed when viewed from different areas of the world.

## Examples

### Setting the region in the locale identifier string argument

The region is the third part of a valid Unicode language identifier string, and can be set by adding it to the locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"
```

### Setting the region via the configuration object

The {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor takes a configuration object, which can be used to set the region subtag and property.

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
