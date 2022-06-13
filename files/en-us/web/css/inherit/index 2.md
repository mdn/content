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

The **`inherit`** CSS keyword causes the element for which it is specified to take the [computed value](/en-US/docs/Web/CSS/computed_value) of the property from its parent element. It can be applied to any CSS property, including the CSS shorthand {{cssxref("all")}}.

For [inherited properties](/en-US/docs/Web/CSS/inheritance#Inherited_properties), this reinforces the default behavior, and is only needed to override another rule. For [non-inherited properties](/en-US/docs/Web/CSS/inheritance#Non-inherited_properties), this specifies a behavior that typically makes relatively little sense and you may consider using {{cssxref("initial")}} instead, or {{cssxref("unset")}} on the {{cssxref("all")}} property.

Inheritance is always from the parent element in the document tree, even when the parent element is not the containing block.

## Examples

### Exclude selected elements from a rule

```css
/* Make second-level headers green */
h2 { color: green; }

/* ...but leave those in the sidebar alone so they use their parent's color */
#sidebar h2 { color: inherit; }
```

In this example the `h2` elements inside the sidebar might be different colors. For example, if one of them were the child of a div matched by the rule ...

```css
div#current { color: blue; }
```

... it would be blue.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Inheritance](/en-US/docs/Web/CSS/inheritance)
- Use {{cssxref("initial")}} to set a property to its initial value.
- Use {{cssxref("unset")}} to set a property to its inherited value if it inherits, or to its initial value if not.
- Use {{cssxref("revert")}} to reset a property to the value established by the user-agent stylesheet (or by user styles, if any exist).
- The {{cssxref("all")}} property lets you reset all properties to their initial, inherited, reverted, or unset state at once.
