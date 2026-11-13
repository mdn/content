---
title: "`window-drag` CSS property"
short-title: window-drag
slug: Web/CSS/Reference/Properties/window-drag
page-type: css-property
browser-compat: css.properties.window-drag
sidebar: cssref
---

The **`window-drag`** [CSS](/en-US/docs/Web/CSS) property specifies which containers displayed in the application window of an installed [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA) can be dragged to move the window around the desktop. This property is only usable within installed PWAs with an active window controls overlay.

## Syntax

```css
/* Keyword values */
window-drag: none;
window-drag: move;

/* Global values */
window-drag: inherit;
window-drag: initial;
window-drag: revert;
window-drag: revert-layer;
window-drag: unset;
```

### Values

This property is specified as one of the following keyword values:

- `none`
  - : The default value. Selected elements are not window drag areas.
- `move`
  - : Selected elements are window drag areas.

## Description

When a PWA is installed, it is possible to replace most of the application window's title bar with extra viewport space, leaving the mandatory control buttons — such as maximize, minimize, and close — contained in a [window controls overlay](/en-US/docs/Web/API/Window_Controls_Overlay_API). You can then place web content into the additional space.

These actions are achieved by:

- Setting the [`display`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display) member of your [web app manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) to a value such as `standalone` that will cause the installed PWA to open in a standalone app window.
- Including the [`display_override`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) manifest member with a value of `["window-controls-overlay"]` to opt in to displaying a [window controls overlay](/en-US/docs/Web/API/Window_Controls_Overlay_API).
- Using the [`titlebar-area-*`](/en-US/docs/Web/CSS/Reference/Values/env#titlebar-area-x) {{cssxref("env")}} variables to position and size the custom web content.

With an active window controls overlay, there is significantly less title bar space that can be dragged to move the app window around the desktop. To fix this problem, you can specify elements inside the app UI that can be dragged to move the app window. Set the elements' `window-drag` property to `move` to achieve this. The result is that, during a dragging gesture on this content, a window move operation is performed and no events (for example, pointer or mouse events) are fired.

The `window-drag` property is inherited by default. To ensure child elements behave normally and don't initiate window move operations on drag, disable the drag behavior on nested elements by setting `window-drag` to `none`.

> [!NOTE]
> The `window-drag` property is a standardized version of the legacy, non-standard `app-region`, `-webkit-app-region`, and `-moz-window-dragging` properties. Use the standard `window-drag` property for stability and browser interoperability.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### PWA custom draggable title bar

This example demonstrates how to create a draggable app title bar that is displayed as normal content when viewed in a browser, but fills the title bar when installed on the user's device. The live [custom title bar demo](https://mdn.github.io/pwa-examples/custom-titlebar/) ([source code](https://github.com/mdn/pwa-examples/tree/main/custom-titlebar)) are both available on GitHub.

#### HTML

We have included a {{htmlelement("header")}} element containing some content for our title bar. We've deliberately included some interactive content to give you an idea of what's possible.

```html
<header id="titlebar">
  <label for="super">Super</label>
  <input type="radio" id="super" name="superlative" value="super" checked />
  <label for="smashing">Smashing</label>
  <input type="radio" id="smashing" name="superlative" value="smashing" />
  <label for="great">Great</label>
  <input type="radio" id="great" name="superlative" value="great" />
</header>
```

#### Manifest

Inside the manifest, we've included the [`display`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display) member with a value of `standalone`, required for displaying a windows control overlay, and the [`display_override`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) member with a value of `["window-controls-overlay"]` to opt-in to displaying the window controls overlay.

```json
{
  ...

  "display": "standalone",
  "display_override": ["window-controls-overlay"],

  ...
}
```

#### CSS

We set a {{cssxref("position")}} value of `fixed` on our title bar `<div>` so that it will always stay fixed in position, even if there is enough content to scroll. We then position and size it using the [`titlebar-area-*`](/en-US/docs/Web/CSS/Reference/Values/env#titlebar-area-x) `env()` variables:

- {{cssxref("left")}} and {{cssxref("top")}} values of `titlebar-area-x` and `titlebar-area-y` to position its top-left corner at the top left of the app window title bar area.
- {{cssxref("width")}} and {{cssxref("height")}} values of `titlebar-area-width` and `titlebar-area-height` to make it fill the window title bar area.

```css
#titlebar {
  ...

  position: fixed;
  left: env(titlebar-area-x, 0);
  top: env(titlebar-area-y, 0);
  width: env(titlebar-area-width, 100%);
  height: env(titlebar-area-height, 33px);
}
```

We also include fallback values for the `env()` variables so the title bar content displays across the top of the viewport in cases where the `titlebar-area-*` variables are not available, for example when the app is being viewed as a webpage.

Finally, we set the titlebar `<div>` element's `window-drag` property to `move` so that when the app is installed, you can drag the title bar to move the app window. We also set the `window-drag` property back to `none` on the `<div>` element's children so that you can still use the form controls normally — we don't want the same dragging behavior when you try to interact with them.

```css
#titlebar {
  window-drag: move;
}

#titlebar * {
  window-drag: none;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`display`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display) manifest member
- [`display_override`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) manifest member
- [`titlebar-area-*`](/en-US/docs/Web/CSS/Reference/Values/env#titlebar-area-x) {{cssxref("env")}} variables
- [Window controls overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API)
