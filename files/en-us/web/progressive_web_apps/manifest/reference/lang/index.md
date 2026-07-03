---
title: lang
slug: Web/Progressive_web_apps/Manifest/Reference/lang
page-type: web-manifest-member
browser-compat: manifests.webapp.lang
sidebar: pwasidebar
---

The `lang` manifest member is used to specify a default language for your web application, which will be used unless overriden by a different `lang` value found in a [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) member.

## Syntax

```json-nolint
"lang": "en-US"
"lang": "ja"
"lang": "uk"
```

### Values

a {{glossary("BCP 47 language tag")}} representing the app's default language.

## Examples

### Basic usage

In this example, the app's default `lang` is `en-US` and default `dir` is `ltr`.
The default `name` is "Color picker", but we have also defined localized variants in the `name_localized` member. Users that have their primary language preference set to German (`de`), French (`fr`), or Arabic (`ar`) will see the app's name displayed in their selected language.

The French variant is specified as French Canadian (`fr-CA`) in its `lang` property, with a direction (`dir`) of `ltr`, while the Arabic variant has its `dir` specified as `rtl`. The German variant doesn't need its `lang` or `dir` specified, so its value is a string containing the localized text.

```json
{
  "lang": "en-US",
  "dir": "ltr",
  "name": "Color Picker",
  "name_localized": {
    "de": "Farbwähler",
    "fr": { "value": "Sélecteur de Couleur", "lang": "fr-CA", "dir": "ltr" },
    "ar": { "value": "`منتقي` `الألوان`", "dir": "rtl" }
  }
}
```

The `lang` and `dir` members define a default language and language direction that will be assumed by the browser if no language more suitable for the user's preferences is found in the `name_localized` variants. In such cases, the `name` member is used.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`dir`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/dir) manifest member
- [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) manifest members
