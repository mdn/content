---
title: :interest-source
slug: Web/CSS/Reference/Selectors/:interest-source
page-type: css-pseudo-class
browser-compat: css.selectors.interest-source
sidebar: cssref
---

The **`:interest-source`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) represents an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) element when interest is shown on it.

## Syntax

```css
:interest-source {
  /* ... */
}
```

## Examples

### Selecting an interest source element

In this example, we demonstrate how `:interest-source` can be used to apply styles to an interest invoker element only when interest is being shown in it.

#### HTML

We include a {{htmlelement("button")}} and a {{htmlelement("p")}}. We specify the `<button>` as an interest invoker by giving it an `interestfor` attribute; its value is given as the `id` of the `<p>` element, therefore the paragraph is the invoker target. The paragraph is made into a popover by giving it a [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) attribute, causing it to be initially hidden.

```html live-sample___interest-source
<button interestfor="mypopover">A button</button>
<p id="mypopover" popover>A hover toolip</p>
```

#### CSS

In the CSS, we specify a rule with an `:interest-source` selector, which will apply a specific combination of {{cssxref("background-color")}} and {{cssxref("color")}} to the `<button>` when interest is shown in it. We also apply some other styles to the `<button>`, which we've hidden for brevity.

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

Try showing interest in the button (for example by hovering or focusing it), and note how the pink and purple color combination is only applied when interest is being shown.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":interest-target")}}
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS selectors module](/en-US/docs/Web/CSS/Guides/Selectors)
