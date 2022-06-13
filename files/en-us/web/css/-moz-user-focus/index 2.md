---
title: '-moz-user-focus'
slug: Web/CSS/-moz-user-focus
tags:
  - '-moz-user-focus'
  - CSS
  - CSS:Mozilla Extensions
  - NeedsContent
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-moz-user-focus
---
{{CSSRef}} {{Non-standard_header}}

The **`-moz-user-focus`** [CSS](/en-US/docs/Web/CSS) property is used to indicate whether an element can have the focus.

```css
/* Keyword values */
-moz-user-focus: normal;
-moz-user-focus: ignore;

/* Global values */
-moz-user-focus: inherit;
-moz-user-focus: initial;
-moz-user-focus: unset;
```

By setting its value to `ignore`, you can disable focusing the element, which means that the user will not be able to activate the element. The element will be skipped in the tab sequence.

{{cssinfo}}

> **Note:** This property doesn't work for XUL {{XULElem("textbox")}} elements, because the `textbox` itself never takes focus. Instead, XBL creates an anonymous HTML {{HTMLElement("input")}} element inside the `textbox`, and that element is what receives focus. You can stop the `textbox` from taking keyboard focus by setting its tab index to `-1`, and from taking mouse focus by preventing the default action of `mousedown` events.

## Syntax

### Values

- `ignore`
  - : The element does not accept the keyboard focus and will be skipped in the tab order.
- `normal`
  - : The element can accept the keyboard focus.
- `select-after`
  - : ?
- `select-before`
  - : ?
- `select-menu`
  - : ?
- `select-same`
  - : ?
- `select-all`
  - : ?
- `none`
  - : ?

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<input class="ignored" value="The user cannot focus on this element.">
```

### CSS

```css
.ignored {
  -moz-user-focus: ignore;
}
```

## Specifications

Not part of any standard. A similar property, `user-focus`, was proposed in [early drafts of a predecessor of the CSS3 UI specification](https://www.w3.org/TR/2000/WD-css3-userint-20000216), but was rejected by the working group.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("-moz-user-input")}}
- {{cssxref("-moz-user-modify")}}
- {{cssxref("-moz-user-select")}}
