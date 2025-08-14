---
title: User agent environment variables
slug: Web/CSS/CSS_cascade/CSS_environment_variables/User-agent_environment_variables
page-type: guide
sidebar: cssref
---

- `preferred-text-scale`
  -: The user's preferred text scale factor; aka, the adjustment they make to the "default" font size of the OS and/or user agent. On devices where {{cssxref("text-size-adjust")}} has an effect, this is the scale factor applied by `text-size-adjust: auto.` For example, if `text-size-adjust:auto` would cause text sizes to double, then `env(preferred-text-scale)` would resolve to `2`.

- `safe-area-inset-bottom`
- `safe-area-inset-left`
- `safe-area-inset-right`
- `safe-area-inset-top`
  -: Define a rectangle by its top, right, bottom, or left insets from the edge of the viewport. For rectangular displays, these are all `0`, but for non-rectangular displays these four values form the largest possible rectangle that still ensures all the content inside it is visible

- `safe-area-max-inset-bottom`
- `safe-area-max-inset-left`
- `safe-area-max-inset-right`
- `safe-area-max-inset-top`
  -: The safe area maximum insets are four environment variables that are tied to the safe area inset variables. Unlike the safe area inset variables which are dynamic values, the safe area maximum insets are static values that represent the maximum value of their dynamic counterpart when dynamic UA interfaces are retracted, making the layout viewport size the large viewport size.

- `viewport-segment-bottom`
- `viewport-segment-left`
- `viewport-segment-right`
- `viewport-segment-top`
  -: x

- `viewport-segment-height`
  -: y
- `viewport-segment-width`
  -: z
