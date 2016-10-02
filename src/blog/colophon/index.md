---
layout: blog
export_to: site.blog
title: Colophon
description: Laying the groundwork for things to come
author: Eddie Li
link: blog/colophon
styles:
  - css/footnotes.css
scripts:
  - blog/colophon/scripts/script.js
date: 2016/08/10
---
{{#blockquote}}"You missed one thing, Wiggum... I filled the [bowling] balls with a funnel."|Homer Simpson{{/blockquote}}

The last time I had any sort of web presence, WordPress had yet to be released, Microsoft FrontPage was a thing, and the musical group Busted were poised to take the world by storm{{#ref}}2002 | A popular blogging solution, a discontinued WYSIWYG HTML editor, a faded pop trio, in that order{{/ref}}.

I maintained a personal website that hosted my fantasy fiction writing. Publishing a new chapter involved copying the text straight from Microsoft Word into a newly created page, adding a hyperlink to it, then uploading the changed pages to my hosting provider. It was a bit fiddly, but everything worked as expected and there was little to write home about.

Anticipating that getting back into the scene would be just as straightforward, I found to my dismay that a cacophony of blogging solutions have arisen and Microsoft have discontinued their amazing FrontPage product. Busted remain as popular as ever.

It's interesting to think about the technical and aesthetic options that were available when creating this website, how colophons have changed since 2002, and how they might yet change in the distant year 3000.

## Aesthetics

If there was an *Antiques Roadshow* style show where people would take old websites they've found to experts, who would inspect the source and evaluate which year it was written, I would definitely watch it.

In the past decade, the web's visual landscape has gone through many movements: the rise of Flash introduced splash pages and highly bespoke interfaces, CSS3 browser adoption brought hassle-free colour gradients to the masses, Bootstrap homogenised the look and feel of web applications and landing pages, and Apple iOS7 and Microsoft Metro repopularised flat design. Figuring that a 'timeless' design might be out of reach, I took a closer look at the websites of people I admire for inspiration.

There is a parsimonious elegance to be found in the web's default fonts and colours; many academics have a presence consisting of a main page in Times New Roman/Arial scattered with links to their writing{{#ref}} academic | e.g. [Jeffrey Ullman](http://infolab.stanford.edu/~ullman/), [Gerald Jay Sussman](http://groups.csail.mit.edu/mac/users/gjs/gjs.html) and [Geoffrey Hinton](http://www.cs.toronto.edu/~hinton/){{/ref}}. After all, content **is** king; Isaac Newton could have published *Principia* in Choose Your Own Adventure format with Comic Sans and it would still be regarded as one of history's most important works.

I earmarked a couple of blogs that had great content, as well as being easy on the eyes{{#ref}}inspiration | e.g. [Steve Losh](http://stevelosh.com/), [Aleksa Sarai](https://www.cyphar.com/) and [Dan Hough](http://danhough.co.uk/){{/ref}} and tried to find overarching elements. It was also interesting to go off and read about font, colour and layout choices that optimise for readability{{#ref}} readability | Neat [font](http://www.64notes.com/design/stop-helvetica-arial/) and [layout](http://baymard.com/blog/line-length-readability) articles that I came across{{/ref}} - something I had never considered in my previous foray{{#ref}}cow | The landing page to my [Redwall](https://en.wikipedia.org/wiki/Redwall)-inspired fantasy epic: [Chronicles of Whiffy]({{url}}/blog/colophon/assets/cow.html){{/ref}}.

## Authoring

It's difficult to imagine what web publishing tools and solutions might exist in the future, but what's unlikely to change is the underlying language of the web: the HTML that's interpreted by the browser. It's perfectly possible to edit these files in a text editor, but one quickly discovers two pain points:

* HTML is verbose to write and fiddly to edit
* Pages can contain common elements or themes (e.g. header, footer, navigation)

I wanted full control over the styling and publishing process, which meant preparing source files locally and forgoing the publishing platform option. FrontPage, my previous HTML editor of choice, had a graphical interface made it easy to generate HTML; it also had templating features which helped factorise the common elements. Unfortunately, it's no longer around.

This time around, I had the skills and inclination to try a text-based workflow: content would be written in a markup language, which is then run through a tool to transform it into the final HTML. This approach should be more future-proof, separates where changes to the content and presentation need to be made, and any article-specific semantics (perhaps for some interactive widgets in the future, like those seen on [Arbital](https://arbital.com/p/bayes_rule_guide/)) can be defined if required. For example, the footnotes you see here were defined using such markup [tags](https://raw.githubusercontent.com/xdl/xiaodili_website/master/src/blog/colophon/index.md).

## Summing up

Getting a bespoke blogging framework off the ground took some initial effort, but hopefully the investment encourages me to keep writing. It was also a fun exercise to implement the authoring features I wanted, whilst discovering what those features actually were through writing (how mutually recursive!). Thankfully, the core of what was needed had already been implemented (a [Markdown to HTML compiler](https://github.com/chjj/marked) and a [templating engine](https://mustache.github.io/)) so it was only a matter of gluing those bits together.

The source for this website can found [here](https://github.com/xdl/xiaodili_website) and the tool used to generate the HTML is [here](https://github.com/xdl/craft) - perhaps you can find them useful or informative. Until next time!

## Footnotes

{{#footnoteList}}{{/footnoteList}}
