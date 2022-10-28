



function previewer() {
    var mdEditor = document.getElementById('editor');

const mdContent = `
# Markdown Parser  

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.  

How To Use The Demo
-------------------  

1. Type in stuff on the left.
2. See the live updates on the right.  

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:  

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.  

Why Markdown?
-------------  

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,  

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.  

Ready to start writing?  Either start changing stuff on the left or [clear everything](/demo/?text=) with a simple click.  

[Marked]: https://github.com/markedjs/marked/  
[Markdown]: http://daringfireball.net/projects/markdown/  
`

const mdPlaceholder = `
Markdown Editor
===============

Convert [Markdown] into HTML.  

How To Use The Demo
-------------------

![Alt text](https://cdn.icon-icons.com/icons2/3265/PNG/512/markdown_icon_207115.png "Optional title")  


That's it. <code>Pretty</code> simple. There's also a drop-down option in the upper right to switch between various views:  

**Preview:**  A live display of the generated HTML as it would render in a browser.  

- Preview:  A live display of the generated HTML as it would render in a browser.  

            function Panel(element, canClose, closeHandler) {
                this.element = element;
                this.canClose = canClose;
                this.closeHandler = function () { 
                    if (closeHandler) closeHandler() 
                };
            }  

> publishable as-is, as plain text  

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.  

`
const codeBlock = 'Use the `printf()` function.'

    document.getElementById('instructions').innerHTML = marked.parse(mdContent);

    document.getElementById('preview').innerHTML = marked.parse(mdPlaceholder + codeBlock);
    document.getElementById('editor').defaultValue = mdPlaceholder + codeBlock;

    mdEditor.onkeyup = mdEditor.onkeypress = function(){
        
        document.getElementById('preview').innerHTML = marked.parse(this.value);
    }
    
}


function markdown() {
    const element = (

        <div>

            <div className="container">
                <div className="row text-start">
                    <div className="col">
                        <div id="instructions"></div>
                    </div>

                    <div className="col">
                        <div className="mb-3 text-start">
                            <label htmlFor="editor"></label>
                            <textarea id="editor" name="editor" className="form-control rounded-0" rows="10"></textarea>
                            
                        </div>
                        
                        <div id="preview"></div>
                    </div>
                </div> 
            </div>

        </div>

    );
    ReactDOM.render(
        element,
        document.getElementById('markdown_component')
    );
}

markdown();
previewer();



  




