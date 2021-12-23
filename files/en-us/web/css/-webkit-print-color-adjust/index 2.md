---
title: '-webkit-print-color-adjust'
slug: Web/CSS/-webkit-print-color-adjust
tags:
  - CSS
  - CSS Property
  - Layout
  - Non-standard
  - Web
  - recipe:css-property
browser-compat: css.properties.-webkit-print-color-adjust
---
{{CSSRef}}{{Non-standard_header}}

The **`-webkit-print-color-adjust`** property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine.

```css
/* Keyword values */
-webkit-print-color-adjust: economy;
-webkit-print-color-adjust: exact;

/* Global values */
-webkit-print-color-adjust: inherit;
-webkit-print-color-adjust: initial;
-webkit-print-color-adjust: unset;
```

## Syntax

The `-webkit-print-color-adjust` property is specified as one of the keyword values listed below.

### Values

- `economy`
  - : Normal behavior.  Background colors and images are only printed if the user explicitly allows it in their browser's print settings dialog.
- `exact`
  - : Background colors and images of the element to which this rule is applied are always printed, user's print settings are overridden.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Forcing white-on-black printing

```css
article {
  -webkit-print-color-adjust: exact;
  background: #222;
  color: #eee;
}
```

## Specifications

Not part of any standard, though there is a [proposal in the CSSWG wiki](http://wiki.csswg.org/ideas/print-backgrounds) to standardize it.

## Browser compatibility

{{Compat}}

## See also

- WebKit [bug 64583](https://bugs.webkit.org/show_bug.cgi?id=64583): "WIP: Add CSS property to control printing of backgrounds for individual elements"
- CSSWG wiki: [print-backgrounds](http://wiki.csswg.org/ideas/print-backgrounds) - a proposal to standardize this property
- CSS Color Module Level 4:  the [`color-adjust`](https://drafts.csswg.org/css-color-4/#color-adjust) property - a newer proposal to standardize this property
