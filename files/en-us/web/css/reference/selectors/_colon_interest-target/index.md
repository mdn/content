---
title: :interest-target
slug: Web/CSS/Reference/Selectors/:interest-target
page-type: css-pseudo-class
status:
  - experimental
browser-compat: css.selectors.interest-target
sidebar: cssref
---

{{SeeCompatTable}}

The **`:interest-target`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) represents the target element associated with an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) when interest is shown on that invoker.

## Syntax

```css
:interest-target {
  /* ... */
}
```

## Examples

### Selecting the target element associated with an interest invoker

In this example, we demonstrate how `:interest-target` can be used to apply styles to an interest invoker element's target element when interest is shown on the invoker.

#### HTML

The markup includes a {{htmlelement("button")}} and a {{htmlelement("p")}}. We specify the `<button>` as an interest invoker by giving it the `interestfor` attribute whose value matches the `id` of the `<p>` element, making the paragraph the target element.

```html live-sample___interest-target
<button interestfor="mytarget">Button</button>
<p id="mytarget">A paragraph</p>
```

#### CSS

In the CSS, we specify a rule with an `:interest-target` selector, which will apply a specific set of styles to the `<p>` element when interest is shown in the `<button>`. We also apply some other styles to the `<button>`, which we've hidden for brevity.

```css hidden live-sample___interest-target
body {
  margin: 10px;
}

button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #eee;

  cursor: pointer;
}
```

```css live-sample___interest-target
p:interest-target {
  font-size: 1.5em;
  font-family: sans-serif;
  padding: 10px;
  background-color: hotpink;
  color: purple;
}
```

#### Result

This renders as follows:

{{embedlivesample("interest-target", "100%", "150")}}

Try showing interest in the button (for example, by hovering or focusing it), and note how this results in the styles shown earlier being applied to the paragraph.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":interest-source")}}
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors) module
