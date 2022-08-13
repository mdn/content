---
title: Viewport meta tag
slug: Web/HTML/Viewport_meta_tag
tags:
  - Layout
  - Responsiveness
  - Mobile
  - viewport
spec-urls: https://drafts.csswg.org/css-device-adapt/#viewport-meta
---
{{HTMLSidebar}}

This article describes how to use the "viewport" `<meta>` tag to control the viewport's size and shape.

## Background

The browser's {{glossary("viewport")}} is the area of the window in which web content can be seen. This is often not the same size as the rendered page, in which case the browser provides scrollbars for the user to scroll around and access all the content.

Some mobile devices and other narrow screens render pages in a virtual window or viewport, which is usually wider than the screen, and then shrink the rendered result down so it can all be seen at once. Users can then pan and zoom to see different areas of the page. For example, if a mobile screen has a width of 640px, pages might be rendered with a virtual viewport of 980px, and then it will be shrunk down to fit into the 640px space.

This is done because not all pages are optimized for mobile and break (or at least look bad) when rendered at a small viewport width. This virtual viewport is a way to make non-mobile-optimized sites in general look better on narrow screen devices.

However, this mechanism is not so good for pages that are optimized for narrow screens using [media queries](/en-US/docs/Web/CSS/Media_Queries) — if the virtual viewport is 980px for example, media queries that kick in at 640px or 480px or less will never be used, limiting the effectiveness of such responsive design techniques. The viewport meta tag mitigates this problem of virtual viewport on narrow screen devices.

## Viewport basics

A typical mobile-optimized site contains something like the following:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Not all devices are the same width; you should make sure that your pages work well in a large variation of screen sizes and orientations.

The basic properties of the "viewport" `<meta>` tag include:

- `width`
  - : Controls the size of the viewport. It can be set to a specific number of pixels like `width=600` or to the special value `device-width`, which is [100vw](/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport), or 100% of the viewport width. Minimum: `1`. Maximum: `10000`. Negative values: ignored.
- `height`
  - : Controls the size of the viewport. It can be set to a specific number of pixels like `height=400` or to the special value `device-height`, which is [100vh](/en-US/docs/Web/CSS/length#vh), or 100% of the viewport height. Minimum: `1`. Maximum: `10000`. Negative values: ignored.
- `initial-scale`
  - : Controls the zoom level when the page is first loaded. Minimum: `0.1`. Maximum: `10`. Default:`1`. Negative values: ignored.
- `minimum-scale`
  - : Controls how much zoom out is allowed on the page. Minimum: `0.1`. Maximum: `10`. Default: `0.1`. Negative values: ignored.
- `maximum-scale`
  - : Controls how much zoom in is allowed on the page. Any value less than 3 fails accessibility. Minimum: `0.1`. Maximum: `10`. Default:`10`. Negative values: ignored.
- `user-scalable`
  - : Controls whether zoom in and zoom out actions are allowed on the page. Valid values: `0`, `1`, `yes`, or `no`. Default: `1`, which is the same as `yes`. Setting the value to `0`, which is the same as `no`, is against Web Content Accessibility Guidelines (WCAG).

> **Warning:** Usage of `user-scalable=no` can cause accessibility issues to users with visual impairments such as low vision. [WCAG](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) requires a minimum of 2x scaling; however, the best practice is to enable a 5x zoom.

## Screen density

Screen resolutions have risen to the size that individual pixels are indistinguishable by the human eye. For example, smartphones often have small screens with resolutions upwards of 1920—1080 pixels (\~400 dpi). Because of this, many browsers can display their pages in a smaller physical size by translating multiple hardware pixels for each CSS "pixel". Initially, this caused usability and readability problems on many touch-optimized web sites.

On high dpi screens, pages with `initial-scale=1` will effectively be zoomed by browsers. Their text will be smooth and crisp, but their bitmap images may not take advantage of the full screen resolution. To get sharper images on these screens, web developers may want to design images – or whole layouts – at a higher scale than their final size and then scale them down using CSS or viewport properties.

The default pixel ratio depends on the display density. On a display with density less than 200dpi, the ratio is 1.0. On displays with density between 200 and 300dpi, the ratio is 1.5. For displays with density over 300dpi, the ratio is the integer floor(_density_/150dpi). Note that the default ratio is true only when the viewport scale equals 1. Otherwise, the relationship between CSS pixels and device pixels depends on the current zoom level.

## Viewport width and screen width

Sites can set their viewport to a specific size. For example, the definition `"width=320, initial-scale=1"` can be used to fit precisely onto a small phone display in portrait mode. This can cause problems when the browser doesn't render a page at a larger size. To fix this, browsers will expand the viewport width if necessary to fill the screen at the requested scale. This is especially useful on large-screen devices.

For pages that set an initial or maximum scale, this means the `width` property actually translates into a _minimum_ viewport width. For example, if your layout needs at least 500 pixels of width then you can use the following markup. When the screen is more than 500 pixels wide, the browser will expand the viewport (rather than zoom in) to fit the screen:

```html
<meta name="viewport" content="width=500, initial-scale=1">
```

Other [attributes](/en-US/docs/Web/HTML/Element/meta#attributes) that are available are `minimum-scale`, `maximum-scale`, and `user-scalable`. These properties affect the initial scale and width, as well as limiting changes in zoom level.

## Common viewport sizes for mobile and tablet devices

If you want to know what mobile and tablet devices have which viewport widths, there is a comprehensive list of [mobile and tablet viewport sizes here](https://experienceleague.adobe.com/docs/target/using/experiences/vec/mobile-viewports.html). This gives information such as viewport width on portrait and landscape orientation as well as physical screen size, operating system and the pixel density of the device.

## Specifications

{{Specifications}}
