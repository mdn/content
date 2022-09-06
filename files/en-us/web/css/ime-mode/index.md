---
title: ime-mode
slug: Web/CSS/ime-mode
tags:
  - CSS
  - CSS Property
  - Deprecated
  - recipe:css-property
browser-compat: css.properties.ime-mode
---
{{CSSRef}} {{deprecated_header}}

The **`ime-mode`** [CSS](/en-US/docs/Web/CSS) property controls the state of the input method editor (IME) for text fields. This property is obsolete.

```css
/* Keyword values */
ime-mode: auto;
ime-mode: normal;
ime-mode: active;
ime-mode: inactive;
ime-mode: disabled;

/* Global values */
ime-mode: inherit;
ime-mode: initial;
ime-mode: revert;
ime-mode: revert-layer;
ime-mode: unset;
```

The `ime-mode` property is only partially and inconsistently implemented in browsers. It was introduced by Microsoft with Internet Explorer 5 as a proprietary extension.

> **Note:** In general, it's not appropriate for a public web site to change the IME mode. This property should only be used for private web applications or to undo the property if it was previously set by legacy code.

## Syntax

The `ime-mode` property is specified using one of the keyword values listed below.

### Values

- `auto`
  - : No change is made to the current input method editor state. This is the default.
- `normal`
  - : The IME state should be normal; this value can be used in a user style sheet to override the page's setting. _This value is not supported by Internet Explorer._
- `active`
  - : The input method editor is initially active; text entry is performed through it unless the user specifically dismisses it. _Not supported on Linux._
- `inactive`
  - : The input method editor is initially inactive, but the user may activate it if they wish. _Not supported on Linux._
- `disabled`
  - : The input method editor is disabled and may not be activated by the user.

## Description

Unlike Internet Explorer, Firefox's implementation of `ime-mode` allows this property on `<input type="password">`. However, this makes for a bad user experience, and password fields _should not_ enable the IME. Users may correct the inappropriate behavior of sites that don't follow this recommendation by placing the following CSS into their user stylesheet:

```css
input[type=password] {
  ime-mode: auto !important;
}
```

The Mac version of Gecko 1.9 (Firefox 3) can't recover the previous state of the IME when a field for which it is disabled loses focus, so Mac users may get grumpy when you use the `disabled` value.

## Formal definition

{{cssinfo}}

## Formal syntax

```plain
ime-mode =
  auto | normal | active | inactive | disabled
```

## Examples

### Disabling input method support

This example disables input method support for a form field. In the past, this was commonly used on fields that entered data into databases which didn't support extended character sets.

```html
<input type="text" name="name" value="initial value" style="ime-mode: disabled">
```

> **Note:** You shouldn't rely on disabling IME to prevent extended characters from passing through your form. Even with IME disabled, users can still paste extended characters into your form's fields.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
