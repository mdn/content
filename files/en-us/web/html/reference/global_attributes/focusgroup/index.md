---
title: "`focusgroup` HTML global attribute"
short-title: focusgroup
slug: Web/HTML/Reference/Global_attributes/focusgroup
page-type: html-attribute
status:
  - experimental
browser-compat: html.global_attributes.focusgroup
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`focusgroup`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) declaratively implements an accessible "roving tabindex" keyboard navigation pattern on an element and its focusable descendants, which includes creating a tab stop on the parent element, cursor key navigation on the descendants, and remembering the last focused element in the group.

## Values

One or more space-separated tokens that define the behavior of the created focusgroup, or the value `none`. The syntax is as follows:

```html
focusgroup="[behavior] [axis] [wrap] nomemory | none"
```

The tokens are as follows:

- `[behavior]`
  - : Specifies the focusgroup behavior to create. Possible values include:
    - `listbox`
      - : Specifies vertical listbox semantics, with `block` cursor key navigation.
    - `menu`
      - : Specifies vertical menu semantics, with `block` cursor key navigation and `wrap` behavior.
    - `menubar`
      - : Specifies horizontal menubar semantics, with `inline` cursor key navigation and `wrap` behavior.
    - `radiogroup`
      - : Specifies radio button group semantics, with `wrap` behavior.
    - `tablist`
      - : Specifies horizontal tablist semantics, with `inline` cursor key navigation and `wrap` behavior.
    - `toolbar`
      - : Specifies horizontal toolbar semantics, with `inline` cursor key navigation.
- `[axis]` {{optional_inline}}
  - : Specifies a logical axis to restrict cursor key navigation to. Possible values include:
    - `block`
      - : Cursor key navigation is restricted to the block direction.
    - `inline`
      - : Cursor key navigation is restricted to the inline direction.

    If the specified `[behavior]` implies an `[axis]` value (see [Focusgroup behaviors](#focusgroup_behaviors)), the value will default to the implied value if omitted. If no `[axis]` value is implied, cursor key navigation is possible on on both axes. If an axis value is implied, it is possible to set both values to allow cursor key navigation on both axes.
- `[wrap]` {{optional_inline}}
  - : Specifies the wrapping behavior of the cursor key navigation. Possible values include:
    - `wrap`
      - : When you try to navigate past the end or beginning of the focusable descendant items, the focus will shift to the item at the other end of the group.
    - `nowrap`
      - : When you try to navigate past the end or beginning of the focusable items, the focus will remain on the current item.

    If omitted, the value defaults to `nowrap`, unless the specified `[behavior]` implies the `wrap` value.
- `nomemory` {{optional_inline}}
  - : If included, specifies that the focusgroup should not remember its last-focused descendant when unfocused and focused again. The default behavior is to remember the last-focused descendant.
- `none` {{optional_inline}}
  - : If set, specifies that the element does not define a focusgroup, and excludes the element and its subtree from any ancestor focusgroup. The `none` value cannot be combined with any other token.

## Description

The "roving tabindex" keyboard navigation pattern is very common on the web — this combines sequential navigation between control groups with directional navigation within each group. Related sets of controls are grouped together and can be tabbed between as single items. Once focused, you can move between the individual items in a group using the cursor keys, and select an item using the <kbd>Enter</kbd>/<kbd>Return</kbd> key or the spacebar.

This behavior (or similar) is available by default in a small number of browser features (for example, {{htmlelement("select")}} menus), but for any kind of custom functionality, implementing a "roving tabindex" feature has historically involved significant implementation work. Many JavaScript frameworks provide their own "roving tabindex" implementations, saving time, but using one still means downloading a significant amount of extra JavaScript.

The `focusgroup` attribute provides the required functionality in one convenient attribute. For example, the following snippet is all that's required to create a single tabstop item that semantically behaves like a toolbar:

```html live-sample___basic-focusgroup
<div focusgroup="toolbar" aria-label="Example toolbar">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
  <button>Four</button>
</div>
```

```css hidden live-sample___basic-focusgroup live-sample___basic-focusgroup-nomemory live-sample___basic-focusgroup-initialfocus live-sample___basic-focusgroup-axis-wrap live-sample___focusgroup-opt-out
html,
body {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

{{embedlivesample("basic-focusgroup", "100%", 100)}}

Try tabbing to it, and then moving focus between the buttons using the left and right cursor keys.

This implementation follows the ARIA authoring practices guide (APG) [toolbar pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) for its implementation (see the [Focusgroup behaviors](#focusgroup_behaviors) for details of all the available behaviors). This pattern includes the following:

- The parent container can be selected as a single group via the <kbd>Tab</kbd> key.
- Once the parent is selected, focus can be moved between the descendant items via the horizontal cursor keys. The vertical cursor keys will scroll the page.
  > [!NOTE]
  > Each contiguous run of focusgroup items is called a **focusgroup segment**.
- You can focus the first item via the <kbd>Home</kbd> key, and the last item via the <kbd>End</kbd> key.
- When the toolbar is first selected, the first item will be focused. When the toolbar is deselected and subsequently selected again, focus is restored to the item that was previously focused.
- The parent container is given an ARIA [`role`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) of [`toolbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) so that it makes sense to screenreaders and other assistive technologies.

In addition, focusgroups have the following behaviors:

- Any items that are [`disabled`](/en-US/docs/Web/HTML/Reference/Attributes/disabled) or hidden (for example using {{cssxref("visibility")}}) are skipped over when the items are moved between.
- The roving index is updated when new items are inserted into the DOM dynamically.
- Text {{cssxref("direction")}} and {{cssxref("writing-mode")}} is respected. For example, if a vertical writing mode is set, causing the focusgroup to render vertically, the vertical cursor keys will shift focus between items instead.
- The {{cssxref("flex-direction")}} and {{cssxref("reading-flow")}} are respected. For example, if the focusgroup is laid out using flexbox, and `flex-direction` is set to `row-reverse`, the last item will initially be focused, and the right cursor key will move focus to the left. If `reading-flow` is then set to `flex-visual`, the first item will initially be focused, and the right cursor key will move focus to the right.

> [!NOTE]
> Focusgroups can be used inside web component [shadow DOMs](/en-US/docs/Web/API/Web_components/Using_shadow_DOM); `focusgroup` can be declared on a shadow DOM element or on the shadow host.

### Focusgroup behaviors

The different [`[behavior]`](#behavior) tokens available to the `focusgroup` attribute are detailed in the following table. This includes details of the implicitly applied additional tokens and minimum ARIA roles for each behavior type, and the ARIA authoring practices guide (APG) [pattern](https://www.w3.org/WAI/ARIA/apg/patterns/) each behavior is based on.

| Behavior     | APG pattern                                                       | Minimum parent role                                                                | Minimum ancestor role                                                          | Additional tokens                      |
| ------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------- |
| `listbox`    | [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)      | [`listbox`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role)       | [`option`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)     | [`block`](#block)                      |
| `menu`       | [Menu/Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) | [`menu`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)             | [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) | [`block`](#block), [`wrap`](#wrap_2)   |
| `menubar`    | [Menu/Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) | [`menubar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role)       | [`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) | [`inline`](#inline), [`wrap`](#wrap_2) |
| `radiogroup` | [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)    | [`radiogroup`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role) | [`radio`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)       | [`wrap`](#wrap_2)                      |
| `tablist`    | [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)            | [`tablist`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role)       | [`tab`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)           | [`inline`](#inline), [`wrap`](#wrap_2) |
| `toolbar`    | [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)      | [`toolbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role)       | None                                                                           | [`inline`](#inline)                    |

### Application of minimum roles

The minimum ARIA roles listed in the table above are applied only when the elements used for the focusgroup don't have semantics of their own (for example they are {{htmlelement("div")}} or {{htmlelement("span")}} elements) and no ARIA roles are explicitly supplied.

For example, in the following markup structure the applied `focusgroup` value of `toolbar` implicitly gives the parent `<div>` a role of `toolbar`. The {{htmlelement("button")}} elements, however, keep their default [`button`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) roles:

```html
<div focusgroup="toolbar" aria-label="Example toolbar">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
  <button>Four</button>
</div>
```

When using `focusgroup`, the browser will provide semantics via ARIA roles where there aren't any, but it won't override an element's intrinsic semantics. You should let the browser provide semantics automatically in cases where they are needed. In the following menu example, there are no intrinsic semantics available, so the `focusgroup` provides the parent element with a role of `menu`, and the focusable ancestors with `menuitem` roles:

```html
<div focusgroup="menu">
  <div tabindex="0">One</div>
  <div tabindex="0">Two</div>
  <div tabindex="0">Three</div>
  <div tabindex="0">Four</div>
</div>
```

However, in the following example, we have intrinsic [`list`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/list_role), [`listitem`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role), and [`link`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/link_role) roles, which `focusgroup` won't override. To keep our `menu`/`menuitem` role semantics, we have explicitly declared those roles:

```html
<ul focusgroup="menu" role="menu">
  <li role="none"><a href="/one" role="menuitem">One</a></li>
  <li role="none"><a href="/two" role="menuitem">Two</a></li>
  <li role="none"><a href="/three" role="menuitem">Three</a></li>
  <li role="none"><a href="/four" role="menuitem">Four</a></li>
</ul>
```

We've also set the {{htmlelement("li")}} elements to have a role of [`none`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/none_role), to avoid causing any confusion to AT users.

### Focus memory and initial focus

By default, when you first tab into a focusgroup, the focused item will be the first focusable descendant of the focusgroup parent in the source order. When you tab to a different control and then return to the focusgroup, the last focused descendant will be remembered. You can observe this behavior in the [basic example](#description:~:text=the%20following%20snippet%20is%20all%20that%27s%20required%20to%20create%20a%20single%20tabstop%20item%20that%20semantically%20behaves%20like%20a%20toolbar) seen earlier. This behavior can be modified in a couple of ways.

#### Losing memory

If you don't want the last focused descendant to be remembered, you can set the `nomemory` token inside the `focusgroup` attribute value:

```html live-sample___basic-focusgroup-nomemory
<div focusgroup="toolbar nomemory" aria-label="Example toolbar">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
  <button>Four</button>
</div>
```

This example renders like so. Try tabbing to it, moving the focus, and tabbing back to it again. You'll find that the focused item resets to the first descendant, regardless of which one you focused previously.

{{embedlivesample("basic-focusgroup-nomemory", "100%", 100)}}

#### Changing the initial focus

If you want the initial focus to be set on a different item, you can set the [`focusgroupstart`](/docs/Web/HTML/Reference/Global_attributes/focusgroupstart) attribute on the descendant element representing that item:

```html live-sample___basic-focusgroup-initialfocus
<div focusgroup="toolbar nomemory" aria-label="Example toolbar">
  <button>One</button>
  <button>Two</button>
  <button focusgroupstart>Three</button>
  <button>Four</button>
</div>
```

Like the previous one, this toolbar doesn't remember its previously-focused item when you return to it. However, due to the `focusgroupstart` attribute, the initial focus item is always the third button.

{{embedlivesample("basic-focusgroup-initialfocus", "100%", 100)}}

### Overriding axis and wrap behavior

As shown in [Focusgroup behaviors](#focusgroup_behaviors), most of the different `[behavior]` tokens implicitly set an [`[axis]`](#axis) token to specify what direction the focusable items of the resulting focusgroup can be scrolled in. In addition, some of them implicitly set a [`wrap`](#wrap_2) token to specify that movement between the items will wrap from one end of the segment back to the other end.

The [`toolbar`](#toolbar) behavior, for example, implicitly sets an `[axis]` value of `inline`, meaning that its items can be moved between using the inline direction cursor keys. It has no implied `wrap` token, which means that it defaults to `nowrap`, so by default its focus movement will not wrap.

It usually makes sense to stick with the implied defaults, however if you need to, you can override them by setting explicit tokens in the `focusgroup` attribute. The following example creates a toolbar whose items are moved between with the block direction cursor keys, and whose focus movement will wrap.

```html live-sample___basic-focusgroup-axis-wrap
<div focusgroup="toolbar wrap block" aria-label="Example toolbar">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
  <button>Four</button>
</div>
```

{{embedlivesample("basic-focusgroup-axis-wrap", "100%", 100)}}

### Nested focusgroups

An element can only participate in one focusgroup at a time. When a `focusgroup` definition is applied to an element, it implicitly opts out of any ancestor focusgroups. For example, in the following snippet we have three `focusgroup` menus defined; the second and third ones are nested inside the first one.

```html live-sample___nested-focusgroup
<div focusgroup="menu" aria-label="nested menu">
  <a href="#" role="menuitem">One</a>
  <div>
    <a href="#" role="menuitem">Two</a>
    <div focusgroup="menu">
      <a href="#" role="menuitem">Two point one</a>
      <a href="#" role="menuitem">Two point two</a>
    </div>
  </div>
  <div>
    <a href="#" role="menuitem">Three</a>
    <div focusgroup="menu">
      <a href="#" role="menuitem">Three point one</a>
      <a href="#" role="menuitem">Three point two</a>
      <a href="#" role="menuitem">Three point three</a>
    </div>
  </div>
  <a href="#" role="menuitem">Four</a>
</div>
```

The result is that:

- The first focusgroup contains the "One", "Two", "Three", and "Four" descendant links, but ignores the others because they are inside child focusgroups.
- The second focusgroup contains the "Two point one" and "Two point two" links.
- The third focusgroup contains the "Three point one", "Three point two" and "Three point three" links.

Each focusgroup is tabbed to separately, and then moved through separately via the block direction cursor keys.

```css hidden live-sample___nested-focusgroup
a {
  display: block;
  margin-bottom: 5px;
  width: fit-content;
}

div > div[focusgroup] {
  margin-left: 20px;
}
```

{{embedlivesample("nested-focusgroup", "100%", 220)}}

#### Opting out of a focusgroup

If you want certain items inside a focusgroup container to not take part in the group, you can set `focusgroup="none"` on them. For example:

```html live-sample___focusgroup-opt-out
<div focusgroup="toolbar nomemory" aria-label="Example toolbar">
  <button>One</button>
  <button focusgroupstart>Two</button>
  <span focusgroup="none">
    <button>Three</button>
    <button>Four</button>
  </span>
  <button>Five</button>
  <button focusgroupstart>Six</button>
</div>
```

The focusgroup is split into two segments — "One" and "Two", and "Five" and "Six". When the focusgroup is tabbed to, these items can be all moved between using the cursor keys as one group. However, the segments can be tabbed to separately, and both have their own `focusgroupstart`. The "Three" and "Four" items are tabbed to separately, and exist outside of the focusgroup.

```css hidden live-sample___focusgroup-opt-out
span {
  display: inline-block;
  border: 2px solid black;
  border-radius: 3px;
  padding: 6px;
  margin: 0 2px;
}
```

{{embedlivesample("focusgroup-opt-out", "100%", 100)}}

### Top-layer elements and focusgroups

{{glossary("Top layer")}} elements (such as [popovers](/en-US/docs/Web/API/Popover_API) and modal {{htmlelement("dialog")}} elements) can be set as focusgroups. However, if a subset of focusable items inside a focusgroup is promoted to the top layer (for example by showing a popover), those items cease to participate in the focus group, as if `focusgroup="none"` were set on them. Once the items leave the top layer again, they participate in the focusgroup normally. This behavior is designed to avoid any confusion that may be caused by some items in the focusgroup suddenly being rendered in a totally different place on the screen from the others.

In the following focusgroup example, the "Text color" button shows the popover containing the "Red", "Green", and "Blue" buttons. The color buttons are inside the focusgroup, but never participate in it — either they are hidden, or they are in the top layer, in which case they are excluded from the focusgroup and tabbed to separately. Once focused, the focusgroup only ever allows the "Text color", "Bold", "Italic", and "Underline" buttons to be moved between using the cursor keys.

```html live-sample___focusgroup-top-layer
<div focusgroup="toolbar wrap" aria-label="Text formatting">
  <button type="button" commandfor="color-picker" command="show-popover">
    Text color
  </button>
  <button type="button">Bold</button>
  <button type="button">Italic</button>
  <div id="color-picker" popover>
    <button type="button">Red</button>
    <button type="button">Green</button>
    <button type="button">Blue</button>
  </div>
  <button type="button">Underline</button>
</div>
```

{{embedlivesample("focusgroup-top-layer", "100%", 100)}}

> [!NOTE]
> To move through the color choices using the cursor keys, you could set an explicit `focusgroup` attribute on the popover to make it into its own separate focusgroup, for example `focusgroup="toolbar"`.

### Feature detecting focusgroup

The `focusgroup` and `focusgroupstart` attribute values are exposed to JavaScript via the {{domxref("HTMLElement.focusGroup")}} and {{domxref("HTMLElement.focusGroupStart")}} DOM properties. Among other things, these can be used to feature detect focusgroups. For example:

```js
const focusgroupElem = document.querySelector("[focusgroup]");
if (!focusgroupElem.focusGroup) {
  console.log("Focusgroup not supported!");
}
```

You can see this code in action in our examples, next.

## Examples

You can also find a comprehensive set of demos at [Focusgroup: Interactive Demos](https://microsoftedge.github.io/Demos/focusgroup/index.html).

### Basic usage

This example shows how to use `focusgroup` to create a basic toolbar widget.

#### HTML

We include a list created using one {{htmlelement("ul")}} and several {{htmlelement("li")}} elements. The `<ul>` has been given an appropriate `role` of `toolbar` for the whole widget, while the `<li>` elements have been given a `role` of `none` because their intrinsic role is not suitable for the widget.

```html
<ul role="toolbar" focusgroup="toolbar">
  <li role="none"><button>One</button></li>
  <li role="none"><button>Two</button></li>
  <li role="none"><button>Three</button></li>
  <li role="none"><button>Four</button></li>
</ul>
```

The HTML also includes some filler text above and below the toolbar to cause the container to scroll, so we can demonstrate how the toolbar behaves alongside other content, and in a scrollport. We've hidden the filler text for brevity.

```html hidden live-sample___basic-usage-toolbar
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  <a href="#">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<ul role="toolbar" focusgroup="toolbar">
  <li role="none"><button>One</button></li>
  <li role="none"><button>Two</button></li>
  <li role="none"><button>Three</button></li>
  <li role="none"><button>Four</button></li>
</ul>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  <a href="#">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

#### CSS

We've laid the list out as a horizontal toolbar using [flexbox](/en-US/docs/Web/CSS/Guides/Flexible_box_layout):

```css live-sample___basic-usage-toolbar
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
}

li {
  flex: 1;
}
```

We've also given the buttons and filler text some rudimentary styling, but again, we've hidden it for brevity.

```css hidden live-sample___basic-usage-toolbar
body {
  margin: 20px auto;
  width: max(400px, 50%);
}

p {
  line-height: 1.5;
}

button {
  width: 100%;
  letter-spacing: 1px;
  border: 1px solid transparent;
  padding: 8px 0;
  background: #e52d27;
  color: white;
  border-radius: 6px;
  outline: none;
}

button:hover,
button:focus {
  color: #e52d27;
  border-color: #e52d27;
  background: white;
}
```

#### JavaScript

In our script, we grab a reference to the `focusgroup` container and test whether its {{domxref("HTMLElement.focusGroup")}} property exists. If not, we set a class on the `<body>` element that causes a "not supported" banner to render.

```js live-sample___basic-usage-toolbar
const focusgroupElem = document.querySelector("[focusgroup]");
if (!focusgroupElem.focusGroup) {
  document.body.className = "no-focusgroup";
}
```

#### Result

{{embedlivesample("basic-usage-toolbar", "100%", 250)}}

Tab to the toolbar, and note how the focusgroup item focus can then be moved using the inline direction cursor keys. Note also how the block direction cursor keys can be used to scroll the page content.

### Vertical popover menu

This example shows how to add `focusgroup` functionality to a vertical popover menu.

#### HTML

The markup is very similar to the previous example. This time, we create a menu by setting `focusgroup` on a {{htmlelement("div")}} with nested {{htmlelement("button")}} elements. We also set an `id` and a [`popover`](/en-US/docs/Web/HTML/Reference/Global_attributes/popover) attribute on the `<div>` to turn it into a popover and hide it by default. Finally, we include another `<button>` with a [`popovertarget`](/en-US/docs/Web/HTML/Reference/Elements/button#popovertarget) attribute set to the `<div>` element's `id`, which means that clicking this button will toggle the popover betwen hidden and shown states.

```html
<p><button popovertarget="mypopover">Toggle menu</button></p>
<div popover id="mypopover" focusgroup="menu">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
  <button>Four</button>
</div>
```

```html hidden live-sample___vertical-menu
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  <a href="#">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
<p><button popovertarget="mypopover">Toggle menu</button></p>
<div popover id="mypopover" focusgroup="menu">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
  <button>Four</button>
</div>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  <a href="#">Duis aute irure dolor</a> in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
```

#### CSS

We give the `<div>` some rudimentary styling. Most significantly, we position it at the bottom of the popover toggle `<button>` using the {{cssxref("position-area")}} property. This is possible because popovers and their control buttons are given an [implicit anchor reference](/en-US/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

```css live-sample___vertical-menu
div {
  width: 130px;
  background: #111827;
  padding: 8px 0;
  border-radius: 8px;
  border: 1px solid #374151;

  position-area: bottom span-right;
  margin-top: 10px;
}
```

We've also given the focusgroup buttons and filler text some rudimentary styling, but again, we've hidden it for brevity.

```css hidden live-sample___vertical-menu
body {
  margin: 20px auto;
  width: max(400px, 50%);
}

div {
  width: 130px;
  background: #111827;
  padding: 8px 0;
  border-radius: 8px;
  border: 1px solid #374151;

  position-area: bottom span-right;
  margin-top: 10px;
}

p {
  line-height: 1.5;
}

div > button {
  width: 100%;
  letter-spacing: 1px;
  padding: 8px 0;
  background: #111827;
  color: white;
  outline: none;
  border: 0;
}

div > button:hover,
div > button:focus {
  background: #374151;
}
```

```css hidden live-sample___basic-usage-toolbar
body.no-focusgroup::before {
  font-family: sans-serif;
  content: "Your browser does not support focusgroup.";
  background-color: wheat;
  text-align: center;
  padding: 1rem 0;

  z-index: 1;
  position: fixed;
  inset: 40% 0 auto;
}
```

#### JavaScript

We implement the same feature detection as shown in the previous example, except that this time, we include a bit more code. If `focusgroup` is supported, we define a function that hides the popover using {{domxref("HTMLElement.hidePopover()")}} and then add event listeners so that it is invoked if the popover is clicked or <kbd>Tab</kbd> is pressed when the popover is focused.

```js live-sample___vertical-menu
const focusgroupElem = document.querySelector("[focusgroup]");
const popover = document.querySelector("[popover]");

if (!focusgroupElem.focusGroup) {
  document.body.className = "no-focusgroup";
} else {
  function hidePopover() {
    popover.hidePopover();
  }

  popover.addEventListener("click", hidePopover);
  popover.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      hidePopover();
    }
  });
}
```

#### Result

{{embedlivesample("vertical-menu", "100%", 250)}}

Activate the button to show the popover. Now tab to the menu and note how the focusgroup item focus can then be moved using the block direction cursor keys. Note also how the popover closes when an option is selected or the menu is tabbed away from, due to our JavaScript. We wanted to experiment with making the popover hide a bit more naturally.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`focusgroupstart`](/docs/Web/HTML/Reference/Global_attributes/focusgroupstart) attribute
- {{domxref("HTMLElement.focusGroup")}}
- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)
