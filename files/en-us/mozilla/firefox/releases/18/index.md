---
title: Firefox 18 for developers
slug: Mozilla/Firefox/Releases/18
tags:
  - Firefox
  - Firefox 18
---
{{FirefoxSidebar}}

Firefox 18 was released on January 8, 2013. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### HTML

- The {{htmlattrxref("reversed","ol")}} attribute of the {{HTMLElement("ol")}} element is now supported ({{bug("601912")}}).
- The {{htmlattrxref("crossorigin","link")}} attribute of the {{HTMLElement("link")}} element is now supported ({{bug("786564")}}).
- The {{htmlattrxref("allowfullscreen", "iframe")}} attribute of the {{HTMLElement("iframe")}} has been implemented and it's prefixed predecessor {{htmlattrxref("mozallowfullscreen", "iframe")}} is now deprecated.

### CSS

- The {{cssxref("min-width")}} and {{cssxref("min-height")}} now uses the `auto` keyword as _initial value_ (This has an effect only on flex items as it resolves to `0`, the previous initial value, for other items). ({{bug("763689")}})
- The cascade has been updated: now author `!important` rules override [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations). ({{bug("783714")}})
- The {{cssxref("background")}} shorthand property now recognizes CSS3 {{cssxref("background-size")}} property specified inside. ({{bug("570326")}})
- Initial support for the CSS Flexbox Module has been landed. It is disabled by default but can be enabled by setting `layout.css.flexbox.enabled` to true. ({{bug('666041')}})

### DOM/APIs

- `navigator.mozPay` has been landed. ({{bug("767818")}})
- `window.devicePixelRatio` has been landed. ({{bug("564815")}})
- The MacOS X backend for `window.navigator.battery` has been implemented. ({{bug("696045")}})
- {{domxref("BlobBuilder", "MozBlobBuilder")}} is removed. Developers need to use {{domxref("Blob")}} constructor for creating a `Blob` object. ({{bug("744907")}})
- The {{domxref("document.visibilitychange_event", "visibilitychange")}} event and the [Page Visibility API](/en-US/docs/Web/API/Page_Visibility_API) has been unprefixed ({{bug("812086")}}).
- {{domxref("TextDecoder")}} and {{domxref("TextEncoder")}} have been added. Note that the implementation and spec of these evolved and have been changed in Firefox 19 ({{bug("764234")}}).
- `HTMLMediaElement.src` has been separate in two properties: the standard `src` property, dealing with strings, and the prefixed `mozSrcObject` property, dealing with [media streams](/en-US/docs/Web/API/Media_Streams_API) ({{bug("792665")}}).
- Support for [transferable objects.](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#passing_data_by_transferring_.c2.a0ownership_%28transferable_objects%29)
- The {{domxref("Screen.lockOrientation()")}} method now supports an `Array` of strings as argument ({{bug("784549")}}.

### JavaScript

- Harmony's (ECMAScript 2015) [Direct Proxies](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) have been landed ({{bug("703537")}}). Warning: the implementation contains a couple of known bugs, missing features and misalignments with the current state of the spec. Do not rely on it for production code.
- The ECMAScript 2015 `contains()` method is now implemented on strings. This is unfortunately not compatible with Mootools 1.2, which expects different behavior from `contains()` on strings but does not ensure it. Newer versions of Mootools fix this issue; sites should upgrade their Mootools version to something newer than 1.2.

### WebGL

- The prefixed version of the {{domxref("EXT_texture_filter_anisotropic")}} WebGL extension, "MOZ_EXT_texture_filter_anisotropic" has been removed ({{bug(790946)}}).

### SVG

### MathML

### XUL

### Network

- Quality factors ("q-values") are now clamped to 2 digits (e.g. in HTTP {{HTTPHeader("Accept-Language")}} headers) ({{bug("672448")}}).
- The `ALLOW-FROM` syntax of the [`X-FRAME-OPTIONS`](/en-US/docs/Web/HTTP/Headers/X-Frame-Options) HTTP Response header is now supported ({{bug("690168")}}).

### Developer tools

## Changes for add-on and Mozilla developers

### Interface changes

- `nsIStreamListener`
  - : The 4th parameter (aOffset) of `onDataAvailable()` method changes to unsigned long long. ({{bug("784912")}})
- `nsIUploadChannel`
  - : `setUploadStream()` supports over 2GB content-length ({{bug("790617")}})
- `nsIEditor`
  - : `addEditorObserver()` has been removed, use `setEditorObserver()` instead, `removeEditorObserver()` no longer takes a `nsIEditorObserver` parameter ({{bug("785091")}})
- `nsIHttpProtocolHandler`
  - : `http-on-modify-request` observers are no longer guaranteed to be called synchronously during `nsIChannel.asyncOpen()`.
    For observers that need to be called during `asyncOpen`(), the new `http-on-opening-request` observer topic has been added. `See` ({{bug("800799")}})
- `nsIProtocolProxyService`
  - : The `resolve` method has been removed. Now, only the `asyncResolve` method can be used. See ({{bug("769764")}})

#### New interfaces

#### Removed interfaces

The following interfaces have been removed.

- `nsIEditorObserver`

## See also

- [Firefox 18 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/18.0beta/releasenotes/)
- [Aurora 18: HiDPI & Touch Events](https://hacks.mozilla.org/2012/10/aurora-18-hidpi-touch-events/) (Mozilla Hacks)
- [Add-on Compatibility for Firefox 18](https://blog.mozilla.org/addons/2012/12/28/compatibility-for-firefox-18/) (Add-ons Blog)

### Older versions

{{Firefox_for_developers('17')}}
