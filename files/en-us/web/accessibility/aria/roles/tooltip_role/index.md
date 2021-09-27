---
title: 'ARIA: tooltip role'
slug: Web/Accessibility/ARIA/roles/tooltip_role
tags: 

  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - document structure role
  - Tooltip role
---

A `tooltip` is a contextual text bubble that displays a description for an element that appears on pointer hover or keyboard focus.

## Description

Tooltips provide contextual information about an element when that owning element receives focus or is hovered over, but is otherwise not visible on the page. The tool tip is displayed automatically, after a brief delay; the user does not request it. While a tooltip can be placed on any content, they generally are tips for tools or controls, such as providing additional content for icons that have brief labels (or no labels at all, which is not accessible!).

A tooltip typically becomes visible, after a short delay of generally one to five seconds, in response to a mouse hover, or after the owning element receives keyboard focus. Just at it is opened automatically, without user request, it is closed automatically when focus is lost or on mouse out. It should also close when the user presses the <kbd>Escape</kbd> key. 

Because the tooltip itself never receives focus and is not in the tabbing order, a tooltip can not contain interactive elements like links, inputs, or buttons.

The tooltip is not the appropriate role for the more information "i" icon, ⓘ. A tooltip is directly associated with the owning element. The ⓘ isn't 'described by' detailed information; the tool or control is.


The use of the ARIA  `tooltip` role is a supplement to the normal browser tooltip behavior. An example of a native browser tooltip is the way some browsers display an element's [`title` attribute](/en-US/docs/Web/HTML/Global_attributes/title) on focus or long mouse hover. This feature doesn't exist on touch devices and is therefor not accessible. If the information is important enough to include as a tool tip or title, consider including it in visible text.

Elements with the `tooltip` role should be referenced through the use of `aria-describedby` before or when the tooltip is displayed. The `aria-describedy` attribute is on the owning element, not on the tooltip.

The tooltip is not considered a popup in terms of the the `aria-haspopup` property on the owning element, which is why we used "text bubble" in the introductory definition. 

Though a tooltip may appear and disapper, as it this appearance is automatic and not intentionally controlled by the user, the `aria-expanded` role is not supported. 

The accessible name of a tooltip can come from the contents, or from an `aria-lable` or `aria-labelledby`.

### Associated WAI-ARIA roles, states, and properties

* The element that serves as the tooltip container has `role="tooltip"` set.
* The element that triggers the tooltip references the tooltip element with `aria-describedby`.
  
### Keyboard interactions

- <kbd>Escape</kbd> 
  - : Closes the tooltip


The tooltip should appear on focus or when the element is hovered, without keyboard action. It should disappear automatically when focus on the owning element is lost or the mouse is moved. While the tooltip does not receive focus, the <kbd>Escape</kbd> should close it if it is open.

### Required JavaScript features

- The tooltip is displayed and disappears via keyboard focus and removal of focus and by the mouse events - mousing over and mousing out.

- The tooltip never receives focus. Focus stays on the owning element.

- The tooltip can be hidden with the <kbd>Escape</kbd> key

- The tooltip is only hidden via JavaScript and CSS selectors. If JavaScript is not available the tooltip is shown.


## Examples

```html
<label for="password">Password:</label>
<input aria-describedby="passwordrules" id="password" type="password" />
<div hidden role="tooltip" id="passwordrules">
  <p>
      Password Rules:
  </p>
  <ul>
    <li> Minimum of 8 characters</li>
    <li> Include at least one lowercase letter, one uppercase letter, one number and one special character</li>
    <li>Unique to this website</li>
  </ul>
</div>

````
The tooltip can be instantiated with CSS. Change the class name with JavaScript to a class that hides the tooltip if the user hits the <kbd>Escape</kbd> key.

````css
[role=tooltip],
.hidetooltip.hidetooltip.hidetooltip + [role=tooltip] {
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
[aria-describedby]:hover + [role=tooltip],
[aria-describedby]:focus + [role=tooltip] {
 visibility: visible;
}
````
The above hides the tooltip with CSS in the default state or if the hidetooltip class has been added with JavaScript (when the user hit <kbd>Escape</kbd>), with high specifity to ensure the tool tip doesn't show. When the owning element receives focus, it gets positioned relatively and the tooltip becomes visible.



## Accessibility Concerns

If the information is important enough for a tooltip, isn't it important enough to always be visible?

## Best Practices

Instead of using tooltips and hiding important inforation, consider writing clear, succinct, always visible descriptions. If you have space, don't use tooltips or toggletips. Just provide clear labels and sufficient body text.

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#tooltip","ARIA: tooltip role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#tooltip","tooltip role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |


## See Also

- [The `dialog` role](/en-US/docs/Web/Accessibility/ARIA/Roles/Dialog_role)
- [CSS: `:focus` pseudoclass](/en-US/docs/Web/CSS/:focus)
- [Tooltips & Toggletips](https://inclusive-components.design/tooltips-toggletips/) by Heydon Pickering

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>