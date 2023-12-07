---
title: Topics API
slug: Web/API/Topics_API
page-type: web-api-overview
status:
  - experimental
browser-compat: api.Document.browsingTopics
---

{{DefaultAPISidebar("Topics API")}}

> **Warning:** One or more browser vendors oppose this feature — in its current state, it will never be implemented across all browsers. See [Standards positions](#standards_positions) for details of opposition.

> **Note:** An [Enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment) is required to use the Topics API in your applications. See the [Enrollment](#enrollment) section for details of what sub-features are gated by enrollment.

The **Topics API** provides a mechanism for developers to implement use cases such as **interest-based advertising (IBA)** based on topics collected by the browser as the user navigates different pages, rather than collected by the developer by tracking the user's journey around different sites with third-party cookies.

## Concepts and usage

A typical mechanism for advertising on the web works around a user visiting **publisher** sites that use an advertising technology (ad tech) platform to publish ads for an **advertiser**'s products or services. The publisher is paid to display the ads, which helps to fund their content, and more business is driven to advertiser sites.

The above process can be made more effective using interest-based advertising (IBA). The idea is that when users visit the publisher sites, they are served a **personalized** selection of ads based on their interests. Their interests are inferred from sites they have previously visited. In the past, [third-party cookies](/en-US/docs/Web/HTTP/Cookies#third-party_cookies) have been used to collect information on user interests, but all browsers are phasing out the use of third-party cookies. The Topics API provides part of the path towards this goal — a mechanism to implement IBA that does not depend on third-party cookies.

First of all, the browser observes what sites users visit and infers their interests from site hostnames. These interests are mapped to specific **topics of interest**, and the browser calculates and records users' top topics (i.e. the topics that their interests mapped to most often) at the end of each **epoch**. An epoch is a week by default. Top topics are updated each week so that they are kept current and users don't start to see ads for topics that they are no longer interested in.

> **Note:** This process only happens on sites where a Topics API feature is used (see [What API features observe and return topics?](#what_api_features_observe_and_return_topics)).

Once the browser has observed some topics for a user, the Topics API can retrieve them and send them to an ad tech platform. The platform can then use those topics to personalize the ads they serve to the user. The API helps to preserve privacy by _only returning topics to an API caller that have been observed by them_ on pages visited by the current user.

See [Using the Topics API](/en-US/docs/Web/API/Topics_API/Using) for an explanation of how the API works.

### What topics are there?

The available top topics that the browser could calculate are stored in a publicly available [taxonomy of interests](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v2.md). The initial taxonomy has been proposed by Chrome, with the intention that it becomes a resource maintained by trusted ecosystem contributors. The taxonomy has been human-curated to exclude categories generally considered sensitive, such as ethnicity or sexual orientation.

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
  - : A boolean attribute that, if present, specifies that observed topics should be sent with the request for the {{htmlelement("iframe")}}'s source.

## HTTP headers

- {{httpheader("Sec-Browsing-Topics")}}
  - : Sends observed topics along with a request, which are used by an ad tech platform to choose a personalized ad to display to the current user.
- {{httpheader("Observe-Browsing-Topics")}}
  - : Used to mark topics sent by {{httpheader("Sec-Browsing-Topics")}} as observed in the response to the request. The browser will then use those topics to calculate topics of interest for a user for future epochs.
- {{httpheader("Permissions-Policy")}}; the {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} directive
  - : Controls access to the Topics API. Where a policy specifically disallows the use of the Topics API, any attempts to call the `Document.browsingTopics()` method or send a request with a `Sec-Browsing-Topics` header will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Enrollment

To use the Topics API in your sites, you must specify it in a [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment). If you don't do this, the following sub-features won't work:

- The {{domxref("Document.browsingTopics()")}} method
  - : The promise returned by `browsingTopics()` rejects with a `NotAllowedError` {{domxref("DOMException")}}.
- The {{httpheader("Sec-Browsing-Topics")}} header
  - : Creating or modifying the header fails silently, and any existing `Sec-Browsing-Topics` header is deleted.

## Examples

For complete working examples, see:

- [Topics API demo](https://topics-demo.glitch.me/): Demonstrates how `document.browsingTopics()` calls can be used to observe and then access topics ([see source code](https://glitch.com/edit/#!/topics-demo)).
- [Topics API header demo](https://topics-fetch-demo.glitch.me/): Demonstrates a `fetch()` request with a {{httpheader("Sec-Browsing-Topics")}} header can be used to observe and then access topics ([see source code](https://glitch.com/edit/#!/topics-fetch-demo)).

## Specifications

This feature is not part of an official standard, although it is specified in the [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/).

### Standards positions

One or more vendors oppose this specification. Known positions are as follows:

- Mozilla (Firefox): [Negative](https://mozilla.github.io/standards-positions/#topics)
- Apple (Safari): [Negative](https://webkit.org/standards-positions/#position-111)

## Browser compatibility

{{Compat}}

## See also

- [Topics API](https://developer.chrome.com/docs/privacy-sandbox/topics/overview/) on developer.chrome.com (2023)
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com (2023)
