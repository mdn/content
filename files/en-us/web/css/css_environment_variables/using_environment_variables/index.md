---
title: Using environment variables
slug: Web/CSS/CSS_environment_variables/Using_environment_variables
page-type: guide
sidebar: cssref
---

The [CSS environment variables module](/en-US/docs/Web/CSS/css_environment_variables) introduces the concept of environment variables in CSS and defines the {{cssxref("env")}} function to enable using environment variables. In this guide, we look at [what environment variables are](#what_are_environment_variables), the [environment variables defined by the browser](#browser_defined_environment_variables), and [how to use environment variables](#using_environment_variables_with_env_example) with [the `env()` function](#the_env_function).

## What are environment variables?

CSS environment variables are global variables; globally scoped to the entire document. They are defined by the user agent. Environment variables are special values provided by the browser or operating system that help your styles adapt to the user's device or context. They are accessed using the `env()` function.

Environment variables work similarly to [custom properties](/en-US/docs/Web/CSS/--*) and the {{cssxref("var()")}} function, but are globally defined and scoped. This means they are always scoped to the entire document, unlike custom properties, which are scoped to elements. In addition, environment variables are read-only, whereas custom properties are mutable.

Similar to custom properties, environment variables are case-sensitive. Unlike custom properties, which cannot be used outside of declarations, the `env()` function can be used in place of any part of a property value, or any part of a descriptor (for example, in [Media query rules](/en-US/docs/Web/CSS/@media)).

### History

Apple first introduced environment variables in the iOS Safari browser to enable developers to optimize layouts for irregular device displays. Examples include those with notches and curved edges. The original `safe-area-inset-*` environment variables allow developers to place content in a safe area of the viewport regardless of what device or browser the user has.

### Use cases

Common issues that can be solved by using environment variables include:

- Device notifications covering up sections of the app user interface.
- Handling viewport size changes when dynamic keyboards are shown and hidden.
- Positioning elements where the title bar would have been on [progressive web apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) once they are installed and ensuring that content stays clear of the window control buttons. This is especially an issue on desktop browsers.

## Browser-defined environment variables

The CSS environment variables specification defines a few case-sensitive variables, including:

- `preferred-text-scale`
  - : The `preferred-text-scale` environment variable represents the user's preferred text scale factor. This is the adjustment made to the "default" font size of the operating system or user agent. On devices and browsers where {{cssxref("text-size-adjust")}} has an effect, this is the scale factor applied by `text-size-adjust: auto.` For example, if `text-size-adjust:auto` would cause the text size to double, then `env(preferred-text-scale)` would resolve to `2`.

- `safe-area-inset-*`
  - : The four safe area inset environment variables - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, and `safe-area-inset-left` - define a rectangular safe area by its top, right, bottom, and left insets from the edge of the viewport. It is safe to place content inside this area without having it cut off by the shape of a non‑rectangular display. For rectangular, unobstructed viewports, such as regular desktop and laptop monitors, these four values are all equal to `0`. For non-rectangular displays — including rounded-corner devices with full-size screens and rounded or [round-display](/en-US/docs/Web/CSS/CSS_round_display) smart watches — these four values, set by the user agent, form a rectangle such that all content inside the rectangle is visible and unobstructed.

- `safe-area-max-inset-*`
  - : The four safe area maximum inset environment variables - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, and `safe-area-max-inset-left` - each represent the static maximum value of their dynamic `safe-area-inset-*` variable counterparts. They represent the maximum value of their `safe-area-inset-*` counterpart when all dynamic user interface features are retracted. For example, on some platforms there may be a button bar displayed when scrolling up or down, changing the `safe-area-inset-*` values. While the `safe-area-inset-*` values change as the currently visible content area changes, the `safe-area-max-inset-*` values always remain the same.

- `viewport-segment-*`
  - : These variables are only relevant to devices that have multiple segments, such as foldable phones. The `viewport-segment-bottom`, `viewport-segment-left`, `viewport-segment-right`, and `viewport-segment-top` variables, along with the `viewport-segment-height` and `viewport-segment-width`, define the position and dimensions of logically separated regions of the viewport. These variables are only defined if the viewport is divided into at least two segments. They are used to place different parts of a UI comfortably into different segments of a multi-segment device and avoid having your content cut off by the fold.

Other specifications define additional environment variables.

The [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API) defines the {{domxref("WindowControlsOverlay")}} interface, which exposes information about the geometry of the title bar area in [progressive web applications (PWAs)](/en-US/docs/Glossary/Progressive_web_apps) installed on desktop devices. When using the `window-controls-overlay` [display_override](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) value, the following environment variables are defined:

- `titlebar-area-*`
  - : The `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, and `titlebar-area-height` variables define the area that would generally be occupied by the title bar in an installed web application running on a desktop environment. Use the `titlebar-area-*` variables to ensure content doesn't overlap with the window control buttons (that is, minimize, maximize, and close).

- `keyboard-inset-*`
  - : The `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, and `keyboard-inset-height` variables provide information about the on-screen virtual keyboard's position and size, specifically its top, right, bottom, and left insets from the edge of the viewport (the width and height insets are calculated from the other insets). To learn more, see the {{domxref("VirtualKeyboard API", "VirtualKeyboard API", "", "nocode")}}.

You may have noticed that all the previous variable names include the physical terms of left, right, top, bottom, height, and width. Logical equivalents are not needed because the variable names refer to the physical properties of the device hardware rather than the displayed website.

## The `env()` function

The {{cssxref("env")}} function is used to insert the value of an environment variable into a CSS context. The `env()` function can be used in place of any part of a value in any property on any element, or any part of a value in any descriptor on any at-rule, including within custom property values. It can be used wherever a CSS value is allowed.

The basic syntax is as follows:

```css-nolint
env( <environment-variable-name> )
env( <environment-variable-name>, <fallback-value> )
```

The function accepts a case-sensitive [environment variable name](#browser_defined_environment_variables) and an optional, but generally recommended, fallback value.

```css
line-height: env(preferred-text-scale, 2);
margin: env(safe-area-inset-top, 0) env(safe-area-inset-right, auto)
  env(safe-area-inset-bottom, 3em) env(safe-area-inset-left, auto);
```

The first argument is the [name of the environment variable](#browser_defined_environment_variables) to be substituted. The argument after the comma, if provided, is the fallback value, which is used if the environment variable referenced in the first argument does not exist. In these examples, if the `preferred-text-scale` environment variable doesn't exist in a browser, the {{cssxref("line-height")}} will be set to `2`. And, if the browser doesn't have `safe-area-inset-*` values, the {{cssxref("margin")}} will be set to `margin: 0 auto 3em auto`.

The syntax of the fallback is similar to the custom properties syntax in that it allows for multiple commas. Anything between the first comma and the end of the function is considered the fallback value. However, if the property value or descriptor doesn't support commas, the value is not valid.

If a property or descriptor contains syntactically valid `env()` functions, it is assumed to be valid at parse time. It is only syntax-checked at computed-time, after the `env()` functions have been substituted with their browser-provided values. If the environment variable passed as the first parameter is not a recognized environment variable name, the fallback value is used. The fallback can be another environment variable, even with its own fallback. If no fallback was provided, the property or descriptor containing the `env()` function is invalid at computed-value time.

## Using environment variables with `env()` example

We can use environment variables to ensure that a fixed app toolbar is not obscured by notifications appearing at the bottom of the device. In devices that display notifications at the bottom of the screen, the user agent will set the value of the `safe-area-inset-bottom` environment variable to be the distance from the top of what is blocking the viewport to the bottom of the viewport; in our example, this is likely the height of any visible notifications. On a rectangular desktop monitor, the `safe-area-inset-bottom` is generally `0`. We will use this value to create space at the bottom of the viewport for the notification to display without obscuring the content.

Our {{htmlelement("body")}} has two children; the {{htmlelement("main")}} contains our entire application other than the {{htmlelement("footer")}} toolbar.

```html
<body>
  <main>Application</main>
  <footer>Toolbar</footer>
</body>
```

The `<body>` is defined as a flex container that fills the height of the viewport. The `<main>` application is allowed to grow to fill any space not occupied by its sibling `<footer>`.

```css
body {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}

main {
  flex: 1;
  padding: 1em;
  overflow-y: auto;
}
```

The `<footer>` is positioned to be stuck to the bottom of the viewport. The declaration [`position: sticky`](/en-US/docs/Web/CSS/position#sticky) offsets the element relative to the `<body>` (its scrolling ancestor and [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block)), based on the {{cssxref("bottom")}} value of `0`. We give the `<footer>` a {{cssxref("padding")}} value of `1em` on all four sides. We then add the `safe-area-inset-bottom` value to the `1em` of bottom padding, with a fallback of `1em`.

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

The bottom padding of the footer will extend beyond `1em` on devices that have the `safe-area-inset-bottom` environment variable with a value greater than `0`. This CSS provides extra padding to grow the footer as needed, be it because of notifications, a device notch in the screen, or because the device doesn't have square corners.

{{EmbedLiveSample("Using environment variables with env example", "200", "500")}}

In the future, we may see support for developer-defined environment variables, but this has not yet been defined or implemented.

## See also

- {{cssxref("var")}}
- {{cssxref("@media/shape", "@media `shape` descriptor")}}
- [CSS environment_variables](/en-US/docs/Web/CSS/CSS_environment_variables) module
- [CSS round display](/en-US/docs/Web/CSS/CSS_round_display) module
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module
