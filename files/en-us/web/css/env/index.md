---
title: env()
slug: Web/CSS/env
page-type: css-function
browser-compat: css.types.env
sidebar: cssref
---

The **`env()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) is used to insert the value of a user-agent-defined environment variable into your CSS.

## Syntax

```css
/* Using environment variables with no fallback values */
env(safe-area-inset-top);
env(titlebar-area-width);
env(viewport-segment-right 0 0);

/* Using them with fallback values */
env(safe-area-inset-right, 1em);
env(titlebar-area-y, 40px);
env(viewport-segment-width 0 0, 40%);
```

### Parameters

The `env()` function takes two parameters — an identifying name for the variable to be accessed (sometimes with additional identifying values) and a fallback value:

- Identifying names
  - : A {{cssxref("&lt;custom-ident>")}} representing a variable name. The valid identifying names are as follows. Unlike other CSS properties, user-agent-defined property names are case-sensitive.
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : The `safe-area-inset-*` variables are four environment variables that define a rectangle by its top, right, bottom, and left insets from the edge of the viewport, which is safe to put content into without risking it being cut off by the shape of a non‑rectangular display. For rectangular viewports, like your average laptop monitor, their value is equal to zero. For non-rectangular displays — like a round watch face — the four values set by the user agent form a rectangle such that all content inside the rectangle is visible.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : The safe area maximum inset environment variables represent the static maximum value of their dynamic `safe-area-inset-*` variable counterpart.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : The `titlebar-area-*` variables are useful for PWA installed on Desktop devices. When a desktop PWA uses the `window-controls-overlay` [display_override](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) value, then it can use the `titlebar-area-*` variables to make sure content doesn't overlap with the window control buttons (i.e., minimize, maximize, and close).
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : The `keyboard-inset-*` variables provide information about the on-screen virtual keyboard's appearance. They define a rectangle by its top, right, bottom, and left insets from the edge of the viewport (the width and height insets are calculated from the other insets). To learn more, see the {{domxref("VirtualKeyboard API", "VirtualKeyboard API", "", "nocode")}}.
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : The `viewport-segment-*` variables provide information about the logical viewport segments that comprise the current device's viewport, in the case of foldable of hinged devices. This includes a segment's width and height, and the offset positions of its top, right, bottom, and left edges. These variables are related to the [Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API), which can be used to create responsive designs that work well on foldable or hinged devices.
        > [!NOTE]
        > The viewport segment variables need to have two additional integers specified, which define the segment for which to return the value. See [Placing content inside specific viewport segments](#placing_content_inside_specific_viewport_segments) for details.
- Fallback value
  - : A {{cssxref("&lt;length-percentage>")}} specifying the value to return if the specified environment variable name/data is invalid or unavailable.

### Return value

A {{cssxref("&lt;length-percentage>")}}.

## Formal syntax

{{CSSSyntax}}

## Description

Environment variables are declared in CSS using the `env()` function, in a similar fashion to the {{cssxref("var", "var()")}} function and [custom properties](/en-US/docs/Web/CSS/--*). The difference is that, as well as being user-agent-defined rather than author-defined, environment variables are globally scoped to a document, whereas custom properties are scoped to the element(s) on which they are declared.

In addition, unlike custom properties, which cannot be used outside of declarations, the `env()` function can be used in place of any part of a property value, or any part of a descriptor (for example, in [Media query rules](/en-US/docs/Web/CSS/@media)). As the spec evolves, it may also be usable in other places such as selectors.

### Placing content in a safe content area

Originally provided by the iOS Safari browser to allow developers to place their content in a safe area of the viewport, the `safe-area-inset-*` variables can be used to help ensure content is visible even to viewers using non‑rectangular displays.

For example, a common issue solved by these variables is that of device notifications covering up some of the app user interface. By positioning fixed elements using `env()` you can ensure that they display in a safe area of the viewport.

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

### Placing PWA content away from window control buttons

Another use case for `env()` variables is for desktop [Progressive web apps](/en-US/docs/Web/Progressive_web_apps) (PWAs) that use the Window Controls Overlay feature to take advantage of the full application window surface area. Using `titlebar-area-*` variables, you can position elements where the title bar would have been and ensure that content stays clear of the window control buttons.

### Placing content inside specific viewport segments

When a `viewport-segment-*` variable is accessed, the {{cssxref("env()")}} function has to be passed the name of the variable plus two extra arguments, which indicate the segment to return the value for. For example:

```css
/* Return the width of the top/left segment */
env(viewport-segment-width 0 0)

/* Return the width of the right segment */
env(viewport-segment-width 1 0)

/* Return the width of the bottom segment */
env(viewport-segment-width 0 1)
```

The values are both integers of `0` or greater. The first value represents the horizontal index value of the segment, and the second value represents the vertical index value of the segment:

![Two device segment layouts; in a horizontal layout, 0 0 is the first segment and 1 0 is the second segment. In a vertical layout, the indices are 0 0 and 0 1](env-var-indices.png)

- In a horizontal side-by-side layout, the left segment is represented by `0 0`, and the right segment is represented by `1 0`.
- In a vertical top-to-bottom layout, the top segment is represented by `0 0`, and the bottom segment is represented by `0 1`.
- In theoretical future devices that have more than 2 segments, the numbers could be greater. Imagine a device with 9 screens representing different viewport segments arranged in a 3x3 grid. The middle segment would be represented by `1 1`, and the bottom-right segment would be represented by `2 2`.

In a layout, you can use these variables to set your containers to fit neatly into the available segments. For example:

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  .list-view {
    width: env(viewport-segment-width 0 0);
  }

  .fold {
    width: calc(
      env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)
    );
    height: 100%;
  }

  .detail-view {
    width: env(viewport-segment-width 1 0);
  }
}
```

Here, we are setting the outer wrapper to have a horizontal flexbox layout when the viewport segments are laid out horizontally (as determined by the {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` feature). We then set the left container to have a width equal to the left segment width, and the right container to have a width equal to the right segment width. To calculate how much width the fold takes up in between the two, we subtract the left edge offset of the right container from the right edge offset of the left container.

See our [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segment-api/) for a full working demo ([source code](https://github.com/mdn/dom-examples/tree/main/viewport-segment-api)). Also check out [Using the Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API/Using) for a full demo explanation.

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("var", "var(…)")}}
- [CSS custom properties for cascading variables](/en-US/docs/Web/CSS/CSS_cascading_variables) module
- [Custom properties (`--*`): CSS variables](/en-US/docs/Web/CSS/--*)
- [Using CSS custom properties (variables)](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Viewport segments API](/en-US/docs/Web/API/Viewport_segments_API)
- [Customize the window controls overlay of your PWA's title bar](https://web.dev/articles/window-controls-overlay)
- [Display content in the title bar](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
