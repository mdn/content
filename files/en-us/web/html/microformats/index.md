---
title: Microformats
slug: Web/HTML/microformats
page-type: guide
---

{{HTMLSidebar}}

[_Microformats_](https://microformats.org/wiki/Main_Page) are standards used to embed semantics and structured data in HTML, and provide an API to be used by social web applications, search engines, aggregators, and other tools. These minimal patterns of HTML are used for marking up entities that range from fundamental to domain-specific information, such as people, organizations, events, and locations.

- To create a microformats object, `h-*` class names are used in the class attribute.
- To add a property to an object, the `p-*`, `u-*`, `dt-*`, `e-*` class names are used on one of the object's descendants.

Microformats use supporting vocabularies to describe objects and name-value pairs to assign values to their properties. The properties are carried in class attributes that can be added to any HTML element, while the data values re-use HTML element content and semantic attributes.

Microformats2 (sometimes referred to as mf2) is an update to microformats that provides a method of annotating HTML structured syntax and vocabularies than previous approaches of using RDFa and microdata. These previous approaches require learning new attributes.

There are [open source parsing libraries for most languages](https://microformats.org/wiki/microformats2#Parsers) for microformats2.

## How Microformats Work

An author of a webpage can add microformats to their HTML. For example if they wanted to identify themselves they could use an [h-card](https://microformats.org/wiki/h-card) such as:

### HTML Example

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

When a parser encounters this data, it will know that this page contains a "card" which describes a person or organization named `Alice Blogger` with a URL of `https://alice.example.com/`. The parser makes this data available via APIs that can be used for different applications. For example, an application could scan a page for a h-card to use as profile information for someone who has signed up to a service.

As in this example, some markup patterns require only a single microformat root class name, which parsers use to find a few generic properties such as `name`, `url`, `photo`.

## Microformats Use Cases

Microformats have numerous use cases. First, the [Webmention standard](https://www.w3.org/TR/webmention/) uses microformats to provide a way in which messages and comments can be sent from one site to another. The Webmention specification defines specific attributes that sites may publish and consume to create a rich, interoperable way of publishing messages and comments. Microformats can also be used with Webmentions to enable sending social reactions such as likes, reposts, and bookmarks from one site to another.

Microformats also enable easy syndication across sites. An aggregator could parse a page with published microformats to look for information such as a post title, a post body, and the author of a post. This aggregator could then use the semantic information gathered to render a result on their site. For instance, news aggregators and community posting boards could facilitate submissions and use microformats to exact relevant content from a page. Further, a website could use microformats to send crafted requests to third-parties to publish content, such as social networks.

All major search engines support reading and interpreting microformats. Search engines benefit greatly from direct access to this structured data because it allows them to understand the information on web pages. With this information, search engines can provide more relevant results to users. Some search engines may render special snippets such as star ratings on a search result page based on the data provided in microformats.

In addition to being machine-readable, microformats are designed to be easily read by humans. This approach makes it easy for people to understand and maintain microformats data.

## Microformats Prefixes

All microformats consist of a root, and a collection of properties. Properties are all optional and potentially multivalued - applications needing a singular value may use the first instance of a property. Hierarchical data is represented with nested microformats, typically as property values themselves.

All microformats class names use prefixes. Prefixes are **syntax independent of vocabularies**, which are developed separately.

- **"h-\*" for root class names**, e.g. "h-card", "h-entry", "h-feed", and many more. These top-level root classes usually indicate a type and corresponding expected vocabulary of properties. For example:

  - [h-card](https://microformats.org/wiki/h-card) describes a person or organization
  - [h-entry](https://microformats.org/wiki/h-entry) describes episodic or date stamped online content like a blog post
  - [h-feed](https://microformats.org/wiki/h-feed) describes a stream or feed of posts
  - You can find many more [vocabularies on the microformats2 wiki.](https://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" for plain (text) properties**, e.g. "p-name", "p-summary"

  - Generic plain text parsing, element text in general. On certain HTML elements, use special attributes first, e.g. img/alt, abbr/title.

- **"u-\*" for URL properties**, e.g. "u-url", "u-photo", "u-logo"

  - Special parsing: element attributes a/href, img/src, object/data etc. attributes over element contents.

- **"dt-\*" for datetime properties**, e.g. "dt-start", "dt-end", "dt-bday"

  - Special parsing: time element datetime attribute, [value-class-pattern](https://microformats.org/wiki/value-class-pattern) and separate date time value parsing for readability.

- **"e-\*" for element tree properties** where the entire contained element hierarchy is the value, e.g. "e-content". The "e-" prefix can also be mnemonically remembered as "element tree", "embedded markup", or "encapsulated markup".

## Some microformats examples

### h-card

The [h-card](https://microformats.org/wiki/h-card) microformat represents a person or organization.

The value of each property is defined in HTML using the class property any element can carry

#### Example h-card

```html
<p class="h-card">
  <img class="u-photo" src="https://example.org/photo.png" alt="" />
  <a class="p-name u-url" href="https://example.org">Joe Bloggs</a>
  <a class="u-email" href="mailto:jbloggs@example.com">jbloggs@example.com</a>,
  <span class="p-street-address">17 Austerstræti</span>
  <span class="p-locality">Reykjavík</span>
  <span class="p-country-name">Iceland</span>
</p>
```

| Property               | Description                                                    |
| ---------------------- | -------------------------------------------------------------- |
| **`p-name`**           | The full/formatted name of the person or organization.         |
| **`u-email`**          | email address                                                  |
| **`u-photo`**          | a photo of the person or organization                          |
| **`u-url`**            | home page or other URL representing the person or organization |
| **`u-uid`**            | universally unique identifier, preferably canonical URL        |
| **`p-street-address`** | street number + name                                           |
| **`p-locality`**       | city/town/village                                              |
| **`p-country-name`**   | country name                                                   |

#### Nested h-card example

```html
<div class="h-card">
  <a class="p-name u-url" href="https://blog.lizardwrangler.com/">
    Mitchell Baker
  </a>
  (<a class="p-org h-card" href="https://mozilla.org/">Mozilla Foundation</a>)
</div>
```

Parsed JSON:

```json
{
  "items": [
    {
      "type": ["h-card"],
      "properties": {
        "name": ["Mitchell Baker"],
        "url": ["https://blog.lizardwrangler.com/"],
        "org": [
          {
            "value": "Mozilla Foundation",
            "type": ["h-card"],
            "properties": {
              "name": ["Mozilla Foundation"],
              "url": ["https://mozilla.org/"]
            }
          }
        ]
      }
    }
  ]
}
```

In this example, a h-card is specified for both a person and the organization they represent. The person's affiliation with the linked organization is specified using the p-org property.

Note: the nested h-card has implied 'name' and 'url' properties, just like any other root-class-name-only h-card on an `<a href>` would.

### h-entry

The [h-entry](https://microformats.org/wiki/h-entry) microformat represents episodic or datestamped content on the web. h-entry is often used with content intended to be syndicated, e.g. blog posts and short notes.

Example h-entry as a blog post:

```html
<article class="h-entry">
  <h1 class="p-name">Microformats are amazing</h1>
  <p>
    Published by
    <a class="p-author h-card" href="https://example.com">W. Developer</a> on
    <time class="dt-published" datetime="2013-06-13 12:00:00">
      13<sup>th</sup> June 2013
    </time>
  </p>

  <p class="p-summary">In which I extoll the virtues of using microformats.</p>

  <div class="e-content">
    <p>Blah blah blah</p>
  </div>
</article>
```

#### Properties

| Property           | Description                                     |
| ------------------ | ----------------------------------------------- |
| **`p-name`**       | entry name/title                                |
| **`p-author`**     | who wrote the entry, optionally embedded h-card |
| **`dt-published`** | when the entry was published                    |
| **`p-summary`**    | short entry summary                             |
| **`e-content`**    | full content of the entry                       |

#### Parsed reply h-entry example

```html
<div class="h-entry">
  <p>
    <span class="p-author h-card">
      <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
        <img
          class="u-photo"
          alt="Greg McVerry"
          src="https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg" />
      </a>
      <a
        class="p-name u-url"
        href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
        Greg McVerry
      </a>
    </span>
    Replied to
    <a
      class="u-in-reply-to"
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/microformats">
      a post on <strong>developer.mozilla.org</strong>
    </a>
    :
  </p>
  <p class="p-name e-content">
    Hey thanks for making this microformats resource
  </p>
  <p>
    <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">
      Greg McVerry
    </a>
    published this
    <a
      class="u-url url"
      href="https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource">
      <time class="dt-published" datetime="2019-05-31T14:19:09+0000">
        31 May 2019
      </time>
    </a>
  </p>
</div>
```

```json
{
  "items": [
    {
      "type": ["h-entry"],
      "properties": {
        "in-reply-to": [
          "https://developer.mozilla.org/en-US/docs/Web/HTML/microformats"
        ],
        "name": ["Hey thanks for making this microformats resource"],
        "url": [
          "https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"
        ],
        "published": ["2019-05-31T14:19:09+0000"],
        "content": [
          {
            "html": "Hey thanks for making this microformats resource",
            "value": "Hey thanks for making this microformats resource",
            "lang": "en"
          }
        ],
        "author": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Greg McVerry"],
              "photo": [
                "https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"
              ],
              "url": [
                "https://quickthoughts.jgregorymcverry.com/profile/jgmac1106"
              ]
            },
            "lang": "en",
            "value": "Greg McVerry"
          }
        ]
      },
      "lang": "en"
    }
  ]
}
```

### h-feed

The [h-feed](https://microformats.org/wiki/h-feed) is a stream or feed of [h-entry](https://microformats.org/wiki/h-entry) posts, like complete posts on a home page or archive pages, or summaries or other brief lists of posts.

#### Example h-feed

```html
<div class="h-feed">
  <h1 class="p-name">Microformats Blogs</h1>
  <article class="h-entry">
    <h2 class="p-name">Microformats are amazing</h2>
    <p>
      Published by
      <a class="p-author h-card" href="https://example.com">W. Developer</a> on
      <time class="dt-published" datetime="2013-06-13 12:00:00">
        13<sup>th</sup> June 2013
      </time>
    </p>
    <p class="p-summary">
      In which I extoll the virtues of using microformats.
    </p>
    <div class="e-content"><p>Blah blah blah</p></div>
  </article>
</div>
```

#### Properties

| Property       | Description                                    |
| -------------- | ---------------------------------------------- |
| **`p-name`**   | name of the feed                               |
| **`p-author`** | author of the feed, optionally embed an h-card |

#### Children

<table class="standard-table">
  <tbody>
    <tr>
      <td><strong>Nested h-entry</strong></td>
      <td></td>
    </tr>
    <tr>
      <td>objects representing the items of the feed</td>
      <td></td>
    </tr>
  </tbody>
</table>

### h-event

The `h-event` is for events on the web. h-event is often used with both event listings and individual event pages.

```html
<div class="h-event">
  <h1 class="p-name">Microformats Meetup</h1>
  <p>
    From
    <time class="dt-start" datetime="2013-06-30 12:00">
      30<sup>th</sup> June 2013, 12:00
    </time>
    to <time class="dt-end" datetime="2013-06-30 18:00">18:00</time> at
    <span class="p-location">Some bar in SF</span>
  </p>
  <p class="p-summary">
    Get together and discuss all things microformats-related.
  </p>
</div>
```

#### Properties

| Property         | Description                                             |
| ---------------- | ------------------------------------------------------- |
| **`p-name`**     | event name (or title)                                   |
| **`p-summary`**  | short summary of the event                              |
| **`dt-start`**   | datetime the event starts                               |
| **`dt-end`**     | datetime the event ends                                 |
| **`p-location`** | where the event takes place, optionally embedded h-card |

#### Parsed h-event Example

```html
<div class="h-event">
  <h2 class="p-name">IndieWeb Summit</h2>
  <time class="dt-start" datetime="2019-06-29T09:00:00-07:00">
    June 29, 2019 at 9:00am (-0700)
  </time>
  <br />through
  <time class="dt-end" datetime="2019-06-30T18:00:00-07:00">
    June 30, 2019 at 6:00pm (-0700)
  </time>
  <br />
  <div class="p-location h-card">
    <div>
      <span class="p-name">Mozilla</span>
    </div>
    <div>
      <span class="p-street-address">1120 NW Couch St</span>,
      <span class="p-locality">Portland</span>,
      <span class="p-region">Oregon</span>,
      <span class="p-country">US</span>
    </div>
    <data class="p-latitude" value="45.52345"></data>
    <data class="p-longitude" value="-122.682677"></data>
  </div>
  <div class="e-content">Come join us</div>
  <div>
    <span class="p-author h-card">
      <a class="u-url p-name" href="https://aaronparecki.com">Aaron Parecki</a>
    </span>
    Published this
    <a href="https://aaronparecki.com/2019/06/29/1/" class="u-url">event </a>on
    <time class="dt published" datetime="2019-05-25T18:00:00-07:00">
      May 5th, 2019
    </time>
  </div>
</div>
```

```json
{
  "items": [
    {
      "type": ["h-event"],
      "properties": {
        "name": ["IndieWeb Summit"],
        "url": ["https://aaronparecki.com/2019/06/29/1/"],
        "author": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Aaron Parecki"],
              "url": ["https://aaronparecki.com"]
            },
            "lang": "en",
            "value": "Aaron Parecki"
          }
        ],
        "start": ["2019-06-29T09:00:00-07:00"],
        "end": ["2019-06-30T18:00:00-07:00"],
        "published": ["2019-05-25T18:00:00-07:00"],
        "content": [
          {
            "html": "Come join us",
            "value": "Come join us",
            "lang": "en"
          }
        ],
        "location": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Mozilla"],
              "p-street-address": ["1120 NW Couch St"],
              "locality": ["Portland"],
              "region": ["Oregon"],
              "country": ["US"],
              "latitude": ["45.52345"],
              "longitude": ["-122.682677"]
            },
            "lang": "en",
            "value": "Mozilla"
          }
        ]
      },
      "lang": "en"
    }
  ]
}
```

## Microformats rel property examples

There are some microformats that are applied to a page by using a special `rel=` property. These microformats describe a relation between a current document and a linked document. For a full list of these, see the [rel property](https://microformats.org/wiki/rel-values) on the microformats wiki.

### rel=author

This attribute states that the linked document represents the author of the current page.

```html
<a rel="author" href="https://jamesg.blog">James Gallagher</a>
```

### rel=license

This attribute states that the linked document contains the license under which the current page is published.

```html
<a rel="license" href="https://mit-license.org/">MIT License</a>
```

### rel=nofollow

This attribute states that the linked document should not be given any weight by search engine ranking algorithms that may derive from the current page. This is useful to prevent link graph algorithms from weighing a page higher than it otherwise would after seeing a link to a document.

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## Browser compatibility

Supported in all browsers' support for the class attribute and its DOM API.

## See also

- [class attribute](/en-US/docs/Web/HTML/Global_attributes/class)
- [Microformat](https://en.wikipedia.org/wiki/Microformat) on Wikipedia
- [Microformats official website](https://microformats.org/wiki/Main_Page)
- [Search engines support](https://microformats.org/wiki/search_engines) on Microformats official website
- [Microformats on IndieWebCamp](https://indieweb.org/microformats)
