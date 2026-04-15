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

- `"hint"`
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

### Making an element a popover

The following code renders a button that, when activated, will open a popover element. This behavior can be achieved using HTML alone.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample('basic_example_of_popover', 600, 100)}}

### Nesting popovers

In this example, a button opens a popover that contains additional nested popovers. The nested popovers can be opened without closing the original menu popover.

#### HTML

In the first part of the HTML, we create a {{htmlElement("button")}} that will open the main popover, which is a menu containing a few options.

```html
<header>
  <button popovertarget="menu">Open Menu</button>
</header>
<main>
  <!--  Page content goes here  -->
</main>
```

In the second part of the HTML, we create the menu popover that is opened by the button we created in the previous code block. This menu popover contains an unordered list of menu items, each with an info button that opens a nested popover. The menu popover uses `popover="auto"`, which means it will not be closed when the nested popovers are opened.

```html
<!-- menu popover -->
<div id="menu" popover="auto">
  <ul>
    <li>
      <a href="#">New thing</a><button popovertarget="new-info">ⓘ</button>
    </li>
    <li>
      <a href="#">Open thing</a><button popovertarget="open-info">ⓘ</button>
    </li>
    <li>
      <a href="#">Save thing</a><button popovertarget="save-info">ⓘ</button>
    </li>
    <li>
      <a href="#">Close thing</a><button popovertarget="close-info">ⓘ</button>
    </li>
  </ul>
</div>
```

In the final part of the HTML, we create the info popovers for each menu item. Each popover includes `popover="hint"`, which means it will not close the original menu popover but will close the other open info popovers.

```html
<!-- info popovers -->
<div id="new-info" class="info-popover" popover="hint">
  This is some information about <strong>creating a new</strong> thing.
</div>
<div id="open-info" class="info-popover" popover="hint">
  This is some information about <strong>opening an existing</strong> thing.
</div>
<div id="save-info" class="info-popover" popover="hint">
  This is some information about <strong>saving the current</strong> thing.
</div>
<div id="close-info" class="info-popover" popover="hint">
  This is some information about <strong>closing the current</strong> thing.
</div>
```

#### CSS

```css hidden
header {
  display: flex;
  justify-content: center;
}
header button {
  margin: 0.4rem auto;
}
```

We've used [anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) to position the menu popover below the `<button>` and [grid](/en-US/docs/Web/CSS/Guides/Grid_layout) to lay out the menu items and info buttons.

```css
#menu {
  margin: 0;
  margin-top: 0.4rem;
  inset: auto;
  position-area: bottom;
}
#menu ul {
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 0.4rem;
  padding: 0.4rem;
}
#menu li {
  grid-column: span 2;
  display: grid;
  grid: inherit;
  grid-template-columns: subgrid;
  gap: 1.4rem;
}
li [popovertarget] {
  cursor: pointer;
  font-size: 1.2rem;
}
li button {
  border: none;
  padding: 0;
  background-color: inherit;
}
```

Here, we've used anchor positioning to make the info popovers appear to the right of their respective info buttons.

```css
div.info-popover {
  margin: 2rem;
  inset: auto;
  max-width: 300px;
  position-area: right;
}
```

#### Result

Click the _Open Menu_ button, then click the info icons (ⓘ) next to the menu options to open the info popovers.

{{EmbedLiveSample('popover_hint', 600, 250)}}

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
