# vanilla-markdown

## Example:

Easy create markdown and graph HTMLELment:

```js
import VanillaMarkdown from 'vanilla-markdown'


const element = VanillaMarkdown(`
# This Example is Copy base markdown-it Document

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
`);

document.body.append(element);
```

## Can Use mermaid print graph: 

Detail read: http://mermaid-js.github.io/mermaid/
