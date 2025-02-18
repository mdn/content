---
title: Setting up a Django development environment
slug: Learn_web_development/Extensions/Server-side/Django/development_environment
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}

Now that you know what Django is for, we'll show you how to set up and test a Django development environment on Windows, Linux (Ubuntu), and macOS — whatever common operating system you are using, this article should give you what you need to be able to start developing Django apps.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic knowledge of using a terminal/command line and how to install software packages on your development computer's operating system.
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To have a development environment for Django (4.*) running on your computer.
      </td>
    </tr>
  </tbody>
</table>

## Django development environment overview

Django makes it very easy to set up your own computer so that you can start developing web applications. This section explains what you get with the development environment, and provides an overview of some of your setup and configuration options. The remainder of the article explains the _recommended_ method of installing the Django development environment on Ubuntu, macOS, and Windows, and how you can test it.

### What is the Django development environment?

The development environment is an installation of Django on your local computer that you can use for developing and testing Django apps prior to deploying them to a production environment.

The main tools that Django itself provides are a set of Python scripts for creating and working with Django projects, along with a simple _development web server_ that you can use to test local (i.e. on your computer, not on an external web server) Django web applications on your computer's web browser.

There are other peripheral tools, that often form part of the development environment, that we won't be covering here. These include things like a [text editor](/en-US/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors) or IDE for editing code, linters for auto formatting, and so on. We are assuming that you've already got a text editor installed.

### What are the Django setup options?

Django is extremely flexible in terms of how and where it can be installed and configured. Django can be:

- Installed on different operating systems.
- Installed from source, from the Python Package Index (PyPi) and in many cases from the host computer's package manager application.
- Configured to use one of several databases, which may also need to be separately installed and configured.
- Run in the main system Python environment or within separate Python virtual environments.

Each of these options requires a slightly different configuration and setup. The following subsections explain some of your choices. For the rest of the article, we'll show you how to set up Django on a small number of operating systems, and that setup will be assumed throughout the rest of this module.

> [!NOTE]
> Other possible installation options are covered in the official Django documentation. We link to the [appropriate documents below](#see_also).

#### What operating systems are supported?

Django web applications can be run on almost any machine that can run the Python 3 programming language: Windows, macOS, Linux/Unix, Solaris, to name just a few.
Almost any computer should have the necessary performance to run Django during development.

In this article, we'll provide instructions for Windows, macOS, and Linux/Unix.

#### What version of Python should be used?

You can use any Python version supported by your target Django release.
For Django 5.0 the allowed versions are Python 3.10 to 3.12 (see [FAQ:Installation](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django)).

The Django project _recommends_ (and "officially supports") using the newest available version of the supported Python release.

#### Where can we download Django?

There are three places to download Django:

- The Python Package Repository (PyPi), using the _pip_ tool. This is the best way to get the latest stable version of Django.
- Use a version from your computer's package manager. Distributions of Django that are bundled with operating systems offer a familiar installation mechanism. Note however that the packaged version may be quite old, and can only be installed into the system Python environment (which may not be what you want).
- Install from source. You can get and install the latest bleeding-edge version of Django from the source. This is not recommended for beginners but is needed when you're ready to start contributing back to Django itself.

This article shows how to install Django from PyPi, in order to get the latest stable version.

#### Which database?

Django officially supports the PostgreSQL, MariaDB, MySQL, Oracle, and SQLite databases, and there are community libraries that provide varying levels of support for other popular SQL and NoSQL databases. We recommend that you select the same database for both production and development (although Django abstracts many of the database differences using its Object-Relational Mapper (ORM), there are still [potential issues](https://docs.djangoproject.com/en/5.0/ref/databases/) that are better to avoid).

For this article (and most of this module) we will be using the _SQLite_ database, which stores its data in a file. SQLite is intended for use as a lightweight database and can't support a high level of concurrency. It is, however, an excellent choice for applications that are primarily read-only.

> [!NOTE]
> Django is configured to use SQLite by default when you start your website project using the standard tools (_django-admin_). It's a great choice when you're getting started because it requires no additional configuration or setup.

#### Installing system-wide or in a Python virtual environment?

When you install Python3 you get a single global environment that is shared by all Python3 code. While you can install whatever Python packages you like in the environment, you can only install one particular version of each package at a time.

> [!NOTE]
> Python applications installed into the global environment can potentially conflict with each other (i.e. if they depend on different versions of the same package).

If you install Django into the default/global environment then you will only be able to target one version of Django on the computer. This can be a problem if you want to create new websites (using the latest version of Django) while still maintaining websites that rely on older versions.

As a result, experienced Python/Django developers typically run Python apps within independent _Python virtual environments_. This enables multiple different Django environments on a single computer. The Django developer team itself recommends that you use Python virtual environments!

This module assumes that you've installed Django into a virtual environment, and we'll show you how below.

## Installing Python 3

In order to use Django you must have Python 3 on your operating system.
You will also need the [Python Package Index](https://pypi.org/) tool — _pip3_ — which is used to manage (install, update, and remove) Python packages/libraries used by Django and your other Python apps.

This section briefly explains how you can check what versions of Python are present, and install new versions as needed, for Ubuntu Linux 20.04, macOS, and Windows 10.

> [!NOTE]
> Depending on your platform, you may also be able to install Python/pip from the operating system's own package manager or via other mechanisms. For most platforms, you can download the required installation files from <https://www.python.org/downloads/> and install them using the appropriate platform-specific method.

### Ubuntu 22.04

Ubuntu Linux 22.04 LTS includes Python 3.10.12 by default.
You can confirm this by running the following command in the bash terminal:

```bash
python3 -V
# Output: Python 3.10.12
```

However, the Python Package Index tool (_pip3_) you'll need to install packages for Python 3 (including Django) is **not** available by default.
You can install _pip3_ in the bash terminal using:

```bash
sudo apt install python3-pip
```

> [!NOTE]
> Python 3.10 is the oldest version [supported by Django 5.0](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django).
> You don't _need_ to use the latest version of Python for this tutorial, but if you want to there are instructions on the internet.

### macOS

macOS does not include Python 3 by default (Python 2 is included on older versions).
You can confirm this by running the following command in the terminal:

```bash
python3 -V
```

This will either display the Python version number, which indicates that Python 3 is installed, or `python3: command not found`, which indicates Python 3 was not found.

You can easily install Python 3 (along with the _pip3_ tool) from [python.org](https://www.python.org/):

1. Download the required installer:

   1. Go to <https://www.python.org/downloads/macos/>
   2. Download the stable release of the most recent [supported version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) that works with Django 5.0.
      (at time of writing this is Python 3.11.8).

2. Locate the file using _Finder_, and double-click the package file. Following the installation prompts.

You can now confirm successful installation by running `python3 -V` again and checking for the Python version number.

You can similarly check that _pip3_ is installed by listing the available packages:

```bash
pip3 list
```

### Windows 10 or 11

Windows doesn't include Python by default, but you can easily install it (along with the _pip3_ tool) from [python.org](https://www.python.org/):

1. Download the required installer:

   1. Go to <https://www.python.org/downloads/windows/>
   2. Download the stable release of the most recent [supported version](https://docs.djangoproject.com/en/5.0/faq/install/#what-python-version-can-i-use-with-django) that works with Django 5.0.
      (at time of writing this is Python 3.11.8).

2. Install Python by double-clicking on the downloaded file and following the installation prompts
3. Be sure to check the box labeled "Add Python to PATH"

You can then verify that Python 3 was installed by entering the following text into the command prompt:

```bash
py -3 -V
```

The Windows installer incorporates _pip3_ (the Python package manager) by default.
You can list installed packages as shown:

```bash
py -3 -m pip list
```

> [!NOTE]
> The installer should set up everything you need for the above command to work.
> If however you get a message that Python cannot be found, you may have forgotten to add it to your system path.
> You can do this by running the installer again, selecting "Modify", and checking the box labeled "Add Python to environment variables" on the second page.

## Calling Python 3 and pip3

You will note that in the previous sections we use different commands to call Python 3 and pip on different operating systems.

If you only have Python 3 installed (and not Python 2), the bare commands `python` and `pip` can generally be used to run Python and pip on any operating system.
If this is allowed on your system you will get a version "3" string when you run `-V` with the bare commands, as shown:

```bash
python -V
pip -V
```

If Python 2 is installed then to use version 3 you should prefix commands with `python3` and `pip3` on Linux/macOS, and `py -3` and `py -3 -m pip` on Windows:

```bash
# Linux/macOS
python3 -V
pip3 -V

# Windows
py -3 -V
py -3 -m pip list
```

The instructions below show the platform specific commands as they work on more systems.

## Using Django inside a Python virtual environment

The libraries we'll use for creating our virtual environments are [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/index.html) (Linux and macOS) and [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) (Windows), which in turn both use the [virtualenv](https://virtualenv.pypa.io/en/latest/) tool. The wrapper tools creates a consistent interface for managing interfaces on all platforms.

### Installing the virtual environment software

#### Ubuntu virtual environment setup

After installing Python and pip you can install _virtualenvwrapper_ (which includes _virtualenv_). The official installation guide can be found [here](https://virtualenvwrapper.readthedocs.io/en/latest/install.html), or follow the instructions below.

Install the tool using _pip3_:

```bash
sudo pip3 install virtualenvwrapper
```

Then add the following lines to the end of your shell startup file (this is a hidden file name **.bashrc** in your home directory). These set the location where the virtual environments should live, the location of your development project directories, and the location of the script installed with this package:

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export VIRTUALENVWRAPPER_VIRTUALENV_ARGS=' -p /usr/bin/python3 '
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> The `VIRTUALENVWRAPPER_PYTHON` and `VIRTUALENVWRAPPER_VIRTUALENV_ARGS` variables point to the normal installation location for Python 3, and `source /usr/local/bin/virtualenvwrapper.sh` points to the normal location of the `virtualenvwrapper.sh` script. If the _virtualenv_ doesn't work when you test it, one thing to check is that Python and the script are in the expected location (and then change the startup file appropriately).
>
> You can find the correct locations for your system using the commands `which virtualenvwrapper.sh` and `which python3`.

Then reload the startup file by running the following command in the terminal:

```bash
source ~/.bashrc
```

At this point you should see a bunch of scripts being run as shown below:

```bash
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/premkproject
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postmkproject
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/preactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/postactivate
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/get_env_details
```

Now you can create a new virtual environment with the `mkvirtualenv` command.

#### macOS virtual environment setup

Setting up _virtualenvwrapper_ on macOS is almost exactly the same as on Ubuntu (again, you can follow the instructions from either the [official installation guide](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) or below).

Install _virtualenvwrapper_ (and bundling _virtualenv_) using _pip_ as shown.

```bash
sudo pip3 install virtualenvwrapper
```

Then add the following lines to the end of your shell startup file (these are the same lines as for Ubuntu).
If you're using the _zsh shell_ then the startup file will be a hidden file named **.zshrc** in your home directory. If you're using the _bash shell_ then it will be a hidden file named **.bash_profile**. You may need to create the file if it does not yet exist.

```bash
export WORKON_HOME=$HOME/.virtualenvs
export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
export PROJECT_HOME=$HOME/Devel
source /usr/local/bin/virtualenvwrapper.sh
```

> [!NOTE]
> The `VIRTUALENVWRAPPER_PYTHON` variable points to the normal installation location for Python 3, and `source /usr/local/bin/virtualenvwrapper.sh` points to the normal location of the `virtualenvwrapper.sh` script. If the _virtualenv_ doesn't work when you test it, one thing to check is that Python and the script are in the expected location (and then change the startup file appropriately).
>
> For example, one installation test on macOS ended up with the following lines being necessary in the startup file:
>
> ```bash
> export WORKON_HOME=$HOME/.virtualenvs
> export VIRTUALENVWRAPPER_PYTHON=/Library/Frameworks/Python.framework/Versions/3.7/bin/python3
> export PROJECT_HOME=$HOME/Devel
> source /Library/Frameworks/Python.framework/Versions/3.7/bin/virtualenvwrapper.sh
> ```
>
> You can find the correct locations for your system using the commands `which virtualenvwrapper.sh` and `which python3`.

Then reload the startup file by making the following call in the terminal:

```bash
source ~/.bash_profile
```

At this point, you may see a bunch of scripts being run (the same scripts as for the Ubuntu installation). You should now be able to create a new virtual environment with the `mkvirtualenv` command.

> [!NOTE]
> If you can't find the startup file to edit in the finder, you can also open this in the terminal using nano.
>
> Assuming you're using bash, the commands look something like this:
>
> ```bash
> cd ~  # Navigate to my home directory
> ls -la #List the content of the directory. You should see .bash_profile
> nano .bash_profile # Open the file in the nano text editor, within the terminal
> # Scroll to the end of the file, and copy in the lines above
> # Use Ctrl+X to exit nano, choose Y to save the file.
> ```

#### Windows virtual environment setup

Installing [virtualenvwrapper-win](https://pypi.org/project/virtualenvwrapper-win/) is even simpler than setting up _virtualenvwrapper_ because you don't need to configure where the tool stores virtual environment information (there is a default value). All you need to do is run the following command in the command prompt:

```bash
py -3 -m pip install virtualenvwrapper-win
```

Now you can create a new virtual environment with the `mkvirtualenv` command

### Creating a virtual environment

Once you've installed _virtualenvwrapper_ or _virtualenvwrapper-win_ then working with virtual environments is very similar on all platforms.

Now you can create a new virtual environment with the `mkvirtualenv` command. As this command runs you'll see the environment being set up (what you see is slightly platform-specific). When the command completes the new virtual environment will be active — you can see this because the start of the prompt will be the name of the environment in parentheses (below we show this for Ubuntu, but the final line is similar for Windows/macOS).

```bash
mkvirtualenv my_django_environment
```

You should see output similar to the following:

```plain
Running virtualenv with interpreter /usr/bin/python3
# …
virtualenvwrapper.user_scripts creating /home/ubuntu/.virtualenvs/t_env7/bin/get_env_details
(my_django_environment) ubuntu@ubuntu:~$
```

Now you're inside the virtual environment you can install Django and start developing.

> [!NOTE]
> From now on in this article (and indeed the module) please assume that any commands are run within a Python virtual environment like the one we set up above.

### Using a virtual environment

There are just a few other useful commands that you should know (there are more in the tool documentation, but these are the ones you'll use regularly):

- `deactivate` — Exit out of the current Python virtual environment
- `workon` — List available virtual environments
- `workon name_of_environment` — Activate the specified Python virtual environment
- `rmvirtualenv name_of_environment` — Remove the specified environment.

## Installing Django

Once you've created a virtual environment, and called `workon` to enter it, you can use _pip3_ to install Django.

```bash
# Linux/macOS
python3 -m pip install django~=4.2

# Windows
py -3 -m pip install django~=4.2
```

You can test that Django is installed by running the following command (this just tests that Python can find the Django module):

```bash
# Linux/macOS
python3 -m django --version

# Windows
py -3 -m django --version
```

> [!NOTE]
> If the above Windows command does not show a django module present, try:
>
> ```bash
> py -m django --version
> ```
>
> In Windows _Python 3_ scripts are launched by prefixing the command with `py -3`, although this can vary depending on your specific installation.
> Try omitting the `-3` modifier if you encounter any problems with commands.
> In Linux/macOS, the command is `python3.`

> [!WARNING]
> The rest of this **module** uses the _Linux_ command for invoking Python 3 (`python3`). If you're working on _Windows_ replace this prefix with: `py -3`

## Source code management with Git and GitHub

Source Code Management (SCM) and versioning tools allow you to reliably store and recover versions of your source code, try out changes, and share code between your experiments and "known good code" when you need to.

There are many different SCM tools, including git, Mercurial, Perforce, SVN (Subversion), CVS (Concurrent Versions System), etc., and cloud SCM hosting sources such as Bitbucket, GitHub, and GitLab.
For this tutorial we'll hosting our code on [GitHub](https://github.com/), one of the most popular cloud based source code hosting services, and using the **git** tool to manage our source code locally and send it to GitHub when needed.

> [!NOTE]
> Using SCM tools is good software development practice!
> These instructions provide a basic introduction to git and GitHub.
> To learn more, see [Learning Git](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources).

### Key concepts

Git (and GitHub) use repositories ("repos") as the top level "bucket" for storing code, where each repo normally contains the source code for just one application or module.
Repositories can be public, in which case the code is visible to everyone on the internet, or private, in which case they are restricted to the owning organization or user account.

All work is done on a particular "branch" of code in your repo.
When you want to backup some changes to a branch you can create a "commit", which stores all changes since your last commit to the current branch.

The repo is created with a default branch named "main". You can spawn other branches off this using git, which initially have all the commits of the original branch.
You can evolve branches separately by adding commits, and then later on use a "Pull Request" (PR) on GitHub to merge changes from one branch to another.
You can also use git to switch between branches on your local compute, for example to try out different things.

In addition to branches, it is possible to create `tags` on any branch and later recover that branch at that point.

### Create an account and repository on GitHub

First we will create an account on GitHub (this is free).
Then we create and configure a repository named "django_local_library" for storing the [Local library website](/en-US/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website) as we evolve it in the rest of this tutorial.

The steps are:

1. Visit <https://github.com/> and create an account.
2. Once you are logged in, click the **+** link in the top toolbar and select **New repository**.
3. Fill in all the fields on this form.
   While these are not compulsory, they are strongly recommended.

   - Enter a repository name: "django_local_library".
   - Enter a new repository description: "Local Library website written in Django".
   - Select "Public" for the repository (the default).

     > [!WARNING]
     > This will make _all_ source code visible.
     > Remember not to store credentials or other sensitive material in your repo unless it is private.

   - Choose **Python** in the _Add .gitignore_ selection list.
   - Choose your preferred license in the _Add license_ selection list.
     MDN uses "Creative Commons Zero v1.0 Universal" for this example.
   - Check **Initialize this repository with a README**.

4. Press **Create repository**.

   The repository will be created, containing just the files `README.txt` and `.gitignore`.

### Clone the repo to your local computer

Now that the repository ("repo") is created on GitHub we are going to want to clone (copy) it to our local computer:

1. On GitHub, click the green **Code** button.
   In the "Clone" section, select the "HTTPS" tab, and copy the URL.
   If you used the repository name "django_local_library", the URL should be something like: `https://github.com/<your_git_user_id>/django_local_library.git`.

2. Install _git_ for your local computer (you can find versions for different platforms [here](https://git-scm.com/downloads)).
3. Open a command prompt/terminal and clone your repo using the URL you copied above:

   ```bash
   git clone https://github.com/<your_git_user_id>/django_local_library.git
   ```

   This will create the repository inside the current directory.

4. Navigate into the repo folder.

   ```bash
   cd django_local_library
   ```

### Modify and sync changes

Now we're going to modify the `.gitignore` file on the local computer, commit the change, and update the repository on GitHub.
This is a useful change to make, but mostly we're doing it to show you how to pull changes from GitHub, make changes locally, and then push them to GitHub.

1. In the command prompt/terminal we first "fetch" (get) and then pull (get and merge into the current branch) the latest version of the source from GitHub:

   > [!NOTE]
   > This step isn't strictly necessary as we have just cloned the source and know it is up to date.
   > However in general you should update your sources from GitHub before making changes.

   ```bash
   git fetch origin main
   git pull origin main
   ```

   The "origin" is a _remote_, which represents the location of the repo where the source is located, and "main" is the branch.
   You can verify that origin is our repo on GitHub using the command: `git remote -v`.

2. Next we checkout a new branch to store our changes:

   ```bash
   git checkout -b update_gitignore
   ```

   The `checkout` command is used to switch some branch to be the current branch that you are working on.
   The `-b` flag indicates that we intend to create a new branch named "update_gitignore" instead of selecting an existing branch with that name.

3. Open the **.gitignore** file, copy the following lines into the bottom of it, and then save:

   ```plain
   # Text backup files
   *.bak

   # Database
   *.sqlite3
   ```

   Note that `.gitignore` is used to indicate files that should not be backed up by git automatically, such as temporary files and other build artifacts.

4. Use the `add` command to add all changed files (that aren't ignored by the **.gitignore** file) to the "staging area" for the current branch.

   ```bash
   git add -A
   ```

5. Use the `status` command to check that all files you are about to `commit` are correct (you want to include source files, not binaries, temporary files etc.).
   It should look a bit like the listing below.

   ```bash
   > git status
   On branch main
   Your branch is up-to-date with 'origin/update_gitignore'.
   Changes to be committed:
     (use "git reset HEAD <file>..." to unstage)

           modified:   .gitignore
   ```

6. When you're satisfied, `commit` the files to your local repo, using the `-m` flag to specify a concise but clear commit message.
   This is equivalent to signing off on the changes and making them an official part of the local repo.

   ```bash
   git commit -m ".gitignore: add .bak and .sqlite3"
   ```

7. At this point, the remote repo has not been changed.
   We can push the `update_gitignore` branch to the "origin" repo (GitHub) using the following command:

   ```bash
   git push origin update_gitignore
   ```

8. Go back to the page on GitHub where you created your repo and refresh the page.

   A banner should appear with a button to press if you want to "Compare and pull request" the branch you just uploaded.
   Select the button and then follow the instructions to create and then merge a pull request.

   ![Banner asking if user wants to compare and merge recent branch updates](github_compare_and_pull_banner.png)

   After merging, the "main" branch on the repo on GitHub will contain your changes to `.gitignore`.

9. You can continue to update your local repo as files change using this add/commit/push cycle.

In the next topic we'll use this repo to store our local library website source code.

## Other Python tools

Experienced Python developers may install additional tools, such as linters (which help detect common errors in code).

Note that you should use a Django-aware linter such as [pylint-django](https://pypi.org/project/pylint-django/), because some common Python linters (such as `pylint`) incorrectly report errors in the standard files generated for Django.

## Testing your installation

The above test works, but it isn't very much fun. A more interesting test is to create a skeleton project and see it working. To do this, first navigate in your command prompt/terminal to where you want to store your Django apps. Create a folder for your test site and navigate into it.

```bash
mkdir django_test
cd django_test
```

You can then create a new skeleton site called "_mytestsite_" using the **django-admin** tool as shown. After creating the site you can navigate into the folder where you will find the main script for managing projects, called **manage.py**.

```bash
django-admin startproject mytestsite
cd mytestsite
```

We can run the _development web server_ from within this folder using **manage.py** and the `runserver` command, as shown.

```bash
# Linux/macOS
python3 manage.py runserver

# Windows
py -3 manage.py runserver
```

> [!NOTE]
> You can ignore the warnings about "unapplied migration(s)" at this point!

Once the server is running you can view the site by navigating to the following URL on your local web browser: `http://127.0.0.1:8000/`. You should see a site that looks like this:

![The home page of the skeleton Django app](django_skeleton_app_homepage_django_4_0.png)

## Summary

You now have a Django development environment up and running on your computer.

In the testing section you also briefly saw how we can create a new Django website using `django-admin startproject`, and run it in your browser using the development web server (`python3 manage.py runserver`). In the next article, we expand on this process, building a simple but complete web application.

## See also

- [Quick Install Guide](https://docs.djangoproject.com/en/5.0/intro/install/) (Django docs)
- [How to install Django — Complete guide](https://docs.djangoproject.com/en/5.0/topics/install/) (Django docs) — also covers how to remove Django
- [How to install Django on Windows](https://docs.djangoproject.com/en/5.0/howto/windows/) (Django docs)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website", "Learn_web_development/Extensions/Server-side/Django")}}
