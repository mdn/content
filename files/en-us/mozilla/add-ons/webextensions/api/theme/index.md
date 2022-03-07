---
title: theme
slug: Mozilla/Add-ons/WebExtensions/API/theme
tags:
  - Extensions
  - Themes
  - WebExtensions
  - add-on
browser-compat: webextensions.api.theme
---
{{AddonSidebar}}

Enables browser extensions to update the browser theme.

To use this API, an extension must request the "theme" [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in its [manifest.json](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json) file.

> **Note:** When we set up a theme in a background file, we must declare the 'theme' [permission](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) and therefore we cannot use the [theme](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) function of the manifest, since it's not compatible.

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
  - : Fired when the browser theme has been changed.

## Browser compatibility

{{Compat}}

{{WebExtExamples("h2")}}
