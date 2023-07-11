---
title: FencedFrameConfig
slug: Web/API/FencedFrameConfig
page-type: web-api-interface
status:
  - experimental
browser-compat: api.FencedFrameConfig
---

{{SeeCompatTable}}{{APIRef("Fenced Frame API")}}

The **`FencedFrameConfig`** interface represents the navigation of a {{htmlelement("fencedframe")}}, i.e. what content will be displayed in it.

`FencedFrameConfig` objects cannot be constructed manually via JavaScript. They are returned from a source such as the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/) and set as the value of {{domxref("HTMLFencedFrameElement.config")}}.

A `FencedFrameConfig` object instance has standard instance properties and methods, but it also maps to [internal config](#internal_config) information containing opaque properties not accessible from JavaScript. This includes information such as the source of the loaded content and interest groups for advertising purposes. It is key to how fenced frames help to implement key use cases while respecting user privacy.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("FencedFrameConfig.containerHeight", "containerHeight")}}
  - : Reports the height of the containing `<fencedframe>`, as specified by the internal config `containerSize.height` property.
- {{domxref("FencedFrameConfig.containerWidth", "containerWidth")}}
  - : Reports the width of the containing `<fencedframe>`, as specified by the internal config `containerSize.width` property.
- {{domxref("FencedFrameConfig.contentHeight", "contentHeight")}}
  - : Reports the height of the loaded content, as specified by the internal config `contentSize.size.height` property.
- {{domxref("FencedFrameConfig.contentWidth", "contentWidth")}}
  - : Reports the width of the loaded content, as specified by the internal config `contentSize.size.width` property.

## Instance methods

- {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}}
  - : Passes in data from the embedding document to the `<fencedframe>`'s shared storage.

## Internal config

A `FencedFrameConfig` object maps to internal config information not accessible from the embedding page's JavaScript. The internal information is as follows:

- `urn`
  - : A [URN](/en-US/docs/Glossary/URN) [UUID](/en-US/docs/Glossary/URN), which uniquely identifies the source of the content to be embedded inside the fenced frame.
- `config`

  - : An object containing internal config information, which has the following properties:

    - `mappedURL`
      - : TODO
    - `containerSize`
      - : An object specifying the size of the containing `<fencedframe>`, or `null` if it has not been specified. This object contains two properties:
        - `height`: A number specifying the height of the containing `<fencedframe>`.
        - `width`: A number specifying the width of the containing `<fencedframe>`.
    - `contentSize`
      - : An object specifying the size of the loaded content and its visibility, or `null` if it has not been specified. This object contains two properties:
        - `size`: An object containing two properties, `height` and `width`, which respectively specify the height and width of the containing loaded content.
        - `visibility`: An enumerated value specifying whether the content size should be shared or not. If it is set to `"transparent"`, the {{domxref("FencedFrameConfig.contentHeight", "contentHeight")}}/{{domxref("FencedFrameConfig.contentWidth", "contentWidth")}} properties will report the relevant internal values. If it is set to `"opaque"`, {{domxref("FencedFrameConfig.contentHeight", "contentHeight")}}/{{domxref("FencedFrameConfig.contentWidth", "contentWidth")}} will return `"opaque"`.
    - `interestGroup`
      - : An object representing an advertising interest group (as might be set by the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/)), or `null` if it has not been specified. This object contains two properties:
        - `descriptor`: An object describing the interest group, which contains two properties — an `origin` specifying the origin of the advertiser property that set the interest group, and a string specifying the name of the interest group.
        - `visibility`: An enumerated value specifying whether the interest group should be made available inside the fenced frame (`"transparent"`) or not (`"opaque"`).
    - `onNavigateCallback`
      - : TODO
    - `effectiveSandboxFlags`
      - : An object specifying a set of sandbox flags that restrict the ability of content embedded in the fenced frame (equivalent in purpose to the [`<iframe> sandbox` attribute](/en-US/docs/Web/HTML/Element/iframe#sandbox)), or `null` if it has not been specified. This object contains two properties:
        - `flag set`: A set of sandboxed flags.
        - `visibility`: An enumerated value specifying whether the sandboxed flags should be made available inside the fenced frame (`"transparent"`) or not (`"opaque"`).
    - `effectiveEnabledPermissions`
      - : An object specifying a list of [Permission Policies](/en-US/docs/Web/HTTP/Permissions_Policy) that will control feature usage inside the content embedded in the fenced frame, or `null` if it has not been specified. This object contains two properties:
        - `policies`: A list of permission policies.
        - `visibility`: An enumerated value specifying whether the policies should be made available inside the fenced frame (`"transparent"`) or not (`"opaque"`).
    - `reportingMetadata`
      - : An object representing reporting metadata for use when compiling or displaying reports (as might be specified by the [Private Aggregation API](https://developer.chrome.com/docs/privacy-sandbox/private-aggregation/)), or `null` if it has not been specified. This object contains two properties:
        - `reportingMap`: A [map](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) whose keys are reporting destinations (see `destination` under [`reportEvent()`'s parameters](/en-US/docs/Web/API/Fence/reportEvent#parameters)), and whose values are either:
          - Lists of pending reporting events (as yet unfinalized)
          - Maps whose keys are strings and whose values are URLs (finalize reporting metadata)
        - `visibility`: An enumerated value specifying whether the reporting metadata should be made available inside the fenced frame (`"transparent"`) or not (`"opaque"`).
    - `exfiltrationBudgetMetadata`
      - : An object representing the exfiltration budget of the origin associated with the fenced frame, or `null` if it has not been specified. This object contains two properties:
        - `budget`: An object containing two properties — the origin that the budget relates to, and a number specifying the budget.
        - `visibility`: An enumerated value specifying whether the exfiltration budget should be made available in the fenced frame (`"transparent"`) or not (`"opaque"`).
    - `nestedConfigs`
      - : An object representing the configs of nested fenced frames embedded in the current fenced frame (which would be returned by {{domxref("Fence.getNestedConfigs()")}}), or `null` if there are none. This object contains two properties:
        - `configs`: An array of `FencedFrameConfig`s.
        - `visibility`: An enumerated value specifying whether the nested fenced frames should be returned (`"transparent"`) or not (`"opaque"`).
    - `SharedStorageContext`
      - : A string specifying the contextual data to pass into shared storage, as set by {{domxref("FencedFrameConfig.setSharedStorageContext", "setSharedStorageContext()")}}, or `null` if it has not been specified.

## Examples

### Basic usage

To set what content will be shown in a `<fencedframe>`, a utilizing API (such as [Protected Audience](https://developer.chrome.com/docs/privacy-sandbox/fledge/) or [Shared Storage](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/)) generates a {{domxref("FencedFrameConfig")}} object, which is then set as the value of the `<fencedframe>`'s `config` property.

The following example gets a `FencedFrameConfig` from a Protected Audience API's ad auction, which is then used to display the winning ad in a `<fencedframe>`:

```js
const frameConfig = await navigator.runAdAuction({
  // ...auction configuration
  resolveToConfig: true,
});

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

> **Note:** `resolveToConfig: true` must be passed in to the `runAdAuction()` call to obtain a `FencedFrameConfig` object. If it is not set, the resulting {{jsxref("Promise")}} will resolve to a URN that can only be used in an {{htmlelement("iframe")}}.

### Passing contextual data via `setSharedStorageContext()`

You can use the [Private Aggregation API](https://developer.chrome.com/docs/privacy-sandbox/private-aggregation/) to create reports that combine event-level data inside fenced frames with contextual data from the embedding document. `setSharedStorageContext()` can be used to pass contextual data from the embedder to shared storage worklets initiated by the [Protected Audience API](https://developer.chrome.com/docs/privacy-sandbox/fledge/).

In the following example, we store data from both the embedding page and the fenced frame in [shared storage](https://developer.chrome.com/docs/privacy-sandbox/shared-storage/).

In the embedding page, we will set a mock event ID as the shared storage context using `setSharedStorageContext()`:

```js
const frameConfig = await navigator.runAdAuction({ resolveToConfig: true });

// Data from the embedder that you want to pass to the shared storage worklet
frameConfig.setSharedStorageContext("some-event-id");

const frame = document.createElement("fencedframe");
frame.config = frameConfig;
```

Inside the fenced frame, we add the worklet module with {{domxref("Worklet.addModule","window.sharedStorage.worklet.addModule()")}}, and then send the event-level data into the shared storage worklet using {{domxref("WindowSharedStorage.run","window.sharedStorage.run()")}} (this is unrelated to the contextual data from the embedding document):

```js
const frameData = {
  // Data available only inside the fenced frame
};

await window.sharedStorage.worklet.addModule("reporting-worklet.js");

await window.sharedStorage.run("send-report", {
  data: {
    frameData,
  },
});
```

In the `reporting-worklet.js` worklet, we read the embedding document's event ID from `sharedStorage.context` and the frame's event-level data from the data object, then report them through Private Aggregation:

```js
class ReportingOperation {
  convertEventIdToBucket(eventId) { ... }
  convertEventPayloadToValue(info) { ... }

  async run(data) {
    // Data from the embedder
    const eventId = sharedStorage.context;

    // Data from the fenced frame
    const eventPayload = data.frameData;

    privateAggregation.sendHistogramReport({
      bucket: convertEventIdToBucket(eventId),
      value: convertEventPayloadToValue(eventPayload)
    });
  }
}

register('send-report', ReportingOperation);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fenced frames](https://developer.chrome.com/docs/privacy-sandbox/fenced-frame/) on developer.chrome.com
- [The Privacy Sandbox](https://developer.chrome.com/docs/privacy-sandbox/) on developer.chrome.com
