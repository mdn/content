---
title: "ARIA: scrollbar role"
slug: Web/Accessibility/ARIA/Roles/scrollbar_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#scrollbar
---

{{AccessibilitySidebar}}

A `scrollbar` is a graphical object that controls the scrolling of content within a viewing area.

## Description

A `scrollbar` is a range that controls what part of a viewport's content is currently visible in the viewport's frame; whether the viewport is a full browser size, an iframe, or any element's [block formatting context](/en-US/docs/Web/CSS/CSS_display/Block_formatting_context).

### What is scroll bar

Many applications provide native scroll bars when the content area is larger than the application window. Scrollbars generally appear on the right or bottom of the viewing area. Native scroll bars appear as thin rectangular track areas the length of the viewport it controls with a piece of UI called a thumb or scroller that can be dragged along a track to move the associated content within the viewport. Some scrollbars have arrows at each end of the track that allow scrolling the viewport a short set distance when activated.

Take this document as an example: if the viewport is the full browser window and the content is taller than the viewport, in most browsers the scroll bar on the right edge of the window represents the overall length of the page and the scroll thumb represents the portion of the page content that is currently in the viewport.

Scroll bars may also appear on viewports that are sub-sections of the full browser window. Continuing with this content as our example, if this content is embedded in an {{HTMLElement('iframe')}} or {{HTMLElement('object')}}, the native vertical scroll bar will be the height of the frame. A scroll bar generally is the length of the viewport, but isn't required to be.

If you aren't currently seeing a scroll bar, it may be because your browser only displays the scroll bar when scrolling or only when an element's content is too big to fit in its block formatting context. Depending on the browser and operating system, scroll bars can be made to be visible even when the content fits in the viewport when no scrolling is necessary or even possible.

### ARIA `scrollbar`

It is always best to use native scroll bars. You can use the CSS {{CSSXref('overflow')}} property to ensure the appearance of native scroll bars. A [CSS scrollbar specification](https://drafts.csswg.org/css-scrollbars/) is being developed. Some browsers allow [styling scroll bars via prefixed pseudo-elements](/en-US/docs/Web/CSS/::-webkit-scrollbar).

Because native scroll bar styling has historically been limited, you may come across a scrollbar implemented in JavaScript that you need to support and make fully accessible. For this, you can use the `scrollbar` role to inform assistive technologies that a UI control is an interactive scrollbar.

An element with the `scrollbar` role is a graphical object that controls the scrolling of content within a viewing area; it is the ARIA role which indicates an element is a scroll bar. The HTML element that is most similar is the `range` {{HTMLElement('input')}} type, [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range).

The `scrollbar` element has two required attributes: [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) and [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow). The `aria-controls` attribute references the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of the scrollable area it controls. The `aria-valuenow` property defines the current value of the scrollbar.

While the `aria-valuenow` is always required, the [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) and [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) properties only need to be set for the scrollbar role when the `scrollbar`'s minimum value is not 0 or the maximum value is not 100. The value of `aria-valuenow` must always be between the minimum and maximum inclusive values, or between `0` and `100` inclusive if the minimum and maximum values default to `0` and `100` respectively. `aria-valuenow` communicates how close the viewport is to the bottom of the document. Think of it like a progress bar, where the start of the document is the minimum value and the end of the document is the maximum value.

A `scrollbar` represents the current value and range of possible values via the size of the scrollbar and position of the thumb with respect to the visible range of the orientation (horizontal or vertical) it controls. In other words, the `scrollbar` length (height or width) represents all the content within a viewport. The `aria-valuemin` value represents the beginning of the content and the scrollbar, the `aria-valuemax` value represents the end of the content and the end of the scrollbar. The `aria-valuenow` represents the content that is currently visible in the viewport and the current position, or value, of the movable thumb. The `aria-valuenow` value will generally be exposed as a percentage between `aria-valuemin` and `aria-valuemax` calculated by assistive technologies.

> [!NOTE]
> Assistive technologies generally render the value of `aria-valuenow` as a percent of a range between the value of `aria-valuemin` and `aria-valuemax`, unless [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) is set. It is recommended to set the values for `aria-valuemin`, `aria-valuemax`, and `aria-valuenow` in a manner that is appropriate for this calculation.

Like a native scroll bar, users interact with `scrollbar` elements directly or indirectly using mouse, touchpad, keyboard, and voice input. `scrollbar` role implementations must also accommodate all these interaction methods.

When using a mouse, the user must be able to activate the `scrollbar` by clicking the scroll arrows at either end of the scroll bar, if present, clicking an empty portion of the scroll track, as well as clicking and dragging the scroll thumb.

Keyboard scrolling must also be supported. When focus is within the viewport controlled by a `scrollbar`, the <kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd> (or <kbd>Left Arrow</kbd> and <kbd>Right Arrow</kbd> for a horizontal scroll bar) should move the scroll bar thumb proportionally. Additionally, the <kbd>Page Up</kbd>, <kbd>Page Down</kbd>, <kbd>Space</kbd>, and <kbd>Shift + Space</kbd> keys must move the content and the scroll thumb the height (or width) of the viewport for each key press until the bottom or top (or left or right) of the content is in view.

JavaScript must be used to translate the `scrollbar` action into scrolling commands, providing the user with feedback by:

1. Visually updating the `scrollbar` element,
2. Scrolling the viewport's content, and
3. Updating the [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) property value.

The default orientation of the `scrollbar` role is vertical. Including [`aria-orientation="vertical"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation), in this case, is optional. The orientation represents the orientation of the scrollbar and the scrolling effect on the viewing area controlled by the scrollbar. If the scrolling is left to right or right to left and not top to bottom, include `aria-orientation="horizontal"` on the element with the `scrollbar` role.

> [!NOTE]
> An accessible name is **required**. If the `scrollbar` role is applied to an HTML {{HTMLElement('input')}} element (or `<meter>` or `<progress>` element), the accessible name can come from the associated {{HTMLElement('label')}}. Otherwise use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

### All descendants are presentational

There are some types of user interface components that, when represented in a platform accessibility API, can only contain text. Accessibility APIs do not have a way of representing semantic elements contained in a `scrollbar`. To deal with this limitation, browsers, automatically apply role [`presentation`](/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role) to all descendant elements of any `scrollbar` element as it is a role that does not support semantic children.

For example, consider the following `scrollbar` element, which contains a heading.

```html
<div role="scrollbar"><h3>Title of my scrollbar</h3></div>
```

Because descendants of `scrollbar` are presentational, the following code is equivalent:

```html
<div role="scrollbar"><h3 role="presentation">Title of my scrollbar</h3></div>
```

From the assistive technology user's perspective, the heading does not exist since the previous code snippets are equivalent to the following in the [accessibility tree](/en-US/docs/Glossary/Accessibility_tree):

```html
<div role="scrollbar">Title of my scrollbar</div>
```

### Associated WAI-ARIA roles, states, and properties

- [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) (Required)
  - : Identifies the viewport, via the `id`, whose contents controlled by the scrollbar.
- [`aria-valuenow`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (Required)
  - : Set to a decimal value between `0`, or `aria-valuemin` if present, and `aria-valuemax` indicating the current value of the scrollbar.
- [`aria-valuetext`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive technologies often present the value of `aria-valuenow` as a percentage. If this would not be helpful, use this property to make the scrollbar value more understandable to users.
- [`aria-valuemin`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Set to a decimal value representing the minimum value, and less than `aria-valuemax`. If not present, the default value is `0`.
- [`aria-valuemax`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Set to a decimal value representing the maximum value, and greater than `aria-valuemin`. If not present, the default value is `100`.
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : When not using a native form control and therefore not able to associate the scrollbar with a {{HTMLElement('label')}}, if visible text is available that can provide the required accessible name, set to the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of an element containing text serving as a label. Otherwise, use `aria-label`.
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : If no {{htmlelement('label')}} can be used, and no visible text is present that can be referenced by `aria-labelledby`, provides the string value that labels the `scrollbar` element providing the required accessible name.
- [`aria-orientation`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : By default, the orientation is `vertical`. The property can be included and set to `horizontal`, `undefined` (the default for all roles unless otherwise specified), or `vertical`.

### Keyboard interactions

- <kbd>Up Arrow</kbd>
  - : The content in the viewport moves up one line with the thumb moving up the scroll bar slider proportionally, until the top of the content and scrollbar are reached.
- <kbd>Down Arrow</kbd>
  - : The content in the viewport moves down one line with the thumb moving down the scroll bar slider proportionally, until the bottom of the content and scrollbar are reached.
- <kbd>Left Arrow</kbd>
  - : With horizontal scrolling, the content in the viewport moves left the width of one character with the thumb moving left across the scroll bar slider proportionally, until the left edge of the content abuts the left end of the viewport and the thumb is aligned on the left end of the scrollbar.
- <kbd>Right Arrow</kbd>
  - : With horizontal scrolling, the content in the viewport moves right the width of one character with the thumb moving right across the scroll bar slider proportionally, until the right edge of the content abuts the right end of the viewport and the thumb is aligned on the right end of the scrollbar.
- <kbd>Page Up</kbd> and <kbd>Shift + Space</kbd>
  - : The content in the viewport moves up the height of one viewport with the thumb moving up the scroll bar slider proportionally, until the top of the content and scrollbar are reached.
- <kbd>Page Down</kbd> and <kbd>Space</kbd>
  - : The content in the viewport moves down the height of one viewport with the thumb moving down the scroll bar slider proportionally, until the bottom of the content and scrollbar are reached.the bottom or top of the content is in view.

## Examples

The following is an example of a word likely being too long for a parent container.

```html
<span id="pi-label">Pi</div>
<div id="pi">
3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
</div>
<div
  role="scrollbar"
  aria-labelledby="pi-label"
  aria-controls="pi"
  aria-orientation="horizontal"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="100">
  <div id="thumb"></div>
</div>
```

When using the ARIA roles instead of native UI features, CSS must be used to style the scrollbar and thumb and JavaScript must be used to handle all keyboard and pointer events.

CSS could have been used to ensure the overflowing value of PI had a native scrollbar:

```html
<h3 id="PI">Pi</h3>
<p class="pi" tabindex="0" aria-labelledby="PI">
  3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679
</p>
```

```css
.pi {
  overflow: auto;
  max-width: 100%;
}
```

The above CSS means a native scroll bar will appear when the user interacts with the paragraph's viewport if the length of the longest word in the paragraph is wider than the paragraphs containing box. The `tabindex` attribute was added to allow people using a keyboard to navigate to, and scroll around the overflowed content.

## Specifications

{{Specifications}}

## See also

- [`<input type="range">`](/en-US/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}} element
- HTML {{HTMLElement('meter')}} element
- Other range widgets include:
  - [`meter`](/en-US/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`slider`](/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role)
  - [`separator`](/en-US/docs/Web/Accessibility/ARIA/Roles/separator_role) (if focusable)
  - [`progressbar`](/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/en-US/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- [Document `scroll` event](/en-US/docs/Web/API/Document/scroll_event)
