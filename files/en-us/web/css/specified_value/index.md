---
title: Specified value
slug: Web/CSS/specified_value
tags:
  - CSS
  - Guide
  - Reference
---
{{CSSRef}}

The **specified value** of a [CSS](/en-US/docs/Web/CSS) property is the value it receives from the document's style sheet. The specified value for a given property is determined according to the following rules:

1.  If the document's style sheet explicitly specifies a value for the property, the given value will be used.
2.  If the document's style sheet doesn't specify a value but it is an inherited property, the value will be taken from the parent element.
3.  If none of the above pertain, the element's [initial value](/en-US/docs/Web/CSS/initial_value) will be used.

## Examples

### HTML

```html
<p>My specified color is given explicitly in the CSS.</p>

<div>The specified values of all my properties default to their
    initial values, because none of them are given in the CSS.</div>

<div class="fun">
  <p>The specified value of my font family is not given explicitly
      in the CSS, so it is inherited from my parent. However,
      the border is not an inheriting property.</p>
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

| Specification                                                                                    | Status                   | Comment             |
| ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName("CSS2.2", "cascade.html#specified-value", "cascaded value")}} | {{Spec2("CSS2.2")}} |                     |
| {{SpecName("CSS2.1", "cascade.html#specified-value", "cascaded value")}} | {{Spec2("CSS2.1")}} | Initial definition. |

## See also

- {{CSS_key_concepts}}
