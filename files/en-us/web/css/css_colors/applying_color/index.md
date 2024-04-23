---
title: Applying color to HTML elements using CSS
short-title: Applying color to HTML elements
slug: Web/CSS/CSS_colors/Applying_color
page-type: guide
---

{{CSSRef}}

This guide is a primer introducing how CSS can be used to apply colors to HTML elements.

The use of color is a fundamental form of human expression. Children experiment with color before they even have the manual dexterity to draw. Maybe that's why color is one of the first things people often want to experiment with when learning to develop websites. With [CSS](/en-US/docs/Web/CSS), there are lots of ways to add color to your [HTML](/en-US/docs/Web/HTML) [elements](/en-US/docs/Web/HTML/Element) to create just the look you want.

This guide describes the [list of what you can color and what CSS properties are involved](#properties_that_can_have_color) and how to [use colors both in stylesheets and in scripts](#colors_within_css_values).

To learn more about CSS colors as a data type, see [CSS color values](/en-US/docs/Web/CSS/CSS_colors/Color_values).

## Properties that can have color

At the element level, everything in HTML can have color applied to it. Instead, let's look at things in terms of the kinds of things that are drawn in the elements, such as text and borders and so forth. For each, we'll see a list of the CSS properties that apply color to them.

At a fundamental level, the {{cssxref("color")}} property defines the foreground color of an HTML element's content and the {{cssxref("background-color")}} property defines the element's background color. These can be used on just about any element.

### Text

Whenever an element is rendered, these properties are used to determine the color of the text, its background, and any decorations on the text.

- {{cssxref("color")}}
  - : The color to use when drawing the text and any [text decorations](/en-US/docs/Learn/CSS/Styling_text/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (such as the addition of under- or overlines, strike-through lines, and so forth.
- {{cssxref("background-color")}}
  - : The text's background color.
- {{cssxref("text-shadow")}}
  - : Configures a shadow effect to apply to text. Among the options for the shadow is the shadow's base color (which is then blurred and blended with the background based on the other parameters). See [Text drop shadows](/en-US/docs/Learn/CSS/Styling_text/Fundamentals#text_drop_shadows) to learn more.
- {{cssxref("text-decoration-color")}}
  - : By default, text decorations (such as underlines, strikethroughs, etc.) use the `color` property as their colors. However, you can override that behavior and use a different color for them with the `text-decoration-color` property.
- {{cssxref("text-emphasis-color")}}
  - : The color to use when drawing emphasis symbols adjacent to each character in the text. This is used primarily when drawing text for East Asian languages.
- {{cssxref("caret-color")}}
  - : The color to use when drawing the {{Glossary("caret")}} (sometimes referred to as the text input cursor) within the element. This is only useful in elements that are editable, such as {{HTMLElement("input")}} and {{HTMLElement("textarea")}} or elements whose HTML [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes#contenteditable) attribute is set.

### Boxes

Every element is a box with some sort of content, and has a background and a border in addition to whatever contents the box may have.

- [Borders](#borders_2)
  - : See the section [Borders](#borders_2) for a list of the CSS properties you can use to set the colors of a box's borders.
- {{cssxref("background-color")}}
  - : The background color to use in areas of the element that have no foreground content.
- {{cssxref("column-rule-color")}}
  - : The color to use when drawing the line separating columns of text.
- {{cssxref("outline-color")}}
  - : The color to use when drawing an outline around the outside of the element. This outline is different from the border in that it doesn't get space set aside for it in the document (so it may overlap other content). It's generally used as a focus indicator, to show which element will receive input events.

### Borders

Any element can have a [border](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) drawn around it. A basic element border is a line drawn around the edges of the element's content. See [The box model](/en-US/docs/Learn/CSS/Building_blocks/The_box_model) to learn about the relationship between elements and their borders, and the article [Styling borders using CSS](/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) to learn more about applying styles to borders.

You can use the {{cssxref("border")}} shorthand property, which lets you configure everything about the border in one shot (including non-color features of borders, such as its [width](/en-US/docs/Web/CSS/border-width), [style](/en-US/docs/Web/CSS/border-style) (solid, dashed, etc.), and so forth.

- {{cssxref("border-color")}}
  - : Specifies a single color to use for every side of the element's border.
- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, and {{cssxref("border-bottom-color")}}
  - : Lets you set the color of the corresponding side of the element's border.
- {{cssxref("border-block-start-color")}} and {{cssxref("border-block-end-color")}}
  - : With these, you can set the color used to draw the borders which are closest to the start and end of the block the border surrounds. In a left-to-right writing mode (such as the way English is written), the block start border is the top edge and the block end is the bottom. This differs from the inline start and end, which are the left and right edges (corresponding to where each line of text in the box begins and ends).
- {{cssxref("border-inline-start-color")}} and {{cssxref("border-inline-end-color")}}
  - : These let you color the edges of the border closest to the beginning and the end of the start of lines of text within the box. Which side this is will vary depending on the {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}} properties, which are typically (but not always) used to adjust text directionality based on the language being displayed. For example, if the box's text is being rendered right-to-left, then the `border-inline-start-color` is applied to the right side of the border.

## Colors within CSS values

Now that you know what CSS properties exist that let you apply color to elements and the formats you can use to describe colors, you can put this together to begin to make use of color. As you may have seen from the list under [Things that can have color](#properties_that_can_have_color), there are plenty of things you can color with CSS. Let's look at this from two sides: using color within a {{Glossary("stylesheet")}}, and adding and changing color using {{Glossary("JavaScript")}} code to alter the styles of elements.

### Specifying colors in stylesheets

The best way to apply color to elements is to specify colors in the CSS that's used when rendering elements. While we won't use every single property mentioned previously, we'll look at a couple of examples. The concept is the same anywhere you use color.

Let's take a look at an example, starting by looking at the results we're trying to achieve:

{{EmbedLiveSample("Specifying_colors_in_stylesheets", 650, 150)}}

#### HTML

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

This is pretty basic, using a {{HTMLElement("div")}} as a wrapper around the contents, which consists of two more `<div>`s, each styled differently with a single paragraph ({{HTMLElement("p")}}) in each box.

The magic happens, as usual, in the CSS, where we'll apply colors and define the layout for the HTML above.

#### CSS

We'll look at the CSS to create the above results a piece at a time, so we can review the interesting parts one by one.

> **Note:** We are using multiple different CSS color notations in this example to demonstrate their use. This is not recommended for production code. When writing CSS, use the style of writing CSS colors that is most intuitive for you and your team.

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

The `.wrapper` class is used to assign styles to the {{HTMLElement("div")}} that encloses all of our other content. This establishes the height of the container using {{cssxref("height")}}, allowing the width of this block-level element to default to 100% of its parent. Setting the {{cssxref("display")}} to `flex` and adding a `10px` {{cssxref("gap")}} creates a flex container with a gap between all the container's children. We use {{cssxref("flex")}} to let the flex children grow to fill the container; it has no effect on the flex container itself.

Of more interest to our discussion here is the use of the {{cssxref("border")}} property to establish a border around the outside edge of the element. This border is a solid line, 6 pixels wide, in the [named color](/en-US/docs/Web/CSS/named-color) `mediumturquoise`.

Within our wrapper, we have a left box and a right box.

```css
.boxLeft {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

The `.boxLeft` class, which, cleverly, is used to style the box on the left, sets up the color of the background and the outline:

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

> **Note:** We included the text-decoration-\* styles separately because Safari doesn't support {{cssxref("text-decoration")}} as a shorthand property.

Finally, the `.boxRight` class describes the unique properties of the box that's drawn on the right. Then the following colors are established:

- The `background-color` is set using the {{CSSXref("color_value/hwb", "hwb()")}} functional notation value specified using `hwb(270deg 63% 13%)`. This is a medium purple color.
- The box's `outline` is used to specify that the box should be enclosed in a four pixel thick dashed line whose color is a somewhat deeper purple using the six-digit {{cssxref("hex-color")}} `#6e1478`.
- The foreground (text) color is specified by setting the {{cssxref("color")}} property with the {{CSSXref("color_value/hsl", "hsl()")}} functional notation to `hsl(0deg 100% 100%)`. This is one of many ways to specify the color white.
- We add a green wavy line under the text with the {{cssxref("text-decoration")}} shorthand, along with the longhand component for browser compatibility. We used the 3-digit {{cssxref("hex-color")}} `#8f8`, which is the equivalent of `#88ff88`.
- Finally, a bit of a shadow is added to the text using {{cssxref("text-shadow")}}. Its `color` parameter is set to `black`.

## Other ways to use color

CSS isn't the only web technology that supports color. There are graphics technologies that are available on the web which also support color.

- The HTML [Canvas API](/en-US/docs/Web/API/Canvas_API)
  - : Lets you draw 2D bitmapped graphics in a {{HTMLElement("canvas")}} element. See our [Canvas tutorial](/en-US/docs/Web/API/Canvas_API/Tutorial) to learn more.
- [SVG](/en-US/docs/Web/SVG) (Scalable Vector Graphics)
  - : Lets you draw images using commands that draw specific shapes, patterns, and lines to produce an image. SVG commands are formatted as XML, and can be embedded directly into a web page or can be placed in the page using the {{HTMLElement("img")}} element, just like any other type of image.
- [WebGL](/en-US/docs/Web/API/WebGL_API)
  - : The Web Graphics Library is an OpenGL ES-based API for drawing high-performance 2D and 3D graphics on the Web. See our [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial) to find out more.

Several now obsolete HTML attributes supported color. The only {{cssxref("color_value", "&lt;color&gt;")}} types supported as HTML attribute values are {{cssxref("named-color")}} and {{cssxref("hex-color")}}.

Realize that it is important to [use colors wisely](/en-US/docs/Web/CSS/CSS_colors/Color_values#colors_within_css_values_wisely). Always select appropriate colors, keeping in mind the needs of people with differing visual capabilities.

For more detailed discussion of each of the color value types, see the [CSS color values](/en-US/docs/Web/CSS/CSS_colors/Color_values) guide and the CSS {{cssxref("&lt;color&gt;")}} unit.

## See also

- [Drawing graphics](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Graphics on the web](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#other_graphics_on_the_web)
- [CSS color module](/en-US/docs/Web/CSS/CSS_colors)
