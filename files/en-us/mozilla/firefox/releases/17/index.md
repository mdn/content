---
title: Firefox 17 for developers
slug: Mozilla/Firefox/Releases/17
tags:
  - '17'
  - Firefox
---
{{FirefoxSidebar}}

Firefox 17 shipped on November 20, 2012. This article lists key changes that are useful for not only web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### HTML

- Support for the {{htmlattrxref("sandbox", "iframe")}} attribute on the {{HTMLElement("iframe")}} element has been added. ({{bug("341604")}})

### CSS

- Support for {{cssxref("@supports")}} at-rule defined in [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/) has been landed. It is disabled by default. Developers can try it by setting `layout.css.supports-rule.enabled` to true ([bug 649740](https://bugzilla.mozilla.org/show_bug.cgi?id=649740)).
- Support for the CSS Selectors Level 4 pseudo-class {{cssxref(":dir", ":dir()")}} allowing selection of elements based on their directionality has landed. ([bug 562169](https://bugzilla.mozilla.org/show_bug.cgi?id=562169))
- Support for the newly specified `isolate-override` value of the CSS {{cssxref("unicode-bidi")}} value has landed ({{bug("774335")}})
- Our prefixed implementation of {{cssxref("box-sizing")}} now takes into account {{cssxref("min-height")}} and {{cssxref("max-height")}}. One step closer to its unprefixing ({{bug("308801")}})

### DOM/APIs

- Support for {{domxref("CSSSupportsRule")}} interface defined in [CSS3 Conditional Rules specification](https://drafts.csswg.org/css-conditional-3/) has been landed ({{bug("649740")}})
- Support for {{domxref("WheelEvent")}} object and `wheel` event have been landed ({{bug("719320")}}).
- Support DOM Meta key on Linux again ({{bug("751749")}}).
- On {{domxref("HTMLMediaElement")}}, a new method, `mozGetMetadata`, that returns a JavaScript object whose properties represent metadata from the playing media resource as {key: value} pairs ({{bug("763010")}}).
- Support for {{domxref("Range.intersectsNode")}} has been added again; it has been removed in Gecko 1.9 ({{bug("579638")}}.
- {{domxref("Range.compareBoundaryPoints()")}} now throws a {{domxref("DOMException")}} with the `NOT_SUPPORTED_ERR` value when the comparison method is invalid ({{bug("714279")}}) .
- {{domxref("Event.initEvent()")}} has been adapted to the spec: it doesn't throw anymore if called after the dispatch of the event, it is only a no-op ({{bug(768310)}}).
- The non-standard {{domxref("XMLHttpRequest", "XMLHttpRequest.onuploadrequest")}} property has been removed ({{bug(761278)}}).
- The method {{domxref("XMLHttpRequest.getAllResponseHeaders()")}} now separates them with a CRLF (instead of a LF), as requested by the spec ({{bug(730925)}}).

### JavaScript

- [`String`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) object now offers Harmony [`startsWith`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith), [`endsWith`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith), and [`contains`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) methods ({{bug("772733")}}).
- The String methods [link](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/link) and [anchor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/anchor) now escape the `'"'` (quotation mark) ({{bug("352437")}}).
- Experimental support for strawman [`ParallelArray`](/en-US/docs/JavaScript/Reference/Global_Objects/ParallelArray) object has been implemented ({{bug("778559")}}).
- Support to iterate [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)/[`Set`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) ({{bug("725909")}}).
- Disabled [E4X](/en-US/docs/E4X) for web content by default ({{bug("778851")}}).
- `__exposedProps__` must now be set for Chrome JavaScript objects exposed to content. Attempts to access Chrome objects from content without `__exposedProps__` set will fail silently ({{bug("553102")}}).
- [`for..of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loops now work in terms of `.iterator()` and `.next()` ({{bug(725907)}}).

### WebGL

- The {{domxref("EXT_texture_filter_anisotropic")}} WebGL extension has been unprefixed. Using `"MOZ_EXT_texture_filter_anisotropic"` will present a warning from now on. The prefixed name is going to be removed in a future release ({{bug(776001)}}).

### SVG

_No change._

### MathML

- The parsing of the `align` attribute on {{MathMLElement("mtable")}} elements has been updated to treat optional spaces more correctly.

### XUL

- XUL [key](/en-US/docs/XUL/key) element supports "os" modifier which is Win key (Super or Hyper key) ({{bug("778732")}}).

### Network

- Removed the non-standard feature `XMLHttpRequest.onuploadprogress` which was deprecated in Firefox 14.

_No change._

### Developer tools

- Change JSTerm's $ helper function from getElementById to querySelector() ({{bug("751749")}}).

### User Agent

The Gecko part of the user agent string changed. The build date (which hadn't been updated since 2010) was removed, and the Gecko version number was put in its place instead. So `Gecko/20100101` -> `Gecko/17.0`. This may affect you if you are doing user agent sniffing.

## Changes for add-on and Mozilla developers

### Interface changes

- `nsIInputStream`
  - : The `available()` method returns 64-bit length instead of 32-bit ({{bug("215450")}}).
- `nsIDOMWindowUtils`
  - : The `sendMouseScrollEvent()` method has been replaced with `sendWheelEvent()` ({{bug("719320")}}).
- `nsIFilePicker`
  - : The `open()` method, to open the file dialog asynchronously, has been added and the `show()` method has been deprecated ({{bug("731307")}}).
- `nsIScriptSecurityManager`
  - : The `checkLoadURIStr()` and `checkLoadURI()` methods have been removed ({{bug("327244")}}).
- `nsIRefreshURI`
  - : The `setupRefreshURIFromHeader()` method has a added `principal` parameter ({{bug("327244")}}).

#### New interfaces

_None._

#### Removed interfaces

_None removed._

## See also

- [Firefox 17 Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/17.0/releasenotes/)
- [Aurora 17 is out, bringing better security and support for new standards](https://hacks.mozilla.org/2012/08/aurora-17-is-out/) (Mozilla Hacks)
- [Add-on Compatibility for Firefox 17](https://blog.mozilla.org/addons/2012/11/08/compatibility-for-firefox-17/) (Add-ons Blog)

### Older versions

{{Firefox_for_developers('16')}}
