---
title: Using environment variables
slug: Web/CSS/CSS_environment_variables/Using_environment_variables
page-type: guide
sidebar: cssref
---

The [CSS environment variables module](/en-US/docs/Web/CSS/css_environment_variables) introduces the concept of environment variables in CSS and defines the {{cssxref("env")}} function to enable using environment variables. In this guide, we look at what environment variables are, the environment variables defined by the browser, and how to use them.

## What are environment variables

CSS environment variables are global variables; globally scoped to the entire document. They are defined by the user agent. Environment variables are special values provided by the browser or operating system that help your styles adapt to the user's device or context. They are accessed using the `env()` function.

> [!NOTE]
> In the future, we may see support for developer-defined environment variables, but this has not yet been defined or implemented.

Environment variables work similarly to [custom properties](/en-US/docs/Web/CSS/--*) and the {{cssxref("var")}} function, but are globally defined and scoped. This means they are always scoped to the entire document, unlike custom properties, which are scoped to elements and are mutable.

Similar to custom properties, environment variables are case sensitive. Unlike custom properties, which cannot be used outside of declarations, the `env()` function can be used in place of any part of a property value, or any part of a descriptor (e.g., in [Media query rules](/en-US/docs/Web/CSS/@media)).

Environment variables were first introduced by Apple in the iOS Safari browser to enable developers to work around what otherwise would have been limitation to their device viewports which were no longer perfect, unencumbered rectangles. The goal was to handle device-specific quirks that impact the viewport, like notches and curved edges. The original environment variables enabled developers to place content in a safe area of the viewport. Because the `safe-area-inset-*` environment variables are defined set by the user agent, based on the browser and device, we are provided with variables that can be used anywhere in our CSS. We don't need to know what device or browser the user is using to know that we can make our content visible, even to viewers on their non‑rectangular displays.

Common issues that can be solved by using environment variables include device notifications covering up sections of the app user interface, handling the viewport size changes when dynamic keyboards are displayed and removed, and, especially for desktop [Progressive web apps](/en-US/docs/Web/Progressive_web_apps) (PWAs), positioning elements where the title bar would have been and ensure that content stays clear of the window control buttons.

## Browser defined variables

The CSS environment variables specification defines a few case-sensitive variables, including:

- `preferred-text-scale`
  - : The `preferred-text-scale` environment variable represents the user's preferred text scale factor. This is the adjustment made to the "default" font size of the operating system or user agent. On devices and browsers where {{cssxref("text-size-adjust")}} has an effect, this is the scale factor applied by `text-size-adjust: auto.` For example, if `text-size-adjust:auto` would cause the text size to double, then `env(preferred-text-scale)` would resolve to `2`.

- `safe-area-inset-*`
  - : The four safe area inset environment variables - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left` - define a rectangle by its top, right, bottom, and left insets from the edge of the viewport. This is where it is safe to put content without risking having it be cut off by the shape of a non‑rectangular display. For rectangular, unobstructed viewports, such as the regular desktop and laptop monitors, these four values are all equal to `0`. For non-rectangular displays — including rounded corner devices with full-size screens and rounded or [round-display](/en-US/docs/Web/CSS/CSS_round_display) smart watches — these four values, set by the user agent, form a rectangle such that all content inside the rectangle is visible and unobstructed.

- `safe-area-max-inset-*`
  - : The four safe area maximum inset environment variables - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left` - represent the static maximum value of their dynamic `safe-area-inset-*` variable counterpart. On some platforms, the `safe-area-inset-*` values can change dynamically while scrolling. For example, there may be a button bar displayed when scrolling up or down. While the `safe-area-inset-*` values change as the currently visible content area changes, the `safe-area-max-inset-*` are static, representing the maximum value of their dynamic counterpart when all dynamic user interface features are retracted, making the layout viewport size the large viewport size.

- `viewport-segment-*`
  - : Only relevant to devices that have multiple segments, such as foldable phones, the `viewport-segment-bottom`, `viewport-segment-left`, `viewport-segment-right`, and `viewport-segment-top` along with the `viewport-segment-height` and `viewport-segment-width` define the position and dimensions of a logically separated regions of the viewport. These variables are only defined if the viewport is divided into at least two segments. They are used to support multi-segment devices when [viewport units](/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport) are being used for single-segment devices.

Other specifications define additional environment variables.

The [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API) defines the {{domxref("WindowControlsOverlay")}} interface, which exposes information about the geometry
of the title bar area in [progressive web applications (PWAs)](/en-US/docs/Glossary/Progressive_web_apps) installed on desktop devices. when using the `window-controls-overlay` [display_override](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) value:

- `titlebar-area-*`
  - : The `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height` variables define the area that would generally be occupied by the title bar in an installed web application running on a desktop environment. Use the `titlebar-area-*` variables to make sure content doesn't overlap with the window control buttons (i.e., minimize, maximize, and close).

- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : The `keyboard-inset-*` variables provide information about the on-screen virtual keyboard's appearance. They define a rectangle by its top, right, bottom, and left insets from the edge of the viewport (the width and height insets are calculated from the other insets). To learn more, see the {{domxref("VirtualKeyboard API", "VirtualKeyboard API", "", "nocode")}}.

You may have notices that all the previous variable names include the physical terms of left, right, top, bottom, height, and width. As the variable names refer to the physical properties of device hardware, the writing mode of the website displayed is not the issue.

## Using environment variables

The {{cssxref("env")}} function is used to substitute the value of an environment variable into a CSS context. The `env()` function can be used in place of any part of a value in any property on any element, or any part of a value in any descriptor on any at-rule, including within custom property value. It can be used wherever a CSS value is allowed.

The basic syntax is as follows:

```css-nolint
env( <environment-variable-name> )
env( <environment-variable-name>, <fallback-value> )
```

The function accepts a case-sensitive environment variable name and an optional (but generally recommended) fallback value.

```css
line-height: env(preferred-text-scale, 2);
margin: env(safe-area-inset-top, 0) env(safe-area-inset-right, auto)
  env(safe-area-inset-bottom, 3em) env(safe-area-inset-left, auto);
```

The first argument is the name of an environment variable to be substituted. The argument after the comma, if provided, is the fallback value, which is used if the environment variable referenced in the first argument does not exist. In these examples, if the `preferred-text-scale` environment variable doesn't exist in a browser, the {{cssxref("line-height")}} will be set to `2`. And, if the browser doesn't have `safe-area-inset-*` values, the {{cssxref("margin")}} will be set to `margin: 0 auto 3em auto`.

The syntax of the fallback is similar to the custom properties syntax in that it allows for multiple commas. Anything between the first comma and the end of the function is considered the fallback value. However, if the property value or descriptor doesn't support commas, the value is not valid.

If a property or descriptor contains syntactically valid `env()` functions, it assumed to be valid at parse time. It is only syntax-checked at computed-time, after the `env()` functions have been substituted with their browser-provided values. If the environment variable passed as the first parameter is not a recognized environment variable name, the fallback value second argument is used. The fallback can be another environment variable, even with its own fallback. If no fallback was provided, the property or descriptor containing the `env()` function is invalid at computed-value time.

### Example use case

We can use environment variables to ensure that a fixed app toolbar are not obscured by any notifications appearing at the bottom of the device. In devices that display notifications at the bottom of the screen, the user agent will set the the value of the `safe-area-inset-bottom` environment variable to be the distance from the height of what is blocking the viewport to the bottom of the viewport; in our example, this is likely the height of any visible notifications. On a rectangular desktop monitor, the `safe-area-inset-bottom` is generally `0`. We will use this value to create space on the bottom of the viewport for the notification to display without obscuring the content.

Our {{htmlelement("body")}} has two children, the {{htmlelement("main")}} contains our entire application other than the {{htmlelement("footer")}} toolbar.

```html
<body>
  <main>Application</main>
  <footer>Toolbar</footer>
  <body></body>
</body>
```

The `<body>` is defined as a flex container the height of the viewport. The `<main>` application is allowed to grow to fill any space not consumed by its sibling `<footer>`.

```css
body {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}

main {
  flex: 1;
  padding: 1em;
  overflow-y: scroll;
}
```

The `<footer>` is positioned to be stuck at the bottom of the viewport. The declaration [`position: sticky`](/en-US/docs/Web/CSS/position#sticky) offsets the element relative to the `<body>`, its scrolling ancestor and [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block) (nearest block-level ancestor), based on the {{cssxref("bottom")}} value of `0`. We give the `<footer>` a {{cssxref("padding")}} of `1em` on all four sides. We then add the `safe-area-inset-bottom` value to the `1em` of bottom padding, with a fallback of `1em`.

```css
footer {
  position: sticky;
  bottom: 0;
  padding: 1em;
  padding-bottom: calc(1em + env(safe-area-inset-bottom, 1em));
}
```

Additional CSS is hidden for brevity.

```css hidden
main {
  background-color: palegoldenrod;
}
footer {
  background-color: black;
  color: white;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-between;
}

footer::before,
footer::after {
  content: "Button" / "Fake button";
  padding: 3px 0.5em;
  background: white;
  color: black;
  border-radius: 3px;
}
```

A black area that is taller than `1em` will display on devices that have a value for the `safe-area-inset-bottom` environment variable that is greater than `0`, be it because of notifications, a device notch in the screen, or because the device doesn't have square corners.

{{EmbedLiveSample("Example use case", "200", "500")}}

## See also

- {{cssxref("var")}}
- {{cssxref("@media/shape", "@media `shape` descriptor")}}
- [CSS environment_variables](/en-US/docs/Web/CSS/CSS_environment_variables) module
- [CSS round display](/en-US/docs/Web/CSS/CSS_round_display) module
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module
