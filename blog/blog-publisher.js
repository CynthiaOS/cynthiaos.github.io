/*
    author  : 'Mufeed VH (@mufeedvh)';
    repo    : 'CynthiaOS/website (GitHub)';
    mail    : 'cynthiaos@mufeedvh.com';
    website : 'https://cynthia.mufeedvh.com/';
    license : 'MIT License | Copyright (c) 2020 CynthiaOS';
*/

// `fs` to read and write files
const fs = require('fs');
// `showdown` to convert Markdown to HTML
const showdown = require('showdown');
// `readline` to accept stdin input from console
const readline = require('readline');

// publish the blog
function publishBlog(blog_title, blog_permalink, blog_description, md_file) {
    try {
        // reading the markdown file
        fs.readFile(md_file, 'utf8', function(err, contents) {

            // initializing the `showdown` converter
            var converter = new showdown.Converter();
            // pass the markdown contents to the `makeHtml()` of `showdown` to convert MD to HTML
            var html = converter.makeHtml(contents);

            // creating a directory for the blog (permalink)
            if (!fs.existsSync('../'+blog_permalink)) {
                fs.mkdirSync('../'+blog_permalink);
                console.log('\n[-] INFO: Created a directory with the permalink');
                // to save the file as index.html under the `permalink` directory
                var save_to = '../'+blog_permalink+'/index.html';
            } else {
                // ends and exits the process with failure code if the directory/permalink already exists
                console.log('\n[!] ERROR: A Blog With This Permalink Already Exists');
                process.exit(1);
            }

            // rendering the output template
            const template = require('./template.js');
            var complete_template = template.renderTemplate(blog_title, blog_description, html);

            // write the converted HTML content to the newly created `permalink` directory
            fs.writeFile(save_to, complete_template, function (err) {
                if (err) throw err;
                console.log('\n[-] SUCCESS: Blog Published');
            });    
        });
    } catch (err) {
        // if the file is not found, show an error message else throw the error
        if (err.code === 'ENOENT') {
            console.log('\n[!] ERROR: File not found!');
            process.exit(1);
        } else {
            throw err;
        }        
    }
}

// getting the title, permalink, and the source markdown file from console input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// prompt for the title of the blog post
rl.question('[>] Enter a title for your blog (My Blog Title): ', (answer) => {
    var blog_title = answer.toString().trim();
    // prompt for the permalink of the blog post
    rl.question('[>] Enter a permalink for your blog (my-blog-link): ', (answer) => {
        var blog_permalink = answer.toString().trim();
        // prompt for the description of the blog post (meta description)
        rl.question('[>] Enter a description for your blog (meta description): ', (answer) => {
            var blog_description = answer.toString().trim();
            // prompt for the path to the blog markdown file
            rl.question('[>] Enter the path to MD file (my-blog.md): ', (answer) => {
                var md_file = answer.toString().trim();
                publishBlog(blog_title, blog_permalink, blog_description, md_file);
                rl.close();
            });
        });
    });    
});