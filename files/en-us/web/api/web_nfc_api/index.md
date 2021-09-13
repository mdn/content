---
title: Web NFC API
slug: Web/API/Web_NFC_API
tags:
  - NDEF
  - Reference
  - Web NFC
---
{{DefaultAPISidebar("Web NFC API")}}{{Draft}}{{SeeCompatTable}}

The Web NFC API allows exchanging data over NFC via light-weight NFC Data Exchange Format (NDEF) messages.

> **Note:** Devices and tags have to be formatted and recorded specifically to support NDEF record format to be used with Web NFC. Low-level operations are currently not supported by the API, however there is a public discussion about API that would add such functuionality.

## Interfaces

- {{DOMxRef("NDEFMessage")}}
  - : Interface that represents NDEF messages that can be received from or sent to a compatible tag via a `NDEFReader` object. A message is composed of metadata and NDEF Records.
- {{DOMxRef("NDEFReader")}}
  - : Interface that enables reading and writing messages from compatible NFC tags. The messages are represented as `NDEFMessage` objects.
- {{DOMxRef("NDEFRecord")}}
  - : Interface that represents NDEF records that can be included in an NDEF message.

## Specifications

| Specification                             | Status | Comment |
| ----------------------------------------- | ------ | ------- |
| [Web NFC](https://w3c.github.io/web-nfc/) | Draft  |         |

## Browser compatibility

{{Compat("api.NDEFReader")}}
