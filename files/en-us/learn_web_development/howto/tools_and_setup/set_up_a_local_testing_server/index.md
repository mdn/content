---
title: How do you set up a local testing server?
slug: Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server
page-type: learn-faq
sidebar: learn-how-to
---

This article explains how to set up a simple local testing server on your machine and the basics of how to use it.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        You need to first know
        <a href="/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
          >how the Internet works</a
        >, and
        <a href="/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server"
          >what a Web server is</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>You will learn how to set up a local testing server.</td>
    </tr>
  </tbody>
</table>

## Local files vs. remote files

In many of the MDN _Learn_ articles, we tell you to just open your examples directly in a browser. This can be done in several ways — double-clicking the HTML file, dragging and dropping it into the browser window, or choosing _File_ > _Open…_ and navigating to the HTML file.

If the web address path starts with `file://` followed by the path to the file on your local hard drive (or `localhost:` or `http://127.0.0.1`; see [Running a simple local HTTP server](#running_a_local_http_server)), the loaded file is on your local hard drive. In contrast, if you view one of our examples hosted on GitHub (or another remote server), the web address will start with `https://`; this indicates that the file is remote and has been received via HTTPS.

## The problem with testing local files

Some examples won't run if you open them directly in the browser using a `file://` URL. This can be due to a variety of reasons, the most likely being:

- **They feature asynchronous requests**. Some browsers (including Chrome) will not run async requests (see [Making network requests with JavaScript](/en-US/docs/Learn_web_development/Core/Scripting/Network_requests)) if you just run the example from a local file. This is because of security restrictions (for more on web security, read [Website security](/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)).
- **They feature a server-side language**. Server-side languages (such as PHP or Python) require a special server to interpret the code and deliver the results.
- **They include other files**. Browsers commonly treat requests to load resources using the `file://` scheme as cross-origin requests.
  So if you load a local file that includes other local files, this may trigger a {{Glossary("CORS")}} error.

## Running a local HTTP server

To get around the problems associated with running local files, we need to test such examples by running them through a local web server. This section describes several options for doing so.

### Using an extension in your code editor

If you only need HTML, CSS and JavaScript, and no server-side language, an easy way to run local examples is to use a code editor extension. As well as automating server installation and set-up, they also integrate nicely with your code editor.

In VSCode, for example, search for the [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) extension in the Extensions panel. This adds a "Show Preview" button in the top right of the UI when you are viewing an HTML file, which when pressed shows the HTML and associated files rendered in a separate side panel.

Live Preview uses a local server at `http://127.0.0.1:3000` to serve the files.

### Using Node.js

The Node.js [`http-server`](https://www.npmjs.com/package/http-server) module provides a way to host HTML files in any directory.

To use the module:

1. Run the following command in your [command line](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) to check if Node.js is already installed:

   ```bash
   node -v
   ```

2. If Node.js is not installed, you need to install it. Follow the [download instructions](https://nodejs.org/en/download) in the Node.js docs, then run the above command again to check if the installation is successful.

3. In your command prompt, navigate to the folder your example is located in using the `cd` command.

4. Run the following command to start the server:

   ```bash
   npx http-server -o -p 9999
   ```

   This hosts all files in the current directory on `localhost:9999`, loading `index.html` automatically. The option `-o` causes it to open in a web browser immediately. If `index.html` doesn't exist, then the directory contents are displayed instead, allowing you to choose a file to load.

### Using Python

Another way to run local examples in an HTTP server is to use Python's `http.server` module.

> [!NOTE]
> Older versions of Python (up to version 2.7) provided a similar module named `SimpleHTTPServer`. Python 2 is obsolete so we recommend using Python 3.

To do this:

1. Run the following command in your [command line](/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) to check if Python is already installed:

   ```bash
   # On macOS or Linux, run
   python -V
   # If the above fails, try
   python3 -V

   # On Windows, run
   py -3 -V
   ```

2. If Python is not installed, you need to install it. Follow the [download instructions](https://www.python.org/downloads/) in the Python docs (we also have more detailed explanations in our [Django tutorial](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/development_environment#installing_python_3)), then run the above command again to check if the installation is successful.

3. If Python is set up, navigate to the directory that contains the website code you want to test, using the `cd` command.

4. Enter the command to start up the server in that directory:

   ```bash
   # On macOS and Linux, run
   python3 -m http.server

   # On Windows, run
   py -3 -m http.server
   ```

   By default, this hosts all files in the current directory on `localhost:8000`, loading `index.html` automatically. If `index.html` doesn't exist, then the directory contents are displayed instead, allowing you to choose a file to load.

   > [!NOTE]
   > If you already have a server running on port 8000, you can choose another port by running the server command followed by an alternative port number, for example, `python3 -m http.server 7800`. You can then access your content at `localhost:7800`.

## Running server-side languages locally

The best approach for working with server side languages, such as Python, PHP, or JavaScript, depends on the server-side language you are using, and whether you're working with a web framework or "stand-alone" code.

If you're working with a web framework, usually the framework will provide its own development server.
For example, the following languages/frameworks come with a development server:

- Python web frameworks such as [Django](/en-US/docs/Learn_web_development/Extensions/Server-side/Django) and [Flask](https://flask.palletsprojects.com/).
- Node/JavaScript frameworks such as [Express](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs).
- PHP has its own [built-in development server](https://www.php.net/manual/en/features.commandline.webserver.php). Alternatively, you can install a PHP/database development server such as [MAMP](https://www.mamp.info/en/downloads/) (macOS) or [XAMPP](https://www.apachefriends.org/download.html) (Linux/Windows/macOS).
