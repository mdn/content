---
title: ':dir()'
slug: Web/CSS/:dir
tags:
  - BiDi
  - CSS
  - Pseudo-class
  - Reference
  - Selector
browser-compat: css.selectors.dir
---
{{CSSRef}}

The **`:dir()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on the directionality of the text contained in them.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

The `:dir()` pseudo-class uses only the _semantic_ value of the directionality, i.e., the one defined in the document itself. It doesn't account for _styling_ directionality, i.e., the directionality set by CSS properties such as {{cssxref("direction")}}.

> **Note:** Be aware that the behavior of the `:dir()` pseudo-class is not equivalent to the `[dir=…]` [attribute selectors](/en-US/docs/Web/CSS/Attribute_selectors). The latter match the HTML {{htmlattrxref("dir")}} attribute, and ignore elements that lack it — even if they inherit a direction from their parent. (Similarly, `[dir=rtl]` and `[dir=ltr]` won't match the `auto` value.) In contrast, `:dir()` will match the value calculated by the {{glossary("user agent")}}, even if inherited.

> **Note:** In HTML, the direction is determined by the {{htmlattrxref("dir")}} attribute. Other document types may have different methods.

## Syntax

The `:dir()` pseudo-class requires one parameter, representing the text directionality you want to target.

```
:dir( [ ltr | rtl ] )
```

### Parameters

- `ltr`
  - : Target left-to-right elements.
- `rtl`
  - : Target right-to-left elements.

## Examples

### HTML

```html
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

### CSS

```css
:dir(ltr) {
  background-color: yellow;
}

:dir(rtl) {
  background-color: powderblue;
}
```

### Result

{{ EmbedLiveSample('Examples') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Language-related pseudo-classes: {{cssxref(":lang")}}, {{cssxref(":dir")}}
- HTML {{htmlattrxref("lang")}} attribute
- HTML {{htmlattrxref("translate")}} attribute
