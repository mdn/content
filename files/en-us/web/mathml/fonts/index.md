---
title: Fonts for Mozilla's MathML engine
slug: Web/MathML/Fonts
tags:
  - Fonts
  - MathML
  - Project
---
Fonts with appropriate Unicode coverage and Open Font Format features are required for good math rendering.
This page describes how users can install and use such math fonts with Mozilla's MathML engine.
Note that most of these instructions may as well apply to other Web rendering engines.

## Installation Instructions

### Windows

Install the _Latin Modern Math_ and _STIX_ fonts as follows:

1.  Download [latinmodern-math-1959.zip](http://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip).
2.  Open the ZIP archive, move inside the `latinmodern-math-1959` directory and then inside the `otf` directory. You will find a `latinmodern-math` font file.
3.  Open the `latinmodern-math` font file and click the `Install` button.
4.  Download [static_otf.zip](https://github.com/stipub/stixfonts/raw/master/zipfiles/static_otf.zip).
5.  Open the `static_otf.zip` ZIP archive, and then move inside the `static_otf` directory. Among the files there, you will find a `STIXTwoMath-Regular` file.
6.  Open the `STIXTwoMath-Regular` file and click the `Install` button. If desired, you may also do the same for the other font files.

> **Note:** _Cambria Math_ is installed by default on Windows 7 and later versions and should ensure relatively good MathML rendering. [An enhancement request has been submitted to Microsoft to install Latin Modern Math and STIX by default](https://windows.uservoice.com/forums/265757-windows-feature-suggestions/suggestions/9727281-add-new-math-fonts-latin-modern-math-and-stix-2).

### OS X

Install the _Latin Modern Math_ and _STIX_ fonts as follows:

1.  Download [latinmodern-math-1959.zip](http://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip).
2.  Extract the ZIP archive, move inside the `latinmodern-math-1959` directory and then inside the `otf` directory. You will find a `latinmodern-math` font file.
3.  Double-click the `latinmodern-math` font file click the "Install the font" button from the window that opens.
4.  Download [static_otf.zip](https://github.com/stipub/stixfonts/raw/master/zipfiles/static_otf.zip).
5.  Open the `static_otf.zip` ZIP archive, and then move inside the `static_otf` directory. Among the files there, you will find a `STIXTwoMath-Regular.otf` file.
6.  Open the `STIXTwoMath-Regular.otf` file and click the **Install Font** button from the window that opens. If desired, you may also do the same for the other font files.

> **Note:** A deprecated version of STIX is preinstalled starting with OS X Lion and should ensure relatively good MathML rendering. Enhancement requests have been submitted to Apple to ship OpenType MATH fonts in the default installation. If you have a developer account, these are problems 16841023 and 17021145.

### Linux

Install the _Latin Modern Math_, _STIX_ or _XITS_ fonts, which are generally available from your package manager.

On Debian/Ubuntu/Mint and other Debian-based distributions, use the following command:

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

On Fedora and other Fedora-based distributions, use the following command (`stix-math-fonts` is often already installed):

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

On openSUSE and other openSUSE-based distributions, use the following command:

```plain
sudo zypper install texlive-lm-math stix-fonts
```

On other Linux distributions, consider installing appropriate `texlive` packages, which includes _Latin Modern Math_ and _XITS_:

```bash
sudo pacman -S texlive-core texlive-fontsextra # Arch Linux
sudo urpmi texlive-dist texlive-fontsextra # Mageia
```

However, you might need to ensure that the fonts are known by your system. Typically,  use a fontconfig configuration `/etc/fonts/conf.avail/09-texlive-fonts.conf` that points to the `opentype` directory of TeXLive, such as:

```plain
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Finally, add this configuration file to the system font location list and regenerate the fontconfig cache:

```plain
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

### Android

You must use the [MathML-fonts add-on](https://addons.mozilla.org/firefox/addon/mathml-fonts/).

> **Note:** There is an [enhancement request](https://github.com/googlei18n/noto-fonts/issues/330) opened on the Noto bug tracker to improve math support.

### Firefox OS

You must use the [MathML-fonts add-on](https://addons.mozilla.org/firefox/addon/mathml-fonts/).

> **Note:** We [plan to bundle](https://bugzilla.mozilla.org/show_bug.cgi?id=775060) a [MATH font](#Fonts_with_a_MATH_table) in the default installation.

### Other systems

On other systems, consider installing a [MATH font](#Fonts_with_a_MATH_table) using your package manager. Note that these fonts are generally delivered with TeX distributions such as [TeX Live](https://www.tug.org/texlive/), but you might need to follow specific instructions so that your system is aware of the fonts. As a last resort, install the [MathML fonts add-on](https://addons.mozilla.org/firefox/addon/mathml-fonts/).

## Advanced setup

### Arabic Mathematical Alphabetic Symbols

Currently, very few fonts have appropriate glyphs for the Arabic Mathematical Alphabetic Symbols. If you are likely to need these characters, we recommend to install the XITS or [Amiri](https://www.amirifont.org/) fonts.

### Installation without Administrator Privilege

If you need to install fonts on a system without adminstrator privilege, the easiest option is to use math font the [MathML-fonts add-on](https://addons.mozilla.org/firefox/addon/mathml-fonts/). Note that using the add-on is not optimal since it forces your Gecko browser to load a CSS stylesheet on each page you visit as well as Web math fonts on all pages with MathML content. A better alternative on UNIX systems is to install the OTF files for [Latin Modern Math](http://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) and [STIX](https://github.com/stipub/stixfonts) into some local font folder and (if necessary) to run `fc-cache` on it. On OS X and Linux, the standard paths are `~/Library/Fonts/` and `~/.fonts`.

### Fonts with a MATH table

You can actually render MathML using any font with a MATH table and related Open Font Format features. A list of such math fonts is provided below. You can use the _advanced font preference menu_ to configure the default font for mathematics. Alternatively, you can try the [MathML-fontsettings add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/).

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://www.microsoft.com/typography/fonts/family.aspx?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math) (under development)
- [Latin Modern Math](http://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/khaledhosny/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](http://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](http://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](http://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](http://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/khaledhosny/xits-math/releases)
- [Fira Math](https://github.com/firamath/firamath) (sans-serif typeface, under development)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math) (sans-serif typeface)

### Using mathematical fonts on Web pages

Starting with Gecko 31.0 (Firefox 31.0 / Thunderbird 31.0 / SeaMonkey 2.28), it is now easy to set up the CSS style (and optional WOFF fonts) to use on your Web site.
See the [Authoring MathML page](/en-US/docs/Web/MathML/Authoring#mathematical_fonts) for details.
You can use [FontTools](https://github.com/behdad/fonttools) to edit the MATH table and create your own mathematical fonts.
