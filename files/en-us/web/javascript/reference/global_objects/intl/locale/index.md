---
title: Intl.Locale
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale
page-type: javascript-class
browser-compat: javascript.builtins.Intl.Locale
---

{{JSRef}}

The **`Intl.Locale`** object is a standard built-in property of the Intl object that represents a Unicode locale identifier.

{{EmbedInteractiveExample("pages/js/intl-locale.html")}}

## Description

The **`Intl.Locale`** object was created to allow for easier manipulation of Unicode locales. Unicode represents locales with a string, called a _locale identifier_. The locale identifier consists of a _language identifier_ and _extension tags_. Language identifiers are the core of the locale, consisting of _language_, _script_, and _region subtags_. Additional information about the locale is stored in the optional _extension tags_. Extension tags hold information about locale aspects such as calendar type, clock type, and numbering system type.

Traditionally, the Intl API used strings to represent locales, just as Unicode does. This is a simple and lightweight solution that works well. Adding a Locale class, however, adds ease of parsing and manipulating the language, script, and region, as well as extension tags. The following properties of `Intl.Locale` correspond to Unicode locale identifier subtags:

| Property                                                     | Corresponding subtag         |
| ------------------------------------------------------------ | ---------------------------- |
| {{jsxref("Intl/Locale/language", "language")}}               | `language` (first part)      |
| {{jsxref("Intl/Locale/script", "script")}}                   | `script` (second part)       |
| {{jsxref("Intl/Locale/region", "region")}}                   | `region` (second/third part) |
| {{jsxref("Intl/Locale/calendar", "calendar")}}               | `ca` (extension)             |
| {{jsxref("Intl/Locale/caseFirst", "caseFirst")}}             | `kf` (extension)             |
| {{jsxref("Intl/Locale/collation", "collation")}}             | `co` (extension)             |
| {{jsxref("Intl/Locale/hourCycle", "hourCycle")}}             | `hc` (extension)             |
| {{jsxref("Intl/Locale/numberingSystem", "numberingSystem")}} | `nu` (extension)             |
| {{jsxref("Intl/Locale/numeric", "numeric")}}                 | `kn` (extension)             |

The information above is exactly provided as-is when the `Locale` object is constructed, without consulting any external database. The `Intl.Locale` object additionally provides some methods that return information about the locale's real-world information, such as available calendars, collations, and numbering systems.

## Constructor

- {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}
  - : Creates a new `Locale` object.

## Instance properties

These properties are defined on `Intl.Locale.prototype` and shared by all `Intl.Locale` instances.

- {{jsxref("Intl/Locale/baseName", "Intl.Locale.prototype.baseName")}}
  - : Returns basic, core information about the `Locale` in the form of a substring of the complete data string.
- {{jsxref("Intl/Locale/calendar", "Intl.Locale.prototype.calendar")}}
  - : Returns the part of the `Locale` that indicates the Locale's calendar era.
- {{jsxref("Intl/Locale/caseFirst", "Intl.Locale.prototype.caseFirst")}}
  - : Returns whether case is taken into account for the locale's collation rules.
- {{jsxref("Intl/Locale/collation", "Intl.Locale.prototype.collation")}}
  - : Returns the collation type for the `Locale`, which is used to order strings according to the locale's rules.
- {{jsxref("Object/constructor", "Intl.Locale.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Intl.Locale` instances, the initial value is the {{jsxref("Intl/Locale/Locale", "Intl.Locale")}} constructor.
- {{jsxref("Intl/Locale/hourCycle", "Intl.Locale.prototype.hourCycle")}}
  - : Returns the time keeping format convention used by the locale.
- {{jsxref("Intl/Locale/language", "Intl.Locale.prototype.language")}}
  - : Returns the language associated with the locale.
- {{jsxref("Intl/Locale/numberingSystem", "Intl.Locale.prototype.numberingSystem")}}
  - : Returns the numeral system used by the locale.
- {{jsxref("Intl/Locale/numeric", "Intl.Locale.prototype.numeric")}}
  - : Returns whether the locale has special collation handling for numeric characters.
- {{jsxref("Intl/Locale/region", "Intl.Locale.prototype.region")}}
  - : Returns the region of the world (usually a country) associated with the locale.
- {{jsxref("Intl/Locale/script", "Intl.Locale.prototype.script")}}
  - : Returns the script used for writing the particular language used in the locale.
- `Intl.Locale.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Intl.Locale"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}
  - : Returns an {{jsxref("Array")}} of available calendar identifiers, according to the locale's rules.
- {{jsxref("Intl/Locale/getCollations", "Intl.Locale.prototype.getCollations()")}}
  - : Returns an {{jsxref("Array")}} of the collation types for the `Locale`.
- {{jsxref("Intl/Locale/getHourCycles", "Intl.Locale.prototype.getHourCycles()")}}
  - : Returns an {{jsxref("Array")}} of hour cycle identifiers, indicating either the 12-hour clock ("h12"), the Japanese 12-hour clock ("h11"), the 24-hour clock ("h23"), or the unused format "h24".
- {{jsxref("Intl/Locale/getNumberingSystems", "Intl.Locale.prototype.getNumberingSystems()")}}
  - : Returns an {{jsxref("Array")}} of numbering system identifiers available according to the locale's rules.
- {{jsxref("Intl/Locale/getTextInfo", "Intl.Locale.prototype.getTextInfo()")}}
  - : Returns the part indicating the ordering of characters `ltr` (left-to-right) or `rtl` (right-to-left).
- {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}}
  - : Returns an {{jsxref("Array")}} of time zone identifiers, associated with the `Locale`.
- {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}
  - : Returns [UTS 35's Week Elements](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Patterns_Week_Elements) according to the locale rules.
- {{jsxref("Intl/Locale/maximize", "Intl.Locale.prototype.maximize()")}}
  - : Gets the most likely values for the language, script, and region of the locale based on existing values.
- {{jsxref("Intl/Locale/minimize", "Intl.Locale.prototype.minimize()")}}
  - : Attempts to remove information about the locale that would be added by calling {{jsxref("Intl/Locale/maximize", "maximize()")}}.
- {{jsxref("Intl/Locale/toString", "Intl.Locale.prototype.toString()")}}
  - : Returns the Locale's full locale identifier string.

## Examples

### Basic usage

At its very simplest, the {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} constructor takes a locale identifier string as its argument:

```js
const us = new Intl.Locale("en-US");
```

### Using the Locale constructor with an options object

The constructor also takes an optional configuration object argument, which can contain any of several extension types. For example, set the {{jsxref("Intl/Locale/hourCycle", "hourCycle")}} property of the configuration object to your desired hour cycle type, and then pass it into the constructor:

```js
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Intl.Locale` in FormatJS](https://formatjs.io/docs/polyfills/intl-locale/)
- {{jsxref("Intl")}}
- [Canonical Unicode Locale Identifiers](https://www.unicode.org/reports/tr35/#Canonical_Unicode_Locale_Identifiers) in the Unicode locale data markup language spec
