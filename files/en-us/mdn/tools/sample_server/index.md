---
title: The MDN sample server
slug: MDN/Tools/Sample_server
tags:
  - Advanced
  - Draft
  - Guide
  - MDN Meta
  - Site-wide
  - Tools
---
{{MDNSidebar}}

While MDN provides a built-in [live sample system](/en-US/docs/MDN/Structures/Live_samples) for presenting simple (and even not-so-simple) code samples with the code's output displayed in-context, there are samples that require a server to talk to. For those things, we have the MDN sample server, which solves these and other problems. This article is a guide to the use of the sample server.

## Possible use cases

Most samples can be presented using our built-in [live sample system](/en-US/docs/MDN/Structures/Live_samples), but there are exceptions. Here are some reasons an example might need to make use of the sample server:

- A sample requiring persistently running code on the server, such as a WebSocket server may have the server component and possibly also the client side component on the sample server.
- A sample using technologies that don't work in the context of the MDN wiki or could interfere with readers' ability to focus on the content would be an obvious candidate; this might include samples that play sound effects or media or have significant amounts of animation.
- A sample which needs to access resources that cannot be hosted on MDN can be placed on the sample server.

## Referencing samples

Each sample's code is [maintained on GitHub](https://github.com/mdn/samples-server), and we have a server instance which provides access to executable/usable installations of all of the samples.

## Contributing advanced samples

To contribute to the samples located on the [sample server](https://mdn-samples.mozilla.org/), you need to fork the [MDN sample server repository](https://github.com/mdn/samples-server) on GitHub. All samples are currently kept in the same repository on GitHub.

Each example has its own directory under the [`s/` directory](https://github.com/mdn/samples-server/tree/master/s). To create a new sample, add an appropriately named directory there. For example, if your example shows how to use the Fetch API to implement a simple trivia game, you might put your sample in `s/fetch-trivia`.

### Structure of an advanced sample

Each sample has exactly one mandatory file (which is ironically not used yet but will be soon so please include it): a manifest file called `manifest.json`, which describes the sample, providing metadata which may be used both by the sample server itself and by tools for maintaining and using it. Everything else is optional. Let's take a look at this in more detail.

#### The manifest file: manifest.json

The manifest file is used primarily to build lists of samples, but will eventually be used to help improve the startup and shutdown processes for each sample. It's a JSON object which looks like this:

```json
{
  "name": "WebSocket based chat server with WebRTC video chat support",
  "docsUrl": "https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling",
  "description": "Uses Node.js to set up a WebSocket-based chat server, and provides a web page you can use to join the chat. Adds a feature to start a video call with another chat participant."
}
```

There are currently three fields in the object, _all of which are mandatory_ (even though we don't use them yet, we will very soon):

- `name`
  - : The name of the example. This should be a relatively short title for the example.
- `docsUrl`
  - : The URL of the primary page on MDN which discusses this example in detail. If the example is referenced from multiple pages, this should be the address of the "main" page (or a landing page if available).
- `description`
  - : A longer paragraph describing the sample, including information about the technologies it demonstrates.

#### Running your sample at startup: startup.sh

When the sample server starts up or samples are restarted, each sample's base directory is scanned to see if there's a shell script file named `startup.sh`. If the file exists, it is executed, so that the sample has the opportunity to install support files, run any scripts, and start up any server processes that are needed to support the sample. For example, the [WebSocket chat sample's](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling) startup.sh script looks like this:

```bash
npm install websocket
node chatserver.js
```

The first line uses the Node package manager, `npm`, to install the module named `websocket`, which provides support for creating and/or talking to [WebSocket](/en-US/docs/Web/API/WebSockets_API) servers.

The second line actually starts up the server process, which is implemented as a JavaScript script which is started up and run in the background.

#### Using Node.js modules: package.json

To use Node modules in your project, you'll need to add a `package.json` file, which lists information about your sample but also includes a list of dependencies, so that those dependencies can be installed for you by the Node package manager (`npm`).

#### Optional files

You may of course have other files. Obvious candidates are an `index.html` file so that users that browse to your sample see some content, style sheets, support HTML and JavaScript files, images and other media, and so forth.

### Submitting your sample

Once you've finished and tested your sample, you will want to submit it so that it can be tested and eventually installed onto the production sample server. This is done using the standard Github [pull request](https://help.github.com/articles/using-pull-requests/) process.

## Tips and errata

Because the sample server itself is still a work in progress, there are quirks and issues with how samples work. Here are some tips that will help you avoid some of the worst potential problems.

### Port numbers

If your sample needs to use a network port, you will have to take care not to inadvertently use one that's already being used by another sample (or by a system service on the server).  At some point in the future, there will be an entry in the sample manifest for requesting a port number, so that the system will allocate them and keep track of which are used and which are not. But until then, be careful not to step on any toes!

## Work in progress

This page, and the server it describes, are works in progress.
