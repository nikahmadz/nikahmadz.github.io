<div class="hero">
Build <span class="text-red">beautiful website</span> in minutes
<br />with <mark>Markdown and HTML</mark>
</div><p></p>

***

This repository template helps you build websites on **Github**.
It has everything pre-configured to get you started right away.
You can write your content in Markdown and HTML.
Maintain the content of your website with any code editor you like.
When you commit your code, **Github Pages** will build your website from the content of your files.

**[Clone this repository][clone]** &middot;
**[How to use it][repo]** &middot;
**[View source][source]**

[clone]:  https://github.com/nikahmadz/prime/generate "Clone this repository to your Github"
[repo]:   https://github.com/nikahmadz/prime/#how-to-use-it "Find out how you can use this template to build websites"
[source]: https://github.com/nikahmadz/prime/blob/main/demo.md?plain=1 "View source code of this page"

***

![Large image](https://picsum.photos/id/1039/1024/368){: .width-full.centered }

> Images are from [picsum.photos](https://picsum.photos/)

***

## Better control

![Small image](https://picsum.photos/id/299/400/300){: .centered.float-sm-right.m-sm-6 }

Use <code>big-first</code> to enlarge first letter of a paragraph.
Standardize paragraphs with <code>indent</code> and <code>text-justify</code>.
Include image with floats.
<span class="text-grey">In such cases a burn above turn a bit by bit a burn more or less tuned more or less a different story a different story. Had burn tuned this happened was the color of television a pleasure, more or less from various people.</span>
{: .big-first.indent.text-justify }

<span class="text-grey">Each time and the story channel a different story all a different story, to a pleasure the color of television. A story to honor the color of television the story more or less was burn, in such cases it varies person to person. This happened to the color of television as pleasure.</span>
{: .indent.text-justify }

***

## Text styles

Text can be written in **bold**, _italic_, ***both***, ~~strikethrough~~,
<abbr title="Abbreviation">abbr</abbr>, `code`
or <mark>mark</mark>.

## Text color

<b class="text-primary">primary</b>
<b class="text-secondary">secondary</b>
<b class="text-gray">gray</b>
<b class="text-slategray">slategray</b>
<b class="text-red">red</b>
<b class="text-blue">blue</b>
<b class="text-green">green</b>
<b class="text-purple">purple</b>
<b class="text-pending">pending</b>
<b class="text-orange">orange</b>
<b class="text-orange-light">orange-light</b>

## Text blocks

> Write a bunch of text in a blockquote.
>
> > A blockquote can be nested too.

<!-- This content will not appear in the rendered Markdown -->

This is a `box bg-primary` container.
{: .box.bg-primary.text-white.text-center }

This is a `box bg-secondary` container.
{: .box.bg-secondary.text-center }

## Collapsible blocks

<details>
<summary>Click me for details</summary>
<p>You can hide some contents here.</p>
</details>

## Code blocks

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

```
Long, single-line `code blocks` should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

## Links

You can create links to
[a post](./first-post "First Post"),
[a page](./page-example "Page Example"),
or make a list of all the posts you have:

{% if site.posts.size > 0 %}
<ul>
  {% for post in site.posts %}
    <li><a href=".{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
{% endif %}

But if you link to a missing page, you'll see [an error](./404 "Page not found").

***

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

***

## List

###### Unordered

- level 1 item
  - level 2 item
    - level 3 item
    - level 3 item
  - level 2 item
- level 1 item

###### Ordered

1. Item one
  1. Item a
    1. Item x
    1. Item y
  1. Item b
1. Item two

###### Tasks

- [x] Completed task.
  - subtask one
  - subtask two
- [ ] Pending task.
- [ ] \(Escape) tasks that begins with a parenthesis.

## Definitions

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1970</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
</dl>

## Table

###### Markdown table

| Description       | Status       | Notes      |
| :---------------- | :----------: | ---------: |
| good swedish fish | ok           | nice       |
| good and plenty   | out of stock | nice       |
| good `oreos`      | ok           | hmm        |
| good `zoute` drop | ok           | yumm       |

###### HTML table

<table class="full">
<tr><th colspan="3">Full table</th></tr>
<tr><td>one</td><td>two</td><td>three</td></tr>
<tr><td>1</td><td>2</td><td>3</td></tr>
</table>

<table class="full simple">
<tr><th colspan="3">Simple Table</th></tr>
<tr><td>Ahmad</td><td class="text-right">$1,234</td></tr>
<tr><td>Greg</td><td class="text-right">$5,678</td></tr>
<tr><td>Susan</td><td class="text-right">$9,012</td></tr>
</table>

<table class="full borderless">
<tr><th colspan="3">Borderless Table</th></tr>
<tr><td class="text-left">Left</td><td class="text-center">Center</td><td class="text-right">Right</td></tr>
</table>

***

## Foot notes

A footnote[^1] creates a list of references at the bottom of a page.

Normally you would use number as reference [^2].

You can also use words as footnote key[^note].

[^1]: A footnote reference.

[^2]: Footnote can also have multiple lines.
    Every new line in footnote should be prefixed with 2 space or 4 space indentation.

[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  

***

<div class="text-center text-grey"> Finished </div>

***

[Home][1] &middot; [Github][2] &middot; [Discuss][3]

[1]:https://nikahmadz.github.io
[2]:https://github.com/nikahmadz
[3]:https://github.com/nikahmadz/nikahmadz.github.io/discussions "Go to Discussion Room"
