---
title: if()
slug: Web/CSS/if
page-type: css-function
status:
  - experimental
browser-compat: css.types.if
---

{{CSSRef}}{{SeeCompatTable}}

The **`if()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) allows different values to be set for a property depending on the result of a conditional test. The test can be based on a [style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), a [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), or a [feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

## Syntax

```css-nolint
/* Single <if-test> */
if(style(--scheme: dark): #eee;)
if(media(print): #000;)
if(media(width > 700px): 0 auto;)
if(supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);)

/* <if-test> with else */
if(style(--size: 2xl): 1em; else: 0.25em;)
if(media(print): white; else: black;)
if(media(width < 700px): 0 auto; else: 20px auto)
if(
  supports(color: lch(7.1% 60.23 300.16)): lch(7.1% 60.23 300.16);
  else: #03045e;
)
if(
  supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0);
  else: 3px solid #c0c0c0;
)

/* Multiple <if-test>s */
if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
  else: none;
)

/* <if-test> within a shorthand */
3px yellow if(
  style(--color: green): dashed;
  style(--color: yellow): inset;
  else: solid;
)
```

### Parameters

The parameter is a semi-colon–separated list of `<if-branch>`es. Each `<if-branch>` is an `<if-condition>` followed by a colon and a `<value>`:

```plain
<if-branch> = <if-condition> : <value>;
```

- `<if-condition>`
  - : An `<if-test>` or the `else` keyword.
    - `<if-test>`
      - : A [style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries), [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries), or [feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries).

    - `else`
      - : A keyword representing an `<if-condition>` that always evaluates to true.

- `<value>`
  - : A property value.

### Return value

A value or {{glossary("guaranteed_invalid_value", "guaranteed-invalid")}}.

## Description

The CSS `if()` function provides conditional logic to CSS property values, and works in a similar fashion to JavaScript [`if...else`](/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statements.

The `if()` function can be used inside the value of any property, and can contain zero or more semi-colon-separated `<if-condition>`s. Each `<if-condition>` is either an `<if-test> : <value>` pair or an `else : <value>` pair. The semi-colon after the last `<if-condition>` is optional.

The return value is calculated as follows:

1. The `<if-condition>` expressions are evaluated, in the order they appear in the function.
2. The first `<if-condition>` that evaluates to `true` has its associated `<value>` returned.
3. If no `<if-condition>` evaluates to `true`, the function returns a {{glossary("guaranteed_invalid_value", "&lt;guaranteed-invalid&gt:")}}. This behaves as invalid or `false` if the `if()` function is used in a value statement that has a fallback, such as a [custom property](/en-US/docs/Web/CSS/--*) or an {{cssxref("anchor()")}} function.

For example:

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

In this case, we are setting a different {{cssxref("linear-gradient()")}} as the {{cssxref("background-image")}} on {{htmlelement("div")}} elements, depending on whether a `--scheme` [custom property](/en-US/docs/Web/CSS/--*) is set to `ice` or `fire`. If `--scheme` doesn't exist, or it exists and is set to any other value, the `else` value comes into play, and the `background-image` property is set to `none`.

> [!NOTE]
> Each condition must be separated from its associated value with a colon, and each `<if-condition> : <value>` pair must be separated with a semi-colon. The semi-colon is optional for the last `<if-condition> : <value>` pair.

> [!WARNING]
> There must be no space between the `if` and the opening parenthesis (`(`). If there is, the whole declaration is invalid.

If a single `<if-condition>` or `<value>` is invalid, it does not invalidate the entire `if()` function; instead, the parser moves on to the next `<if-condition> : <value>` pair. If no `<if-condition>` nor `<value>` is valid, the function returns {{glossary("guaranteed_invalid_value", "guaranteed-invalid")}}.

### Frequency and position of `else : <value>` pairs

You can include multiple `else : <value>` pairs inside an `if()` function, in any position. However, in most cases, a single `else : <value>` pair at the end of the semi-colon-separated list is used to provide the default value that is always returned if none of the `<if-test>`s evaluate to true.

If you include an `else : <value>` pair before any `<if-test> : <value>` pairs, the conditions that follow it are not evaluated because `else` always evaluates to `true`. The following `if()` therefore always returns `none`, and the two `<if-test> : <value>` pairs are never evaluated:

```css-nolint
div {
  background-image: if(
    else: none;
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971)
  );
}
```

Debugging a value that is not behaving as expected is one case where you might want to put an `else : <value>` in a position other than the end of the value list. In the following example, we are trying to work out whether the first `<if-test> : <value>` pair is working properly. If it isn't, the `else : <value>` pair returns a value of `url("debug.png")` to display an image indicating that the first `<if-test> : <value>` pair needs fixing. The last two `<if-test> : <value>` pairs are again never evaluated.

```css-nolint
div {
  background-image: if(
    style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
    else: url("debug.png");
    style(--scheme: fire): linear-gradient(#ffc971, white, #ffc971);
    else: none;
  );
}
```

Note that an `if()` function is still valid if it contains only an `else : <value>` pair, or nothing at all. The following property values are both valid:

```css
background-color: if(else: yellow);
background-image: if();
```

These functions are not useful. They were included to demonstrate their validity. In this case, the {{cssxref("background-color")}} value will always be set to `yellow` and the `background-image` will be set to its initial value. You would be better off setting the `background-color` directly to `yellow`, and the `background-image` to `initial` or `none`.

### Types of if-tests

An `<if-test>` accepts one of three query types. This section looks at each one in detail.

#### Style queries

A [style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries) `<if-test>` allows you to test whether a particular property value is set on an element, and apply a value to a different property as a result. We walked through several style query examples earlier on; let's look at another example:

```css-nolint
background-image: if(
  style(--scheme: ice): linear-gradient(#caf0f8, white, #caf0f8);
  else: none;
);
```

If the `--scheme` custom property is set to a value of `ice` on the same element, the provided `linear-gradient()` value is returned. If not, then `none` is returned.

Using style queries inside `if()` statements has an advantage over {{cssxref("@container")}} queries — you can target an element with styles directly, based on whether a custom property is set on it, rather than having to check set styles on a container parent element.

You can also use `and`, `or`, or `not` logic inside style queries. For example:

```css-nolint
background-color: if(
  style((--scheme: dark) or (--scheme: very-dark)): black;
);

background-color: if(
  style((--scheme: dark) and (--contrast: hi)): black;
);

background-color: if(
  not style(--scheme: light): black;
);
```

A `@container` query does have some advantages — you can only set single property values at a time with `if()` style queries, whereas `@container` queries can be used to conditionally apply whole sets of rules. The two approaches are complementary, and have different uses.

Note that container style queries currently don't support regular CSS properties, just CSS custom properties. For example, the following won't work:

```css-nolint example-bad
if(
  background-color: if(style(color: white): black;);
)
```

#### Media queries

A [media query](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) `<if-test>` can be used to set a value for a property depending on whether a media query test returns true.

You can use media types. For example, the following `<if-test> : <value>` pair returns a value of `white` on print media, while the `else` clause causes `#eee` to be returned on non-print media.

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

A [feature query](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries) `<if-test>` can be used to set a value for a property depending on whether the browser supports a particular property value.

For example, the following returns an {{cssxref("color_value/lch()")}} color if `lch()` colors are supported, or an {{cssxref("color_value/rgb()")}} color if not:

```css-nolint
color: if(
  supports(color: lch(77.7% 0 0)): lch(77.7% 0 0);
  else: rgb(192, 192, 192);
)
```

Selector support queries also work. The following will return a value of `1em` if the browser supports the {{cssxref(":buffering")}} pseudo-class, or `initial` if not:

```css-nolint
margin-top: if(
  supports(selector(:buffering)): 1em;
  else: initial;
)
```

You can also use `and`, `or`, or `not` logic inside feature queries. For example:

```css-nolint
margin-top: if(
  supports((selector(:buffering)) and (color: blue)): 1em;
);

margin-top: if(
  supports((selector(:buffering)) or (color: not-a-color)): 1em;
);

margin-top: if(
  supports(not selector(:buffering)): 1em;
);
```

Feature queries are really useful inside `if()` statements when you need to vary a single property value based on support for a particular value or a separate property. When you want to set multiple declarations or rules based on one feature query, a regular {{cssxref("@supports")}} construct is better. The two approaches are complementary, and have different uses.

### Providing fallback values

The `if()` statement does not gracefully degrade; an explicit fallback needs to be provided for non-supporting browsers.

For example, in this case we provide a static {{cssxref("padding")}} value for browsers that don't support `if()`. Browsers that support `if()` will override the first declaration with the second one, which sets different padding values depending on whether or not the `--size: 2xl` custom property is set.

```css
padding: 1em;
padding: if(style(--size: 2xl): 1em; else: 0.25em);
```

> [!NOTE]
> Remember to include the `else` condition. In `if()`-supporting browsers, if no `else` value were included and `--size` was not equal to `2xl`, the padding would be set to `initial`.

### Whole and partial values

An `if()` function can be set as the value of any CSS property, but it can also be used to determine parts of property values. For example, the following sets a different {{cssxref("border-color")}} inside a {{cssxref("border")}} shorthand property, depending on whether {{cssxref("color_value/lch()")}} colors are supported:

```css-nolint
border: if(
  supports(color: lch(77.7% 0 0)): 3px solid lch(77.7% 0 0);
  else: 3px solid #c0c0c0;
);
```

However, we could use the `if()` function to determine the {{cssxref("border-color")}} component only:

```css-nolint
border: 3px solid
  if(
    supports(color: lch(77.7% 0 0)): lch(77.7% 0 0); else: #c0c0c0;
  );
```

### Nesting if() functions

Because an `if()` function can take the place of whole property values or individual components, it is possible to nest `if()` functions within other `if()` functions, and inside other functions such as {{cssxref("calc()")}}.

For example, in this declaration we are using `if()` to set a `color` property value depending on various conditions. We have an outer `if()` function that returns a particular value depending on whether the `--scheme` custom property is set to `ice` or `fire` (with an `else` value of `black` that is returned if neither of the conditions return true).

However, the two `<value>`s are also `if()` functions. These inner `if()` functions return a light color value if the user prefers a dark color scheme (determined using the [`prefers-color-scheme`](/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query), and a dark color value otherwise.

```css-nolint
color: if(
  style(--scheme: ice):
    if(
      media(prefers-color-scheme: dark): #caf0f8;
      else: #03045e;
    );
  style(--scheme: fire):
    if(
      media(prefers-color-scheme: dark): #ffc971;
      else: #621708;
    );
  else: black
);
```

In the next example, we set the `width` property equal to a `calc()` function that subtracts `50px` from a percentage of the parent element's width. The percentage is represented by an `if()` function, which test whether the `--scheme: wide` custom property is set. If so, the percentage is `70%`, so the outer function resolves to `calc(70% - 50px)`. If not, the percentage is `50%`, so the outer function resolves to `calc(50% - 50px)`.

```css-nolint
width: calc(if(
    style(--scheme: wide): 70%;
    else: 50%;
  ) - 50px);
```

## Formal syntax

{{CSSSyntax}}

## Examples

### Basic `if()` usage

In this example, we'll show basic usage of each of the three types of `<if-test>`.

#### HTML

Our HTML features a {{htmlelement("section")}} element with two {{htmlelement("article")}} elements inside it, containing `<h2>` [headings](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements). The `<section>` has a custom property set on it inside its [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) attribute — `--show-apple:true` — which we use later on to conditionally set a property value.

```html live-sample___basic
<section style="--show-apple:true">
  <article><h2>First article</h2></article>
  <article><h2>Second article</h2></article>
</section>
```

#### CSS

In our CSS, we first target the `<section>` element, laying it out with [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) and setting a {{cssxref("gap")}} between the two child `<article>` elements. We then use an `if()` function with an [`orientation`](/en-US/docs/Web/CSS/@media/orientation) media query `<if-test>` to set the value of the {{cssxref("flex-direction")}} property to `row` if the document is in landscape orientation, or `column` if it is in portrait orientation. This lays out the `article` elements side-by-side in wide screens, and top-to-bottom in narrow screens.

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

Next, we target the `<h2>` element's {{cssxref("::before")}} pseudo-element, setting its {{cssxref("content")}} property to an apple emoji, but only if `--show-apple: true` is set (we did this earlier with an inline {{htmlelement("style")}} in our HTML). We achieve this using an `if()` function with a [style query](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#style_queries_for_custom_properties) `<if-test>`:

```css-nolint live-sample___basic
h2::before {
  content: if(
    style(--show-apple:true): "🍎 ";
  );
}
```

Finally, we target the `<h2>` element itself. We use a feature query `<if-test>` to test whether the browser supports `lch()` colors, and set the {{cssxref("color")}} property to an `lch()` color if so, or a hex equivalent if not.

```css-nolint live-sample___basic
h2 {
    color: if(
    supports(color: lch(29.57% 43.25 344.44)): lch(29.57% 43.25 344.44);
    else: #792359;
  )
}
```

#### Result

{{EmbedLiveSample("basic", "100%", "240")}}

Note how the styling is applied. Test out the conditional styling for the first two `if()` queries by modifying the rendered demo using your browser's devtools:

- Remove the `<section>` element's `style` attribute and note how the apple emojis are no longer rendered.
- Change the `height` attribute of the embedding `<iframe>` to `1200px`. This will change the orientation from landscape to portrait. Note how the layout changes as a result.

### Controlling a color scheme with `if()`

This demo shows how you can start to have some real fun with CSS `if()` functions. Amongst other things, we use `if()` functions to conditionally set the values of some custom properties, enabling us to control the entire color scheme!

#### HTML

Our HTML contains an {{htmlelement("article")}} element with some content inside it — a top-level heading, a couple of {{htmlelement("p")}} elements, and an {{htmlelement("aside")}}. We also include a {{htmlelement("form")}} containing a {{htmlelement("select")}} drop-down that enables selecting a color scheme.

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

Our JavaScript adds a [`change`](/en-US/docs/Web/API/HTMLElement/change_event) event listener to the `<select>` element. When a new value is selected, our script sets the `<article>` element's [`class`](/en-US/docs/Web/HTML/Reference/Global_attributes/class) attribute to equal that value.

```js live-sample___color-scheme
const articleElem = document.querySelector("article");
const selectElem = document.querySelector("select");

selectElem.addEventListener("change", () => {
  articleElem.className = selectElem.value;
});
```

### CSS

In our CSS, we give the `<body>` element a {{cssxref("max-width")}} of `700px` and center it using `auto` {{cssxref("margin")}} values. However, we use an `if()` function with a media query `<if-test>` to set the {{cssxref("margin-top")}} component inside the `margin` shorthand to `0` if the viewport's width is less than `700px`, and `20px` if it is wider. This means that on wide screens we get a bit of margin at the top of the content, but this is removed on narrow screens, where it looks a bit weird.

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
    media(width < 700px): 0;
    else: 20px;
  ) auto 0;
}
```

We then set the `--scheme` custom property to match the `<article>` element's `class` name. The class will set by our JavaScript when a new value is selected in our `<select>` element. You'll see the significance of the custom element value in the next CSS block.

```css live-sample___color-scheme
.ice {
  --scheme: ice;
}

.fire {
  --scheme: fire;
}
```

We can see the real power of CSS `if()` functions when we combine them with custom properties. Here we use `if()` functions to set our `--color1` and `--color2` custom properties to different color values depending on the value of the `--scheme` custom property. We then use the `--color1` and `--color2` values in our `<article>` element's {{cssxref("color")}}, {{cssxref("border")}}, and {{cssxref("background-image")}} properties, and our `<aside>` element's `color` and `background-color` properties.

We are controlling our entire color scheme via custom properties, with different values set via `if()` functions.

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

- We set our `<h1>` element's {{cssxref("font-size")}} to be `calc(3rem + 2vw)` if the viewport is wider than `700px`, and `3rem` otherwise. This means the font size updates dynamically with viewport width changes on wider screens, but stays the same on narrow screens.
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

- [Container style queries](/en-US/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_style_queries)
- [Media queries](/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Feature queries](/en-US/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
- [CSS values and units module](/en-US/docs/Web/CSS/CSS_Values_and_Units)
