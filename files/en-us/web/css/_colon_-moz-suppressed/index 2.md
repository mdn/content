---
title: ':-moz-suppressed'
slug: Web/CSS/:-moz-suppressed
tags:
  - CSS
  - CSS:Mozilla Extensions
  - NeedsCompatTable
  - Non-standard
  - Pseudo-class
  - Reference
  - Selector
---
{{CSSRef}}{{Non-standard_header}}

The **`:-moz-suppressed`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that matches elements representing images that were suppressed because loading images from the specified site has been blocked.

> **Note:** This selector is mainly intended to be used by theme developers.

## Syntax

```css
:-moz-suppressed
```

## Examples

### Styling elements that have been blocked

```css
:-moz-suppressed {
  background: yellow;
  padding: 8px;
}
```

## Specifications

Not part of any standard.

## See also

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-user-disabled")}}
