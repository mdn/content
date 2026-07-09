---
title: Localize an app manifest
slug: Web/Progressive_web_apps/How_to/Localize_an_app_manifest
page-type: how-to
sidebar: pwasidebar
---

[Progressive Web App (PWA)](/en-US/docs/Web/Progressive_web_apps) manifest localization allows the browser to choose between different text strings (for app names and descriptions, for example) and icons when loading the app to best suit the user's language preferences. Manifests can be localized using localizable members, which have the suffix [`_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized).

This guide shows how to localize a PWA manifest.

> [!NOTE]
> The [`lang`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/lang) and [`dir`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/dir) manifest members have no effect on manifest localization. The language is chosen based on the user's browser language settings.

## Example non-localised PWA

This guide develops a multilingual PWA manifest using the following example as a starting point.

```json
{
  "name": "The SuperSausage sausage app",
  "short_name": "SuperSausage",
  "description": "Find information on all your favorite sausages!",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ab510d",
  "icons": [
    {
      "src": "./icons/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ]
}
```

## Choose the manifest members you want to localize

The following members support localized variants:

- [`name`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`short_name`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`description`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/description)
- [`icons`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/icons)
- [`shortcuts`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)

Our sample manifest has all of these except for `shortcuts`; we'll show how to localize each one.

## Choose the languages you want to support

Generally you should support all of the languages relevant to your major target audience locales.

For this example, we'll choose French (`fr`), German (`de`), Urdu (`ur`), and Japanese (`ja`).

## Localizing the `name` member

Localized versions of the `name` member are contained in the `name_localized` member. Each property inside `name_localized` has to have a key equal to one of the target language's {{glossary("BCP 47 language tag", "BCP 47 language tags")}}, and a value equal to an object or a string representing the localized text for that language.

Let's see what this could look like for our example:

```json
"name_localized": {
  "fr": "L'application de saucisse SuperSausage",
  "de": "Die SuperWurst-App",
  "ur": {
    "dir": "rtl",
    "value": "سپر ساسیج ساسیج ایپ"
  },
  "ja": "スーパーソーセージのソーセージアプリ"
}
```

In this case, we've used the string form for all the languages, except for Urdu, which uses the object form. We've done it this way because Urdu is an RTL language, and we need to specify a `dir` value of `rtl` for it so that browsers will display it correctly.

If the user has their browser language set to `fr`, `de`, `ur`, or `ja`, the browser will use the appropriate name found in the `name_localized` member for that language as the app's `name`. If not, the browser will use the name found in the `name` member.

## Localizing the other text-based members

We can follow the same pattern as we did for the `name` member to localize the `short_name` and `description` members:

```json
"short_name_localized": {
  "fr": {
    "lang": "en-US",
    "value": "SuperSausage"
  },
  "de": "SuperWurst",
  "ur": "سپر ساسیج",
  "ja": "スーパーソーセージ"
},
"description_localized": {
  "fr": "Trouvez des informations sur toutes vos saucisses préférées !",
  "de": "Finden Sie Informationen zu all Ihren Lieblingswürstchen!",
  "ur": "اپنی تمام پسندیدہ ساسیجز کے بارے میں معلومات حاصل کریں!",
  "ja": "お気に入りのソーセージの情報を全部見つけましょう!"
},
```

The French (`fr`) `short_name` translation shows typical usage of the object value form with a `lang` property specified. In this case, our French audience knows our app by its English brand name — "SuperSausage" — and we want to specify that this should be handled as English rather than French (for example, for the purposes of pronunciation).

## Localizing the `icon` member

Localized images are handled somewhat differently to localized text. The properties of each `*_localized` member (`icon_localized`, in this case) are equal to an array of objects containing the same properties as the non-localized original (`icon`); each one provides details for a localized image.

Let's see what this looks like:

```json
"icons_localized": {
  "fr": [
    {
      "src": "./icons/l10n/fr/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/fr/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "de": [
    {
      "src": "./icons/l10n/de/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/de/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "ur": [
    {
      "src": "./icons/l10n/ur/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/ur/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "ja": [
    {
      "src": "./icons/l10n/ja/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/ja/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
}
```

## Finished manifest

Putting this all together, the complete manifest looks like this:

```json
{
  "name": "The SuperSausage sausage app",
  "short_name": "SuperSausage",
  "description": "Find information on all your favorite sausages!",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ab510d",
  "icons": [
    {
      "src": "./icons/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "name_localized": {
    "fr": "L'application de saucisse SuperSausage",
    "de": "Die SuperWurst-App",
    "ur": {
      "dir": "rtl",
      "value": "سپر ساسیج ساسیج ایپ"
    },
    "ja": "スーパーソーセージのソーセージアプリ"
  },
  "short_name_localized": {
    "fr": {
      "lang": "en-US",
      "value": "SuperSausage"
    },
    "de": "SuperWurst",
    "ur": "سپر ساسیج",
    "ja": "スーパーソーセージ"
  },
  "description_localized": {
    "fr": "Trouvez des informations sur toutes vos saucisses préférées !",
    "de": "Finden Sie Informationen zu all Ihren Lieblingswürstchen!",
    "ur": "اپنی تمام پسندیدہ ساسیجز کے بارے میں معلومات حاصل کریں!",
    "ja": "お気に入りのソーセージの情報を全部見つけましょう!"
  },
  "icons_localized": {
    "fr": [
      {
        "src": "./icons/l10n/fr/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/fr/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "de": [
      {
        "src": "./icons/l10n/de/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/de/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "ur": [
      {
        "src": "./icons/l10n/ur/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/ur/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "ja": [
      {
        "src": "./icons/l10n/ja/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/ja/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ]
  }
}
```

## See also

- [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) manifest members
- [Localization support for web app manifests](https://developer.chrome.com/blog/manifest-localization) on developer.chrome.com (2026)
