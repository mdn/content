---
title: <display-outside>
slug: Web/CSS/display-outside
page-type: css-type
browser-compat: css.properties.display.display-outside
---

{{CSSRef}}

The `<display-outside>` keywords specify the element's outer {{CSSxRef("display")}} type, which is essentially its role in flow layout. These keywords are used as values of the `display` property, and can be used for legacy purposes as a single keyword, or as defined in the Level 3 specification alongside a value from the {{CSSxRef("&lt;display-inside&gt;")}} keywords.

## Syntax

Valid `<display-outside>` values:

- `block`
  - : The element generates a block element box, generating line breaks both before and after the element when in the normal flow.
- `inline`
  - : The element generates one or more inline element boxes that do not generate line breaks before or after themselves. In normal flow, the next element will be on the same line if there is space.

> **Note:** Browsers that support the two value syntax, on finding the outer value only, such as when `display: block` or `display: inline` is specified, will set the inner value to `flow`. This will result in expected behavior; for example if you specify an element to be block, you would expect that the children of that element would participate in block and inline normal flow layout.

## Formal syntax

{{csssyntax}}

## Examples

In the following example, span elements (normally displayed as inline elements) are set to `display: block` and so break onto new lines and expand to fill their container in the inline dimension.

### HTML

```html
<span>span 1</span> <span>span 2</span>
```

### CSS

```css
span {
  display: block;
  border: 1px solid rebeccapurple;
}
```

### Result

{{EmbedLiveSample("Examples", 300, 60)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Block and Inline layout in Normal Flow](/en-US/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Formatting Contexts explained](/en-US/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
