---
title: <mfenced>
slug: Web/MathML/Element/mfenced
tags:
  - Deprecated
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
  - Non-standard
browser-compat: mathml.elements.mfenced
---
{{MathMLRef}}{{Deprecated_Header}}{{Non-standard_Header}}

The deprecated MathML `<mfenced>` element used to provide the possibility to add custom opening and closing parentheses (such as brackets) and separators (such as commas or semicolons) to an expression. It has been removed from the latest MathML standard and modern browsers no longer support it. Use the {{MathMLElement("mrow")}} and {{MathMLElement("mo")}} elements instead.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `close`
  - : A string for the closing delimiter. The default value is `")`" and any white space is trimmed.
- `open`
  - : A string for the opening delimiter. The default value is `"("` and any white space is trimmed.
- `separators`
  - : A sequence of zero or more characters to be used for different separators, optionally divided by white space, which is ignored. The default value is ",". By specifying more than one character, it is possible to set different separators for each argument in the expression. If there are too many separators, all excess is ignored. If there are too few separators in the expression, the last specified separator is repeated.

## Examples

### The last separator is repeated (`,`)

Sample rendering: ![{a;b;c,d,e}](mfenced01.png)

Rendering in your browser: <math><mfenced close="}" open separators=";;,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="{" close="}" separators=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

### All excess is ignored (`,`)

Sample rendering: ![[a|b|c|d|e]](mfenced02.png)

Rendering in your browser: <math><mfenced close="]" open separators="||||,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="[" close="]" separators="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

## Specifications

The \<mfenced> element is no longer part of the [latest MathML standard](https://github.com/w3c/mathml/issues/2). Use the {{MathMLElement("mrow")}} and {{MathMLElement("mo")}} elements instead, or, for backwards compatibility, see [mathml-polyfills/mfenced.](https://github.com/mathml-refresh/mathml-polyfills/tree/main/mfenced)

## Browser compatibility

{{Compat}}
