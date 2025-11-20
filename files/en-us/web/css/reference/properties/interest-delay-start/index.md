---
title: interest-delay-start
slug: Web/CSS/Reference/Properties/interest-delay-start
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.interest-delay-start
sidebar: cssref
---

{{SeeCompatTable}}

The **`interest-delay-start`** [CSS](/en-US/docs/Web/CSS) property specifies a delay between the user showing interest in an [interest invoker](/en-US/docs/Web/API/Popover_API/Interest_invokers) element and the target element effect starting.

The `interest-delay-start` and [`interest-delay-end`](/en-US/docs/Web/CSS/Reference/Properties/interest-delay-end) properties can both be set using the [`interest-delay`](/en-US/docs/Web/CSS/Reference/Properties/interest-delay) shorthand.

## Syntax

```css
/* Single value */
interest-delay-start: normal;
interest-delay-start: 2s;
interest-delay-start: 250ms;

/* Global values */
interest-delay-start: inherit;
interest-delay-start: initial;
interest-delay-start: revert;
interest-delay-start: revert-layer;
interest-delay-start: unset;
```

### Values

The `interest-delay-start` property value is specified using the keyword `normal` or a {{cssxref("&lt;time>")}} value:

- `normal`
  - : The initial value; specifies that the delay should be set to the browser's default value.
- {{cssxref("&lt;time>")}}
  - : Sets the delay to a specific duration.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `interest-delay-start` effect

In this example, we demonstrate how `interest-delay-start` affects interest invoker behavior.

#### HTML

We include a {{htmlelement("button")}}, a {{htmlelement("p")}}, and an {{htmlelement("input")}} of type `checkbox`. We specify the `<button>` as an interest invoker by giving it an `interestfor` attribute; its value is given as the `id` of the `<p>` element, therefore the paragraph is the invoker target. The paragraph is made into a popover by giving it a [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) attribute, causing it to be initially hidden.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">a button</button>
<p id="mypopover" popover>A hover toolip</p>
<form>
  <label for="apply-delay">Apply <code>interest-delay-start: 2s</code></label>
  <input type="checkbox" id="apply-delay" />
</form>
```

#### CSS

In the CSS, we specify a rule with a `.delay` selector, which will apply an `interest-delay-start` value of `2s` to any interest invoker the `delay` class is set on. We will set this on the `<button>` when the checkbox is checked using JavaScript.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-start: 2s;
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

Now try checking the checkbox and trying the same actions again. This time, the popover should appear after a delay of 2 seconds once interest is shown. The delay once interest is lost should be unaffected.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`interest-delay-end`](/en-US/docs/Web/CSS/Reference/Properties/interest-delay-end), [`interest-delay`](/en-US/docs/Web/CSS/Reference/Properties/interest-delay)
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Interest_invokers)
- [CSS basic user interface module](/en-US/docs/Web/CSS/Guides/Basic_user_interface)
