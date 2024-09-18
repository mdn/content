---
title: Firefox 129 for developers
slug: Mozilla/Firefox/Releases/129
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 129 that affect developers. Firefox 129 was released on [August 6, 2024](https://whattrainisitnow.com/release/?version=129).

## Changes for web developers

### CSS

- The [@starting-style](/en-US/docs/Web/CSS/@starting-style) CSS at-rule is supported. This lets you define starting values for properties set on an element that you want to transition from when the element receives its first style update. Currently animating from `display: none;` is not supported ([Firefox bug 1834876](https://bugzil.la/1834876) and [Firefox bug 1834877](https://bugzil.la/1834877)).
- The {{CSSXRef("transition-behavior")}} CSS property is supported. This lets you specify if discrete properties, such as {{CSSXRef("display")}} and {{CSSXRef("overlay")}}, can be transitioned by setting the value to [`allow-discrete`](/en-US/docs/Web/CSS/transition-behavior#allow-discrete). ([Firefox bug 1901645](https://bugzil.la/1901645)).
- `-webkit-font-feature-settings` has been implemented as an alias of the standard {{cssxref("font-feature-settings")}} property ([Firefox bug 1595620](https://bugzil.la/1595620)).

### JavaScript

- {{jsxref("Float16Array")}} typed arrays are now supported, along with {{jsxref("DataView.prototype.getFloat16()")}} and {{jsxref("DataView.prototype.setFloat16()")}} for reading and setting `Float16Array` values from a {{jsxref("DataView")}}, and the {{jsxref("Math.f16round()")}} static method, which can be used to round numbers to 16 bits. The new type is useful for sharing data with a GPU, in particular for use cases where it makes sense to trade off precision for memory consumption. ([Firefox bug 1903329](https://bugzil.la/1903329).)
- Regular expressions can now use the same name for [named capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group) in different [disjunction alternatives](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction). This is allowed because only one alternative in a disjunction will match, so a name declared in several alternatives can only reference one captured group. The names must still be unique within a particular alternative, and across the rest of the pattern. ([Firefox bug 1903288](https://bugzil.la/1903288).)

### HTTP

- HTTPS DNS records can now be resolved using the operating system's DNS resolver on Windows 11, Linux, and Android 10+. This ensures that [DNS over HTTPS (DoH)](https://support.mozilla.org/en-US/kb/dns-over-https-doh-faqs) will be used if a user has enabled it on the device, even if it is not enabled in the browser. This feature allows the use of HTTP/3 without needing to use the {{httpheader("Alt-Svc")}} header and enables automatic upgrade of HTTP requests to HTTPS when the HTTPS DNS record is present. Most importantly, it now allows the use of [Encrypted Client Hello (ECH)](https://support.mozilla.org/en-US/kb/faq-encrypted-client-hello) privacy feature even when DoH is only enabled on the device, not in the browser. ([Firefox bug 1906239](https://bugzil.la/1906239)).

### APIs

- The deprecated {{domxref("TextEvent", "textInput")}} event is now supported, enabling web apps that use legacy libraries or frameworks that rely on these events.
  The [`beforeinput` event](/en-US/docs/Web/API/Element/beforeinput_event) supersedes `textInput`, and should always be used by new applications.
  ([Firefox bug 1901923](https://bugzil.la/1901923).)
- The default `.toJSON()` methods {{domxref("GeolocationCoordinates.toJSON()")}} and {{domxref("GeolocationPosition.toJSON()")}} are now supported, enabling serialization of `GeolocationCoordinates` and `GeolocationPosition` objects with {{jsxref("JSON.stringify()")}} ([Firefox bug 1890706](https://bugzil.la/1890706)).
- {{domxref("CSSPageDescriptors")}} is now supported, and is used as the type for {{domxref("CSSPageRule.style")}} instead of {{domxref("CSSStyleDeclaration")}} — matching the current specification.
  This ensures that `CSSPageDescriptors` only exposes the `@page` related properties, rather than all properties, and also resolves an issue where setting the page [`size`](/en-US/docs/Web/CSS/@page#size) in a CSS `@page` at-rule was not reflected in `CSSPageRule.style`.
  ([Firefox bug 1890842](https://bugzil.la/1890842), [Firefox bug 1867106](https://bugzil.la/1867106).)
- {{domxref('MediaCapabilities.decodingInfo()')}} can now get decoding information for a particular _encrypted media_ configuration as well unencrypted media, allowing applications to tell ahead of time if the configuration is supported, and whether it will play the content smoothly and be power efficient. Changes include a new property `keySystemConfiguration` on the method's `configuration` argument that defines the properties of the key system used to encrypt the media, and a new `keySystemAccess` property on the returned object, which is a {{domxref('MediaKeySystemAccess')}} object that can be used to create keys and decode the content for playback. ([Firefox bug 1898344](https://bugzil.la/1898344)).
- Firefox now fires events for a synchronous {{domxref("XMLHttpRequest")}} before firing the events for any ongoing asynchronous `XMLHttpRequest`. This fixes a long-standing behavioral difference with other browsers. Note that while this should fix some sites, it may also cause degraded performance on sites that expect the old "non-blocking" behaviour for a synchronous `XMLHttpRequest`. Please [file a bug](https://bugzil.la/) if your website should have been fixed by this change but still appears to have related issues. ([Firefox bug 697151](https://bugzil.la/697151).)
- The [Ed25519](/en-US/docs/Web/API/SubtleCrypto/sign#ed25519) digital signature algorithm is supported by the [Web Crypto API](/en-US/docs/Web/API/Web_Crypto_API), and can be used in the {{domxref("SubtleCrypto")}} methods: {{domxref("SubtleCrypto.sign()", "sign()")}}, {{domxref("SubtleCrypto.verify()", "verify()")}}, {{domxref("SubtleCrypto.generateKey()", "generateKey()")}}, {{domxref("SubtleCrypto.importKey()", "importKey()")}} and {{domxref("SubtleCrypto.exportKey()", "exportKey()")}} ([Firefox bug 1804788](https://bugzil.la/1804788)).
- The {{domxref("PerformanceResourceTiming.contentType","contentType")}} and {{domxref("PerformanceResourceTiming.responseStatus","responseStatus")}} properties of the {{domxref("PerformanceResourceTiming")}} interface are now supported, indicating the content type of the fetched resource and the HTTP response status code returned when fetching the resource, respectively. ([Firefox bug 1800443](https://bugzil.la/1800443), [Firefox bug 1796785](https://bugzil.la/1796785).)
- The {{domxref("RTCDTMFSender.canInsertDTMF")}} property is now supported. It enables you to check whether a WebRTC sender can insert DTMF tones into the outgoing connection. If supported, you can insert DTMF tones by using {{domxref("RTCDTMFSender.insertDTMF()")}}. ([Firefox bug 1623193](https://bugzil.la/1623193)).

#### Removals

- The {{domxref('Navigator.vibrate()')}} method has been removed ([Firefox bug 1653318](https://bugzil.la/1653318), [Firefox bug 1900037](https://bugzil.la/1900037)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### Removals

- By default CDP (Chrome DevTools Protocol) is now disabled. It can be re-enabled via the `remote.active-protocols` preference. You can learn more about this on the following [blog post](https://fxdx.dev/deprecating-cdp-support-in-firefox-embracing-the-future-with-webdriver-bidi/). ([Firefox bug 1882089](https://bugzil.la/1882089))

#### WebDriver BiDi

- Added support for the `network.setCacheBehavior` command, which allows to configure the browser to bypass the network cache either globally or for a set of top level browsing contexts. ([Firefox bug 1901032](https://bugzil.la/1901032) and [Firefox bug 1906100](https://bugzil.la/1906100))
- Added support for prompts of type `beforeUnload` which can now be handled in the same way as other user prompts. ([Firefox bug 1824220](https://bugzil.la/1824220))
- We now support all arguments for the `network.provideResponse` command when used in the `beforeRequestSent` phase, such as the `body` parameter which allows to return mock responses. ([Firefox bug 1853882](https://bugzil.la/1853882))
- The `browsingContext.userPromptOpened` now includes the `handler` field which contains the user prompt handler configured for the prompt which triggered the event. ([Firefox bug 1904822](https://bugzil.la/1904822))
- The `BrowsingContextInfo` type will now provide an `originalOpener` field which is the context id of the "opener" browsing context. This will be set for instance if the new context was created by using a link (even with `rel=noopener`), `window.open` etc. If the new browsing context has no relevant opener, the field will be set to null. ([Firefox bug 1898004](https://bugzil.la/1898004))
- Network events (`beforeRequestSent`, `responseStarted` and `responseCompleted`) are now created for requests to data URLs. In Firefox 129, only navigation requests will be listed. ([Firefox bug 1805176](https://bugzil.la/1805176))
- We added support for the `promptUnload` argument for `browsingContext.close`, which allows to bypass "beforeunload" prompts when closing a context via this command. ([Firefox bug 1862380](https://bugzil.la/1862380))
- Fixed a bug in `network.continueRequest` where you could not set multiple values for the same header. ([Firefox bug 1904379](https://bugzil.la/1904379))
- Fixed a bug for the `unhandledPromptBehavior` capability, which could not be used with BiDi only sessions. ([Firefox bug 1907935](https://bugzil.la/1907935))
- Fixed a bug with `session.end` and `browser.close` which would unexpectedly fail when no Marionette client was connected. ([Firefox bug 1890091](https://bugzil.la/1890091))
- Fixed a bug with `browsingContext.navigate` which would fail to resolve if a same-document navigation started on "beforeunload". ([Firefox bug 1879163](https://bugzil.la/1879163))
- Improved the `browser.close` command to discard all "beforeunload" prompts when closing the top-level browsing contexts. ([Firefox bug 1873196](https://bugzil.la/1873196))
- Fixed a bug in the `browsingContext.userPromptOpened` event, which would unexpectedly miss the `defaultValue` field ([Firefox bug 1859814](https://bugzil.la/1859814))
- Fixed an issue with the `network.responseCompleted` event during authentication flows, which was emitted too many times compared to the specifications. Only one `responseCompleted` (or `fetchError`) event is expected for the whole HTTP authentication flow. ([Firefox bug 1906106](https://bugzil.la/1906106))
- Improved the `browser.removeUserContext` command to skip all "beforeunload" prompts. ([Firefox bug 1876062](https://bugzil.la/1876062))

## Older versions

{{Firefox_for_developers}}
