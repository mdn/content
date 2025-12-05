---
title: interest-delay-end
slug: Web/CSS/Reference/Properties/interest-delay-end
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.interest-delay-end
sidebar: cssref
---

{{SeeCompatTable}}

The **`interest-delay-end`** [CSS](/en-US/docs/Web/CSS) property specifies the delay between the user losing interest in an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) element and the {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} event firing.

The `interest-delay-end` and {{cssxref("interest-delay-start")}} properties can both be set using the {{cssxref("interest-delay")}} shorthand.

## Syntax

```css
/* Keyword or custom delay */
interest-delay-end: normal;
interest-delay-end: 2s;
interest-delay-end: 250ms;

/* Global values */
interest-delay-end: inherit;
interest-delay-end: initial;
interest-delay-end: revert;
interest-delay-end: revert-layer;
interest-delay-end: unset;
```

### Values

- `normal`
  - : Sets the delay to the browser's default delay. This is the initial value.
- {{cssxref("&lt;time>")}}
  - : Sets the delay to a specific duration. The value must be positive, otherwise the property becomes invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a basic `interest-delay-end` effect

In this example, we demonstrate how `interest-delay-end` affects interest invoker behavior.

#### HTML

The markup includes a {{htmlelement("button")}}, a {{htmlelement("p")}}, and an {{htmlelement("input")}} of type `checkbox`. We specify the `<button>` as an interest invoker by giving it the `interestfor` attribute, whose value matches the `id` of the `<p>` element. This makes the paragraph the target element. The paragraph is turned into a popover by giving it the [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) attribute, which hides it initially.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>Hover tooltip</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    Apply an <code>interest-delay-end</code> of <code>2s</code>
  </label>
</form>
```

#### CSS

In the CSS, we specify a rule with a `.delay` selector that applies an `interest-delay-end` value of `2s` to any interest invoker the `delay` class is set on. We will set this on the `<button>` when the checkbox is checked using JavaScript.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-end: 2s;
}
```

#### JavaScript

In our script, we get references to the `<button>` and the checkbox, then create an event listener that toggles the `delay` class on the `<button>` whenever the checkbox value changes (when it is checked or unchecked).

```js live-sample___interest-invoker-delay
const btn = document.querySelector("button");
const checkbox = document.querySelector("input");
checkbox.addEventListener("change", () => {
  btn.classList.toggle("delay");
});
```

#### Result

This renders as follows:

{{embedlivesample("interest-invoker-delay", "100%", "100")}}

Try showing interest in the button (for example, by hovering or focusing it) and then losing interest to observe the popover showing and hiding. By default, the popover shows and hides after a very short delay.

Now check the checkbox and try the same actions again. This time, the delay between showing interest and the popover appearing is unaffected, but the delay between losing interest and the popover disappearing should be increased to `2s`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay")}}
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS basic user interface](/en-US/docs/Web/CSS/Guides/Basic_user_interface) module
