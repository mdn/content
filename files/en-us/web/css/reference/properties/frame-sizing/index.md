---
title: "`frame-sizing` CSS property"
short-title: frame-sizing
slug: Web/CSS/Reference/Properties/frame-sizing
page-type: css-property
browser-compat: css.properties.frame-sizing
sidebar: cssref
---

The **`frame-sizing`** [CSS](/en-US/docs/Web/CSS) property can be used to set an {{htmlelement("iframe")}} element's horizontal or vertical size to equal the layout size of its embedded content in the same dimension, but only if the embedded page has opted in to sharing its size information.

## Syntax

```css
/* Keyword values */
frame-sizing: auto;
frame-sizing: content-width;
frame-sizing: content-height;
frame-sizing: content-inline-size;
frame-sizing: content-block-size;

/* Global values */
frame-sizing: inherit;
frame-sizing: initial;
frame-sizing: revert;
frame-sizing: revert-layer;
frame-sizing: unset;
```

### Values

The `frame-sizing` property value is equal to one of the following keywords:

- `auto`
  - : The inital value. The `<iframe>` element's size is not affected by the layout size of its embedded content.
- `content-width`
  - : The `<iframe>` element's {{cssxref("width")}} is set to the layout width of its embedded content.
- `content-height`
  - : The `<iframe>` element's {{cssxref("height")}} is set to the layout height of its embedded content.
- `content-inline-size`
  - : The `<iframe>` element's {{cssxref("inline-size")}} is set to the layout size of its embedded content in the inline direction.
- `content-block-size`
  - : The `<iframe>` element's {{cssxref("block-size")}} is set to the layout size of its embedded content in the block direction.

## Description

For security and privacy reasons, {{htmlelement("iframe")}} elements do not by default expose any information to the parent page about the size of the content they are embedding.

To enable responsive sizing of {{htmlelement("iframe")}} elements based on their content, the [`<meta name="responsive-embedded-sizing">`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing) tag can be included in an embedded document to opt it in to sharing its size information with the parent page. The `frame-sizing` property can then be set on the `<iframe>` to cause it to adopt the same horizontal or vertical size as the embedded content's actual content size (termed the **internal layout intrinsic size** in the spec, but abbreviated to "layout size" in our documentation). This is useful for avoiding scrollbars on embedded content so that it fits more seamlessly with its embedder.

The `frame-sizing` property can take values of `content-width` or `content-height` to cause the `<iframe>` element's `width` or `height` to adopt the embedded content's layout width or layout height, respectively.

There are also logical equivalents available — `frame-sizing` can take values of `content-inline-size` or `content-block-size` to cause the `<iframe>` element's `inline-size` or `block-size` to adopt the embedded content's inline size or block size, respectively. The block or inline direction is determined by the `<iframe>` element's {{cssxref("writing-mode")}}, not that of the embedded content.

To resize the `<iframe>` dynamically as the embedded content changes size, you can call the {{domxref("Window.requestResize()")}} method from the embedded page to make it report an updated size.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

Our [basic responsive `<iframe>` sizing demo](https://mdn.github.io/dom-examples/responsive-iframe-sizing/basic/) ([see source code](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/basic)) demonstrates usage of the `frame-sizing` property.

#### HTML

We have two HTML pages. The main `index.html` page contains a heading and an `<iframe>`, into which is embedded the `frame.html` page:

```html
<h1>Responsive iframes — basic example</h1>

<iframe src="frame.html"></iframe>
```

The `frame.html` page contains a heading and some paragraphs. More significantly, however, it includes the `<meta name="responsive-embedded-sizing" />` tag, which opts it in to sharing its content layout size with the parent page.

```html
<head>
  ...

  <meta name="responsive-embedded-sizing" />

  ...
</head>
<body>
  <h1>This is my frame</h1>
  <p>This is the content of my discontent.</p>
  <p>This is some more content.</p>
</body>
```

#### CSS

The `<iframe>` in the `index.html` page is given a `frame-sizing` value of `content-block-size`. Because the `<iframe>` has a horizontal `writing-mode`, its `height` will be set to the embedded content's layout height.

```css
iframe {
  frame-sizing: content-block-size;
  border: 2px solid gray;
}
```

#### Result

{{EmbedGHLiveSample("responsive-iframe-sizing/basic/", "100%", 300)}}

Even though no explicit `height` has been set on the `<iframe>`, it is sized to the right height to exactly contain its embedded content, with no scroll bars.

You can also [load the demo in a separate tab](https://mdn.github.io/dom-examples/responsive-iframe-sizing/basic/) and view the [source code](https://github.com/mdn/dom-examples/tree/main/responsive-iframe-sizing/basic).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS box sizing](/en-US/docs/Web/CSS/Guides/Box_sizing) module
- [`<meta name="responsive-embedded-sizing">`](/en-US/docs/Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing)
- {{domxref("Window.requestResize()")}}
