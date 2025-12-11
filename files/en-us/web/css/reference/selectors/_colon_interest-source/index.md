---
title: :interest-source
slug: Web/CSS/Reference/Selectors/:interest-source
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.interest-source
sidebar: cssref
---

{{SeeCompatTable}}

The **`:interest-source`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) represents an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) element when interest is shown on it.

## Syntax

```css
:interest-source {
  /* ... */
}
```

## Examples

### Selecting an interest invoker element

In this example, we demonstrate how `:interest-source` can be used to apply styles to an interest invoker element when interest is shown on it.

#### HTML

The markup includes a {{htmlelement("button")}} and a {{htmlelement("p")}}. We specify the `<button>` as an interest invoker by giving it the `interestfor` attribute whose value matches the `id` of the `<p>` element, making the paragraph the target element. The paragraph is turned into a popover by giving it the [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) attribute, which hides it initially.

```html live-sample___interest-source
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>A hover tooltip</p>
```

#### CSS

In the CSS, we specify a rule with an `:interest-source` selector to apply a specific combination of {{cssxref("background-color")}} and {{cssxref("color")}} to the `<button>` when interest is shown on it. We also apply some other styles to the `<button>`, which are hidden for brevity.

```css hidden live-sample___interest-source
button {
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1.5em;
  background-color: #eee;

  cursor: pointer;
}
```

```css live-sample___interest-source
button:interest-source {
  background-color: hotpink;
  color: purple;
}
```

#### Result

This renders as follows:

{{embedlivesample("interest-source", "100%", "100")}}

Try showing interest in the button (for example, by hovering or focusing it), and note how the `hotpink` and `purple` color combination is applied only when interest is shown.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":interest-target")}}
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors) module
