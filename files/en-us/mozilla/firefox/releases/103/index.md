---
title: Firefox 103 for developers
slug: Mozilla/Firefox/Releases/103
tags:
  - '103'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

This article provides information about the changes in Firefox 103 that will affect developers. Firefox 103 is the current [Beta version of Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#beta) and will ship on [July 26, 2022](https://wiki.mozilla.org/RapidRelease/Calendar#Future_branch_dates).

## Changes for web developers

### Developer Tools

### HTML

#### Removals

### CSS

#### Removals

### JavaScript

#### Removals

### HTTP

#### Removals

### Security

#### Removals

### APIs

- [`ReadableStream`](/en-US/docs/Web/API/ReadableStream), [`WritableStream`](/en-US/docs/Web/API/WritableStream), [`TransformStream`](/en-US/docs/Web/API/TransformStream) are now [Transferable objects](/en-US/docs/Glossary/Transferable_objects), which means that ownership can be transferred when sharing the objects between a window and workers using `postMessage`, or when using [structuredClone()](/en-US/docs/Web/API/structuredClone) to copy an object.
  After transferring, the original object cannot be used.
  See {{bug(1659025)}} for more details.

- [`caches`](/en-US/docs/Web/API/caches), [`CacheStorage`](/en-US/docs/Web/API/CacheStorage), and [`Cache`](/en-US/docs/Web/API/Cache) now require a [secure context](/en-US/docs/Web/Security/Secure_Contexts); the properties/interfaces are not defined if used in an insecure context.
  Previously `cache` would return a `CacheStorage` that would throw an exception if used outside of a secure context.
  See {{bug(1112134)}} for more details.

#### DOM

#### Media, WebRTC, and Web Audio

#### Removals

### WebAssembly

#### Removals

### WebDriver conformance (WebDriver BiDi, Marionette)

#### Removals

## Changes for add-on developers

#### Removals

### Other

## Older versions

{{Firefox_for_developers(102)}}
