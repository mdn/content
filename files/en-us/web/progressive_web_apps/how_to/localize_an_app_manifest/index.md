---
title: Localize an app manifest
slug: Web/Progressive_web_apps/How_to/Localize_an_app_manifest
page-type: how-to
sidebar: pwasidebar
---

[Progressive Web App (PWA)](/en-US/docs/Web/Progressive_web_apps) manifest localization allows the browser to choose between different text strings and icons when loading an app to best suit the user's localization preferences, based on their browser language settings. Manifests can be localized using localizable members, which have the suffix [`_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized).

This guide shows how to localize a PWA manifest.

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
  ],
  "shortcuts": [
    {
      "name": "Open menu",
      "short_name": "Menu",
      "description": "Go to the menu.",
      "url": "./menu",
      "icons": [
        {
          "src": "./icons/menu-128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "any"
        }
      ]
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

Our sample manifest has all of these; we'll show how to localize each one.

## Choose the languages you want to support

Generally you should support all of the languages relevant to your major target audience locales.

For this example, we'll choose French (`fr`), French Canadian (`fr-CA`), German (`de`), Urdu (`ur`), and Japanese (`ja`).

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

French Canadian users that set their browser language specifically to `fr-CA` will see the `fr` variant used. This is because, in cases where multiple related language variants are specified, the browser matches more granular language tags first, before falling back to more general tags. In this case, a `fr-CA` variant is not provided, so the browser falls back to `fr` for those users.

## Localizing the other text-based members

We can follow the same pattern as we did for the `name` member to localize the `short_name` and `description` members:

```json
"short_name_localized": {
  "fr": {
    "lang": "en-US",
    "value": "Sausage Super"
  },
  "de": "SuperWurst",
  "ur": "سپر ساسیج",
  "ja": "スーパーソーセージ"
},
"description_localized": {
  "fr": "Trouvez des informations sur toutes vos saucisses préférées!",
  "de": "Finden Sie Informationen zu all Ihren Lieblingswürstchen!",
  "ur": "اپنی تمام پسندیدہ ساسیجز کے بارے میں معلومات حاصل کریں!",
  "ja": "お気に入りのソーセージの情報を全部見つけましょう!"
},
```

The French (`fr`) `short_name` translation shows typical usage of the object value form with a `lang` property specified. In this case, our French audience knows our app by a variant of the English brand name — "Sausage Super" — and we want to specify that this should be handled as English rather than French (for example, for the purposes of pronunciation).

## Localizing the `icons` member

The properties of each `icons_localized` member are equal to an array of objects containing the same properties as the non-localized `icons` member; each one provides details for a localized icon.

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
  "fr-CA": [
    {
      "src": "./icons/l10n/fr-CA/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/fr-CA/saus-256.png",
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

In this case, we have provided a specific variant for French Canadian users — the `fr` text variants are arguably suitable for `fr` and `fr-CA` users, but it is a nice idea to provide an explicit icon that fits better with the Canadian locale. In this case, users that set their browser language specifically to `fr-CA` will see the `fr-CA` icon used, whereas those with a `fr` language set will see the `fr` icon.

## Localizing the `shortcuts` member

In the case of the `shortcuts` member, you don't specify the localizations inside a `shortcuts_localized` member. Instead, you provide `*_localized` versions of the `name`, `short_name`, `description`, and `icons` members nested inside the `shortcut` member.

For our example, this looks like so:

```json
"shortcuts": [
  {
    "name": "Open menu",
    "name_localized": {
      "fr": "Menu ouvert",
      "de": "Menü öffnen",
      "ur": { "value": "اوپن مینو", "dir": "rtl" },
      "ja": "メニューを開く"
    },
    "short_name": "Menu",
    "short_name_localized": {
      "fr": "Menu",
      "de": "Speisekarte",
      "ur": { "value": "مینو", "dir": "rtl" },
      "ja": "メニュー"
    },
    "description": "Go to the menu.",
    "description_localized": {
      "fr": "Allez au menu.",
      "de": "Geh zur Speisekarte.",
      "ur": { "value": "مینو پر جائیں۔", "dir": "rtl" },
      "ja": "メニューに行け。"
    },
    "url": "./menu",
    "icons": [
      { "src": "./icons/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
    ],
    "icons_localized": {
      "fr": [
        { "src": "./icons/l10n/fr/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "de": [
        { "src": "./icons/l10n/de/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "ur": [
        { "src": "./icons/l10n/ur/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "ja": [
        { "src": "./icons/l10n/ja/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ]
    }
  }
]
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
      "value": "Sausage Super"
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
    "fr-CA": [
      {
        "src": "./icons/l10n/fr-CA/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/fr-CA/saus-256.png",
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
  },
  "shortcuts": [
    {
      "name": "Open menu",
      "name_localized": {
        "fr": "Menu ouvert",
        "de": "Menü öffnen",
        "ur": { "value": "اوپن مینو", "dir": "rtl" },
        "ja": "メニューを開く"
      },
      "short_name": "Menu",
      "short_name_localized": {
        "fr": "Menu",
        "de": "Speisekarte",
        "ur": { "value": "مینو", "dir": "rtl" },
        "ja": "メニュー"
      },
      "description": "Go to the menu.",
      "description_localized": {
        "fr": "Allez au menu.",
        "de": "Geh zur Speisekarte.",
        "ur": { "value": "مینو پر جائیں۔", "dir": "rtl" },
        "ja": "メニューに行け。"
      },
      "url": "./menu",
      "icons": [
        {
          "src": "./icons/menu-128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "any"
        }
      ],
      "icons_localized": {
        "fr": [
          {
            "src": "./icons/l10n/fr/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "de": [
          {
            "src": "./icons/l10n/de/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "ur": [
          {
            "src": "./icons/l10n/ur/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "ja": [
          {
            "src": "./icons/l10n/ja/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ]
      }
    }
  ]
}
```

## See also

- [`*_localized`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) manifest members
- [Localization support for web app manifests](https://developer.chrome.com/blog/manifest-localization) on developer.chrome.com (2026)
