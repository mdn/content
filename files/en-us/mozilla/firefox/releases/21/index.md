---
title: Firefox 21 for developers
slug: Mozilla/Firefox/Releases/21
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

Firefox 21 was released on May 14, 2013. This article lists key changes that are useful not only for web developers, but also Firefox and Gecko developers as well as add-on developers.

## Changes for Web developers

### HTML

- The [`scoped`](/en-US/docs/Web/HTML/Element/style#scoped) attribute has been added to the {{HTMLElement("style")}} element. It allows to include styles that are isolated from the rest of the document. Such styles can be selected using the {{cssxref(":scope")}} CSS pseudo-element introduced in Firefox 20. ([Firefox bug 508725](https://bugzil.la/508725)).
- The new HTML {{HTMLElement("main")}} element has been implemented ([Firefox bug 820508](https://bugzil.la/820508)).

### JavaScript

- [E4X](/en-US/docs/E4X), an ancient JavaScript extension, has been removed. Implemented only in Gecko, it never got significant traction ([Firefox bug 788293](https://bugzil.la/788293)).
- [parseInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) no longer treats strings with leading "0" as octal ([Firefox bug 786135](https://bugzil.la/786135)).

### CSS

- The `none` value of {{cssxref("user-select", "-moz-user-select")}} has now the same behavior than the `-moz-none` value, aligning Gecko on WebKit (Chrome, Safari), Presto (Opera) and Trident (Internet Explorer) ([Firefox bug 816298](https://bugzil.la/816298)).
- On XHTML content, the `auto` value of {{cssxref("hyphens", "-moz-hyphens")}} incorrectly applied hyphenation rules when the language was not explicitly declared. This is fixed by ([Firefox bug 702121](https://bugzil.la/702121)).
- An `auto` value has been added to the CSS {{cssxref("-moz-orient")}} property. The `auto` value is equivalent to `horizontal` when applied to {{HTMLElement("meter")}} and {{HTMLElement("progress")}} ([Firefox bug 835883](https://bugzil.la/835883)).
- The media query [`-moz-windows-glass`](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-windows-glass) has been added on Windows 7 and earlier Windows system ([Firefox bug 816803](https://bugzil.la/816803)).

### DOM

- Support for {{domxref("RTCPeerConnection")}} (as `MozRTCPeerConnection`) is now enabled by default ([Firefox bug 796463](https://bugzil.la/796463)). It can be disabled again if necessary by setting `media.peerconnection.enabled` to false.
- The `origin` property has been added to the {{domxref("window.location")}} ([Firefox bug 828261](https://bugzil.la/828261)).
- The `valueAsDate` and `valueAsNumber` methods have been added for `<input type="time">` ([Firefox bug 781570](https://bugzil.la/781570)).
- The `min` and `max` attributes now apply to `<input type="time">` too ([Firefox bug 781572](https://bugzil.la/781572)).
- Some new keyCodes for volume control are supported ([Firefox bug 674739](https://bugzil.la/674739)).
- Some new keyCodes for ancient keyboard layout such as AS/400 are now supported on Windows and Linux ([Firefox bug 833719](https://bugzil.la/833719)).
- Various keyCode values for OEM specific keys on Windows are now supported again ([Firefox bug 833719](https://bugzil.la/833719)).
- The function [`window.crypto.getRandomValues`](/en-US/docs/Web/API/Crypto/getRandomValues) has been implemented ([Firefox bug 440046](https://bugzil.la/440046)).
- The methods {{domxref("NodeIterator.expandEntityReferences()")}} and {{domxref("TreeWalker.expandEntityReferences()")}}, no more in the latest DOM spec, has been removed ([Firefox bug 672190](https://bugzil.la/672190)).
- CSSOM: the method {{domxref("CSSKeyframesRule")}}`.insertRule` has been removed to {{domxref("CSSKeyframesRule")}}`.appendRule` to match a spec change ([Firefox bug 841896](https://bugzil.la/841896)).
- CSSOM If the given parameter given to {{domxref("CSSStyleSheet.insertRule")}} contains more than one rule, a {{domxref("DOMException")}} with a `SYNTAX_ERR` is now thrown ([Firefox bug 765599](https://bugzil.la/765599)).
- Until now, when the same headers were repeatedly set with [`XMLHttpRequest.setRequestHeader`](/en-US/docs/Web/API/XMLHttpRequest#setrequestheader), the last-specified value was used. This behavior has been changed to comply with the spec, so those values will be properly combined ([Firefox bug 819051](https://bugzil.la/819051)).

### SVG

- The [paint-order](/en-US/docs/Web/SVG/Attribute/paint-order) attribute has been implemented ([Firefox bug 828805](https://bugzil.la/828805)).
- The `svg.smil.enabled` preference has been removed. SMIL is always on. ([Firefox bug 835030](https://bugzil.la/835030))

### Networking

- We continue to update our CSP implementation to match the CSP 1.0 spec, which reached Candidate Recommendation:

  - Support for the spec-compliant `Content-Security-Policy` HTTP header (in addition to the experimental `X-Content-Security-Policy`) has been added ([Firefox bug 783049](https://bugzil.la/783049)).
    > **Note:** the patch for this new header landed in Firefox 21, it is disabled on builds ([Firefox bug 842657](https://bugzil.la/842657)).

### Worker

- The functions {{domxref("URL/createObjectURL", "URL.createObjectURL")}} and {{domxref("URL/revokeObjectURL", "URL.revokeObjectURL")}} are now included in the set of [functions available to workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Changes for add-on and Mozilla developers

- FUEL applications cannot use the Livemarks service anymore ([Firefox bug 834492](https://bugzil.la/834492)). The Livemarks service is deprecated and phased out in favor of the new async interface.
- `resource:///modules/` and `resource://gre/modules/` are no longer identical ([Firefox bug 755724](https://bugzil.la/755724)). This change was made because of work on the metro version of Firefox. If you load modules using `resource:///modules/`, you should check if you now want to use `resource://gre/modules/` instead. Note that some modules also moved from Firefox to Toolkit ([Firefox bug 840287](https://bugzil.la/840287) and [Firefox bug 811548](https://bugzil.la/811548) moved `NewTabUtils.jsm` and the thumbnail modules, respectively).
- The Add-on SDK is now included in Firefox ([Firefox bug 731779](https://bugzil.la/731779))
- History API saw numerous deprecated API being removed:

  - Replaced by `mozIAsyncFavicons`:

    - `nsIFaviconService::setFaviconUrlForPage`
    - `nsIFaviconService::setFaviconData`
    - `nsIFaviconService::getFaviconData`
    - `nsIFaviconService::getFaviconForPage`
    - `nsIFaviconService::setAndLoadFaviconForPage`
    - `nsIFaviconService::getFaviconImageForPage`
    - `nsIFaviconService::getFaviconDataAsDataURL`

  - Replaced by `mozIAsyncLivemarks`:

    - `nsILivemarkService::*`
    - `PlacesUtils.itemIsLivemark`
    - `PlacesUtils.nodeIsLivemarkContainer`
    - `PlacesUtils.nodeIsLivemarkItem`

  - Removed only third argument:

    - `PlacesUIUtils.showBookmarkDialog`

  - No more implemented by Places, use `mozIAsyncHistory` instead:

    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - No more needed, use `onDeleteURI` or `onItemRemoved`:

    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Never implemented properly:

    - `nsINavHistoryFullVisitResultNode`

  - Deprecated, use `mozIAsyncHistory::updatePlaces` instead:

    - `nsINavHistoryService::AddVisit`

- Added `nsIHttpChannel.redirectTo` to enable redirecting HTTP channels without fragile hacks.

## See also

- [Firefox 21 Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/21.0/releasenotes/)
- [Add-on Compatibility for Firefox 21](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)

### Older versions

{{Firefox_for_developers('20')}}
