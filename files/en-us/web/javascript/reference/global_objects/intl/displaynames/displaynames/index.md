---
title: Intl.DisplayNames() constructor
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
tags:
  - Constructor
  - DisplayNames
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Reference
browser-compat: javascript.builtins.Intl.DisplayNames.DisplayNames
---
{{JSRef}}

The **`Intl.DisplayNames()`** constructor creates
{{jsxref("Intl/DisplayNames", "Intl.DisplayNames")}} objects that enable the consistent
translation of language, region and script display names.

{{EmbedInteractiveExample("pages/js/intl-displaynames.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
new Intl.DisplayNames(locales, options)
```

### Parameters

- `locales`

  - : A string with a BCP 47 language tag, or an array of such strings. For the
    general form and interpretation of the `locales`
    argument, see the {{jsxref("Global_Objects/Intl", "Intl",
			"#Locale_identification_and_negotiation", 1)}} page. The following Unicode
    extension key is allowed:

    - `nu`
      - : The numbering system to be used. Possible values include:
        "`arab`", "`arabext`", "`bali`",
        "`beng`", "`deva`", "`fullwide`",
        "`gujr`", "`guru`", "`hanidec`",
        "`khmr`", "`knda`", "`laoo`",
        "`latn`", "`limb`", "`mlym`",
        "`mong`", "`mymr`", "`orya`",
        "`tamldec`", "`telu`", "`thai`",
        "`tibt`".

- `options`

  - : An object with some or all of the following properties:

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are
        "`lookup`" and "`best fit`"; the default is
        "`best fit`". For information about this option, see the
        {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} page.
    - `style`

      - : The formatting style to use, the default is "`long`".

        - "`narrow`"
        - "`short`"
        - "`long`"

    - `type`

      - : The type to use.

        - "`language`"
        - "`region`"
        - "`script`"
        - "`currency`"

    - `fallback`

      - : The fallback to use, the default is "`code`".

        - "`code`"
        - "`none`"

## Examples

### Basic usage

In basic use without specifying a locale, a formatted string in the default locale and
with default options is returned.

```js
console.log((new Intl.DisplayNames([], {type: 'language'})).of('US'));
// Expected output: 'us'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DisplayNames")}}
- {{jsxref("Intl.supportedValuesOf()")}}
- {{jsxref("Global_Objects/Intl", "Intl")}}
