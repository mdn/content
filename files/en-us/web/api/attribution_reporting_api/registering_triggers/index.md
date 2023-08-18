---
title: Registering attribution triggers
slug: Web/API/Attribution_Reporting_API/Registering_triggers
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

This article explains how to register attribution triggers for users to interact with.

## Basic methodology

Once you have registered attribution sources, you need to register attribution triggers. These are events occurring on the advertiser's site (e.g. clicking a "purchase" button) that tell the browser to capture conversions. This involves the browser attempting to match the attribution trigger to an attribution source entry in the private local storage partition. The different methods of initiating an attribution trigger registration are listed in the sections below. They all work the same way:

1. All of the methods cause an HTTP request to be sent. Including `attributionsrc`/`attributionRequest` as indicated causes the {{httpheader("Attribution-Reporting-Eligible")}} header to be sent along with that request, to indicate that the request is eligible for attribution reporting. Alternatively, you can just send the header directly via a conversion pixel.
2. When the server receives such a request from a trigger source, you should include a {{httpheader("Attribution-Reporting-Register-Trigger")}} along with the response. This takes a JSON string as its value containing data that can be included in generated reports, such as the ID of the trigger, and priority and deduplication values.

You must provide different data in your `Attribution-Reporting-Register-Trigger` header, depending on whether the trigger is intended to match with an event-level report aggregation source or a summary report aggregation source.

The following minimal example is intended to match with a event-level report aggregation source:

```js
JSON.stringify({
  event_trigger_data: [
    {
      trigger_data: "412444888111012",
      priority: "1000000000000",
      deduplication_key: "2345698765",
    },
  ],
  debug_key: "1115698977",
});
```

A trigger intended to match with a summary report aggregation source should be registered with an `Attribution-Reporting-Register-Trigger` response value that includes two additional fields, like the following:

```js
JSON.stringify({
  event_trigger_data: [
    {
      trigger_data: "412444888111012",
      priority: "1000000000000",
      deduplication_key: "2345698765",
    },
  ],
  debug_key: "1115698977",

  aggregatable_trigger_data: [
    {
      key_piece: "0x400",
      source_keys: ["campaignCounts"],
    },
    {
      key_piece: "0xA80",
      source_keys: ["geoValue", "nonMatchingKeyIdsAreIgnored"],
    },
  ],
  aggregatable_values: {
    campaignCounts: 32768,
    geoValue: 1664,
  },
});
```

See {{httpheader("Attribution-Reporting-Register-Trigger")}} for all the available fields.

## Image-based attribution triggers

You can register an attribution trigger based on an image request:

```html
<img
  src="https://ourshop.example.com/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

You can also include the `attributionsrc` attribute, with a single URL as the value:

```html
<img
  src="https://ourshop.example.com/conversion/4rghshdh5"
  attributionsrc="https://my-separate-tracking-site.example.com"
  width="1"
  height="1" />
```

Or add it via JavaScript:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

In this case, the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL specified in `attributionsrc`; this is required if the resource pointed to in `src` is not on a server you control, and you want to register the attribution trigger on a separate server that you _do_ control. `attributionsrc` instructs the browser to make that extra request and specifies its destination.

EDITORIAL: HOW IS THIS ACTUALLY USED?

## Script-based attribution triggers

You can register an attribution trigger based on a `<script>` element:

```html
<script src="advertising-script.js" attributionsrc />

<script
  src="advertising-script.js"
  attributionsrc="https://my-separate-tracking-site.example.com" />
```

Or add `attributionsrc` via JavaScript:

```js
const scriptElem = document.querySelector("script");
scriptElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```

Again, an `attributionsrc` value is only required if the resource pointed to in JavaScript fetch request is not on a server you control, and you want to register the attribution trigger on a separate server that you _do_ control.

You can also register a trigger via a JavaScript fetch request. In a {{domxref("fetch()")}} call, you can include the `attributionReporting` option:

```js
const attributionReporting = {
  eventSourceEligible: true,
  triggerEligible: false,
};

// Optionally set keepalive to ensure the request outlives the page.
fetch("https://a.example/register-trigger", {
  keepalive: true,
  attributionReporting,
});
```

Or in an {{domxref("XMLHttpRequest")}}, you invoke {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} on the request object:

```js
const attributionReporting = {
  eventSourceEligible: true,
  triggerEligible: false,
};

const req = new XMLHttpRequest();
req.open("GET", "https://a.example/register-trigger");
req.setAttributionReporting(attributionReporting);
req.send();
```

EDITORIAL: AGAIN, HOW SHOULD WE RECOMMEND THAT PEOPLE ACTUALLY USE THESE?
