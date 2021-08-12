---
title: '-webkit-box-reflect'
slug: Web/CSS/-webkit-box-reflect
tags:
  - '-webkit-box-reflect'
  - CSS
  - CSS Property
  - CSS:WebKit Extensions
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-webkit-box-reflect
---
{{CSSRef}}{{Non-standard_Header}}

The **`-webkit-box-reflect`** [CSS](/en-US/docs/Web/CSS) property lets you reflect the content of an element in one specific direction.

```css
/* Direction values */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* Offset value */
-webkit-box-reflect: below 10px;

/* Mask value */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* Global values */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: unset;
```

> **Warning:** This feature is **not intended to be used by Web sites**. To achieve reflection on the Web, the standard way is to use the CSS {{CSSxRef("element()", "element()")}} function.

## Syntax

### Values

- `above`_,_ `below`_,_ `right`_,_ `left`
  - : Are keywords indicating in which direction the reflection is to happen.
- {{CSSxRef("&lt;length&gt;")}}
  - : Indicates the size of the reflection.
- {{CSSxRef("&lt;image&gt;")}}
  - : Describes the mask to be applied to the reflection.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Specifications

Not part of any standard. The standard way to do reflection in CSS is to use the CSS {{CSSxRef("element()", "element()")}} function.

## Browser compatibility

{{Compat}}

## See also

- The Apple [documentation](http://developer.apple.com/library/safari/documentation/appleapplications/reference/safaricssref/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW16).
- The Webkit [specification](https://www.webkit.org/blog/182/css-reflections/).
- Lea Verou's article on reflection using [CSS features on the standard track](http://lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/).
