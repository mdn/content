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

A `scrollbar` is a range that controls what part of a viewport's content is currently visible in the viewport‘s frame; whether the viewport is a full browser size, an iframe, or any element's [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context). 

Many applications provide native scroll bars when the content area is larger than the application window. Scrollbars generally applear on the right or bottom, or both, of the viewing area. The native scroll bars appear as thin rectangular track areas the length of the viewport it controls with a thumb, or scroller, that can be dragged along a track to move the associated content within it's own viewport. Some scrollbars have arrows at each end end of the track.

Take this document as an example: if the viewport is the full browser window and the content is taller than the viewport, in most browsers the scroll bar on the right edge of the window represents the overall length of the page and the scroll thumb represents the portion of the page content that is currently in the viewport. 

Scroll bars may also appear on viewports that are sub-sections of the full browser window. Continuing with this content as our example, if this content is embedded in an {{HTMLElement('iframe')}} or {{HTMLElement('object')}}, the native vertical scroll bar will be the height of the frame. A scroll bar generally is the length of the viewport, but isn't required to be.

If you aren't currently seeing a scroll bar, it may be because your browser only displays the scroll bar when scrolling or only when an element's content is too big to fit in its block formatting context. Depending on the browser, scroll bars can be made to be visible even when the content fits in the viewport when no scrolling is necessary or even possible. You can use the CSS {{CSSXref('overflow')}} property to ensure the appearance of scroll bars. 

There may be times when you feel you need to create your own scroll bar. For example, your designer may require a non-full-width horizontal scroll bar to control a very, very wide historical timeline display. For this, you can use the `scrollbar` role to inform assistive technologies that a UI control is an interactive scrollbar. 

An element with the `scrollbar` role is a graphical object that controls the scrolling of content within a viewing area; it is the ARIA role which indicates an element is a scroll bar. The HTML element that is most similar is the `range` {{HTMLElement('input')}} type, [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range).

Like a native scroll bar, wser interact with `scrollbar` elements directly or indirectly using a mouse, touchpad, or keyboard. When creating a `scrollbar`, the user interactions of a native scroll bar must be replicated. 

When using a mouse, the user must be able to activate the `scrollbar` by clicking the scroll arrows at either end of the scroll bar, if present, clicking an empty portion of the scroll track, as well as clicking and dragging the scroll thumb. 

Keyboard scrolling must also be supported. When focus is within the viewport controlled by a `scrollbar`, the <kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd> (or <kbd>Left Arrow</kbd> and <kbd>Right Arrow</kbd> for a horizontal scroll bar)  should move the scroll bar thumb proportionally. Additionally, the <kbd>Page Up</kbd>, <kbd>Page Down</kbd>, and <kbd>Space</kbd> keys must move the content and the scroll thumb the height (or width) of the viewport for each key press until the bottom or top of the content is in view. 

JavaScript must be used to translate the `scrollbar` action into scrolling commands, providing the user with feedback by 1) visually updating the `scrollbar` element, 2) scrolling the viewport's content, and 3) updating the [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) property value.

A `scrollbar` represents the current value and range of possible values via the size of the scrollbar and position of the thumb with respect to the visible range of the orientation (horizontal or vertical) it controls. 

Its orientation represents the orientation of the scrollbar and the scrolling effect on the viewing area controlled by the scrollbar. It is typically possible to add to or subtract from the current value by using directional keys such as arrow keys.





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

> **Note:** An accessible name is **required**. If the `scrollbar` role is applied to an HTML {{HTMLElement('input')}} element (or `<meter>` or `<progress>` element), the accessible name can come from the associated {{HTMLElement('label')}}. Otherwise use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present or  [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `scrollbar`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `scrollbar` element as it is a role that does not support semantic children.

For example, consider the following `scrollbar` element, which contains a heading.

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

- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) (Required)
- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (Required)
  - : Set to a decimal value between `0`, or `aria-valuemin` if present, and `aria-valuemax` indicating the current value of the scrollbar.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive technologies often present the value of `aria-valuenow` as a percentage. If this would not be accurate use this property to make the progress bar value understandable.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`. If not present, the default value is `0`.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`. If not present, the default value is `100`.
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : The {{HTMLattrxref('id')}} of an element containing text serving as a label. An accessible name is required.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) 
  - : If no {{htmlelement('label')}} can be used, and no visible text is present that can be referenced by `aria-labelledby`, provides the string value that labels the `scrollbar` element providing an accessible name. 


### Keyboard interactions

- <kbd>Up Arrow</kbd>
  - : 
- <kbd>Down Arrow</kbd>
  - :  
- <kbd>Left Arrow</kbd>
  - :  
- <kbd>Right Arrow</kbd>
  - : for a horizontal scroll bar)  should move the scroll bar thumb proportionally. 
- <kbd>Page Up</kbd>
  - : 
- <kbd>Page Down</kbd>
  - : 
- <kbd>Space</kbd>
  - :  keys must move the content and the scroll thumb the height (or width) of the viewport for each key press until the bottom or top of the content is in view. 

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

- [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}} element
- HTML {{HTMLElement('meter')}} element
- Other range widgets include:
  - [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
  - [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) (if focusable)
  - [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
