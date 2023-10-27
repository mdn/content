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

Once the browser has observed some topics for a user, the Topics API can retrieve them and send them to an ad tech platform. The platform can then use those topics to personalize the ads they serve to the user. The API helps to preserve privacy by returning _only topics that have been observed by the calling site, for the current user_.

The API returns topics within the most recent three epochs; one for each. The topic selected for each epoch is randomly selected from the user's top five topics for that epoch. To further enhance privacy and ensure that all topics may be represented, there is a 5% chance that the topic for an epoch is randomly selected from all possible topics.

## How does the Topics API work?

Let's say we've got an ad tech platform, `ad-tech1.example`, which is embedding ads via {{htmlelement("iframe")}}s into the following publisher sites.

- `yoga.example`
- `knitting.example`
- `diy-clothing.example`

When each page is loaded, the `<iframe>` can:

- Trigger the browser to record page views for the above sites, and infer topics of interest such as "Fitness", "Crafts", and "Fashion & Style" from their URLs. This is done only for the current user, and for `ad-tech1.example`.
- Calculate top topics for that user for future epochs, based on those topics of interest.
- Return the browser's observed top topics for the current user to the `ad-tech1.example` platform. Initially, no topics are returned so the `<iframe>` may end up just displaying a default non-targeted ad. However, once the end of the first epoch is reached, the API will start to return topics and `ad-tech1.example` can start to show more relevant ads based on the observed topics for the current user.

When the `<iframe>` source is requested:

1. A {{httpheader("Sec-Browsing-Topics")}} header is sent along with the request, which contains the top topics for the current user.
2. The ad tech server can then use these topics to return a relevant ad to display in the `<iframe>`.
3. Topics provided in the {{httpheader("Sec-Browsing-Topics")}} header can be marked as observed by setting an {{httpheader("Observe-Browsing-Topics")}} header on the response to the request.

Once this is all done, the browser records a **topics history entry** for each observed topic in a private topics history storage. Each topics history entry includes information about the topic such as the domains where the topic was observed (known as **topics caller domains**), and the last time and date the topic was observed for each one. The topics history entries are then used when calculating top topics for a user for future epochs.

> **Note:** If a topics history entry already exists, but the topic is observed again (by a different domain, or by the same domain at a different time), the browser will append information to the same entry (for example by updating the last visited date, or adding a new caller domain).

### Private topic sets

It is important to understand that topics are not being collected about all sites the user visits, all of the time, and being shared with all sites that request them — that would be terrible for privacy. Ad tech platforms and their associated publishers have to opt-in to using the API, and they can access their own private topic sets for each user, stored by the browser.

Extending the example above, another ad tech platform located at `ad-tech2.example` would not have any top topics calculated and returned, unless its page was also embedded on them and using Topics API features to trigger the process of observing topics.

More importantly, the recorded topics of interest are the only information that can be accessed via this API — unlike with tracking cookies, no other information can be leaked.

## What API features observe and return topics?

The following features all trigger observing topics and returning already observed top topics from the last three epochs to the ad tech platform via the {{httpheader("Sec-Browsing-Topics")}} header.

- You can specify a `browsingTopics: true` option in the options object of a {{domxref("fetch()")}} call to the ad tech platform.
- You could also pass `browsingTopics: true` into the options object of a {{domxref("Request.Request", "Request()")}} constructor call, and pass the resulting {{domxref("Request")}} object into the {{domxref("fetch()")}} call.
- You can set a `browsingtopics` attribute (or set the equivalent {{domxref("HTMLIFrameElement.browsingTopics")}} property to `true`) directly on the `<iframe>`, at the same time or before setting the `src` attribute to load the source. For example:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

You can also call {{domxref("Document.browsingTopics()")}} to return the list of observed topics and then send those to the ad tech platform in a subsequent fetch request. This does not rely on the HTTP headers, and is somewhat less performant. You are advised to use one of the HTTP header methods listed above, falling back to `browsingTopics()` only in situations where the headers cannot be used.

> **Note:** Because the `browsingTopics()` method does not rely on the HTTP headers, the {{httpheader("Observe-Browsing-Topics")}} header is not used for setting the topics as observed and recording/updating topics history entries; the browser does this automatically.

## What topics are there?

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

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Topics API](https://developer.chrome.com/docs/privacy-sandbox/topics/overview/) on developer.chrome.com (2023)
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com (2023)
