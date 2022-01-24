import React from 'react';
import { marked } from 'marked';
import './UserInput.scss'

marked.setOptions({
    breaks: true,
})

const defaultPlaceholder = `# This is a Markdown Converter #
## Start typing some Markdown to see your converted result! ##
This converter has been built using **React** and the library [Marked](https://cdnjs.com/libraries/marked)  

With Markdown you can write anything: 

- titles
- paragraphs
- lists
- quotes

And also include: 

- images
- tables
- etc.

You can write something simple like  \`# Hello World! # \`  

Or more complex code like:

\`\`\`

//This is a multiline code: 

    # I love cats! #
    My favourite cats are: 
        1.Birman Cats
        2.Singapura Cats  

\`\`\`
![Birdman Cat](https://cdn.pixabay.com/photo/2021/02/24/20/38/cat-6047457_1280.png)
>"Don't wait any more and start coding!" – Cat`

class UserInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            markdown : defaultPlaceholder,
            submitedText: '',
        }

        this.handleMarkdown = this.handleMarkdown.bind(this);
       
    }

    handleMarkdown (event){
        this.setState(
            {markdown: event.target.value}
        )
        
    }

    handleMarkdownParse(){
        const parsedMarkdown = marked.parse(this.state.markdown);
        return { __html: parsedMarkdown };
       
    }

    render(){

        return(
            <div className='container'>
                <div className='item'>
                    <h1>Introduce some Markdown</h1>
                    <textarea id='editor' className='textarea editor' onChange={this.handleMarkdown} value={this.state.markdown}></textarea>
                    
                  
                </div>

                <div className='item'>
                    <h1>Your Converted Markdown</h1>
                    <div id='preview' className='textarea preview' dangerouslySetInnerHTML={this.handleMarkdownParse()}>
                    </div>
                </div>


            </div>


        )
    }


}

export default UserInput;