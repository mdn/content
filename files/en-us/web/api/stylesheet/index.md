---
title: StyleSheet
slug: Web/API/StyleSheet
tags:
  - API
  - CSS
  - CSSOM
  - DOM
  - Interface
  - Reference
  - StyleSheet
browser-compat: api.StyleSheet
---
{{APIRef("CSSOM")}}

An object implementing the `StyleSheet` interface represents a single style sheet. CSS style sheets will further implement the more specialized {{domxref("CSSStyleSheet")}} interface.

## Properties

- {{domxref("StyleSheet.disabled")}}
  - : Is a boolean value representing whether the current stylesheet has been applied or not.
- {{domxref("StyleSheet.href")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the location of the stylesheet.
- {{domxref("StyleSheet.media")}} {{readonlyInline}}
  - : Returns a {{domxref("MediaList")}} representing the intended destination medium for style information.
- {{domxref("StyleSheet.ownerNode")}} {{readonlyInline}}
  - : Returns a {{domxref("Node")}} associating this style sheet with the current document.
- {{domxref("StyleSheet.parentStyleSheet")}} {{readonlyInline}}
  - : Returns a {{domxref("StyleSheet")}} including this one, if any; returns `null` if there aren't any.
- {{domxref("StyleSheet.title")}} {{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the advisory title of the current style sheet.
- {{domxref("StyleSheet.type")}}{{readonlyInline}}
  - : Returns a {{domxref("DOMString")}} representing the style sheet language for this style sheet.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSStyleSheet")}}
