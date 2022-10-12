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
- Added support for scroll (wheel) actions ({{bug("1746601")}}).
- Added support for opening and closing tabs on GeckoView applications (eg. Firefox for Android) ({{bug("1506782")}}).
- Added basic support for the getRealms command of the script module, currently limited to the WindowRealmInfo type which includes window realms and sandbox realms ({{bug("1766240")}}).
- Added support for the "load" event of the browsingContext module, which is emitted when a "load" event is triggered on a BrowsingContext's window ({{bug("1756619")}}).
- Added an object reference store to hold strong references for objects serialized as remote values with an "ownership" type different from "none", which is for instance useful to retrieve and reuse complex objects when using commands from the script module ({{bug("1770736")}}).
- We added support for de-serializing remote references created in the object reference store. This allows to send back a remote reference to another command, which will be able to reuse the original object from which the remote reference was created ({{bug("1788124")}}).
- Added full support for the "evaluate", "callFunction" and "disown" commands of the script module ({{bug("1778976")}}).
  
#### Removals

## Changes for add-on developers

- The ability to set the [`"background"`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) manifest key property `"persistent"` to `false` for Manifest V2 (to make a background page non-persistent) is now available by default.
- The `object-src` directive in the `"content-security-policy"` manifest key is now optional ({{bug(1766881)}}). See [object-src directive](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive), on the `"content-security-policy"` manifest key page, for more details.

### Removals

### Other

## Older versions

{{Firefox_for_developers(105)}}
