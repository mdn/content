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

The **`focusgroup`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) declaratively implements an accessible "roving tabindex" keyboard navigation pattern on an element and its focusable descendants, which includes creating a tab stop on the parent, arrow key navigation on the descendants, and remembering the last focused element in the group.

## Values

One or more space-separated tokens that define the behavior of the created focusgroup, or the value `none`. The syntax is as follows:

```html
focusgroup="[behavior] [axis] [wrap] nomemory | none"
```

The tokens are as follows:

- `[behavior]`
  - : Specifies the specific focusgroup behavior to create. Possible values include:
    - `listbox`
      - : Specifies vertical listbox semantics, with `block` arrow navigation.
    - `menu`
      - : Specifies vertical menu semantics, with `block` arrow navigation and `wrap` behavior.
    - `menubar`
      - : Specifies horizontal menubar semantics, with `inline` arrow navigation and `wrap` behavior.
    - `radiogroup`
      - : Specifies radio button group semantics, with `wrap` behavior.
    - `tablist`
      - : Specifies horizontal tablist semantics, with `inline` arrow navigation and `wrap` behavior.
    - `toolbar`
      - : Specifies horizontal toolbar semantics, with `inline` arrow navigation.
- `[axis]` {{optional_inline}}
  - : Specifies a logical axis to restrict arrow navigation to. Possible values include:
    - `block`
      - : Arrow navigation is restricted to the block direction.
    - `inline`
      - : Arrow navigation is restricted to the inline direction.

    The specified `[behavior]` always implies an `[axis]` value, so if omitted, the value will default to the implied value. See [Focusgroup behaviors](#focusgroup_behaviors). It is possible to set both values to allow arrow navigation on both axes.
- `[wrap]` {{optional_inline}}
  - : Specifies the wrapping behavior of the arrow navigation. Possible values include:
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

The "roving tabindex" keyboard navigation pattern is very common on the web — this combines sequential navigation between control groups with directional navigation within each group. Related sets of controls are grouped together and can be tabbed between as single items. Once focused, you can move between the individual items in a group using the arrow keys, and select an item using the <kbd>Enter</kbd>/<kbd>Return</kbd> key or the spacebar.

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

```css hidden live-sample___basic-focusgroup live-sample___basic-focusgroup-nomemory live-sample___basic-focusgroup-initialfocus live-sample___basic-focusgroup-axis-wrap
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

This implementation follows the ARIA authoring practices guide (APG) [toolbar pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) for its implementation (see the [Focusgroup behaviors](#focusgroup_behaviors) for details of all the available behaviors). This includes the following:

- The {{htmlelement("div")}} parent container can be selected as a single group via the <kbd>Tab</kbd> key.
- Once the parent is selected, focus can be moved between the descendant {{htmlelement("button")}} items via the horizontal cursor keys. The vertical cursor keys will scroll the page.
- You can focus the first item via the <kbd>Home</kbd> key, and the last item via the <kbd>End</kbd> key.
- When the toolbar is first selected, the first item will be focused. When the toolbar is deselected and subsequently selected again, focus is restored to the item that was previously focused.
- The parent container is given an ARIA [`role`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) of [`toolbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) so that it makes sense to screenreaders and other assistive technologies.

In addition:

- Any items that are [`disabled`](/en-US/docs/Web/HTML/Reference/Attributes/disabled) or hidden (for example using {{cssxref("visibility")}}) are skipped over when the items are moved between.
- The roving index is updated when new items are inserted into the DOM dynamically.
- Text {{cssxref("direction")}} and {{cssxref("writing-mode")}} is respected. For example, if a vertical writing mode is set, causing the toolbar to render vertically, the vertical cursor keys will shift focus between items instead.
- The {{cssxref("flex-direction")}} and {{cssxref("reading-flow")}} are respected. For example, if the toolbar is laid out using flexbox, and `flex-direction` is set to `row-reverse`, the last item will initially be focused, and the right cursor key will move focus to the left. If `reading-flow` is then set to `flex-visual`, the first item will initially be focused, and the right cursor key will move focus to the right.

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

By default, when you first tab into a focusgroup, the focused item will be the first focusable descendant of the focusgroup parent in the source order. When you tab to a different control and then return to the focusgroup, the last focused descendant will be remembered. You can observer this behavior in the [basic example](#description:~:text=the%20following%20snippet%20is%20all%20that%27s%20required%20to%20create%20a%20single%20tabstop%20item%20that%20semantically%20behaves%20like%20a%20toolbar) seen earlier. This behavior can be modified in a couple of ways.

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

In the [Focusgroup behaviors](#focusgroup_behaviors) section, you learned that the different `[behavior]` tokens implicitly set an [`[axis]`](#axis) token to specify what direction the focusable items of the resulting focusgroup can be scrolled in. In addition, some of them implicitly set a [`wrap`](#wrap_2) token to specify that movement between the items will wrap from one end of the sequence back to the other end.

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

GOT HERE

#### Opting out of a focusgroup

### Top-layer elements and focusgroups

https://open-ui.org/components/scoped-focusgroup.explainer/#top-layer-elements ?

## Accessibility

Screen reader users navigate by headings and rely on heading levels to understand how a page is structured. Use `headingoffset` to make those levels match the visual structure of the page, and check the result with a screen reader or the browser's accessibility inspector.

In browsers that do not support this attribute, headings keep the level of their element name, so the markup must still make sense without the offset.

## Examples

### Offsetting headings in a component

In this example, the markup uses the same component structure twice – an `<article>` with an `<h1>` title. The second one is nested in a `<section>` that offsets its headings by one level.

```html
<h1>Insect guide</h1>

<article>
  <h1>Beetles</h1>
  <p>A beetle has a hardened forewing.</p>
</article>

<section headingoffset="1">
  <h1>Appendix</h1>
  <article>
    <h1>Beetles, revisited</h1>
    <p>The same component, one level deeper.</p>
  </article>
</section>
```

The computed heading levels are:

- `Insect guide`: level 1
- `Beetles`: level 1
- `Appendix`: level 2
- `Beetles, revisited`: level 2

### Accumulating offsets

Offsets from nested elements are added together, so this `<h2>` has a computed heading level of 5:

```html
<article headingoffset="1">
  <section headingoffset="2">
    <h2>Level 5</h2>
  </section>
</article>
```

### Stopping the offset

An element with the [`headingreset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingreset) attribute stops the offsets of its ancestors from applying to its descendants. This is useful for content that is not part of the surrounding document structure, such as a dialog:

```html
<section headingoffset="2">
  <h1>Level 3</h1>

  <dialog headingreset>
    <h1>Level 1</h1>
  </dialog>
</section>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`headingreset`](/en-US/docs/Web/HTML/Reference/Global_attributes/headingreset) global attribute
- [`<h1>`–`<h6>`](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) elements
- [`aria-level`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) attribute
- [ARIA: heading role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
