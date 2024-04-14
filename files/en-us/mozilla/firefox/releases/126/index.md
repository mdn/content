---
title: Firefox 126 for developers
slug: Mozilla/Firefox/Releases/126
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 126 that affect developers. Firefox 126 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [May 14, 2024](https://whattrainisitnow.com/release/?version=126).

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

- The {{WebExtAPIRef("commands.onCommand")}} event now passes the `tab` argument to the event listener. This enables extensions to apply a triggered shortcut to the page in which it was issued without the need to call `tabs.query()` API ([Firefox bug 1843866](https://bugzil.la/1843866)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 126 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
