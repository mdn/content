---
title: Handling conflicts
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
page-type: learn-module-chapter
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

The aim of this lesson is to develop your understanding of some of the most fundamental concepts of CSS — the cascade, specificity, and inheritance — which control how CSS is applied to HTML and how conflicts between style declarations are resolved.

While working through this lesson may seem less relevant immediately and a little more academic than some other parts of the course, an understanding of these concepts will save you from a lot of pain later on! We encourage you to work through this section carefully and check that you understand the concepts before moving on.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        HTML basics (study
        <a href="/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Basic HTML syntax</a
        >), <a href="/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS selectors</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Learning outcomes:</th>
      <td>
        <ul>
          <li>Understand how rules can conflict in CSS.</li>
          <li>Inheritance.</li>
          <li>The cascade.</li>
          <li>The main concepts that govern the outcome of conflicts — specificity, source order, and importance.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Conflicting rules

CSS stands for **Cascading Style Sheets**, and that first word _cascading_ is incredibly important to understand — the way that the cascade behaves is key to understanding CSS.

At some point, you will be working on a project and you will find that the CSS you thought should be applied to an element is not working. Often, the problem is that you create two rules that apply different values of the same property to the same element. [**Cascade**](/en-US/docs/Web/CSS/CSS_cascade/Cascade) and the closely-related concept of [**specificity**](/en-US/docs/Web/CSS/CSS_cascade/Specificity) are mechanisms that control which rule applies when there is such a conflict. The rule that's styling your element may not be the one you expect, so you need to understand how these mechanisms work.

Also significant here is the concept of [**inheritance**](/en-US/docs/Web/CSS/CSS_cascade/Inheritance), which means that some CSS properties by default inherit values set on the current element's parent element and some don't. This can also cause some behavior that you might not expect.

Let's start by taking a quick look at the key things we are dealing with, then we'll look at each in turn and see how they interact with each other and your CSS. These can seem like a tricky set of concepts to understand. As you get more practice writing CSS, the way it works will become more obvious to you.

### Cascade

Stylesheets [**cascade**](/en-US/docs/Web/CSS/CSS_cascade/Cascade) — at a very simple level, this means that the origin and the order of CSS rules matter. When two rules both have equal specificity, the one that is defined last in the stylesheet is the one that will be used. There are other concepts that have an effect, such as [cascade layers](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), but these are more advanced and we won't cover them in any detail here.

In the below example, we have two rules that could apply to the `<h1>` element. The `<h1>` content ends up being colored blue. This is because both the rules are from the same source, have an identical element selector, and therefore, carry the same specificity, but the last one in the source order wins.

```html live-sample___cascade-simple
<h1>This is my heading.</h1>
```

```css live-sample___cascade-simple
h1 {
  color: red;
}
h1 {
  color: blue;
}
```

{{EmbedLiveSample("cascade-simple")}}

### Specificity

[Specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity) is the algorithm that the browser uses to decide which property value is applied to an element. If multiple style blocks have different selectors that configure the same property with different values and target the same element, specificity decides the property value that gets applied to the element. Specificity is basically a measure of how specific a selector's selection will be:

- An element selector is less specific; it will select all elements of that type that appear on a page, so it has less weight. Pseudo-element selectors have the same specificity as regular element selectors.
- A class selector is more specific; it will select only the elements on a page that have a specific `class` attribute value, so it has more weight. Attribute selectors and pseudo-classes have the same weight as a class.

Below, we again have two rules that could apply to the `<h1>` element. The `<h1>` content below ends up being colored red because the class selector `main-heading` gives its rule a higher specificity. So even though the rule with the `<h1>` element selector appears further down in the source order, the one with the higher specificity, defined using the class selector, will be applied.

```html live-sample___specificity-simple
<h1 class="main-heading">This is my heading.</h1>
```

```css live-sample___specificity-simple
.main-heading {
  color: red;
}

h1 {
  color: blue;
}
```

{{EmbedLiveSample("specificity-simple")}}

We'll explain the specificity algorithm later on.

### Inheritance

Inheritance also needs to be understood in this context — some CSS property values set on parent elements are inherited by their child elements, and some aren't.

For example, if you set a `color` and `font-family` on an element, every element inside it will also be styled with that color and font, unless you've applied different color and font values directly to them.

```html live-sample___inheritance-simple
<p>
  As the body has been set to have a color of blue this is inherited through the
  descendants.
</p>
<p>
  We can change the color by targeting the element with a selector, such as this
  <span>span</span>.
</p>
```

```css live-sample___inheritance-simple
body {
  color: blue;
}

span {
  color: black;
}
```

{{EmbedLiveSample("inheritance-simple")}}

Some properties do not inherit — for example, if you set a {{cssxref("width")}} of 50% on an element, all of its descendants do not get a width of 50% of their parent's width. If this was the case, CSS would be very frustrating to use!

> [!NOTE]
> On MDN CSS property reference pages, you can find a technical information box called "Formal definition", which lists a number of data points about that property, including whether it is inherited or not. See the [color property Formal definition section](/en-US/docs/Web/CSS/color#formal_definition) as an example.

### Understanding how the concepts work together

These three concepts (cascade, specificity, and inheritance) together control which CSS applies to what element. In the sections below, we'll see how they work together. It can sometimes seem a little bit complicated, but you will start to remember them as you get more experienced with CSS, and you can always look up the details if you forget! Even experienced developers don't remember all the details.

## Understanding inheritance

We'll start with inheritance. In the example below, we have a {{HTMLElement("ul")}} element with two levels of unordered lists nested inside it. We have given the outer `<ul>` a border, padding, and font color.

The `color` property is an inherited property. So, the `color` property value is applied to the direct children and also to the indirect children — the immediate child `<li>`s and those inside the first nested list. We have then added the class `special` to the second nested list and applied a different color to it. This then inherits down through its children.

```html live-sample___inheritance
<ul class="main">
  <li>Item One</li>
  <li>
    Item Two
    <ul>
      <li>2.1</li>
      <li>2.2</li>
    </ul>
  </li>
  <li>
    Item Three
    <ul class="special">
      <li>
        3.1
        <ul>
          <li>3.1.1</li>
          <li>3.1.2</li>
        </ul>
      </li>
      <li>3.2</li>
    </ul>
  </li>
</ul>
```

```css live-sample___inheritance
.main {
  color: rebeccapurple;
  border: 2px solid #ccc;
  padding: 1em;
}

.special {
  color: black;
  font-weight: bold;
}
```

{{EmbedLiveSample("inheritance", "", "280px")}}

Properties like `width` (as mentioned earlier), `margin`, `padding`, and `border` are not inherited properties. If a border were to be inherited by the children in this list example, every single list and list item would gain a border — probably not an effect we would ever want!

Though every CSS property page lists whether or not the property is inherited, you can often guess the same intuitively if you know what aspect the property value will style.

### Controlling inheritance

CSS provides five special universal property values for controlling inheritance. Every CSS property accepts these values.

- {{cssxref("inherit")}}
  - : Sets the property value applied to a selected element to be the same as that of its parent element. Effectively, this "turns on inheritance".
- {{cssxref("initial")}}
  - : Sets the property value applied to a selected element to the [initial value](/en-US/docs/Web/CSS/CSS_cascade/initial_value) of that property.
- {{cssxref("revert")}}
  - : Resets the property value applied to a selected element to the browser's default styling rather than the defaults applied to that property. This value acts like {{cssxref("unset")}} in many cases.
- {{cssxref("revert-layer")}}
  - : Resets the property value applied to a selected element to the value established in a previous [cascade layer](/en-US/docs/Web/CSS/@layer).
- {{cssxref("unset")}}
  - : Resets the property to its natural value, which means that if the property is naturally inherited it acts like `inherit`, otherwise it acts like `initial`.

> [!NOTE]
> See [Origin types](/en-US/docs/Web/CSS/CSS_cascade/Cascade#origin_types) for more information on each of these and how they work.

We can look at a list of links and explore how universal values work. The live example below allows you to play with the CSS and see what happens when you make changes. Playing with code really is the best way to better understand HTML and CSS.

For example:

1. The second list item has the class `my-class-1` applied. This sets the color of the `<a>` element nested inside to `inherit`. If you remove the rule, how does it change the color of the link?
2. Do you understand why the third and fourth links are the color that they are? The third link is set to `initial`, which means it uses the initial value of the property (in this case black) and not the browser default for links, which is blue. The fourth is set to `unset` which means that the link text uses the color of the parent element, green.
3. Which of the links will change color if you define a new color for the `<a>` element — for example `a { color: red; }`?
4. After reading the next section on resetting all properties, come back and change the `color` property to `all`. Notice how the second link is on a new line and has a bullet. What properties do you think were inherited?

```html live-sample___keywords
<ul>
  <li>Default <a href="#">link</a> color</li>
  <li class="my-class-1">Inherit the <a href="#">link</a> color</li>
  <li class="my-class-2">Reset the <a href="#">link</a> color</li>
  <li class="my-class-3">Unset the <a href="#">link</a> color</li>
</ul>
```

```css live-sample___keywords
body {
  color: green;
}

.my-class-1 a {
  color: inherit;
}

.my-class-2 a {
  color: initial;
}

.my-class-3 a {
  color: unset;
}
```

{{EmbedLiveSample("keywords")}}

### Resetting all property values

The CSS shorthand property [`all`](/en-US/docs/Web/CSS/all) can be used to apply one of these inheritance values to (almost) all properties at once. Its value can be any one of the inheritance values (`inherit`, `initial`, `revert`, `revert-layer`, or `unset`). It's a convenient way to undo changes made to styles so that you can get back to a known starting point before beginning new changes.

In the below example, we have two blockquotes. The first has styling applied to the blockquote element itself. The second has a class applied to the blockquote, which sets the value of `all` to `unset`.

```html live-sample___all
<blockquote>
  <p>This blockquote is styled</p>
</blockquote>

<blockquote class="fix-this">
  <p>This blockquote is not styled</p>
</blockquote>
```

```css live-sample___all
blockquote {
  background-color: orange;
  border: 2px solid blue;
}

.fix-this {
  all: unset;
}
```

{{EmbedLiveSample("all")}}

Try setting the value of `all` to some of the other available values and observe what the difference is.

## Understanding the cascade

We now understand that inheritance is why a paragraph nested deep in the structure of your HTML is the same color as the CSS applied to the body. From the introductory lessons, we have an understanding of how to change the CSS applied to something at any point in the document — whether by assigning CSS to an element or by creating a class. We will now look at how cascade defines which CSS rules apply when more than one style block apply the same property, but with different values, to the same element.

There are three factors to consider, listed here in increasing order of importance. Later ones overrule earlier ones:

1. **Source order**
2. **Specificity**
3. **Importance**

We will look at these to see how browsers figure out exactly what CSS should be applied.

### Source order

We have already seen how source order matters to the cascade. If you have more than one rule, all of which have exactly the same weight, then the one that comes last in the CSS will win. You can think of this as: the rule that is nearer the element itself overwrites the earlier ones until the last one wins and gets to style the element.

Source order only matters when the specificity weight of the rules is the same, so let's look at specificity:

### Specificity

You will often run into a situation where you know that a rule comes later in the stylesheet, but an earlier, conflicting rule is applied. This happens because the earlier rule has a **higher specificity** — it is more specific, and therefore, is being chosen by the browser as the one that should style the element.

As we saw earlier in this lesson, a class selector has more weight than an element selector, so the properties defined in the class style block will override those defined in the element style block.

Something to note here is that although we are thinking about selectors and the rules that are applied to the text or component they select, it isn't the entire rule that is overwritten, only the properties that are declared in multiple places.

This behavior helps avoid repetition in your CSS. A common practice is to define generic styles for the basic elements, and then create classes for those that are different. For example, in the stylesheet below, we have defined generic styles for level 2 headings, and then created some classes that change only some of the properties and values. The values defined initially are applied to all headings, then the more specific values are applied to the headings with the classes.

```html live-sample___mixing-rules
<h2>Heading with no class</h2>
<h2 class="small">Heading with class of small</h2>
<h2 class="bright">Heading with class of bright</h2>
```

```css live-sample___mixing-rules
h2 {
  font-size: 2em;
  color: #000;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.small {
  font-size: 1em;
}

.bright {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("mixing-rules", "", "240px")}}

Let's now have a look at how the browser will calculate specificity. We already know that an element selector has low specificity and can be overwritten by a class. Essentially a value in points is awarded to different types of selectors, and adding these up gives you the weight of that particular selector, which can then be assessed against other potential matches.

The amount of specificity a selector has is measured using three different values (or components), which can be thought of as ID, CLASS, and ELEMENT columns in the hundreds, tens, and ones place:

- **Identifiers**: Score one in this column for each ID selector contained inside the overall selector.
- **Classes**: Score one in this column for each class selector, attribute selector, or pseudo-class contained inside the overall selector.
- **Elements**: Score one in this column for each element selector or pseudo-element contained inside the overall selector.

> [!NOTE]
> The universal selector ([`*`](/en-US/docs/Web/CSS/Universal_selectors)), [combinators](/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), and specificity adjustment selector ([`:where()`](/en-US/docs/Web/CSS/:where)) along with its parameters, have no effect on specificity.

The negation ([`:not()`](/en-US/docs/Web/CSS/:not)), relational selector ([`:has()`](/en-US/docs/Web/CSS/:has)), the matches-any ([`:is()`](/en-US/docs/Web/CSS/:is)) pseudo-classes, and [CSS nesting](/en-US/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) themselves don't add to specificity, but their parameters or nested rules do. The specificity weight that each contributes to the specificity algorithm is the specificity weight of the selector in the parameter or nested rule with the greatest weight.

The following table shows a few isolated examples to get you in the mood. Try going through these, and make sure you understand why they have the specificity that we have given them. We've not covered selectors in detail yet, but you can find details of each selector on the MDN [selectors reference](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

| Selector                                  | Identifiers | Classes | Elements | Total specificity |
| ----------------------------------------- | ----------- | ------- | -------- | ----------------- |
| `h1`                                      | 0           | 0       | 1        | 0-0-1             |
| `h1 + p::first-letter`                    | 0           | 0       | 3        | 0-0-3             |
| `li > a[href*="en-US"] > .inline-warning` | 0           | 2       | 2        | 0-2-2             |
| `#identifier`                             | 1           | 0       | 0        | 1-0-0             |
| `button:not(#mainBtn, .cta`)              | 1           | 0       | 1        | 1-0-1             |

Before we move on, let's look at an example in action.

```html live-sample___specificity-boxes
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___specificity-boxes
/* 1. specificity: 1-0-1 */
#outer a {
  background-color: red;
}

/* 2. specificity: 2-0-1 */
#outer #inner a {
  background-color: blue;
}

/* 3. specificity: 1-0-4 */
#outer div ul li a {
  color: yellow;
}

/* 4. specificity: 1-1-3 */
#outer div ul .nav a {
  color: white;
}

/* 5. specificity: 0-2-4 */
div div li:nth-child(2) a:hover {
  border: 10px solid black;
}

/* 6. specificity: 0-2-3 */
div li:nth-child(2) a:hover {
  border: 10px dashed black;
}

/* 7. specificity: 0-3-3 */
div div .nav:nth-child(2) a:hover {
  border: 10px double black;
}

a {
  display: inline-block;
  line-height: 40px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  width: 200px;
  margin-bottom: 10px;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}
```

{{EmbedLiveSample("specificity-boxes")}}

So what's going on here? First of all, we are only interested in the first seven rules of this example, and as you'll notice, we have included their specificity values in a comment before each one.

- The first two selectors are competing over the styling of the link's background color. The second one wins and makes the background color blue because it has an extra ID selector in the chain: its specificity is 2-0-1 vs. 1-0-1.
- Selectors 3 and 4 are competing over the styling of the link's text color. The second one wins and makes the text white because although it has one less element selector, the missing selector is swapped out for a class selector, which has more weight than infinity element selectors. The winning specificity is 1-1-3 vs. 1-0-4.
- Selectors 5–7 are competing over the styling of the link's border when hovered. Selector 6 clearly loses to selector 5 with a specificity of 0-2-3 vs. 0-2-4; it has one fewer element selectors in the chain. Selector 7, however, beats both selectors 5 and 6 because it has the same number of sub-selectors in the chain as selector 5, but an element has been swapped out for a class selector. So the winning specificity is 0-3-3 vs. 0-2-3 and 0-2-4.

> [!NOTE]
> Each selector type has its own level of specificity that cannot be overwritten by selectors with a lower specificity level. For example, a _million_ **class** selectors combined would not be able to overwrite the specificity of _one_ **id** selector.
>
> The best way to evaluate specificity is to score the specificity levels individually starting from the highest and moving on to the lowest when necessary. Only when there is a tie between selector scores within a specificity column do you need to evaluate the next column down; otherwise, you can disregard the lower specificity selectors since they can never overwrite the higher specificity selectors.

#### IDs versus classes

ID selectors have high specificity. This means styles applied based on matching an ID selector will overrule styles applied based on other selectors, including class and type selectors. Because an ID can only occur once on a page and because of the high specificity of ID selectors, it is preferable to add a class to an element instead of an ID.

If using the ID is the only way to target the element — perhaps because you do not have access to the markup and cannot edit it — consider using the ID within an [attribute selector](/en-US/docs/Web/CSS/Attribute_selectors), such as `p[id="header"]`.

### Inline styles

Inline styles, that is, the style declaration inside a [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute, take precedence over all normal styles, no matter the specificity. Such declarations don't have selectors, but their specificity can be construed as 1-0-0-0; always more than any other specificity weight no matter how many IDs are in the selectors.

### !important

There is a special piece of CSS that you can use to overrule all of the above calculations, even inline styles - the `!important` flag. However, you should be very careful while using it. This flag is used to make an individual property and value pair the most specific rule, thereby overriding the normal rules of the cascade, including normal inline styles.

> [!NOTE]
> It is useful to know that the `!important` flag exists so that you know what it is when you come across it in other people's code. **However, we strongly recommend that you never use it unless you absolutely have to.** The `!important` flag changes the way the cascade normally works, so it can make debugging CSS problems really hard to work out, especially in a large stylesheet.

Take a look at this example where we have two paragraphs, one of which has an ID.

```html live-sample___important
<p class="better">This is a paragraph.</p>
<p class="better" id="winning">One selector to rule them all!</p>
```

```css live-sample___important
#winning {
  background-color: red;
  border: 1px solid black;
}

.better {
  background-color: gray;
  border: none !important;
}

p {
  background-color: blue;
  color: white;
  padding: 5px;
}
```

{{EmbedLiveSample("important")}}

Let's walk through this to see what's happening — try removing some of the properties to see what happens if you are finding it hard to understand:

1. You'll see that the third rule's {{cssxref("color")}} and {{cssxref("padding")}} values have been applied, but the {{cssxref("background-color")}} hasn't. Why? Really, all three should surely apply because rules later in the source order generally override earlier rules.
2. However, the rules above it win because class selectors have higher specificity than element selectors.
3. Both elements have a [`class`](/en-US/docs/Web/HTML/Global_attributes/class) of `better`, but the 2nd one has an [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of `winning` too. Since IDs have an _even higher_ specificity than classes (you can only have one element with each unique ID on a page, but many elements with the same class — ID selectors are _very specific_ in what they target), the red background color and the 1px black border should both be applied to the 2nd element, with the first element getting the gray background color, and no border, as specified by the class.
4. The 2nd element _does_ get the red background color, but no border. Why? Because of the `!important` flag in the second rule. Adding the `!important` flag after `border: none` means that this declaration will win over the `border` value in the previous rule, even though the ID selector has higher specificity.

> [!NOTE]
> The only way to override an important declaration is to include another important declaration with the _same specificity_ later in the source order, or one with higher specificity.

One situation in which you may have to use the `!important` flag is when you are working on a CMS where you can't edit the core CSS modules, and you really want to override an inline style or an important declaration that can't be overridden in any other way. But really, don't use it if you can avoid it.

## The effect of CSS location

Finally, it is important to note that the precedence of a CSS declaration depends on what stylesheet it is specified in.

It is possible for users to set custom stylesheets to override the developer's styles. For example, a visually impaired user might want to set the font size on all web pages they visit to be double the normal size to allow for easier reading.

### Order of overriding declarations

Conflicting declarations will be applied in the following order, with later ones overriding earlier ones:

1. Declarations in user agent style sheets (e.g., the browser's default styles, used when no other styling is set).
2. Normal declarations in user style sheets (custom styles set by a user).
3. Normal declarations in author style sheets (these are the styles set by us, the web developers).
4. Important declarations in author style sheets.
5. Important declarations in user style sheets.
6. Important declarations in user agent style sheets.

> [!NOTE]
> The order of precedence is inverted for styles flagged with `!important`. It makes sense for web developers' stylesheets to override user stylesheets, so the design can be kept as intended; however, sometimes users have good reasons to override web developer styles, as mentioned above, and this can be achieved by using `!important` in their rules.

## Test your skills!

You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: The Cascade](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks).

## Summary

If you understood most of this article, then well done — you've started getting familiar with the fundamental mechanics of CSS.

If you didn't fully understand the cascade, specificity, and inheritance, then don't worry! This is definitely the most complicated thing we've covered so far in the course and is something that even professional web developers sometimes find tricky. We'd advise that you return to this article a few times as you continue through the course, and keep thinking about it.

Refer back here if you start to come across strange issues with styles not applying as expected. It could be a specificity issue.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
