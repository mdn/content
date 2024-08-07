---
title: Firefox 130 for developers
slug: Mozilla/Firefox/Releases/130
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 130 that affect developers. Firefox 130 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [September 3, 2024](https://whattrainisitnow.com/release/?version=130).

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

- The `options` parameter of {{WebExtAPIRef("webRequest.getSecurityInfo")}} is now optional ([Firefox bug 1909474](https://bugzil.la/1909474)).
- {{WebExtAPIRef("runtime.getURL")}} (and the deprecated {{WebExtAPIRef("extension.getURL")}}) have been updated to prefix the supplied path string with the extension's `moz-extension:` origin (in line with the behavior of Chrome). In addition, {{WebExtAPIRef("runtime.getURL")}} no longer strips `/.`, `./`, and `../.` strings from the input URL ([Firefox bug 1795082](https://bugzil.la/1795082)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 130 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
