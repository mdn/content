---
title: if()
slug: Web/CSS/if
page-type: css-function
status:
  - experimental
browser-compat: css.types.if
---

{{CSSRef}}{{SeeCompatTable}}

The **`if()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) allows different values to be set for a property depending on the result of a test. The test can be based on a [style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), a [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), or a [feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

## Syntax

```css-nolint
/* Style query condition */
background-color: if(style(--scheme: dark): black);
padding: if(style(--size: 2xl): 1em; else: 0.25em);

/* Media query condition */
background: if(media(print): white; else: black);
margin: if(media(max-width: 700px): 0 auto ; else: 20px auto 0);

/* Feature query condition */
color: if(
  supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);
  else: #03045e;
);
border: if(
  supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0);
  else: 3px solid #c0c0c0;
);

/* Multiple tests */
background-image: if(
  style(--scheme: ice): linear-gradient(to left, #caf0f8, white, #caf0f8);
  style(--scheme: fire): linear-gradient(to left, #ffc971, white, #ffc971);
  else: none;
);

/* Partial value */
border: 3px solid if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: #c0c0c0;
);
```

### Parameters

The `if()` function's syntax is as follows:

```plain
if([[<if-condition> : <value>;] | [else : <value>;]]*)
```

The parameters are:

- `<if-condition>`

  - : A [style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), or [feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

- `else`

  - : A keyword representing an `<if-condition>` that always evaluates to true.

- `<value>`

  - : A property value.

### Return value

A value, or {{glossary("guaranteed_invalid_value", "guaranteed-invalid")}}, in which case the property retains its initial value.

## Description

The CSS `if()` function provides conditional logic to CSS property values, and works in a similar fashion to JavaScript [`if ... else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statements.

The `if()` function can be used inside the value of any property, and can contain zero or more `<if-condition> : <value>` pairs and `else : <value>` pairs.

The return value is calculated as follows:

1. The `<if-condition>` expressions are evaluated, in the order they appear in the function.
2. The first `<if-condition>` that evaluates to true, or `else` that appears, has its associated `<value>` returned.
3. If none of the conditions evaluate to true, {{glossary("guaranteed_invalid_value", "guaranteed-invalid")}} is returned, in which case the property retains its initial value.

For example:

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(to left, #caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(to left, #ffc971, white, #ffc971);
    else: none;
  );
}
```

In this case, we are setting a different {{cssxref("background-image")}} {{cssxref("linear-gradient()")}} value on {{htmlelement("div")}} elements depending on whether a `--scheme` [custom property](/en-US/docs/Web/CSS/--*) is set to `ice` or `fire`. If neither value is set, the `else` value comes into play, and the `background-image` property is set to `none`.

> [!NOTE]
> Each condition must be separated from its associated value with a colon, and each `<if-condition> : <value>` pair must be separated with a semi-colon.

> [!WARNING]
> There must be no space between the `if` and the opening parenthesis (`(`). If there is, the whole declaration is invalid.

If a single `<if-condition>` or `<value>` is invalid, it does not invalidate the entire `if()` function; instead, the parser moves on to the next `<if-condition> : <value>` pair.

### Frequency and position of `else : <value>` pairs

It is possible to include as many `else : <value>` pairs as you want inside an `if()` function, in whatever positions you want. However, in most cases it makes sense to use a single `else : <value>` pair at the end of your values list to provide a default value that is always returned if none of the supplied conditions evaluate to true.

If you included it before the `<if-condition> : <value>` pairs, the `else` would evaluate to true, and none of the later pairs would be considered. The following example `if()` always returns `none`:

```css-nolint
div {
  background-image: if(
    else: none;
    /* Never considered */
    style(--scheme: ice): linear-gradient(to left, #caf0f8, white, #caf0f8);
    /* Never considered */
    style(--scheme: fire): linear-gradient(to left, #ffc971, white, #ffc971)
  );
}
```

One circumstance in which you might want to put an `else : <value>` in a position other than the end of the values list is when a value is not behaving as expected, and you are trying to debug it. For example:

```css-nolint
div {
  background-image: if(
    /* Is this one not working? */
    style(--scheme: ice): linear-gradient(to left, #caf0f8, white, #caf0f8);
    /* Not working indicator image */
    else: url("debug.png");
    /* Never considered */
    style(--scheme: fire): linear-gradient(to left, #ffc971, white, #ffc971);
    /* Never considered */
    else: none
  );
}
```

Note that an `if()` function is still valid if it contains only an `else : <value>` pair, or nothing at all:

```css
background-color: if(else: yellow);
background-image: if();
```

However, these functions are not useful. The {{cssxref("background-color")}} value will always be set to `yellow`, and the `background-image` will retain its initial value. You would be better off setting the first property to just `yellow`, and not setting the second property at all:

```css
background-color: yellow;
```

### Types of if condition

An `<if-condition>` can be one of three different types. This section looks at each on in detail.

#### Style queries

[Container style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) if conditions allow you to test whether a particular property value is set on an element, and apply a value to a different property as a result. We walked through a style query example earlier on; let's look at another example:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(to left, #caf0f8, white, #caf0f8);
  else: none;
);
```

If the `--scheme` custom property is set to a value of `ice` on the same element, the provided `linear-gradient()` value is returned. If not, then `none` is returned.

Using style queries inside `if()` statements has an advantage over using style queries via {{cssxref("@container")}} — you can target an element with styles directly, based on whether a custom property is set on it, rather than having to check set styles on a container parent element.

You can also use `and`, `or`, or `not` logic inside style queries. For example:

```css-nolint
background-color: if(
  style((--scheme: dark) or (--scheme: very-dark)): black
);

background-color: if(
  style((--scheme: dark) and (--contrast: hi)): black
);

background-color: if(
  not style(--scheme: light): black
);
```

`@container` does have some advantages — you can only set single property values at a time with `if()`, whereas `@container` queries can be used to conditionally apply whole sets of rules. The two approaches are complementary, and have different uses.

Note that container style queries currently don't support regular CSS properties, just CSS custom properties. So for example, the following won't work:

```css-nolint
if(
  background-color: if(style(color: white): black;);
)
```

#### Media queries

[Media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) if conditions can be used to set a value for a property depending on whether a media query test returns true.

You can use media types. For example, the following `<if-condition> : <value>` pair returns a value of `white` on print media, while the `else` clause causes `#eee` to be returned on non-print media.

```css-nolint
background-color: if(
  media(print): white;
  else: #eee;
)
```

You can also use media features — the following returns a value of `0 auto` if the current viewport width is less than `700px`, or `20px auto` if this is not the case:

```css-nolint
margin: if(
  media(width < 700px): 0 auto;
  else: 20px auto;
)
```

This is really useful when you need to vary a single property value based on a media query result.

You can also use `and`, `or`, or `not` logic inside media queries. For example:

```css-nolint
border-color: if(
  media((width > 700px) and (width < 1000px)): blue;
);

border-color: if(
  media((width < 500px) or (orientation: landscape)): blue;
);

background-color: if(
  not media(width < 500px): blue;
  else: red
);
```

When you want to set multiple declarations or rules based on one media query, a regular {{cssxref("@media")}} construct is needed. The two approaches are complementary, and have different uses.

#### Feature queries

[Feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) if conditions can be used to set a value for a property depending on whether the browser supports a particular property value.

For example, the following returns an {{cssxref("color_value/lch()")}} color if `lch()` colors are supported, or an {{cssxref("color_value/rgb()")}} color if not:

```css-nolint
color: if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: rgb(192, 192, 192);
)
```

Selector support queries also work. The following will return a value of `0` if the browser supports the `h2 > p` selector, or `initial` if not:

```css-nolint
margin-top: if(
  supports(selector(h2 + p)): 0;
  else: initial
)
```

You can also use `and`, `or`, or `not` logic inside feature queries. For example:

```css-nolint
margin-top: if(
  supports((selector(h2 + p)) and (color: blue)): 0;
);

margin-top: if(
  supports((selector(h2 + p)) or (color: not-a-color)): 0;
);

margin-top: if(
  supports(not selector(h2 + p)): 0;
);
```

Interestingly, support queries for a property without a value don't work, for example:

```css-nolint
margin: if(
  supports(justify-content): 0;
)
```

Feature queries are really useful inside `if()` statements when you need to vary a single property value based on support for a particular property: value combination.

When you want to set multiple declarations or rules based on one feature query, a regular {{cssxref("@supports")}} construct is needed. The two approaches are complementary, and have different uses.

### Providing fallback values

`if()` statements do not gracefully degrade; explicit fallbacks need to be provided for non-supporting browsers.

For example, in this case we provide a static {{cssxref("padding")}} value for browsers that don't support `if()`. Browsers that do support `if()` will override the first declaration with the second one, which sets a padding value dynamically depending on whether the `--size: 2xl` custom property is set.

```css
padding: 1em;
padding: if(style(--size: 2xl): 1em; else: 0.25em);
```

### Whole and partial values

An `if()` function can be set as the value of any CSS property, but it can also be used to determine parts of property values. For example, the following sets a different {{cssxref("border-color")}} inside a {{cssxref("border")}} shorthand property, depending on whether {{cssxref("color_value/lch()")}} colors are supported:

```css-nolint
border: if(
  supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0);
  else: 3px solid #c0c0c0;
);
```

But you can simplify it like this, using the `if()` function to determine only the color portion:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0) ; else: #c0c0c0
  );
```

### Nesting if() functions

Because an `if()` function can take the place of whole or partial property values, it is possible to nest multiple `if()` functions.

For example, in this declaration we are using `if()` to set a `color` property value depending on various conditions. We have an outer `if()` function that returns a particular value depending on whether the `--scheme` custom property is set to `ice` or `fire` (with an `else` value of `black` that is returned if neither of the other conditions return true).

However, the two if condition values are also `if()` functions. These inner `if()` functions return an `lch()` color value if the browser supports `lch()`, or a hex value otherwise.

```css-nolint
color: if(
  style(--scheme: ice):
    if(
      supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);
      else: #03045e
    );
  style(--scheme: fire):
    if(
      supports(color: lch(21.38% 44.22 40.66)): lch(21.38% 44.22 40.66);
      else: #621708
    );
  else: black
);
```

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic `if()` usage

In this example, we'll show basic usage of each of the three types of CSS if condition.

#### HTML

Our HTML features a {{htmlelement("section")}} element with two {{htmlelement("article")}} elements inside it, containing `<h2>` [headings](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements). The `<section>` has a custom property set on it inside a [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) attribute — `--show-apple:true` — which we use later on to conditionally set a property value.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In our CSS, we first target the `<section>` element, laying it out with [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) and setting a {{cssxref("gap")}} between the two child `<article>` elements. We then use an `if()` function with a media query if condition to set the value of the {{cssxref("flex-direction")}} property to `row` if the document is in landscape orientation, or `column` if it is in portrait orientation. This lays out the `article` elements side-by-side in wide screens, and top-to-bottom in narrow screens.

```css hidden live-sample___basic
html {
  height: 100%;
  font-family: sans-serif;
}

body,
section {
  height: inherit;
}

h2 {
  text-align: center;
}

article {
  background-color: cyan;
  border: 3px solid gray;
  flex: 1;
}
```

```css-nolint live-sample___basic
section {
  display: flex;
  gap: 16px;
  flex-direction: if(
    media(orientation:landscape): row;
    else: column;
  )
}
```

Next, we target the `<h2>` element's {{cssxref("::before")}} pseudo-element, setting its {{cssxref("content")}} property to contain an apple emoji., but only if `--show-apple:true` is set (we did this earlier in our HTML). We achieve this using an `if()` function with a style query if condition:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple:true): "🍎 ";
  );
}
```

Finally, we target the `<h2>` element itself. We use a feature query if condition to test whether the browser supports `lch()` colors, and set the {{cssxref("color")}} property to an `lch()` color if so, or a hex equivalent if not.

```css-nolint live-sample___basic
h2 {
    color: if(
    supports(color: lch(29.57% 43.25 344.44)): lch(29.57% 43.25 344.44);
    else: #792359;
  )
}
```

#### Result

This demo will render as follows:

{{EmbedLiveSample("basic", "100%", "240")}}

Note how the styling is applied. You can test out the conditional styling pretty easily for at least the first two `if()` queries by modifying the rendered demo using your browser's devtools:

- Try for example removing the `<section>` element's `style` attribute and note how the apple emojis are no longer rendered.
- You could also try changing the `height` attribute of the embedding `<iframe>` to say `1200px`, resulting in the document orientation changing from landscape to portrait, and note how the layout changes as a result.

### Controlling a color scheme with `if()`

This demo shows how you can start to have some real fun with CSS `if()` functions. Amongst other things, we use `if()` functions to conditionally set the values of a couple of custom properties to control an entire color scheme.

#### HTML

Our HTML contains an {{htmlelement("article")}} element with some content inside it — a top-level heading, a couple of {{htmlelement("p")}} elements, and an {{htmlelement("aside")}}. Below that we include a {{htmlelement("form")}} containing a {{htmlelement("select")}} drop-down that allows you to select a color scheme.

```html-nolint live-sample___color-scheme
<article>
  <h1>Main heading</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipiscing elit.
    Quisque faucibus ex sapien vitae pellentesque sem placerat.
    In id cursus mi pretium tellus duis convallis.
  </p>
  <aside>
    <h2>An aside</h2>
    <p>
      Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
      fringilla lacus nec metus bibendum egestas.
    </p>
  </aside>
  <p>
    Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
    hendrerit semper vel class aptent taciti sociosqu. Ad litora
    torquent per conubia nostra inceptos himenaeos.
  </p>
</article>
<form>
  <label for="scheme">Choose color scheme:</label>
  <select id="scheme">
    <option value="">Default</option>
    <option value="ice">Ice</option>
    <option value="fire">Fire</option>
  </select>
</form>
```

### JavaScript

Next, let's look at our minimal JavaScript. This adds a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event listener to the `<select>` element. When a new value is selected, our script sets the `<article>` element's [`class`](/en-US/docs/Web/HTML/Reference/Global_attributes/class) attribute to equal that value.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In our CSS, we start by giving the `<body>` element a {{cssxref("max-width")}} of `700px`. We then center it on the screen using `auto` {{cssxref("margin")}} values. However, we use an `if()` function with a media query if condition to set the value to `0 auto` if the viewport width is less than `700px`, and `20px auto 0` if it is wider. This means that on wide screens, we get a bit of margin at the top of the content, but it is removed on narrow screens, where it looks a bit weird.

```css hidden live-sample___color-scheme
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

p {
  line-height: 1.5;
}

form {
  padding-left: 20px;
  margin-top: 20px;
}

article h2 {
  margin: 0;
  font-size: 1.8rem;
}
```

```css-nolint live-sample___color-scheme
body {
  max-width: 700px;
  margin: if(
    media(width < 700px): 0 auto;
    else: 20px auto 0;
  );
}
```

Next up, we set the `--scheme` custom property to a different value on our `<article>` element depending on the `class` name set on it by our JavaScript when a new value is selected in our `<select>` element. You'll see the significance of this in the next CSS block.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

Here we can start to see the real power of CSS `if()` functions combined with custom properties. We are using `if()` functions to set our `--color1` and `--color2` custom properties to different color values depending on the value set for the `--scheme` custom property. We then use the `--color1` and `--color2` values in our `<article>` element's {{cssxref("color")}}, {{cssxref("border")}}, and {{cssxref("background-image")}} properties, and our `<aside>` element's `color` and `background-color` properties.

We are controlling our entire color scheme via custom properties, with different values set via `if() functions.`

```css-nolint live-sample___color-scheme
article {
  padding: 20px;
  --color1: if(
    style(--scheme: ice): #03045e;
    style(--scheme: fire): #621708;
    else: black;
  );
  --color2: if(
    style(--scheme: ice): #caf0f8;
    style(--scheme: fire): #ffc971;
    else: white;
  );

  color: var(--color1);
  border: 3px solid var(--color1);
  background-image: linear-gradient(
    to left,
    var(--color2),
    white,
    var(--color2)
  );
}

aside {
  color: var(--color2);
  background-color: var(--color1);
  padding: 20px;
}
```

Finally, we use `if()` functions in a couple more places:

- We set our `<h1>` element's {{cssxref("font-size")}} to be `calc(3rem + 2vw)` if the viewport is wider than `700px`, and `3rem` if not. This means that the font sizes dynamically with the viewport on wider screens, but stays the same on narrow screens.
- We set a suitable emoji as the {{cssxref("content")}} of our `<h1>` element's {{cssxref("::before")}} pseudo-class, depending on the value of the `--scheme` custom property.

```css-nolint live-sample___color-scheme
h1 {
  margin: 0;
  font-size: if(
    media(width > 700px): calc(3rem + 2vw);
    else: 3rem;
  );
}

h1::before {
  content: if(
    style(--scheme: ice): "❄️ ";
    style(--scheme: fire): "🔥 ";
    else: "";
  );
}
```

#### Result

This demo renders as follows:

{{EmbedLiveSample("color-scheme", "100%", "500")}}

Try selecting different color scheme values to see the effect on the look and feel.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS values and units modules](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [Container style queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
