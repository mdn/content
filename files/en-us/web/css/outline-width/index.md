---
title: outline-width
slug: Web/CSS/outline-width
page-type: css-property
browser-compat: css.properties.outline-width
---

{{CSSRef}}

The [CSS](/en-US/docs/Web/CSS) **`outline-width`** property sets the thickness of an element's outline. An outline is a line that is drawn around an element, outside the {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/outline-width.html")}}

It is often more convenient to use the shorthand property {{cssxref("outline")}} when defining the appearance of an outline.

## Syntax

```css
/* Keyword values */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* <length> values */
outline-width: 1px;
outline-width: 0.1em;

/* Global values */
outline-width: inherit;
outline-width: initial;
outline-width: revert;
outline-width: revert-layer;
outline-width: unset;
```

The `outline-width` property is specified as any one of the values listed below.

### Values

- {{cssxref("&lt;length&gt;")}}
  - : The width of the outline specified as a `<length>`.
- `thin`
  - : Depends on the user agent. Typically equivalent to `1px` in desktop browsers (including Firefox).
- `medium`
  - : Depends on the user agent. Typically equivalent to `3px` in desktop browsers (including Firefox).
- `thick`
  - : Depends on the user agent. Typically equivalent to `5px` in desktop browsers (including Firefox).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting an element's outline width

#### HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="twopixels">2px</span>
<span id="oneex">1ex</span>
<span id="em">1.2em</span>
```

#### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}
```

#### Result

{{EmbedLiveSample('Setting_an_elements_outline_width', '100%', '80')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("outline")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}
