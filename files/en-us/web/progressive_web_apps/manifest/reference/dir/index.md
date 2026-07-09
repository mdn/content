---
title: dir
slug: Web/Progressive_web_apps/Manifest/Reference/dir
page-type: web-manifest-member
browser-compat: manifests.webapp.dir
sidebar: pwasidebar
---

The `dir` manifest member is used to specify a language directionality for your web application.

> [!NOTE]
> The `dir` manifest member has no effect on manifest localization implemented via [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) members. In such cases, the language is chosen based on the user's browser language settings.

## Syntax

```json-nolint
"dir": "auto"
"dir": "ltr"
"dir": "rtl"
```

### Values

A string representing the app's text direction. Valid values of `dir` are:

- `auto`
  - : The default. Specifies that the text direction is unknown. The browser will use heuristics to infer the display direction of the text.
- `ltr`
  - : Specifies a left-to-right text direction.
- `rtl`
  - : Specifies a right-to-left text direction.

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

- [`lang`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/lang) manifest member
- [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) manifest members
