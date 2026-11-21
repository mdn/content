---
title: CSSViewTransitionRule
slug: Web/API/CSSViewTransitionRule
page-type: web-api-interface
browser-compat: api.CSSViewTransitionRule
---

{{APIRef("View Transition API")}}

The **`CSSViewTransitionRule`** interface of the [View Transition API](/en-US/docs/Web/API/View_Transition_API) represents a CSS {{cssxref("@view-transition")}} [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules).
It lets you read the rule's `navigation` and `types` descriptor values from JavaScript.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor, {{domxref("CSSRule")}}._

- {{domxref("CSSViewTransitionRule.navigation", "navigation")}} {{readonlyinline}}
  - : Returns the `@view-transition` at-rule's `navigation` descriptor value.
- {{domxref("CSSViewTransitionRule.types", "types")}} {{readonlyinline}}
  - : Returns an array containing the `@view-transition` at-rule's `types` descriptor values.

## Instance methods

_Inherits methods from its ancestor, {{domxref("CSSRule")}}._

## Examples

### Reading the descriptors of a `@view-transition` rule

A stylesheet includes a {{cssxref("@view-transition")}} [at-rule](/en-US/docs/Web/CSS/Guides/Syntax/At-rules), with `navigation` and `types` descriptors set:

```css
@view-transition {
  navigation: auto;
  types: slide rotate;
}
```

In script, we get a reference to the `@view-transition` at-rule using `document.styleSheets[0].cssRules[0]`, then log the corresponding `CSSViewTransitionRule` object and its `navigation` and `types` properties to the console.
The `types` property returns an array containing the values set for the `types` descriptor.

```js
const myRule = document.styleSheets[0].cssRules[0];
console.log(myRule); // a CSSViewTransitionRule representing the @view-transition at-rule
console.log(myRule.navigation); // "auto"
console.log(myRule.types); // ["slide", "rotate"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@view-transition")}}
- [View Transition API](/en-US/docs/Web/API/View_Transition_API)
