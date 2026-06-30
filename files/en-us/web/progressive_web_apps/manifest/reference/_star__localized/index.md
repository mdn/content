---
title: "*_localized"
slug: Web/Progressive_web_apps/Manifest/Reference/*_localized
page-type: web-manifest-member
browser-compat: manifests.webapp.localizable_members
sidebar: pwasidebar
---

The `_localized` suffix is added to manifest members to create localized variants of those members. The browser will use the variant that best suits the user based on their language preferences.

## Syntax

```json-nolint
/* Localized text value */
"member_localized": {
  "lang1": text_l10n,
  "lang2": text_l10n,
  "langN": text_l10n,
}

/* Localized image resource */
"member_localized": {
  "lang1": image_l10n,
  "lang2": image_l10n,
  "langN": image_l10n,
}
```

### Values

- `member_localized`
  - : An object specifying localized member variants. For example, `name_localized` would specify localized variants for the [`name`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/name) field.
    - `lang1` ... `lang2` ... `langN`
      - : Each object contains one or more properties with keys equal to a {{glossary("BCP 47 language tag")}} representing a language to provide a variant for. The property values can be one of two types:
        - `text_l10n`
          - : An object or a string containing a text localization; see [text localization](#text_localization).
        - `image_l10n`
          - : An array of objects containing references to localized image resources; see [image localization](#image_localization).

#### Text localization

When the localized variant is providing a localization of a text value, the property values can be objects or strings.

The object representation can have the following properties:

- `value`
  - : A string containing the localized text.
- `dir` {{optional_inline}}
  - : A string representing the text direction of the localized text, used in cases where the required direction of a localized string differs from the default direction set in the manifest (see [`dir`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/dir)). Valid values of `dir` are:
    - `auto`
      - : The default. Specifies that the text direction is unknown. The browser will use heuristics to estimate the display direction of the text.
    - `ltr`
      - : Specifies a left-to-right text direction.
    - `rtl`
      - : Specifies a right-to-left text direction.
- `lang` {{optional_inline}}
  - : A string containing a BCP 47 language tag, used in cases where localized text needs to be presented in a different language from the user's locale.

In cases where the `dir` and `lang` properties do not need to be specified, the shorthand string representation can be used. This consists of a string containing the localized text `value`.

#### Image localization

When the localized variant is providing a localization of an image resource, the property values are arrays containing one or more objects representing image choices.

The exact properties contained within each object will be the same as the properties contained within the objects included with the non-localized versions of the members:

- For `icons_localized`, the objects can have the same properties as the [`icons`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons) member: `src`, `sizes`, `type`, and `purpose`.
- For `shortcuts_localized`, the objects can have the same properties as the [`shortcuts`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts) member: `name`, `short_name`, `description`, `url`, and [`icons`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons).

## Description

The `_localized` suffix, along with the [`lang`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/lang) and [`dir`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/dir) members, are used to create localized manifests.

You can add the `_localized` suffix to a supporting manifest member to create localized variants of that member. The browser will use the variant that best suits the user based on their language preferences. Each property of a localized variant has a key equal to a BCP47 language tag representing the locale language, and a value that represents the localized variant.

Members for which localized variants are supported:

- [`name`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`short_name`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`description`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/description)
- [`icons`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons)
- [`shortcuts`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)

### Localized text

Localized text field properties have values equal to objects or strings.

in this example, the app's default `en-US` language `name` is "Color picker", but we've also specified localized variants in the `name_localized` member. Users that have their primary language preference set to German (`de`), French (`fr`), or Arabic (`ar`) will see the app's name displayed in a more suitable language for them.

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

### Localized images

A localized icon set will look like this:

```json
{
  "icons": [
    {
      "src": "./icons/icon-128.png",
      "sizes": "128x128",
      "type": "image/png"
    }
  ],
  "icons_localized": {
    "de": [
      {
        "src": "./icons/localized_icons/de/icon-128.png",
        "sizes": "128x128",
        "type": "image/png"
      }
    ],
    "ar": [
      {
        "src": "./icons/localized_icons/ar/icon-128.png",
        "sizes": "128x128",
        "type": "image/png"
      }
    ],
    "fr": [
      {
        "src": "./icons/localized_icons/fr/icon-128.png",
        "sizes": "128x128",
        "type": "image/png"
      }
    ]
  }
}
```

If the user has specified a preference for German, Arabic, or French, an entry from the appropriate `icons_localized` member will be used.

The `icons` member specifies the default icon that will be used if no language more suitable for the user's language preferences than the default `lang` is found in the `icons_localized` variants.

## Examples

For complete demos, check out;

- The [PWA manifest localization demo](https://microsoftedge.github.io/Demos/pwa-manifest-localization/) app ([see source code](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-manifest-localization/)).
- Our [Localize an app manifest](/en-US/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest) How to guide.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`dir`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/dir) manifest member
- [`lang`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/lang) manifest member
- [Localize an app manifest](/en-US/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest)
- [Localization support for web app manifests](https://developer.chrome.com/blog/manifest-localization) on developer.chrome.com (2026)
