---
title: Firefox 131 for developers
slug: Mozilla/Firefox/Releases/131
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 131 that affect developers. Firefox 131 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [October 1, 2024](https://whattrainisitnow.com/release/?version=131).

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

- The 10 MB quota for data stored by the {{WebExtAPIRef("storage.session")}} API is now enforced in Firefox Nightly 131. Previously, Firefox didn't implement this quota. This enforcement rolls out to release versions of Firefox from version 134 ([Firefox bug 1915688](https://bugzil.la/1915688)). This enables extensions that rely on the previous behavior to correct any issues. ([Firefox bug 1908925](https://bugzil.la/1908925))

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 131 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
