---
title: Firefox 131 for developers
slug: Mozilla/Firefox/Releases/131
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 131 that affect developers. Firefox 131 was released on [October 1, 2024](https://whattrainisitnow.com/release/?version=131).

## Changes for web developers

### CSS

- The `inset-area` CSS property has been renamed to {{CSSXRef("position-area")}} in preparation for further implementation of [Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning). Currently, this property is only used internally for parsing values. The Anchor Positioning features are being progressively rolled out behind a preference. See [Experimental features in Firefox: CSS Anchor Positioning](/en-US/docs/Mozilla/Firefox/Experimental_features#css_anchor_positioning) for more information. ([Firefox bug 1909358](https://bugzil.la/1909358) and [Firefox bug 1838746](https://bugzil.la/1838746)).

### JavaScript

- Support for synchronous iterator helper methods has been added, including: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}}, and {{jsxref("Iterator.prototype.take()")}}. These helpers allow `Array`-like operations on iterators without having to create intermediate `Array` objects. They can also be used with very large data sets where creating an intermediate `Array` would not even be possible. For more information, see [Iterator helper methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_methods) in the `Iterator` interface. ([Firefox bug 1896390](https://bugzil.la/1896390)).

### HTTP

- A {{httpheader("Set-Cookie")}} HTTP header with the attribute value of [`SameSite=None`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#none) must now also include the [`Secure`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#secure) attribute. This ensures that cookies set with `SameSite=None` are only ever sent over HTTPS channels. In addition, since Firefox interprets an unspecified `SameSite` value as `SameSite=None`, cookies that don't specify `SameSite` will have the same restriction. ([Firefox bug 1909673](https://bugzil.la/1909673)).
- [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), or "partitioned cookies", are now supported.
  This feature allows developers to opt a cookie into partitioned storage using the [`partitioned`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#partitioned) directive of the {{HTTPHeader("Set-Cookie")}} HTTP header. When set, cookies have separate storage for each top-level site and can only be read within the same top-level site they were set on and its subdomains. This blocks cross-site tracking while still enabling legitimate uses of third-party cookies, such as persisting state of embedded maps or chat widgets across different subdomains of a site. ([Firefox bug 1908160](https://bugzil.la/1908160)).

### APIs

- The {{domxref('PointerEvent.altitudeAngle','altitudeAngle')}} and {{domxref('PointerEvent.azimuthAngle','azimuthAngle')}} properties of the {{domxref('PointerEvent')}} interface are now supported. These provide the angle between the pointer/stylus and the screen (X-Y plane), and the rotation of the stylus over the screen relative to its x-axis, respectively. ([Firefox bug 1656377](https://bugzil.la/1656377)).
- [Text fragments](/en-US/docs/Web/URI/Reference/Fragment/Text_fragments) are now supported, allowing users to link to and highlight specific portions of text in a web page. This feature uses a particular syntax in the [URL fragment](/en-US/docs/Web/URI/Reference/Fragment) that identifies the target based on patterns in the rendered text.
  Developers can now also use the existence of the {{domxref("Document.fragmentDirective")}} property (an instance of the {{domxref("FragmentDirective")}} interface) to feature-check for text fragment support. Additionally, the {{CSSxRef("::target-text")}} pseudo-element can be used to select and style text that has been selected using a text fragment link. ([Firefox bug 1914877](https://bugzil.la/1914877))
- The {{domxref('Document/caretPositionFromPoint','caretPositionFromPoint()')}} method of the {{domxref("Document")}} interface has been updated to return the text node and offset for a caret position within a shadow DOM, provided the shadow root corresponding to the point has been supplied to the method. {{domxref("ShadowRoot")}} objects can be passed to the method using the `shadowRoots` property of the newly added `options` argument. ([Firefox bug 1914596](https://bugzil.la/1914596)).

### WebAssembly

- The new exception reference with the value of `exnref` can now be used to help with [exception handling](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) between WebAssembly and JavaScript in both directions. ([Firefox bug 1908375](https://bugzil.la/1908375)).

### WebDriver conformance (WebDriver BiDi, Marionette)

#### General

- For both WebDriver Classic and BiDi, the `keyUp` and `keyDown` actions will no longer accept multiple characters for the `value`. ([Firefox bug 1910352](https://bugzil.la/1910352)).

#### WebDriver BiDi

- Added support for remaining arguments of the `network.continueResponse` command:
  - The cookies and headers arguments. ([Firefox bug 1853887](https://bugzil.la/1853887)).
  - The `statusCode` (e.g., 200, 304) and `reasonPhrase` (e.g., "OK", "Not modified") arguments. ([Firefox bug 1913737](https://bugzil.la/1913737)).
- The `browsingContext.navigate` command will now return if the `wait` argument is `none` and a `beforeunload` prompt is triggered. ([Firefox bug 1763134](https://bugzil.la/1763134)).
- The `browsingContext.navigate` command will return an `unknown error` in all cases where a navigation failure occurs, as required by the specification. ([Firefox bug 1905083](https://bugzil.la/1905083)).
- The `session.new` command will no longer include the `unhandledPromptBehavior` capability in its response if it was not specified by the client as an argument. ([Firefox bug 1909455](https://bugzil.la/1909455)).

## Changes for add-on developers

- The 10 MB quota for data stored by the {{WebExtAPIRef("storage.session")}} API is now enforced in Firefox Nightly 131. Previously, Firefox didn't implement this quota. This enforcement rolls out to release versions of Firefox from version 134 ([Firefox bug 1915688](https://bugzil.la/1915688)). This enables extensions that rely on the previous behavior to correct any issues. ([Firefox bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("storage.session")}} now supports the {{WebExtAPIRef("storage.StorageArea.getBytesInUse()")}} API and the {{WebExtAPIRef("storage.session.QUOTA_BYTES")}} property. ([Firefox bug 1908925](https://bugzil.la/1908925))
- {{WebExtAPIRef("tabs.onUpdated")}} is now triggered when `openerTabId` is changed through `tabs.update()` ([Firefox bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} now accepts `openerTabId` set to `-1` to clear `openerTabId` ([Firefox bug 1409262](https://bugzil.la/1409262)).

## Experimental web features

These features are newly shipped in Firefox 131 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Regular expression (?ims-ims:...) modifiers:** `javascript.options.experimental.regexp_modifiers`.

  The [(?ims-ims:...)](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regular expression modifiers allow you to make changes that take effect only in a specific part of a regex pattern. ([Firefox bug 1899813](https://bugzil.la/1899813)).

- **Permissions for microphone and camera:** `permissions.media.query.enabled`.

  The `microphone` and `camera` [permissions](/en-US/docs/Web/API/Permissions_API) can now be used in the {{domxref("Permissions.query()")}} method to test whether access to the corresponding hardware has been granted, denied, or still requires user approval. ([Firefox bug 1609427](https://bugzil.la/1609427) and [Firefox bug 1915222](https://bugzil.la/1915222)).

## Older versions

{{Firefox_for_developers}}
