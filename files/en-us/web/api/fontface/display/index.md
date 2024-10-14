---
title: "FontFace: display property"
short-title: display
slug: Web/API/FontFace/display
page-type: web-api-instance-property
browser-compat: api.FontFace.display
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

The **`display`** property of the {{domxref("FontFace")}} interface determines how a font face is displayed based on whether and when it is downloaded and ready to use.
This property is equivalent to the CSS `font-display` descriptor.

When this property is used, font loading has a timeline with three periods.
The lengths of the first two periods depend on the value of the property and the user agent.
(See below.)

- block period
  - : The browser invisibly prepares a fallback font. If the font face loads during this time, it's used to display the text and display is complete.
- swap period
  - : If the font face is still not loaded, the fallback font will be shown.
    When the font face loads, the fallback will be swapped for the downloaded font.
- failure period
  - : If the font face still is not loaded, the fallback font will be shown and no swap will occur.

## Value

A string with one of the following values.

- `auto`
  - : Use the font display strategy provided by the user agent.
- `block`
  - : Gives the font face a short block period and an infinite swap period.
    The spec recommends 3 seconds for the block period, though this may vary from browser to browser.
- `fallback`
  - : Gives the font face a short block period and a short swap period.
    The spec recommends 100 ms or less for the block period and 3 seconds for the swap period, though these values may vary from browser to browser.
- `optional`
  - : Gives the font face a short block period and no swap period.
    The spec recommends 100 ms or less, though this may vary from browser to browser.
- `swap`
  - : Gives the font face a 0 second block period and an infinite swap period.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
