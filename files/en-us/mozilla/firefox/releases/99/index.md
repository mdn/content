---
title: Firefox 99 for developers
slug: Mozilla/Firefox/Releases/99
tags:
  - '99'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 99 that will affect developers. Firefox 99 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [April 5, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

- {{domxref("navigator.pdfViewerEnabled")}} is now enabled, and is the recommend way to determine whether a browser supports inline display of PDF files when navigating to them.
  Sites that use the deprecated properties {{domxref("navigator.plugins")}} and {{domxref("navigator.mimeTypes")}} to infer PDF viewer support should now use the new property, even though these now return hard-coded mock values that match the signal provided by `pdfViewerEnabled` ({{bug(1720353)}}).
- The [Network Information API](/en-US/docs/Web/API/Network_Information_API) was previously enabled on Android (only), but is now disabled by default on all platforms.
  The API is on the path for removal because it exposes a significant amount of user information that might be used for fingerprinting.
  ({{bug(1720353)}}).

#### DOM

#### Media, WebRTC, and Web Audio

- The [`RTCPeerConnection.setConfiguration()`](/en-US/docs/Web/API/RTCPeerConnection/setConfiguration) method is now supported.
  Among other things, this allows sites to adjust the configuration to changing network conditions ({{bug(1253706)}}).

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

#### Removals

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(98)}}
