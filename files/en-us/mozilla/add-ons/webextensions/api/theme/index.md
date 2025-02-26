---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
page-type: webextension-api
browser-compat: webextensions.api.theme
---

{{AddonSidebar}}

Enables browser extensions to get details of the browser's theme and update the theme.

You can use this API to include a theme in your extension, which you define as a {{WebExtAPIRef("theme.Theme")}} and apply using {{WebExtAPIRef("theme.update()")}}. You cannot include a static theme in your extension, defined with the ["theme"](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) manifest key. The "theme" manifest key is used to define static themes only. See [Themes](https://extensionworkshop.com/documentation/themes/) on Extension Workshop for more information.

## Types

- {{WebExtAPIRef("theme.Theme")}}
  - : Represents the content of a theme.

## Functions

- {{WebExtAPIRef("theme.getCurrent()")}}
  - : Gets the current browser theme.
- {{WebExtAPIRef("theme.update()")}}
  - : Updates the browser's theme.
- {{WebExtAPIRef("theme.reset()")}}
  - : Removes any theme updates made in a call to {{WebExtAPIRef("theme.update()")}}.

## Events

- {{WebExtAPIRef("theme.onUpdated")}}
  - : Fired when the browser theme changes.

{{WebExtExamples("h2")}}

## Browser compatibility

{{Compat}}
