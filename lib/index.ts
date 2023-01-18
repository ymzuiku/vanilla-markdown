import marked from "marked";
import mermaid from "mermaid";
import "./githubCss";

const renderer = new marked.Renderer();
const mermaidCache = {} as any;

export interface MocOptions {
  text: string;
  raw: string;
  level: number;
  index: number;
  line: number;
  onClick?: Function;
}

export interface MarkdownElement extends HTMLDivElement {
  moc: MocOptions[];
}

renderer.code = function (
  code: string,
  language: string | undefined,
  isEscaped: boolean
): string {
  if (code && (language === "g" || language === "graph")) {
    const lastHtml = mermaidCache[code];
    if (lastHtml) {
      return `<div style="opacity: 1; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; border:0.6px solid #eeeeee; border-radius:6px; margin:10px 0px;">${lastHtml}</div>`;
    }

    return `<div data-code="${code}" style="opacity: 0; text-align:center; transition: opacity 0.1s ease-out; min-height: 10px; padding:10px 0px; overflow:auto; border:0.6px solid #eeeeee; border-radius:6px; margin:10px 0px;" class="mermaid">${code}</div>`;
  }
  return "<pre><code>" + code + "</code></pre>";
};

function VanillaMarkdown(md: string, isGetMoc?: boolean) {
  const moc: MocOptions[] = [];

  if (isGetMoc) {
    (window as any).vmd_moc_click = (i: number) => {
      if (moc && moc[i] && moc[i].onClick) {
        (moc as any)[i].onClick(moc[i].index, moc[i].line);
      }
    };

    // 计算每个 header在第几行
    const lines: number[] = [];
    md.split("\n").forEach((v, i) => {
      if (v[0] === "#") {
        lines.push(i);
      }
      return v;
    });

    let index = -1;
    renderer.heading = (text, level, raw, slugger) => {
      index += 1;
      moc.push({
        text,
        raw,
        level,
        index,
        line: lines[index],
      });
      return `<h${level} onclick="vmd_moc_click(${index})" class="moc-${index}">${text}</h${level}>`;
    };
  }

  const view = document.createElement("div") as MarkdownElement;
  view.className = "vmdb";
  view.style.overflowX = "hidden";
  view.style.padding = "20px 5% 60px 5%";
  view.innerHTML = marked(md, {
    renderer,
    xhtml: true,
  });
  view.moc = moc;

  setTimeout(() => {
    try {
      const nodeList = view.querySelectorAll(".mermaid");
      // mermaid.parse(code)
      let error: any;
      nodeList.forEach((n) => {
        try {
          mermaid.parse(n.innerHTML);
        } catch (err) {
          error = err;
          n.innerHTML = `<span style="color:#f55; text-align:center;">${err.str}</span>`;
        }
      });
      if (!error) {
        mermaid.init(nodeList);
        nodeList.forEach((v) => {
          const code = v.getAttribute("data-code");
          const html = v.innerHTML;
          if (code) {
            mermaidCache[code] = html;
          }
        });
      }
      nodeList.forEach((ele: any) => {
        ele.style.opacity = 1;
        ele.style.minHeight = "auto";
      });
    } catch (err) {
      console.warn("[mermaid]: ", err);
    }
  }, 50);

  return view;
}
(window as any).VanillaMarkdown = VanillaMarkdown;
export default VanillaMarkdown;
