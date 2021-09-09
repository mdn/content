---
title: user-select
slug: Web/CSS/user-select
tags:
  - CSS
  - CSS Property
  - Property
  - Reference
  - Selection
  - recipe:css-property
  - user-select
browser-compat: css.properties.user-select
---
{{CSSRef}}

The **`user-select`** [CSS](/en-US/docs/Web/CSS) property controls whether the user can select text. This doesn't have any effect on content loaded as part of a browser's user interface (its {{Glossary("Chrome", "chrome")}}), except in textboxes.

```css
/* Keyword values */
user-select: none;
user-select: auto;
user-select: text;
user-select: contain;
user-select: all;

/* Global values */
user-select: inherit;
user-select: initial;
user-select: revert;
user-select: unset;

/* Mozilla-specific values */
-moz-user-select: none;
-moz-user-select: text;
-moz-user-select: all;

/* WebKit-specific values */
-webkit-user-select: none;
-webkit-user-select: text;
-webkit-user-select: all; /* Doesn't work in Safari; use only
                             "none" or "text", or else it will
                             allow typing in the <html> container */

/* Microsoft-specific values */
-ms-user-select: none;
-ms-user-select: text;
-ms-user-select: element;
```

> **Note:** `user-select` is not an inherited property, though the initial `auto` value makes it behave like it is inherited most of the time. WebKit/Chromium-based browsers _do_ implement the property as inherited, which violates the behavior described in the spec, and this will bring some issues. Until now, Chromium chooses to [fix the issues](https://chromium.googlesource.com/chromium/src/+/b01af0b296ecb855aac95c4ed335d188e6eac2de), make the final behavior meets the specifications.

## Syntax

- `none`
  - : The text of the element and its sub-elements is not selectable. Note that the {{domxref("Selection")}} object can contain these elements.
- `auto`

  - : The used value of `auto` is determined as follows:

    - On the `::before` and `::after` pseudo elements, the used value is `none`
    - If the element is an editable element, the used value is `contain`
    - Otherwise, if the used value of `user-select` on the parent of this element is `all`, the used value is `all`
    - Otherwise, if the used value of `user-select` on the parent of this element is `none`, the used value is `none`
    - Otherwise, the used value is `text`

- `text`
  - : The text can be selected by the user.
- `all`
  - : The content of the element shall be selected atomically: If a selection would contain part of the element, then the selection must contain the entire element including all its descendants.  If a double-click or context-click occurred in sub-elements, the highest ancestor with this value will be selected.
- `contain`
  - : Enables selection to start within the element; however, the selection will be contained by the bounds of that element.
- `element`{{non-standard_inline}} (IE-specific alias)
  - : Same as `contain`. Supported only in Internet Explorer.

> **Note:** CSS UI 4 [renames `user-select: element` to `contain`](https://github.com/w3c/csswg-drafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05).

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<p>You should be able to select this text.</p>
<p class="unselectable">Hey, you can't select this text!</p>
<p class="all">Clicking once will select all of this text.</p>
```

### CSS

```css
.unselectable {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.all {
  -moz-user-select: all;
  -webkit-user-select: all;
  -ms-user-select: all;
  user-select: all;
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("::selection")}} pseudo-element
- The JavaScript {{domxref("Selection")}} object
