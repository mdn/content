---
title: media
slug: Web/SVG/Attribute/media
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.elements.style.media
---
{{SVGRef}}

The **`media`** attribute specifies a {{Glossary("media query")}} that must be matched for a style sheet to apply.

You can use this attribute with the following SVG elements:

- {{SVGElement("style")}}

## Example

```css hidden
html, body, svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect { fill: black; }
  </style>
  <style media="all and (min-width: 600px)">
    rect { fill: seagreen; }
  </style>

  <text y="15">Resize the window to see the effect</text>
  <rect y="20" width="200" height="200" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/CSS/@media#media-query-list"
            >&#x3C;media-query-list></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>all</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

- `<media-query-list>`
  - : This value holds a media query that needs to match in order for the style sheet to be applied.

    If not specified, the style sheet is applied unconditionally.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
