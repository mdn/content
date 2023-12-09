---
title: CSSScopeRule
slug: Web/API/CSSScopeRule
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSScopeRule
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

The **`CSSScopeRule`** interface of the [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) represents a CSS {{CSSxRef("@scope")}} at-rule.

{{InheritanceDiagram}}

## Instance properties

_This interface inherits properties from its parent, {{domxref("CSSGroupingRule")}}._

- {{domxref("CSSScopeRule.end", "end")}} {{experimental_inline}}
  - : Returns a string containing the value of the `@scope` at-rule's scope limit.
- {{domxref("CSSScopeRule.start", "start")}} {{experimental_inline}}
  - : Returns a string containing the value of the `@scope` at-rule's scope root.

## Instance methods

_This interface inherits methods from its parent, {{domxref("CSSGroupingRule")}}._

## Examples

### Accessing @scope information in JavaScript

Assuming the following is the only stylesheet attached to a document:

```css
@scope (.outer) to (.inner) {
  :scope {
    background: yellow;
  }
}
```

The following JavaScript could be used to access information about the contained `@scope` block:

```js
const scopeBlock = document.styleSheets[0].cssRules[0];

console.log(scopeBlock.start); // Returns ".outer"
console.log(scopeBlock.end); // Returns ".inner"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("@scope")}}
- {{CSSxRef(":scope")}}
