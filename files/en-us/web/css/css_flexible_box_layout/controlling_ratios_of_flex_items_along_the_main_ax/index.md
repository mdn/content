---
title: Controlling ratios of flex items along the main axis
slug: >-
  Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax
tags:
  - Basis
  - CSS
  - Flex
  - Guide
  - flexbox
  - free space
  - grow
  - max-content
  - min-content
  - shrink
  - space
---
{{CSSRef}}

In this guide we will be exploring the three properties that are applied to flex items, which enable us to control the size and flexibility of the items along the main axis — {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}}, and {{CSSxRef("flex-basis")}}. Fully understanding how these properties work with growing and shrinking items is the real key to mastering flexbox.

## A first look

Our three properties control the following aspects of a flex item's flexibility:

- `flex-grow`: How much of the positive free space does this item get?
- `flex-shrink`: How much negative free space can be removed from this item?
- `flex-basis`: What is the size of the item before growing and shrinking happens?

The properties are usually expressed as the shorthand {{CSSxRef("flex")}} property. The following code would set the `flex-grow` property to `2`, `flex-shrink` to `1` and `flex-basis` to `auto`.

```css
.item {
  flex: 2 1 auto;
}
```

If you have read the article [Basic Concepts of Flexbox](/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox), then you will have already had an introduction to the properties. Here we will explore them in depth in order that you can fully understand what the browser is doing when you use them.

## Important concepts when working on the main axis

There are a few concepts worth digging into before looking at how the flex properties work to control ratios along the main axis. These relate to the _natural_ size of flex items before any growing or shrinking takes place, and to the concept of free space.

### Flex item sizing

In order to work out how much space there is available to lay out flex items, the browser needs to know how big the item is to start with. How is this worked out for items that don't have a width or a height applied using an absolute length unit?

There is a concept in CSS of {{CSSxRef('width','min-content','#min-content')}} and {{CSSxRef('width','max-content','#max-content')}} — these keywords are [defined in the CSS Intrinsic and Extrinsic Sizing Specification](https://drafts.csswg.org/css-sizing-3/#width-height-keywords), and can be used in place of a [length unit](/en-US/docs/Web/CSS/length).

In the live example below for instance I have two paragraph elements that contain a string of text. The first paragraph has a width of `min-content`. In a browser that supports this keyword you should be able to see that the text has taken all of the soft wrapping opportunities available to it, becoming as small as it can be without overflowing. This then, is the `min-content` size of that string. Essentially, the longest word in the string is dictating the size.

The second paragraph has a value of `max-content` and so it does the opposite. It gets as big as it possibly can be, taking no soft-wrapping opportunities. It would overflow the box it is in if that container was too narrow.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/min-max-content.html", '100%', 750)}}

If your browser does not yet support these keywords both paragraphs will be rendered as normal paragraphs in block flow; the below screenshots show the expected rendering.

![The first paragraph is wrapped to the longest word, the second stretched out so as to cause overflow.](ratios-size.png)

Remember this behavior and what effects `min-content` and `max-content` have as we explore `flex-grow` and `flex-shrink` later in this article.

### Positive and negative free space

To talk about these properties we need to understand the concept of **positive and negative free space**. When a flex container has positive free space, it has more space than is required to display the flex items inside the container. For example, if I have a 500 pixel-wide container, {{CSSxRef("flex-direction")}} is `row`, and I have three flex items each 100 pixels wide, then I have 200 pixels of positive free space, which could be distributed between the items if I wanted them to fill the container.

![Image showing space left over after items have been displayed.](basics7.png)

We have negative free space when the natural size of the items adds up to larger than the available space in the flex container. If I have a 500 pixel-wide container like the one above, but the three flex items are each 200 pixels wide, the total space I need will be 600 pixels, so I have 100 pixels of negative free space. This could be removed from the items in order to make them fit the container.

![The items overflow the container](ratios1.png)

It is this distribution of positive free space and removal of negative free space that we need to understand in order to understand the flex properties.

In the following examples I am working with {{CSSxRef("flex-direction")}} set to row, therefore the size of items will always come from their width. We will be calculating the positive and negative free space created by comparing the total width of all the items with the container width. You could equally try out each example with `flex-direction: column`. The main axis would then be the column, and you would then need to compare the height of the items and that of the container they are in to work out the positive and negative free space.

## The flex-basis property

The {{CSSxRef("flex-basis")}} property specifies the initial size of the flex item before any space distribution happens. The initial value for this property is `auto`. If `flex-basis` is set to `auto` then to work out the initial size of the item the browser first checks if the main size of the item has an absolute size set. This would be the case if you had given your item a width of 200 pixels. In that case `200px` would be the `flex-basis` for this item.

If your item is instead auto-sized, then `auto` resolves to the size of its content. At this point your knowledge of `min-` and `max-content` sizing becomes useful, as flexbox will take the `max-content` size of the item as the `flex-basis`. The following live example can help to demonstrate this.

In this example I have created a series of inflexible boxes, with both `flex-grow` and `flex-shrink` set to `0`. Here we can see how the first item — which has an explicit width of 150 pixels set as the main size — takes a `flex-basis` of `150px`, whereas the other two items have no width and so are sized according to their content width.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-basis.html", '100%', 500)}}

In addition to the `auto` keyword, you can use the `content` keyword as the `flex-basis`. This will result in the `flex-basis` being taken from the content size even if there is a width set on the item. This is a newer keyword and has less browser support, however you can always get the same effect by using `auto` as the flex-basis and ensuring that your item does not have a width set, in order that it will be auto-sized.

If you want flexbox to completely ignore the size of the item when doing space distribution then set `flex-basis` to `0`. This essentially tells flexbox that all the space is up for grabs, and to share it out in proportion. We will see examples of this as we move on to look at `flex-grow`.

## The flex-grow property

The {{CSSxRef("flex-grow")}} property specifies the **flex grow factor**, which determines how much the flex item will grow relative to the rest of the flex items in the flex container when the positive free space is distributed.

If all of your items have the same `flex-grow` factor then space will be distributed evenly between all of them. If this is the situation that you want then typically you would use `1` as the value, however you could give them all a `flex-grow` of `88`, or `100`, or `1.2` if you like — it is a ratio. If the factor is the same for all, and there is positive free space in the flex container then it will be distributed equally to all.

### Combining `flex-grow` and `flex-basis`

Things can get confusing in terms of how `flex-grow` and `flex-basis` interact. Let's consider the case of three flex items of differing content lengths and the following `flex` rules applied to them:

`flex: 1 1 auto;`

In this case the `flex-basis` value is `auto` and the items don't have a width set, and so are auto-sized. This means that flexbox is looking at the `max-content` size of the items. After laying the items out we have some positive free space in the flex container, shown in this image as the hatched area:

![Images shows the positive free space as a hatched area](ratios2.png)

We are working with a `flex-basis` equal to the content size so the available space to distribute is subtracted from the total available space (the width of the flex container), and the leftover space is then shared out equally among each item. Our bigger item ends up bigger because it started from a bigger size, even though it has the same amount of spare space assigned to it as the others:

![The positive space is distributed between items](ratios3.png)

If what you actually want is three equally-sized items, even if they start out at different sizes, you should use this:

`flex: 1 1 0;`

Here we are saying that the size of the item for the purposes of our space distribution calculation is `0` — all the space is up for grabs and as all of the items have the same `flex-grow` factor, they each get an equal amount of space distributed. The end result is three equal width, flexible items.

Try changing the `flex-grow` factor from 1 to 0 in this live example to see the different behavior:

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow.html", '100%', 520)}}

### Giving items different flex-grow factors

Our understanding of how `flex-grow` works with `flex-basis` allows us to have further control over our individual item sizes by assigning items different `flex-grow` factors. If we keep our `flex-basis` at `0` so all of the space can be distributed, we could assign each of the three flex items a different `flex-grow` factor. In the example below I am using the following values:

- `1` for the first item.
- `1` for the second item.
- `2` for the third item.

Working from a `flex-basis` of `0` this means that the available space is distributed as follows. We need to add up the flex grow factors, then divide the total amount of positive free space in the flex container by that number, which in this case is 4. We then share out the space according to the individual values — the first item gets one part, the second one part, the third two parts. This means that the third item is twice the size of the first and second items.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow-ratios.html", '100%', 520)}}

Remember that you can use any positive value here. It is the ratio between one item and the others that matters. You can use large numbers, or decimals — it is up to you. To test that out change the values assigned in the above example to `.25`, `.25`, and `.50` — you should see the same result.

## The flex-shrink property

The {{CSSxRef("flex-shrink")}} property specifies the **flex shrink factor**, which determines how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed.

This property deals with situations where the browser calculates the `flex-basis` values of the flex items, and finds that they are too large to fit into the flex container. As long as `flex-shrink` has a positive value the items will shrink in order that they do not overflow the container.

So where `flex-grow` deals with adding available space, `flex-shrink` manages taking away space to make boxes fit into their container without overflowing.

In the next live example I have three items in a flex container; I've given each a width of 200 pixels, and the container is 500 pixels wide. With `flex-shrink` set to `0` the items are not allowed to shrink and so they overflow the box.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink.html", '100%', 500)}}

Change the `flex-shrink` value to `1` and you will see each item shrink by the same amount, in order that all of the items now fit in the box. They have become smaller than their initial width in order to do so.

### Combining `flex-shrink` and `flex-basis`

You could say that `flex-shrink` works in pretty much the same way as `flex-grow`. However there are two reasons why it isn't _quite_ the same.

While it is usually subtle, defined in the specification is one reason why `flex-shrink` isn't quite the same for negative space as `flex-grow` is for positive space:

> "Note: The flex shrink factor is multiplied by the flex base size when distributing negative space. This distributes negative space in proportion to how much the item is able to shrink, so that e.g. a small item won't shrink to zero before a larger item has been noticeably reduced."

The second reason is that flexbox prevents small items from shrinking to zero size during this removal of negative free space. The items will be floored at their `min-content` size — the size that they become if they take advantage of any soft wrapping opportunities available to them.

You can see this `min-content` flooring happen in the below example, where the `flex-basis` is resolving to the size of the content. If you change the width on the flex container — increasing it to 700px for example — and then reduce the flex item width, you can see that the first two items will wrap, however they will never become smaller than that `min-content` size. As the box gets smaller space is then just removed from the third item.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-min-content.html", '100%', 500)}}

In practice the shrinking behavior does tend to give you reasonable results. You don't usually want your content to disappear completely or for boxes to get smaller than their minimum content, so the above rules make sense in terms of sensible behavior for content that needs to be shrunk in order to fit into a container.

### Giving items different `flex-shrink` factors

In the same way as `flex-grow`, you can give flex-items different `flex-shrink` factors. This can help change the default behavior if, for example, you want an item to shrink more or less rapidly than its siblings or not shrink at all.

In the following live example the first item has a `flex-shrink` factor of 1, the second `0` (so it won't shrink at all), and the third `4`. The third item therefore shrinks more rapidly than the first. Play around with the different values — as for `flex-grow` you can use decimals or larger numbers here. Choose whatever makes most sense to you.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-ratios.html", '100%', 570)}}

## Mastering sizing of flex items

The key to really understanding how flex item sizing works is in understanding the number of things that come into play. Consider the following aspects, which we have already discussed in these guides:

### What sets the base size of the item?

1. Is `flex-basis` set to `auto`, and does the item have a width set? If so, the size will be based on that width.
2. Is `flex-basis` set to `auto` or `content` (in a supporting browser)? If so, the size is based on the item size.
3. Is `flex-basis` a length unit, but not zero? If so this is the size of the item.
4. Is `flex-basis` set to `0`? if so then the item size is not taken into consideration for the space-sharing calculation.

### Do we have available space?

Items can't grow with no positive free space, and they won't shrink unless there is negative free space.

1. If we took all of the items and added up their widths (or heights if working in a column), is that total **less** than the total width (or height) of the container? If so, then you have positive free space and `flex-grow` comes into play.
2. If we took all of the items and added up their widths (or heights if working in a column), is that total **more** than the total width (or height) of the container? If so, you have negative free space and `flex-shrink` comes into play.

### Other ways to distribute space

If you do not want space added to the items, remember that you can deal with free space between or around items using the alignment properties described in the guide to aligning items in a flex container. The {{CSSxRef("justify-content")}} property will enable the distribution of free space between or around items. You can also use auto margins on flex items to absorb space and create gaps between items.

With all the flex tools at your disposal you will find that most tasks can be achieved, although it might take a little bit of experimentation at first.
