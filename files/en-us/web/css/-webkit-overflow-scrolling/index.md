---
title: '-webkit-overflow-scrolling'
slug: Web/CSS/-webkit-overflow-scrolling
tags:
  - CSS
  - CSS Property
  - Non-standard
  - Reference
  - recipe:css-property
browser-compat: css.properties.-webkit-overflow-scrolling
---
{{CSSRef}} {{Non-standard_header}}

The `-webkit-overflow-scrolling` [CSS](/en-US/docs/Web/CSS) property controls whether or not touch devices use momentum-based scrolling for a given element.

## Syntax

### Values

- `auto`
  - : Use "regular" scrolling, where the content immediately ceases to scroll when you remove your finger from the touchscreen.
- `touch`
  - : Use momentum-based scrolling, where the content continues to scroll for a while after finishing the scroll gesture and removing your finger from the touchscreen. The speed and duration of the continued scrolling is proportional to how vigorous the scroll gesture was. Also creates a new stacking context.

## Formal definition

{{CSSInfo}}

## Formal syntax

```plain
-webkit-overflow-scrolling =
  auto | touch
```

## Examples

### HTML

```html
<div class="scroll-touch">
  <p>
    This paragraph has momentum scrolling
  </p>
</div>
<div class="scroll-auto">
  <p>
    This paragraph does not.
  </p>
</div>
```

### CSS

```css
div {
  width: 100%;
  overflow: auto;
}

p {
  width: 200%;
  background: #f5f9fa;
  border: 2px solid #eaf2f4;
  padding: 10px;
}

.scroll-touch {
  -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
}

.scroll-auto {
  -webkit-overflow-scrolling: auto; /* Stops scrolling immediately */
}
```

### Results

{{EmbedLiveSample('Examples')}}

## Specifications

Not part of any standard. Apple has [a description in the Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/css/property/-webkit-overflow-scrolling).

## Browser compatibility

{{Compat}}

## See also

- [CSS-Tricks article with demo](https://css-tricks.com/snippets/css/momentum-scrolling-on-ios-overflow-elements/)
- [Smashing Magazine - describing the effect of scroll bouncing and how it works on different web browsers](https://www.smashingmagazine.com/2018/08/scroll-bouncing-websites/)
- [Safari 13 Release notes](https://developer.apple.com/documentation/safari-release-notes/safari-13-release-notes): Indicates the addition of support for one-finger accelerated scrolling to all frames and `overflow:scroll` elements, eliminating the need to set `-webkit-overflow-scrolling: touch`.
