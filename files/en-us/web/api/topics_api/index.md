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

A typical mechanism for advertising on the web works around a user visiting **publisher** sites that use an advertising technology (ad tech) platform to publish ads for an **advertiser**'s products or services. The publisher is paid to display the ads, which helps to fund their content, and more business is driven to advertiser sites.

The above process can be made more effective using interest-based advertising (IBA). The idea is that when users visit the publisher sites, they are served a **personalized** selection of ads based on their interests. Their interests are inferred from sites they have previously visited. The trouble is that, traditionally, third-party tracking cookies have been used to collect information on user interests, which is bad for user [privacy](/en-US/docs/Web/Privacy).

The Topics API provides a privacy-preserving way to implement IBA and other use cases such as content selection. First of all, the browser observes what sites users visit and infers their interests from site hostnames. These interests are mapped to specific **topics of interest**, and the browser calculates and records users' top topics (i.e. the topics that their interests mapped to most often) at the end of each **epoch**. This process is referred to as **observing topics**.

This process only happens on sites where a Topics API feature is used (see [What API features observe and return topics?](#what_api_features_observe_and_return_topics)).

> **Note:** An epoch is a week by default, but it is possible to alter the length of an epoch in various ways such as runtime flags (see the [Examples](#examples) section for more details). Top topics are updated each week so that they are kept current and users don't start to see ads for topics that they are no longer interested in.

Once the browser has observed some topics for a user, the Topics API can retrieve them and send them to an ad tech platform. The platform can then use those topics to personalize the ads they serve to the user. The API helps to preserve privacy by _only returning topics to an API caller that have been observed by them_ on pages visited by the current user.

The API returns topics within the most recent three epochs; one for each. The topic selected for each epoch is randomly selected from the user's top five topics for that epoch. Note that the top topic for each epoch is _always_ chosen from a list of five. If there aren't five observed ("real") topics for an epoch, the list length is made up to five by adding random topics from the [entire list of available topics](#what_topics_are_there).

Note also that, in the case of "real" observed topics, there is a 5% chance that the topic will be replaced by a random topic selected from the list of all possible topics.

### How does the Topics API work?

Let's say we've got an ad tech platform, `ad-tech1.example`, which is embedding ads via {{htmlelement("iframe")}}s into the following publisher sites.

- `yoga.example`
- `knitting.example`
- `football.example`

When each page is loaded, the `<iframe>` can:

Fitness, Fibre & textile arts and Shopping

- Trigger the browser to record page views for the above sites, and infer topics of interest such as "Fitness", "Fibre & textile arts", and "Soccer" from their URLs.
- Calculate top topics for that user for future epochs, based on those topics of interest.
- Return the browser's observed top topics for the current user to the `ad-tech1.example` platform. Initially, no topics are returned so the `<iframe>` may end up just displaying a default non-targeted ad. However, once the end of the first epoch is reached, the API will start to return topics and `ad-tech1.example` can start to show more relevant ads based on the observed topics for the current user.

When the `<iframe>` source is requested:

1. A {{httpheader("Sec-Browsing-Topics")}} header is sent along with the request, which lists topics for the current user observed by the caller associated with the domain of the `<iframe>` `src`.
2. The ad tech server can then use these topics to return a relevant ad to display in the `<iframe>`.
3. Topics provided in the {{httpheader("Sec-Browsing-Topics")}} header can be marked as observed by setting an {{httpheader("Observe-Browsing-Topics")}} header on the response to the request.

Once this is all done, the browser records a **topics history entry** for each observed topic in a private topics history storage. Each topics history entry includes the following information:

- A document id (i.e. an identifier for the current page)
- Topics calculation input data (i.e. the page hostname)
- The time (since the Unix epoch) when the page was first observed
- The domain(s) where the topic was observed (known as **topic caller domains**)

The topics history entries are used when calculating the top topics for a user for future epochs.

> **Note:** When a new caller is made available on a page (i.e. embedded in an `<iframe>`), its domain is appended to the list of caller domains contained within the topics history entry associated with that page.

The topics for a user are calculated at the end of each epoch — by calculating the topic for each history entry (based on the topics calculation input data, i.e. the hostname of the page visit) and then determining the top topics for the entire epoch.

### Private topic sets

A caller can only access topics that they themselves have observed for a user — and not topics observed by other callers. For example:

- If the `ad-tech1.example` platform has a presence on `tennis.example`, they would observe topics like "Sports" and "Tennis" for a user who visits that site.
- If another ad tech platform, `ad-tech2.example`, has a presence on "gardening.example", they would observe the topic "Gardening".

To reiterate, these ad tech platforms will only get topics for a user that they have observed. In this example, `ad-tech1.example` won't get "Gardening" and `ad-tech2.example` won't get "Tennis".

In other words, callers such as ad tech platforms only get topics for pages where they have a presence. More importantly, the recorded topics of interest are the only information that can be accessed via this API — unlike with tracking cookies, no other information can be leaked.

### What API features observe and return topics?

The following features all trigger observing topics and returning already observed top topics from the last three epochs to the ad tech platform via the {{httpheader("Sec-Browsing-Topics")}} header.

- You can specify a `browsingTopics: true` option in the options object of a {{domxref("fetch()")}} call to the ad tech platform.
- You could also pass `browsingTopics: true` into the options object of a {{domxref("Request.Request", "Request()")}} constructor call, and pass the resulting {{domxref("Request")}} object into the {{domxref("fetch()")}} call.
- You can set a `browsingtopics` attribute (or set the equivalent {{domxref("HTMLIFrameElement.browsingTopics")}} property to `true`) directly on the `<iframe>`, at the same time or before setting the `src` attribute to load the source. For example:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

You can also call {{domxref("Document.browsingTopics()")}} to return the list of observed topics and then send those to the ad tech platform in a subsequent fetch request. This does not rely on the HTTP headers, and is somewhat less performant. You are advised to use one of the HTTP header methods listed above, falling back to `browsingTopics()` only in situations where the headers cannot be used.

> **Note:** Because the `browsingTopics()` method does not rely on the HTTP headers, the {{httpheader("Observe-Browsing-Topics")}} header is not used for setting the topics as observed and recording/updating topics history entries; the browser does this automatically.

### What topics are there?

The available top topics that the browser could calculate are stored in a publicly available [taxonomy of interests](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md). The initial taxonomy has been proposed by Chrome, with the intention that it becomes a resource maintained by trusted ecosystem contributors. The taxonomy has been human-curated to exclude categories generally considered sensitive, such as ethnicity or sexual orientation.

Exactly how the top topics are chosen will likely vary across implementations. [Read about how Chromium does this](https://developer.chrome.com/docs/privacy-sandbox/topics/overview/#manually-curated).

## Interfaces

The Topics API has no distinct interfaces of its own.

### Extensions to other interfaces

- {{domxref("Document.browsingTopics()")}}
  - : Returns a promise that fulfills with array of objects representing observed topics for the current user and site, for the three most recent epochs.
- {{domxref("fetch()")}} / {{domxref("Request.Request", "Request()")}}, the `browsingTopics` option
  - : A boolean property specifying that observed topics should be sent with the associated request.
- {{domxref("HTMLIFrameElement.browsingTopics")}}
  - : A boolean property specifying that observed topics should be sent with the request for the associated {{htmlelement("iframe")}}'s source. This reflects the `browsingtopics` content attribute value.

## HTML elements

- {{htmlelement("iframe")}}, the `browsingtopics` attribute
  - : A boolean attribute specifying that observed topics should be sent with the request for the {{htmlelement("iframe")}}'s source.

## HTTP headers

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sends observed topics along with a request, which are used by an ad tech platform to choose a personalized ad to display to the current user.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Used to mark topics sent by {{httpheader("Sec-Browsing-Topics")}} as observed in the response to the request. The browser will then use those topics to calculate topics of interest for a user for future epochs.
- {{httpheader("Permissions-Policy")}}; the {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} directive
  - : Controls access to the Topics API. Where a policy specifically disallows the use of the Topics API, any attempts to call the `Document.browsingTopics()` method or send a request with a `Sec-Browsing-Topics` header will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Enrollment and local testing

To use the Topics API in your sites, you must specify it in the [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment). If you don't do this, the following sub-features won't work:

- The {{domxref("Document.browsingTopics()")}} method
  - : The promise returned by `browsingTopics()` rejects with a `NotAllowedError` {{domxref("DOMException")}}.
- The {{httpheader("Sec-Browsing-Topics")}} header
  - : Creating or modifying the header fails silently, and any existing `Sec-Browsing-Topics` header is deleted.

You can still test your Topics API code locally without enrollment. To allow local testing, enable the following Chrome developer flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## Examples

Using `Document.browsingTopics()`:

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

Using the `fetch()` `browsingTopics` option:

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

- In Chromium browsers you can open the browser with a feature flag along the following lines:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

See [Run Chromium with command-line switches](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/) for more information on how to do this.

## Specifications

This feature is not part of an official standard, although it is specified in the [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/).

## Browser compatibility

{{Compat}}

## See also

- [Topics API](https://developer.chrome.com/docs/privacy-sandbox/topics/overview/) on developer.chrome.com (2023)
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com (2023)
