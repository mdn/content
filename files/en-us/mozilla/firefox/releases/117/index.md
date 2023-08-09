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

- The [CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting) module is now supported natively in Firefox, this also includes the [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector). This allows the writer to write nested CSS which helps with the readability, modularity and maintainability of CSS stylesheets. It also helps reduce the file size of CSS files reducing the data used by users. ([Firefox bug 1835066](https://bugzil.la/1835066), [Firefox bug 1840781](https://bugzil.la/1840781))

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

#### Marionette

## Changes for add-on developers

### Removals

### Other

## Older versions

{{Firefox_for_developers(116)}}
