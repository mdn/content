---
title: ::picker()
slug: Web/CSS/::picker
page-type: css-pseudo-element
browser-compat: css.selectors.picker
---

{{CSSRef}}

The **`::picker()`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) represents the picker part of an element, for example the drop-down picker of a [customizable select element](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select).

## Syntax

```css-nolint
::picker(<ident>) {
  /* ... */
}
```

### Parameters

- {{cssxref("ident")}}
  - : A string representing the element whose picker you want to target. The following values are available:
    - `select`
      - : The drop-down picker of customizable select elements.

## Description

The `::picker()` pseudo-element targets the picker part of a form control, that is, the pop-up part that appears to allow you to make a selection when you press the control button. It is only available to target when the originating element has a picker and has base appearance set on it via the {{cssxref("appearance")}} property `base-select` value.

The `::picker(select)` selector targets all descendants of customizable `<select>` element except for the first `<button>` child; these decendants are grouped together by the browser and rendered as the picker. The first `<button>` child represents the control button that opens the picker when pressed.

This allows you to target all of the picker contents as a single entity, for example if you want to customize its border, animate it when it appears and disappears, or position it somewhere different to the default position. Our [customizable select elements](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select) guide shows many examples of `::picker(select)` usage.

## Examples

### Basic custom select usage

To opt-in to customizable select functionality, the `<select>` element and its picker both need to have an {{cssxref("appearance")}} value of `base-select` set on them:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

You could then, for example, remove the picker's default black {{cssxref("border")}}:

```css
::picker(select) {
  border: none;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- {{cssxref("appearance")}}
- {{cssxref("::picker-icon")}}, {{cssxref("::checkmark")}}
- {{cssxref(":open")}}, {{cssxref(":checked")}}
- [Customizable select elements](/en-US/docs/Learn_web_development/Extensions/Forms/Customizable_select)
