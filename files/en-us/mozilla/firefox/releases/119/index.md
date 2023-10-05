---
title: Firefox 119 for developers
slug: Mozilla/Firefox/Releases/119
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 119 that affect developers. Firefox 119 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) and ships on [October 24, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

- The {{HTMLElement('input')}} element no longer supports the non-standard `mozactionhint` attribute. Use [`enterkeyhint`](/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) instead. (See [Firefox bug 1735980](https://bugzil.la/1735980) for more details.)

### CSS

#### Removals

### JavaScript

- The {{jsxref("Object.groupBy()")}} and {{jsxref("Map.groupBy()")}} static methods for grouping the elements of an iterable are now supported (See [Firefox bug 1792650](https://bugzil.la/1792650) for more details.)
- The {{jsxref("String.prototype.isWellFormed()")}} and {{jsxref("String.prototype.toWellFormed()")}} methods respectively can be used to check if a string contains well-formed Unicode text (i.e. contains no [lone surrogates](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)) and sanitize an ill-formed string to well-formed Unicode text.
  (See [Firefox bug 1850755](https://bugzil.la/1850755) for more details).

#### Removals

### SVG

#### Removals

### HTTP

- The [`credentialless`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy#credentialless) directive of the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP response header is now supported on desktop platforms (and mobile platforms other than Android), allowing `no-cors` requests for resources to be made on cross-origin servers that have not explicitly opted into it, albeit without cookies or other credentials ([Firefox bug 1851467](https://bugzil.la/1851467)).

#### Removals

### Security

#### Removals

### APIs

- The relative priority for send streams can now be specified by including the `sendOrder` property inside an options argument passed to [`WebTransport.createBidirectionalStream()`](/en-US/docs/Web/API/WebTransport/createBidirectionalStream) and [`WebTransport.createUnidirectionalStream()`](/en-US/docs/Web/API/WebTransport/createUnidirectionalStream) ([Firefox bug 1816925](https://bugzil.la/1816925)).
- The [`getAuthenticatorData()`](/en-US/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/en-US/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm), and [`getPublicKey()`](/en-US/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) methods of the [`AuthenticatorAttestationResponse`](/en-US/docs/Web/API/AuthenticatorAttestationResponse) interface are now supported (see [Firefox bug 1816519](https://bugzil.la/1816519) and [Firefox bug 1816520](https://bugzil.la/1816520)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(118)}}
