---
title: Firefox 136 for developers
slug: Mozilla/Firefox/Releases/136
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 136 that affect developers. Firefox 136 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [March 4, 2025](https://whattrainisitnow.com/release/?version=136).

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

- The maximum size of [Data URLs](/en-US/docs/Web/URI/Schemes/data) has been increased from 32MB to 512MB, matching the limit for Chromium browsers ([Firefox bug 1911300](https://bugzil.la/1911300)).

#### DOM

#### Media, WebRTC, and Web Audio

- WebRTC can now send and receive video encoded using the [AV1 codec](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#av1).
  When sending, it can be used for both sending multiple simultaneous versions of the same source ("simulcast") and singlecast.
  ([Firefox bug 1944878](https://bugzil.la/1944878) and [Firefox bug 1932065](https://bugzil.la/1932065)).
- WebRTC simulcast of screen-shared video with the [H264 codec](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#avc_h.264) is also supported.
  What this means is that {{domxref("MediaStreamTrack")}} objects for screen and window capture (for example, from {{domxref("MediaDevices.getDisplayMedia()")}}), can now be encoded as multiple simulcast layers when using H264 (in addition to AV1 or [VP8 codec](/en-US/docs/Web/Media/Guides/Formats/Video_codecs#vp8)).
  Note that the H264 codec is hardware-enabled on Android.
  ([Firefox bug 1210175](https://bugzil.la/1210175)).

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- {{WebExtAPIRef("menus.update")}} and {{WebExtAPIRef("menus.remove")}} and the aliases {{WebExtAPIRef("contextMenus.update")}} and {{WebExtAPIRef("contextMenus.remove")}} now reject with an error when the menu item doesn't exist. Previously, the error was ignored and the promise fulfilled. ([Firefox bug 1688743](https://bugzil.la/1688743)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 136 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

## Older versions

{{Firefox_for_developers}}
