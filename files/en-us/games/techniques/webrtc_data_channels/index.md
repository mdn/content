---
title: WebRTC data channels
slug: Games/Techniques/WebRTC_data_channels
page-type: guide
---

{{GamesSidebar}}

The [WebRTC](/en-US/docs/Web/API/WebRTC_API) (Web Real-Time Communications) API is primarily known for its support for audio and video communications; however, it also offers peer-to-peer data channels. This article explains more about this, and shows you how to use libraries to implement data channels in your game.

## What is a data channel?

A WebRTC data channel lets you send text or binary data over an active connection to a peer. In the context of a game, this lets players send data to each other, whether text chat or game status information. Data channels come in two flavors.

**Reliable channels** guarantee that messages you send arrive at the other peer and in the same order in which they're sent. This is analogous to a TCP socket.

**Unreliable channels** make no such guarantees; messages aren't guaranteed to arrive in any particular order and, in fact, aren't guaranteed to arrive at all. This is analogous to a UDP socket.

We have [documentation for using WebRTC](/en-US/docs/Web/API/WebRTC_API). This article, however, will take advantage of some libraries that can help trivialize the work, and will demonstrate ways to use abstraction to work around implementation differences between browsers. Hopefully, of course, those differences will fade away in time.

## Using the p2p library

One library you can use is the [p2p](https://github.com/js-platform/p2p) library. This library provides a simple API for creating peer connections and setting up streams and data channels. There's also a broker server component and a hosted broker you can use instead of having to set one up for yourself.

> **Note:** We will continue to add content here soon; there are some organizational issues to sort out.

## Original Document Information

- Author(s): Alan Kligman
- Source Article: [WebRTC Data Channels for Great Multiplayer](https://hacks.mozilla.org/2013/03/webrtc-data-channels-for-great-multiplayer/)
- Other Contributors: Robert Nyman
- Copyright Information: Alan Kligman, 2013
