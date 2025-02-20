---
title: CSS values and units
slug: Learn_web_development/Core/Styling_basics/Values_and_units
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}

CSS rules contain [declarations](/en-US/docs/Web/CSS/CSS_syntax/Syntax#css_declarations), which in turn are composed of properties and values.
Each property used in CSS has a **value type** that describes what kind of values it is allowed to have.
In this lesson, we will take a look at some of the most frequently used value types, what they are, and how they work.

> [!NOTE]
> Each [CSS property page](/en-US/docs/Web/CSS/Reference#index) has a syntax section that lists the value types you can use with that property.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        HTML basics (study
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basic HTML syntax</a
        >), <a href="/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started">CSS basic syntax</a>, <a href="/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS selectors</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Understand that property values can take many different types, and what these types represent.</li>
          <li>Familiarity with using the fundamental types: Numbers, lengths, percentages, colors, images, positions, strings and identifiers, and functions.</li>
          <li>Understand what absolute and relative units are, and the difference between them.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## What is a CSS value?

In CSS specifications and on the property pages here on MDN you will be able to spot value types as they will be surrounded by angle brackets (`<`, `>`), such as [`<color>`](/en-US/docs/Web/CSS/color_value) or {{cssxref("length")}}. When you see the value type `<color>` as valid for a particular property, that means you can use any valid color as a value for that property, as listed on the [`<color>`](/en-US/docs/Web/CSS/color_value) reference page.

Sometimes value types and properties can have the same, or similar names — For example, there is a {{cssxref("color")}} property and a [`<color>`](/en-US/docs/Web/CSS/color_value) data type. You can use the angle brackets to determine which one you are studying in each case. HTML elements also use angle brackets, but it should be clear from the context which one you are looking at. If you are not sure, try searching for it on MDN.

> [!NOTE]
> You'll see CSS value types referred to as _data types_. The terms are basically interchangeable — when you see something in CSS referred to as a data type, it is really just a fancy way of saying value type. The term _value_ refers to any particular expression supported by a value type that you choose to use.

In the following example, we have set the color of our heading using a keyword, and the background using the `rgb()` function:

```css
h1 {
  color: black;
  background-color: rgb(197 93 161);
}
```

A value type in CSS is a way to define a collection of allowable values. This means that if you see `<color>` as valid you don't need to wonder which of the different types of color value can be used — keywords, hex values, `rgb()` functions, etc. You can use _any_ available `<color>` values, assuming they are supported by your browser. The page on MDN for each value will give you information about browser support. For example, if you look at the page for [`<color>`](/en-US/docs/Web/CSS/color_value) you will see that the browser compatibility section lists different types of color values and support for them.

Let's have a look at some of the types of values and units you may frequently encounter, with examples so that you can try out different possible values.

## Numbers, lengths, and percentages

There are various numeric value types that you might find yourself using in CSS. The following are all classed as numeric:

<table class="standard-table no-markdown">
  <thead>
    <tr>
      <th scope="col">Data type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/en-US/docs/Web/CSS/integer">&#x3C;integer></a></code>
      </td>
      <td>
        An <code>&#x3C;integer></code> is a whole number such as
        <code>1024</code> or <code>-55</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/en-US/docs/Web/CSS/number">&#x3C;number></a></code>
      </td>
      <td>
        A <code>&#x3C;number></code> represents a decimal number — it may or may
        not have a decimal point with a fractional component. For
        example, <code>0.255</code>, <code>128</code>, or <code>-1.2</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/en-US/docs/Web/CSS/dimension">&#x3C;dimension></a></code
        >
      </td>
      <td>
        A <code>&#x3C;dimension></code> is a <code>&#x3C;number></code> with a
        unit attached to it. For example, <code>45deg</code>, <code>5s</code>,
        or <code>10px</code>. <code>&#x3C;dimension></code> is an umbrella
        category that includes the {{cssxref("length")}}, <code><a href="/en-US/docs/Web/CSS/angle">&#x3C;angle></a></code
        >, <code><a href="/en-US/docs/Web/CSS/time">&#x3C;time></a></code
        >, and
        <code
          ><a href="/en-US/docs/Web/CSS/resolution">&#x3C;resolution></a></code
        >
        types.
      </td>
    </tr>
    <tr>
      <td>{{cssxref("percentage")}}</td>
      <td>
        A <code>&#x3C;percentage></code> represents a fraction of some other
        value. For example, <code>50%</code>. Percentage values are always
        relative to another quantity. For example, an element's length is
        relative to its parent element's length.
      </td>
    </tr>
  </tbody>
</table>

### Lengths

The numeric type you will come across most frequently is {{cssxref("length")}}. For example, `10px` (pixels) or `30em`. There are two types of lengths used in CSS — relative and absolute. It's important to know the difference in order to understand how big things will become.

#### Absolute length units

The following are all **absolute** length units — they are not relative to anything else, and are generally considered to always be the same size.

| Unit | Name                | Equivalent to            |
| ---- | ------------------- | ------------------------ |
| `cm` | Centimeters         | 1cm = 37.8px = 25.2/64in |
| `mm` | Millimeters         | 1mm = 1/10th of 1cm      |
| `Q`  | Quarter-millimeters | 1Q = 1/40th of 1cm       |
| `in` | Inches              | 1in = 2.54cm = 96px      |
| `pc` | Picas               | 1pc = 1/6th of 1in       |
| `pt` | Points              | 1pt = 1/72nd of 1in      |
| `px` | Pixels              | 1px = 1/96th of 1in      |

Most of these units are more useful when used for print, rather than screen output. For example, we don't typically use `cm` (centimeters) on screen. The only value that you will commonly use is `px` (pixels).

#### Relative length units

Relative length units are relative to something else. For example:

- `em` is relative to the font size of this element, or the font size of the parent element when used for {{cssxref("font-size")}}. `rem` is relative to the font size of the root element.
- `vh` and `vw` are relative to the viewport's height and width, respectively.

The benefit of using relative units is that with some careful planning you can make it so the size of text or other elements scales relative to everything else on the page. For a complete list of the relative units available, see the reference page for the {{cssxref("length")}} type.

In this section we'll explore some of the most common relative units.

#### Exploring an example

In the example below, you can see how some relative and absolute length units behave. The first box has a {{cssxref("width")}} set in pixels. As an absolute unit, this width will remain the same no matter what else changes.

The second box has a width set in `vw` (viewport width) units. This value is relative to the viewport width, and so 10vw is 10 percent of the width of the viewport. If you change the width of your browser window, the size of the box should change. However this example is embedded into the page using an [`<iframe>`](/en-US/docs/Web/HTML/Element/iframe), so this won't work. To see this in action you'll have to [try the example after opening it in its own browser tab](https://mdn.github.io/css-examples/learn/values-units/length.html).

The third box uses `em` units. These are relative to the element's font size. I've set a font size of `1em` on the containing {{htmlelement("div")}}, which has a class of `.wrapper`. Change this value to `1.5em` and you will see that the font size of all the elements increases, but only the last item will get wider, as its width is relative to that font size.

After following the instructions above, try playing with the values in other ways, to see what you get.

```html live-sample___length
<div class="wrapper">
  <div class="box px">I am 200px wide</div>
  <div class="box vw">I am 10vw wide</div>
  <div class="box em">I am 10em wide</div>
</div>
```

```css live-sample___length
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}

.wrapper {
  font-size: 1em;
}

.px {
  width: 200px;
}

.vw {
  width: 10vw;
}

.em {
  width: 10em;
}
```

{{EmbedLiveSample("length", "", "250px")}}

#### ems and rems

`em` and `rem` are the two relative lengths you are likely to encounter most frequently when sizing anything from boxes to text. It's worth understanding how these work, and the differences between them, especially when you start getting on to more complex subjects like [styling text](/en-US/docs/Learn_web_development/Core/Text_styling) or [CSS layout](/en-US/docs/Learn_web_development/Core/CSS_layout). The below example provides a demonstration.

The HTML illustrated below is a set of nested lists — we have two lists in total and both examples have the same HTML. The only difference is that the first has a class of _ems_ and the second a class of _rems_.

To start with, we set 16px as the font size on the `<html>` element.

**To recap, the `em` unit means "my parent element's font-size"** if used for `font-size` (and "my own font-size" when used for anything else). The {{htmlelement("li")}} elements inside the {{htmlelement("ul")}} with a `class` of `ems` take their sizing from their parent. So each successive level of nesting gets progressively larger, as each has its font size set to `1.3em` — 1.3 times its parent element's font size.

**To recap, the `rem` unit means "The root element's font-size"** (rem stands for "root em"). The {{htmlelement("li")}} elements inside the {{htmlelement("ul")}} with a `class` of `rems` take their sizing from the root element (`<html>`). This means that each successive level of nesting does not keep getting larger.

However, if you change the `<html>` element's `font-size` in the CSS you will see that everything else changes relative to it — both `rem`- and `em`-sized text.

```html live-sample___em-rem
<ul class="ems">
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Three A</li>
      <li>
        Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul class="rems">
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Three A</li>
      <li>
        Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___em-rem
html {
  font-size: 16px;
}

.ems li {
  font-size: 1.3em;
}

.rems li {
  font-size: 1.3rem;
}
```

{{EmbedLiveSample("em-rem", "", "400px")}}

#### Line height units

`lh` and `rlh` are relative length units similar to `em` and `rem`. The difference between `lh` and `rlh` is that the first one is relative to the line height of the element itself, while the second one is relative to the line height of the root element, usually `<html>`.

Using these units, we can precisely align box decoration to the text. In this example, we use `lh` unit to create notepad-like lines using [`repeating-linear-gradient()`](/en-US/docs/Web/CSS/gradient/repeating-linear-gradient). It doesn't matter what's the line height of the text, the lines will always start in the right place.

```css hidden
body {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 24px;
  gap: 24px;
  background-color: floralwhite;
  font-family: sans-serif;
}

@supports not (height: 1lh) {
  body::before {
    grid-column: 1 / -1;
    padding: 8px;
    border-radius: 4px;
    background-color: tomato;
    color: white;
    content: "You browser doesn't support lh unit just yet";
  }
}
```

```css
p {
  margin: 0;
  background-image: repeating-linear-gradient(
    to top,
    lightskyblue 0 2px,
    transparent 2px 1lh
  );
}
```

```html
<p style="line-height: 2em">
  Summer is a time for adventure, and this year was no exception. I had many
  exciting experiences, but two of my favorites were my trip to the beach and my
  week at summer camp.
</p>

<p style="line-height: 4em">
  At the beach, I spent my days swimming, collecting shells, and building
  sandcastles. I also went on a boat ride and saw dolphins swimming alongside
  us.
</p>
```

{{EmbedLiveSample("line_height_units", "100%", "370")}}

### Percentages

In a lot of cases, a percentage is treated in the same way as a length. The thing with percentages is that they are always set relative to some other value. For example, if you set an element's `font-size` as a percentage, it will be a percentage of the `font-size` of the element's parent. If you use a percentage for a `width` value, it will be a percentage of the `width` of the parent.

In the below example the two percentage-sized boxes and the two pixel-sized boxes have the same class names. The sets are 40% and 200px wide respectively.

The difference is that the second set of two boxes is inside a wrapper that is 400 pixels wide. The second 200px wide box is the same width as the first one, but the second 40% box is now 40% of 400px — a lot narrower than the first one!

Try changing the width of the wrapper or the percentage value to see how this works:

```html live-sample___percentage
<div class="box px">I am 200px wide</div>
<div class="box percent">I am 40% wide</div>
<div class="wrapper">
  <div class="box px">I am 200px wide</div>
  <div class="box percent">I am 40% wide</div>
</div>
```

```css live-sample___percentage
.box {
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  margin: 1em 0;
}
.wrapper {
  width: 400px;
  border: 5px solid rebeccapurple;
}

.px {
  width: 200px;
}

.percent {
  width: 40%;
}
```

{{EmbedLiveSample("percentage", "", "350px")}}

The next example has font sizes set in percentages. Each `<li>` has a `font-size` of 80%; therefore, the nested list items become progressively smaller as they inherit their sizing from their parent.

```html live-sample___percentage-fonts
<ul>
  <li>One</li>
  <li>Two</li>
  <li>
    Three
    <ul>
      <li>Three A</li>
      <li>
        Three B
        <ul>
          <li>Three B 2</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

```css live-sample___percentage-fonts
li {
  font-size: 80%;
}
```

{{EmbedLiveSample("percentage-fonts")}}

Note that, while many value types accept a length or a percentage, there are some that only accept length. You can see which values are accepted on the MDN property reference pages. If the allowed value includes {{cssxref("length-percentage")}} then you can use a length or a percentage. If the allowed value only includes `<length>`, it is not possible to use a percentage.

### Numbers

Some value types accept numbers, without any unit added to them. An example of a property which accepts a unitless number is the `opacity` property, which controls the opacity of an element (how transparent it is). This property accepts a number between `0` (fully transparent) and `1` (fully opaque).

In the below example, try changing the value of `opacity` to various decimal values between `0` and `1` and see how the box and its contents become more or less opaque:

```html live-sample___opacity
<div class="wrapper">
  <div class="box">I am a box with opacity</div>
</div>
```

```css live-sample___opacity
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  background-repeat: no-repeat;
  background-position: bottom left;
  padding: 20px;
}

.box {
  margin: 40px auto;
  width: 200px;
  background-color: lightblue;
  border: 5px solid darkblue;
  padding: 10px;
  opacity: 0.6;
}
```

{{EmbedLiveSample("opacity", "", "210px")}}

> [!NOTE]
> When you use a number in CSS as a value it should not be surrounded in quotes.

## Color

Color values can be used in many places in CSS, whether you are specifying the color of text, backgrounds, borders, and lots more.
There are many ways to set color in CSS, allowing you to control plenty of exciting properties.

The standard color system available in modern computers supports 24-bit colors, which allows displaying about 16.7 million distinct colors via a combination of different red, green, and blue channels with 256 different values per channel (256 x 256 x 256 = 16,777,216).

In this section, we'll first look at the most commonly seen ways of specifying colors: using keywords, hexadecimal, and `rgb()` values.
We'll also take a quick look at additional color functions, enabling you to recognize them when you see them or experiment with different ways of applying color.

You will likely decide on a color palette and then use those colors — and your favorite way of specifying color — throughout your project.
You can mix and match color models, but it's usually best if your entire project uses the same method of declaring colors for consistency!

### Color keywords

You will see the color keywords (or 'named colors') used in many MDN code examples. As the [`<named-color>`s](/en-US/docs/Web/CSS/named-color) data type contains a very finite number of color values, these are not commonly used on production websites. As the keyword represents the color as a human-readable text value, named colors are used in code examples to clearly tell the user what color is expected so the learner can focus on the content being taught.

Try playing with different color values in the live examples below, to get more of an idea how they work:

```html live-sample___color-keywords
<div class="wrapper">
  <div class="box one">antiquewhite</div>
  <div class="box two">blueviolet</div>
  <div class="box three">greenyellow</div>
</div>
```

```css live-sample___color-keywords
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: antiquewhite;
}

.two {
  background-color: blueviolet;
}

.three {
  background-color: greenyellow;
}
```

{{EmbedLiveSample("color-keywords")}}

### Hexadecimal RGB values

The next type of color value you are likely to encounter is hexadecimal codes.
Hexadecimal uses 16 characters from `0-9` and `a-f`, so the entire range is `0123456789abcdef`.
Each hex color value consists of a hash/pound symbol (`#`) followed by three or six hexadecimal characters (`#fcc` or `#ffc0cb`, for example), with an optional one or two hexadecimal characters representing the alpha-transparency of the previous three or six character color values.

When using hexadecimal to describe RGB values, each **pair** of hexadecimal characters is a decimal number representing one of the channels — red, green and blue — and allows us to specify any of the 256 available values for each (16 x 16 = 256).
These values are less intuitive than keywords for defining colors, but they are a lot more versatile because you can represent any RGB color with them.

Try changing the values to see how the colors vary:

```html live-sample___color-hex
<div class="wrapper">
  <div class="box one">#02798b</div>
  <div class="box two">#c55da1</div>
  <div class="box three">#128a7d</div>
</div>
```

```css live-sample___color-hex
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: #02798b;
}

.two {
  background-color: #c55da1;
}

.three {
  background-color: #128a7d;
}
```

{{EmbedLiveSample("color-hex")}}

### RGB values

To create RGB values directly, the [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) function takes three parameters representing **red**, **green**, and **blue** channel values of the colors, with an optional fourth value separated by a slash ('/') representing opacity, in much the same way as hex values. The difference with RGB is that each channel is represented not by two hex digits, but by a decimal number between 0 and 255 or a percent between 0% and 100% inclusive (but not a mixture of the two).

Let's rewrite our last example to use RGB colors:

```html live-sample___color-rgb
<div class="wrapper">
  <div class="box one">rgb(2 121 139)</div>
  <div class="box two">rgb(197 93 161)</div>
  <div class="box three">rgb(18 138 125)</div>
</div>
```

```css live-sample___color-rgb
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}
.one {
  background-color: rgb(2 121 139);
}

.two {
  background-color: rgb(197 93 161);
}

.three {
  background-color: rgb(18 138 125);
}
```

{{EmbedLiveSample("color-rgb")}}

You can pass a fourth parameter to `rgb()`, which represents the alpha channel of the color, which controls opacity. If you set this value to `0` it will make the color fully transparent, whereas `1` will make it fully opaque. Values in between give you different levels of transparency.

> [!NOTE]
> Setting an alpha channel on a color has one key difference to using the {{cssxref("opacity")}} property we looked at earlier. When you use opacity you make the element and everything inside it opaque, whereas using RGB with an alpha parameter colors only makes the color you are specifying opaque.

In the example below, we have added a background image to the containing block of our colored boxes. We have then set the boxes to have different opacity values — notice how the background shows through more when the alpha channel value is smaller.
In this example, try changing the alpha channel values to see how it affects the color output.

```html live-sample___color-rgba
<div class="wrapper">
  <div class="box one">rgb(2 121 139 / .3)</div>
  <div class="box two">rgb(197 93 161 / .7)</div>
  <div class="box three">rgb(18 138 125 / .9)</div>
</div>
```

```css live-sample___color-rgba
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: rgb(2 121 139 / 0.3);
}

.two {
  background-color: rgb(197 93 161 / 0.7);
}

.three {
  background-color: rgb(18 138 125 / 0.9);
}
```

{{EmbedLiveSample("color-rgba", "", "250px")}}

### SRGB values

The `sRGB` color space defines colors in the **red** (r), **green** (g), and **blue** (b) color space.

### Using hues to specify a color

If you want to go beyond keywords, hexadecimal, and `rgb()` for colors, you might want to try using [`<hue>`](/en-US/docs/Web/CSS/hue).
Hue is the property that allows us to tell the difference or similarity between colors like red, orange, yellow, green, blue, etc.
The key concept is that you can specify a hue in an [`<angle>`](/en-US/docs/Web/CSS/angle) because most of the color models describe hues using a {{glossary("color wheel")}}.

There are several color functions that include a [`<hue>`](/en-US/docs/Web/CSS/hue) component, including `hsl()`, `hwb()`, and [`lch()`](/en-US/docs/Web/CSS/color_value/lch). Other color functions, like [`lab()`](/en-US/docs/Web/CSS/color_value/lab), define colors based on what humans can see.

If you want to find out more about these functions and color spaces, see the [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/CSS_colors/Applying_color) guide, the [`<color>`](/en-US/docs/Web/CSS/color_value) reference that lists all the different ways you can use colors in CSS, and the [CSS color module](/en-US/docs/Web/CSS/CSS_colors) that provides an overview of all the color types in CSS and the properties that use color values.

### HWB

A great starting point for using hues in CSS is the [`hwb()`](/en-US/docs/Web/CSS/color_value/hwb) function which specifies an `srgb()` color.
The three parts are:

- **Hue**: The base shade of the color. This takes a [`<hue>`](/en-US/docs/Web/CSS/hue) value between 0 and 360, representing the angles around a color wheel.
- **Whiteness**: How white is the color? This takes a value from `0%` (no whiteness) to `100%` (full whiteness).
- **Blackness**: How black is the color? This takes a value from 0% (no blackness) to 100% (full blackness).

### HSL

Similar to the `hwb()` function is the [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) function which also specifies an `srgb()` color.
HSL uses `Hue`, in addition to `Saturation` and `Lightness`:

- **Hue**
- **Saturation**: How saturated is the color? This takes a value from 0–100%, where 0 is no color (it will appear as a shade of grey), and 100% is full color saturation.
- **Lightness**: How light or bright is the color? This takes a value from 0–100%, where 0 is no light (it will appear completely black) and 100% is full light (it will appear completely white).

The `hsl()` color value also has an optional fourth value, separated from the color with a slash (`/`), representing the alpha transparency.

Let's update the RGB example to use HSL colors instead:

```html live-sample___color-hsl
<div class="wrapper">
  <div class="box one">hsl(188 97% 28%)</div>
  <div class="box two">hsl(321 47% 57%)</div>
  <div class="box three">hsl(174 77% 31%)</div>
</div>
```

```css live-sample___color-hsl
.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28%);
}

.two {
  background-color: hsl(321 47% 57%);
}

.three {
  background-color: hsl(174 77% 31%);
}
```

{{EmbedLiveSample("color-hsl")}}

Just like with `rgb()` you can pass an alpha parameter to `hsl()` to specify opacity:

```html live-sample___color-hsla
<div class="wrapper">
  <div class="box one">hsl(188 97% 28% / .3)</div>
  <div class="box two">hsl(321 47% 57% / .7)</div>
  <div class="box three">hsl(174 77% 31% / .9)</div>
</div>
```

```css live-sample___color-hsla
.wrapper {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  padding: 40px 20px;
}

.box {
  padding: 10px;
  margin: 0.5em 0;
  border-radius: 0.5em;
}

.one {
  background-color: hsl(188 97% 28% / 0.3);
}

.two {
  background-color: hsl(321 47% 57% / 0.7);
}

.three {
  background-color: hsl(174 77% 31% / 0.9);
}
```

{{EmbedLiveSample("color-hsla", "", "250px")}}

## Images

The [`<image>`](/en-US/docs/Web/CSS/image) value type is used wherever an image is a valid value. This can be an actual image file pointed to via a `url()` function, or a gradient.

In the example below, we have demonstrated an image and a gradient in use as a value for the CSS `background-image` property.

```html live-sample___image
<div class="box image"></div>
<div class="box gradient"></div>
```

```css live-sample___image
.box {
  height: 150px;
  width: 300px;
  margin: 20px auto;
  border-radius: 0.5em;
}
.image {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
}

.gradient {
  background-image: linear-gradient(
    90deg,
    rgb(119 0 255 / 39%),
    rgb(0 212 255 / 100%)
  );
}
```

{{EmbedLiveSample("image", "", "380px")}}

> [!NOTE]
> There are some other possible values for `<image>`, however these are newer and currently have poor browser support. Check out the page on MDN for the [`<image>`](/en-US/docs/Web/CSS/image) data type if you want to read about them.

## Position

The [`<position>`](/en-US/docs/Web/CSS/position_value) value type represents a set of 2D coordinates, used to position an item such as a background image (via [`background-position`](/en-US/docs/Web/CSS/background-position)). It can take keywords such as `top`, `left`, `bottom`, `right`, and `center` to align items with specific bounds of a 2D box, along with lengths, which represent offsets from the top and left-hand edges of the box.

A typical position value consists of two values — the first sets the position horizontally, the second vertically. If you only specify values for one axis the other will default to `center`.

In the following example we have positioned a background image 40px from the top and to the right of the container using a keyword.
Play around with these values to see how you can push the image around.

```html live-sample___position
<div class="box"></div>
```

```css live-sample___position
.box {
  height: 100px;
  width: 400px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
  background-repeat: no-repeat;
  background-position: right 40px;
  margin: 20px auto;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("position")}}

## Strings and identifiers

Throughout the examples above, we've seen places where keywords are used as a value (for example `<color>` keywords like `red`, `black`, `rebeccapurple`, and `goldenrod`). These keywords are more accurately described as _identifiers_, a special value that CSS understands. As such they are not quoted — they are not treated as strings.

There are places where you use strings in CSS. For example, [when specifying generated content](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#generating_content_with_before_and_after). In this case, the value is quoted to demonstrate that it is a string. In the example below, we use unquoted color keywords along with a quoted generated content string.

```html live-sample___strings-idents
<div class="box"></div>
```

```css live-sample___strings-idents
.box {
  width: 400px;
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
}

.box::after {
  content: "This is a string. I know because it is quoted in the CSS.";
}
```

{{EmbedLiveSample("strings-idents")}}

## Functions

In programming, a function is a piece of code that does a specific task.
Functions are useful because you can write code once, then reuse it many times instead of writing the same logic over and over.
Most programming languages not only support functions but also come with convenient built-in functions for common tasks so you don't have to write them yourself from scratch.

CSS also has [functions](/en-US/docs/Web/CSS/CSS_Functions), which work in a similar way to functions in other languages.
In fact, we've already seen CSS functions in the [Color](#color) section above with [`rgb()`](/en-US/docs/Web/CSS/color_value/rgb) and [`hsl()`](/en-US/docs/Web/CSS/color_value/hsl) functions.

Aside from applying colors, you can use functions in CSS to do a lot of other things.
For example [Transform functions](/en-US/docs/Web/CSS/CSS_Functions#transform_functions) are a common way to move, rotate, and scale elements on a page.
You might see [`translate()`](/en-US/docs/Web/CSS/transform-function/translate) for moving something horizontally or vertically, [`rotate()`](/en-US/docs/Web/CSS/transform-function/rotate) to rotate something, or [`scale()`](/en-US/docs/Web/CSS/transform-function/scale) to make something bigger or smaller.

### Math functions

When you are creating styles for a project, you will probably start off with numbers like `300px` for lengths or `200ms` for durations.
If you want to have these values change based on other values, you will need to do some math.
You could calculate the percentage of a value or add a number to another number, then update your CSS with the result.

CSS has support for [Math functions](/en-US/docs/Web/CSS/CSS_Functions#math_functions), which allow us to perform calculations instead of relying on static values or doing the math in JavaScript.
One of the most common math functions is [`calc()`](/en-US/docs/Web/CSS/calc) which lets you do operations like addition, subtraction, multiplication, and division.

For example, let's say we want to set the width of an element to be 20% of its parent container plus 100px.
We can't specify this width with a static value — if the parent uses a percentage width (or a relative unit like `em` or `rem`) then it will vary depending on the context it is used in, and other factors such as the user's device or browser window width.
However, we can use `calc()` to set the width of the element to be 20% of its parent container plus 100px.
The 20% is based on the width of the parent container (`.wrapper`) and if that width changes, the calculation will change too:

```html live-sample___calc
<div class="wrapper">
  <div class="box">My width is calculated.</div>
</div>
```

```css live-sample___calc
.wrapper {
  width: 400px;
}
.box {
  padding: 1em;
  border-radius: 0.5em;
  border: 5px solid rebeccapurple;
  background-color: lightblue;
  width: calc(20% + 100px);
}
```

{{EmbedLiveSample("calc")}}

There are many other math functions that you can use in CSS, such as [`min()`](/en-US/docs/Web/CSS/min), [`max()`](/en-US/docs/Web/CSS/max), and [`clamp()`](/en-US/docs/Web/CSS/clamp); respectively these let you pick the smallest, largest, or middle value from a set of values.
You can also use [Trigonometric functions](/en-US/docs/Web/CSS/CSS_Functions#trigonometric_functions) like [`sin()`](/en-US/docs/Web/CSS/sin), [`cos()`](/en-US/docs/Web/CSS/cos), and [`tan()`](/en-US/docs/Web/CSS/tan) to calculate angles for rotating elements around a point, or choose colors that take a [hue angle](/en-US/docs/Web/CSS/hue) as a parameter.
[Exponential functions](/en-US/docs/Web/CSS/CSS_Functions#exponential_functions) might also be used for animations and transitions, when you require very specific control over how something moves and looks.

Knowing about CSS functions is useful so you recognize them when you see them. You should start experimenting with them in your projects — they will help you avoid writing custom or repetitive code to achieve results that you can get with regular CSS.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_tasks).

## Summary

This has been a quick run-through of the most common types of values and units you might encounter. You can have a look at all of the different types on the [CSS Values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module page — you will encounter many of these in use as you work through these lessons.

The key thing to remember is that each property has a defined list of allowed value types, and each value type has a definition explaining what the values are. You can then look up the specifics here on MDN. For example, understanding that [`<image>`](/en-US/docs/Web/CSS/image) also allows you to create a color gradient is useful but perhaps non-obvious knowledge to have!

In the next article, we'll take a look at how items are sized in CSS.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics")}}
