---
title: rotate
slug: Web/SVG/Reference/Attribute/rotate
page-type: svg-attribute
browser-compat:
  - svg.elements.animateMotion.rotate
  - svg.elements.text.rotate
sidebar: svgref
---

The `rotate` attribute has two different uses depending on the element it is applied to:

- On {{SVGElement("animateMotion")}}: specifies how the animated element rotates as it travels along a motion path.
- On {{SVGElement("text")}} and {{SVGElement("tspan")}}: specifies individual rotation for each glyph in the text element.

You can use this attribute with the following SVG elements:

- {{SVGElement("animateMotion")}}
- {{SVGElement("text")}}
- {{SVGElement("tspan")}}


## animateMotion

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <code>auto</code> | <code>auto-reverse</code> |
        {{cssxref("number")}}
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `auto` and `auto-reverse` values allow the animated element's rotation
to change dynamically as it travels along the path. If the value of `rotate`
is `auto`, the element turns to align its right-hand side in the current
direction of motion. If the value is `auto-reverse`, it turns its left-hand
side in the current direction of motion.

Setting `rotate`'s value to a number specifies a constant rotation, in
degrees, that does not change with the animation. The default value of `0`
keeps the animated element in its original orientation.

## text and tspan

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Value</th>
      <td>
        <a href="/en-US/docs/Web/SVG/Guides/Content_type#list-of-ts"
          >&#x3C;list-of-number></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Default value</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Animatable</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

A list of numbers (separated by spaces or commas), each specifying the
rotation in degrees to apply to the corresponding glyph. If there are
fewer numbers than glyphs, the last number is applied to all remaining
glyphs. If there are more numbers than glyphs, the extra numbers are ignored.



## Examples

### Rotation along a motion path (animateMotion)

#### SVG

```html
<svg
  width="400"
  height="120"
  viewBox="0 0 480 120"
  xmlns="http://www.w3.org/2000/svg">
  <!-- Draw the outline of the motion path in grey -->
  <path
    d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
    stroke="lightgrey"
    stroke-width="2"
    fill="none"
    id="theMotionPath" />

  <!-- Red arrow which will not rotate -->
  <path fill="red" d="M-5,-5 L10,0 -5,5 0,0 Z">
    <!-- Define the motion path animation -->
    <animateMotion dur="6s" repeatCount="indefinite" rotate="0">
      <mpath href="#theMotionPath" />
    </animateMotion>
  </path>

  <g transform="translate(100, 0)">
    <use href="#theMotionPath" />
    <!-- Green arrow which will rotate along the motion path -->
    <path fill="green" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- Define the motion path animation -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>

  <g transform="translate(200, 0)">
    <use href="#theMotionPath" />
    <!-- Blue arrow which will rotate backwards along the motion path -->
    <path fill="blue" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- Define the motion path animation -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="auto-reverse">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>

  <g transform="translate(300, 0)">
    <use href="#theMotionPath" />
    <!-- Purple arrow which will have a static rotation of 210 degrees -->
    <path fill="purple" d="M-5,-5 L10,0 -5,5 0,0 Z">
      <!-- Define the motion path animation -->
      <animateMotion dur="6s" repeatCount="indefinite" rotate="210">
        <mpath href="#theMotionPath" />
      </animateMotion>
    </path>
  </g>
</svg>
```

#### Result

{{EmbedLiveSample('Rotation_along_a_motion_path_animateMotion', '100%', 120)}}

### Per-glyph rotation (text)

#### SVG

```html
<svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
  <text x="20" y="50" font-size="28" rotate="0 15 30 45 60 75">
    Hello!
  </text>
</svg>
```
#### Result

{{EmbedLiveSample('Per-glyph_rotation_text', '100%', 80)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
