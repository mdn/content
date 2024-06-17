---
title: Ordering flex items
slug: Web/CSS/CSS_flexible_box_layout/Ordering_flex_items
page-type: guide
---

{{CSSRef}}

Layout methods such as flexbox and grid enable controlling the order of content. In this article, we will take a look at ways in which you can change the visual order of your content when using flexbox. We will also consider how reordering items impacts accessibility.

## Reverse the display of the items

The {{cssxref("flex-direction")}} property can take one of four values:

- `row`
- `column`
- `row-reverse`
- `column-reverse`

The first two values keep the items in the same order that they appear in the document source order and display them sequentially from the start line.

![The items are displayed in a row starting on the left.](basics1.png)

![The items are displayed as a column starting from the top ](align10.png)

The second two values reverse the items by switching the start and end lines.

![The items are displayed in reverse order starting on the right-hand line.](align9.png)

![The items are displayed in a column in reverse order starting at the bottom line.](align11.png)

Remember that the start line relates to writing modes. The row-related examples above demonstrate how `row` and `row-reverse` work in a left-to-right language such as English. If you are working in a right-to-left language like Arabic then `row` would start on the right, `row-reverse` on the left.

![Flex containers with Arabic letters showing how row starts from the right-hand side and row-reverse from the left.](order-rtl.png)

This can seem like an easy way to display things in reverse order. However, you should be mindful that the items are only _visually_ displayed in reverse order. The reordering capabilities of flex layout affect only the visual rendering. The tabbing order and speech order follow the order of the source code. This means that only the visual presentation changes; the source order remains the same, providing a different user experience for non-CSS UAs (think Siri or Alexa) and assistive technology users. If you change the order of a navigation bar, the tabbing order is still the document source order, not your visual order, which can be cognitively confusing.

If you are using a reverse value, or otherwise reordering your items, you should consider whether you should really be changing the logical order in the source.

The flexible box layout specification warns us not to use reordering as a way of fixing source issues:

> "Authors _must not_ use order or the \*-reverse values of {{cssxref("flex-flow")}}/`flex-direction` as a substitute for correct source ordering, as that can ruin the accessibility of the document."

As you tab from link to link in the live example below, the focus style is highlighted, demonstrating that changing the order of flex-items with `flex-direction` does not change the tabbing order, which will continue to follow the source code order.

{{EmbedGHLiveSample("css-examples/flexbox/order/flex-direction.html", '100%', 440)}}

In the same way that changing the value of `flex-direction` does not change the tabbing order, changing this value does not change paint order. It is a visual reversal of the items only.

## The order property

In addition to reversing the order in which flex items are visually displayed, you can target individual items and change where they appear in the visual order with the {{cssxref("order")}} property.

The {{cssxref("order")}} property is designed to lay the items out in _ordinal groups_. This means items are assigned an integer that represents their group. The items are then placed in the visual order according to that integer, lowest values first. If more than one item has the same integer value, then within that group the items are laid out as per source order.

As an example, five flex items are assigned `order` values as follows:

- Source item 1: `order: 2`
- Source item 2: `order: 3`
- Source item 3: `order: 1`
- Source item 4: `order: 3`
- Source item 5: `order: 1`

These items would be displayed on the page in the following order:

- Source item 3: `order: 1`
- Source item 5: `order: 1`
- Source item 1: `order: 2`
- Source item 2: `order: 3`
- Source item 4: `order: 3`

![Items have a number showing their source order which has been rearranged.](order-property.png)

Play around with the values in this live example below and see how that changes the order. Also, try changing `flex-direction` to `row-reverse` and see what happens — the start line is switched so the ordering begins from the opposite side.

{{EmbedGHLiveSample("css-examples/flexbox/order/order.html", '100%', 500)}}

Flex items have a default `order` value of `0`. Therefore, items with an integer value greater than `0` will be displayed after any items that have not been given an explicit `order` value.

You can also use negative values with `order`, which can be quite useful. If you want to make one item display first and leave the order of all other items unchanged, you can give that item order of `-1`. As this is lower than `0`, the item will always be displayed first.

In the live code example below, the items are laid out using flexbox. By changing which item has the class `active` assigned to it in the HTML, you can change which item displays first and therefore becomes full width at the top of the layout, with the other items displaying below it.

{{EmbedGHLiveSample("css-examples/flexbox/order/negative-order.html", '100%', 520)}}

The items are displayed in _order-modified document order_ meaning the value of the `order` property is taken into account before the items are displayed.

`Order` also changes the paint order of the items; items with a lower value for `order` are painted first and items with a higher value for `order` painted afterwards.

## The order property and accessibility

Use of the `order` property has the same implications for accessibility as changing the direction with `flex-direction`. Using `order` changes the order in which items are painted, and the order in which they appear visually. It does not change the sequential navigation order of the items. Therefore, if a user is using a keyboard to tab through the content on the page, they could find themselves jumping around your content in a very confusing way.

By tabbing around any of the live examples on this page, you can see how `order` is potentially creating a strange experience for anyone not using a pointing device like a mouse. To read more about this disconnect of visual order and logical order and some of the potential problems it raises for accessibility, see the following resources.

- [Flexbox and the keyboard navigation disconnect](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) via tink.uk (2016)
- [HTML Source Order vs CSS Display Order](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html) via adrianroselli.com (2015)
- [The Responsive Order Conflict for Keyboard Focus](https://alastairc.uk/2017/06/the-responsive-order-conflict/) via alastairc.uk (2017)

## Use cases for `order`

There are some use cases for which the fact that the logical and therefore reading order of flex items is separate from the visual order, is helpful. Used carefully, the `order` property can allow for some useful common patterns to be easily implemented.

You might have a design, perhaps a card that will display a news item. The heading of the news item is the key thing to highlight and would be the element that a user might jump to if they were tabbing between headings to find the content they wanted to read. The card also has a date; the finished design we want to create is something like this.

![A design component with a date, then heading and then content.](order-card.png)

Visually, the date appears above the heading, in the source. However, if the card was read out by a screen reader I would prefer that the title was announced first and then the publication date. We can accomplish this with the `order` property.

The card is our flex container, with `flex-direction` set to `column`. We give the date an `order` of `-1`, placing it above the heading.

{{EmbedGHLiveSample("css-examples/flexbox/order/usecase-order.html", '100%', 730)}}

These small tweaks are the sort of cases where the `order` property makes sense. Keep the logical order the same as the reading and tab order of the document, and maintain that in the most accessible and structured fashion. Then use `order` for purely visual design tweaks. Don't reorder items that receive keyboard focus. Ensure you always test your content using only a keyboard rather than a mouse or a touchscreen; this will reveal if your development choices make it more complex to navigate the content.

## See also

- [Basic concepts of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Relationship of flexbox to other layout methods](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods)
- [Aligning items in a flex container](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Controlling ratios of flex items along the main axis](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Mastering wrapping of flex items](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [Typical use cases of flexbox](/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module
