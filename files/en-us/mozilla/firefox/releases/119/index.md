---
title: Firefox 119 for developers
slug: Mozilla/Firefox/Releases/119
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 119 that affect developers. Firefox 119 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [October 24, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- The {{jsxref("Object.groupBy()")}} and {{jsxref("Map.groupBy()")}} static methods for grouping the elements of an iterable are now supported (See [Firefox bug 1792650](https://bugzil.la/1792650) for more details.)

#### Removals

### SVG

#### Removals

### HTTP

- The [`credentialless`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy#credentialless) directive of the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP response header is now supported on desktop platforms (and mobile platforms other than Android), allowing `no-cors` requests for resources to be made on cross-origin servers that have not explicitly opted into it, albeit without cookies or other credentials ([Firefox bug 1851467](https://bugzil.la/1851467)).

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

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(118)}}
