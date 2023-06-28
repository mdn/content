---
title: "-moz-user-focus"
slug: Web/CSS/-moz-user-focus
page-type: css-property
status:
  - non-standard
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

```plain
-moz-user-focus =
  ignore | normal | select-after | select-before | select-menu | select-same | select-all | none
```

## Examples

### HTML

```html
<input class="ignored" value="The user cannot focus on this element." />
```

### CSS

```css
.ignored {
  -moz-user-focus: ignore;
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("-moz-user-input")}}
- {{cssxref("user-modify")}}
- {{cssxref("user-select", "-moz-user-select")}}
