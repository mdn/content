---
title: -moz-user-input
slug: Web/CSS/-moz-user-input
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.-moz-user-input
---

{{CSSRef}}{{Non-standard_Header}}{{Deprecated_Header}}

In Mozilla applications, **`-moz-user-input`** determines if an element will accept user input.

As of Firefox 60, this property can no longer grant an element the ability to accept user input if it normally does not. It may only be used to disable user input.

The `user-input` property is currently not on a standards track.

## Syntax

```css
/* Keyword values */
-moz-user-input: auto;
-moz-user-input: none;

/* Global values */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

### Values

- `auto`
  - : The element will respond to user input if it normally takes user input, such as a {{HTMLElement("textarea")}}.
- `none`
  - : The element does not respond to user input, and it does not become {{CSSxRef(":active")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-moz-user-input =
  auto | none
```

## Examples

### Disabling user input for an element

```css
input.example {
  /* The user will be able to select the text, but not change it. */
  -moz-user-input: none;
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("user-modify", "-moz-user-modify")}}
- {{CSSxRef("user-select", "-moz-user-select")}}
