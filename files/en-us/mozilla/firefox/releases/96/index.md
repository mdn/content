---
title: Firefox 96 for developers
slug: Mozilla/Firefox/Releases/96
tags:
  - '96'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}{{draft}}

This article provides information about the changes in Firefox 96 that will affect developers. Firefox 96 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta), and will ship on [January 11, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### HTTP

- Cookies sent from the same domain but using different schemes (for example http or https) are now considered to be from different sites with respect to the cookie [SameSite](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) directive.
  In addition, cookies are assumed to implicitly set `SameSite=Lax` if the `SameSite` attribute is not specified (previously the default was `SameSite=None`), and cookies with `SameSite=None` require a secure context. ({{bug(1617609)}}).

#### Removals

### Security

#### Removals

### APIs

- {{domxref("navigator.canShare()")}} is now supported on Android, allowing code to check whether {{domxref("navigator.share()")}} will succeed for particular targets.
  The feature is behind a preference on desktop operating systems.
  ({{bug(1666203)}}).
- The [Web Locks API](/en-US/docs/Web/API/Web_Locks_API) is enabled by default, allowing web apps running in multiple tabs or workers to coordinate the use of resources. ({{bug(1740044)}}).


#### Canvas

- Image encoder support has been added for the [WebP](/en-US/docs/Web/Media/Formats/Image_types#webp_image) image format.
  This allows canvas elements to export their content as webp data when using the methods: {{domxref("HTMLCanvasElement.toDataURL()")}}, {{domxref("HTMLCanvasElement.toBlob()")}}, and {{domxref("OffscreenCanvas.convertToBlob", "OffscreenCanvas.toBlob")}}.
  ({{bug(1511670)}}).


#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (Marionette)

#### Removals

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(95)}}
