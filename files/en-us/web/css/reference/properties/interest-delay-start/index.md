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

The **`interest-delay-start`** [CSS](/en-US/docs/Web/CSS) property specifies the delay between the user showing interest in an [interest invoker](/en-US/docs/Web/API/Popover_API/Using_interest_invokers) element and the {{domxref("HTMLElement.interest_event", "interest")}} event firing.

The `interest-delay-start` and {{cssxref("interest-delay-end")}} properties can both be set using the {{cssxref("interest-delay")}} shorthand.

## Syntax

```css
/* Keyword or custom delay */
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

- `normal`
  - : Sets the delay to the browser's default delay. This is the initial value.
- {{cssxref("&lt;time>")}}
  - : Sets the delay to a specific duration. The value must be positive, otherwise the property becomes invalid.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Creating a basic `interest-delay-start` effect

In this example, we demonstrate how `interest-delay-start` affects interest invoker behavior.

#### HTML

The markup includes a {{htmlelement("button")}}, a {{htmlelement("p")}}, and an {{htmlelement("input")}} of type `checkbox`. We specify the `<button>` as an interest invoker by giving it the `interestfor` attribute, whose value matches the `id` of the `<p>` element. This makes the paragraph the target element. The paragraph is turned into a popover by giving it the [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) attribute, which hides it initially.

```html live-sample___interest-invoker-delay
<button interestfor="mypopover">Button</button>
<p id="mypopover" popover>Hover tooltip</p>
<form>
  <input type="checkbox" id="apply-delay" />
  <label for="apply-delay">
    Apply an <code>interest-delay-start</code> of <code>2s</code>
  </label>
</form>
```

#### CSS

In the CSS, we specify a rule with a `.delay` selector that applies an `interest-delay-start` value of `2s` to any interest invoker the `delay` class is set on. We will set this on the `<button>` when the checkbox is checked using JavaScript.

```css live-sample___interest-invoker-delay
.delay {
  interest-delay-start: 2s;
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

Now check the checkbox and try the same actions again. This time, the popover should appear after a delay of `2s` when interest is shown. The delay after interest is lost should be unaffected.

### Removing `interest-delay-start` after interest has been shown

In this example, we show how to remove the `interest-delay-start` from multiple interest invoker elements after interest has been shown on one of them.

This is a useful technique. Having a popover appear as soon as interest is shown on any invoker would create a distracting and annoying user experience, which is why browsers add a small delay by default (see the [`interest-delay` description](/en-US/docs/Web/CSS/Reference/Properties/interest-delay#description) for more details). However, once users have shown interest in an invoker, it is convenient to allow them to move between other invokers quickly without delay.

#### HTML

The markup includes three `<button>` elements wrapped in a paragraph with a `container` class, and another paragraph that has been turned into a popover using the `popover` attribute. All three buttons are set up as interest invokers and reference the popover as their target using the `interestfor` attribute.

```html live-sample___interest-delay-remove-on-interest
<p class="container">
  <button interestfor="mypopover">Button 1</button>
  <button interestfor="mypopover">Button 2</button>
  <button interestfor="mypopover">Button 3</button>
</p>
<p id="mypopover" popover>Hover tooltip</p>
```

#### CSS

In the CSS, we apply an `interest-delay-start` value of `1s` to the buttons, then position the popover below whatever button is having interest shown on it by giving it a {{cssxref("position-area")}} value of `bottom` (see [Popover anchoring positioning](/en-US/docs/Web/API/Popover_API/Using#popover_anchor_positioning) for more information).

```css live-sample___interest-delay-remove-on-interest
button {
  interest-delay-start: 1s;
}

#mypopover {
  position-area: bottom;
}
```

Finally, we combine the {{cssxref(":interest-source")}} pseudo-class with the {{cssxref(":has()")}} pseudo-class to apply `interest-delay-start: 0s` to all buttons inside the paragraph, but only when the paragraph contains a button on which interest has been shown (that is, matched by `button:interest-source`).

```css live-sample___interest-delay-remove-on-interest
.container:has(button:interest-source) button {
  interest-delay-start: 0s;
}
```

#### Result

This renders as follows:

{{embedlivesample("interest-delay-remove-on-interest", "100%", "100")}}

Try showing interest in any button and notice how, when you then immediately show interest in another button, the popover appears without delay. If you stop showing interest in the buttons and then start again, the initial delay will return.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("interest-delay-end")}}, {{cssxref("interest-delay")}}
- [Popover API](/en-US/docs/Web/API/Popover_API)
- [Using interest invokers](/en-US/docs/Web/API/Popover_API/Using_interest_invokers)
- [CSS basic user interface](/en-US/docs/Web/CSS/Guides/Basic_user_interface) module
