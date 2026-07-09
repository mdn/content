---
title: lang
slug: Web/Progressive_web_apps/Manifest/Reference/lang
page-type: web-manifest-member
browser-compat: manifests.webapp.lang
sidebar: pwasidebar
---

The `lang` manifest member is used to specify a language for your web application.

> [!NOTE]
> The `lang` manifest member has no effect on manifest localization implemented via [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) members. In such cases, the language is chosen based on the user's browser language settings.

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

In this example, the app's `lang` is set as `en-US`, and its default `dir` is `ltr`.

```json
{
  "lang": "en-US",
  "dir": "ltr",
  ...
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`dir`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/dir) manifest member
- [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) manifest members
