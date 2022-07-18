---
title: Firefox 90 for developers
slug: Mozilla/Firefox/Releases/90
tags:
  - '90'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 90 that will affect developers. Firefox 90 was released on July 13th, 2021.

> **Note:** See also [Getting lively with Firefox 90](https://hacks.mozilla.org/2021/07/getting-lively-with-firefox-90/) on Mozilla Hacks.

## Changes for web developers

### Developer Tools

- The response view now shows a [preview for web fonts](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) ({{bug(872078)}}).

### HTML

- A fix to the way that form payloads are handled around newline normalization and escaping in multipart/formdata. This meets the updated specification, and matches other browser implementations. ({{bug(1686765)}}).
- Firefox now sets an image's {{Glossary("intrinsic size")}} and resolution based on {{Glossary("EXIF")}} information (if present and self-consistent). This allows a server to, for example, send a low-quality placeholder image to speed up loading. It also enables a [number of other use cases](https://github.com/eeeps/exif-intrinsic-sizing-explainer) ({{bug(1680387)}}).

### CSS

- `-webkit-image-set()` has been implemented as an alias of the standard {{cssxref("image/image-set", "image/image-set()")}} function ({{bug(1709415)}}).

### JavaScript

- [Private class static and instance fields and methods](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) are now supported by default ({{bug(1708235)}} and {{bug(1708236)}}).
- The [`in`](/en-US/docs/Web/JavaScript/Reference/Operators/in#private_fields_and_methods) operator can now be used to [check if a class private method or field has been defined](/en-US/docs/Web/JavaScript/Guide/Working_With_Private_Class_Features#checking_if_a_private_fieldmethod_exists). This offers a more compact approach for handling potentially undefined features, as oppose to wrapping code in `try/catch` blocks ({{bug(1648090)}}).
- Custom date/time formats specified as options to the [`Intl.DateTimeFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) can now include `dayPeriod` — a value indicating that the approximate time of day (e.g. "in the morning", "at night", etc.) should be included as a `narrow`, `short`, or `long` string ({{bug(1645115)}}).
- The relative indexing method `at()` has been added to the [`Array`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [`TypedArray`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) global objects. ({{bug(1681371)}})

### HTTP

- The HTTP {{Glossary("Fetch metadata request header", "fetch metadata request headers")}} (`Sec-Fetch-*`) are now supported. These headers provide servers with additional context about requests, including whether they are same-origin, cross-origin, same-site, or user-initiated, and where/how the requested data is to be used. This allows servers to mitigate against several types of cross-origin attacks ({{bug(1695911)}}).

#### Removals

- FTP has now been removed from Firefox ({{bug(1574475)}}). This follows [deprecation in Firefox 88](/en-US/docs/Mozilla/Firefox/Releases/88#http). Note that web extensions can still register themselves as [FTP protocol handlers](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers).

### APIs

#### DOM

- Support was added for the deprecated {{DOMxref("WheelEvent")}} properties: `WheelEvent.wheelDelta`, `WheelEvent.wheelDeltaX`, and `WheelEvent.wheelDeltaY`. This allows Firefox to work with a small subset of pages that were broken by recent compatibility improvements to `WheelEvent` ({{bug(1708829)}}).
- The {{domxref("CanvasRenderingContext2D")}} interface of the {{domxref("Canvas API")}} now provides a {{domxref('CanvasRenderingContext2D.createConicGradient()','createConicGradient()')}} method. This returns a {{domxref('CanvasGradient')}} much like the existing {{domxref('CanvasRenderingContext2D.createLinearGradient()','linear')}} and {{domxref('CanvasRenderingContext2D.createRadialGradient()','radial')}} gradients, but allows a gradient to move around a point defined by coordinates. See {{bug(1627014)}} for more details.
- Support for the `matrix` protocol has been added and can now be passed into the {{domxref('Navigator.registerProtocolHandler()')}} method as a valid scheme.

### WebDriver conformance (Marionette)

- Marionette now restricts to a single active WebDriver session ({{bug(1691047)}}).
- Added support for the new type of user prompts in Firefox ({{bug(1686741)}})
- Window handles make use of a unique id now, and don't change for process
  swaps as caused by [cross-group navigations](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) ({{bug(1680479)}}).
- Fixed an inappropriate abortion of the current WebDriver command when a
  new user prompt was opened in a background tab ({{bug(1701686)}}).
- Fixed the `WebDriver:GetWindowHandles` command to now correctly
  handle unloaded tabs ({{bug(1682062)}}).
- Fixed the `WebDriver:NewSession` command to always return the
  `proxy` capability even if empty ({{bug(1710935)}}).

#### Removals

- With the [removal of the FTP support in Firefox 90](#removals_http)
  the `ftpProxy` capability is no longer evaluated, and when used will
  throw an `invalid argument` error ({{bug(1703805)}}).

## Changes for add-on developers

- The `matrix` URI scheme is now supported and can be defined as a protocol within the [`protocol_handlers`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/protocol_handlers) key in an extensions [`manifest.json`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json)
- Starting with this version, the [Cache API](/en-US/docs/Web/API/Cache) can be used in the extension pages and worker globals. For more details, see ({{bug(1575625)}}).

## Older versions

{{Firefox_for_developers(89)}}
