---
title: Keyboard-navigable JavaScript widgets
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
page-type: guide
---

{{AccessibilitySidebar}}

Web applications often use JavaScript to mimic desktop widgets such as menus, tree views, rich text fields, and tab panels. These widgets are typically composed of {{ HTMLElement("div") }} and {{ HTMLElement("span") }} elements that do not, by nature, offer the same keyboard functionality that their desktop counterparts do. This document describes techniques to make JavaScript widgets accessible with the keyboard.

## Using tabindex

By default, when people use the tab key to browse a webpage, only interactive elements (like links, form controls) get focused. With the `tabindex` [global attribute](/en-US/docs/Web/HTML/Global_attributes), authors can make other elements focusable, too. When set to `0`, the element becomes focusable by keyboard and script. When set to `-1`, the element becomes focusable by script, but it does not become part of the keyboard focus order.

The order in which elements gain focus when using a keyboard, is the source order by default. In exceptional circumstances, authors may want to redefine the order. To do this, authors can set `tabindex` to any positive number.

> [!WARNING]
> Avoid using positive values for `tabindex`. Elements with a positive `tabindex` are put before the default interactive elements on the page, which means page authors will have to set (and maintain) `tabindex` values for all focusable elements on the page whenever they use one or more positive values for `tabindex`.

The following table describes `tabindex` behavior in modern browsers:

<table>
  <thead>
    <tr>
      <th><code>tabindex</code> attribute</th>
      <th>Focusable with mouse or JavaScript via <code>element.focus()</code></th>
      <th>Tab navigable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>not present</td>
      <td>Follows the platform convention of the element (yes for form controls, links, etc.).</td>
      <td>Follows the platform convention of the element.</td>
    </tr>
    <tr>
      <td>Negative (i.e. <code>tabindex="-1"</code>)</td>
      <td>Yes</td>
      <td>No; author must focus the element with <a href="/en-US/docs/Web/API/HTMLElement/focus"><code>focus()</code></a> in response to arrow or other key presses.</td>
    </tr>
    <tr>
      <td>Zero (i.e. <code>tabindex="0"</code>)</td>
      <td>Yes</td>
      <td>In tab order relative to element's position in document (note that interactive elements like {{HTMLElement('a')}} have this behavior by default, they don't need the attribute).</td>
    </tr>
    <tr>
      <td>Positive (e.g. <code>tabindex="33"</code>)</td>
      <td>Yes</td>
      <td><code>tabindex</code> value determines where this element is positioned in the tab order: smaller values will position elements earlier in the tab order than larger values (for example, <code>tabindex="7"</code> will be positioned before <code>tabindex="11"</code>).</td>
    </tr>
  </tbody>
</table>

### Non-native controls

Native HTML elements that are interactive, like {{ HTMLElement("a") }}, {{ HTMLElement("input") }} and {{ HTMLElement("select") }}, are already accessible by keyboards, so to use one of them is the fastest path to make components work with keyboards.

Authors can also make a {{ HTMLElement("div") }} or {{ HTMLElement("span") }} keyboard accessible by adding a `tabindex` of `0`. This is particularly useful for components that use interactive elements that do not exist in HTML.

### Grouping controls

For grouping widgets such as menus, tablists, grids, or tree views, the parent element should be in the tab order (`tabindex="0"`), and each descendant choice/tab/cell/row should be removed from the tab order (`tabindex="-1"`). Users should be able to navigate the descendant elements using arrow keys. (For a full description of the keyboard support that is normally expected for typical widgets, see the [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/).)

The example below shows this technique used with a nested menu control. Once keyboard focus lands on the containing {{ HTMLElement("ul") }} element, the JavaScript developer must programmatically manage focus and respond to arrow keys. For techniques for managing focus within widgets, see "Managing focus inside groups" below.

```html
<ul id="mb1" tabindex="0">
  <li id="mb1_menu1" tabindex="-1">
    Font
    <ul id="fontMenu" title="Font" tabindex="-1">
      <li id="sans-serif" tabindex="-1">Sans-serif</li>
      <li id="serif" tabindex="-1">Serif</li>
      <li id="monospace" tabindex="-1">Monospace</li>
      <li id="fantasy" tabindex="-1">Fantasy</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabindex="-1">
    Style
    <ul id="styleMenu" title="Style" tabindex="-1">
      <li id="italic" tabindex="-1">Italics</li>
      <li id="bold" tabindex="-1">Bold</li>
      <li id="underline" tabindex="-1">Underlined</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabindex="-1">
    Justification
    <ul id="justificationMenu" title="Justification" tabindex="-1">
      <li id="left" tabindex="-1">Left</li>
      <li id="center" tabindex="-1">Centered</li>
      <li id="right" tabindex="-1">Right</li>
      <li id="justify" tabindex="-1">Justify</li>
    </ul>
  </li>
</ul>
```

#### Disabled controls

When a custom control becomes disabled, remove it from the tab order by setting `tabindex="-1"`. Note that disabled items within a grouped widget (such as menu items in a menu) should remain navigable using arrow keys.

## Managing focus inside groups

When a user tabs away from a widget and returns, focus should return to the specific element that had focus, for example, the tree item or grid cell. There are two techniques for accomplishing this:

1. Roving `tabindex`: programmatically moving focus
2. `aria-activedescendant`: managing a 'virtual' focus

### Technique 1: Roving tabindex

Setting the `tabindex` of the focused element to "0" ensures that if the user tabs away from the widget and then returns, the selected item within the group retains focus. Note that updating the `tabindex` to "0" requires also updating the previously selected item to `tabindex="-1"`. This technique involves programmatically moving focus in response to key events and updating the `tabindex` to reflect the currently focused item. To do this:

Bind a key down handler to each element in the group, and when an arrow key is used to move to another element:

1. programmatically apply focus to the new element,
2. update the `tabindex` of the focused element to "0", and
3. update the `tabindex` of the previously focused element to "-1".

Here's an example of a [WAI-ARIA tree view](https://files.paciellogroup.com/training/WWW2012/samples/Samples/aria/tree/index.html) using this technique.

### Technique 2: `aria-activedescendant`

This technique involves binding a single event handler to the container widget and using the `aria-activedescendant` to track a "virtual" focus. (For more information about ARIA, see this [overview of accessible web applications and widgets](/en-US/docs/Web/Accessibility/An_overview_of_accessible_web_applications_and_widgets).)

The `aria-activedescendant` property identifies the ID of the descendant element that currently has the virtual focus. The event handler on the container must respond to key and mouse events by updating the value of `aria-activedescendant` and ensuring that the current item is styled appropriately (for example, with a border or background color).

## General guidelines

### Usage of focus events

- Do not dispatch the [`focus`](/en-US/docs/Web/API/Element/focus_event) event to send focus to an element. DOM focus events are considered informational only: they are generated by the system after something is focused, but not actually used to set focus. Use `element.focus()` instead.
- Do listen for the [`focus`](/en-US/docs/Web/API/Element/focus_event) and [`blur`](/en-US/docs/Web/API/Element/blur_event) events to track focus changes. Don't assume that all focus changes will come via key and mouse events: assistive technologies such as screen readers can set the focus to any focusable element. If you want to track the focus status for the whole document, you can use the [`document.activeElement`](/en-US/docs/Web/API/Document/activeElement) to get the active element, or [`document.hasFocus`](/en-US/docs/Web/API/Document/hasFocus) to make sure if the current document has focus.

### Ensure that keyboard and mouse produce the same experience

To ensure that the user experience is consistent regardless of input device, keyboard and mouse event handlers should share code where appropriate. For example, the code that updates the `tabindex` or the styling when users navigate using the arrow keys should also be used by mouse click handlers to produce the same changes.

### Ensure that the keyboard can be used to activate element

To ensure that the keyboard can be used to activate elements, any handlers bound to mouse events should also be bound to keyboard events. For example, to ensure that the Enter key will activate an element, if you have an `onclick="doSomething()"`, you should bind `doSomething()` to the key down event as well: `onkeydown="event.code === "Enter" && doSomething();"`.

### Always draw the focus for tabindex="-1" items and elements that receive focus programmatically

Ensure that focused elements have a focus ring. This can be done using the CSS {{cssxref("outline")}} property, which should not be unconditionally set to `none`—if you want to prevent unnecessary focus rings being displayed, use the {{cssxref(":focus-visible")}} pseudo-class.

### Prevent used key events from performing browser functions

If your widget handles a key event, prevent the browser from also handling it (for example, scrolling in response to the arrow keys) by using your event handler's return code. If your event handler returns `false`, the event will not be propagated beyond your handler.

For example:

```html
<span tabindex="-1" onkeydown="return handleKeyDown();">…</span>
```

If `handleKeyDown()` returns `false`, the event will be consumed, preventing the browser from performing any action based on the keystroke.

### Don't rely on consistent behavior for key repeat, at this point

Unfortunately `onkeydown` may or may not repeat depending on what browser and OS you're running on.
