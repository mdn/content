---
title: Using the Topics API
slug: Web/API/Topics_API/Using
page-type: web-api-overview
status:
  - experimental
---

{{DefaultAPISidebar("Topics API")}}

> **Warning:** One or more browser vendors oppose this feature — in its current state, it will never be implemented across all browsers. See [Standards positions](#standards_positions) for details of opposition.

> **Note:** An [Enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment) is required to use the Topics API in your applications. See the [Enrollment](/en-US/docs/Web/API/Topics_API#enrollment) section for details of what sub-features are gated by enrollment.

This page explains how the Topics API works and how it can be used to create an **interest-based advertising (IBA)** solution.

## High-level overview

Let's say we've got an ad tech platform, `ad-tech1.example`, which is embedding ads via {{htmlelement("iframe")}}s into the following publisher sites:

- `yoga.example`
- `knitting.example`
- `football.example`

1. The `<iframe>` content from `ad-tech1.example` implements a [feature that enables the Topics API](#what_api_features_enable_the_topics_api) on embedding pages. As a result when each of the sites is loaded, the browser:

   - Records page views for that site, and infers topics of interest (such as "Fitness", "Fibre & textile arts", or "Soccer") from its URL.
   - Records a **topics history entry** for each observed topic in a private topics history storage. Each topics history entry includes the following information:
     - A document id (i.e. an identifier for the current page).
     - Topics calculation input data (i.e. the page hostname).
     - The time (since the Unix epoch) when the page was first observed.
     - The domain(s) where the topic was observed (known as **topic caller domains**).

2. The browser then calculates user topics at the start of each new **epoch**, i.e. the topics that were observed most often. An epoch is a week by default, but the length can be altered for testing purposes (see [Testing hints](#testing_hints).

3. Also in each epoch, the browser calculates so-called **top topics** — this is a list of the most observed topics within the most recent three epochs; one for each.

4. One topic is chosen from the list of three top topics, and that topic is returned to the Topics API caller (`ad-tech1.example` in our example), only if the caller is in the list of caller domains for that topic, as stored in the topic's history entry. The caller can then use that topic to select a relevant ad to serve to the user.

> **Note:** Exactly how the top topics are chosen is defined by the user agent rather than the spec, and will vary across implementations. For example, [read about how Chromium does this](https://developers.google.com/privacy-sandbox/blog/topics-enhancements#top_topics_selection).

## How are topics returned to the caller?

When the request associated with a [Topics API feature](#what_api_features_enable_the_topics_api) included in the ad tech `<iframe>` is sent:

1. A {{httpheader("Sec-Browsing-Topics")}} header is sent along with the request, which contains the chosen top topic for the current user.
2. The ad tech server selects a relevant ad to display in the `<iframe>`.

   > **Note:** Initially, no topics are returned, so the `<iframe>` will likely display a default non-targeted ad. However, once the end of the first epoch is reached, the API will start to return topics and `ad-tech1.example` can start to show more relevant ads based on the observed topics for the current user.

3. The topics provided in the {{httpheader("Sec-Browsing-Topics")}} header can be marked as observed by setting an {{httpheader("Observe-Browsing-Topics")}} header on the response to the request.

## What API features enable the Topics API?

The following features all enable observing topics and returning the chosen top topic to the ad tech platform via the {{httpheader("Sec-Browsing-Topics")}} header:

- You can specify a `browsingTopics: true` option in the options object of a {{domxref("fetch()")}} call to the ad tech platform.
- You could also pass `browsingTopics: true` into the options object of a {{domxref("Request.Request", "Request()")}} constructor call, and pass the resulting {{domxref("Request")}} object into the {{domxref("fetch()")}} call.
- You can set a `browsingtopics` attribute (or set the equivalent {{domxref("HTMLIFrameElement.browsingTopics")}} property to `true`) directly on the `<iframe>`, at the same time or before setting the `src` attribute to load the source. For example:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

You can also call {{domxref("Document.browsingTopics()")}} to return the list of observed topics and then send those to the ad tech platform in a subsequent fetch request. This does not rely on the HTTP headers, and is somewhat less performant. You are advised to use one of the HTTP header methods listed above, falling back to `browsingTopics()` only in situations where the headers cannot be used.

> **Note:** Because the `browsingTopics()` method does not rely on the HTTP headers, the {{httpheader("Observe-Browsing-Topics")}} header is not used for setting the topics as observed and recording/updating topics history entries; the browser does this automatically.

## Private topic sets

As mentioned earlier, a caller can only access topics that they themselves have observed for a user — and not topics observed by other callers. For example:

- If the `ad-tech1.example` platform has a presence on `tennis.example`, they would observe topics like "Sports" and "Tennis" for a user who visits that site.
- If another ad tech platform, `ad-tech2.example`, has a presence on "gardening.example", they would observe the topic "Gardening".

To reiterate, these ad tech platforms will only get topics for a user that they have observed. In this example, `ad-tech1.example` won't get "Gardening" and `ad-tech2.example` won't get "Tennis".

In other words, callers such as ad tech platforms only get topics for pages where they have a presence. More importantly, the recorded topics of interest are the only information that can be accessed via this API — unlike with tracking cookies, no other information can be leaked.

## Examples

### Using `Document.browsingTopics()`

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

### Passing the `browsingTopics` option into `fetch()`

```js
// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  browsingTopics: true,
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

### Including the `browsingtopics` attribute in an `<iframe>`

```html
<iframe browsingtopics src="ad-tech1.example"> ... </iframe>
```

### Complete examples

- [Topics API demo](https://topics-demo.glitch.me/): Demonstrates how `document.browsingTopics()` calls can be used to observe and then access topics ([see source code](https://glitch.com/edit/#!/topics-demo)).
- [Topics API header demo](https://topics-fetch-demo.glitch.me/): Demonstrates a `fetch()` request with a {{httpheader("Sec-Browsing-Topics")}} header can be used to observe and then access topics ([see source code](https://glitch.com/edit/#!/topics-fetch-demo)).

## Testing hints

### Chrome

The default epoch length for observing topics is one week, which is way too long to test code that uses the Topics API. To shorten this for test purposes, in Chrome you can open the browser with a feature flag along the following lines:

```bash
BrowsingTopicsParameters:time_period_per_epoch/15s/max_epoch_introduction_delay/3s
```

See [Run Chromium with command-line switches](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/) for more information on how to do this.

You can also test your Topics API code locally without [enrollment](/en-US/docs/Web/API/Topics_API#enrollment) by enabling the following Chrome developer flag:

`chrome://flags/#privacy-sandbox-enrollment-overrides`

## See also

- [Topics API](https://developer.chrome.com/docs/privacy-sandbox/topics/overview/) on developer.chrome.com (2023)
