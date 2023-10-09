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
- The [Credential Properties Extension (`credProps`)](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) is supported, allowing users to query if credentials are discoverable after creation/registration ([Firefox bug 1844437](https://bugzil.la/1844437)).
- The [`SubtleCrypto.deriveKey()`](/en-US/docs/Web/API/SubtleCrypto/deriveKey) method now supports the [HKDF](/en-US/docs/Web/API/SubtleCrypto/deriveKey#hkdf) algorithm as an option for its [`derivedKeyAlgorithm`](/en-US/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm) parameter (see [Firefox bug 1851928](https://bugzil.la/1851928)).
- The {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "parseCreationOptionsFromJSON()")}}, {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "parseRequestOptionsFromJSON()")}}, and {{domxref("PublicKeyCredential.toJSON", "toJSON()")}} methods of the {{domxref("PublicKeyCredential")}} interface are now supported.
  These are convenience methods for converting objects used for creating and sharing credentials objects to JSON representations that can be serialized/deserialized and shared with a server (see [Firefox bug 1823782](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/en-US/docs/Web/Accessibility/ARIA) reflection is now supported by default for attributes that do not reference other elements; only non-IDREF attributes are reflected. You can now get and set ARIA attributes on DOM elements directly via JavaScript APIs, rather than by using `setAttribute` and `getAttribute`. For example, `buttonElement.ariaPressed = "true";` is now supported in addition to `buttonElement.setAttribute("aria-pressed", "true");` ([Firefox bug 1785412](https://bugzil.la/1785412)).

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
