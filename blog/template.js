/*
    author  : 'Mufeed VH (@mufeedvh)';
    repo    : 'CynthiaOS/website (GitHub)';
    mail    : 'cynthiaos@mufeedvh.com';
    website : 'https://cynthia.mufeedvh.com/';
    license : 'MIT License | Copyright (c) 2020 CynthiaOS';
*/

// `pretty` to beautify the output HTML
const pretty = require('pretty');

module.exports = {
    renderTemplate: function(title, description, html_content) {
        var top_base = `
            <!DOCTYPE html>
            <html>

            <!--
                author  : 'Mufeed VH (@mufeedvh)';
                repo    : 'CynthiaOS/website (GitHub)';
                mail    : 'cynthiaos@mufeedvh.com';
                website : 'https://cynthia.mufeedvh.com/';
                license : 'MIT License | Copyright (c) 2020 CynthiaOS';
            -->

            <head>
                <title>${title}</title>

                <!-- seo tags -->
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta charset="UTF-8" />
                <meta name="description" content="${description}" />
                <meta name="keywords" content="cynthia, cynthiaos, cynthia-os, operating system, os, computer science, kernels, linux, unix, unix like" />
                <link rel=canonical href="https://cynthia.mufeedvh.com/">
                <meta property=og:locale content="en_GB">
                <meta property=og:type content="website">
                <meta property=og:title content="${title}">
                <meta property=og:description content="${description}">
                <meta property=og:url content="https://cynthia.mufeedvh.com/">
                <meta property=og:site_name content="${title}">
                <meta property=og:image content="https://cynthia.mufeedvh.com/assets/images/cynthia-transparent-720.png">
                <meta property=og:image:secure_url content="https://cynthia.mufeedvh.com/assets/images/cynthia-transparent-720.png">
                <meta name=twitter:card content="summary_large_image">
                <meta name=twitter:description content="${description}">
                <meta name=twitter:title content="${title}">
                <meta name=twitter:site content="@mufeedvh">
                <meta name=twitter:image content="https://www.mufeedvh.com/static/images/mufeedvh.jpeg">
                <meta name=twitter:creator content="@mufeedvh">                

                <!-- favicon -->
                <link rel="icon" href="/assets/images/cynthia-transparent-720.png" type="image/png" sizes="16x16">

                <!-- css -->
                <link rel="stylesheet" type="text/css" href="css/styles.css">
            </head>
            <body>
                <header>
                    <center>
                        <a href="https://cynthia.mufeedvh.com/"><img src="assets/images/cynthia-transparent-720.png" height="200" width="200"></a>
                        <a style="text-decoration: none; color: black;" href="https://cynthia.mufeedvh.com/"><h1>CynthiaOS<span class="blink">_</span></h1></a>
                        <hr>
                        [<a href="https://cynthia.mufeedvh.com/blog/" target="_noblank">blog/</a>] [<a href="https://github.com/CynthiaOS" target="_noblank">github/</a>] [<a href="https://twitter.com/mufeedvh" target="_noblank">twitter/</a>]
                        <hr>
                        <br>
                    </center>
                </header>
                <div class="main-content">
                    <center>
                        <h2>${title}</h2>
                    </center>
                    <br>
        `;

        var bottom_base = `
                    <br>
                </div>
                <br><hr>
                <footer>
                    <center>
                        CynthiaOS. Copyright 2020. Font: JetBrainsMono. <a href="https://github.com/CynthiaOS/website" target="_noblank">Source</a>.
                    </center>        
                </footer>
            </body>
            </html>
        `;

        // combining the HTML header and footer template with the blog content
        return pretty(top_base+html_content+bottom_base);
    }
}