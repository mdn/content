---
title: "`window-drag` CSS property"
short-title: window-drag
slug: Web/CSS/Reference/Properties/window-drag
page-type: css-property
browser-compat: css.properties.window-drag
sidebar: cssref
---

The **`window-drag`** [CSS](/en-US/docs/Web/CSS) property specifies elements that can be dragged to move the application window of an installed [progressive web app](/en-US/docs/Web/Progressive_web_apps) (PWA) with an active [window controls overlay](/en-US/docs/Web/API/Window_Controls_Overlay_API).

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

When a PWA is installed, it is possible to remove most of the application window titlebar to only leave the mandatory items such as the minimize and close buttons, then put custom web content into the freed up space. This is done by:

- Setting the [`display`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display) member of your [web app manifest](/en-US/docs/Web/Progressive_web_apps/Manifest) to a suitable value such as `standalone`.
- Opting in to displaying a [window controls overlay](/en-US/docs/Web/API/Window_Controls_Overlay_API) by including `window-controls-overlay` in the [`display_override`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) manifest member.
- Positioning and sizing the custom web content using the [`titlebar-area-*`](/en-US/docs/Web/CSS/Reference/Values/env#titlebar-area-x) {{cssxref("env")}} variables.

One remaining issue is that you will want to set the custom content so that you can drag appropriate sections to move the application window, which is expected behavior. This is achieved by setting the custom content's `window-drag` property to `move`, in which case a window move operation is performed and no events (for example pointer or mouse events) are fired during a dragging gesture on the content.

The `window-drag` property is inherited by default. Therefore, if you want to make certain child elements behave normally and not initiate a window move operation on drag, you must turn this behavior off by setting `window-drag` to `none`.

The `window-drag` property is a standardized version of the older, legacy `app-region` and `-webkit-app-region` properties. Sites still using the legacy properties are advised to switch usage to the standardized `window-drag` property for stability and interoperability between browsers.

> [!NOTE]
> The `app-region` property uses `drag` in place of `move` and `no-drag` in place of `none`.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### PWA custom draggable titlebar

Our [Custom titlebar example](https://mdn.github.io/pwa-examples/custom-titlebar/) ([source code](https://github.com/mdn/pwa-examples/tree/main/custom-titlebar)) demonstrates how create a custom draggable app titlebar. This displays as normal content when the app is being viewed in the browser, but fills the titlebar of the app when installed.

#### HTML

We have included a {{htmlelement("div")}} element containing some content for our titlebar. We've deliberately included some interactive content to give you an idea of what's possible.

```html
<div id="titlebar">
  <label for="super">Super</label>
  <input type="radio" id="super" name="superlative" value="super" checked />
  <label for="smashing">Smashing</label>
  <input type="radio" id="smashing" name="superlative" value="smashing" />
  <label for="great">Great</label>
  <input type="radio" id="great" name="superlative" value="great" />
</div>
```

#### Manifest

Inside the manifest, we've included the [`display`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display) member with a value of `standalone`, required for displaying a windows control overlay, and the [`display_override`](/en-US/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) member with a value of `["window-controls-overlay"]` to do the actual opt-in.

```json
{
  ...

  "display": "standalone",
  "display_override": ["window-controls-overlay"],

  ...
}
```

#### CSS

We set a {{cssxref("position")}} value of `fixed` on our titlebar `<div>` so that it will always stay fixed in position, even if there is enough content to scroll. We then position and size it using the [`titlebar-area-*`](/en-US/docs/Web/CSS/Reference/Values/env#titlebar-area-x) `env()` variables:

- {{cssxref("left")}} and {{cssxref("top")}} values of `titlebar-area-x` and `titlebar-area-y` to position its top-left corner at the top left of the app window titlebar area.
- {{cssxref("width")}} and {{cssxref("height")}} values of `titlebar-area-width` and `titlebar-area-height` to make it fill the window titlebar area.

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

We also include fallback values for the `env()` variables so the titlebar content displays across the top of the viewport in cases where the `titlebar-area-*` variables are not available, for example when the app is being viewed as a webpage.

Finally, we set the titlebar `<div>` element's `window-drag` property to `move` so that when the app is installed, you can drag the titlebar to move the app window. We also set the `window-drag` property back to `none` on the `<div>` element's children so that you can still use the form controls normally — we don't want the same dragging behavior when you try to interact with them.

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
