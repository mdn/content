---
title: Pseudo-elements
slug: Web/CSS/Pseudo-elements
tags:
  - CSS
  - Guide
  - Overview
  - Pseudo-element
  - Reference
  - Selectors
spec-urls: https://www.w3.org/TR/CSS22/selector.html#pseudo-element-selectors
---
{{CSSRef}}

A CSS **pseudo-element** is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, {{CSSxRef("::first-line")}} can be used to change the font of the first line of a paragraph.

```css
/* The first line of every <p> element. */
p::first-line {
  color: blue;
  text-transform: uppercase;
}
```

> **Note:** In contrast to pseudo-elements, {{CSSxRef("pseudo-classes")}} can be used to style an element based on its _state_.

## Syntax

```css
selector::pseudo-element {
  property: value;
}
```

You can use only one pseudo-element in a selector. It must appear after the simple selectors in the statement.

> **Note:** As a rule, double colons (`::`) should be used instead of a single colon (`:`). This distinguishes pseudo-classes from pseudo-elements. However, since this distinction was not present in older versions of the W3C spec, most browsers support both syntaxes for the original pseudo-elements.

## Alphabetical index

Pseudo-elements defined by a set of CSS specifications include the following:

A

- {{CSSxRef("::after", "::after (:after)")}}

B

- {{CSSxRef("::backdrop")}}
- {{CSSxRef("::before", "::before (:before)")}}

C

- {{CSSxRef("::cue")}}
- {{CSSxRef("::cue-region")}}

F

- {{CSSxRef("::first-letter", "::first-letter (:first-letter)")}}
- {{CSSxRef("::first-line", "::first-line (:first-line)")}}
- {{CSSxRef("::file-selector-button")}}

G

- {{CSSxRef("::grammar-error")}} {{Experimental_Inline}}

M

- {{CSSxRef("::marker")}}

P

- {{CSSxRef("::part", "::part()")}}
- {{CSSxRef("::placeholder")}}

S

- {{CSSxRef("::selection")}}
- {{CSSxRef("::slotted", "::slotted()")}}
- {{CSSxRef("::spelling-error")}} {{Experimental_Inline}}

T

- {{CSSxRef("::target-text")}} {{Experimental_Inline}}

## Specifications

{{Specifications}}

## Browser compatibility

<table class="standard-table">
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Lowest Version</th>
      <th>Support of</th>
    </tr>
    <tr>
      <td rowspan="2">Internet Explorer</td>
      <td>8.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>9.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>1.0 (1.5)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Opera</td>
      <td>4.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>7.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
  </tbody>
</table>

## See also

- [Pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes)
