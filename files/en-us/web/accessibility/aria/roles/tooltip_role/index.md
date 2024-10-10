---
title: "ARIA: tooltip role"
slug: Web/Accessibility/ARIA/Roles/tooltip_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#tooltip
---

{{AccessibilitySidebar}}

A `tooltip` is a contextual text bubble that displays a description for an element that appears on pointer hover or keyboard focus.

## Description

Tooltips provide contextual information about an element when that owning element receives focus or is hovered over, but is otherwise not visible on the page. The tooltip is displayed automatically, after a brief delay; the user does not request it. While a tooltip can be placed on any content, they generally are tips for tools or controls, such as providing additional content for icons that have brief labels (or no labels at all, which is not accessible!).

A tooltip typically becomes visible, after a short delay of generally one to five seconds, in response to a mouse hover, or after the owning element receives keyboard focus. Just as it is opened automatically, without user request, it is closed automatically when the focus is lost or on mouse out. It must stay open when the mouse moves over the tooltip itself, and should also close when the user presses the <kbd>Escape</kbd> key.

Because the tooltip itself never receives focus and is not in the tabbing order, a tooltip can not contain interactive elements like links, inputs, or buttons.

The tooltip is not the appropriate role for the more information "i" icon, ⓘ. A tooltip is directly associated with the owning element. The ⓘ isn't 'described by' detailed information; the tool or control is.

The use of the ARIA `tooltip` role is a supplement to the normal browser tooltip behavior. An example of a native browser tooltip is the way some browsers display an element's [`title` attribute](/en-US/docs/Web/HTML/Global_attributes/title) on long mouse hover. One cannot activate this feature through either keyboard focus or through touch interaction, making this feature inaccessible. If the information is important enough to include as a tooltip or title, consider including it in visible text.

Elements with the `tooltip` role should be referenced through the use of [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) before or when the tooltip is displayed. The `aria-describedby` attribute is on the owning element, not on the tooltip.

The tooltip is not considered a popup in terms of the [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) property on the owning element, which is why we used "text bubble" in the introductory definition.

Though a tooltip may appear and disappear, as its appearance is automatic and not intentionally controlled by the user, the [`aria-expanded`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) role is not supported.

The accessible name of a tooltip can come from the contents. While, in theory, they could come from an [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), in most cases, using ARIA properties to provide a tooltip with an accessible name is not recommended.

Tooltips provide additional information, generally with no direct interaction on the tooltip itself. They are generally associated with the content they're defining via an [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) with the `id` of the primary element. Therefore, if the tooltip has an accessible name explicitly set, that name is exposed as the primary element's description rather than the contents of the tooltip, meaning the tooltip contents may never be discovered by a screen reader user.

### Associated WAI-ARIA roles, states, and properties

- The element that serves as the tooltip container has `role="tooltip"` set.
- The element that triggers the tooltip references the tooltip element with [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

### Keyboard interactions

- <kbd>Escape</kbd>
  - : Closes the tooltip

The tooltip should appear on focus or when the element is hovered on, without additional interaction. It should disappear automatically when the focus on the owning element is lost or the mouse is moved outside the owning element and the tooltip. While the tooltip does not receive focus, the <kbd>Escape</kbd> should close it if it is open.

### Required JavaScript features

- The tooltip is displayed and disappears via keyboard focus and removal of focus and by the mouse events - mousing over and mousing out.

- The tooltip never receives focus. Focus stays on the owning element.

- The tooltip can be hidden with the <kbd>Escape</kbd> key

- The tooltip stays open when hovered

- The tooltip is only hidden via JavaScript and CSS selectors. If JavaScript is not available the tooltip is shown.

## Examples

```html
<label for="password">Password:</label>
<input aria-describedby="passwordrules" id="password" type="password" />
<div role="tooltip" id="passwordrules">
  <p>Password Rules:</p>
  <ul>
    <li>Minimum of 8 characters</li>
    <li>
      Include at least one lowercase letter, one uppercase letter, one number
      and one special character
    </li>
    <li>Unique to this website</li>
  </ul>
</div>
```

The tooltip can be instantiated with CSS. Change the class name with JavaScript to a class that hides the tooltip if the user hits the <kbd>Escape</kbd> key.

```css
[role="tooltip"],
.hide-tooltip.hide-tooltip.hide-tooltip + [role="tooltip"] {
  visibility: hidden;
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: black;
  color: white;
}
[aria-describedby]:hover,
[aria-describedby]:focus {
  position: relative;
}
[aria-describedby]:hover + [role="tooltip"],
[aria-describedby]:focus + [role="tooltip"] {
  visibility: visible;
}
```

The above hides the tooltip with CSS in the default state or if the `hide-tooltip` class has been added with JavaScript (when the user hit <kbd>Escape</kbd>), with high specificity to ensure the tooltip doesn't show. When the owning element receives focus, it gets positioned relatively and the tooltip becomes visible.

## Accessibility concerns

If the information is important enough for a tooltip, isn't it important enough to always be visible?

The tooltip must stay open when hovered, even if that technically means the mouse moves out of the owning element. As content which appears on hover can be difficult or impossible to perceive if a user is required to keep their mouse pointer over the trigger, [WCAG 1.4.13](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) states that content made visible should be persistent, meaning it should not disappear without user action.

## Best Practices

Instead of using tooltips and hiding important information, consider writing clear, succinct, always visible descriptions. If you have space, don't use tooltips or toggletips. Just provide clear labels and sufficient body text.

## Specifications

{{Specifications}}

## See also

- [The `dialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
- [CSS: `:focus` pseudoclass](/en-US/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) by Heydon Pickering
- [Understanding SC 1.4.13:Content on Hover or Focus (WCAG Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/content-on-hover-or-focus.html)
