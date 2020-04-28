import "./githubCss";
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
declare function VanillaMarkdown(md: string, isGetMoc?: boolean): MarkdownElement;
export default VanillaMarkdown;
