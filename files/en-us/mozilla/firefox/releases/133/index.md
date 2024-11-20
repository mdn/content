---
title: Firefox 133 for developers
slug: Mozilla/Firefox/Releases/133
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 133 that affect developers. Firefox 133 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [November 26, 2024](https://whattrainisitnow.com/release/?version=133).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- Support for {{jsxref("Uint8Array")}} methods to ease conversions between {{glossary("base64")}}- and hex-encoded strings and byte arrays. ([Firefox bug 1917885](https://bugzil.la/1917885) and [Firefox bug 1862220](https://bugzil.la/1862220)).

  The new methods include:

  - {{jsxref("Uint8Array.fromBase64()")}} and {{jsxref("Uint8Array.fromHex()")}} static methods for constructing a new `Uint8Array` object from a base64- and hex-encoded string, respectively.
  - {{jsxref("Uint8Array.prototype.setFromBase64()")}}, and {{jsxref("Uint8Array.prototype.setFromHex()")}} instance methods for populating an existing `Uint8Array` object with bytes from a base64- or hex-encoded string.
  - {{jsxref("Uint8Array.prototype.toBase64()")}} and {{jsxref("Uint8Array.prototype.toHex()")}} instance methods, which return a base64- and hex- encoded string from the data in a `Uint8Array` object.

#### Removals

### SVG

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- The {{domxref('WorkerNavigator.permissions')}} property is now supported, allowing the [Permissions API](/en-US/docs/Web/API/Permissions_API) to be used in [workers](/en-US/docs/Web/API/Web_Workers_API) as well as the main window thread. ([Firefox bug 1193373](https://bugzil.la/1193373)).
- The {{domxref("EventSource")}} interface to handle [server-sent events](/en-US/docs/Web/API/Server-sent_events) is now supported in [service workers](/en-US/docs/Web/API/Service_Worker_API). ([Firefox bug 1681218](https://bugzil.la/1681218)).
- The {{domxref("ImageDecoder")}}, {{domxref("ImageTrackList")}}, and {{domxref("ImageTrack")}} interfaces of the [WebCodecs API](/en-US/docs/Web/API/WebCodecs_API) are now supported, enabling the decoding images from the main and worker threads. ([Firefox bug 1923755](https://bugzil.la/1923755)).
- The [`beforetoggle`](/en-US/docs/Web/API/HTMLElement/beforetoggle_event) and [`toggle`](/en-US/docs/Web/API/HTMLElement/toggle_event) events of the {{domxref("HTMLElement")}} interface are now fired at {{HTMLElement("dialog")}} elements immediately before and after they are shown or hidden, respectively. The `beforetoggle` can be used, for example, to apply/remove classes that control the animation of a dialog, or reset the state of a dialog form before it is shown. The `toggle` event can be used to get change notification of the open state, which otherwise requires a {{domxref("MutationObserver")}}. ([Firefox bug 1876762](https://bugzil.la/1876762)).
- The [`onwaitingforkey`](/en-US/docs/Web/API/HTMLMediaElement/waitingforkey_event) content attribute can now be specified on {{htmlelement("audio")}}/{{htmlelement("video")}} elements to set an inline event handler for the `waitingforkey` event. ([Firefox bug 1925952](https://bugzil.la/1925952)).
- {{domxref("ServiceWorkerContainer")}} is now exposed in all worker contexts via {{domxref("WorkerNavigator.serviceWorker")}}, allowing workers to inspect and manage the {{domxref("ServiceWorkerRegistration","service worker registrations","","nocode")}} associated with the current origin. Previously `ServiceWorkerContainer` was only available in the main thread, via {{domxref("Navigator.serviceWorker")}}. ([Firefox bug 1113522](https://bugzil.la/1113522)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

- Fixed a bug in the {{WebExtAPIRef("declarativeNetRequest")}} API that prevented rule registration after a browser restart ([Firefox bug 1921353](https://bugzil.la/1921353)). This bug affected extensions that rely on {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules")}} or {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}}. This fix has also been backported to Firefox ESR 128.5 and Firefox ESR 115.18.

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 133 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **contenteditable plaintext-only value:** `dom.element.contenteditable.plaintext-only.enabled`.

  The `plaintext-only` value of the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) global attribute indicates that the element is editable; rich text formatting is disabled and any formatting in pasted text is automatically stripped. ([Firefox bug 1922723](https://bugzil.la/1922723).)

## Older versions

{{Firefox_for_developers}}
