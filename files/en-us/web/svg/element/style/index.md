---
title: <style>
slug: Web/SVG/Element/style
page-type: svg-element
browser-compat: svg.elements.style
---

{{SVGRef}}

The **`<style>`** [SVG](/en-US/docs/Web/SVG) element allows style sheets to be embedded directly within SVG content.

> [!NOTE]
> SVG's `style` element has the same attributes as the corresponding element in HTML (see HTML's {{HTMLElement("style")}} element).

## Example

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    circle {
      fill: gold;
      stroke: maroon;
      stroke-width: 2px;
    }
  </style>

  <circle cx="5" cy="5" r="4" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

- {{SVGAttr("type")}}
  - : This attribute defines type of the style sheet language to use as a media type string.
    _Value type_: [**`<media-type>`**](/en-US/docs/Glossary/MIME_type); _Default value_: `text/css`; _Animatable_: **no**
- {{SVGAttr("media")}}
  - : This attribute defines to which {{cssxref('@media', 'media')}} the style applies.
    _Value type_: [**`<media-query-list>`**](/en-US/docs/Web/CSS/@media#syntax); _Default value_: `all`; _Animatable_: **no**
- {{SVGAttr("title")}}
  - : This attribute is the title of the style sheet which can be used to switch between [alternate style sheets](/en-US/docs/Web/HTML/Attributes/rel/alternate_stylesheet).
    _Value type_: [**`<string>`**](/en-US/docs/Web/CSS/string); _Default value_: _none_; _Animatable_: **no**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("style", "&lt;style&gt; element in HTML")}}
