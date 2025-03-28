---
title: Firefox 138 for developers
slug: Mozilla/Firefox/Releases/138
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 138 that affect developers. Firefox 138 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [April 29, 2025](https://whattrainisitnow.com/release/?version=138).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- Support provided for `page_action` as a {{WebExtAPIRef("menus.ContextType")}} in the {{WebExtAPIRef("menus")}} API for Manifest V3 extensions. This provides Manifest V3 extensions the same ability as Manifest V2 extensions to add menu items to `page_action`. ([Firefox bug 1951166](https://bugzil.la/1951166))
- The {{WebExtAPIRef("contextualIdentities")}} API is no longer defined in Firefox for Android. Previously, it was defined but defective. ([Firefox bug 1659500](https://bugzil.la/1659500))
- The `contextualIdentities` permission is now not recognized on Firefox for Android. Previously, it enabled a broken version of the "containers" feature. ([Firefox bug 1659500](https://bugzil.la/1659500))
- The new Manifest V3 version of the {{WebExtAPIRef("userScripts")}} API is now available on Firefox for Android. ([Firefox bug 1949955](https://bugzil.la/1949955))
- Implements the {{WebExtAPIRef("webRequest.handlerBehaviorChanged")}} API. In previous versions this method was exposed but did nothing. ([Firefox bug 1657575](https://bugzil.la/1657575))
- The {{WebExtAPIRef("alarms.create")}} API now returns a Promise instead of undefined. ([Firefox bug 1869171](https://bugzil.la/1869171))

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 138 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
