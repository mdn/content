---
title: 'ARIA: scrollbar role'
slug: Web/Accessibility/ARIA/Roles/scrollbar_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - scrollbar
---

A `scrollbar` is a graphical object that controls the scrolling of content within a viewing area.

## Description

A scroll bar is a bar that appears on the side of a viewport to control what part of the content is currently visible in the viewport‘s frame. 

For example, if web content is taller than the browser window, the scroll bar on the right edge of the browser chrome represents the overall length of the page and the scroll thumb represents the portion of the page content that is currently in the viewport. 

Scroll bars are utilized using the mouse, touchpad, or keyboard. When using a mouse, you can move the scroll bar by clicking the scroll arrow at either end of the scroll bar, clicking an empty portion of the scroll bar, or clicking and dragging the scroll thumb. If using a keyboard, using arrows to navigate thru the content will move the scroll bar thumb proportionally. The <kbd>Page Up</kbd>, <kbd>Page Down</kbd>, and <kbd>Space</kbd> keys move the content and the scroll thumb the height (or width) of the viewport for each key press.

. the scrollbar on the right edge of the browser chrome when a user navigates down the page with to enable scrolling with a pointing device such as a mouse .  The viewing area can be the entire regardless of whether the content is fully displayed within the viewing area.

A scrollbar represents the current value and range of possible values via the size of the scrollbar and position of the thumb with respect to the visible range of the orientation (horizontal or vertical) it controls. Its orientation represents the orientation of the scrollbar and the scrolling effect on the viewing area controlled by the scrollbar. It is typically possible to add to or subtract from the current value by using directional keys such as arrow keys.

The `scrollbar` element has two required attributes: [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) and [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow). 

The `aria-controls` attribute references the scrollable area it controls.

The `aria-valuenow` property defines the current value of the scrollbar. While the [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) and [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) properties only need to be set for the scrollbar role when it's minimum value is not 0 or the maximum value is not 100, the `aria-valuenow` is always required. Make sure the value of `aria-valuenow` is between the minimum and maximum values, inclusive.


Supported States and Properties:	
aria-disabled
aria-orientation
aria-valuemax
aria-valuemin

	author
Children Presentational:	True
Implicit Value for Role:	Default for aria-orientation is vertical.
Default for aria-valuemin is 0.
Default for aria-valuemax is 100.



aria-valuenow will generally be exposed as a percentage between aria-valuemin and aria-valuemax calculated by assistive technologies.

<span id="pi-label">Pi</div>
<div id="pi">
3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
</div>
<div class="rail">
<!-- The scrollbar uses the default values of 0 and 100 for aria-valuemin and aria-valuemax -->
  <div
    class="thumb"
    role="scrollbar"
    aria-labelledby="pi-label"
    aria-controls="pi"
    aria-orientation="horizontal"
    aria-valuenow="25">
  </div>
</div>

Authors MAY set aria-valuemin and aria-valuemax to indicate the minimum and maximum thumb position. Otherwise, their implicit values follow the same rules as <input[type="range"]> in [HTML]:

If aria-valuemin is missing or not a number, it defaults to 0 (zero).
If aria-valuemax is missing or not a number, it defaults to 100.
Authors MUST set the aria-valuenow attribute to indicate the current thumb position. If aria-valuenow is missing or has an unexpected value, browsers MAY implement the repair techniques specified in the section describing handling author errors in states and properties, which are equivalent to the repair techniques for <input[type="range"]> in [HTML].

Elements with the role scrollbar have an implicit aria-orientation value of vertical.

NOTE
Assistive technologies generally will render the value of aria-valuenow as a percent of a range between the value of aria-valuemin and aria-valuemax, unless aria-valuetext is specified. It is best to set the values for aria-valuemin, aria-valuemax, and aria-valuenow in a manner that is appropriate for this calculation.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `scrollbar`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `scrollbar` element as it is a role that does not support semantic children.

For example, consider the following ```` element, which contains a heading.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Because descendants of `scrollbar` are presentational, the following code is equivalent:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
````

From the assitive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Associated WAI-ARIA roles, states, and properties

- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)
  - : Only present and required if the value is not indeterminate. Set to a decimal value between `0`, or `aria-valuemin` if present, and `aria-valuemax` indicating the current value of the progress bar.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive technologies often present the value of `aria-valuenow` as a percentage. If this would not be accurate use this property to make the progress bar value understandable.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`. If not present, the default value is `0`.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`. If not present, the default value is `100`.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Defines the string value or identifies the element (or elements) that label the progressbar element providing an accessible name. An accessible name is required.


### Keyboard interactions

### Required JavaScript features

## Examples

## Accessibility Concerns

## Best Practices

### Prefer HTML 

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#scrollbar","ARIA: scrollbar role")}}                                             | {{Spec2('ARIA')}}                         |

## See Also

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
