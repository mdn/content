---
title: ':-moz-user-disabled'
slug: Web/CSS/:-moz-user-disabled
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

The **`:-moz-user-disabled`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that matches elements representing images that were not loaded because images have been entirely disabled by the user's preferences.

> **Note:** This selector is mainly intended to be used by theme developers.

## Syntax

```css
:-moz-user-disabled
```

## Examples

### Styling user-disabled elements

```css
:-moz-user-disabled {
  background-color: lightgray;
  padding: 8px;
}
```

## Specifications

Not part of any standard.

## See also

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}
