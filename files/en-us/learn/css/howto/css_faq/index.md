---
title: CSS FAQ
slug: Learn/CSS/Howto/CSS_FAQ
tags:
  - CSS
  - Example
  - FAQ
  - Guide
  - Web
  - questions
---
In this article, you'll find some frequently-asked questions (FAQs) about CSS, along with answers that may help you on your quest to become a web developer.

## Why doesn't my CSS, which is valid, render correctly?

Browsers use the `DOCTYPE` declaration to choose whether to show the document using a mode that is more compatible with Web standards or with old browser bugs. Using a correct and modern `DOCTYPE` declaration at the start of your HTML will improve browser standards compliance.

Modern browsers have two main rendering modes:

- _Quirks Mode_: also called backwards-compatibility mode, allows legacy webpages to be rendered as their authors intended, following the non-standard rendering rules used by older browsers. Documents with an incomplete, incorrect, or missing `DOCTYPE` declaration or a known `DOCTYPE` declaration in common use before 2001 will be rendered in Quirks Mode.
- _Standards Mode_: the browser attempts to follow the W3C standards strictly. New HTML pages are expected to be designed for standards-compliant browsers, and as a result, pages with a modern `DOCTYPE` declaration will be rendered with Standards Mode.

Gecko-based browsers, have a third _[Almost Standards Mode](/en-US/docs/Mozilla/Gecko_Almost_Standards_Mode))_ that has only a few minor quirks.

The standard `DOCTYPE` declaration that will trigger standards mode is:

```html
<!DOCTYPE html> 
```

When at all possible, you should just use the above doctype. There are other valid legacy doctypes that will trigger Standards or Almost Standards mode:

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
```

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

## Why doesn't my CSS, which is valid, render at all?

Here are some possible causes:

- You've got the path to CSS file wrong.
- To be applied, a CSS stylesheet must be served with a `text/css` MIME type. If the Web server doesn't serve it with this type, it won't be applied.

## What is the difference between `id` and `class`?

HTML elements can have an `id` and/or `class` attribute. The `id` attribute assigns a name to the element it is applied to, and for valid markup, there can be only one element with that name. The `class` attribute assigns a class name to the element, and that name can be used on many elements within the page. CSS allows you to apply styles to particular `id` and/or `class` names.

- Use a class-specific style when you want to apply the styling rules to many blocks and elements within the page, or when you currently only have element to style with that style, but you might want to add more later.
- Use an id-specific style when you need to restrict the applied styling rules to one specific block or element. This style will only be used by the element with that particular id.

It is generally recommended to use classes as much as possible, and to use ids only when absolutely necessary for specific uses (like to connect label and form elements or for styling elements that must be semantically unique):

- Using classes makes your styling extensible — even if you only have one element to style with a particular ruleset now, you might want to add more later.
- Classes allow you to style multiple elements, therefore they can lead to shorter stylesheets, rather than having to write out the same styling information in multiple rules that use id selectors. Shorter stylesheets are more performant.
- Class selectors have lower [specificity](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity) than id selectors, so are easier to override if needed.

> **Note:** See [Selectors](/en-US/docs/Learn/CSS/Building_blocks/Selectors) for more information.

## How do I restore the default value of a property?

Initially CSS didn't provide a "default" keyword and the only way to restore the default value of a property is to explicitly re-declare that property. For example:

```css
/* Heading default color is black */
h1 { color: red; }
h1 { color: black; }
```

This has changed with CSS 2; the keyword [initial](/en-US/docs/Web/CSS/initial) is now a valid value for a CSS property. It resets it to its default value, which is defined in the CSS specification of the given property.

```css
/* Heading default color is black */
h1 { color: red; }
h1 { color: initial; }
```

## How do I derive one style from another?

CSS does not exactly allow one style to be defined in terms of another. However, assigning multiple classes to a single element can provide the same effect, and [CSS Variables](/en-US/docs/Web/CSS/Using_CSS_custom_properties) now provide a way to define style information in one place that can be reused in multiple places.

## How do I assign multiple classes to an element?

HTML elements can be assigned multiple classes by listing the classes in the `class` attribute, with a blank space to separate them.

```html
<style>
.news { background: black; color: white; }
.today { font-weight: bold; }
</style>

<div class="news today">
  Content of today's news goes here.
</div>
```

If the same property is declared in both rules, the conflict is resolved first through specificity, then according to the order of the CSS declarations. The order of classes in the `class` attribute is not relevant.

## Why don't my style rules work properly?

Style rules that are syntactically correct may not apply in certain situations. You can use [Rules view](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) of  _CSS Pane_ of the Inspector to debug problems of this kind, but the most frequent instances of ignored style rules are listed below.

### HTML elements hierarchy

The way CSS styles are applied to HTML elements depends also on the elements hierarchy. It is important to remember that a rule applied to a descendent overrides the style of the parent, in spite of any specificity or priority of CSS rules.

```css
.news { color: black; }
.corpName { font-weight: bold; color: red; }
```

```html
<!-- news item text is black, but corporate name is red and in bold -->
<div class="news">
    (Reuters) <span class="corpName">General Electric</span> (GE.NYS) announced on Thursday…
</div>
```

In case of complex HTML hierarchies, if a rule seems to be ignored, check if the element is inside another element with a different style.

### Explicitly re-defined style rule

In CSS stylesheets, order **is** important. If you define a rule and then you re-define the same rule, the last definition is used.

```css
#stockTicker { font-weight: bold; }
.stockSymbol { color: red; }
/*  other rules             */
/*  other rules             */
/*  other rules             */
.stockSymbol { font-weight: normal; }
```

```html
<!-- most text is in bold, except "GE", which is red and not bold -->
<div id="stockTicker">
    NYS: <span class="stockSymbol">GE</span> +1.0…
</div>
```

To avoid this kind of error, try to define rules only once for a certain selector, and group all rules belonging to that selector.

### Use of a shorthand property

Using shorthand properties for defining style rules is good because it uses a very compact syntax. Using shorthand with only some attributes is possible and correct, but it must be remembered that undeclared attributes are automatically reset to their default values. This means that a previous rule for a single attribute could be implicitly overridden.

```css
#stockTicker { font-size: 12px; font-family: Verdana; font-weight: bold; }
.stockSymbol { font: 14px Arial; color: red; }
```

```html
<div id="stockTicker">
    NYS: <span class="stockSymbol">GE</span> +1.0…
</div>
```

In the previous example the problem occurred on rules belonging to different elements, but it could happen also for the same element, because rule order **is** important.

```css
#stockTicker {
    font-weight: bold;
    font: 12px Verdana;  /* font-weight is now set to normal */
}
```

### Use of the `*` selector

The `*` wildcard selector refers to any element, and it has to be used with particular care.

```css
body * { font-weight: normal; }
#stockTicker { font: 12px Verdana; }
.corpName { font-weight: bold; }
.stockUp { color: red; }
```

```html
<div id="section">
    NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0…
</div>
```

In this example the `body *` selector applies the rule to all elements inside body, at any hierarchy level, including the `.stockUp` class. So `font-weight: bold;` applied to the `.corpName` class is overridden by `font-weight: normal;` applied to all elements in the body.

The use of the \* selector should be minimized as it is a slow selector, especially when not used as the first element of a selector. Its use should be avoided as much as possible.

### Specificity in CSS

When multiple rules apply to a certain element, the rule chosen depends on its style [specificity](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity). Inline style (in HTML `style` attributes) has the highest specificity and will override any selectors, followed by ID selectors, then class selectors, and eventually element selectors. The text color of the below {{htmlelement("div")}} will therefore be red.

```css
div { color: black; }
#orange { color: orange; }
.green { color: green; }
```

```html
<div id="orange" class="green" style="color: red;">This is red</div>
```

The rules are more complicated when the selector has multiple parts. A more detailed explanation about how selector specificity is calculated can be found in the [CSS specificity documentation](/en-US/docs/Web/CSS/Specificity).

## What do the -moz-\*, -ms-\*, -webkit-\*, -o-\* and -khtml-\* properties do?

These properties, called _prefixed properties_, are extensions to the CSS standard. They were once used to allow the use of experimental and non-standard features in browsers without polluting the regular namespace, preventing future incompatibilities to arise when the standard is extended.

The use of such properties on production websites is not recommended — they have already created a huge web compatibility mess. For example, many developers only use the `-webkit-` prefixed version of a property when the non-prefixed version is fully supported across all browsers. This means a design relying on that property would not work in non-webkit-based browsers, when it could. This became a problem great enough that other browsers were pushed to implement `-webkit-` prefixed aliases to improve web compatibility, as specified in the [Compatibility Living Standard](https://compat.spec.whatwg.org/).

Browsers no longer use CSS prefixes when implementing new experimental features. Rather, they test new features behind configurable experimental flags or only on Nightly browser versions or similar.

If you are required to use prefixes in your work, write the prefixed versions first followed by the non-prefixed standard version. This way the standard version will automatically override the prefixed versions when supported. For example:

```css
-ms-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
```

> **Note:** For more information on dealing with prefixed properties, see [Handling common HTML and CSS problems — Handling CSS prefixes](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#handling_css_prefixes) from our [Cross-browser testing](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing) module.

> **Note:** See the [Mozilla CSS Extensions](/en-US/docs/Web/CSS/Mozilla_Extensions), [Microsoft CSS Extensions](/en-US/docs/Web/CSS/Microsoft_Extensions) and [WebKit CSS Extensions](/en-US/docs/Web/CSS/WebKit_Extensions) for lists of browser-prefixed CSS properties.

## How does z-index relate to positioning?

The z-index property specifies the stack order of elements.

An element with a higher z-index/stack order is always rendered in front of an element with a lower z-index/stack order on the screen. Z-index will only work on elements that have a specified position (`position:absolute`, `position:relative`, or `position:fixed`).

> **Note:** For more information, see our [Positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning) learning article, and in particular the [Introducing z-index](/en-US/docs/Learn/CSS/CSS_layout/Positioning#introducing_z-index) section.
