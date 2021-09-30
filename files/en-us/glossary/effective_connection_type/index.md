---
title: Effective connection type
slug: Glossary/Effective_connection_type
tags:
  - Glossary
  - Navigator
  - Network Information API
  - NetworkInformation
  - Performance
  - Reference
  - Web Performance
  - connect
  - effective connection type
  - effectiveType
---
**Effective connection type** (ECT) refers to the measured network performance, returning a cellular connection type, like 3G, even if the actual connection is tethered broadband or WiFi, based on the time between the browser requesting a page and effective type of the connection.

The values of '`slow-2g`', '`2g`', '`3g`', and '`4g`' are determined using observed round-trip times and downlink values.

| ECT         | Minimum [RTT](</en-US/docs/Glossary/Round_Trip_Time_(RTT)>) | Maximum downlink | Explanation                                                                                              |
| ----------- | ----------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------- |
| _`slow-2g`_ | 2000ms                                                      | 50 Kbps          | The network is suited for small transfers only such as text-only pages.                                  |
| _`2g`_      | 1400ms                                                      | 70 Kbps          | The network is suited for transfers of small images.                                                     |
| _`3g`_      | 270ms                                                       | 700 Kbps         | The network is suited for transfers of large assets such as high resolution images, audio, and SD video. |
| _`4g`_      | 0ms                                                         | ∞                | The network is suited for HD video, real-time video, etc.                                                |

[effectiveType](/en-US/docs/Web/API/NetworkInformation/effectiveType) is a property of the [Network Information API](/en-US/docs/Web/API/Network_Information_API), exposed to JavaScript via the [navigator.connection](/en-US/docs/Web/API/Navigator/connection) object. To see your effective connection type, open the console of the developer tools of a supporting browser and enter the following:

```js
navigator.connection.effectiveType;
```

## See also

- [Network Information API](/en-US/docs/Web/API/Network_Information_API)
- {{domxref('NetworkInformation')}}
- {{domxref('NetworkInformation.effectiveType')}}
- {{HTTPHeader("ECT")}}
