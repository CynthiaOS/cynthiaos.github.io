# CynthiaOS Blog Publisher Script

This script is used to publish blog posts in the CynthiaOS Website.

## Prerequisites:
- NodeJS
- npm

## Publishing A Blog Post:

    $ npm install
    $ node blog-publisher.js
    [>] Enter a title for your blog (My Blog Title): <ENTER YOUR BLOG TITLE HERE>
    [>] Enter a permalink for your blog (my-blog-link): <ENTER PREFERRED PERMALINK HERE>
    [>] Enter a description for your blog (meta description): <ENTER YOUR BLOG DESCRIPTION HERE>
    [>] Enter the path to MD file (my-blog.md): <ENTER THE PATH TO THE MARKDOWN FILE>

## How Does It Work?

When you run the `blog-publisher.js` script with the required inputs ie: _**title**_, _**permalink**_, **description**, and _**the blog markdown file**_, it creates a directory (that becomes the permalink) for the blog and converts the Markdown content to HTML, then combines and beautifies the blog content with the `header` and `footer` HTML templates with the template renderer (`template.js`).

It also sets the `title` and `description` inside the SEO tags.

## Modules Used:

- [`showdown`](https://github.com/showdownjs/showdown) to convert Markdown to HTML
- [`pretty`](https://github.com/jonschlinkert/pretty) to beautify the output HTML

## Contributions:

- Improve the blog template (`templates/*`).
- Add more features to the script.
- Clean up the code? (PS: I am bad at JavaScript)
- Any new ideas, send them in!

## Contact Me:

[Mail](mailto:cynthiaos@mufeedvh.com) | [Twitter](https://twitter.com/mufeedvh)
