---
title: Firefox 119 for developers
slug: Mozilla/Firefox/Releases/119
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 119 that affect developers. Firefox 119 was released on October 24, 2023.

## Changes for web developers

### HTML

#### Removals

- The {{HTMLElement('input')}} element no longer supports the non-standard `mozactionhint` attribute. Use [`enterkeyhint`](/en-US/docs/Web/HTML/Global_attributes/enterkeyhint) instead. (See [Firefox bug 1735980](https://bugzil.la/1735980) for more details.)

### CSS

- The {{cssxref("attr")}} CSS function fallback value is now supported. This allows the setting of a fallback value to be used if the [global attribute](/en-US/docs/Web/HTML/Global_attributes) is missing ([Firefox bug 1448248](https://bugzil.la/1448248)).

### JavaScript

- The {{jsxref("Object.groupBy()")}} and {{jsxref("Map.groupBy()")}} static methods for grouping the elements of an iterable are now supported (See [Firefox bug 1792650](https://bugzil.la/1792650) for more details.)
- The {{jsxref("String.prototype.isWellFormed()")}} and {{jsxref("String.prototype.toWellFormed()")}} methods respectively can be used to check if a string contains well-formed Unicode text (i.e. contains no [lone surrogates](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)) and sanitize an ill-formed string to well-formed Unicode text.
  (See [Firefox bug 1850755](https://bugzil.la/1850755) for more details).

### SVG

- The [SVG attributes](/en-US/docs/Web/SVG/Attribute) that accept a [`<length>`](/en-US/docs/Web/SVG/Content_type#length) value now support [level 3](https://www.w3.org/TR/css-values-3/#lengths) {{cssxref("length")}} [CSS data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) for all SVG elements. This enables the sizing of SVG elements based on font sizes (`cap`, `rem`, etc.), viewport (`vh`, `vw`, `vmin`, etc.), or absolute lengths (`px`, `cm`, etc.), e.g. `<line x1="10vw" y1="10vh" x2="50vw" y2="50vh"/>`. (See [Firefox bug 1287054](https://bugzil.la/1287054) for more details).

### HTTP

- The [`credentialless`](/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy#credentialless) directive of the {{HTTPHeader("Cross-Origin-Embedder-Policy")}} HTTP response header is now supported on desktop platforms (and mobile platforms other than Android), allowing `no-cors` requests for resources to be made on cross-origin servers that have not explicitly opted into it, albeit without cookies or other credentials ([Firefox bug 1851467](https://bugzil.la/1851467)).

### APIs

- The relative priority for send streams can now be specified by including the `sendOrder` property inside an options argument passed to [`WebTransport.createBidirectionalStream()`](/en-US/docs/Web/API/WebTransport/createBidirectionalStream) and [`WebTransport.createUnidirectionalStream()`](/en-US/docs/Web/API/WebTransport/createUnidirectionalStream) ([Firefox bug 1816925](https://bugzil.la/1816925)).
- The [`getAuthenticatorData()`](/en-US/docs/Web/API/AuthenticatorAttestationResponse/getAuthenticatorData), [`getPublicKeyAlgorithm()`](/en-US/docs/Web/API/AuthenticatorAttestationResponse/getPublicKeyAlgorithm), and [`getPublicKey()`](/en-US/docs/Web/API/AuthenticatorAttestationResponse/getPublicKey) methods of the [`AuthenticatorAttestationResponse`](/en-US/docs/Web/API/AuthenticatorAttestationResponse) interface are now supported (see [Firefox bug 1816519](https://bugzil.la/1816519) and [Firefox bug 1816520](https://bugzil.la/1816520)).
- The [Credential Properties Extension (`credProps`)](/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) of the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) is supported, allowing users to query if credentials are discoverable after creation/registration ([Firefox bug 1844437](https://bugzil.la/1844437)).
- The [`SubtleCrypto.deriveKey()`](/en-US/docs/Web/API/SubtleCrypto/deriveKey) method now supports the [HKDF](/en-US/docs/Web/API/SubtleCrypto/deriveKey#hkdf) algorithm as an option for its [`derivedKeyAlgorithm`](/en-US/docs/Web/API/SubtleCrypto/deriveKey#derivedkeyalgorithm) parameter (see [Firefox bug 1851928](https://bugzil.la/1851928)).
- The {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "parseCreationOptionsFromJSON()")}}, {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "parseRequestOptionsFromJSON()")}}, and {{domxref("PublicKeyCredential.toJSON", "toJSON()")}} methods of the {{domxref("PublicKeyCredential")}} interface are now supported.
  These are convenience methods for converting objects used for creating and sharing credentials objects to JSON representations that can be serialized/deserialized and shared with a server (see [Firefox bug 1823782](https://bugzil.la/1823782)).

#### DOM

- [ARIA](/en-US/docs/Web/Accessibility/ARIA) reflection is now supported by default for attributes that do not reference other elements; only non-IDREF attributes are reflected. You can now get and set ARIA attributes on DOM elements directly via JavaScript APIs, rather than by using `setAttribute` and `getAttribute`. For example, `buttonElement.ariaPressed = "true";` is now supported in addition to `buttonElement.setAttribute("aria-pressed", "true");` ([Firefox bug 1785412](https://bugzil.la/1785412)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- When performing a `pointerDown` action with the middle or right mouse button pressed, the `mousedown` event as emitted by the related HTML element had the value of the `buttons` property swapped ([Firefox bug 1850086](https://bugzil.la/1850086)).

- When performing a `scroll` action of input type `wheel` with an origin set to `pointer` an `invalid argument` error was inappropriately raised, whereas per the current WebDriver specification this combination is not supported ([Firefox bug 1850166](https://bugzil.la/1850166)).

#### WebDriver BiDi

- Added the [`browsingContext.reload`](https://w3c.github.io/webdriver-bidi/#command-browsingContext-reload) command that allows users to reload the page or a frame that is currently displayed within a given browsing context ([Firefox bug 1830859](https://bugzil.la/1830859)).

- Added the [`browsingContext.userPromptClosed`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-userPromptClosed) event that is emitted when a user prompt of type `alert`, `confirm`, or `prompt` got closed ([Firefox bug 1824221](https://bugzil.la/1824221)).

- Added the [`browsingContext.navigationStarted`](https://w3c.github.io/webdriver-bidi/#event-browsingContext-navigationStarted) event that is emitted when a new navigation is started by Firefox ([Firefox bug 1756595](https://bugzil.la/1756595)).

- Added the [`script.realmCreated`](https://w3c.github.io/webdriver-bidi/#event-script-realmCreated) and [`script.realmDestroyed`](https://w3c.github.io/webdriver-bidi/#event-script-realmDestroyed) events that allow users to monitor the lifetime of JavaScript Realms of a given browsing context. Such a Realm is basically an isolated execution environment (`sandbox`) with its own unique global object (window) ([Firefox bug 1788657](https://bugzil.la/1788657), [Firefox bug 1788659](https://bugzil.la/1788659)).

- The `browsingContext.userPromptOpened` event was accidentally sent when a HTTP Authentication dialog was opened ([Firefox bug 1853302](https://bugzil.la/1853302)).

- Unwanted events with the `context` field set to `null` will no longer be emitted. Because the underlying browsing context has been closed such events are no longer valid ([Firefox bug 1847563](https://bugzil.la/1847563)).

#### Marionette

- The list of possible error codes when trying to install a WebExtension by using the `Addon:Install` command has been updated to match the latest error codes of Firefox ([Firefox bug 1852537](https://bugzil.la/1852537)).

## Older versions

{{Firefox_for_developers}}
