---
title: isolation
slug: Web/CSS/isolation
tags:
  - CSS
  - CSS Property
  - Compositing and Blending
  - NeedsContent
  - isolation
  - recipe:css-property
browser-compat: css.properties.isolation
---
{{CSSRef}}

The **`isolation`** [CSS](/en-US/docs/Web/CSS) property determines whether an element must create a new {{glossary("stacking context")}}.

{{EmbedInteractiveExample("pages/css/isolation.html")}}

This property is especially helpful when used in conjunction with {{cssxref("mix-blend-mode")}} and {{cssxref("z-index")}}.

## Syntax

```css
/* Keyword values */
isolation: auto;
isolation: isolate;

/* Global values */
isolation: inherit;
isolation: initial;
isolation: revert;
isolation: revert-layer;
isolation: unset;
```

The `isolation` property is specified as one of the keyword values listed below.

### Values

- `auto`
  - : A new stacking context is created only if one of the properties applied to the element requires it.
- `isolate`
  - : A new stacking context must be created.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Forcing a new stacking context for an element

#### HTML

```html
<div id="b" class="a">
  <div id="d">
    <div class="a c">auto</div>
  </div>
  <div id="e">
    <div class="a c">isolate</div>
  </div>
</div>
```

#### CSS

```css
.a {
  background-color: rgb(0,255,0);
}
#b {
  width: 200px;
  height: 210px;
}
.c {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  padding: 2px;
  mix-blend-mode: difference;
}
#d {
  isolation: auto;
}
#e {
  isolation: isolate;
}
```

#### Result

{{ EmbedLiveSample('Forcing_a_new_stacking_context_for_an_element', 230, 230) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("&lt;blend-mode&gt;")}}
- {{cssxref("mix-blend-mode")}}, {{cssxref("background-blend-mode")}}
