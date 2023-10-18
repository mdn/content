---
title: Topics API
slug: Web/API/Topics_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Document.browsingTopics
---

{{SeeCompatTable}}{{DefaultAPISidebar("Topics API")}}

The **Topics API** provides a mechanism for developers to implement use cases such as **interest-based advertising (IBA)** based on topics collected by the browser as the user navigates different pages, rather than collected by the developer by tracking the user's journey around different sites with third-party cookies.

## Concepts and usage

A very common use case for advertisers is to implement interest-based advertising (IBA). The idea is that when users visit sites that display ads, they are served a personalized selection of ads based on their interests. Their interests are inferred from sites they have previously visited. The trouble is that, traditionally, third-party tracking cookies have been used to collect information on user interests, which is bad for user [privacy](/en-US/docs/Web/Privacy).

The Topics API provides a privacy-preserving way to implement IBA and other use cases such as content selection. First of all, the browser observes what sites users visit and infers their interests from site hostnames. This only happens on sites where a Topics API feature is called (for example a {{domxref("Document.browsingTopics()")}} call). These interests are mapped to specific **topics of interest**, and the browser calculates and records users' top topics (i.e. the topics that their interests mapped to most often) at the end of each **epoch**. This process is referred to as **observing topics**.

> **Note:** An epoch is a week by default, but it is possible to alter the length of an epoch in various ways such as runtime flags (see the [Examples](#examples) section for more details). Top topics are updated each week so that they are kept current and users don't start to see ads for topics that they are no longer interested in.

Once the browser has recorded some topics for a user, an advertising technology (ad tech) platform can retrieve the user's topics of interest using the API, and then use them to personalize the ads they decide to serve to them. The API helps to preserve privacy by returning _only topics that have been observed by the calling site_: see the next section for an example that illustrates how this works.

> **Note:** The API returns topics within the most recent three epochs; one for each. The topic selected for each epoch is randomly selected from the user's top five topics for that epoch. To further enhance privacy and ensure that all topics may be represented, there is a 5% chance that the topic for an epoch is randomly selected from all possible topics.

## How does the Topics API work?

Observing topics and returning topics are typically done using the same API calls.

For example, an ad tech company might have a page at `ad-tech1.example`, which is designed to be embedded via an {{htmlelement("iframe")}} into the sites of publishers that want to show ads. It will request a user's topics and then display an appropriate ad for one of the returned topics.

Let's say `ad-tech1.example` is embedded in the following pages:

- `yoga.example`
- `knitting.example`
- `diy-clothing.example`

When each page is loaded, `ad-tech1.example` could say make a {{domxref("fetch()")}} call with a `browsingTopics: true` option. This will:

- Trigger the browser to record topics such as "Fitness", "Crafts", and "Fashion & Style" for the current user, for `ad-tech1.example`.
- Return observed topics for the current user, for `ad-tech1.example`. Initially, no topics are returned so the ad tech platform may end up just displaying a default non-targeted ad. However, once the end of the first epoch is reached, the browser will start to return topics and `ad-tech1.example` can start to show more relevant ads based on the observed topics for the current user.

It is important to understand that topics are not being collected about all sites the user visits, all of the time, and being shared with all sites that request them — that would be terrible for privacy. ad tech platforms and their associated publishers have to opt-in to using the API, and they can access their own private topic sets for each user, stored by the browser.

Extending the example above, another ad tech platform with its page located at `ad tech2.example` would not observe any topics of interest at the above sites, unless its page was also embedded on them and calling Topics API features to trigger the process of observing topics.

More importantly, the recorded topics of interest are the only information that can be accessed via this API — unlike with tracking cookies, no other information can be leaked.

## What API features observe and return topics?

The following will all trigger observing topics and return already observed top topics from the last three epochs (with a 5% chance that the topic is randomly selected from all possible topics.):

- You can specify a `browsingTopics: true` option in the options object of a {{domxref("fetch()")}} call to an ad server.
- You could also pass `browsingTopics: true` into the options object of a {{domxref("Request.Request", "Request()")}} constructor call, and pass the resulting {{domxref("Request")}} object into a {{domxref("fetch()")}} call to an ad server.
- In an {{htmlelement("iframe")}} in which you intend to embed a page from an ad server, most likely to display an ad, you can set the `browsingtopics` attribute (or set the equivalent {{domxref("HTMLIFrameElement.browsingTopics")}} property to `true`) at the same time or before setting the `src` attribute to load the source. For example:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

- You could call {{domxref("Document.browsingTopics()")}}.

> **Note:** It is also possible to send topics directly using an HTTP header, which is more efficient than having to make a JavaScript call first.

In all the cases mentioned above:

1. A {{httpheader("Sec-Browsing-Topics")}} header is sent along with the associated request, which contains the top topics for the current user.
2. You then mark topics provided by the {{httpheader("Sec-Browsing-Topics")}} request header as observed by setting an {{httpheader("Observe-Browsing-Topics")}} header on the response to the request.
3. The browser will then use those topics to calculate topics of interest for a user for future epochs.
4. Returned topics can then be sent in the body of a request for a personalized ad for the current user, e.g. in a {{domxref("fetch()")}} call.

## What topics are there?

The available topics are stored in a publicly available [taxonomy of interests](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md). The initial taxonomy has been proposed by Chrome, with the intention that it becomes a resource maintained by trusted ecosystem contributors. The taxonomy has been human-curated to exclude categories generally considered sensitive, such as ethnicity or sexual orientation.

Exactly how the topics of interest are chosen from the web pages users visit will likely vary across implementations. [Read about how Chromium does this](https://developer.chrome.com/docs/privacy-sandbox/topics/overview/#manually-curated).

## Interfaces

The Topics API has no distinct interfaces of its own.

### Extensions to other interfaces

- {{domxref("Document.browsingTopics()")}}
  - : Returns a promise that fulfills with array of objects representing observed topics for the current user and site.
- {{domxref("fetch()")}} / {{domxref("Request.Request", "Request()")}}, the `browsingTopics` option
  - : A boolean property specifying that observed topics should be sent with the associated request.
- {{domxref("HTMLIFrameElement.browsingTopics")}}
  - : A boolean property specifying that observed topics should be sent with the request for the associated {{htmlelement("iframe")}}'s source. This reflects the `browsingtopics` content attribute value.

## HTML elements

- {{htmlelement("iframe")}}, the `browsingtopics` attribute
  - : A boolean attribute specifying that observed topics should be sent with the request for the {{htmlelement("iframe")}}'s source.

## HTTP headers

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sends observed topics along with a request, to be used by an ad server to choose a personalized ad for the current user.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Used to mark topics sent by {{httpheader("Sec-Browsing-Topics")}} as observed in the response to the request. The browser will then use those topics to calculate topics of interest for a user for future epochs.
- {{httpheader("Permissions-Policy")}}; the {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} directive
  - : Controls access to the Topics API. Where a policy specifically disallows the use of the Topics API, any attempts to call the `Document.browsingTopics()` method or send a request with a `Sec-Browsing-Topics` header will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Examples

With `Document.browsingTopics()`:

```js
// Get an array of top topics for this user
const topics = await document.browsingTopics();

// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(topics),
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

With the {{httpheader("Sec-Browsing-Topics")}} header, via the `fetch()` `browsingTopics` option:

```js
// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

For complete working examples, see:

- [Topics API demo](https://topics-demo.glitch.me/): Demonstrates how `document.browsingTopics()` calls can be used to observe and then access topics.
- [Topics API header demo](https://topics-fetch-demo.glitch.me/): Demonstrates a `fetch()` request with a {{httpheader("Sec-Browsing-Topics")}} header can be used to observe and then access topics.

As mentioned above, the default epoch length for observing topics is one week, which is way too long to test code that uses the Topics API. To shorten this for test purposes:

- In Chromium browsers you can open the browser with a feature flag like so: `BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s`. See [Run Chromium with command-line switches](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/) for more information on how to do this.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Topics API](https://developer.chrome.com/docs/privacy-sandbox/topics/overview/) on developer.chrome.com (2023)
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com (2023)
