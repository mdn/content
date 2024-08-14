---
title: Firefox 130 for developers
slug: Mozilla/Firefox/Releases/130
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 130 that affect developers. Firefox 130 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [September 3, 2024](https://whattrainisitnow.com/release/?version=130).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The [`hyphens`](/en-US/docs/Web/CSS/hyphens) property now has hyphenation patterns for Czech & Slovak, this means that hyphens are language specific for Czech & Slovak languages and will not split syllables ([Firefox bug 1908931](https://bugzil.la/1908931)).

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
- {{WebExtAPIRef("runtime.getURL")}} (and the deprecated {{WebExtAPIRef("extension.getURL")}}) now always prepended the extension origin to the path, without further normalization. Previously, when an absolute URL was provided, instead of a relatively URL, the absolute URL was returned. ([Firefox bug 1795082](https://bugzil.la/1795082)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 130 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
