---
title: Using the Topics API
slug: Web/API/Topics_API/Using
page-type: web-api-overview
status:
  - non-standard
---

{{DefaultAPISidebar("Topics API")}}

> [!WARNING]
> This feature is currently opposed by two browser vendors. See the [Standards positions](/en-US/docs/Web/API/Topics_API#standards_positions) section below for details of opposition.

> [!NOTE]
> An [Enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment) is required to use the Topics API in your applications. See the [Enrollment](/en-US/docs/Web/API/Topics_API#enrollment) section for details of what sub-features are gated by enrollment.

This page explains how the Topics API works and how it can be used to create an **interest-based advertising (IBA)** solution.

## High-level overview

Let's say we've got an ad tech platform, `ad-tech1.example`, which is embedding ads via {{htmlelement("iframe")}}s into the following publisher sites:

- `yoga.example`
- `knitting.example`
- `football.example`

If the `<iframe>` content from `ad-tech1.example` implements a [feature that enables the Topics API](#what_api_features_enable_the_topics_api), when each of the sites is loaded the browser will:

1. Infer **topics of interest** from the site URL. The topics are taken from a [standard taxonomy](/en-US/docs/Web/API/Topics_API#what_topics_are_there); for the above URL examples, they would be "Fitness", "Fibre & textile arts", and "Soccer".
2. **Mark the topics as observed**, which involves recording a **topics history entry** for each one in a private topics history storage. Each topics history entry includes the following information:
   - A document id (i.e. an identifier for the current page).
   - Topics calculation input data (i.e. the page hostname).
   - The time (since the Unix epoch) when the page was first observed.
   - The domain(s) where the topic was observed (known as **topic caller domains**).

### Selecting topics of interest to influence ad choice

> [!NOTE]
> Different browser implementations may select topics in different ways. The below text is based on how Chrome currently selects topics, for demonstration purposes.

On an ongoing basis, the browser will:

1. Keep track of how often the user observes each topic during each new **epoch**. An epoch is a week by default, but the length can be altered for testing purposes (see [Testing hints](#testing_hints)).

   Chrome places each of the 22 root topics (those without an ancestor) from the taxonomy into [one of two buckets](https://github.com/patcg-individual-drafts/topics/blob/main/topics-utility-buckets-v1.md) indicating higher or standard utility for the overall ad tech ecosystem. All descendants of the root topics inherit the same bucket assignment from their parent. The assignment of root topics to buckets is based on input about utility Google received from companies across the ecosystem.

2. Select top topics for each user, at the end of each epoch:

   1. Chrome converts caller domain hostnames from the user's browsing history into topics.
   2. These topics are sorted first by bucket, and then by frequency (how many times they were matched in a hostname). That is, if two topics are in the same bucket but have different frequencies, the higher frequency topic is sorted higher.
   3. Chrome selects the top five topics as the user's top topics for that epoch, which are eligible to be shared with callers.

3. The top topics are returned to `ad-tech1.example`, only if `ad-tech1.example` appears in the list of caller domains for each topic, as stored in the topic's history entry.

   > [!NOTE]
   > Initially, no topics are returned, so the `<iframe>` will likely display a default non-targeted ad. However, once the end of the first epoch is reached, the API will start to return topics and `ad-tech1.example` can start to show more relevant ads based on the observed topics for the current user.

`ad-tech1.example` then selects a relevant ad to serve to the user, based on the returned topics.

## What API features enable the Topics API?

The following features all serve a dual purpose — they return the user's top topics to the caller and they trigger the browser to record the current page visit as observed by the caller, so the page's hostname can later be used in topics calculation. To do so, they need to be included in a calling ad tech's `<iframe>`; the `<iframe>` then has to be embedded on the pages where you want topics observed.

- You can specify a `browsingTopics: true` option in the options object of a {{domxref("Window/fetch", "fetch()")}} call to the ad tech platform.
- You could also pass `browsingTopics: true` into the options object of a {{domxref("Request.Request", "Request()")}} constructor call, and pass the resulting {{domxref("Request")}} object into the {{domxref("Window/fetch", "fetch()")}} call.
- You can set a `browsingtopics` attribute on the `<iframe>`, at the same time or before setting the `src` attribute to load the source. This could be done:

  - Declaratively on the HTML:

  ```html
  <iframe browsingtopics src="ad-tech1.example"> ... </iframe>
  ```

  - Programmatically by setting the equivalent {{domxref("HTMLIFrameElement.browsingTopics")}} property to `true`:

  ```js
  const iframeElem = document.querySelector("iframe");
  iframeElem.browsingTopics = true;
  ```

When the request associated with one of the above features is sent:

1. A {{httpheader("Sec-Browsing-Topics")}} header is sent along with the request, which contains the top topic(s) for the current user.
2. The ad tech server selects a relevant ad to display in the `<iframe>`, based on these topics, and sends the required data to display it in the response.
3. An {{httpheader("Observe-Browsing-Topics")}} header should be set on the response to the request — this has the effect of causing the browser to record the current page visit as observed by the calling ad tech provider, so the associated topic(s) will be recorded in a topics history entry, and subsequently be used in [topic selection](#selecting_topics_of_interest_to_influence_ad_choice).

   > [!NOTE]
   > It is important to clarify that this doesn't record the top topics sent in the `Sec-Browsing-Topics` header as observed. It records the topics inferred from the calling site's URL (i.e. the site where the ad tech `<iframe>` is embedded) as observed.

### The `browsingTopics()` method

Alternatively, the embedded `<iframe>` can call {{domxref("Document.browsingTopics()")}} to return a user's current top topic(s), which can then be returned to the ad tech platform in a subsequent fetch request. This does not rely on the HTTP headers, but is somewhat less performant. You are advised to use one of the HTTP header methods listed above, falling back to `browsingTopics()` only in situations where the headers cannot be modified.

> [!NOTE]
> Because the `browsingTopics()` method does not rely on the HTTP headers, the {{httpheader("Observe-Browsing-Topics")}} header is not used for setting the topics as observed and recording/updating topics history entries; the browser does this automatically when the method is called.

## Private topic sets

A caller can only access topics that they themselves have observed for a user — and not topics observed by other callers. For example:

- If the `ad-tech1.example` platform has an `<iframe>` embedded on `tennis.example` that includes a Topics API feature, they would observe topics like "Sports" and "Tennis" for a user who visits that site.
- If another ad tech platform, `ad-tech2.example`, has a Topics API `<iframe>` embedded on "gardening.example", they would observe the topic "Gardening".

These ad tech platforms will only get topics for a user that they have observed. In this example, `ad-tech1.example` won't get "Gardening" and `ad-tech2.example` won't get "Tennis".

In other words, callers such as ad tech platforms only get topics for pages where they have a presence. More importantly, the recorded topics of interest are the only information that can be accessed via this API — unlike with tracking cookies, no other information can be leaked.

## Examples

### Using `Document.browsingTopics()`

```js
// Get an array of topics for this user
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

- [Topics API](https://developers.google.com/privacy-sandbox/private-advertising/topics) on developers.google.com (2023)
