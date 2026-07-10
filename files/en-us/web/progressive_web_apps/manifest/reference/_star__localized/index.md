---
title: "*_localized"
slug: Web/Progressive_web_apps/Manifest/Reference/*_localized
page-type: web-manifest-member
browser-compat: manifests.webapp.localized_members
sidebar: pwasidebar
---

The `_localized` suffix is added to manifest members to create localized variants of those members. The browser will use the variant that best suits the user based on their browser language settings.

## Syntax

```json-nolint
/* Localized text values */
"member_localized": {
  "lang1": text_l10n,
  "lang2": text_l10n,
  "langN": text_l10n,
}

/* Localized icon resources */
"member_localized": {
  "lang1": icon_l10n,
  "lang2": icon_l10n,
  "langN": icon_l10n,
}
```

### Values

- `member_localized`
  - : An object specifying localized member variants. For example, `name_localized` would specify localized variants for the [`name`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/name) field.
    - `lang1` ... `lang2` ... `langN`
      - : Each object contains one or more properties with keys equal to a {{glossary("BCP 47 language tag")}} representing a language to provide a variant for. The property values can be one of two types:
        - `text_l10n`
          - : An object or a string containing a text localization; see [text localization](#text_localization).
        - `icon_l10n`
          - : An array of objects containing references to localized icon resources; see [icon localization](#icon_localization).

#### Text localization

When the localized variant provides a localization of a text value, the property values can be objects or strings.

The object representation can have the following properties:

- `value`
  - : A string containing the localized text.
- `dir` {{optional_inline}}
  - : A string representing the text direction of the localized text. Valid values of `dir` are:
    - `auto`
      - : The default. Specifies that the text direction is unknown. The browser will use heuristics to estimate the display direction of the text.
    - `ltr`
      - : Specifies a left-to-right text direction.
    - `rtl`
      - : Specifies a right-to-left text direction.
- `lang` {{optional_inline}}
  - : A string containing a BCP 47 language tag, used in cases where localized text needs to be presented in a different language from the user's locale.

In cases where the `dir` and `lang` properties do not need to be specified, a shorthand string representation can be used, which contains the localized text `value`.

#### Icon localization

The `icons_localized` member object property values are arrays containing one or more objects representing localized icon choices.

Each object contains the same properties as the non-localized [`icons`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons) member: `src`, `sizes`, `type`, and `purpose`.

#### Shortcut localization

The [`shortcuts`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts) member can be localized, but this is not done by specifying a `shortcuts_localized` member. Instead, you provide `*_localized` versions of the `name`, `short_name`, `description`, and [`icons`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons) members nested inside the `shortcut` member.

## Description

The `_localized` suffix is used to create localized manifests.

You can add the `_localized` suffix to a supporting manifest member to create localized variants of that member. The browser will use the variant that best suits the user based on their browser language settings. Each property of a localized variant has a key equal to a BCP47 language tag representing the locale language, and a value that represents the localized variant.

If one of the keys matches the user's browser language setting, that variant will be used. If not, the non-prefixed manifest member value will be used.

Members for which localized variants are supported (both at the manifest top level, and inside the [`shortcuts`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts) member):

- [`name`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`short_name`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`description`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/description)
- [`icons`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons)

### Localized text

Localized text field properties have values equal to objects or strings.

For example:

```json
{
  ...
  "name": "The SuperSausage sausage app",
  "name_localized": {
    "fr": "L'application de saucisse SuperSausage",
    "de": "Die SuperWurst-App",
    "ur": {
      "dir": "rtl",
      "value": "سپر ساسیج ساسیج ایپ"
    },
    "ja": "スーパーソーセージのソーセージアプリ"
  }
  ...
}
```

If the user has their browser language set to `fr`, `de`, `ur`, or `ja`, the browser will use the appropriate name found in the `name_localized` member for that language as the app's `name`. If not, the browser will use the name found in the `name` member.

The `fr`, `de`, and `ja` members have string values representing the localized text for that language. The `ur` member needs to specify an RTL directionality, so its value is an object containing both the localized text (in the `value` property) and the directionality (in the `dir` property).

Sometimes you will want to specify a different `lang` value inside a localized variant to the actual language of that variant. For example:

```json
}
  ...
  "short_name": "SuperSausage",
  "short_name_localized": {
    "fr": {
      "lang": "en-US",
      "value": "SuperSausage"
    },
    "de": "SuperWurst",
    "ur": "سپر ساسیج",
    "ja": "スーパーソーセージ"
  },
  ...
}
```

In this case, our French audience knows our app by its English brand name — "SuperSausage" — and we want to specify that this should be handled as English rather than French (for example, for the purposes of pronunciation). This is done by specifying a `lang` value of `en-US` inside the variant.

### Localized icons

A localized `icons` set consists of an object containing multiple arrays, each one containing objects representing the icon choices for a different locale:

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

If the user has their browser language set to `de`, `ar`, or `fr`, an appropriate entry from the `icons_localized` member will be used. If not, the icon referenced in the `icons` member will be used.

### Localized shortcuts

Localized shortcut sub-members are provided inside the `shortcuts` member.

For example:

```json
"shortcuts": [
  {
    "name": "Open dashboard",
    "name_localized": {
      "en": { "value": "Open dashboard", "lang": "en", "dir": "ltr" },
      "de": { "value": "Dashboard öffnen", "lang": "de", "dir": "ltr" },
      "ar": { "value": "فتح لوحة المعلومات", "lang": "ar", "dir": "rtl" }
    },
    "short_name": "Dashboard",
    "short_name_localized": {
      "en": { "value": "Dashboard", "lang": "en", "dir": "ltr" },
      "de": { "value": "Dashboard", "lang": "de", "dir": "ltr" },
      "ar": { "value": "لوحة", "lang": "ar", "dir": "rtl" }
    },
    "description": "Go to your dashboard.",
    "description_localized": {
      "en": { "value": "Go to your dashboard.", "lang": "en", "dir": "ltr" },
      "de": { "value": "Zum Dashboard wechseln.", "lang": "de", "dir": "ltr" },
      "ar": { "value": "انتقل إلى لوحتك.", "lang": "ar", "dir": "rtl" }
    },
    "url": "./dashboard",
    "icons": [
      { "src": "./icons/shortcut-dashboard.png", "sizes": "96x96", "type": "image/png", "purpose": "any" }
    ],
    "icons_localized": {
      "en": [
        { "src": "./icons/icon-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "de": [
        { "src": "./icons/localized_icons/de/Iconka-Meow-Cat-purr.128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "ar": [
        { "src": "./icons/localized_icons/ar/black_cat-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ]
    }
  }
],
```

## Examples

For examples, check out;

- The [PWA manifest localization demo](https://microsoftedge.github.io/Demos/pwa-manifest-localization/) app ([see source code](https://github.com/MicrosoftEdge/Demos/tree/main/pwa-manifest-localization/)).
- Our [Localize an app manifest](/en-US/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest) How to guide.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Localize an app manifest](/en-US/docs/Web/Progressive_web_apps/How_to/Localize_an_app_manifest)
- [Localization support for web app manifests](https://developer.chrome.com/blog/manifest-localization) on developer.chrome.com (2026)
