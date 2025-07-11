---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
page-type: html-attribute-value
browser-compat: html.elements.meta.name.viewport
sidebar: htmlsidebar
---

The **`viewport`** value for the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute of a {{htmlelement("meta")}} element gives hints about the initial size of the {{glossary("viewport")}}.
If specified, you define viewport-related behaviors using a [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content) attribute in the `<meta>` element as a comma-separated list of one or more values.

For example, to set the viewport to match the device's width and display content at 100% zoom:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## Usage notes

A `<meta name="viewport">` element has the following additional attributes:

- [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content)
  - : The `content` attribute must be defined, and its value sets various viewport-related behaviors.
    Accepts one or more of the following keywords in a comma-separated list:
    - `width`
      - : Defines the pixel width of the viewport that you want the website to be rendered at.
        It can be a positive whole number or the keyword `device-width`.
    - `height`
      - : Defines the height of the viewport.
        It can be a positive whole number or the keyword `device-height`.
        This is not used by any browser.
    - `initial-scale`
      - : Defines the ratio between the device width (`device-width` in portrait mode or `device-height` in landscape mode) and the viewport size.
        It can be a number between `0.0` and `10.0`.
    - `maximum-scale`
      - : Defines the maximum amount to zoom in.
        It must be greater or equal to the `minimum-scale` or the behavior is undefined.
        Browser settings can ignore this rule, and iOS10+ ignores it by default.
        It can be a number between `0.0` and `10.0`.
    - `minimum-scale`
      - : Defines the minimum zoom level.
        It must be smaller or equal to the `maximum-scale` or the behavior is undefined.
        Browser settings can ignore this rule, and iOS10+ ignores it by default.
        It can be a number between `0.0` and `10.0`.
    - `user-scalable`
      - : A boolean indicating if the user can zoom the web page.
        Browser settings can ignore this rule, and iOS10+ ignores it by default.
        It can be either `yes` or `no`, defaulting to `yes`.
        > [!WARNING]
        > Disabling zooming capabilities by setting `user-scalable` to a value of `no` prevents people experiencing low vision conditions from being able to read and understand page content.
        >
        > - [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `viewport-fit`
      - : Defines the viewable portions of the web page.
        It can be one of the keywords `auto`, `contain`, or `cover`.
        - `auto`: Doesn't affect the initial layout viewport, and the whole web page is viewable.
        - `contain`: The viewport is scaled to fit the largest rectangle inscribed within the display.
        - `cover`: The viewport is scaled to fill the device display.
          It's highly recommended to use the [safe area inset](/en-US/docs/Web/CSS/env) variables to ensure that important content doesn't end up outside the display.

## Examples

### Using a meta viewport size

The following example indicates to the browser that the page should be rendered at the device width:

```html
<meta name="viewport" content="width=device-width" />
```

### Using a media query with a viewport meta

The following `content` value uses multiple keywords that hint to the browser to use fullscreen mode, along with `viewport-fit`, which helps avoid display cutouts such as mobile device notches:

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{glossary("viewport")}} glossary term
