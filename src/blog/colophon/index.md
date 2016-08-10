---
layout: default
export_to: site.blog
title: Colophon
description: Laying the groundwork for things to come
author: Eddie Li
link: blog/colophon
styles:
  - css/blog.css
  - css/footnotes.css
scripts:
  - blog/colophon/scripts/script.js
date: 2016/08/10
---
<div>
<h1 class="article_title"><a href="{{url}}/blog/">Blog</a>/{{page.title}}</h1>
<small>&emsp;<span class="post_author">{{page.author}}</span>, on <span class="post_date">{{page.date}}</span></small>
</div>

{{#blockquote}}"You missed one thing, Wiggum... I filled the [bowling] balls with a funnel."|Homer Simpson{{/blockquote}}

The last time I had any sort of web presence, WordPress had yet to be released, Microsoft FrontPage was a thing, and the musical group Busted were poised to take the world by storm{{#ref}}2002 | A popular blogging solution, a discontinued WYSIWYG HTML editor, a faded pop trio, in that order{{/ref}}.

I hosted fiction writing, mostly fantasy, on my personal website that was created with FrontPage. Publishing a new chapter involved copying the text (straight from Microsoft Word) into a newly created page, adding a link to it, then uploading the changed pages to my hosting provider. It was a bit fiddly, but everything worked as expected and there was little to write home about.

Anticipating that getting back into the scene would be just as straightforward, I found to my dismay that a cacophony of blogging solutions have arisen and Microsoft have discontinued their amazing FrontPage product. Busted remain as popular as ever.

It's interesting to reflect upon the technical and aesthetic choices faced during creating this website, how colophons have changed since 2002, and how they might yet change in the distant year 3000.

## Aesthetics

In the past decade of surfing the net, I've watched styles on the web go through many movements: the rise of Flash introduced splash pages and pure Flash interfaces, CSS3 browser adoption enabled hassle-free colour gradients, Bootstrap helped homogenise the look and feel of web applications and landing pages, and Apple iOS7 and Microsoft Metro repopularised flat design. Thankfully I was only looking to get a personal website up (as opposed to selling something), so my aim was simply to get the content easy to read and find. I took a closer look at the websites of people I admire or whose content I consume to get some inspiration.

I felt that there's a certain parsimonious elegance in the web's default fonts and colours; many academics have a presence that would fall under this category: a main page in Times New Roman/Arial scattered with links to their writing{{#ref}} academic | e.g. [Jeffrey Ullman](http://infolab.stanford.edu/~ullman/), [Gerald Jay Sussman](http://groups.csail.mit.edu/mac/users/gjs/gjs.html) and [Geoffrey Hinton](http://www.cs.toronto.edu/~hinton/){{/ref}}. After all, content is king; Isaac Newton could have published *Principia* in Choose Your Own Adventure format with Comic Sans and it would still be regarded as one of history's most important works.

I earmarked a couple of blogs I followed that had great content, as well as being easy on the eyes{{#ref}}inspiration | e.g. [Steve Losh](http://stevelosh.com/), [Aleksa Sarai](https://www.cyphar.com/) and [Dan Hough](http://danhough.co.uk/){{/ref}} and tried to find overarching elements. It was also interesting to go off and read about font, colour and layout choices that optimise for readability{{#ref}} readability | Neat [font](http://www.64notes.com/design/stop-helvetica-arial/) and [layout](http://baymard.com/blog/line-length-readability) articles that I came across{{/ref}} - something I had never considered in my previous foray {{#ref}}cow | The landing page to my Redwall-inspired fantasy epic: [Chronicles of Whiffy]({{url}}/blog/colophon/assets/cow.html){{/ref}}.

## Authoring

It's difficult to imagine what web publishing tools and solutions might exist in the future, but what's unlikely to change is the underlying language of the web: the HTML that's interpreted by the browser. It's perfectly possible to edit these files in a text editor, but one quickly discovers two pain points:

* HTML is verbose to write and fiddly to edit
* Each page can contain common elements or themes (e.g. header, footer, navigation)

I wanted full control over the styling and publishing process, which meant preparing source files locally and forgoing the publishing platform option. FrontPage's graphical interface made it easy to generate HTML; it also had features which helped factorise the common elements. Unfortunately, it's no longer around.

This time around, however, I had the skills and inclination to try a text-based workflow: I would write content in a markup language, which is then run through a tool to transform it into the final HTML. This approach should be more future-proof, separates where changes to the content and presentation need to be made, and any article-specific semantics (perhaps for some interactive widgets in the future!) can be defined if required. For example, the footnotes you see here were defined using such markup [tags](https://github.com/xdl/xiaodili_website/blob/master/blog/colophon/index.md#L22).

## Summing up

Getting a bespoke blogging framework off the ground took some initial effort, but hopefully the investment encourages me to keep writing. It was also a fun exercise to implement the authoring features I wanted, whilst discovering what those features actually were through writing (how mutually recursive!). Thankfully the core of what I needed had already been implemented (a Markdown to HTML transpiler and a templating engine) so it was only a matter of gluing those bits together.

The source for this website can found [here](https://github.com/xdl/xiaodili_website) and the tool I wrote to generate the HTML is [here](https://github.com/xdl/craft) - perhaps you can find them useful or informative. Until next time!

## Footnotes

{{#footnoteList}}{{/footnoteList}}
