---
title: Setting up a Node development environment
short-title: Dev environment setup
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment
page-type: learn-module-chapter
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Now that you know what [Express](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction#introducing_express) is for, we'll show you how to set up and test a Node/Express development environment on Windows, or Linux (Ubuntu), or macOS. For any of those operating systems, this article provides what you need to start developing Express apps.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Know how to open a terminal / command line. Know how to install software packages on your development computer's operating system.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>To set up a development environment for Express on your computer.</td>
    </tr>
  </tbody>
</table>

## Express development environment overview

_Node_ and _Express_ make it very easy to set up your computer in order to start developing web applications. This section provides an overview of what tools are needed, explains some of the simplest methods for installing Node (and Express) on Ubuntu, macOS, and Windows, and shows how you can test your installation.

### What is the Express development environment?

The _Express_ development environment includes an installation of _Node.js_ and the _npm package manager_ on your local computer.

_Node_ and the _npm_ package manager are installed together from prepared binary packages, installers, operating system package managers or from source (as shown in the following sections). _Express_ is then installed by npm as a dependency of your individual _Express_ web applications (along with other libraries like template engines, database drivers, authentication middleware, middleware to serve static files, etc.).

For the Local Library tutorial, we'll use a starter project that follows the [MVC pattern](/en-US/docs/Glossary/MVC). The starter provides a modular application structure that we can extend as we work through the tutorial.

> [!NOTE]
> Unlike some other web frameworks, the development environment does not include a separate development web server. In _Node_/_Express_ a web application creates and runs its own web server!

There are other peripheral tools that are part of a typical development environment, including [text editors](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) or IDEs for editing code, and source control management tools like [Git](https://git-scm.com/) for safely managing different versions of your code. We are assuming that you've already got these sorts of tools installed (in particular a text editor).

### What operating systems are supported?

_Node_ can be run on Windows, macOS, many flavors of Linux, Docker, etc. There is a full list on the Node.js [Downloads](https://nodejs.org/en/download) page. Almost any personal computer should have the necessary performance to run Node during development. _Express_ is run in a _Node_ environment, and hence can run on any platform that runs _Node_.

In this article we provide setup instructions for Windows, macOS, and Ubuntu Linux.

### What version of Node/Express should you use?

There are many [releases of Node](https://nodejs.org/en/blog/release/) — newer releases contain bug fixes, support for more recent versions of ECMAScript (JavaScript) standards, and improvements to the Node APIs.

Generally you should use the most recent _LTS (long-term supported)_ release as this will be more stable than the "current" release while still having relatively recent features (and is still being actively maintained). You should use the _Current_ release if you need a feature that is not present in the LTS version.

For _Express_ you should use the most recent LTS release of Node.

### What about databases and other dependencies?

Other dependencies, such as database drivers, template engines, authentication engines, etc. are part of the application, and are imported into the application environment using the npm package manager. We'll discuss them in later app-specific articles.

## Installing Node

In order to use _Express_ you will have to install _Node.js_ and the [Node Package Manager (npm)](https://docs.npmjs.com/) on your operating system.
To make this easier we'll first install a node version manager, and then we'll use it to install the latest Long Term Supported (LTS) versions of node and npm.

> [!NOTE]
> You can also install nodejs and npm with installers provide on <https://nodejs.org/en/> (select the button to download the LTS build that is "Recommended for most users"), or you can [install using the package manager for your OS](https://nodejs.org/en/download) (nodejs.org).
> We highly recommend using a node version manager as these make it easier to install, upgrade, and switch between any particular version of node and npm.

### Windows

There are a number of node version managers for Windows.
Here we use [nvm-windows](https://github.com/coreybutler/nvm-windows), which is highly respected among node developers.

Install the latest version using your installer of choice from the [nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) page.
After `nvm-windows` has installed, open a command prompt (or PowerShell) and enter the following command to download the most recent LTS version of nodejs and npm:

```bash
nvm install lts
```

Run `nvm list` to see the installed versions. For this tutorial, choose Node.js 24 or later. Set it as the _current version_ with the command below, replacing `<version>` with the version you installed:

```bash
nvm use <version>
```

> [!NOTE]
> If you get "Access Denied" warnings, you will need to run this command in a prompt with administration permissions.

Use the command `nvm --help` to find out other command line options, such as listing all available node versions, and all downloaded NVM versions.

### Ubuntu and macOS

There are a number of node version managers for Ubuntu and macOS.
[nvm](https://github.com/nvm-sh/nvm) is one of the more popular, and is the original version on which `nvm-windows` is based.
See [nvm > Install & Update Script](https://github.com/nvm-sh/nvm#install--update-script) for the terminal instructions to install the latest version of nvm.

After `nvm` has installed, open a terminal enter the following command to download the most recent LTS version of nodejs and npm:

```bash
nvm install --lts
```

The command `nvm list` shows the installed versions and the current version. For this tutorial, choose Node.js 24 or later. Set it as the _current version_ with the command below, replacing `<version>` with the version you installed:

```bash
nvm use <version>
```

Use the command `nvm --help` to find out other command line options.
These are often similar to, or the same as, those offered by `nvm-windows`.

### Testing your Node.js and npm installation

Once you have set `nvm` to use a particular node version, you can test the installation.
A good way to do this is to use the "version" command in your terminal/command prompt and check that the expected version string is returned:

```bash
> node -v
v24.0.0
```

The _Node.js_ package manager _npm_ should also have been installed, and can be tested in the same way:

```bash
> npm -v
10.9.2
```

The version numbers may differ from those shown above. With both commands working, you can configure the Local Library project.

## Using npm

Next to _Node_ itself, [npm](https://docs.npmjs.com/) is the most important tool for working with _Node_ applications.
`npm` is used to fetch any packages (JavaScript libraries) that an application needs for development, testing, and/or production, and may also be used to run tests and tools used in the development process.

> [!NOTE]
> From Node's perspective, _Express_ is just another package that you need to install using npm and then import in your own code.

You can manually use npm to separately fetch each needed package. Typically we instead manage dependencies using a plain-text definition file named [package.json](https://docs.npmjs.com/files/package.json/). This file lists all the dependencies for a specific JavaScript "package", including the package's name, version, description, initial file to execute, production dependencies, development dependencies, versions of _Node_ it can work with, etc. The **package.json** file should contain everything npm needs to fetch and run your application (if you were writing a reusable library you could use this definition to upload your package to the npm repository and make it available for other users).

### Creating the project

We'll prepare the configuration for the Local Library [starter project](https://github.com/mdn/express-locallibrary-tutorial). By the end of this article, you'll have its package configuration and dependencies ready. We'll add the application code in [Creating a skeleton website](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website).

1. Create a directory for the application and navigate into it:

   ```bash
   mkdir express-locallibrary-tutorial
   cd express-locallibrary-tutorial
   ```

2. Use the npm `init` command to create a **package.json** file with default values:

   ```bash
   npm init --yes
   ```

3. Open **package.json** in your text editor and replace its contents with the following configuration:

   ```json
   {
     "name": "express-locallibrary-tutorial",
     "version": "0.0.1",
     "private": true,
     "engines": {
       "node": ">=24.0.0"
     },
     "type": "module",
     "scripts": {}
   }
   ```

   The `name` and `version` identify the project. Setting `private` to `true` prevents accidental publication to the npm registry. The `engines` field declares the minimum supported Node.js version, and `"type": "module"` tells Node to treat the project's **.js** files as ES modules. We'll add commands to `scripts` below.

### Adding dependencies

Install the packages used by the starter from inside the **express-locallibrary-tutorial** directory:

```bash
npm install debug express http-errors morgan pug
```

These packages each have a role in the application:

- `debug` displays diagnostic messages when enabled through the `DEBUG` environment variable.
- `express` provides the web framework.
- `http-errors` creates HTTP errors, such as a 404 for an unknown route.
- `morgan` logs HTTP requests.
- `pug` renders HTML from templates.

The [`npm install`](https://docs.npmjs.com/cli/commands/npm-install/) command downloads these packages and their dependencies into **node_modules**, adds them to `dependencies` in **package.json**, and creates **package-lock.json** to record the resolved versions. Keep both package files in version control so other developers can install the project's dependencies. When a lockfile is already available, `npm ci` installs its recorded versions.

We'll install additional packages, such as the database driver, when we need them later in the tutorial. For a broader introduction to development tools and their configuration, see [Introducing a complete toolchain](/en-US/docs/Learn_web_development/Extensions/Client-side_tools/Introducing_complete_toolchain).

### Running tasks

In addition to defining dependencies, you can define named scripts in **package.json** and use npm to execute them. Replace the empty `scripts` object with these commands:

```json
{
  "scripts": {
    "start": "node server.js",
    "devstart": "node --watch server.js"
  }
}
```

The `start` script runs the application's entry point, **server.js**. The `devstart` script uses Node's watch mode to restart the server when an imported JavaScript file changes. We'll try both commands with a minimal server below.

Your **package.json** should now look like this. The dependency version numbers may be newer, depending on when you install the packages.

```json
{
  "name": "express-locallibrary-tutorial",
  "version": "0.0.1",
  "private": true,
  "engines": {
    "node": ">=24.0.0"
  },
  "scripts": {
    "start": "node server.js",
    "devstart": "node --watch server.js"
  },
  "dependencies": {
    "debug": "^4.4.3",
    "express": "^5.2.1",
    "http-errors": "^2.0.1",
    "morgan": "^1.12.0",
    "pug": "^3.0.4"
  },
  "type": "module"
}
```

### Trying a minimal server

To check that your environment and npm scripts work, create a file named **server.js** alongside **package.json** with the following contents:

```js
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
```

This imports Express and creates an application. The `app.get()` method responds to requests for `/` with the text "Hello World!", and `app.listen()` starts the server on port 3000. Node treats **server.js** as an ES module because we set `"type": "module"` in **package.json**.

1. In your project directory, start the server using the npm script:

   ```bash
   npm start
   ```

   You should see the following message in the terminal:

   ```plain
   Server running at http://localhost:3000/
   ```

2. Open `http://localhost:3000/` in your browser. You should see "Hello World!".
3. Stop the server with **Ctrl+C**, then start it in watch mode:

   ```bash
   npm run devstart
   ```

4. Change the message in `res.send()` to "Hello again!" and save **server.js**. Node restarts the server automatically. Reload the page to see the updated message.
5. Stop the server with **Ctrl+C** and delete this temporary **server.js** file. We'll add the starter's server and application files in the skeleton website chapter. Keep the npm scripts; they will run that server too.

### Ignoring generated and local files

Create a file named **.gitignore** alongside **package.json** with the following contents:

```plain
node_modules/
*.log
.env
```

This keeps installed dependencies, log files, and local environment settings out of version control. The dependencies can be installed again from the package files.

Your project directory should now contain:

```plain
express-locallibrary-tutorial/
  .gitignore
  node_modules/
  package-lock.json
  package.json
```

This is the starter's project configuration, ready for its JavaScript files, templates, and stylesheet. Keep this directory for the tutorial; when you reach the skeleton website chapter, copy the starter's application files into it.

## Summary

You now have a Node development environment and the Local Library project's package configuration, dependencies, and npm scripts. You've checked the setup with a minimal Express server, and the project is ready for the application files we'll add in the tutorial.

In the next article we start working through a tutorial to build a complete web application using this environment and associated tools.

## See also

- [Downloads](https://nodejs.org/en/download) page (nodejs.org)
- [Installing Express](https://expressjs.com/en/starter/installing/) (expressjs.com)
- [Using Node.js with Windows subsystem for Linux](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/) (docs.microsoft.com)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
