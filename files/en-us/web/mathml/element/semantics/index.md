---
title: <semantics>
slug: Web/MathML/Element/semantics
tags:
  - MathML
  - MathML Reference
  - MathML:Element
browser-compat: mathml.elements.semantics
---
{{MathMLRef}}

The `<semantics>` element associates annotations with a MathML expression, for example its text source as a [lightweight markup language](https://en.wikipedia.org/wiki/Lightweight_markup_language) or mathematical meaning expressed in a special {{glossary("XML")}} dialect. Typically, its structure is:

- a first child which is a MathML expression to be annotated.
- subsequent `<annotation>` or `<annotation-xml>` elements, the latter being reserved for XML formats such as [OpenMath](https://en.wikipedia.org/wiki/OpenMath).

By default, only the first child of the `<semantics>` element is rendered while the others have their [display](/en-US/docs/Web/CSS/display) set to `none`.

> **Note:** Legacy MathML specifications allowed renderers to decide the default rendering according to available annotations. The following rules for determining the visible child have been implemented in some browsers. See [MathML Full](https://w3c.github.io/mathml/) for the distinction between Presentation and Content MathML.
>
>
> - If no other rules apply: By default only the first child is rendered, which is supposed to be Presentation MathML.
> - If the first child is a Presentation MathML element other than `<annotation>` or `<annotation-xml>`, render the first child.
> - If no Presentation MathML is found, render the first `<annotation>` or `<annotation-xml>` child element of `<semantics>`.
>  Beware that `<annotation-xml>` elements are only recognized, if the encoding attribute is set to one of the following:
>
> - `"application/mathml-presentation+xml"`
> - `"MathML-Presentation"`
> - `"SVG1.1"`
> - `"text/html"`
> - `"image/svg+xml"`
> - `"application/xml`".
>
> Note that `"application/mathml+xml"` is _not_ mentioned here as it does not distinguish between Content or Presentation MathML.

## Attributes

`<semantics>`, `<annotation>` and `<annotation-xml>` elements accept the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes). Additionally, the following attributes can be set on the `<annotation>` and `<annotation-xml>` elements:

- `definitionURL`
  - : The location of the annotation key symbol.
- `encoding`
  - : The encoding of the semantic information in the annotation (e.g. `"MathML-Content"`, `"MathML-Presentation"`, `"application/openmath+xml"`, `"image/png"`)
- `cd`
  - : The content dictionary that contains the annotation key symbol.
- `name`
  - : The name of the annotation key symbol.
- `src`
  - : The location of an external source for semantic information.

## Example

```html
<math>
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

    <!-- Annotate with "Content MathML", a dedicated XML dialect to
         express the meaning of mathematical formulas. -->
    <annotation-xml encoding="MathML-Content">
      <apply>
        <plus/>
        <apply>
          <power/>
          <ci>x</ci>
          <cn type="integer">2</cn>
        </apply>
        <ci>y</ci>
      </apply>
    </annotation-xml>

    <!-- Annotate with a PNG image of the formula. -->
    <annotation encoding="image/png" src="some/path/formula.png"/>

    <!-- Annotate with LaTeX, a lightweight markup language to write
         mathematical formulas. -->
    <annotation encoding="application/x-tex">
      x^{2} + y
    </annotation>

  </semantics>
</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
