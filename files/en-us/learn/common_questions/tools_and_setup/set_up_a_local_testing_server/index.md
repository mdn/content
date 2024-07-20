---
title: How do you set up a local testing server?
slug: Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server
page-type: learn-faq
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

This article explains how to set up a simple local testing server on your machine, and the basics of how to use it.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        You need to first know
        <a href="/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >how the Internet works</a
        >, and
        <a href="/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
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

Throughout most of the learning area, we tell you to just open your examples directly in a browser — this can be done by double-clicking the HTML file, dragging and dropping it into the browser window, or choosing _File_ > _Open…_ and navigating to the HTML file. There are many ways to achieve this.

If the web address path starts with `file://` followed by the path to the file on your local hard drive, a local file is being used. In contrast, if you view one of our examples hosted on GitHub (or an example on some other remote server), the web address will start with `http://` or `https://`, to show that the file has been received via HTTP.

## The problem with testing local files

Some examples won't run if you open them as local files. This can be due to a variety of reasons, the most likely being:

- **They feature asynchronous requests**. Some browsers (including Chrome) will not run async requests (see [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)) if you just run the example from a local file. This is because of security restrictions (for more on web security, read [Website security](/en-US/docs/Learn/Server-side/First_steps/Website_security)).
- **They feature a server-side language**. Server-side languages (such as PHP or Python) require a special server to interpret the code and deliver the results.
- **They include other files**. Browsers commonly treat requests to load resources using the `file://` schema as cross-origin requests.
  So if you load a local file that includes other local files, this may trigger a {{Glossary("CORS")}} error.

## Running a simple local HTTP server

To get around the problem of async requests, we need to test such examples by running them through a local web server.

### Using an extension in your code editor

If you only need HTML, CSS and JavaScript, and no server-side language, the easiest way may be to check for extensions in your code editor. As well as automating installation and set-up for your local HTTP server, they also integrate nicely with your code editors. Testing local files in an HTTP server may be one click away.

For VSCode, you can check the following free extension:

- `vscode-preview-server`. You can check it on its [home page](https://marketplace.visualstudio.com/items?itemName=yuichinukiyama.vscode-preview-server).

### Using Node.js

The Node.js [`http-server`](https://www.npmjs.com/package/http-server) module is an easiest way to host HTML files in any directory.

To use the module:

1. Run the following commands to check if Node.js is already installed:

   ```bash
   node -v
   npm -v
   npx -v
   ```

2. If Node.js is not installed, you need to install it. Follow the [download instructions](https://nodejs.org/en/download/) in the Node.js docs, then run the above commands again to check if the installation is successful.

3. Let's assume the directory is `/path/to/project`. Run the following command to start the server:

   ```bash
   npx http-server /path/to/project -o -p 9999
   ```

   This hosts all files in the `/path/to/project` directory on `localhost:9999`. The option `-o` will open the `index.html` page in a web browser. If `index.html` doesn't exist, then the directory is displayed instead.

### Using Python

Another way to achieve this is to use Python's `http.server` module.

> **Note:** Older versions of Python (up to version 2.7) provided a similar module named `SimpleHTTPServer`. If you are using Python 2.x, you can follow this guide by replacing all uses of `http.server` with `SimpleHTTPServer`. However, we recommend you use the latest version of Python.

To do this:

1. Install Python. If you are using Linux or macOS, it should be available on your system already. If you are a Windows user, you can get an installer from the Python homepage and follow the instructions to install it:

   - Go to [python.org](https://www.python.org/)
   - Under the Download section, click the link for Python "3.xxx".
   - At the bottom of the page, click the _Windows Installer_ link to download the installer file.
   - When it has downloaded, run it.
   - On the first installer page, make sure you check the "Add Python 3.xxx to PATH" checkbox.
   - Click _Install_, then click _Close_ when the installation has finished.

2. Open your command prompt (Windows) / terminal (macOS/ Linux). To check if Python is installed, enter the following command:

   ```bash
   python -V
   # If the above fails, try:
   python3 -V
   # Or, if the "py" command is available, try:
   py -V
   ```

3. This should return a version number. If this is OK, navigate to the directory that contains the website code you want to test, using the `cd` command.

   ```bash
   # include the directory name to enter it, for example
   cd Desktop
   # use two dots to jump up one directory level if you need to
   cd ..
   ```

4. Enter the command to start up the server in that directory:

   ```bash
   # If Python version returned above is 3.X
   # On Windows, try "python -m http.server" or "py -3 -m http.server"
   python3 -m http.server
   # If Python version returned above is 2.X
   python -m SimpleHTTPServer
   ```

5. By default, this will run the contents of the directory on a local web server, on port 8000. You can go to this server by going to the URL `localhost:8000` in your web browser. Here you'll see the contents of the directory listed — click the HTML file you want to run.

> **Note:** If you already have something running on port 8000, you can choose another port by running the server command followed by an alternative port number, e.g. `python3 -m http.server 7800` (Python 3.x) or `python -m SimpleHTTPServer 7800` (Python 2.x). You can then access your content at `localhost:7800`.

## Running server-side languages locally

The best approach for working with server side languages, such as Python, PHP, or JavaScript, depends on the server-side language you are using, and whether you're working with a web framework or "stand-alone" code.

If you're working with a web framework, usually the framework will provide its own development server.
For example, the following languages/frameworks come with a development server:

- Python web frameworks, such as [Django](/en-US/docs/Learn/Server-side/Django), [Flask](https://flask.palletsprojects.com/), and [Pyramid](https://trypyramid.com).
- Node/JavaScript frameworks such as [Express Web Framework (Node.js/JavaScript)](/en-US/docs/Learn/Server-side/Express_Nodejs)
- PHP has its own [built-in development server](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```

If you're not working directly with a server-side framework or a programming language that provides a development server, Python's `http.server` module can also be used to test server-side code written in languages such as Python, PHP, JavaScript, and so on, by invoking server-side Common Gateway Interface (CGI) scripts.
For examples of how to use this feature see [Execute a Script Remotely Through the Common Gateway Interface (CGI)](https://realpython.com/python-http-server/#execute-a-script-remotely-through-the-common-gateway-interface-cgi) in _How to Launch an HTTP Server in One Line of Python Code_ on realpython.com.
