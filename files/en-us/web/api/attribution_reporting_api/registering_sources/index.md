---
title: Registering attribution sources
slug: Web/API/Attribution_Reporting_API/Registering_sources
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

This article explains how to register attribution sources for users to interact with.

## Basic methodology

Attribution sources take the form of links, images, or scripts contained within an embedded ad that cause the browser to store information when users interact with them. All of the different methods of initiating an attribution source registration are listed in the sections below. They all work the same way:

1. All of the methods cause an HTTP request to be sent. Including `attributionsrc`/`attributionRequest` as indicated causes the {{httpheader("Attribution-Reporting-Eligible")}} header to be sent along with that request, to indicate that the request is eligible for attribution reporting.
2. When the server receives such a request, you should include a {{httpheader("Attribution-Reporting-Register-Source")}} along with the response — this takes a JSON string as its value, and provides the information that the browser should store when the attribution source is interacted with. The information you include in this header also determines which type of report the browser will generate.

The following minimalist example will cause an event-level report to be generated when a trigger is matched to a source:

```js
JSON.stringify({
  source_event_id: "412444888111012",
  destination: "https://advertiser.example",
  expiry: "604800",
  priority: "100",
  debug_key: "122939999",
  event_report_window: "86400",
});
```

To make the browser generate a summary report when a trigger is matched to a source, you need to include some additional fields, _in addition_ to those included in an event-level report.

```js
JSON.stringify({
  source_event_id: "412444888111012",
  destination: "https://advertiser.example",
  expiry: "604800",
  priority: "100",
  debug_key: "122939999",
  event_report_window: "86400",

  aggregation_keys: {
    campaignCounts: "0x159",
    geoValue: "0x5",
  },
  aggregatable_report_window: "86400",
});
```

See {{httpheader("Attribution-Reporting-Register-Source")}} for all the available fields.

## Click-based attribution sources

To register a click-based attribution source, you can:

- Add the `attributionsrc` attribute to an appropriate {{htmlelement("a")}} element (either declaratively, or via the {{domxref("HTMLAnchorElement.attributionSrc")}} property):

  ```html
  <a href="https://ourshop.example.com" attributionsrc>
    Click to visit our shop
  </a>
  ```

  ```js
  const aElem = document.querySelector("a");
  aElem.attributionSrc = "";
  ```

- Add the `attributionsrc` feature keyword to the features property of a {{domxref("Window.open()")}} call:

  ```js
  elem.addEventListener("click", () => {
    window.open("https://ourshop.example.com", "_blank", "attributionsrc");
  });
  ```

  > **Note:** It is much better for accessibility to use an `<a>` element, but this method is available for cases where that isn't an option and the user is clicking something else to trigger the navigation. Note that, to register the source, this method must be called with [transient activation](/en-US/docs/Glossary/Transient_activation) (i.e. inside a user interaction event handle such as `click`), within five seconds of user interaction.

An associated attribution source event occurs when the user clicks the link/element — this causes the browser to store the associated source data (as specified in the {{httpheader("Attribution-Reporting-Register-Source")}} header) in a private local cache.

## Image-based attribution sources

To register an image-based attribution source, you can add the `attributionsrc` attribute to an appropriate {{htmlelement("img")}} element (either declaratively, or via the {{domxref("HTMLImageElement.attributionSrc")}} property):

```html
<img src="advertising-image.png" attributionsrc />
```

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

EDITORIAL: WHAT IS THE ACCEPTED BEST PRACTICE HERE? SURELY IF YOU JUST INCLUDE THIS IN THE PAGE IT WILL TRIGGER THE EVENT AS SOON AS THE IMAGE SOURCE IS LOADED, WHICH IS NO GOOD - YOU WANT THE USER TO ACTUALLY LOOK AT IT BEFORE THE EVENT IS LOADED. SHOULD WE RECOMMEND LAZY LOADING, OR USE OF AN INTERSECTION OBSERVER, OR SIMILAR?

An associated attribution source event occurs when the image is loaded — this causes the browser to store the associated source data (as specified in the {{httpheader("Attribution-Reporting-Register-Source")}} header) in a private local cache.

## Script-based attribution sources

To register a script-based attribution source, you can add the `attributionsrc` attribute to an appropriate {{htmlelement("script")}} element (either declaratively, or via the {{domxref("HTMLScriptElement.attributionSrc")}} property):

```html
<script src="advertising-script.js" attributionsrc />
```

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "";
```

- Send a {{domxref("fetch()")}} request containing the `attributionReporting` option:

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  // Optionally set keepalive to ensure the request outlives the page.
  fetch("https://a.example/register-source", {
    keepalive: true,
    attributionReporting,
  });
  ```

- Send an {{domxref("XMLHttpRequest")}} request with {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} invoked on the request object:

  ```js
  const attributionReporting = {
    eventSourceEligible: true,
    triggerEligible: false,
  };

  const req = new XMLHttpRequest();
  req.open("GET", "https://a.example/register-source");
  req.setAttributionReporting(attributionReporting);
  req.send();
  ```

Script-based attribution sources are the most versatile — it is completely up to you to specify what event will trigger the request to be sent, causing the browser to store the associated source data (as specified in the {{httpheader("Attribution-Reporting-Register-Source")}} header) in a private local cache.

## Specifying URLs inside attributionsrc

You can specify one or more space-separated URLs as a value for `attributionsrc` attributes or `attributionSrc` properties, in any of the cases listed in the previous sections.

For example in the case of an `<a>` element:

```html
<a
  href="https://ourshop.example.com"
  attributionsrc="https://a.example/register-source https://b.example/register-source">
  Click to visit our shop
</a>
```

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

const aElem = document.querySelector("a");
aElem.attributionSrc = `${encodedUrlA} ${encodedUrlB}`;
```

In the case of a {{domxref("Window.open()")}} call, the different URLs have to be listed as separate `attributionsrc` features in the features parameter, separated by commas:

```js
// encode the URLs in case they contain special characters
// such as '=' that would be improperly parsed.
const encodedUrlA = encodeURIComponent("https://a.example/register-source");
const encodedUrlB = encodeURIComponent("https://b.example/register-source");

elem.addEventListener("click", () => {
  window.open(
    "https://ourshop.example.com",
    "_blank",
    `attributionsrc=${encodedUrl1},attributionsrc=${encodedUrl2}`,
  );
});
```

In this case, the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL(s) specified in `attributionsrc`; this is required if the resource pointed to in `href` or `src` is not on a server you control, and you want to register the attribution source on separate servers that you _do_ control. `attributionsrc` instructs the browser to make the required extra requests and specifies their destinations.
