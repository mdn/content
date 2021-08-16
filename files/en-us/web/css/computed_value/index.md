---
title: Computed value
slug: Web/CSS/computed_value
tags:
  - CSS
  - Guide
  - Reference
---
{{CSSRef}}

The **computed value** of a [CSS](/en-US/docs/Web/CSS) property is the value that is transferred from parent to child during inheritance. It is calculated from the [specified value](/en-US/docs/Web/CSS/specified_value) by:

1.  Handling the special values {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("unset")}}, and {{cssxref("revert")}}.
2.  Doing the computation needed to reach the value described in the "Computed value" line in the property's definition table.

The computation needed to reach a property's computed value typically involves converting relative values (such as those in `em` units or percentages) to absolute values. For example, if an element has specified values `font-size: 16px` and `padding-top: 2em`, then the computed value of `padding-top` is `32px` (double the font size).

However, for some properties (those where percentages are relative to something that may require layout to determine, such as `width`, `margin-right`, `text-indent`, and `top`), percentage-specified values turn into percentage-computed values. Additionally, unitless numbers specified on the `line-height` property become the computed value, as specified. The relative values that remain in the computed value become absolute when the [used value](/en-US/docs/Web/CSS/used_value) is determined.

> **Note:** The {{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API returns the [resolved value](/en-US/docs/Web/CSS/resolved_value), which may either be the [computed value](/en-US/docs/Web/CSS/computed_value) or the [used value](/en-US/docs/Web/CSS/used_value), depending on the property.

## Specifications

<table class="standard-table">
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
        {{SpecName("CSS2.2", "cascade.html#computed-value", "computed-value")}}
      </td>
      <td>{{Spec2("CSS2.2")}}</td>
      <td><p>No change.</p></td>
    </tr>
    <tr>
      <td>
        {{SpecName("CSS2.1", "cascade.html#computed-value", "computed value")}}
      </td>
      <td>{{Spec2("CSS2.1")}}</td>
      <td>Initial definition.</td>
    </tr>
  </tbody>
</table>

## See also

- {{domxref("window.getComputedStyle")}}
- {{CSS_key_concepts}}
