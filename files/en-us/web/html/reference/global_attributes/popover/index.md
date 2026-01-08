---
title: HTML popover global attribute
short-title: popover
slug: Web/HTML/Reference/Global_attributes/popover
page-type: html-attribute
browser-compat: html.global_attributes.popover
sidebar: htmlsidebar
---

The **`popover`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) is used to designate an element as a popover element.

## Value

The `popover` attribute can take one of the following values:

- `"auto"`
  - : [`auto`](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) popovers can be "light dismissed" — this means that you can hide the popover by clicking outside it or pressing the <kbd>Esc</kbd> key. Showing an `auto` popover will generally close other `auto` popovers that are already displayed, unless they are nested.

    > [!NOTE]
    > Setting an empty value for `popover` — `popover` or `popover=""` — is equivalent to setting `popover="auto"`.

- `"hint"` {{experimental_inline}}
  - : [`hint`](/en-US/docs/Web/API/Popover_API/Using#using_hint_popover_state) popovers do not close `auto` popovers when they are displayed, but will close other hint popovers.
    They can be light dismissed and will respond to close requests.

- `"manual"`
  - : [`manual`](/en-US/docs/Web/API/Popover_API/Using#using_manual_popover_state) popovers cannot be "light dismissed" and are not automatically closed. Popovers must explicitly be displayed and closed using declarative show/hide/toggle buttons or JavaScript. Multiple independent `manual` popovers can be shown simultaneously.

## Description

Popover elements are hidden via `display: none` until opened via an invoking/control element (i.e., a `<button>` or `<input type="button">` with a [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) attribute) or a {{domxref("HTMLElement.showPopover()")}} call.

When open, popover elements will appear above all other elements in the {{glossary("top layer")}}, and won't be influenced by parent elements' {{cssxref('position')}} or {{cssxref('overflow')}} styling.

Popovers that have the [`auto`](/en-US/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss) state can be shown and hidden using associated controls (designated by the [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) attribute) and "light dismissed" by clicking outside the popover area, opening another popover, or pressing browser-specific mechanisms such as the <kbd>Esc</kbd> key.

Generally only one `auto` popover can be displayed on-screen at a time — showing a second popover when one is already shown will hide the first one. The exception to this rule is when you have nested auto popovers. See [Nested popovers](/en-US/docs/Web/API/Popover_API/Using#nested_popovers) for more details.

They can also be controlled using JavaScript, for example the {{domxref("HTMLElement.togglePopover()")}} method can be used to toggle a popover between shown and hidden.

By contrast, [`manual`](/en-US/docs/Web/API/Popover_API/Using#using_manual_popover_state) popovers must be manually shown and hidden — they don't automatically close other popovers when they are displayed and they can't be light dismissed. This allows for use cases where you want to show multiple popovers at the same time.

[`hint`](/en-US/docs/Web/API/Popover_API/Using#using_hint_popover_state) popovers do not close `auto` popovers when they are displayed, but will close other hint popovers. They can be light dismissed and will respond to close requests.

Usually `hint` popovers are shown and hidden in response to non-click JavaScript events such as [`mouseover`](/en-US/docs/Web/API/Element/mouseover_event)/[`mouseout`](/en-US/docs/Web/API/Element/mouseout_event) and [`focus`](/en-US/docs/Web/API/Element/focus_event)/[`blur`](/en-US/docs/Web/API/Element/blur_event). Clicking a button to open a `hint` popover would cause an open `auto` popover to light-dismiss.

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
- [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) HTML attribute
- [`popovertargetaction`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertargetaction) HTML attribute
- {{cssxref("::backdrop")}} CSS pseudo-element
- {{cssxref(":popover-open")}} CSS pseudo-class
