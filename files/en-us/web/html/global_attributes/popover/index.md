---
title: popover
slug: Web/HTML/Global_attributes/popover
page-type: html-attribute
browser-compat: html.global_attributes.popover
---

{{HTMLSidebar("Global_attributes")}}

The **`popover`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is used to designate an element as a popover element.

## Value

The `popover` attribute can take one of the following values:

- `auto` (setting `popover` is equivalent to setting `popover="auto"`)
- `hint`
- `manual`

## Description

Popover elements are hidden via `display: none` until opened via an invoking/control element (i.e. a `<button>` or `<input type="button">` with a [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget) attribute) or a {{domxref("HTMLElement.showPopover()")}} call.

When open, popover elements will appear above all other elements in the {{glossary("top layer")}}, and won't be influenced by parent elements' {{cssxref('position')}} or {{cssxref('overflow')}} styling.

Popovers that have the [`auto`](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) state can be shown and hidden using associated controls (designated by the [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget) attribute, ) and "light dismissed" by clicking outside the popover area, opening another popover, or pressing browser-specific mechanisms such as the <kbd>Esc</kbd> key. Generally only one `auto` popover can be displayed on-screen at a time — showing a second popover when one is already shown will hide the first one. They can also be controlled using JavaScript, for example the {{domxref("HTMLElement.togglePopover()")}} method can be used to toggle a popover between shown and hidden.

By contrast, [`manual`](/en-US/docs/Web/API/Popover_API/Using#using_manual_popover_state) popovers can't be light dismissed — they must be manually shown and hidden. This allows for use cases where you want to show multiple popovers at the same time.

[`hint`](/en-US/docs/Web/API/Popover_API/Using#using_hint_popover_state) popovers are similar to `auto` popovers, but with a significant difference. They can be light-dismissed, but they do not light-dismiss `auto` popovers when shown, only `hint` popovers. This is useful for situations where, for example, you have toolbar buttons that can be pressed to show UI popovers, but you also want to reveal tooltips when the buttons are hovered, without dismissing the UI popovers.

`hint` popovers tend to be shown and hidden in response to non-click JavaScript events such as [`mouseover`](/en-US/docs/Web/API/Element/mouseover_event)/[`mouseout`](/en-US/docs/Web/API/Element/mouseout_event) and [`focus`](/en-US/docs/Web/API/Element/focus_event)/[`blur`](/en-US/docs/Web/API/Element/blur_event). When clicking on a button, the click itself would cause an open `auto` popover to light-dismiss.

For detailed information on usage, see the {{domxref("Popover API", "Popover API", "", "nocode")}} landing page.

## Examples

The following renders a button that will open a popover element when activated.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('Examples', 600, 200)}}

> [!NOTE]
> See our [Popover API examples landing page](https://mdn.github.io/dom-examples/popover-api/) to access the full collection of MDN popover examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Popover API", "Popover API", "", "nocode")}}
- [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget) HTML attribute
- [`popovertargetaction`](/en-US/docs/Web/HTML/Element/button#popovertargetaction) HTML attribute
- [`::backdrop`](/en-US/docs/Web/CSS/::backdrop) CSS pseudo-element
- [`:popover-open`](/en-US/docs/Web/CSS/:popover-open) CSS pseudo-class
