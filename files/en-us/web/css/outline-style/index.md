---
title: outline-style
slug: Web/CSS/outline-style
page-type: css-property
browser-compat: css.properties.outline-style
---

{{CSSRef}}

The **`outline-style`** [CSS](/en-US/docs/Web/CSS) property sets the style of an element's outline. An outline is a line that is drawn around an element, outside the {{cssxref("border")}}.

{{EmbedInteractiveExample("pages/css/outline-style.html")}}

It is often more convenient to use the shorthand property {{cssxref("outline")}} when defining the appearance of an outline.

## Syntax

```css
/* Keyword values */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* Global values */
outline-style: inherit;
outline-style: initial;
outline-style: revert;
outline-style: revert-layer;
outline-style: unset;
```

The `outline-style` property is specified as any one of the values listed below.

### Values

- `auto`
  - : Permits the user agent to render a custom outline style.
- `none`
  - : No outline is used. The {{cssxref("outline-width")}} is `0`.
- `dotted`
  - : The outline is a series of dots.
- `dashed`
  - : The outline is a series of short line segments.
- `solid`
  - : The outline is a single line.
- `double`
  - : The outline is two single lines. The {{cssxref("outline-width")}} is the sum of the two lines and the space between them.
- `groove`
  - : The outline looks as though it were carved into the page.
- `ridge`
  - : The opposite of `groove`: the outline looks as though it were extruded from the page.
- `inset`
  - : The outline makes the box look as though it were embedded in the page.
- `outset`
  - : The opposite of `inset`: the outline makes the box look as though it were coming out of the page.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting outline style to auto

The `auto` value indicates a custom outline style, described in [the specification](https://www.w3.org/TR/css-ui-3/#outline-style) as "typically a style \[that] is either a user interface default for the platform, or perhaps a style that is richer than can be described in detail in CSS, e.g. a rounded edge outline with semi-translucent outer pixels that appears to glow".

#### HTML

```html
<div>
  <p class="auto">Outline Demo</p>
</div>
```

#### CSS

```css
.auto {
  outline-style: auto; /* same result as "outline: auto" */
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Result

{{ EmbedLiveSample('Setting_outline_style_to_auto') }}

### Setting outline style to dashed and dotted

#### HTML

```html
<div>
  <div class="dotted">
    <p class="dashed">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.dotted {
  outline-style: dotted; /* same result as "outline: dotted" */
}
.dashed {
  outline-style: dashed;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Result

{{ EmbedLiveSample('Setting_outline_style_to_dashed_and_dotted') }}

### Setting outline style to solid and double

#### HTML

```html
<div>
  <div class="solid">
    <p class="double">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.solid {
  outline-style: solid;
}
.double {
  outline-style: double;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Result

{{ EmbedLiveSample('Setting_outline_style_to_solid_and_double') }}

### Setting outline style to groove and ridge

#### HTML

```html
<div>
  <div class="groove">
    <p class="ridge">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.groove {
  outline-style: groove;
}
.ridge {
  outline-style: ridge;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Result

{{ EmbedLiveSample('Setting_outline_style_to_groove_and_ridge') }}

### Setting outline style to inset and outset

#### HTML

```html
<div>
  <div class="inset">
    <p class="outset">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.inset {
  outline-style: inset;
}
.outset {
  outline-style: outset;
}

/* To make the Demo clearer */
* {
  outline-width: 10px;
  padding: 15px;
}
```

#### Result

{{ EmbedLiveSample('Setting_outline_style_to_inset_and_outset') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-width")}}
