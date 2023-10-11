---
title: Registering attribution triggers
slug: Web/API/Attribution_Reporting_API/Registering_triggers
page-type: guide
status:
  - experimental
---

{{SeeCompatTable}}{{DefaultAPISidebar("Attribution Reporting API")}}

This article explains how to register attribution triggers.

## Basic methodology

Once you have [registered attribution sources](/en-US/docs/Web/API/Attribution_Reporting_API/Registering_sources), you need to register attribution triggers. These are events on the advertiser's site (e.g. clicking a "purchase" button) that tell the browser a conversion may have occurred. The browser will then attempt to match the attribution trigger to an attribution source entry stored in a private local storage partition, and [generate a report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports) if a match is found.

The different attribution trigger types are registered and triggered in different ways, which are detailed in the sections below — see [Image-based attribution triggers](#image-based_attribution_triggers) and [Script-based attribution triggers](#script-based_attribution_triggers).

However, what happens behind the scenes to register triggers, look for matches, etc., is the same in all cases.

1. All of the trigger types cause an HTTP request to be sent. Including the correct attribute/option on a trigger causes the {{httpheader("Attribution-Reporting-Eligible")}} header to be sent along with that request, to indicate that the request is eligible for attribution reporting. For example:

   ```http
   Attribution-Reporting-Eligible: trigger
   ```

2. When the server receives a request that includes a `Attribution-Reporting-Eligible` header, it can include an {{httpheader("Attribution-Reporting-Register-Trigger")}} along with the response. This takes a JSON string as its value containing data that can be included in generated reports, such as the ID of the trigger, and priority and deduplication values.

   The following minimal example is intended to match with a [event-level report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#event-level_reports) aggregation source:

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       "event_trigger_data": [
         {
           "trigger_data": "412444888111012",
           "priority": "1000000000000",
           "deduplication_key": "2345698765",
         },
       ],
       "debug_key": "1115698977",
     });
   );
   ```

   A trigger intended to match with a [summary report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports#summary_reports) aggregation source requires two additional fields, as shown below:

   ```js
   res.set(
     "Attribution-Reporting-Register-Trigger",
     JSON.stringify({
       "event_trigger_data": [
         {
           "trigger_data": "412444888111012",
           "priority": "1000000000000",
           "deduplication_key": "2345698765",
         },
       ],
       "debug_key": "1115698977",
       "aggregatable_trigger_data": [
         {
           "key_piece": "0x400",
           "source_keys": ["campaignCounts"]
         },
         {
           "key_piece": "0xA80",
           "source_keys": ["geoValue", "nonMatchingKeyIdsAreIgnored"]
         }
       ],
       "aggregatable_values": {
         "campaignCounts": 32768,
         "geoValue": 1664
       }
     });
   );
   ```

   > **Note:** See {{httpheader("Attribution-Reporting-Register-Trigger")}} for a detailed description of all the available fields.

3. When a registered attribution trigger is set off, the browser attempts to match the trigger against any attribution source entries stored in the browser's private local cache. For a successful match, the trigger must be:

   - On a `destination` specified in the source's associated data.
   - Same-origin with the request that specified the source registration.

4. If a successful match is found, the browser [generates a report](/en-US/docs/Web/API/Attribution_Reporting_API/Generating_reports) based on the source and trigger data, and sends it to a reporting endpoint.

> **Note:** Attribution triggers cannot be registered on {{htmlelement("a")}} elements or {{domxref("Window.open()")}} calls like attribution sources can.

## Image-based attribution triggers

You can register an attribution trigger based on an image request by adding the `attributionsrc` attribute to to an appropriate {{htmlelement("img")}} element, either declaratively:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  width="1"
  height="1"
  attributionsrc />
```

Or via the {{domxref("HTMLImageElement.attributionSrc")}} property:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "";
```

In this case, the browser will attempt to match the trigger with a stored attribution source when the browser receives the response containing the image file.

Bear in mind that users might not necessarily be able to perceive the image at all — it might just be a 1x1 transparent tracking pixel that is only being used for attribution reporting. In any case, the onus is on the developer to make sure that this image appears alongside the product or other item they are trying to measure conversions for.

## Script-based attribution triggers

Script-based attribution triggers are more versatile than image-based attribution triggers. You can set up a script to act as an attribution trigger and trigger the browser to attempt a match with a stored source based on whatever request suits your app.

To register a script-based attribution trigger:

1. You first need to add the `attributionsrc` attribute to an appropriate {{htmlelement("script")}} element, either declaratively:

   ```html
   <script src="advertising-script.js" attributionsrc />
   ```

   Or via the {{domxref("HTMLScriptElement.attributionSrc")}} property:

   ```js
   const scriptElem = document.querySelector("script");
   scriptElem.attributionSrc = "";
   ```

   This handles the attribution source registration.

2. To trigger the browser to attempt a match between the trigger and a stored attribution source, a specific request needs to be made from within the script contents. You could:

   - Send a {{domxref("fetch()")}} request containing the `attributionReporting` option:

     ```js
     const attributionReporting = {
       eventSourceEligible: false,
       triggerEligible: true,
     };

     // Optionally set keepalive to ensure the request outlives the page
     function triggerMatching() {
       fetch("https://shop.example/endpoint", {
         keepalive: true,
         attributionReporting,
       });
     }

     // Associate the interaction trigger with whatever
     // element and event makes sense for your code
     elem.addEventListener("click", triggerMatching);
     ```

   - Send an {{domxref("XMLHttpRequest")}} with {{domxref("XMLHttpRequest.setAttributionReporting", "setAttributionReporting()")}} invoked on the request object:

     ```js
     const attributionReporting = {
       eventSourceEligible: false,
       triggerEligible: true,
     };

     function triggerMatching() {
       const req = new XMLHttpRequest();
       req.open("GET", "https://shop.example/endpoint");
       req.setAttributionReporting(attributionReporting);
       req.send();
     }

     // Associate the interaction trigger with whatever
     // element and event makes sense for your code
     elem.addEventListener("click", triggerMatching);
     ```

> **Note:** The request can be for any resource. It doesn't need to have anything directly to do with the Attribution Reporting API, and can be a request for JSON, plain text, an image blob, or whatever else makes sense for your app.

## Specifying a URL inside attributionsrc

In the above examples, the `attributionsrc` attribute is left blank, taking the value of an empty string. This is fine if the server that holds the requested resource is the same server that you also want to handle the registration, i.e. receive the {{httpheader("Attribution-Reporting-Eligible")}} header and respond with the {{httpheader("Attribution-Reporting-Register-Trigger")}} header.

However, it might be the case that the requested resource is not on a server you control, and you want to register the attribution trigger via a separate server that you _do_ control. In this case, you can specify a single URL as the value of `attributionsrc`. When the resource request occurs, the {{httpheader("Attribution-Reporting-Eligible")}} header will be sent to the URL specified in `attributionsrc` rather than the resource origin; the URL can then respond with the {{httpheader("Attribution-Reporting-Register-Trigger")}} to complete registration.

For example, in the case of an `<img>` element you could declare the URL in the `attributionsrc` attribute:

```html
<img
  src="https://shop.example/conversion/4rghshdh5"
  attributionsrc="https://my-separate-tracking-site.example.com"
  width="1"
  height="1" />
```

Or in JavaScript via the `attributionSrc` property:

```js
const imgElem = document.querySelector("img");
imgElem.attributionSrc = "https://my-separate-tracking-site.example.com";
```
