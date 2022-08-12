---
title: unset
slug: Web/CSS/unset
tags:
  - CSS
  - CSS Cascade
  - CSS Value
  - Keyword
  - Layout
  - Reference
  - Style
  - unset
browser-compat: css.types.global_keywords.unset
---
{{CSSRef}}

The **`unset`** CSS keyword resets a property to its inherited value if the property naturally inherits from its parent, and to its [initial value](/en-US/docs/Web/CSS/initial_value) if not. In other words, it behaves like the {{cssxref("inherit")}} keyword in the first case, when the property is an [inherited property](/en-US/docs/Web/CSS/inheritance#inherited_properties), and like the {{cssxref("initial")}} keyword in the second case, when the property is a [non-inherited property](/en-US/docs/Web/CSS/inheritance#non-inherited_properties).

**`unset`** can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}.

## Examples

### Color

[`color`](/en-US/docs/Web/CSS/color#formal_definition) is an inherited property.

#### HTML

```html
<p>This text is red.</p>
<div class="foo">
  <p>This text is also red.</p>
</div>
<div class="bar">
  <p>This text is green (default inherited value).</p>
</div>
```

#### CSS

```css
.foo {
  color: blue;
}

.bar {
  color: green;
}

p {
  color: red;
}

.bar p {
  color: unset;
}
```

#### Result

{{ EmbedLiveSample('Color') }}

### Border

[`border`](/en-US/docs/Web/CSS/border#formal_definition) is a non-inherited property.

#### HTML

```html
<p>This text has a red border.</p>
<div>
  <p>This text has a red border.</p>
</div>
<div class="bar">
  <p>This text has a black border (initial default, not inherited).</p>
</div>
```

#### CSS

```css
div {
  border: 1px solid green;
}

p {
  border: 1px solid red;
}

.bar p {
  border-color: unset;
}
```

#### Result

{{ EmbedLiveSample('Border', 'auto', 200) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Use the {{cssxref("initial")}} keyword to set a property to its initial value.
- Use the {{cssxref("inherit")}} keyword to make an element's property the same as its parent.
- Use the {{cssxref("revert")}} keyword to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).
- Use the {{cssxref("revert-layer")}} keyword to reset a property to the value established in a previous cascade layer.
- The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
