---
title: style
slug: Web/SVG/Attribute/style
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.style.style
---
{{SVGRef}}

The **`style`** attribute allows to style an element using {{Glossary("CSS")}} declarations. It functions identically to [the `style` attribute in HTML](/en-US/docs/Web/HTML/Global_attributes/style).

You can use this attribute with any SVG element.

## Example

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewbox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="80"  height="40" x="10" y="10"
      style="fill: skyblue; stroke: cadetblue; stroke-width: 2;"/>
</svg>
```

{{EmbedLiveSample("Example", "200", "120")}}

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td><code>&#x3C;style></code></td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><em>None</em></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

*   `<style>`
    *   : The syntax of style data depends on the style sheet language. By default, the style sheet language is [CSS](/en-US/docs/Web/CSS).

        > **Note:** In theory, [the `contentStyleType` attribute](/en-US/docs/Web/SVG/Attribute/contentStyleType) could be used to specify styling languages other than CSS, like [XSL(T)](/en-US/docs/Web/XSLT). However, this was never implemented satisfactorily in browsers, so you should not rely on it.

## Specifications

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName("SVG2", "styling.html#StyleAttribute", "style")}}
      </td>
      <td>{{Spec2("SVG2")}}</td>
      <td>No change</td>
    </tr>
    <tr>
      <td>
        {{SpecName("SVG1.1", "styling.html#StyleAttribute", "style")}}
      </td>
      <td>{{Spec2("SVG1.1")}}</td>
      <td>Initial definition</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}

## See also

*   {{SVGElement("style")}}
*   [HTML `style` attribute](/en-US/docs/Web/HTML/Global_attributes/style)
