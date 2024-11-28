---
title: <math>
slug: Web/MathML/Element/math
page-type: mathml-element
browser-compat: mathml.elements.math
---

{{MathMLRef}}

The **`<math>`** [MathML](/en-US/docs/Web/MathML) element is the top-level MathML element, used to write a single mathematical formula. It can be placed in HTML content where [flow content](/en-US/docs/Web/HTML/Content_categories#flow_content) is permitted.

> [!NOTE]
> See the [Authoring MathML page](/en-US/docs/Web/MathML/Authoring#using_mathml) for tips to properly integrate MathML formulas in your web pages and the [Examples](/en-US/docs/Web/MathML/Examples) page for more demos.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following attribute:

- `display`

  - : This [enumerated](/en-US/docs/Glossary/Enumerated) attribute specifies how the enclosed MathML markup should be rendered. It can have one of the following values:

    - `block`, which means that this element will be displayed in its own block outside the current span of text and with [`math-style`](/en-US/docs/Web/CSS/math-style) set to `normal`.
    - `inline`, which means that this element will be displayed inside the current span of text and with [`math-style`](/en-US/docs/Web/CSS/math-style) set to `compact`.

    If not present, its default value is `inline`.

## Accessibility

The `<math>` element has an implicit [`math` ARIA role](/en-US/docs/Web/Accessibility/ARIA/Roles/math_role). Assistive technologies can use this role to identify the content as a mathematical expression and convey it to users.

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

For example, screen readers will represent the following quadratic formula similar to:

> x equals fraction start, negative b plus or minus square root of b squared minus 4 a c, end of root, over 2 a, end of fraction, maths

<details>
<summary>Markup for the quadratic formula</summary>

```html
<math display="block">
  <mrow>
    <mi>x</mi>
    <mo>=</mo>
    <mfrac>
      <mrow>
        <mrow>
          <mo>−</mo>
          <mi>b</mi>
        </mrow>
        <mo>±</mo>
        <msqrt>
          <mrow>
            <msup>
              <mi>b</mi>
              <mn>2</mn>
            </msup>
            <mo>−</mo>
            <mrow>
              <mn>4</mn>
              <mo>⁢</mo>
              <mi>a</mi>
              <mo>⁢</mo>
              <mi>c</mi>
            </mrow>
          </mrow>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mo>⁢</mo>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math>
```

</details>

{{ EmbedLiveSample('accessibility') }}

## Examples

This example contains two MathML formula. The first one is rendered in its own centered block, taking as much space as needed. The second one is rendered inside the paragraph of text, with reduced size and spacing in order to minimize its height.

```html
<p>
  The infinite sum
  <math display="block">
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
      <mfrac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfrac>
    </mrow>
  </math>
  is equal to the real number
  <math display="inline">
    <mfrac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfrac>
  </math>
  .
</p>
```

{{ EmbedLiveSample('math_example', 700, 200, "", "") }}

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Roles">Implicit ARIA role</a>
    </th>
    <td>
      <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/math_role">
        <code>math</code>
      </a>
    </td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML top-level element: {{ HTMLElement("html") }}
- SVG top-level element: {{ SVGElement("svg") }}
