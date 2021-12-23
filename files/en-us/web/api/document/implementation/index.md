---
title: Document.implementation
slug: Web/API/Document/implementation
tags:
  - API
  - DOM
  - Document
  - NeedsContent
  - Property
  - Reference
browser-compat: api.Document.implementation
---
{{ ApiRef("DOM") }}

The **`Document.implementation`** property returns a
{{domxref("DOMImplementation")}} object associated with the current document.

## Syntax

```js
DOMImpObj = document.implementation;
```

## Example

```js
var modName = "HTML";
var modVer = "2.0";
var conformTest = document.implementation.hasFeature( modName, modVer );

alert( "DOM " + modName + " " + modVer + " supported?: " + conformTest );

// alerts with: "DOM HTML 2.0 supported?: true" if DOM Level 2 HTML module is supported.
```

A list of module names (e.g., Core, HTML, XML, etc.) is available in the DOM Level 2 [Conformance
Section](https://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance-h2).

## Notes

The W3C's DOM Level 1 Recommendation only specified the `hasFeature` method,
which is one way to determine if a DOM module is supported by a browser (see example
above and [What does your user
agent claim to support?](https://www.w3.org/2003/02/06-dom-support.html)). If available, other `DOMImplementation`
methods provide services for controlling things outside of a single document. For
example, the `DOMImplementation` interface includes a
`createDocumentType` method with which DTDs can be created for one or more
documents managed by the implementation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Gecko-specific notes

- Starting with Gecko 19.0 {{geckoRelease("19.0")}} the
  {{domxref("DOMImplementation.hasFeature","hasFeature")}} method will always return
  true.
