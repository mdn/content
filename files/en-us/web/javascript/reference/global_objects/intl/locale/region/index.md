---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Intl.Locale.region
---

{{JSRef}}

The **`region`** accessor property of {{jsxref("Intl.Locale")}} instances returns the region of the world (usually a country) associated with this locale.

## Syntax

### Return value

The getter for `region` returns a string representing the region subtag of the locale, without any other subtags such as language or script. It returns `undefined` if the locale does not have a region subtag.

There is no setter for `region`, so you cannot change this property's value using assignment.

## Description

The region is an essential part of the locale identifier, as it places the locale in a specific area of the world. Knowing the locale's region is vital to identifying differences between locales. For example, English is spoken in the United Kingdom and the United States of America, but there are differences in spelling and other language conventions between those two countries. Knowing the locale's region helps JavaScript programmers make sure that the content from their sites and applications is correctly displayed when viewed from different areas of the world.

## Examples

### Setting the region in the locale identifier string argument

The region is the third part of a valid Unicode language identifier string, and can be set by adding it to the locale identifier string that is passed into the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor. Note that the region is not a required part of a locale identifier.

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
