---
layout: projects
export_to: site.projects
title: Notes
styles:
  - css/footnotes.css
description: Things I've learnt and written down
link: projects/notes
---
Years ago when trying out a new text editor{{#ref}}vi | Paying homage to the venerable [Vi](https://en.wikipedia.org/wiki/Vi), you can set up a 'mark' in these notes by typing in `m` followed by a lowercase letter, then jump back to that section with <code>`</code> and that letter.{{/ref}}, I began the habit of logging whatever I was learning into a text file. These files eventually became a directory of notes; I'll put up any I think other people might find useful here.


<ul>
{{#site.projects.notes.exports}}
<li><a href='{{url}}/{{link}}'>{{title}}</a></li>
{{/site.projects.notes.exports}}
</ul>

## Footnotes

{{#footnoteList}}{{/footnoteList}}
