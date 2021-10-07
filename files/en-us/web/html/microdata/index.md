---
title: Microdata
slug: Web/HTML/Microdata
tags:
  - Composing
  - Example
  - HTML
  - Microdata
  - Reference
  - SEO
  - Search
---

Microdata is part of the {{glossary("WHATWG")}} HTML Standard and is used to nest metadata within existing content on web pages. Search engines and web crawlers can extract and process microdata from a web page and use it to provide a richer browsing experience for users. Search engines benefit greatly from direct access to this structured data because it allows search engines to understand the information on web pages and provide more relevant results to users. Microdata uses a supporting vocabulary to describe an item and name-value pairs to assign values to its properties. Microdata is an attempt to provide a simpler way of annotating HTML elements with machine-readable tags than the similar approaches of using RDFa and classic microformats.

At a high level, microdata consists of a group of name-value pairs. The groups are called items, and each name-value pair is a property. Items and properties are represented by regular elements.

- To create an item, the **itemscope** attribute is used.
- To add a property to an item, the **itemprop** attribute is used on one of the item's descendants.

## Vocabularies

Google and other major search engines support the [Schema.org](https://schema.org) vocabulary for structured data. This vocabulary defines a standard set of type names and property names, for example, [Schema.org Music Event](http://schema.org/MusicEvent) indicates a concert performance, with [startDate](http://schema.org/startDate) and [location](http://schema.org/location) properties to specify the concert's key details. In this case, [Schema.org Music Event](http://schema.org/MusicEvent) would be the URL used by itemtype and startDate and location would be itemprop's that [Schema.org Music Event](http://schema.org/MusicEvent) defines.

> **Note:** More about itemtype attributes can be found at <http://schema.org/Thing>.

Microdata vocabularies provide the semantics or meaning of an Item. Web developers can design a custom vocabulary or use vocabularies available on the web, such as the widely used [schema.org](http://schema.org) vocabulary. A collection of commonly used markup vocabularies are provided by Schema.org.

Commonly used vocabularies:

- Creative works: [CreativeWork](http://schema.org/CreativeWork), [Book](http://schema.org/Book), [Movie](http://schema.org/Movie), [MusicRecording](http://schema.org/MusicRecording), [Recipe](http://schema.org/Recipe), [TVSeries](http://schema.org/TVSeries)
- Embedded non-text objects: [AudioObject](http://schema.org/AudioObject), [ImageObject](http://schema.org/ImageObject), [VideoObject](http://schema.org/VideoObject)
- [Event](http://schema.org/Event)
- [Health and medical types](http://schema.org/docs/meddocs.html): Notes on the health and medical types under [MedicalEntity](http://schema.org/MedicalEntity)
- [Organization](http://schema.org/Organization)
- [Person](http://schema.org/Person)
- [Place](http://schema.org/Place), [LocalBusiness](http://schema.org/LocalBusiness), [Restaurant](http://schema.org/Restaurant)
- [Product](http://schema.org/Product), [Offer](http://schema.org/Offer), [AggregateOffer](http://schema.org/AggregateOffer)
- [Review](http://schema.org/Review), [AggregateRating](http://schema.org/AggregateRating)
- [Action](http://schema.org/Action)
- [Thing](http://schema.org/Thing)
- [Intangible](http://schema.org/Intangible)

Major search engine operators like Google, Microsoft, and Yahoo! rely on the [schema.org](http://schema.org/) vocabulary to improve search results. For some purposes, an ad-hoc vocabulary is adequate. For others, a vocabulary will need to be designed. Where possible, authors are encouraged to re-use existing vocabularies, as this makes content re-use easier.

## Localization

In some cases, search engines covering specific regions may provide locally-specific extensions of microdata. For example, [Yandex](https://www.yandex.com/), a major search engine in Russia, supports microformats such as hCard (company contact information), hRecipe (food recipe), hReview (market reviews) and hProduct (product data) and provides its own format for the definition of the terms and encyclopedic articles. This extension was made to solve transliteration problems between the Cyrillic and Latin alphabets. Due to the implementation of additional marking parameters of Schema's vocabulary, the indexation of information in Russian-language web-pages became considerably more successful.

## Global attributes

[itemid ](/en-US/docs/Web/HTML/Global_attributes/itemid)– The unique, global identifier of an item.

[itemprop ](/en-US/docs/Web/HTML/Global_attributes/itemprop)– Used to add properties to an item. Every HTML element may have an itemprop attribute specified, where an itemprop consists of a name and value pair.

[itemref](/en-US/docs/Web/HTML/Global_attributes/itemref) – Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an **itemref**. Itemref provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.

[itemscope](/en-US/docs/Web/HTML/Global_attributes/itemscope) – Itemscope (usually) works along with [itemtype ](/en-US/docs/Web/HTML/Global_attributes/itemtype)to specify that the HTML contained in a block is about a particular item. itemscope creates the Item and defines the scope of the itemtype associated with it. itemtype is a valid URL of a vocabulary (such as [schema.org](http://schema.org/)) that describes the item and its properties context.

[itemtype](/en-US/docs/Web/HTML/Global_attributes/itemtype) – Specifies the URL of the vocabulary that will be used to define itemprop's (item properties) in the data structure. [Itemscope](/en-US/docs/Web/HTML/Global_attributes/itemscope) is used to set the scope of where in the data structure the vocabulary set by itemtype will be active.

## Example

### HTML

```html
<div itemscope itemtype="http://schema.org/SoftwareApplication">
  <span itemprop="name">Angry Birds</span> -

  REQUIRES <span itemprop="operatingSystem">ANDROID</span><br>
  <link itemprop="applicationCategory" href="http://schema.org/GameApplication"/>

  <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
    RATING:
    <span itemprop="ratingValue">4.6</span> (
    <span itemprop="ratingCount">8864</span> ratings )
  </div>

  <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
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
        SoftwareApplication (http://schema.org/SoftwareApplication)
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
      <td>GameApplication (http://schema.org/GameApplication)</td>
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

{{ EmbedLiveSample('HTML', '', '100', '', 'Web/HTML/Microdata') }}

> **Note:** A handy tool for extracting microdata structures from HTML is Google's [Structured Data Testing Tool](https://developers.google.com/search/docs/guides/intro-structured-data). Try it on the HTML shown above.

## Browser compatibility

Supported in Firefox 16. Removed in Firefox 49.

## See also

- [Global Attributes](/en-US/docs/Web/HTML/Global_attributes)

{{QuickLinksWithSubpages("/en-US/docs/Web/HTML")}}
