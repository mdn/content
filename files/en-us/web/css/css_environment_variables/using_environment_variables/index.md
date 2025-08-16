---
title: Using environment variables
slug: Web/CSS/CSS_cascade/CSS_environment_variables/Using_environment_variables
page-type: guide
sidebar: cssref
---

The [CSS environment variables module](/en-US/docs/Web/CSS/css_environment_variables) introduces the concept of environment variables in CSS and defines the {{cssxref("env")}} function to enable using environment variables. In this guide, we look at what environment variables are, the environment variables defined by the browser, and how to use them.

## What are environment variables

CSS environment variables are global variables; globally scoped to the entire document. They are either defined by the user agent or by the developer. The environment variables set by the user agent are special values provided by the browser or operating system that help your styles adapt to the user's device or context. However they are defined, they are accessed using the `env()` function.

Environment variables work similarly to [custom properties](/en-US/docs/Web/CSS/--*) and the {{cssxref("var")}} function, but are globally defined and scoped. This means they are always scoped to the entire document, unlike custom properties, which are scoped to elements and are mutable.

Similar to custom properties, environment varialbes are case sensitive. Unlike custom properties, which cannot be used outside of declarations, the `env()` function can be used in place of any part of a property value, or any part of a descriptor (e.g., in [Media query rules](/en-US/docs/Web/CSS/@media)).

The environment variables were first introduced by Apple in the iOS Safari browser to enable developers to work around what otherwise would have been limitation to their device viewports which were no longer perfect, unencumbered rectangles. The goal was to handle device-specific quirks that impact the viewport, like notches and curved edges. The original environment variables enabled developers to place content in a safe area of the viewport. The browser defined variables provided in the CSS environment variable module, mean `safe-area-inset-*` values can be used in all browsers on all devices to help ensure content is visible even to viewers on their non‑rectangular displays.

Other common issues that can be solved by using environment variables include device notifications covering up sections of the app user interface, handling the viewport size changes when dynamic keyboards are displayed and removed, and, especially for desktop [Progressive web apps](/en-US/docs/Web/Progressive_web_apps) (PWAs), position elements where the title bar would have been and ensure that content stays clear of the window control buttons.

### Browser defined variables

The CSS environment variables specification defines a few case-sensitive variables, including:

- `preferred-text-scale`
  -: The `preferred-text-scale` environment variable represents the user's preferred text scale factor. This is the adjustment made to the "default" font size of the operating system or user agent. On devices and browsers where {{cssxref("text-size-adjust")}} has an effect, this is the scale factor applied by `text-size-adjust: auto.` For example, if `text-size-adjust:auto` would cause the text size to double, then `env(preferred-text-scale)` would resolve to `2`.

- `safe-area-inset-*`
  - : The four safe area inset environment variables - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left` - define a rectangle by its top, right, bottom, and left insets from the edge of the viewport. This is where it is safe to put content without risking having it be cut off by the shape of a non‑rectangular display. For rectangular, unobstructed viewports, such as the regular desktop and laptop monitors, these four values are all equal to `0`. For non-rectangular displays — including rounded corner devices with full-size screens and rounded or [round-display](/en-US/docs/Web/CSS/CSS_round_display) smart watches — these four values, set by the user agent, form a rectangle such that all content inside the rectangle is visible and unobstructed.

- `safe-area-max-inset-*`
  - : The four safe area maximum inset environment variables - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left` - represent the static maximum value of their dynamic `safe-area-inset-*` variable counterpart. On some platforms, the `safe-area-inset-*` values can change dynamically while scrolling. For example, there may be a button bar displayed when scrolling up or down. While the `safe-area-inset-*` values change as the currently visible content area changes, the `safe-area-max-inset-*` are static, representing the maximum value of their dynamic counterpart when all dynamic user interface features are retracted, making the layout viewport size the large viewport size.

- `viewport-segment-*`
  - : Only relevant to devices that have multiple segments, such as foldable phones, the `viewport-segment-bottom`, `viewport-segment-left`, `viewport-segment-right`, and `viewport-segment-top` along with the `viewport-segment-height` and `viewport-segment-width` define the position and dimensions of a logically separated regions of the viewport. These variables are only defined if the viewport is divided into at least two segments. They are used to support multi-segment devices when [viewport units](/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport) are being used for single-segment devices.

Other specifications define additional environment variables.

The [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API) defines the {{domxref("WindowControlsOverlay")}} interface, which exposes information about the geometry
of the title bar area in {{glossary("progressive web applications")}} (PWAs) installed on desktop devices. when using the `window-controls-overlay` [display_override](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) value:

- `titlebar-area-*`
  - : The `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height` variables define the area that would generally be occupied by the title bar in an installed web application running on a desktop environment. Use the `titlebar-area-*` variables to make sure content doesn't overlap with the window control buttons (i.e., minimize, maximize, and close).

- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : The `keyboard-inset-*` variables provide information about the on-screen virtual keyboard's appearance. They define a rectangle by its top, right, bottom, and left insets from the edge of the viewport (the width and height insets are calculated from the other insets). To learn more, see the {{domxref("VirtualKeyboard API", "VirtualKeyboard API", "", "nocode")}}.

You may have notices that all the previous variable names include the physical terms of left, right, top, bottom, height, and width. As the variable names refer to the physical properties of device hardware, the writing mode of the website displayed is not the issue.

## Formal syntax

{{CSSSyntax}}

## Usage

To tell the browser to use the whole available space on the screen, and so enabling us to use the `env()` variables, we need to add a new viewport meta value:

```html
<meta name="viewport" content="viewport-fit=cover" />
```

You can then use `env()` in your CSS:

```css
body {
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px);
}
```

Positioning a div on the title bar area

.titleBar {
position: fixed;
left: env(titlebar-area-x, 0);
top: env(titlebar-area-y, 0);
width: env(titlebar-area-width, 100%);
height: env(titlebar-area-height, 40px);
app-region: drag;
}

## Examples

### Using env() to ensure buttons are not obscured by device UI

In the following example `env()` is used to ensure that fixed app toolbar buttons are not obscured by device notifications appearing at the bottom of the screen. On the desktop `safe-area-inset-bottom` is `0`. However, in devices that display notifications at the bottom of the screen, such as iOS, it contains a value that leaves space for the notification to display. This can then be used in the value for {{cssxref("padding-bottom")}} to create a gap that appears natural on that device.

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font: 1em system-ui;
}

main {
  flex: 1;
  background-color: #eee;
  padding: 1em;
}

footer {
  flex: none;
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
  background: black;
  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
  /* adds the safe-area-inset-bottom value to the initial 1em of padding.
  a larger black area will display for a device that has a positive value for this variable. */
  position: sticky;
  bottom: 0;
}

button {
  padding: 1em;
  background: white;
  color: black;
  margin: 0;
  width: 100%;
  border: none;
  font: 1em system-ui;
}
```

{{EmbedLiveSample("Using_env_to_ensure_buttons_are_not_obscured_by_device_UI", "200px", "500px")}}

### Using the fallback value

The below example makes use of the optional second parameter of `env()`, which allows you to provide a fallback value in case the environment variable is not available.

```html
<p>
  If the <code>env()</code> function is supported in your browser, this
  paragraph's text will have 50px of padding between it and the left border —
  but not the top, right and bottom. This is because the accompanying CSS is the
  equivalent of <code>padding: 0 0 0 50px</code>, because, unlike other CSS
  properties, user agent property names are case-sensitive.
</p>
```

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

{{EmbedLiveSample("Using_the_fallback_value", "350px", "250px")}}

### Example values

```css
/* zero for all rectangular user agents */
padding: env(safe-area-inset-bottom, 50px);

/* 50px because UA properties are case sensitive */
padding: env(Safe-area-inset-bottom, 50px);

/* as if padding: '50px 20px' were set because x is not a valid environment variable */
padding: env(x, 50px 20px);

/* ignored because '50px, 20px' is not a valid padding value and x is not a valid environment variable */
padding: env(x, 50px, 20px);
```

The syntax of the fallback, like that of custom properties, allows commas. But, if the property value doesn't support commas, the value is not valid.

> [!NOTE]
> User agent properties are not reset by the [all](/en-US/docs/Web/CSS/all) property.

### Using env() to ensure content is not obscured by window control buttons in desktop PWAs

In the following example `env()` ensures that content displayed in a desktop Progressive Web App that uses the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API) is not obscured by the operating system's window control buttons. The `titlebar-area-*` values define a rectangle where the title bar would normally have been displayed. On devices that do not support the Window Controls Overlay feature, such as mobile devices, the fallback values are used.

Here is what a PWA installed on a desktop device normally looks like:

![Illustration of what a PWA installed on desktop normally looks like, with window control buttons, a title bar, and web content below that](desktop-pwa-window.png)

With the Window Controls Overlay feature, the web content covers the whole app window surface area, with the window controls and PWA buttons displayed as overlays:

![Illustration of what a PWA installed on desktop looks like with the Window Controls Overlay feature, with window control buttons, no title bar, and web content spanning the whole window](desktop-pwa-window-wco.png)

```html
<header>Title of the app here</header>
<main>Main content of app here</main>
```

```css
header {
  position: fixed;
  left: env(titlebar-area-x);
  top: env(titlebar-area-y);
  width: env(titlebar-area-width);
  height: env(titlebar-area-height);
}

main {
  margin-top: env(titlebar-area-height);
}
```

> [!NOTE]
> Using `position:fixed` makes sure the header does not scroll with the rest of the content, and instead stays aligned with the window control buttons, even on device/browsers that support elastic overscroll (also known as rubber banding).

## See also

- {{CSSxRef("var", "var(…)")}}
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module
- {{cssxref("@media/shape", "@media `shape` descriptor)}}
- [CSS round display]((/en-US/docs/Web/CSS/CSS_round_display) module

desktop [Progressive web apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) that use the [Window Controls Overlay](/en-US/docs/Web/API/Window_Controls_Overlay_API) feature to take advantage of the full application window surface area. Using the `titlebar-area-*` values, they can position elements where the title bar would have been and ensure that content stays clear of the window control buttons.By positioning fixed elements using `env()` you can ensure that they display in a safe area of the viewport.

Another use case for `env()` variables is for

The safe area insets define a rectangle by its insets from the edges of the viewport, which define a rectangle for displays that are non-rectangular. You can include the user-agent sizes in your styles, enabling you to modify the layout of essential content based on the available space inside the safe area rectangle, next to an visible dynamic keyboard, and adjacent to a visible title bar.
