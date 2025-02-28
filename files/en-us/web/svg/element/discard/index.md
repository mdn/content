---
title: <discard>
slug: Web/SVG/Element/discard
page-type: svg-element
browser-compat: svg.elements.discard
---

{{SVGRef}}

The **`<discard>`** [SVG](/en-US/docs/Web/SVG) element may be used to specify the time at which a particular element should be removed from the DOM.
This allows an SVG viewer to conserve memory by discarding elements that are no longer needed, such as animated elements that have completed.

The operation removes the target element and all its children, and then the `<discard>` element itself (this happens even if the target element was invalid).

The [`begin`](#begin) attribute is used to specify the trigger point at which the `<discard>` element becomes active, and its associated element is discarded.
This is commonly an [`offset-value`](/en-US/docs/Web/SVG/Attribute/begin#offset-value) relative to when the SVG file was loaded into the DOM, but it may take other values.

The element that is to be removed from the DOM is specified using the [`href`](#href) attribute.
If not specified the immediate parent of the `<discard>` element is removed.

`<discard>` may be used in all the same places as the {{SVGElement('animate')}} element.
Authors should set the `playbackorder` attribute to `forwardonly` when using this element, as elements are not re-added if the user seeks backwards in the timeline.

## Example

This is a slightly reduced version of the example in the specification.
It defines an ellipse that is animated to move from the top of the view to the bottom, starting at 0 seconds after the SVG is loaded with a duration of 2 seconds, and a triangle (polygon) that is animated to move diagonally across the view starting second 1 after loading with a duration of 3 seconds.

The ellipse animates off screen and is no longer needed 2 seconds after loading.
The discard element is used to specify that it should be deleted at this point (`<discard begin="2s" />`).
Note that the target isn't explicitly specified, so the parent ellipse element is removed.
The polygon element similarly set to be discarded after 4 seconds.

Note that `playbackorder="forwardonly"` is set for the SVG!

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html hidden
<button id="reset" type="button">Reset</button>
```

```js hidden
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
```

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="352"
  height="240"
  playbackorder="forwardonly">
  <ellipse
    cx="98.5"
    cy="17.5"
    rx="20.5"
    ry="17.5"
    fill="blue"
    stroke="black"
    transform="translate(9 252) translate(3 -296)">
    <animateTransform
      attributeName="transform"
      begin="0s"
      dur="2s"
      fill="remove"
      calcMode="linear"
      type="translate"
      additive="sum"
      from="0 0"
      to="-18 305" />
    <discard begin="2s" />
  </ellipse>

  <polygon
    points="-66,83.5814 -43,123.419 -89,123.419"
    fill="green"
    stroke="black"
    transform="matrix(1 0 0 1.1798 0 -18.6096)">
    <animateTransform
      attributeName="transform"
      begin="1s"
      dur="3s"
      fill="remove"
      calcMode="linear"
      type="translate"
      additive="sum"
      from="-100 -200"
      to="460 50" />
    <discard begin="4s" />
  </polygon>
</svg>
```

{{EmbedLiveSample('Example', '100%', '250px')}}

## Attributes

- {{SVGAttr("begin")}}

  - : The trigger that causes the `<discard>` element to become active, at which point the associated element should be discarded.
    This is commonly the time since the SVG was loaded.
    _Value type_: [**\<begin-value-list>**](/en-US/docs/Web/SVG/Attribute/begin#animate_animatemotion_animatetransform_set).
    _Default value_: `0`; _Animatable_: **no**

- {{SVGAttr("href")}}

  - : An URL reference for the target element to discard.
    This has the same requirements as [`href` on animation elements](/en-US/docs/Web/SVG/Attribute/href#animate_animatemotion_animatetransform_set), and can be another `<discard>` element.
    If not defined, the target element is the immediate parent of the `<discard>` element.

    Note that if the target element is not part of the current SVG document fragment, whether or not it is discarded depends on the target language.

    _Default value_: `none`; _Animatable_: **no**

## Usage context

{{svginfo}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
