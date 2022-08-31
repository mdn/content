---
title: Choosing between www and non-www URLs
slug: Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs
tags:
  - Guide
  - HTTP
  - URL
---
{{HTTPSidebar}}

A recurring question among website owners is whether to choose non-www or www URLs. This page provides some advice on what's best.

## What are domain names?

In an HTTP URL, the first substring that follows the initial `http://` or `https://` is called the domain name. This domain name is hosted on a server where the document resides.

A server isn't necessarily a physical machine: several servers can reside on the same physical machine. Or, one server can be handled by several machines, cooperating to produce the answer or balancing the load of the requests between them. The key point is that semantically _one domain name represents one single server_.

## So, do I have to choose one or the other for my web site?

- **Yes**, you need to choose one and stick with it. The choice of which one to have as your canonical location is yours, but if you choose one, stick with it. It will make your website appear more consistent to your users and to search engines. This includes always linking to the chosen domain (which shouldn't be hard if you're using relative URLs in your website) and always sharing links (by email/social networks, etc.) to the same domain.
- **No**, you can have two. What is important is that you are coherent and consistent with which one is the official domain. **This official domain is called the _canonical_ name.** All your absolute links should use it. But even so, you can still have the other domain working: HTTP allows two techniques so that it is clear for your users, or search engines, which domain is the canonical one, while still allowing the non-canonical domain to work and provide the expected pages.

So, choose one of your domains as your canonical one! There are two techniques below to allow the non-canonical domain to work still.

## Techniques for canonical URLs

There are different ways to choose which website is _canonical_.

### Using HTTP 301 redirects

In this case, you need to configure the server receiving the HTTP requests (which is most likely the same for www and non-www URLs) to respond with an adequate HTTP {{HTTPStatus(301)}} response to any request to the non-canonical domain. This will redirect the browser trying to access the non-canonical URLs to their canonical equivalent. For example, if you've chosen to use non-www URLs as the canonical type, you should redirect all www URLs to their equivalent URL without the www.

Example:

1. A server receives a request for `http://www.example.org/whaddup` (when the canonical domain is example.org)
2. The server answers with a code {{HTTPStatus(301)}} with the header `{{HTTPHeader("Location")}}: http://example.org/whaddup`.
3. The client issues a request to the canonical domain: `http://example.org/whatddup`

The [HTML5 boilerplate project](https://github.com/h5bp/html5-boilerplate) has an example on [how to configure an Apache server to redirect one domain to the other](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258).

### Using \<link rel="canonical">

It is possible to add a special HTML {{HTMLElement("link")}} element to a page to indicate what the canonical address of a page is. This has no impact on the human reader of the page, but tells search engine crawlers where the page actually lives. This way, search engines don't index the same page several times, potentially leading to it being considered as duplicate content or spam, and even removing or lowering your page from the search engine result pages.

When adding such a tag, you serve the same content for both domains, telling search engines which URL is canonical. In the previous example, `http://www.example.org/whaddup` would serve the same content as `http://example.org/whaddup`, but with an additional {{htmlelement("link")}} element in the head:

```html
<link href="http://example.org/whaddup" rel="canonical">
```

Unlike the previous case, browser history will consider non-www and www URLs as independent entries.

## Make your page work for both

With these techniques, you can configure your server to respond correctly for both, the www-prefixed and the non-www-prefixed domains. It is good advice to do this since you can't predict which URL users will type in their browser's URL bar. It is a matter of choosing which type you want to use as your canonical location, then redirecting the other type to it.

## Deciding the case

This is a very subjective topic — it could be considered a [bikeshedding](https://bikeshed.com/) issue. If you wish to read deeper, please see some of the [many](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-and-a-records/#options-for-bare-domains) [articles](https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/) on the subject.

## See also

- [Stats on what people type in the URL bar](https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/) (2011)
