---
title: Firefox 96 for developers
slug: Mozilla/Firefox/Releases/96
tags:
  - '96'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 96 that affect developers. Firefox 96 was released on January 11, 2022.

## Changes for web developers

### HTML

No notable changes

### CSS

- The [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb) function for use as a [CSS color value](/en-US/docs/Web/CSS/color_value) has been implemented. The `hwb()` functional notation expresses a given color according to its hue, whiteness, and blackness. An optional alpha component represents the color's transparency. ({{bug(1352755)}}).

- Firefox now provides support for the {{CSSxRef("color-scheme")}} property. This allows an element to indicate which color schemes it can comfortably be rendered in. Common options include "light" and "dark", or "day mode" and "night mode". ({{bug(1576289)}}).

- The {{CSSxRef("counter-reset")}} property now supports the `reversed()` function for creating _reversed_ [CSS counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters), which are intended for numbering elements in descending order.
  This can be used with the `list-item` counter to automatically number ordered lists in reverse order, starting from the number of elements in the list
  (`list-item` is a counter that is automatically applied for ordered lists, such as those created using {{HTMLElement("ol")}}).
  Firefox uses this feature internally to support the `<ol>` [`reversed` attribute](/en-US/docs/Web/HTML/Element/ol#attr-reversed).
  ({{bug(1706346)}}).

### JavaScript

No notable changes.

### HTTP

- Cookies sent from the same domain but using different schemes (for example http or https) are now considered to be from different sites with respect to the cookie [SameSite](/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite) directive.
  In addition, cookies are assumed to implicitly set `SameSite=Lax` if the `SameSite` attribute is not specified (previously the default was `SameSite=None`), and cookies with `SameSite=None` require a secure context. ({{bug(1617609)}}).

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

- The {{domxref("IntersectionObserver.IntersectionObserver()","IntersectionObserver()")}} constructor now sets the default `rootMargin` if an empty string is passed in the associated parameter option, instead of throwing an exception ({{bug(1738791)}}).

#### Media, WebRTC, and Web Audio

- A number of deprecated non-standard statistics fields have been removed from the [WebRTC Statistics API](/en-US/docs/Web/API/WebRTC_Statistics_API), including: `bitrateMean`, `bitrateStdDev`,`framerateMean`, `framerateStdDev`, and `droppedFrames`.
  ({{bug(1367562)}}).

### WebDriver conformance (Marionette)

- Added the command `WebDriver:GetElementShadowRoot` to retrieve the shadow root (open or closed) hosted by a given element ({{bug(1700073)}}).
- Fixed a bug in `WebDriver:ExecuteScript` and `WebDriver:ExecuteAsyncScript` that caused a `cyclic object value` error when trying to return the `ShadowRoot` of an element ({{bug(1489490)}}).
- `WebDriver:Print` has been enhanced to support page ranges when printing documents as PDF ({{bug(1678347)}}).

## Changes for add-on developers

- Added {{WebExtAPIRef("runtime.getFrameId")}} that gets the frame ID of any window global or frame element from a content script ({{bug(1733104)}}).

## Older versions

{{Firefox_for_developers(95)}}
