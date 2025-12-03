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

The **`interest-delay-end`** [CSS](/en-US/docs/Web/CSS) property specifies a delay between the user losing interest in an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) element and the {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} event being fired, which typically ends an effect on the target.

The `interest-delay-end` and {{cssxref("interest-delay-start")}} properties can both be set using the {{cssxref("interest-delay")}} shorthand.

## Syntax

```css
/* Single value */
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

The `interest-delay-end` property value is specified using the keyword `normal` or a {{cssxref("&lt;time>")}} value:

- `normal`
  - : The initial value; specifies that the delay should be set to the browser's default value.
- {{cssxref("&lt;time>")}}
  - : Sets the delay to a specific duration.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `interest-delay-end` effect

In this example, we demonstrate how `interest-delay-end` affects interest invoker behavior.

#### HTML

We include a {{htmlelement("button")}}, a {{htmlelement("p")}}, and an {{htmlelement("input")}} of type `checkbox`. We specify the `<button>` as an interest invoker by giving it an `interestfor` attribute; its value is given as the `id` of the `<p>` element, therefore the paragraph is the invoker target. The paragraph is made into a popover by giving it a [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) attribute, causing it to be initially hidden.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">a button</button>
<p id="mypopover" popover>A hover toolip</p>
<form>
  <label for="apply-delay">Apply <code>interest-delay-end: 2s</code></label>
  <input type="checkbox" id="apply-delay" />
</form>
```

#### CSS

In the CSS, we specify a rule with a `.delay` selector, which will apply an `interest-delay-end` value of `2s` to any interest invoker the `delay` class is set on. We will set this on the `<button>` when the checkbox is checked using JavaScript.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-end: 2s;
}
```

#### JavaScript

In our script, we grab references to the `<button>` and the checkbox, then create an event listener that toggles setting and unsetting the `delay` class on the `<button>` when the checkbox value changes (is checked or unchecked).

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

Try showing interest in the button (for example by hovering or focusing it) and then losing interest to observe the popover showing and hiding. By default these actions should happen after a very short delay.

Now try checking the checkbox and trying the same actions again. This time, the delay between interest being shown and the popover being shown is unaffected, but the delay between interest being lost and the popover disappearing should be increased to 2 seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay")}}
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS basic user interface module](/en-US/docs/Web/CSS/Guides/Basic_user_interface)
