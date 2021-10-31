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

`manifest.json` keys are listed below:

{{ListSubpages("/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json")}}

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

> **Note:** This is not intended to be used as a copy-paste-ready example. Selecting the keys you'll need depends on the extension you are developing.

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

  "description": "...",

  "icons": {
    "48": "icon.png",
    "96": "icon@2x.png"
  },

  "manifest_version": 2,

  "name": "...",

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

For a full overview of all manifest keys and their sub-keys, see the[ full `manifest.json` browser compatibility table](/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_compatibility_for_manifest.json).

{{Compat}}

## See also

{{WebExtAPIRef("permissions")}} JavaScript API
