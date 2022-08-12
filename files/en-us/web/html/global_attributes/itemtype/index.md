---
title: itemtype
slug: Web/HTML/Global_attributes/itemtype
tags:
  - Attribute
  - Global attribute
  - HTML
  - HTML Microdata
  - Microdata
  - Reference
browser-compat: html.global_attributes.itemtype
---

{{HTMLSidebar("Global_attributes")}}

The [global attribute](/en-US/docs/Web/HTML/Global_attributes) **`itemtype`** specifies the URL of the vocabulary that will be used to define `itemprop`'s (item properties) in the data structure.

[`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope) is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.

Google and other major search engines support the [schema.org](https://schema.org/) vocabulary for structured data. This vocabulary defines a standard set of type names and property names. For example, `MusicEvent` indicates a concert performance, with [`startDate`](https://schema.org/startDate) and [`location`](https://schema.org/location) properties specifying the concert's key details. In this case, [`MusicEvent`](https://schema.org/MusicEvent) would be the URL used by `itemtype`, with `startDate` and location as `itemprop`'s which [`MusicEvent`](https://schema.org/MusicEvent) defines.

> **Note:** More about `itemtype` attributes can be found at <https://schema.org/Thing>

- The **itemtype** attribute must have a value that is an unordered set of unique tokens which are case-sensitive, each is a valid and absolute URL, and all defined to use the same vocabulary. The attribute's value must have at least one token.
- The item types must all be types defined in applicable specifications (such as [schema.org](https://schema.org/)), and must all be defined to use the same vocabulary.
- The itemtype attribute can only be specified on elements which have an itemscope attribute specified.
- The itemid attribute can only be specified on elements which have both an itemscope attribute and an itemtype attribute specified. They must only be specified on elements with an itemscope attribute, whose itemtype attribute specifies a vocabulary not supporting global identifiers for items, as defined by that vocabulary's specification.
- The exact meaning of a global identifier is determined by the vocabulary's specification. It is left to such specifications to define whether multiple items of the same global identifier (whether on the same page or different pages) are allowed to exist, and what processing rules for that vocabulary are, with respect to handling the case of multiple items with the same ID.

## Examples

### Representing structured data for a product

This example uses microdata attributes to represent structured data for a product, as follows:

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="7">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">Product (http://schema.org/Product)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Executive Anvil</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image</td>
      <td>
        https://pixabay.com/static/uploads/photo/2015/09/05/18/15/suitcase-924605_960_720.png
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description</td>
      <td>
        Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for
        the business traveler looking for something to drop from a height.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>mpn</td>
      <td>925872</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>brand [Thing]</td>
      <td></td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>ACME</td>
    </tr>
    <tr>
      <td rowspan="9">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td>aggregateRating[AggregateRating]</td>
      <td></td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.4</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount</td>
      <td>89</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>offers [Offer]</td>
      <td>http://schema.org/Offer</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceCurrency</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>price</td>
      <td>119.99</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceValidUntil</td>
      <td>2020-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>itemCondition</td>
      <td>http://schema.org/UsedCondition</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>availability</td>
      <td>http://schema.org/InStock</td>
    </tr>
    <tr>
      <td rowspan="2">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td>seller [Organization]</td>
      <td>http://schema.org/Organization</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Executive Objects</td>
    </tr>
  </tbody>
</table>

> **Note:** A handy tool for extracting microdata structures from HTML is Google's [Structured Data Testing Tool](https://developers.google.com/search/docs/advanced/structured-data). Try it on the HTML shown here.

#### HTML

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="brand">ACME<br></span>
  <span itemprop="name">Executive Anvil<br></span>
  <img itemprop="image" src="https://pixabay.com/static/uploads/photo/2015/09/05/18/15/suitcase-924605_960_720.png" width="50" height="50" alt="Executive Anvil logo" /><br>

<span itemprop="description">Sleeker than ACME's Classic Anvil, the
    Executive Anvil is perfect for the business traveler
    looking for something to drop from a height.
  <br>
</span>

  Product #: <span itemprop="mpn">925872<br></span>
  <span itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
    Rating: <span itemprop="ratingValue">4.4</span> stars, based on <span itemprop="reviewCount">89
      </span> reviews
  </span><p>

<span itemprop="offers" itemscope itemtype="http://schema.org/Offer">
    Regular price: $179.99<br>
    <meta itemprop="priceCurrency" content="USD" />
    <span itemprop="price">Sale price: $119.99<br></span>
    (Sale ends <time itemprop="priceValidUntil" datetime="2020-11-05">
      5 November!</time>)<br>
    Available from: <span itemprop="seller" itemscope itemtype="http://schema.org/Organization">
                      <span itemprop="name">Executive Objects<br></span>
                    </span>
    Condition: <link itemprop="itemCondition" href="http://schema.org/UsedCondition"/>Previously owned,
      in excellent condition<br>
    <link itemprop="availability" href="http://schema.org/InStock"/>In stock! Order now!
</span>

</div>
```

#### Result

{{EmbedLiveSample('Representing structured data for a product', '', '400')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Other different global attributes](/en-US/docs/Web/HTML/Global_attributes)
- Other microdata related global attributes:

  - [`itemid`](/en-US/docs/Web/HTML/Global_attributes/itemid)
  - [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop)
  - [`itemref`](/en-US/docs/Web/HTML/Global_attributes/itemref)
  - [`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope)
