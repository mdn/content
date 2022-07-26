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

This article provides information about the changes in Firefox 103 that will affect developers. Firefox 103 was released on July 26, 2022.

## Changes for web developers

### HTML

#### Removals

### MathML

#### Removals

- The deprecated `scriptminsize` and `scriptsizemultiplier` attributes have been removed ({{bug(1772697)}}).

### CSS

- The [`backdrop-filter`](/en-US/docs/Web/CSS/backdrop-filter) property that can be used to apply graphical effects such as blurring or color shifting to the area behind an element is now available by default ({{bug(1578503)}}).

#### Removals

### JavaScript

- Native Error types can now be serialized using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
  This includes {{JSxRef("Error")}}, {{JSxRef("EvalError")}}, {{JSxRef("RangeError")}}, {{JSxRef("ReferenceError")}}, {{JSxRef("SyntaxError")}}, {{JSxRef("TypeError")}}, {{JSxRef("URIError")}} and {{JSxRef("AggregateError")}}.
  Serialized properties include the [`name`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name), [`message`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message), [`cause`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause), [`fileName`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName), [`lineNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber) and [`columnNumber`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber).
  For {{JSxRef("AggregateError")}} the `message`, `name`, `cause` and `errors` properties are serialized.
  See {{bug(1556604)}} for more details.

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
