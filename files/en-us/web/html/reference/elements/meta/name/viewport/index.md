---
title: <meta name="viewport">
short-title: viewport
slug: Web/HTML/Reference/Elements/meta/name/viewport
page-type: html-attribute-value
browser-compat: html.elements.meta.name.viewport
sidebar: htmlsidebar
---

The **`viewport`** value for the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute of a {{htmlelement("meta")}} element gives hints about how the {{glossary("viewport")}} should be sized.

If specified, you define viewport-related behaviors using a [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content) attribute in the `<meta>` element as a comma-separated list of one or more values.

## Usage notes

A `<meta name="viewport">` element has the following additional attributes:

- [`content`](/en-US/docs/Web/HTML/Reference/Elements/meta#content)
  - : The `content` attribute must be defined, and its value sets various viewport-related behaviors.
    Its value is a comma-separated list of one or more key-value pairs specified as `key=value`. The following keys are defined:
    - `width`
      - : Controls the (minimum) pixel width of the viewport (see [viewport width and screen width](#viewport_width_and_screen_width)). It can be set to a positive whole number of pixels between 1 and 10000 (like `width=600`) or to the special value `device-width`, which is the physical size of the device screen in CSS pixels. This value establishes the value of the [`vw`](/en-US/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) unit.
    - `height`
      - : Controls the (minimum) pixel height of the viewport (see [viewport width and screen width](#viewport_width_and_screen_width)). It can be set to a positive whole number of pixels between 1 and 10000 (like `height=400`) or to the special value `device-height`, which is the physical size of the device screen in CSS pixels. This value establishes the value of the [`vh`](/en-US/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport) unit.
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
        > Disabling zooming capabilities by setting `user-scalable` to a value of `no` prevents people experiencing low vision conditions from being able to read and understand page content. Additionally, WCAG requires a minimum of 2× scaling; however, the best practice is to enable a 5× zoom. For more information, see:
        >
        > - [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
        > - [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)
    - `interactive-widget`
      - : Specifies the effect that interactive UI widgets, such as virtual keyboards, have on a page's viewport.
        It can be the keyword `resizes-visual`, `resizes-content`, or `overlays-content`.
        - `resizes-visual`: The {{Glossary("visual viewport")}} gets resized by the interactive widget. This is the default.
        - `resizes-content`: The {{Glossary("viewport")}} gets resized by the interactive widget.
        - `overlays-content`: Neither the viewport nor the visual viewport gets resized by the interactive widget.

        When the {{Glossary("viewport")}} gets resized, the initial [containing block](/en-US/docs/Web/CSS/Guides/Display/Containing_block) also gets resized, thereby affecting the computed size of [viewport units](/en-US/docs/Web/CSS/Reference/Values/length#relative_length_units_based_on_viewport).

    - `viewport-fit`
      - : Defines the viewable portions of the web page.
        It can be one of the keywords `auto`, `contain`, or `cover`.
        - `auto`: Doesn't affect the initial layout viewport, and the whole web page is viewable.
        - `contain`: The viewport is scaled to fit the largest rectangle inscribed within the display.
        - `cover`: The viewport is scaled to fill the device display.
          It's highly recommended to use the [safe area inset](/en-US/docs/Web/CSS/Reference/Values/env) variables to ensure that important content doesn't end up outside the display.

### Viewport width and screen width

The browser's {{glossary("viewport")}} is the area of the window in which web content can be seen. The viewport size needs to be computed before the page's content can be laid out—the page can overflow the viewport, in which case the browser provides scrollbars for the user to scroll around and access all the content, but the viewport size is the guideline for how much space, especially horizontally, the content should fit into.

Some mobile devices and other narrow screens render pages in a virtual window or viewport that is wider than the screen, and then shrink the rendered result down to fit the screen size. Users can then zoom and pan to look more closely at different areas of the page. For example, if a mobile screen has a width of 640px, pages might be rendered with a virtual viewport of 980px, and then it will be shrunk down to fit into the 640px space. This is done because not all pages are optimized for mobile and break (or at least look bad) when rendered at a small viewport width. This virtual viewport is a way to make non-mobile-optimized sites in general look better on narrow screen devices. However, this mechanism is not so good for pages that are optimized for narrow screens using [media queries](/en-US/docs/Web/CSS/Guides/Media_queries) — if the virtual viewport is 980px for example, media queries that kick in at 640px or 480px or less will never be used, limiting the effectiveness of such responsive design techniques. The viewport `<meta>` element mitigates this problem of virtual viewport on narrow screen devices.

The most common setting is the following, which sets the viewport to match the device's width and displays content at 100% zoom:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Sites can set their viewport to a specific size. For example, the definition `"width=320, initial-scale=1"` can be used to fit precisely onto a small phone display in portrait mode. This can cause problems when the browser renders a page at a larger size. To fix this, browsers will expand the viewport width if necessary to fill the screen at the requested scale. This is especially useful on large-screen devices.

For pages that set an initial or maximum scale, this means the `width` property actually translates into a _minimum_ viewport width. For example, if your layout needs at least 500 pixels of width then you can use the following markup. When the screen is more than 500 pixels wide, the browser will expand the viewport (rather than zoom in) to fit the screen:

```html
<meta name="viewport" content="width=500, initial-scale=1" />
```

### Screen density

Screen resolutions have risen to the size that individual pixels are indistinguishable by the human eye. For example, smartphones often have small screens with resolutions upwards of 1920–1080 pixels (≈400dpi). Because of this, many browsers can display their pages in a smaller physical size by translating multiple hardware pixels for each CSS "pixel". Initially, this caused usability and readability problems on many touch-optimized websites.

On high dpi screens, pages with `initial-scale=1` will effectively be zoomed by browsers. Their text will be smooth and crisp, but their bitmap images may not take advantage of the full screen resolution. To get sharper images on these screens, web developers may want to design images – or whole layouts – at a higher scale than their final size and then scale them down using CSS or viewport properties.

The default pixel ratio depends on the display density. On a display with density less than 200dpi, the ratio is 1.0. On displays with density between 200 and 300dpi, the ratio is 1.5. For displays with density over 300dpi, the ratio is the integer floor (_density_/150dpi). Note that the default ratio is true only when the viewport scale equals 1. Otherwise, the relationship between CSS pixels and {{glossary("device pixel", "device pixels")}} depends on the current zoom level.

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

### The effect of interactive UI widgets

Interactive UI widgets of the browser can influence the size of the page's viewports. The most common such UI widget is a virtual keyboard. To control which resize behavior the browser should use, set the `interactive-widget` property.

By default, the virtual keyboard only resizes the visual viewport, which doesn't affect the layout of the page. You can make the page's layout adapt to the presence of the virtual keyboard by setting the `interactive-widget` property to `resizes-content`:

```html
<meta name="viewport" content="interactive-widget=resizes-content" />
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{glossary("viewport")}} glossary term
- [Prepare for viewport resize behavior changes coming to Chrome on Android](https://developer.chrome.com/blog/viewport-resize-behavior/) on developer.chrome.com
- [Mobile viewports for responsive experiences](https://experienceleague.adobe.com/en/docs/target/using/experiences/vec/mobile-viewports) on Adobe Experience League
