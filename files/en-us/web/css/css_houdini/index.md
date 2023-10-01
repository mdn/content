---
title: CSS Houdini
slug: Web/CSS/CSS_Houdini
page-type: guide
status:
  - experimental
---

{{CSSRef}}

**CSS Houdini** is a set of APIs that expose parts of the CSS engine. This makes it easier for developers to create extensions for CSS. These extensions might be to polyfill features that are not yet available in a browser, experiment with new ways of doing layout, or add creative borders or other effects.

While many Houdini examples showcase the creative possibilities of the APIs, there are many practical use cases. For example, you can use Houdini to create advanced custom properties with type checking and default values.

## Basic example

A regular [CSS custom property](/en-US/docs/Web/CSS/--*) consists of a property name and a value. Therefore I might create a custom property called `--background-color` and expect it to be given a color value. The value is then used in the CSS as if it were the color value.

```css
:root {
  --background-color: blue;
}

.box {
  background-color: var(--background-color);
}
```

In the above example however, there is nothing to stop someone using some other value for this property, perhaps setting it to a length. Having done so, anywhere that the property is used would have no background color as `background-color: 12px` is not valid. When browsers come across CSS they don't recognize as valid they throw that line away.

Using {{cssxref("@property")}} however, we can declare the custom property with a {{CSSxRef("@property/syntax","syntax")}} of `<color>`. This shows that we need this property to have a value which is a valid color.

```css
@property --background-color {
  syntax: "<color>";
  inherits: false;
  initial-value: blue;
}
```

## Houdini worklets

A feature of Houdini is the {{domxref("Worklet")}}. A worklet is a module, written in JavaScript, that extends CSS using one of the Houdini APIs. You can see an example worklet on the {{domxref("PaintWorkletGlobalScope.registerPaint()")}} page. Once a worklet has been registered you can use it in CSS just like any other value. This means that even if you are not a JavaScript developer, you can access Houdini APIs by using worklets other people have created.

The [Houdini.how](https://houdini.how/) website has a number of worklets that you can try on your own site.

## Reference

### CSS at-rule and descriptors

The {{CSSxRef("@property")}} at-rule allows you to register an advanced custom property.

- {{CSSxRef("@property")}}
- {{CSSxRef("@property/inherits","inherits")}}
- {{CSSxRef("@property/initial-value","initial-value")}}
- {{CSSxRef("@property/syntax","syntax")}}

### Houdini API references

- [CSS Properties and Values API](/en-US/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- {{domxref("Worklet")}} reference

### Houdini guides

- [Properties and Values API Guide](/en-US/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [Typed OM API Guide](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [Using the CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API/Guide)

## External resources

- [Interactive introduction to Houdini](https://houdini.glitch.me/)
- [A Practical Overview of CSS Houdini](https://www.smashingmagazine.com/2020/03/practical-overview-css-houdini/)
- [Smarter custom properties with Houdini's new API](https://web.dev/css-props-and-vals/)
