---
title: ':-moz-loading'
slug: Web/CSS/:-moz-loading
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

The **`:-moz-loading`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) is a [Mozilla extension](/en-US/docs/Web/CSS/Mozilla_Extensions) that matches elements that can't be displayed because they have not started loading, such as images that haven't started to arrive yet. Note that images that are _in the process_ of loading _are not_ matched by this pseudo-class.

> **Note:** This selector is mainly intended to be used by theme developers.

## Syntax

```css
:-moz-loading
```

## Examples

### Setting a background for images that are loading

```css
:-moz-loading {
  background-color: #aaa;
  background-image: url(loading-animation.gif) center no-repeat;
}
```

## Specifications

Not part of any standard.

## See also

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
