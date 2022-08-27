---
title: How do you set up a local testing server?
slug: Learn/Common_questions/set_up_a_local_testing_server
tags:
  - Beginner
  - Express
  - Flask
  - Learn
  - Node
  - PHP
  - Python
  - django
  - lamp
  - server-side
  - servers
---
This article explains how to set up a simple local testing server on your machine, and the basics of how to use it.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        You need to first know
        <a href="/en-US/docs/Learn/Common_questions/How_does_the_Internet_work"
          >how the Internet works</a
        >, and
        <a href="/en-US/docs/Learn/Common_questions/What_is_a_web_server"
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

Throughout most of the learning area, we tell you to just open your examples directly in a browser — this can be done by double clicking the HTML file, dragging and dropping it into the browser window, or choosing _File_ > _Open…_ and navigating to the HTML file. There are many ways to achieve this.

If the web address path starts with `file://` followed by the path to the file on your local hard drive, a local file is being used. In contrast, if you view one of our examples hosted on GitHub (or an example on some other remote server), the web address will start with `http://` or `https://`, to show that the file has been received via HTTP.

## The problem with testing local files

Some examples won't run if you open them as local files. This can be due to a variety of reasons, the most likely being:

- **They feature asynchronous requests**. Some browsers (including Chrome) will not run async requests (see [Fetching data from the server](/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)) if you just run the example from a local file. This is because of security restrictions (for more on web security, read [Website security](/en-US/docs/Learn/Server-side/First_steps/Website_security)).
- **They feature a server-side language**. Server-side languages (such as PHP or Python) require a special server to interpret the code and deliver the results.
- **They include other files**. Browsers commonly treat requests to load resources using the `file://` schema as cross-origin requests.
  So if you load a local file that includes other local files, this may trigger a {{Glossary("CORS")}} error.

## Running a simple local HTTP server

To get around the problem of async requests, we need to test such examples by running them through a local web server.
One of the easiest ways to do this for our purposes is to use Python's `http.server` module.

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

3. This should return a version number. If this is OK, navigate to the directory that your example is inside, using the `cd` command.

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

Python's `http.server` (or `SimpleHTTPServer` for Python 2) module is useful, but it is merely a _static_ file server; it doesn't know how to run code written in languages such as Python, PHP or JavaScript. To handle them, you'll need something more — exactly what you'll need depends on the server-side language you are trying to run. Here are a few examples:

- To run Python server-side code, you'll need to use a Python web framework. There are many popular Python web frameworks, such as Django (a [guide](/en-US/docs/Learn/Server-side/Django) is available), [Flask](https://flask.palletsprojects.com/), and [Pyramid](https://trypyramid.com).
- To run Node.js (JavaScript) server-side code, you'll need to use raw node or a framework built on top of it. Express is a good choice — see [Express Web Framework (Node.js/JavaScript)](/en-US/docs/Learn/Server-side/Express_Nodejs).
- To run PHP server-side code, launch [PHP's built-in development server](https://www.php.net/manual/en/features.commandline.webserver.php):

  ```bash
  cd path/to/your/php/code
  php -S localhost:8000
  ```
