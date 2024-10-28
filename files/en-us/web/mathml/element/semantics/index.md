---
title: <semantics>
slug: Web/MathML/Element/semantics
page-type: mathml-element
browser-compat: mathml.elements.semantics
---

{{MathMLRef}}

The **`<semantics>`** [MathML](/en-US/docs/Web/MathML) element associates annotations with a MathML expression, for example its text source as a [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language) or mathematical meaning expressed in a special {{glossary("XML")}} dialect. Typically, its structure is:

- a first child which is a MathML expression to be annotated.
- subsequent {{mathmlelement("annotation")}} or {{mathmlelement("annotation-xml")}} elements, the latter being reserved for XML formats such as [Content MathML](https://en.wikipedia.org/wiki/MathML#Content_MathML) or {{glossary("SVG")}}.

By default, only the first child of the `<semantics>` element is rendered while the others have their [display](/en-US/docs/Web/CSS/display) set to `none`.

```css
semantics > :not(:first-child) {
  display: none;
}
```

> [!NOTE]
> Legacy MathML specifications allowed renderers to decide the default rendering according to available annotations. The following rules for determining the visible child have been implemented in some browsers. See [MathML 4](https://w3c.github.io/mathml/) for the distinction between Presentation and Content MathML.
>
> - If no other rules apply: By default only the first child is rendered, which is supposed to be Presentation MathML.
> - If the first child is a Presentation MathML element other than `<annotation>` or `<annotation-xml>`, render the first child.
> - If no Presentation MathML is found, render the first `<annotation>` or `<annotation-xml>` child element of `<semantics>` without a `src` attribute. For `<annotation-xml>` elements the `encoding` attribute must be equal to one of following values:
>   - `"application/mathml-presentation+xml"`
>   - `"MathML-Presentation"`
>   - `"SVG1.1"`
>   - `"text/html"`
>   - `"image/svg+xml"`
>   - `"application/xml"`
>
> Note that `"application/mathml+xml"` is _not_ mentioned here as it does not distinguish between Content or Presentation MathML.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

## Example

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

```html
<math display="block">
  <semantics>
    <!-- The first child is the MathML expression rendered by default. -->
    <mrow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mrow>

    <!--
      Annotate with content MathML, a dedicated XML dialect
      to express the meaning of mathematical formulas.
    -->
    <annotation-xml encoding="application/mathml-content+xml">
      <apply>
        <plus />
        <apply>
          <power />
          <ci>x</ci>
          <cn type="integer">2</cn>
        </apply>
        <ci>y</ci>
      </apply>
    </annotation-xml>

    <!--
      Annotate with LaTeX, a lightweight markup language
      to write mathematical formulas.
    -->
    <annotation encoding="application/x-tex">x^{2} + y</annotation>
  </semantics>
</math>
```

{{ EmbedLiveSample('example', 700, 200, "", "") }}

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Roles">Implicit ARIA role</a>
    </th>
    <td>
      None
    </td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
