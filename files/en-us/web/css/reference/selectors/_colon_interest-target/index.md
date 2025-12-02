---
title: :interest-target
slug: Web/CSS/Reference/Selectors/:interest-target
page-type: css-pseudo-class
browser-compat: css.selectors.interest-target
sidebar: cssref
---

The **`:interest-target`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) represents an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) element's target element, when interest is being shown in the interest invoker.

## Syntax

```css
:interest-target {
  /* ... */
}
```

## Examples

### Selecting an interest target element

In this example, we demonstrate how `:interest-target` can be used to apply styles to an interest invoker element's target element, only when interest is being shown in the invoker.

#### HTML

We include a {{htmlelement("button")}} and a {{htmlelement("p")}}. We specify the `<button>` as an interest invoker by giving it an `interestfor` attribute; its value is given as the `id` of the `<p>` element, therefore the paragraph is the invoker target.

```html live-sample___interest-target
<button interestfor="mytarget">A button</button>
<p id="mytarget">A paragraph</p>
```

#### CSS

In the CSS, we specify a rule with an `:interest-target` selector, which will apply a specific set of sttyles to the `<p>` element when interest is shown in the `<button>`. We also apply some other styles to the `<button>`, which we've hidden for brevity.

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

Try showing interest in the button (for example by hovering or focusing it), and note how this results in the styles shown earlier being applied to the paragraph.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`:interest-source`](/en-US/docs/Web/CSS/Reference/Selectors/:interest-source)
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS selectors module](/en-US/docs/Web/CSS/Guides/Selectors)
