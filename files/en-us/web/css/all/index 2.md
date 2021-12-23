---
title: all
slug: Web/CSS/all
tags:
  - CSS
  - CSS Cascade
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.all
---
{{CSSRef}}

The **`all`** [shorthand](/en-US/docs/Web/CSS/Shorthand_properties) [CSS](/en-US/docs/Web/CSS) property resets all of an element's properties except {{cssxref("unicode-bidi")}}, {{cssxref("direction")}}, and [CSS Custom Properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties). It can set properties to their initial or inherited values, or to the values specified in another stylesheet origin.

{{EmbedInteractiveExample("pages/css/all.html")}}

## Syntax

```css
/* Global values */
all: initial;
all: inherit;
all: revert;
all: unset;
```

The `all` property is specified as one of the CSS global keyword values. Note that none of these values affect the {{cssxref("unicode-bidi")}} and {{cssxref("direction")}} properties.

### Values

- {{cssxref("initial")}}
  - : Specifies that all the element's properties should be changed to their [initial values](/en-US/docs/Web/CSS/initial_value).
- {{cssxref("inherit")}}
  - : Specifies that all the element's properties should be changed to their [inherited values](/en-US/docs/Web/CSS/inheritance).
- {{cssxref("unset")}}
  - : Specifies that all the element's properties should be changed to their inherited values if they inherit by default, or to their initial values if not.
- {{cssxref("revert")}}

  - : Specifies behavior that depends on the stylesheet origin to which the declaration belongs:

    - [User-agent origin](/en-US/docs/Web/CSS/Cascade#user-agent_stylesheets)
      - : Equivalent to `unset`.
    - [User origin](/en-US/docs/Web/CSS/Cascade#user_stylesheets)
      - : Rolls back the [cascade](/en-US/docs/Web/CSS/Cascade) to the user-agent level, so that the [specified values](/en-US/docs/Web/CSS/specified_value) are calculated as if no author-level or user-level rules were specified for the element.
    - [Author origin](/en-US/docs/Web/CSS/Cascade#author_stylesheets)
      - : Rolls back the [cascade](/en-US/docs/Web/CSS/Cascade) to the user level, so that the [specified values](/en-US/docs/Web/CSS/specified_value) are calculated as if no author-level rules were specified for the element. For purposes of `revert`, the Author origin includes the Override and Animation origins.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<blockquote id="quote">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</blockquote>
Phasellus eget velit sagittis.
```

### CSS

```css
body {
  font-size: small;
  background-color: #F0F0F0;
  color: blue;
  margin: 0;
  padding: 0;
}

blockquote {
  background-color: skyblue;
  color: red;
}
```

### Result

#### No `all` property

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
```

{{EmbedLiveSample("No_all_property", "200", "125")}}

The {{HTMLElement("blockquote")}} uses the browser's default styling which gives it a margin, together with a specific background and text color. It also behaves as a _block_ element: the text that follows it is beneath it.

#### `all:unset`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: unset; }
```

{{EmbedLiveSample("allunset", "200", "125")}}

The {{HTMLElement("blockquote")}} doesn't use the browser default styling: it is an _inline_ element now (initial value), its {{cssxref("background-color")}} is `transparent` (initial value), but its {{cssxref("font-size")}} is still `small` (inherited value) and its {{cssxref("color")}} is `blue` (inherited value).

#### `all:initial`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue;  color: red; }
blockquote { all: initial; }
```

{{EmbedLiveSample("allinitial", "200", "125")}}

The {{HTMLElement("blockquote")}} doesn't use the browser default styling: it is an _inline_ element now (initial value), its {{cssxref("background-color")}} is `transparent` (initial value), its {{cssxref("font-size")}} is `normal` (initial value) and its {{cssxref("color")}} is `black` (initial value).

#### `all:inherit`

```html hidden
<blockquote id="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote> Phasellus eget velit sagittis.
```

```css hidden
body { font-size: small; background-color: #F0F0F0; color:blue; }
blockquote { background-color: skyblue; color: red; }
blockquote { all: inherit; }
```

{{EmbedLiveSample("allinherit", "200", "125")}}

The {{HTMLElement("blockquote")}} doesn't use the browser default styling: it is a _block_ element now (inherited value from its containing {{HTMLElement("body")}} element), its {{cssxref("background-color")}} is `#F0F0F0` (inherited value), its {{cssxref("font-size")}} is `small` (inherited value) and its {{cssxref("color")}} is `blue` (inherited value).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

CSS global keyword values: {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}}
