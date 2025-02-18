---
title: Specified value
slug: Web/CSS/CSS_cascade/specified_value
page-type: guide
spec-urls:
  - https://www.w3.org/TR/CSS22/cascade.html#specified-value
  - https://drafts.csswg.org/css-cascade-5/#specified-value
---

{{CSSRef}}

The **specified value** of a [CSS](/en-US/docs/Web/CSS) property is the value it receives from the document's style sheet. The specified value for a given property is determined according to the following rules:

1. If the document's style sheet explicitly specifies a value for the property, the given value will be used.
2. If the document's style sheet doesn't specify a value but it is an inherited property, the value will be taken from the parent element.
3. If none of the above apply, the element's [initial value](/en-US/docs/Web/CSS/CSS_cascade/initial_value) will be used.

## Examples

### HTML

```html
<p>My specified color is given explicitly in the CSS.</p>

<div>
  The specified values of all my properties default to their initial values,
  because none of them are given in the CSS.
</div>

<div class="fun">
  <p>
    The specified value of my font family is not given explicitly in the CSS, so
    it is inherited from my parent. However, the border is not an inheriting
    property.
  </p>
</div>
```

### CSS

```css
.fun {
  border: 1px dotted pink;
  font-family: fantasy;
}

p {
  color: green;
}
```

### Result

{{EmbedLiveSample("Examples", 500, 220)}}

## Specifications

{{Specifications}}

## See also

- [Specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity)
- [Inheritance](/en-US/docs/Web/CSS/CSS_cascade/Inheritance)
- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax/Syntax)
- [At-rules](/en-US/docs/Web/CSS/CSS_syntax/At-rule)
- [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
- [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
- [Margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Initial](/en-US/docs/Web/CSS/CSS_cascade/initial_value), [computed](/en-US/docs/Web/CSS/CSS_cascade/computed_value), [used](/en-US/docs/Web/CSS/CSS_cascade/used_value), and [actual](/en-US/docs/Web/CSS/CSS_cascade/actual_value) values
- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
- [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
- [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
