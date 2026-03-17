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

The **`interest-delay`** [CSS](/en-US/docs/Web/CSS) property specifies the delay between the user showing interest in an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) element and the {{domxref("HTMLElement.interest_event", "interest")}} event firing, and the delay between the user losing interest and the {{domxref("HTMLElement.loseinterest_event", "loseinterest")}} event firing.

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

The `interest-delay` property accepts one or two values. The first value sets the delay before interest is shown (`interest-delay-start`); the second value, if provided, sets the delay before interest is lost (`interest-delay-end`). Each value can be either the keyword `normal` or a {{cssxref("&lt;time&gt;")}} value:

- `normal`
  - : Sets the delay to the browser's default delay. This is the initial value.
- {{cssxref("&lt;time&gt;")}}
  - : Sets the delay to a specific duration. The value must be positive, otherwise the property becomes invalid.

## Description

A control element such as an {{htmlelement("a")}} or {{htmlelement("button")}} can be set as an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) by giving it the [`interestfor`](/en-US/docs/Web/HTML/Reference/Elements/a#interestfor) attribute. Its value should be the `id` of a target element. When this relationship is established, the target element is affected when the user "shows interest" in the invoker (for example, by hovering or focusing it). A common use case is to display a popover on hover or focus. When the user "loses interest", the effect stops.

When the user shows or loses interest, the associated effect doesn't start or stop immediately — the browser adds a short delay (which may vary by browser). This prevents [preview popovers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers#using_interest_invokers_for_creating_preview_popovers), for example, from appearing immediately when the user hovers a link, which could be annoying and distracting on a link-heavy page.

The `interest-delay` property allows you to customize these delays. You can use `interest-delay` to specify the delay before the interest effect starts (specified by the {{cssxref("interest-delay-start")}} property) and the delay before the interest effect ends (specified by the {{cssxref("interest-delay-end")}} property) in a single declaration.

The `interest-delay` property can take one or two values. These values can be the keyword `normal`, which sets the default browser delay, or a {{cssxref("&lt;time&gt;")}} value, which sets a custom delay.
If a single value is specified, it applies to both {{cssxref("interest-delay-start")}} and {{cssxref("interest-delay-end")}}. If two values are specified, the first value sets {{cssxref("interest-delay-start")}}, and the second value sets {{cssxref("interest-delay-end")}}.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a basic `interest-delay` effect

In this example, we demonstrate how `interest-delay` affects interest invoker behavior.

#### HTML

The markup includes a {{htmlelement("button")}}, a {{htmlelement("p")}}, and an {{htmlelement("input")}} of type `checkbox`. We specify the `<button>` as an interest invoker by giving it the `interestfor` attribute whose value matches the `id` of the `<p>` element. This makes the paragraph the target element. The paragraph is turned into a popover by giving it the [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) attribute, which hides it initially.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>Hover tooltip</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    Apply an <code>interest-delay</code> of <code>1s 2s</code>
  </label>
</form>
```

#### CSS

In the CSS, we define a `.delay` rule that applies an `interest-delay` value of `1s 2s` to any interest invoker the `delay` class is set on. We will set this class on the `<button>` when the checkbox is checked using JavaScript.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay: 1s 2s;
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

Now check the checkbox and try the same actions again. This time, the popover should appear after a delay of `1s` when interest is shown, and hide after a delay of `2s` when interest is lost.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("interest-delay-start")}}, {{cssxref("interest-delay-end")}}
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS basic user interface](/en-US/docs/Web/CSS/Guides/Basic_user_interface) module
