---
title: interest-delay
slug: Web/CSS/Reference/Properties/interest-delay
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.interest-delay
sidebar: cssref
---

{{SeeCompatTable}}

The **`interest-delay`** [CSS](/en-US/docs/Web/CSS) property specifies a delay, both between the user showing interest in an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) element and the {{domxref("HTMLElement.interest_event", "interest")}} event being fired (which typically starts an effect on the target), and between the user losing interest and the {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} event being fired (which typically ends an effect on the target).

## Constituent properties

The `interest-delay` property is a shorthand for the following properties:

- {{cssxref("interest-delay-start")}}
- {{cssxref("interest-delay-end")}}

## Syntax

```css
/* Single value */
interest-delay: normal;
interest-delay: 2s;
interest-delay: 250ms;

/* Two values */
interest-delay: 1s normal;
interest-delay: 0s 500ms;

/* Global values */
interest-delay: inherit;
interest-delay: initial;
interest-delay: revert;
interest-delay: revert-layer;
interest-delay: unset;
```

### Values

The `interest-delay` property is specified using one or two values, which can be the keyword `normal` or a {{cssxref("&lt;time>")}} value:

- `normal`
  - : The initial value; specifies that the delays should be set to the browser's default value.
- {{cssxref("&lt;time>")}}
  - : Sets the delays to a specific duration.

## Description

A control element such as an {{htmlelement("a")}} or {{htmlelement("button")}} can be specified as an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) by giving it an [`interestfor`](/en-US/docs/Web/HTML/Reference/Elements/a#interestfor) attribute with a value equal to the `id` of a target element. When this relationship is established, the target element will be affected in some way when the user "shows interest" in the invoker (for example by hovering or focusing it). A common use case is to cause a popover to appear on hover/focus. When the user "loses interest", the effect will stop.

When the user shows/loses interest, the associated effect doesn't start/stop immediately — the browser introduces a short delay, which may vary by vendor. This makes sense — it would be annoying, for example, for preview popovers to appear immediately every time a link is hovered.

The `interest-delay` property allows developers to customize the delay before the interest effect starts (specified individually by the {{cssxref("interest-delay-start")}} property) and the delay before the interest effect ends (specified individually by the {{cssxref("interest-delay-end")}} property).

The `interest-delay` property can take one or two values. These values can be the keyword `normal`, which sets the default browser delay, or a {{cssxref("&lt;time>")}} value, which sets a custom delay. Custom delays must be positive values, otherwise the property is invalid.

If a single value is specified, that value is set for the {{cssxref("interest-delay-start")}} and {{cssxref("interest-delay-end")}}. If two values are specified, the first value is set for the {{cssxref("interest-delay-start")}} and the second value is set for the {{cssxref("interest-delay-end")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `interest-delay` effect

In this example, we demonstrate how `interest-delay` affects interest invoker behavior.

#### HTML

We include a {{htmlelement("button")}}, a {{htmlelement("p")}}, and an {{htmlelement("input")}} of type `checkbox`. We specify the `<button>` as an interest invoker by giving it an `interestfor` attribute; its value is given as the `id` of the `<p>` element, therefore the paragraph is the invoker target. The paragraph is made into a popover by giving it a [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) attribute, causing it to be initially hidden.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">a button</button>
<p id="mypopover" popover>A hover toolip</p>
<form>
  <label for="apply-delay">Apply <code>interest-delay: 1s 2s</code></label>
  <input type="checkbox" id="apply-delay" />
</form>
```

#### CSS

In the CSS, we specify a rule with a `.delay` selector, which will apply an `interest-delay` value of `1s 2s` to any interest invoker the `delay` class is set on. We will set this on the `<button>` when the checkbox is checked using JavaScript.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay: 1s 2s;
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

Now try checking the checkbox and trying the same actions again. This time, the popover should appear after a delay of 1 second once interest is shown, and hide after a delay of 2 seconds when interest is lost.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay-end")}}
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS basic user interface](/en-US/docs/Web/CSS/Guides/Basic_user_interface) module
