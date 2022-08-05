---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Property
  - Locale
  - Localization
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.Locale.region
---
{{JSRef}}

The **`Intl.Locale.prototype.region`** property is an accessor property that returns the region of the world (usually a country) associated with the locale.

## Description

The region is an essential part of the locale identifier, as it places the locale in a specific area of the world. Knowing the locale's region is vital to identifying differences between locales. For example, English is spoken in the United Kingdom and the United States of America, but there are differences in spelling and other language conventions between those two countries. Knowing the locale's region helps JavaScript programmers make sure that the content from their sites and applications is correctly displayed when viewed from different areas of the world.

## Examples

### Setting the region in the locale identifier string argument

The region is the third part of a valid Unicode language identifier string, and can be set by adding it to the locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. The region is a mandatory part of a

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

- {{jsxref("Intl/Locale", "Intl.Locale")}}
- [Unicode region chart](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_containment_un_m_49.html)
