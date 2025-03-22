---
title: StyleSheet
slug: Web/API/StyleSheet
page-type: web-api-interface
browser-compat: api.StyleSheet
---

{{APIRef("CSSOM")}}

An object implementing the `StyleSheet` interface represents a single style sheet. CSS style sheets will further implement the more specialized {{domxref("CSSStyleSheet")}} interface.

## Instance properties

- {{domxref("StyleSheet.disabled")}}
  - : A boolean value representing whether the current stylesheet has been applied or not.
- {{domxref("StyleSheet.href")}} {{ReadOnlyInline}}
  - : Returns a string representing the location of the stylesheet.
- {{domxref("StyleSheet.media")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("MediaList")}} representing the intended destination medium for style information.
- {{domxref("StyleSheet.ownerNode")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Node")}} associating this style sheet with the current document.
- {{domxref("StyleSheet.parentStyleSheet")}} {{ReadOnlyInline}}
  - : Returns a `StyleSheet` including this one, if any; returns `null` if there aren't any.
- {{domxref("StyleSheet.title")}} {{ReadOnlyInline}}
  - : Returns a string representing the advisory title of the current style sheet.
- {{domxref("StyleSheet.type")}} {{ReadOnlyInline}}
  - : Returns a string representing the style sheet language for this style sheet.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSStyleSheet")}}
