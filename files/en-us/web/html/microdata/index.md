---
title: Microdata
slug: Web/HTML/Microdata
page-type: guide
---

{{HTMLSidebar}}

Microdata is part of the {{glossary("WHATWG")}} HTML Standard and is used to nest metadata within existing content on web pages. Search engines and web crawlers can extract and process microdata from a web page and use it to provide a richer browsing experience for users. Search engines benefit greatly from direct access to this structured data because it allows search engines to understand the information on web pages and provide more relevant results to users. Microdata uses a supporting vocabulary to describe an item and name-value pairs to assign values to its properties. Microdata is an attempt to provide a simpler way of annotating HTML elements with machine-readable tags than the similar approaches of using RDFa and classic microformats.

At a high level, microdata consists of a group of name-value pairs. The groups are called items, and each name-value pair is a property. Items and properties are represented by regular elements.

- To create an item, the `itemscope` attribute is used.
- To add a property to an item, the `itemprop` attribute is used on one of the item's descendants.

## Vocabularies

Google and other major search engines support the [Schema.org](https://schema.org) vocabulary for structured data. This vocabulary defines a standard set of type names and property names, for example, [Schema.org Music Event](https://schema.org/MusicEvent) indicates a concert performance, with [`startDate`](https://schema.org/startDate) and [`location`](https://schema.org/location) properties to specify the concert's key details. In this case, [Schema.org Music Event](https://schema.org/MusicEvent) would be the URL used by `itemtype` and `startDate` and location would be `itemprop`'s that [Schema.org Music Event](https://schema.org/MusicEvent) defines.

> **Note:** More about itemtype attributes can be found at <https://schema.org/Thing>.

Microdata vocabularies provide the semantics or meaning of an _`Item`_. Web developers can design a custom vocabulary or use vocabularies available on the web, such as the widely used [schema.org](https://schema.org) vocabulary. A collection of commonly used markup vocabularies are provided by Schema.org.

Commonly used vocabularies:

- Creative works: [CreativeWork](https://schema.org/CreativeWork), [Book](https://schema.org/Book), [Movie](https://schema.org/Movie), [MusicRecording](https://schema.org/MusicRecording), [Recipe](https://schema.org/Recipe), [TVSeries](https://schema.org/TVSeries)
- Embedded non-text objects: [AudioObject](https://schema.org/AudioObject), [ImageObject](https://schema.org/ImageObject), [VideoObject](https://schema.org/VideoObject)
- [`Event`](https://schema.org/Event)
- [Health and medical types](https://schema.org/docs/meddocs.html): Notes on the health and medical types under [MedicalEntity](https://schema.org/MedicalEntity)
- [`Organization`](https://schema.org/Organization)
- [`Person`](https://schema.org/Person)
- [`Place`](https://schema.org/Place), [LocalBusiness](https://schema.org/LocalBusiness), [Restaurant](https://schema.org/Restaurant)
- [`Product`](https://schema.org/Product), [Offer](https://schema.org/Offer), [AggregateOffer](https://schema.org/AggregateOffer)
- [`Review`](https://schema.org/Review), [AggregateRating](https://schema.org/AggregateRating)
- [`Action`](https://schema.org/Action)
- [`Thing`](https://schema.org/Thing)
- [`Intangible`](https://schema.org/Intangible)

Major search engine operators like Google, Microsoft, and Yahoo! rely on the [schema.org](https://schema.org/) vocabulary to improve search results. For some purposes, an ad hoc vocabulary is adequate. For others, a vocabulary will need to be designed. Where possible, authors are encouraged to re-use existing vocabularies, as this makes content re-use easier.

## Localization

In some cases, search engines covering specific regions may provide locally-specific extensions of microdata. For example, [Yandex](https://yandex.com/), a major search engine in Russia, supports microformats such as `hCard` (company contact information), `hRecipe` (food recipe), `hReview` (market reviews) and `hProduct` (product data) and provides its own format for the definition of the terms and encyclopedic articles. This extension was made to solve transliteration problems between the Cyrillic and Latin alphabets. Due to the implementation of additional marking parameters of Schema's vocabulary, the indexation of information in Russian-language web-pages became considerably more successful.

## Global attributes

[`itemid`](/en-US/docs/Web/HTML/Global_attributes/itemid) – The unique, global identifier of an item.

[`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop) – Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair.

[`itemref`](/en-US/docs/Web/HTML/Global_attributes/itemref) – Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an **itemref**. `itemref` provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.

[`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope) – The `itemscope` attribute (usually) works along with [`itemtype`](/en-US/docs/Web/HTML/Global_attributes/itemtype) to specify that the HTML contained in a block is about a particular item. The `itemscope` attribute creates the _`Item`_ and defines the scope of the itemtype associated with it. The `itemtype` attribute is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.

[`itemtype`](/en-US/docs/Web/HTML/Global_attributes/itemtype) – Specifies the URL of the vocabulary that will be used to define `itemprop`'s (item properties) in the data structure. The [`itemscope`](/en-US/docs/Web/HTML/Global_attributes/itemscope) attribute is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.

## Example

### HTML

```html
<div itemscope itemtype="https://schema.org/SoftwareApplication">
  <span itemprop="name">Angry Birds</span> - REQUIRES
  <span itemprop="operatingSystem">ANDROID</span><br />
  <link
    itemprop="applicationCategory"
    href="https://schema.org/GameApplication" />

  <div
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    RATING:
    <span itemprop="ratingValue">4.6</span> (
    <span itemprop="ratingCount">8864</span> ratings )
  </div>

  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    Price: $<span itemprop="price">1.00</span>
    <meta itemprop="priceCurrency" content="USD" />
  </div>
</div>
```

### Structured data

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">
        SoftwareApplication (https://schema.org/SoftwareApplication)
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Angry Birds</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>operatingSystem</td>
      <td>ANDROID</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>applicationCategory</td>
      <td>GameApplication (https://schema.org/GameApplication)</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">aggregateRating [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.6</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingCount</td>
      <td>8864</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">offers [Offer]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>price</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceCurrency</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

### Result

{{ EmbedLiveSample('HTML', '', '100') }}

> **Note:** A handy tool for extracting microdata structures from HTML is Google's [Structured Data Testing Tool](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data). Try it on the HTML shown above.

## Browser compatibility

Supported in Firefox 16. Removed in Firefox 49.

## See also

- [Global Attributes](/en-US/docs/Web/HTML/Global_attributes)
