---
title: inherit
slug: Web/CSS/inherit
tags:
  - CSS
  - CSS Cascade
  - CSS Value
  - Cascade
  - Inheritance
  - Keyword
  - Layout
  - Reference
  - Style
  - inherit
browser-compat: css.types.global_keywords.inherit
---
{{CSSRef}}

The **`inherit`** CSS keyword causes the element to take the [computed value](/en-US/docs/Web/CSS/computed_value) of the property from its parent element. It can be applied to any CSS property, including the CSS shorthand property {{cssxref("all")}}.

For [inherited properties](/en-US/docs/Web/CSS/inheritance#inherited_properties), this reinforces the default behavior, and is only needed to override another rule.

> **Note:** Inheritance is always from the parent element in the document tree, even when the parent element is not the containing block.

## Examples

### Exclude selected elements from a rule

```css
/* Make second-level headers green */
h2 { color: green; }

/* Leave those in the sidebar alone so they use their parent's color */
#sidebar h2 { color: inherit; }
```

In this example, the `h2` elements inside the sidebar might be different colors. For example, consider one of them that would by the child of a `div` matched by the rule:

```css
div#current { color: blue; }
```

Then, it would be blue.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inheritance](/en-US/docs/Web/CSS/inheritance)
- Use the {{cssxref("initial")}} keyword to set a property to its initial value.
- Use the {{cssxref("revert")}} keyword to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).
- Use the {{cssxref("revert-layer")}} keyword to reset a property to the value established in a previous cascade layer.
- Use the {{cssxref("unset")}} keyword to set a property to its inherited value if it inherits or to its initial value if not.
- The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
