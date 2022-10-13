---
title: Firefox 106 for developers
slug: Mozilla/Firefox/Releases/106
tags:
  - "106"
  - Firefox
  - Mozilla
  - Release
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 106 that will affect developers. Firefox 106 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [October 18, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

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

- Added basic support for the `script.getRealms` command that is currently limited to the WindowRealmInfo type which includes window realms and sandbox realms ({{bug("1766240")}}).

- Added support for the `browsingContext.load` event, which is emitted when a `load` event is triggered on a BrowsingContext's window ({{bug("1756619")}}).

- Added an object reference store to hold strong references for serialized remote values ({{bug("1770736")}}).

- Added support for de-serializing remote references created in the object reference store ({{bug("1788124")}}).

- Added full support for the `script.evaluate`, `script.callFunction` and `script.disown` commands ({{bug("1778976")}}).

#### Marionette

- Added support for `wheel` input source for [Actions](https://w3c.github.io/webdriver/webdriver-spec.html#actions), which is associated with a wheel-type input device ({{bug("1746601")}}).

- Added support for opening and closing tabs in GeckoView based applications (eg. Firefox for Android) ({{bug("1506782")}}).

## Changes for add-on developers

- The ability to set the [`"background"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) manifest key property `"persistent"` to `false` for Manifest V2 (to make a background page non-persistent) is now available by default.
- The `object-src` directive in the `"content-security-policy"` manifest key is now optional ({{bug(1766881)}}). See [object-src directive](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive), on the `"content-security-policy"` manifest key page, for more details.

### Removals

### Other

## Older versions

{{Firefox_for_developers(105)}}
