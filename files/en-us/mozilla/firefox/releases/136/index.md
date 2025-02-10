---
title: Firefox 136 for developers
slug: Mozilla/Firefox/Releases/136
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 136 that affect developers. Firefox 136 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [March 4, 2025](https://whattrainisitnow.com/release/?version=136).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- {{jsxref("Intl.DurationFormat")}} is now supported, enabling locale-sensitive formatting of durations. ([Firefox bug 1648139](https://bugzil.la/1648139)).

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The maximum size of [Data URLs](/en-US/docs/Web/URI/Schemes/data) has been increased from 32MB to 512MB, matching the limit for Chromium browsers ([Firefox bug 1911300](https://bugzil.la/1911300)).

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

- {{WebExtAPIRef("menus.update")}} and {{WebExtAPIRef("menus.remove")}} and the aliases {{WebExtAPIRef("contextMenus.update")}} and {{WebExtAPIRef("contextMenus.remove")}} now reject with an error when the menu item doesn't exist. Previously, the error was ignored and the promise fulfilled. ([Firefox bug 1688743](https://bugzil.la/1688743)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 136 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
