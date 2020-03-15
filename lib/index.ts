import marked from "marked";
import mermaid from "mermaid";
import "./githubCss";

const renderer = new marked.Renderer();

renderer.code = function(
  code: string,
  language: string | undefined,
  isEscaped: boolean
): string {
  if (language === "g" || language === "graph") {
    return `<div style="opacity: 0; transition: opacity 0.2s ease-out; min-height: 200px; padding:10px 0px; overflow:auto; border:0.6px solid #eeeeee; border-radius:6px; margin:10px 0px;" class="mermaid">${code}</div>`;
  }
  return "<pre><code>" + code + "</code></pre>";
};

function VanillaMarkdown(md: string) {

  const view = document.createElement('div');
  view.className = 'vmdb';
  view.style.overflowX = 'hidden';
  view.style.padding = "20px 5% 60px 5%";
  view.innerHTML = marked(md, {
    renderer,
    xhtml: true
  });

  setTimeout(()=>{
    try {
      const nodeList = document.querySelectorAll(".mermaid");
      mermaid.initialize({
        securityLevel: "loose"
      });
      mermaid.init(nodeList);
      nodeList.forEach((ele: any) => {
        ele.style.opacity = 1;
        ele.style.minHeight = "auto";
      });
    } catch (err) {
      console.warn("[mermaid]: ", err);
    }
  }, 420);

  return view;
}

export default VanillaMarkdown;
