---
title: Firefox 133 for developers
slug: Mozilla/Firefox/Releases/133
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 133 that affect developers. Firefox 133 was released on [November 26, 2024](https://whattrainisitnow.com/release/?version=133).

## Changes for web developers

### HTML

- The [`viewport <meta>` tag](/en-US/docs/Web/HTML/Viewport_meta_tag) now supports the [`interactive-widget`](/en-US/docs/Web/HTML/Viewport_meta_tag#the_effect_of_interactive_ui_widgets) attribute, this influences the size of the viewport when common UI widgets, such as virtual keyboards, are added to the screen. ([Firefox bug 1831649](https://bugzil.la/1831649) and [Firefox bug 1920755](https://bugzil.la/1920755)).

### CSS

No notable changes

### JavaScript

- Support for {{jsxref("Uint8Array")}} methods to ease conversions between {{glossary("base64")}}- and hex-encoded strings and byte arrays. ([Firefox bug 1917885](https://bugzil.la/1917885) and [Firefox bug 1862220](https://bugzil.la/1862220)).

  The new methods include:

  - {{jsxref("Uint8Array.fromBase64()")}} and {{jsxref("Uint8Array.fromHex()")}} static methods for constructing a new `Uint8Array` object from a base64- and hex-encoded string, respectively.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}, and {{jsxref("Uint8Array.prototype.setFromHex()")}} instance methods for populating an existing `Uint8Array` object with bytes from a base64- or hex-encoded string.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} and {{jsxref("Uint8Array.prototype.toHex()")}} instance methods, which return a base64- and hex- encoded string from the data in a `Uint8Array` object.

### APIs

- The {{domxref('WorkerNavigator.permissions')}} property is now supported, allowing the [Permissions API](/en-US/docs/Web/API/Permissions_API) to be used in [workers](/en-US/docs/Web/API/Web_Workers_API) as well as the main window thread. ([Firefox bug 1193373](https://bugzil.la/1193373)).
- The {{domxref("EventSource")}} interface to handle [server-sent events](/en-US/docs/Web/API/Server-sent_events) is now supported in [service workers](/en-US/docs/Web/API/Service_Worker_API). ([Firefox bug 1681218](https://bugzil.la/1681218)).
- The {{domxref("ImageDecoder")}}, {{domxref("ImageTrackList")}}, and {{domxref("ImageTrack")}} interfaces of the [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API) are now supported, enabling the decoding images from the main and worker threads. ([Firefox bug 1923755](https://bugzil.la/1923755)).
- The [`beforetoggle`](/en-US/docs/Web/API/HTMLElement/beforetoggle_event) and [`toggle`](/en-US/docs/Web/API/HTMLElement/toggle_event) events of the {{domxref("HTMLElement")}} interface are now fired at {{HTMLElement("dialog")}} elements immediately before and after they are shown or hidden, respectively. The `beforetoggle` can be used, for example, to apply/remove classes that control the animation of a dialog, or reset the state of a dialog form before it is shown. The `toggle` event can be used to get change notification of the open state, which otherwise requires a {{domxref("MutationObserver")}}. ([Firefox bug 1876762](https://bugzil.la/1876762)).
- The [`keepalive`](/en-US/docs/Web/API/RequestInit#keepalive) initialization option to the global {{domxref('Window.fetch','fetch()')}} method and the [`Request()` constructor](/en-US/docs/Web/API/Request/Request#options) are now supported, along with the {{domxref("Request.keepalive")}} property. `keepalive` can be set to `true` to prevent the browser from aborting the associated request if the page that initiated it is unloaded before the request is complete.
  This might be used, for example, to send analytics at the end of a session, even if the user navigates away from or closes the page.

  Using `fetch()` with `keepalive` has some advantages over using {{domxref("Navigator.sendBeacon()")}} for the same purpose, such as allowing the use of HTTP methods other than [`POST`](/en-US/docs/Web/HTTP/Methods/POST), customizable request properties, and access the server response via the fetch {{jsxref("Promise")}} fulfillment. It is also available in [service workers](/en-US/docs/Web/API/Service_Worker_API). ([Firefox bug 1906952](https://bugzil.la/1906952), [Firefox bug 1923044](https://bugzil.la/1923044)).

- The [`onwaitingforkey`](/en-US/docs/Web/API/HTMLMediaElement/waitingforkey_event) content attribute can now be specified on {{htmlelement("audio")}}/{{htmlelement("video")}} elements to set an inline event handler for the `waitingforkey` event. ([Firefox bug 1925952](https://bugzil.la/1925952)).
- {{domxref("ServiceWorkerContainer")}} is now exposed in all worker contexts via {{domxref("WorkerNavigator.serviceWorker")}}, allowing workers to inspect and manage the {{domxref("ServiceWorkerRegistration","service worker registrations","","nocode")}} associated with the current origin. Previously `ServiceWorkerContainer` was only available in the main thread, via {{domxref("Navigator.serviceWorker")}}. ([Firefox bug 1113522](https://bugzil.la/1113522)).
- The [`name`](/en-US/docs/Web/API/PerformanceNavigationTiming#performanceentry.name) property of `PerformanceNavigationTiming` now omits [text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments) from the returned URL, matching the specification. This kind of {{domxref("PerformanceResourceTiming")}} object is returned by {{domxref("Performance.getEntries()")}} for entries with an {{domxref("PerformanceEntry/entryType", "entryType")}} of `navigation`. ([Firefox bug 1919565](https://bugzil.la/1919565)).

#### Removals

- The [`options.shadowRoots`](/en-US/docs/Web/API/Document/caretPositionFromPoint#shadowroots) argument for passing {{domxref("ShadowRoot")}} objects to the {{domxref('Document.caretPositionFromPoint()')}} method has been withdrawn from the release.
  The feature can be tested in the Nightly release and is expected to re-release in future. ([Firefox bug 1914596](https://bugzil.la/1914596)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added support for the `url` argument for the `network.continueRequest` command, allowing requests to be transparently redirected to another URL ([Firefox bug 1898158](https://bugzil.la/1898158)).
- Updated `browsingContext.print` to throw an `InvalidArgumentError` when used with incorrect dimensions ([Firefox bug 1886382](https://bugzil.la/1886382)).
- Fixed `script.evaluate` and `script.callFunction` to allow the use of `document.open` in sandbox realms ([Firefox bug 1918288](https://bugzil.la/1918288)).
- Fixed a bug where the `browsingContext.load` event might contain the wrong navigation ID if a same-document navigation occurred during the main navigation ([Firefox bug 1922327](https://bugzil.la/1922327)).
- Fixed another edge case where commands could fail with an `UnknownError` due to navigation ([Firefox bug 1923899](https://bugzil.la/1923899)).

#### Marionette

- Updated Marionette to better handle window positioning on Linux with Wayland ([Firefox bug 1857571](https://bugzil.la/1857571)).
- Fixed a bug that could leave an empty `style` attribute on an element when trying to click or clear it ([Firefox bug 1922709](https://bugzil.la/1922709)).
- Updated the error message sent for `UnexpectedAlertOpen` errors to include the text of the corresponding alert ([Firefox bug 1924469](https://bugzil.la/1924469)).

## Changes for add-on developers

- {{WebExtAPIRef("cookies.get")}} now orders cookies according to the [5.4 The Cookie Header section of the HTTP State Management Mechanism (RFC 6265)](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4). This impacts call results when a cookie has variants with different path components. Previously, the earliest created cookie was matched by {{WebExtAPIRef("cookies.get")}}, {{WebExtAPIRef("cookies.remove")}}, {{WebExtAPIRef("cookies.set")}}, and {{WebExtAPIRef("cookies.getAll")}}. After this change, the cookie with the longest matching path is returned. ([Firefox bug 1798655](https://bugzil.la/1798655))
- Fixed a bug in the {{WebExtAPIRef("declarativeNetRequest")}} API that prevented rule registration after a browser restart ([Firefox bug 1921353](https://bugzil.la/1921353)). This bug affected extensions that rely on {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} or {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}}. This fix has also been backported to Firefox ESR 128.5 and Firefox ESR 115.18.
- Fixed a bug that prevented [`window.close()`](/en-US/docs/Web/API/Window/close) called from a [sidebar](/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) from closing the sidebar.

## Experimental web features

These features are newly shipped in Firefox 133 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **contenteditable plaintext-only value:** `dom.element.contenteditable.plaintext-only.enabled`.

  The `plaintext-only` value of the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) global attribute indicates that the element is editable; rich text formatting is disabled and any formatting in pasted text is automatically stripped. ([Firefox bug 1922723](https://bugzil.la/1922723).)

- **:has-slotted CSS pseudo-class:** `layout.css.has-slotted-selector.enabled`.

  The {{CSSXRef(":has-slotted")}} [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is used to style elements in {{HTMLElement("template")}} that have content added to a {{HTMLElement("slot")}} element when rendering a [web component](/en-US/docs/Web/API/Web_components). ([Firefox bug 1921747](https://bugzil.la/1921747).)

## Older versions

{{Firefox_for_developers}}
