---
title: Firefox 117 for developers
slug: Mozilla/Firefox/Releases/117
page-type: firefox-release-notes
---

{{FirefoxSidebar}}

This article provides information about the changes in Firefox 117 that affect developers. Firefox 117 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and ships on [August 29, 2023](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

- The [`math-style`](/en-US/docs/Web/CSS/math-style) and [`math-depth`](/en-US/docs/Web/CSS/math-depth) properties are now supported, as well as the `math` value for the [`font-size`](/en-US/docs/Web/CSS/font-size#values) property ([Firefox bug 1845516](https://bugzil.la/1845516)).

- The [`contain-intrinsic-size: auto none;`](/en-US/docs/Web/CSS/contain-intrinsic-size) syntax is now supported, which allows for using the last-remembered size of an element if possible and falls back to `contain-intrinsic-size: none` otherwise.
  This is useful in layouts using proportional sizes, such as grid or multi-column ([Firefox bug 1835813](https://bugzil.la/1835813)).

#### Removals

### JavaScript

#### Removals

### SVG

- Inline SVGs now support `<script>` elements with `type="module"`, `defer`, and `async` attributes.
  This allows SVGs to use modern JavaScript features, including ES modules, and to load scripts asynchronously ([Firefox bug 1839954](https://bugzil.la/1839954)).

#### Removals

### HTTP

- Fixed a bug where the [Content-Security-Policy](/en-US/docs/Web/HTTP/CSP) `'strict-dynamic'` source expression was not being enforced in `default-src` directives.
  The behavior now matches the specification where `default-src` directive values are used as a fallback when `script-src` is not provided ([Firefox bug 1313937](https://bugzil.la/1313937)).

- The `Range` header is now a [CORS-safelisted request header](/en-US/docs/Glossary/CORS-safelisted_request_header) when the value is a single byte range (e.g., `bytes=100-200`).
  This allows the `Range` header to be used in cross-origin requests without triggering a preflight request, which is useful for requesting media and resuming downloads ([Firefox bug 1733981](https://bugzil.la/1733981)).

#### Removals

### Security

#### Removals

### APIs

- The {{domxref("CanvasRenderingContext2D.getContextAttributes()")}} method can now be used to get the 2D context attributes being used by the browser ([Firefox bug 1517786](https://bugzil.la/1517786)).
- The {{domxref("ReadableStream/from_static", "ReadableStream.from()")}} static member is now supported, allowing developers to construct a readable stream from any iterable or async iterable object ([Firefox bug 1772772](https://bugzil.la/1772772)).

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Added the `browser.close` command that allows users to terminate all WebDriver sessions and close the browser ([Firefox bug 1829334](https://bugzil.la/1829334)).
- Added the `browsingContext.setViewport` command that allows users to change the dimensions of a top level browsing context ([Firefox bug 1838664](https://bugzil.la/1838664)).
- Added the `browsingContext.fragmentNavigated` event which is emitted for same-document navigations ([Firefox bug 1841039](https://bugzil.la/1841039)).
- Added support for the `background` argument of the `browsingContext.create` command, which will force the new context to be created in the background. This argument is optional and defaults to `false`, meaning that `browsingContext.create` now opens new contexts in the foreground by default ([Firefox bug 1843507](https://bugzil.la/1843507)).
- Added support for the `clip` argument of the `browsingContext.captureScreenshot` command, which allows to restrict the screenshot either to a specific area or to an element. When clipping to an element, you can optionally scroll the element into view before taking the screenshot ([Firefox bug 1840998](https://bugzil.la/1840998)).
- All commands and events related to a navigation will now provide a `navigation` id, which is a `UUID` identifying a specific navigation. This property is available in the `browsingContext.navigate` response, in the `browsingContext.load`, `browsingContext.domContentLoaded`, `browsingContext.fragmentNavigated` events, as well as in all `network` events created for a navigation request ([Firefox bug 1763122](https://bugzil.la/1763122), [Firefox bug 1789484](https://bugzil.la/1789484), [Firefox bug 1805405](https://bugzil.la/1805405)).
- `headers` and `cookies` in `network` events are now serialized as `network.BytesValue`, which will provide a better support for non-UTF8 values ([Firefox bug 1842619](https://bugzil.la/1842619)).
- The `browsingContext.create` command will now wait until the created context has a valid size ([Firefox bug 1847044](https://bugzil.la/1847044)).

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(116)}}
