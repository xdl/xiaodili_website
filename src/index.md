---
layout: default
---
You shouldn't be able to get to this page! Might put news here later.

# News

{{#site.news.children}}
<section>
<header>
<h2 class="post_title">{{title}}</h2>
<small>&emsp;<span class="post_author">{{author}}</span>, on <span class="post_date">{{date}}</span></small>
</header>
</section>
<p><i>{{description}}</i></p>
{{/site.news.children}}
