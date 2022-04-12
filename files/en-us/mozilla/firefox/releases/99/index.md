---
title: Firefox 99 for developers
slug: Mozilla/Firefox/Releases/99
tags:
  - '99'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 99 that will affect developers. Firefox 99 was released on April 5, 2022.

## Changes for web developers

### HTML

No notable changes.

### CSS

No notable changes.

### JavaScript

No notable changes.

### APIs

- {{domxref("navigator.pdfViewerEnabled")}} is now enabled, and is the recommended way to determine whether a browser supports inline display of PDF files when navigating to them.
  Sites that use the deprecated properties {{domxref("navigator.plugins")}} and {{domxref("navigator.mimeTypes")}} to infer PDF viewer support should now use the new property, even though these now return hard-coded mock values that match the signal provided by `pdfViewerEnabled` ({{bug(1720353)}}).

#### Media, WebRTC, and Web Audio

- The [`RTCPeerConnection.setConfiguration()`](/en-US/docs/Web/API/RTCPeerConnection/setConfiguration) method is now supported.
  Among other things, this allows sites to adjust the configuration to changing network conditions ({{bug(1253706)}}).

#### Removals

- The [Network Information API](/en-US/docs/Web/API/Network_Information_API) was previously enabled on Android (only), but is now disabled by default on all platforms.
  This API is on the path for removal because it exposes a significant amount of user information that might be used for fingerprinting.
  ({{bug(1637922)}}).

### WebDriver conformance (Marionette)

- Fixed a bug where the Shift key was not handled properly when part of a key sequence of the `WebDriver:ElementSendKeys` command ({{bug(1757636)}}).

## Changes for add-on developers

## Older versions

{{Firefox_for_developers(98)}}
