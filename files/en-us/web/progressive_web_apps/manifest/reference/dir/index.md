---
title: dir
slug: Web/Progressive_web_apps/Manifest/Reference/dir
page-type: web-manifest-member
browser-compat: manifests.webapp.dir
sidebar: pwasidebar
---

The `dir` manifest member is used to specify a default language direction for your web application, which will be used unless overriden by a different `dir` value found in a [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) member.

## Syntax

```json-nolint
"dir": "auto"
"dir": "ltr"
"dir": "rtl"
```

### Values

A string representing the app's text direction. Valid values of `dir` are:

- `auto`
  - : The default. Specifies that the text direction is unknown. The browser will use heuristics to estimate the display direction of the text.
- `ltr`
  - : Specifies a left-to-right text direction.
- `rtl`
  - : Specifies a right-to-left text direction.

## Examples

### Basic usage

in this example, the app's default `lang` is `en-US`, and its default `dir` is `ltr`. Its default `name` is "Color picker", but we've also specified localized variants in the `name_localized` member. Users that have their primary language preference set to German (`de`), French (`fr`), or Arabic (`ar`) will see the app's name displayed in a more suitable language for them.

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

- [`lang`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/lang) manifest member
- [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) manifest members
