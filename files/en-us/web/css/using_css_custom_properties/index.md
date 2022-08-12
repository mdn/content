---
title: Using CSS custom properties (variables)
slug: Web/CSS/Using_CSS_custom_properties
tags:
  - CSS
  - CSS Variables
  - Custom Properties
  - Guide
  - Web
  - cascading variables
---
{{CSSRef}}

**Custom properties** (sometimes referred to as **CSS variables** or **cascading variables**) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., **`--main-color: black;`**) and are accessed using the {{cssxref("var", "var()")}} function (e.g., `color: var(--main-color);`).

Complex websites have very large amounts of CSS, often with a lot of repeated values. For example, the same color might be used in hundreds of different places, requiring global search and replace if that color needs to change. Custom properties allow a value to be stored in one place, then referenced in multiple other places. An additional benefit is semantic identifiers. For example, `--main-text-color` is easier to understand than `#00ff00`, especially if this same color is also used in other contexts.

Custom properties are subject to the cascade and inherit their value from their parent.

## Basic usage

Declaring a custom property is done using a custom property name that begins with a double hyphen (`--`), and a property value that can be any valid CSS value. Like any other property, this is written inside a ruleset, like so:

```css
element {
  --main-bg-color: brown;
}
```

Note that the selector given to the ruleset defines the scope that the custom property can be used in. A common best practice is to define custom properties on the {{cssxref(":root")}} pseudo-class, so that it can be applied globally across your HTML document:

```css
:root {
  --main-bg-color: brown;
}
```

However, this doesn't always have to be the case: you maybe have a good reason for limiting the scope of your custom properties.

> **Note:** Custom property names are case sensitive — `--my-color` will be treated as a separate custom property to `--My-color`.

As mentioned earlier, you use the custom property value by specifying your custom property name inside the {{cssxref("var", "var()")}} function, in place of a regular property value:

```css
element {
  background-color: var(--main-bg-color);
}
```

## First steps with custom properties

Let's start with this CSS that applies the same color to elements of different classes:

```css
.one {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}

.five {
  background-color: brown;
}
```

We'll apply it to this HTML:

```html
<div>
  <div class="one">1:</div>
  <div class="two">2: Text <span class="five">5 - more text</span></div>
  <input class="three">
  <textarea class="four">4: Lorem Ipsum</textarea>
</div>
```

This produces the following result:

{{EmbedLiveSample("First_steps_with_custom_properties",600,180)}}

## Using the :root pseudo-class

Notice the repetitive CSS in the example above. The background color is set to `brown` in several places. For some CSS declarations, it is possible to declare this higher in the cascade and let CSS inheritance solve this problem naturally. For non-trivial projects, this is not always possible. By declaring a custom property on the {{cssxref(":root")}} pseudo-class and using it where needed throughout the document, a CSS author can reduce the need for repetition:

```css
:root {
  --main-bg-color: brown;
}

.one {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.five {
  background-color: var(--main-bg-color);
}
```

```html hidden
<div>
    <div class="one"></div>
    <div class="two">Text <span class="five">- more text</span></div>
    <input class="three">
    <textarea class="four">Lorem Ipsum</textarea>
</div>
```

This leads to the same result as the previous example, yet allows for one canonical declaration of the desired property value; very useful if you want to change the value across the entire page later.

## Inheritance of custom properties

Custom properties do inherit. This means that if no value is set for a custom property on a given element, the value of its parent is used. Take this HTML:

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
```

… with the following CSS:

```css
.two {
  --test: 10px;
}

.three {
  --test: 2em;
}
```

In this case, the results of `var(--test)` are:

- For the `class="two"` element: `10px`
- For the `class="three"` element: `2em`
- For the `class="four"` element: `10px` (inherited from its parent)
- For the `class="one"` element: _invalid value_, which is the default value of any custom property

Keep in mind that these are custom properties, not actual variables like you might find in other programming languages. The value is computed where it is needed, not stored for use in other rules. For instance, you cannot set a property for an element and expect to retrieve it in a sibling's descendant's rule. The property is only set for the matching selector and its descendants, like any normal CSS.

## Custom property fallback values

Using the [`var()`](/en-US/docs/Web/CSS/var) function, you can define multiple **fallback values** when the given variable is not yet defined; this can be useful when working with [Custom Elements](/en-US/docs/Web/Web_Components/Using_custom_elements) and [Shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM).

> **Note:** Fallback values aren't used to fix the browser compatibility. If the browser doesn't support CSS custom properties, the fallback value won't help. It's just a backup for the browser which supports CSS custom properties to choose a different value if the given variable isn't defined or has an invalid value.

The first argument to the function is the name of the [custom property](https://www.w3.org/TR/css-variables/#custom-property) to be substituted. The second argument to the function, if provided, is a fallback value, which is used as the substitution value when the referenced [custom property](https://www.w3.org/TR/css-variables/#custom-property) is invalid. The function only accepts two parameters, assigning everything following the first comma as the second parameter. If that second parameter is invalid, such as if a comma-separated list is provided, the fallback will fail. For example:

```css
.two {
  /* Red if --my-var is not defined */
  color: var(--my-var, red);
}

.three {
  /* pink if --my-var and --my-background are not defined */
  background-color: var(--my-var, var(--my-background, pink));
}

.three {
   /* Invalid: "--my-background, pink" */
  background-color: var(--my-var, --my-background, pink);
}
```

Including a custom property as a fallback, as seen in the second example above, is the correct way to provide more than one fallback. The technique has been seen to cause performance issues as it takes more time to parse through the variables.

> **Note:** The syntax of the fallback, like that of [custom properties](https://www.w3.org/TR/css-variables/#custom-property), allows commas. For example, `var(--foo, red, blue)` defines a fallback of `red, blue` — anything between the first comma and the end of the function is considered a fallback value.

## Handling invalid custom properties

Each CSS property can be assigned a defined set of values. If you try to assign a value to a property that is outside its set of valid values, it's considered _invalid_.

When the browser encounters an invalid value for a normal property, it discards the value, and elements are assigned the values that they would have had if the declaration simply did not exist.

However, when the values of custom properties are parsed, the browser doesn't yet know where they will be used, so it must consider nearly all values as _valid_.

Unfortunately, these valid values can be used, via the `var()` functional notation, in a context where they might not make sense. Properties and custom variables can lead to invalid CSS statements, leading to the new concept of _valid at computed time._

When the browser encounters an invalid `var()` substitution, then the [initial](/en-US/docs/Web/CSS/initial_value) or [inherited](/en-US/docs/Web/CSS/inheritance) value of the property is used.

The next two examples illustrate this.

### Invalid normal properties

In this example we attempt to apply a value of `16px` to the {{cssxref("color")}} property. Because this is invalid, the CSS is discarded and the result is as if the rule did not exist, so the previous `color: blue` rule is applied instead, and the paragraph is blue.

#### HTML

```html
<p>This paragraph is initially black.</p>
```

#### CSS

```css
p {
  color: blue;
}

p {
  color: 16px;
}
```

#### Result

{{EmbedLiveSample('Invalid normal properties', 100, 100)}}

### Invalid custom properties

This example is just like the last one, except we use a custom property.

As expected, the browser substitutes the value of `--text-color` in place of `var(--text-color)`, but `16px` is not a valid property value for {{cssxref("color")}}. After substitution, the property doesn't make sense. The browser handles this situation in two steps:

1. Check if the property {{cssxref("color")}} is inheritable. It is, but this `<p>` doesn't have any parent with the `color` property set. So we move on to the next step.
2. Set the value to its **default initial value**, which is black.

#### HTML

```html
<p>This paragraph is initially black.</p>
```

#### CSS

```css
:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

#### Result

{{EmbedLiveSample('Invalid custom properties', 100, 100)}}

## Values in JavaScript

To use the values of custom properties in JavaScript, it is just like standard properties.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## See also

- [Custom property syntax](/en-US/docs/Web/CSS/--*)
- [`var()`](/en-US/docs/Web/CSS/var)
