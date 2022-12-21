---
title: Firefox 109 for developers
slug: Mozilla/Firefox/Releases/109
tags:
  - "109"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 109 that will affect developers. Firefox 109 is the current [Nightly version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and will ship on [January 17, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

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

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- The default [Content Security Policy (CSP)](/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy) for Manifest V3 extensions has been updated to include `upgrade-insecure-requests`. This means that, by default, all user data requests are upgraded to use `https:`. Extensions that need to use `http:` can do so by overriding the default CSP using the [`content_security_policy`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy) manifest.json key ({{bug(1797086)}}).

### Removals

### Other

## Older versions

{{Firefox_for_developers(108)}}
