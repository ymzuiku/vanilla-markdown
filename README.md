# vanilla-markdown

## Example:

Easy create markdown and graph HTMLELment:

```js
import VanillaMarkdown from 'vanilla-markdown'


const element = VanillaMarkdown(`
# Hello
> markdown
`)
document.body.append(element);
```

## In React

```tsx
import React from 'react'
import VanillaMarkdown from 'vanilla-markdown'

const element = VanillaMarkdown(`
# Hello
> markdown
`)

function Home(){
  const ref = React.useRef();

  useEffect(()=>{
    ref.current.appendChild(element);
  }, [])

  return <div ref={ref} />
}
```

## Only in html example

```html

```

## Can Use mermaid print graph: 

Detail read: http://mermaid-js.github.io/mermaid/
