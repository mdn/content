---
title: Backwards compatibility of flexbox
slug: Web/CSS/CSS_flexible_box_layout/Backwards_compatibility_of_flexbox
page-type: guide
---

{{CSSRef}}

Flexbox is very well supported across modern browsers, however there are a few issues that you might run into. In this guide we will look at how well flexbox is supported in browsers, and look at some potential issues, resources and methods for creating workarounds and fallbacks.

## The history of flexbox

As with all CSS specifications the Flexbox specification went through a large number of changes before it became the Candidate Recommendation that we have today. As a Candidate Recommendation we should not see large changes at this point to the spec, however this has not been the case with past flexbox iterations.

Flexbox was implemented in an experimental way in several web browsers. At the time the method of creating experimental implementations was to use a vendor prefix. The idea of these prefixes was to allow implementations of the spec to be tested and explored by browser engineers and web developers alike without clashing with other implementations. The idea was not to use the experimental implementations in production code. However, prefixes ultimately were used in production code, and changes to the experimental specification caused people to need to update their sites to keep up.

[In 2009](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/), the specification looked quite different. To create a flex container you would use `display: box` and there were a number of `box-*` properties, which did things that you will recognize from flexbox today.

There was an [update to the spec](https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/) that updated the syntax to `display: flexbox` — this was again vendor-prefixed.

Ultimately the specification was updated to define `display: flex` as the way to create a flex container. Browser support for the up-to-date version of the specification is excellent from this point forward.

There are a few old articles in existence that refer to the older versions of flexbox, which are pretty easy to identify due to the change in the way that a flex container is created. If you find something referring to `display: box` or `display: flexbox` this is outdated information.

## Status in browsers

Browser support for flexbox is excellent, and the majority of browsers do not need a prefix at this point. Safari was the last of the major browsers to remove prefixes, with the release of Safari 9 in 2015.

## Common issues

The majority of issues with flexbox relate to the changes in the specification, as it has been developed, and the fact that many of us were attempting to use an experimental specification in production. If you are trying to ensure backwards compatibility with old versions of browsers, and in particular IE10 and 11, the [Flexbugs](https://github.com/philipwalton/flexbugs) site is a helpful resource. You will see that many of the listed bugs apply to old browser versions and are fixed in current browsers. Each of the bugs has a workaround listed — which can save you many hours of puzzling.

If you want to include very old browsers with flexbox support then you can include the vendor prefixes in your CSS in addition to the unprefixed version. This is becoming less and less of a requirement today as support is widespread.

```css
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

[Autoprefixer Online](https://autoprefixer.github.io/) is a useful way to see which prefixes are recommended, depending on how many versions you wish to go back with browser support. You can also check [Can I Use](https://caniuse.com/#feat=flexbox) for information about when prefixes were removed in browsers to make your decision.

## Useful fallback techniques

Given that flexbox usage is initiated with value of the {{cssxref("display")}} property, when needing to support very old browsers which do not support flexbox at all, fallbacks can be created by overwriting one layout method with another. The specification defines what happens if you use other layout methods on an element which then becomes a flex item.

### Floated items

> "float and clear do not create floating or clearance of flex item, and do not take it out-of-flow." - [3. Flex Containers](https://www.w3.org/TR/css-flexbox-1/#flex-containers)

In the following live example, I have floated two blocks and then set `display: flex` on the container. The items are now flex items, which means they stretch to equal height. Any float behavior does not apply.

You can test the fallback behavior by removing `display: flex` from the wrapper.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/float.html", '100%', 550)}}

### display: inline-block

Once an `inline-block` item becomes a flex item, it is `block`ified and so behavior of `display: inline-block` like preserving white space between items no longer applies.

Remove `display: flex` to see the fallback behavior. You'll see white space added between the items, which is what happens when using `display: inline-block` as it prefers white space like other inline items.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/inline-block.html", '100%', 550)}}

### display: table-

The CSS table display properties are potentially very useful as a fallback, due to the fact that they allow design patterns such as full height columns and vertical centering.

If you use `display: table-cell` on an item in your HTML it takes on the styling of an HTML table cell. CSS creates anonymous boxes to represent these items so that you do not need to wrap each item in a wrapper to represent the HTML table row, and a second one to represent the table element itself, You can't see or style these anonymous boxes; they are there purely to fix up the tree.

If you then declare `display: flex` on the parent item, these anonymous boxes do not get created and so your item remains a direct child and can become a flex item — losing any of the table display features.

> "Note: Some values of display normally trigger the creation of anonymous boxes around the original box. If such a box is a flex item, it is blockified first, and so anonymous box creation will not happen. For example, two contiguous flex items with display: table-cell will become two separate display: block flex items, instead of being wrapped into a single anonymous table." - [4. Flex Items](https://www.w3.org/TR/css-flexbox-1/#flex-items)

{{EmbedGHLiveSample("css-examples/flexbox/browsers/table-cell.html", '100%', 550)}}

### The vertical-align property

The live example below demonstrates use of the {{cssxref("vertical-align")}} property along with `display: inline-block`. Both `display: table-cell` and `display: inline-block` allow for the use of this property. Use of `vertical-align` enables vertical alignment prior to flexbox. The property is ignored by flexbox and so you can use it in conjunction with `display: table-cell` or `display: inline-block` as a fallback and then safely use box alignment properties in flexbox instead.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/vertical-align.html", '100%', 550)}}

## Feature Queries and flexbox

You can use [feature queries](/en-US/docs/Web/CSS/@supports) to detect flexbox support:

```css
@supports (display: flex) {
  /* code for supporting browsers */
}
```

Remember that if you want to include versions of browsers that had vendor-prefixed flexbox you would need to include the prefixed version in your feature query. The following feature query would include UC Browser, which supports feature queries and old flexbox syntax, prefixed:

```css
@supports (display: flex) or (display: -webkit-box) {
  /* code for supporting browsers */
}
```

For more information about using Feature Queries see [Using Feature Queries in CSS](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/) on the Mozilla Hacks blog.

## Conclusion

While I've spent some time in this guide going through potential issues and fallbacks, flexbox is very much ready for you to be using in production work. This guide will help you in those cases where you do come across an issue or have the requirement to support older browsers.
