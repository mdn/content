---
title: Applying color to HTML elements using CSS
short-title: Applying color to HTML elements
slug: Web/CSS/CSS_colors/Applying_color
page-type: guide
---

{{CSSRef}}

With [CSS](/en-US/docs/Web/CSS), there are lots of ways to add color to your [HTML](/en-US/docs/Web/HTML) [elements](/en-US/docs/Web/HTML/Element) to create the look you want. This guide is a primer introducing how CSS can be used to apply colors to HTML elements. This guide includes [lists of the CSS properties that set color in their values](#properties_that_can_have_color) and how to use colors both [in stylesheets](#specifying_colors_as_values_in_stylesheets) and [in other ways](#other_ways_to_use_color).

> [!NOTE]
> It is important to [use colors wisely](/en-US/docs/Web/CSS/CSS_colors/Using_color_wisely). Always select appropriate colors, ensuring the contrast between text and the background is sufficient to ensure legibility, and always keep the needs of people with differing visual capabilities in mind.

To learn more about CSS colors as a data type, see the [CSS `<color>` data type](/en-US/docs/Web/CSS/color_value) reference and the [CSS color values guide](/en-US/docs/Web/CSS/CSS_colors/Color_values).

## Properties that can have color

At the element level, everything in HTML can have color applied to it. Let's look at the different items rendered on the page — such as text, borders, etc. We'll provide lists of the CSS properties that apply color to each.

At a fundamental level, the {{cssxref("color")}} property defines the foreground color of an HTML element's content and the {{cssxref("background-color")}} property defines the element's background color. These can be used on just about any element.

### Text

Whenever an element is rendered, these properties are used to determine the color of the text, its background, and any decorations on the text.

- {{cssxref("color")}}

  - : The color to use when drawing the text and any [text decorations](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (such as the addition of under- or overlines, strike-through lines, and so forth.

- {{cssxref("background-color")}}

  - : The text's background color.

- {{cssxref("text-shadow")}}

  - : Configures a shadow effect to apply to text. Among the options for the shadow is the shadow's base color (which is then blurred and blended with the background based on the other parameters). See [Text drop shadows](/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows) to learn more.

- {{cssxref("text-decoration-color")}}

  - : The default text decorations (such as underlines, strikethroughs, etc.) color is [`currentcolor`](/en-US/docs/Web/CSS/color_value#currentcolor_keyword). This keyword represents the current value of the `color` property. However, you can override that value and use a different color for them with the `text-decoration-color` property.

- {{cssxref("text-emphasis-color")}}

  - : The color to use when rendering emphasis symbols adjacent to each character in the text. This is used primarily when drawing text for East Asian languages.

- {{cssxref("caret-color")}}

  - : The color to use when drawing the {{Glossary("caret")}} (sometimes referred to as the text input cursor) within the element. This is only useful in elements that are editable, such as {{HTMLElement("input")}} and {{HTMLElement("textarea")}} or elements whose HTML [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute is set to `true`.

### Boxes

Every element is a box with some sort of content, and has a background and a border in addition to whatever contents the box may have.

- [Borders](#borders_2)

  - : See the [Borders](#borders_2) section for a list of the CSS properties you can use to set the colors of a box's borders.

- {{cssxref("background-color")}}

  - : The background color to use in areas of the element that have no foreground content.

- {{cssxref("box-shadow")}}

  - : Configures inset shadow and drop shadow effects on the box. Among the options for each shadow is the shadow's base color (which is then blurred and blended with any background based on the other parameters).

- {{cssxref("column-rule-color")}}

  - : The color to use when drawing the line separating columns of text when using [CSS multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout).

- {{cssxref("outline-color")}}

  - : The color to use when drawing an outline around the outside of the element. This outline is different from the border in that it doesn't get space set aside for it in the document. Outlines do not participate in the [box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model), overlapping other content. Outlines are generally used as focus indicators, indicating which element currently has focus and will receive keyboard input events.

### Borders

Any element can have a border drawn around it. A basic element border is a line drawn around the edges of the element's content. See [The box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model) to learn about the relationship between elements and their borders, and the article [Styling borders using CSS](/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) to learn more about applying styles to borders.

You can use the {{cssxref("border")}} shorthand property, which lets you configure everything about the border in one shot (including non-color features of borders, such as its [width](/en-US/docs/Web/CSS/border-width), [style](/en-US/docs/Web/CSS/border-style) (solid, dashed, etc.), and so forth.

- {{cssxref("border-color")}} shorthand

  - : Specifies a single color to use for every side of the element's border.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, and {{cssxref("border-bottom-color")}}

  - : Lets you set the color of the corresponding side of the element's border.

- {{cssxref("border-block-start-color")}} and {{cssxref("border-block-end-color")}}

  - : With these, you can set the color used to draw the borders which are closest to the start and end of the block the border surrounds. In a left-to-right writing mode (such as the way English is written), the block start border is the top edge and the block end is the bottom. This differs from the inline start and end, which are the left and right edges (corresponding to where each line of text in the box begins and ends).

- {{cssxref("border-inline-start-color")}} and {{cssxref("border-inline-end-color")}}

  - : These let you color the edges of the border closest to the beginning and the end of the start of lines of text within the box. Which side this is will vary depending on the {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}} properties, which are typically (but not always) used to adjust text directionality based on the language being displayed. For example, if the box's text is being rendered right-to-left, then the `border-inline-start-color` is applied to the right side of the border.

## Specifying colors as values in stylesheets

Now that you know which [CSS properties let you apply color to elements](#properties_that_can_have_color), you can start adding colors to your websites. Let's look at some examples of using color within a {{Glossary("stylesheet")}}. In this example, we use several previously mentioned properties, with the concept of applying colors in CSS being the same no matter the property.

Let's look at the result first, before going on to look at the code we need to create it:

{{EmbedLiveSample("Specifying colors as values in stylesheets", 650, 150)}}

### HTML

The HTML responsible for creating the above example is shown here:

```html
<div class="wrapper">
  <div class="boxLeft">
    <p>This is the first box.</p>
  </div>
  <div class="boxRight">
    <p>This is the second box.</p>
  </div>
</div>
```

Here we have a wrapper {{HTMLElement("div")}} containing two child `<div>`s, each with a single child paragraph ({{HTMLElement("p")}}). Each content `<div>` is given a different look and feel.

### CSS

Let's look at the CSS that creates the above result a piece at a time.

> [!NOTE]
> We are using multiple [different CSS color value types](/en-US/docs/Web/CSS/CSS_colors/Color_values) in this example to demonstrate their use. This is not recommended for production code. When writing CSS, use the most intuitive value type for you and your team.

```css
.wrapper {
  height: 110px;
  padding: 10px;
  display: flex;
  gap: 10px;
  text-align: center;
  font:
    28px "Marker Felt",
    "Zapfino",
    cursive;
  border: 6px solid mediumturquoise;
}

div {
  flex: 1;
}
```

The `.wrapper` class is used to assign styles to the {{HTMLElement("div")}} that encloses all of our other content. This establishes the height of the container using {{cssxref("height")}}, allowing the width of this block-level element to default to 100% of its parent. Setting the {{cssxref("display")}} to `flex` and adding a `10px` {{cssxref("gap")}} creates a flex container to lay out the children side by side with a gap between all the container's children. We use {{cssxref("flex")}} to let the flex children grow to fill the container; it doesn't effect the flex container itself.

Of more interest to our discussion here is the use of the {{cssxref("border")}} property to establish a border around the outside edge of the element. This border is a solid line, 6 pixels wide, in the [named color](/en-US/docs/Web/CSS/named-color) `mediumturquoise`.

Within our wrapper, we have a left box and a right box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

The `.boxLeft` class, used to style the box on the left, sets up the color of the background and the outline:

- The box's background color is set by changing the value of the CSS {{cssxref("background-color")}} property to `rgb(245 130 130)`, using the {{CSSXref("color_value/rgb", "rgb()")}} functional notation.
- An outline is defined for the box. Unlike the more commonly used {{cssxref("border")}}, {{cssxref("outline")}} doesn't affect layout at all; it draws over the top of whatever may happen to be outside the element's box instead of making room as `border` does. This outline is a solid, dark red line that's two pixels thick. Note the use of the `darkred` keyword when specifying the color.
- Notice that we're not explicitly setting the text color. That means the value of {{cssxref("color")}} will be inherited from the nearest containing element that defines it. By default, that's black.

```css
.boxRight {
  background-color: hwb(270deg 63% 13%);
  outline: 4px dashed #6e1478;
  color: hsl(0deg 100% 100%);
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: #8f8;
  text-decoration: underline wavy #8f8;
  text-shadow: 2px 2px 3px black;
}
```

> [!NOTE]
> We included the `text-decoration-*` styles separately because Safari doesn't support {{cssxref("text-decoration")}} as a shorthand property.

Finally, the `.boxRight` class sets several styles on the box that's drawn to the right. Then the following colors are established (using five different ways of declaring [color values](/en-US/docs/Web/CSS/CSS_colors/Color_values)):

- The `background-color` is set using {{CSSXref("color_value/hwb", "hwb()")}} functional notation — `hwb(270deg 63% 13%)`. This is a medium purple color.
- The box's `outline` is used to specify that the box should be enclosed in a four-pixel thick dashed line whose color is a somewhat deeper purple using the six-digit {{cssxref("hex-color")}} `#6e1478`.
- The foreground (text) color is specified by setting the {{cssxref("color")}} property using {{CSSXref("color_value/hsl", "hsl()")}} functional notation — `hsl(0deg 100% 100%)`. This is one of many ways to specify the color white.
- We add a green wavy line under the text with the {{cssxref("text-decoration")}} shorthand, along with the longhand component for browser compatibility. We used the 3-digit {{cssxref("hex-color")}} `#8f8`, which is the equivalent of `#88ff88`.
- Finally, a bit of a shadow is added to the text using {{cssxref("text-shadow")}}. Its `color` parameter is set to `black`, a {{cssxref("named-color")}} value.

We used five different color syntaxes to demonstrate what is possible. In the real world, you and your team will preferably pick a preferred color notation, with everyone working on a code base using the same color syntax.

## Other ways to use color

CSS isn't the only web technology that supports color. Other examples include:

- The HTML [Canvas API](/en-US/docs/Web/API/Canvas_API)
  - : Lets you draw 2D bitmapped graphics in a {{HTMLElement("canvas")}} element. See our [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial) to learn more.
- [SVG](/en-US/docs/Web/SVG) (Scalable Vector Graphics)
  - : Lets you create images using commands that draw specific shapes, patterns, and lines. SVG commands are formatted as XML, and can be embedded directly into a web page or placed in the page using the {{HTMLElement("img")}} element, just like any other type of image.
- [WebGL](/en-US/docs/Web/API/WebGL_API)
  - : The Web Graphics Library is an OpenGL ES-based API for drawing high-performance 2D and 3D graphics on the Web. See our [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial) to find out more. Also see [WebGPU](/en-US/docs/Web/API/WebGPU_API), a successor to WebGL for modern GPUs.

> [!NOTE]
> A few now obsolete HTML attributes accepted colors as values, such as `bgcolor` and `vlink`. These attributes only accepted {{cssxref("named-color")}} and three- or six-digit {{cssxref("hex-color")}} values.

## See also

- [`<color>`](/en-US/docs/Web/CSS/color_value) data type
- [CSS color values](/en-US/docs/Web/CSS/CSS_colors/Color_values) guide
- [Using color wisely](/en-US/docs/Web/CSS/CSS_colors/Using_color_wisely)
- [CSS color module](/en-US/docs/Web/CSS/CSS_colors)
- [Drawing graphics](/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
