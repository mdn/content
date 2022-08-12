---
title: manifest.json
slug: Mozilla/Add-ons/WebExtensions/manifest.json
tags:
  - Add-ons
  - Extensions
  - Overview
  - WebExtensions
  - manifest.json
browser-compat: webextensions.manifest
---
{{AddonSidebar}}

> **Note:** This article describes manifest.json for web extensions. If you are looking for information about the manifest.json in PWAs, check out the [Web App Manifest](/en-US/docs/Web/Manifest) article.

The `manifest.json` file is the only file that every extension using WebExtension APIs must contain.

Using `manifest.json`, you specify basic metadata about your extension such as the name and version, and can also specify aspects of your extension's functionality (such as background scripts, content scripts, and browser actions).

It is a [JSON](/en-US/docs/Glossary/JSON)-formatted file, with one exception: it is allowed to contain "`//`"-style comments.

## List of manifest.json keys

These are the `manifest.json` keys and the manifest versions they are supported in:

- [action](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/action) (Manifest V3 and above)
- [author](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author) (Manifest V2 and above)
- [background](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) (Manifest V2 and above)
- [browser_action](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) (Manifest V2)
- [browser_specific_settings](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) (Manifest V2 and above)
- [chrome_settings_overrides](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) (Manifest V2 and above)
- [chrome_url_overrides](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_url_overrides) (Manifest V2 and above)
- [commands](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) (Manifest V2 and above)
- [content_scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) (Manifest V2 and above)
- [content_security_policy](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) (Manifest V2 and above)
- [default_locale](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/default_locale) (Manifest V2 and above)
- [description](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) (Manifest V2 and above)
- [developer](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) (Manifest V2 and above)
- [devtools_page](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) (Manifest V2 and above)
- [dictionaries](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dictionaries) (Manifest V2 and above)
- [externally_connectable](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/externally_connectable) (Manifest V2 and above)
- [homepage_url](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) (Manifest V2 and above)
- [host_permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) (Manifest V3 and above)
- [icons](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) (Manifest V2 and above)
- [incognito](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/incognito) (Manifest V2 and above)
- [manifest_version](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version) (Manifest V2 and above)
- [name](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) (Manifest V2 and above)
- [offline_enabled](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/offline_enabled) (Manifest V2 and above)
- [omnibox](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox) (Manifest V2 and above)
- [optional_permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions) (Manifest V2 and above)
- [options_page](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) (Manifest V2 and above)
- [options_ui](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) (Manifest V2 and above)
- [page_action](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) (Manifest V2)
- [permissions](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) (Manifest V2 and above)
- [protocol_handlers](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) (Manifest V2 and above)
- [short_name](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/short_name) (Manifest V2 and above)
- [sidebar_action](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) (Manifest V2 and above)
- [storage](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) (Manifest V2 and above)
- [theme](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) (Manifest V2 and above)
- [theme_experiment](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme_experiment) (Manifest V2 and above)
- [user_scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) (Manifest V2)
- [version](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) (Manifest V2 and above)
- [version_name](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name) (Manifest V2 and above)
- [web_accessible_resources](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) (Manifest V2 and above)

### Notes about manifest.json keys

- `"manifest_version"`, `"version"`, and `"name"` are the only mandatory keys.
- `"default_locale"` must be present if the "`_locales`" directory is present, and must be absent otherwise.
- `"browser_specific_settings"` is not supported in Google Chrome.

### Accessing manifest.json keys at runtime

You can access your extension's manifest from the extension's JavaScript using the {{WebExtAPIRef("runtime.getManifest()")}} function:

```js
browser.runtime.getManifest().version;
```

## Example

The block below shows the basic syntax for some common manifest keys.

> **Note:** This is not intended to be used as a copy-paste-ready example. Selecting the keys you'll need depends on the extension you are developing.

For complete example extensions, see [Example extensions](/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples).

```json
{
  "browser_specific_settings": {
    "gecko": {
      "id": "addon@example.com",
      "strict_min_version": "42.0"
    }
  },

  "background": {
    "scripts": ["jquery.js", "my-background.js"],
  },

  "browser_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "commands": {
    "toggle-feature": {
      "suggested_key": {
        "default": "Ctrl+Shift+Y",
        "linux": "Ctrl+Shift+U"
      },
      "description": "Send a 'toggle-feature' event"
    }
  },

  "content_security_policy": "script-src 'self' https://example.com; object-src 'self'",

  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ],

  "default_locale": "en",

  "description": "…",

  "icons": {
    "48": "icon.png",
    "96": "icon@2x.png"
  },

  "manifest_version": 2,

  "name": "…",

  "page_action": {
    "default_icon": {
      "19": "button/geo-19.png",
      "38": "button/geo-38.png"
    },
    "default_title": "Whereami?",
    "default_popup": "popup/geo.html"
  },

  "permissions": ["webNavigation"],

  "version": "0.1",

  "user_scripts": {
    "api_script": "apiscript.js",
  },

  "web_accessible_resources": ["images/my-image.png"]
}
```

## Browser compatibility

For a full overview of all manifest keys and their sub-keys, see the [full manifest.json browser compatibility table](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json).

{{Compat}}

## See also

{{WebExtAPIRef("permissions")}} JavaScript API
