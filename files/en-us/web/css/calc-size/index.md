---
title: calc-size()
slug: Web/CSS/calc-size
page-type: css-function
status:
  - experimental
browser-compat: css.types.calc-size
---

{{CSSRef}}{{seecompattable}}

The **`calc-size()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) allows you to perform calculations on [intrinsic size](/en-US/docs/Glossary/Intrinsic_Size) values such as `auto`, [`fit-content`](/en-US/docs/Web/CSS/fit-content), and [`max-content`](/en-US/docs/Web/CSS/max-content); this is not supported by the regular {{cssxref("calc()")}} function.

`calc-size()` return values can also be [interpolated](/en-US/docs/Glossary/Interpolation), enabling size keyword values to be used in [animations](/en-US/docs/Web/CSS/CSS_animations) and [transitions](/en-US/docs/Web/CSS/CSS_transitions). In effect, including `calc-size()` in a property value automatically applies [`interpolate-size: allow-keywords`](/en-US/docs/Web/CSS/interpolate-size) to the selection.

Note however that `interpolate-size` is inherited, therefore applying it to an element enables interpolation of intrinsic size keywords for every property applied to that element and its children. As a result, `interpolate-size` is the preferred solution for enabling intrinsic size animations. You should only use `calc-size()` to enable intrinsic size animations if they also require calculations.

## Syntax

```css
/* Pass a value through calc-size() */
calc-size(auto, size)
calc-size(fit-content, size)

/* Perform a calculation */
calc-size(min-content, size + 100px)
calc-size(fit-content, size / 2)

/* Calculation including a function */
calc-size(auto, round(up, size, 50px))
```

### Parameters

The `calc-size()` function's syntax is as follows:

```plain
calc-size(<calc-size-basis>, <calc-sum>)
```

The parameters are:

- `<calc-size-basis>`

  - : The value (most commonly an intrinsic size) that you want to perform a calculation on.

- [`<calc-sum>`](/en-US/docs/Web/CSS/calc-sum)

  - : An expression that defines the calculation to be performed on the `<calc-size-basis>`.

### Return value

Returns a value equal to the `<calc-size-basis>` modified by the `<calc-sum>` expression. As the `<calc-size-basis>` value is an intrinsic size value, the return value is a modified intrinsic size value that behaves like the intrinsic size value input into the function.

## Description

Certain browser layout algorithms have special behaviors for intrinsic sizing keywords. The `calc-size()` function is explicitly defined to represent an intrinsic size rather than a [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage), thereby enforcing correctness. `calc-size()` enables calculations to be performed on intrinsic size values in a safe, well-defined manner.

### Valid values for the first argument (`<calc-size-basis>`)

The first `calc-size()` argument can be one of the following intrinsic values:

- `auto`
- {{cssxref("min-content")}}
- {{cssxref("max-content")}}
- {{cssxref("fit-content")}}
- `content` (for containers sized using {{cssxref("flex-basis")}}).

There are also a few special values that this argument can take:

- A nested `calc-size()` value. This isn't something you'd be likely to do very often, but it is available ensuring using a [CSS variable](/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) as the `<calc-size-basis>` will always work, provided the variable is a valid value for the property `calc-size()` is being set on. So for example, this will work:

  ```css
  section {
    height: calc-size(calc-size(max-content, size), size + 2rem);
  }
  ```

  As will this:

  ```css
  :root {
    --intrinsic-size: calc-size(max-content, size);
  }

  section {
    height: calc-size(var(--intrinsic-size), size + 2rem);
  }
  ```

- Another `<calc-sum>`, with the same restrictions as the `<calc-sum>` specified for the second argument, except that the `size` keyword cannot be included. You likely will not do this, as you are no longer doing a calculation on an intrinsic size value, but if a custom property value is a `<calc-sum>`, the function will still work. For example, this will work directly or if you use a custom property with a value of `300px + 2rem`:

  ```css
  section {
    height: calc-size(300px + 2rem, size / 2);
  }
  ```

- The keyword `any`, which represents an unspecified definite size. In this case, the `size` keyword cannot be included in the second argument, and the `calc-size()` returns the result of the second argument calculation. For example:

  ```css
  section {
    height: calc-size(any, 300px * 1.5); /* Returns 450px */
  }
  ```

Mixing different intrinsic sizes together in the same calculation doesn't work. For example, `max-content - min-content` doesn't make sense. `calc-size()` only allows a single intrinsic size value in each calculation, avoiding this problem.

### Valid values for the second argument (`<calc-sum>`)

The second `calc-size()` argument is a [`<calc-sum>`](/en-US/docs/Web/CSS/calc-sum) expression.

In this expression:

- The keyword `size` represents the `<calc-size-basis>` specified as the first argument.
- Operands can include `size`, and any value types that make sense in the context.
- The `+`, `-`, `*`, and `/` operators can be included.
- Other mathematical functions can be included such as {{cssxref("round()")}}, {{cssxref("max()")}}, or even a nested `calc-size()`.
- The overall expression must match [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage), and resolve to a [`<length>`](/en-US/docs/Web/CSS/length).

### Enabling animation of intrinsic size values

`calc-size()` return values can be interpolated, enabling animations between a [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) value and a `calc-size()` intrinsic size return value.

> [!NOTE]
> You should avoid animating box model properties if possible, to cut down on layout events and mitigate the resulting impact on performance (see [Critical rendering path > Layout](/en-US/docs/Web/Performance/Critical_rendering_path#layout)).

For example, you could use a [transition](/en-US/docs/Web/CSS/CSS_transitions) to animate a container `width` between `0` and `auto` like so:

```css
section {
  width: 0;
  transition: width ease 1s;
}

section:hover,
section:focus {
  width: calc-size(auto, size);
}
```

In the above case, we are not calculating anything — we are putting `auto` into `calc-size()` and returning it unchanged. The {{cssxref("interpolate-size")}} property makes animations like the above simpler to implement in most cases, especially when there are multiple animations to consider. It is inherited and therefore only needs to be declared once on an ancestor property, meaning we could have transitioned between `0` and `auto` without using `calc-size()`.

The `calc-size()` function should only be used to enable intrinsic size animations if they also require calculations. For example, in the following case we are animating the `width` _and_ applying a calculation to the intrinsic size end state:

```css
section {
  width: 0;
  transition: width ease 1s;
}

section:hover,
section:focus {
  width: calc-size(auto, size + 2rem);
}
```

One case in which `calc-size()` is useful is when you want to animate between an intrinsic size and a modified version of the same intrinsic size. This is not possible with `interpolate-size` and `calc()`. For example, the following {{cssxref("@keyframes")}} definition animates a container `width` between `fit-content` and 70% of the `fit-content`.

```css
@keyframes narrower {
  from {
    width: fit-content;
  }

  to {
    width: calc-size(fit-content, size * 0.7);
  }
}
```

> [!NOTE]
> Note that `calc-size()` does not enable animating between two different intrinsic size values.

## Formal syntax

{{csssyntax}}

## Examples

### Basic `calc-size` usage

This example shows basic dimension sizing of a container using `calc-size()`

#### HTML

The HTML contains a single {{htmlelement("section")}} element that contains some child content.

```html
<section>
  <h2>Favorite quote</h2>

  <p>
    Fashion is something so ugly it has to be changed every fifteen minutes.
  </p>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid black;
}

h2 {
  margin: 0;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p {
  font-size: 0.8rem;
}
```

In the CSS, we use [flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout) to center the child elements inside the `<section>`, and set the`width` and `height` of the `<section>` to `calc-size()` functions. The `width` is set equal to `fit-content` plus `6rem`. The `height` is set to `auto` multiplied by two.

```css
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: calc-size(fit-content, size + 6rem);
  height: calc-size(auto, size * 2);
}
```

The rest of the CSS has been hidden for brevity.

#### Result

We've created some horizontal and vertical space for the text to be centered in, without the use of padding.

{{ EmbedLiveSample('Basic `calc-size` usage', '100%', '150') }}

### Basic `calc-size` animations

This example demonstrates how to use `calc-size()` to animate between a specific size and an intrinsic size. The demo features a character badge/"name tag", which can be hovered or focused to reveal information about the character. The reveal is handled by a {{cssxref("height")}} transition between a set length and `max-content`.

#### HTML

The HTML contains a single {{htmlelement("section")}} element with [`tabindex="0"`](/en-US/docs/Web/HTML/Global_attributes/tabindex) set on it so it can receive keyboard focus. The `<section>` contains {{htmlelement("header")}} and {{htmlelement("main")}} elements, each with their own child content.

```html
<section tabindex="0">
  <header>
    <h2>Chris Mills</h2>
  </header>
  <main>
    <p>Chris is the silent phantom of MDN.</p>
    <ul>
      <li><strong>Height</strong>: 3.03m</li>
      <li><strong>Weight</strong>: 160kg</li>
      <li><strong>Tech Fu</strong>: 7</li>
      <li><strong>Bad Jokes</strong>: 9</li>
    </ul>
  </main>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

section {
  font-family: Arial, Helvetica, sans-serif;
  width: 175px;
  border-radius: 5px;
  background: #eee;
  box-shadow:
    inset 1px 1px 4px rgb(255 255 255 / 0.5),
    inset -1px -1px 4px rgb(0 0 0 / 0.5);
}

header {
  padding: 10px;
  border-bottom: 2px solid #ccc;
}

main {
  padding: 0.7rem;
}

h2 {
  margin: 0;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 1px;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

p {
  margin-top: 0;
}
```

In the CSS, we set the `<section>`'s {{cssxref("height")}} to `2.5rem` and {{cssxref("overflow")}} to `hidden` so only the `<header>` is shown by default, then specify a `transition` that animates the `<section>` `height` over 1 second during state changes. Finally, we set the `<section>` `height` to a `calc-size()` function call on {{cssxref(":hover")}} and {{cssxref(":focus")}}. The function return value is the equivalent of `max-content` + `2rem`.

```css
section {
  height: 2.5rem;
  overflow: hidden;
  transition: height ease 1s;
}

section:hover,
section:focus {
  height: calc-size(max-content, size + 2rem);
}
```

The rest of the CSS has been hidden for brevity.

#### Result

Try hovering over the `<section>` or focusing it via the keyboard — it will animate to its full height + 2rem, revealing all the content with 2rems of extra space at the bottom.

{{ EmbedLiveSample('Basic `calc-size` animations', '100%', '250') }}

### Adjusting reading width based on `fit-content`

This example shows a container with text inside it, and a button that can be clicked to make the container width narrower or wider depending on reading preference.

#### HTML

The HTML contains a single {{htmlelement("section")}} element containing child text content, plus a {{htmlelement("button")}} to change the `<section>` width.

```html
<section class="easy-reader">
  <h2>Easy reader</h2>

  <p>
    Eius velit aperiam ipsa. Deleniti eum excepturi ut magni maxime maxime
    beatae. Dicta aperiam est laudantium ut illum facere qui officiis. Sunt
    deleniti quam id. Quis sunt voluptatem praesentium minima dolorum autem
    consequatur velit.
  </p>

  <p>
    Vitae ab incidunt velit aspernatur deleniti distinctio rerum. Et natus sed
    et quos mollitia quia quod. Quae officia ex ea. Ducimus ut voluptatem et et
    debitis. Quidem provident laboriosam exercitationem similique deleniti.
    Temporibus vel veniam mollitia magni unde a nostrum.
  </p>

  <button class="width-adjust">Narrower</button>
</section>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

body {
  width: 600px;
  margin: 0 auto;
}

section {
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: #eee;
  border: 2px solid #ccc;
  padding: 0 20px;
  position: relative;
}

p,
li {
  font-size: 0.8rem;
  line-height: 1.5;
}

button {
  position: absolute;
  top: 2px;
  right: 2px;
}
```

In the CSS, we set the `<section>`'s {{cssxref("width")}} to a default of {{cssxref("fit-content")}}. We then define two sets of {{cssxref("@keyframes")}}, `narrower`, which animates from `fit-content` to 70% of `fit-content` (calculated using `calc-size()`), and `wider`, which animates the same values but in the opposite direction. Finally, we attach those animations to two classes — `.narrower` and `.wider`. Each animation is defined to last one second and to keep the final state applied once finished.

```css
section {
  width: fit-content;
}

@keyframes narrower {
  from {
    width: fit-content;
  }

  to {
    width: calc-size(fit-content, size * 0.7);
  }
}

@keyframes wider {
  from {
    width: calc-size(fit-content, size * 0.7);
  }

  to {
    width: fit-content;
  }
}

.narrower {
  animation: narrower 1s ease forwards;
}

.wider {
  animation: wider 1s ease forwards;
}
```

The rest of the CSS has been hidden for brevity.

#### JavaScript

The JavaScript provides a narrower/wider toggle that applies the relevant class to the `<section>` when the button is clicked:

```js
const widthAdjustBtn = document.querySelector(".width-adjust");
const easyReader = document.querySelector(".easy-reader");

widthAdjustBtn.addEventListener("click", () => {
  if (easyReader.classList.length === 1) {
    easyReader.classList.add("narrower");
    widthAdjustBtn.textContent = "Wider";
  } else if (easyReader.classList.contains("wider")) {
    easyReader.classList.replace("wider", "narrower");
    widthAdjustBtn.textContent = "Wider";
  } else if (easyReader.classList.contains("narrower")) {
    easyReader.classList.replace("narrower", "wider");
    widthAdjustBtn.textContent = "Narrower";
  }
});
```

#### Result

Try clicking the `<button>` a few times to adjust the `<section>` between the wide and narrow reading width, achieved by manipulating the `width` based on the `fit-content` value.

{{ EmbedLiveSample('Adjusting reading width based on `fit-content`', '100%', '300') }}

### Using a function inside the `calc-size()` function

As mentioned earlier, it is possible to use another function inside `calc-size()`. This example sets [`field-sizing: content`](/en-US/docs/Web/CSS/field-sizing) on {{htmlelement("input")}} elements to make them as wide as the entered content, and then uses a [`max()`](/en-US/docs/Web/CSS/max) function inside `calc-size()` to ensure that the `<input>`s are at least a minimum size, and only start to grow when the entered text becomes wider than that size — by being set to `fit-content` plus `20px`.

#### HTML

The HTML contains a {{htmlelement("form")}} element containing three textual `<input>` types. Each `<input>` has a {{htmlelement("label")}} associated with it to make the form accessible, and a [`maxlength`](/en-US/docs/Web/HTML/Attributes/maxlength) applied to stop entered values getting long enough to break the form layout.

```html
<form>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" maxlength="48" />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" maxlength="48" />
  </div>
  <div>
    <label for="address">Address:</label>
    <input type="text" id="address" name="address" maxlength="60" />
  </div>
</form>
```

#### CSS

```css hidden
* {
  box-sizing: border-box;
}

body {
  width: 600px;
  margin: 0 auto;
}

form {
  margin-top: 20px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: #eee;
  border: 2px solid #ccc;
}

div {
  display: flex;
  align-items: center;
}

div:not(div:last-child) {
  margin-bottom: 20px;
}
```

In the CSS, we set the `width` of the `<label>` elements to `100px`. We set `field-sizing: content` on the {{htmlelement("input")}} elements to make them as wide as the entered content — by default they would no width because nothing would be entered into them. To counteract this, we set their `width` values to `calc-size(fit-content, max(100px, size + 20px))`. This means that they are a minimum of `100px` wide, even with no value entered. When an entered value becomes wider than `100px`, their `width` changes to `fit-content` plus `20px`, which means they start to grow with the content size but keep a `20px` gap on the right-hand side.

```css
label {
  width: 100px;
}

input {
  field-sizing: content;
  width: calc-size(fit-content, max(100px, size + 20px));
}
```

The rest of the CSS has been hidden for brevity.

#### Result

Try entering some text inside the form inputs, and see how they grow when the values start to become as wide as the minimum width enforced by the `max()` function.

{{ EmbedLiveSample('Using a function inside the `calc-size()` function', '100%', '200') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("interpolate-size")}}
- {{cssxref("calc()")}}
- {{cssxref("round()")}}
- [Animate to height: auto; (and other intrinsic sizing keywords) in CSS](https://developer.chrome.com/docs/css-ui/animate-to-height-auto) on developer.chrome.com (2024)
