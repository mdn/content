---
title: user-modify
slug: Web/CSS/user-modify
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.user-modify
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

The **`user-modify`** property has no effect in Firefox. It was originally planned to determine whether or not the content of an element can be edited by a user.

> **Warning:** This property has been replaced by the [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes#contenteditable) attribute.

## Syntax

```css
/* Keyword values */
user-modify: read-only;
user-modify: read-write;
user-modify: write-only;

/* Global values */
user-modify: inherit;
user-modify: initial;
user-modify: revert;
user-modify: unset;
```

The `-moz-user-modify` property is specified as one of the keyword values from the list below.

### Values

- `read-only`
  - : Default value. Contents are read-only.
- `read-write`
  - : The user is able to read and write contents.
- `read-write-plaintext-only` {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Same as `read-write`, but rich text formatting will be lost.
- `write-only`
  - : The user is able to edit the content, but not to read it.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### HTML

```html
<div class="readwrite">The user is able to change this text.</div>
```

### CSS

```css
.readwrite {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-input")}}
- {{CSSxRef("user-select", "-moz-user-select")}}
