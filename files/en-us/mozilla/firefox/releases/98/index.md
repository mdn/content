---
title: Firefox 98 for developers
slug: Mozilla/Firefox/Releases/98
tags:
  - '98'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 98 that will affect developers. Firefox 98 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta), and will ship on [March 8, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

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

- The properties `colorSpaceConversion`, `resizeWidth` and `resizeHeight` can be passed to the method {{domxref("createImageBitmap()")}} using the `options` object ({{bug(1748868)}} and {{bug(1733559)}}).

#### Media, WebRTC, and Web Audio

#### Removals

- The deprecated [WebVR API](/en-US/docs/Web/API/WebVR_API) is now disabled by default on all builds (previously it was enabled on Windows, macOS, and all nightly/dev builds).
  It can be re-enabled in `about:config` using by setting `dom.vr.enabled` to `true`. {{bug(1750902)}}.

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

#### Removals

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(97)}}
