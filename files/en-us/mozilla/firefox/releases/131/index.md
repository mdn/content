---
title: Firefox 131 for developers
slug: Mozilla/Firefox/Releases/131
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 131 that affect developers. Firefox 131 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [October 1, 2024](https://whattrainisitnow.com/release/?version=131).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

- Support for synchronous iterator helpers, including: {{jsxref("Iterator.prototype.drop()")}}, {{jsxref("Iterator.prototype.every()")}}, {{jsxref("Iterator.prototype.filter()")}}, {{jsxref("Iterator.prototype.find()")}}, {{jsxref("Iterator.prototype.flatMap()")}}, {{jsxref("Iterator.prototype.forEach()")}}, {{jsxref("Iterator.prototype.map()")}}, {{jsxref("Iterator.prototype.reduce()")}}, {{jsxref("Iterator.prototype.some()")}}, and {{jsxref("Iterator.prototype.take()")}}. These allow `Array`-like operations on iterators without having to create intermediate `Array` objects, and can also be used with very large data sets where creating an intermediate `Array` would not even be possible. For more information see [Iterator helpers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) in the `Iterator` interface. ([Firefox bug 1896390](https://bugzil.la/1896390)).

#### Removals

### SVG

#### Removals

### HTTP

- A {{httpheader("Set-Cookie")}} HTTP header with the attribute value of [`SameSite=None`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#none) must now also include the [`Secure`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#secure) attribute. This ensures that cookies set with `SameSite=None` are only ever sent over HTTPS channels. In addition, since Firefox interprets an unspecified `SameSite` value as `SameSite=None`, cookies that don't specify `SameSite` will have the same restriction. ([Firefox bug 1909673](https://bugzil.la/1909673)).
- [Cookies Having Independent Partitioned State (CHIPS)](/en-US/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies), or "partitioned cookies", are now supported.
  This feature allow developers to opt a cookie into partitioned storage using the [`partitioned`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#partitioned) directive of the {{HTTPHeader("Set-Cookie")}} HTTP header. When set, cookies have separate storage for each top-level site, and can only be read within the same top-level site they were set on and its subdomains. This blocks cross-site tracking, while still enabling legitimate uses of third-party cookies such as persisting state of embedded maps or chat widgets across different subdomains of a site. ([Firefox bug 1908160](https://bugzil.la/1908160)).

#### Removals

### Security

#### Removals

### APIs

- The {{domxref('PointerEvent.altitudeAngle','altitudeAngle')}} and {{domxref('PointerEvent.azimuthAngle','azimuthAngle')}} properties of the {{domxref('PointerEvent')}} interface are supported, providing the angle between the pointer/stylus and the screen (X-Y plane), and the rotation of the stylus over the screen relative to its x-axis, respectively. ([Firefox bug 1656377](https://bugzil.la/1656377)).
- [Text fragments](/en-US/docs/Web/URI/Fragment/Text_fragments) are now supported, allowing users to link to and highlight specific portions of text in a web page. This feature uses a particular syntax in the [URL fragment](/en-US/docs/Web/URI/Fragment) that identifies the target based on patterns in the rendered text.
  Website developers can also use the existence of the {{domxref("Document.fragmentDirective")}} property (an instance of the {{domxref("FragmentDirective")}} interface) to feature check for text fragment support, and the {{CSSxRef("::target-text")}} pseudo element to select and style text that has been selected using a text fragment link. ([Firefox bug 1914877](https://bugzil.la/1914877))
- The {{domxref('Document/caretPositionFromPoint','caretPositionFromPoint()')}} method of the {{domxref("Document")}} interface has been updated so that it can return the text node and offset for a caret position within a shadow DOM, provided the shadow root corresponding to the point has been supplied to the method. {{domxref("ShadowRoot")}} objects can be passed to the method using the `shadowRoots` property of the newly added `options` argument. ([Firefox bug 1914596](https://bugzil.la/1914596)).

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

- {{WebExtAPIRef("tabs.onUpdated")}} is now triggered when `openerTabId` is changed through `tabs.update()` ([Firefox bug 1409262](https://bugzil.la/1409262)).
- {{WebExtAPIRef("tabs.update")}} now accepts `openerTabId` set to `-1` to clear `openerTabId` ([Firefox bug 1409262](https://bugzil.la/1409262)).

### Removals

### Other

## Experimental web features

These features are newly shipped in Firefox 131 but are disabled by default. To experiment with them, search for the appropriate preference on the `about:config` page and set it to `true`. You can find more such features on the [Experimental features](/en-US/docs/Mozilla/Firefox/Experimental_features) page.

- **Regular expression (?ims-ims:...) modifiers:** `javascript.options.experimental.regexp_modifiers`

  The [(?ims-ims:...)](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Modifier) regular expression modifiers allow you to make changes to only take effect in a specific part of a regex pattern. ([Firefox bug 1899813](https://bugzil.la/1899813)).

- **Permissions for microphone and camera:** `permissions.media.query.enabled`

  The `microphone` and `camera` [permissions](/en-US/docs/Web/API/Permissions_API) can now be used in the {{domxref("Permissions.query()")}} method to test whether access to the corresponding hardware have been granted, denied, or still requires user approval ([Firefox bug 1609427](https://bugzil.la/1609427), [Firefox bug 1915222](https://bugzil.la/1915222)).

## Older versions

{{Firefox_for_developers}}
