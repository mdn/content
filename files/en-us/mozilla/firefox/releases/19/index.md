---
title: Firefox 19 for developers
slug: Mozilla/Firefox/Releases/19
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 19 was released on February 19, 2013. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### JavaScript

- [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [`Set`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) objects have changed from having a `size()` method to a `size` property ([Firefox bug 807001](https://bugzil.la/807001))
- [`Map`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) and [`Set`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) objects also have a clear() method now. ([Firefox bug 805003](https://bugzil.la/805003))

### CSS

- Support for the viewport-relative {{cssxref("&lt;length&gt;")}} units, `vh`, `vw`, `vmin`, and `vmax`, has landed ([Firefox bug 503720](https://bugzil.la/503720))
- CSS Flexbox has been unprefixed, but remains disabled by default ([Firefox bug 801098](https://bugzil.la/801098)).
- The `-moz-initial` value has been unprefixed ([Firefox bug 806068](https://bugzil.la/806068)). `-moz-initial` will be kept for a while as an alias; however, authors are strongly encouraged to switch over to `initial`.
- The CSS {{cssxref("text-transform")}} property now supports the `full-width` keyword, which allows a more seamless inclusion of Latin characters in text using ideographic fixed-width characters, like Chinese or Japanese ([Firefox bug 774560](https://bugzil.la/774560)).
- The CSS {{cssxref("page-break-inside")}} has been implemented ([Firefox bug 685012](https://bugzil.la/685012)).
- The CSS {{cssxref("calc", "calc()")}} function can now be used on `<color-stop>` (on {{cssxref("&lt;gradient&gt;")}}).
- The CSS {{cssxref("@page")}} at-rule is now supported ([Firefox bug 115199](https://bugzil.la/115199)). Note that the pseudo-classes {{cssxref(":first")}}, {{cssxref(":right")}}, and {{cssxref(":left")}} are not yet implemented.
- The `:-moz-placeholder` pseudo-class is replaced by the `::-moz-placeholder` pseudo-_element_ ([Firefox bug 737786](https://bugzil.la/737786)).
- Declarations qualified with `!important` appearing in {{cssxref("@keyframes")}} are now ignored, per spec ([Firefox bug 784466](https://bugzil.la/784466)).

### DOM/APIs

- The {{domxref("Element.getElementsByTagName")}}, {{domxref("Element.getElementsByTagNameNS")}} and {{domxref("Element.getElementsByClassName")}} methods now return a live {{domxref("HTMLCollection")}} ([Firefox bug 799464](https://bugzil.la/799464)).
- The {{domxref("File")}} `mozLastModifiedDate` property has been implemented. ([Firefox bug 793955](https://bugzil.la/793955))
- The {{domxref("File")}} lastModifiedDate property returns the current date, when the date of the last modification is unknown. ([Firefox bug 793459](https://bugzil.la/793459))
- The {{domxref("CanvasRenderingContext2D")}} `isPointInStroke` method has been implemented ([Firefox bug 803124](https://bugzil.la/803124)).
- The {{domxref("HTMLCanvasElement")}} `toBlob` method has been implemented ([Firefox bug 648610](https://bugzil.la/648610)).
- The `Node.isSupported` and the {{domxref("document.implementation", "document.implementation.hasFeature()")}} methods have been changed to always return `true` ([Firefox bug 801425](https://bugzil.la/801425)).
- When calling `document.createElement(null)`, `null` will now be stringified and works like `document.createElement("null")`.
- The {{domxref("TextDecoder")}} and {{domxref("TextEncoder")}} interfaces have been updated to match the latest spec ([Firefox bug 801487](https://bugzil.la/801487)).

### XForms

Support for XForms has been [**removed**](https://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms) in Firefox 19.

## Changes for add-on and Mozilla developers

> [!NOTE]
> A key change in Firefox 19 is that `nsresult` is now strongly typed. This will help make it easier to detect bugs that are caused by mishandling of return values, but may cause existing code to break if it's making incorrect assumptions in this regard.

- `getBrowserSelection()` now returns the selected text in a text input field. As a result, `gContextMenu.isTextSelected` will be `true` when the user selects text in a text input field that is not a password field. ([Firefox bug 565717](https://bugzil.la/565717))
- Dict.jsm: `Dict()` now takes a JSON String. `Dict.toJSON()` was added, and it returns a JSON String. ([Firefox bug 727967](https://bugzil.la/727967))

### Interface changes

- `nsIImgLoadingContent`
  - : The parameter (aObserver) of `addObserver()` method changes from `imgIDecoderObserver` to `imgINotificationObserver`. The `notify()` method of `imgINotificationObserver` is not scriptable, so you need to use `createScriptedObserver()` from `imgITools`.
- `nsIChannel`
  - : The property `contentLength` changed from `long` to `int64_t`.

## See also

- [Firefox 19 Beta Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/19.0beta/releasenotes/)
- [Add-on Compatibility for Firefox 19](https://blog.mozilla.org/addons/2013/02/07/compatibility-for-firefox-19/)

### Older versions

{{Firefox_for_developers}}
