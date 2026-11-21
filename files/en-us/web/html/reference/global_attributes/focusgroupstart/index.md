---
title: "`focusgroupstart` HTML global attribute"
short-title: focusgroupstart
slug: Web/HTML/Reference/Global_attributes/focusgroupstart
page-type: html-attribute
status:
  - experimental
browser-compat: html.global_attributes.focusgroupstart
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`focusgroupstart`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) marks the first item to receive focus on entering a [`focusgroup`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup), when set on a focusable descendant of the group.

## Values

The `focusgroupstart` attribute is a boolean attribute: its presence sets the first element to receive focus inside a focusgroup.

## Description

When the [`focusgroup`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup) attribute is used to create a widget with a "roving tabindex" keyboard navigation pattern, the widget can be tabbed to as a single entity, after which you can move focus between the individual items inside the widget using the cursor keys. By default, when the widget is tabbed to, the first focusable descendant of the parent `focusgroup` element receives focus.

The `focusgroupstart` attribute can be set on a different focusable descendant to cause that element to receive the initial focus instead.

Each contiguous run of focusgroup items is called a **focusgroup segment**, and each segment can have one `focusgroupstart` attribute set. Usually, each focusgroup has one segment, but sometimes a focusgroup will have multiple segments, for example when [opting items out of a focusgroup](#opting_out_of_a_focusgroup) using `focusgroup="none"`.

## Examples

### Basic usage

This example shows how to create a basic toolbar widget using `focusgroup`, and change its initial focus item using `focusgroupstart`.

#### HTML

We include a {{htmlelement("div")}} with several nested {{htmlelement("button")}} elements. The `<div>` has been given a `focusgroup` value of `toolbar` to specify toolbar behavior, while the fourth `<button>` element has `focusgroupstart` set on it so that it receives initial focus when the focusgroup is tabbed to.

```html live-sample___basic-usage
<div focusgroup="toolbar" aria-label="Example toolbar">
  <button>One</button>
  <button>Two</button>
  <button>Three</button>
  <button focusgroupstart>Four</button>
  <button>Five</button>
</div>
```

```css hidden live-sample___basic-usage live-sample___focusgroup-opt-out
html,
body {
  height: 100%;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### Result

{{embedlivesample("basic-usage", "100%", 100)}}

Tab to the toolbar, and note how the first item focused is the fourth button.

> [!NOTE]
> If you tab to the focusgroup and use the cursor keys to change the focused item, the next time you tab to it, the fourth item will not be focused. This is because focusgroups remember their last-focused item by default. You can turn this behavior off by setting the [`nomemory`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup#nomemory) token inside the `focusgroup` attribute, as seen in the next example.

### Opting out of a focusgroup

In this example we show how to opt some focusable descendants out of a focusgroup using a child focusgroup with `focusgroup="none"` set on it. This creates a focusgroup with multiple segments, each of which can be given their own `focusgroupstart`.

#### HTML

This example is similar to the last — a `<div>` element with `focusgroup="toolbar"` set on it. This time however we've got six child `<button>` elements, and the middle two are wrapped in a {{htmlelement("span")}} element with `focusgroup="none"` set on it, which opts the middle items out of the parent focusgroup. We've also set a `focusgroupstart` attribute on the second and sixth items, and set the `nomemory` token inside the `<div>` element's `focusgroup` attribute, to stop the previously-focused position being remembered on subsequent focuses.

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

```css hidden live-sample___focusgroup-opt-out
span {
  display: inline-block;
  border: 2px solid black;
  border-radius: 3px;
  padding: 6px;
  margin: 0 2px;
}
```

```css hidden live-sample___basic-usage live-sample___focusgroup-opt-out
body.no-focusgroup::before {
  font-family: sans-serif;
  content: "Your browser does not support focusgroup/focusgroupstart.";
  background-color: wheat;
  text-align: center;
  padding: 1rem 0;

  z-index: 1;
  position: fixed;
  inset: 30% 0 auto;
}
```

```js hidden live-sample___basic-usage live-sample___focusgroup-opt-out
const focusgroupElem = document.querySelector("[focusgroup]");
if (!focusgroupElem.focusGroup) {
  document.body.className = "no-focusgroup";
}
```

#### Result

{{embedlivesample("focusgroup-opt-out", "100%", 100)}}

The focusgroup is split into two segments — "One" and "Two", and "Five" and "Six". When the focusgroup is tabbed to, these items can be all moved between using the cursor keys as one group. However, the segments can be tabbed to separately, and both have their own `focusgroupstart`. The "Three" and "Four" items are tabbed to separately, and exist outside of the focusgroup.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`focusgroup`](/docs/Web/HTML/Reference/Global_attributes/focusgroup) attribute
- {{domxref("HTMLElement.focusGroupStart")}}
- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)
