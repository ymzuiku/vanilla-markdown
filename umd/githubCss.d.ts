declare const css = "\n.vmdb {\n  -moz-user-select:auto !important; \n  -webkit-user-select:auto !important;\n  -ms-user-select:auto !important;\n  user-select:auto !important;\n}\n.vmdb .octicon {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.vmdb .anchor {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n\n.vmdb .anchor:focus {\n  outline: none;\n}\n\n.vmdb h1 .octicon-link,\n.vmdb h2 .octicon-link,\n.vmdb h3 .octicon-link,\n.vmdb h4 .octicon-link,\n.vmdb h5 .octicon-link,\n.vmdb h6 .octicon-link {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n\n.vmdb h1:hover .anchor,\n.vmdb h2:hover .anchor,\n.vmdb h3:hover .anchor,\n.vmdb h4:hover .anchor,\n.vmdb h5:hover .anchor,\n.vmdb h6:hover .anchor {\n  text-decoration: none;\n}\n\n.vmdb h1:hover .anchor .octicon-link,\n.vmdb h2:hover .anchor .octicon-link,\n.vmdb h3:hover .anchor .octicon-link,\n.vmdb h4:hover .anchor .octicon-link,\n.vmdb h5:hover .anchor .octicon-link,\n.vmdb h6:hover .anchor .octicon-link {\n  visibility: visible;\n}\n\n.vmdb h1:hover .anchor .octicon-link:before,\n.vmdb h2:hover .anchor .octicon-link:before,\n.vmdb h3:hover .anchor .octicon-link:before,\n.vmdb h4:hover .anchor .octicon-link:before,\n.vmdb h5:hover .anchor .octicon-link:before,\n.vmdb h6:hover .anchor .octicon-link:before {\n  width: 16px;\n  height: 16px;\n  content: ' ';\n  display: inline-block;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' width='16' height='16' aria-hidden='true'%3E%3Cpath fill-rule='evenodd' d='M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'%3E%3C/path%3E%3C/svg%3E\");\n}.vmdb {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n\n.vmdb details {\n  display: block;\n}\n\n.vmdb summary {\n  display: list-item;\n}\n\n.vmdb a {\n  background-color: initial;\n}\n\n.vmdb a:active,\n.vmdb a:hover {\n  outline-width: 0;\n}\n\n.vmdb strong {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n\n.vmdb h1 {\n  font-size: 2em;\n  margin: .67em 0;\n}\n\n.vmdb img {\n  border-style: none;\n}\n\n.vmdb code,\n.vmdb kbd,\n.vmdb pre {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n\n.vmdb hr {\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n\n.vmdb input {\n  font: inherit;\n  margin: 0;\n}\n\n.vmdb input {\n  overflow: visible;\n}\n\n.vmdb [type=checkbox] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n.vmdb * {\n  box-sizing: border-box;\n}\n\n.vmdb input {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.vmdb a {\n  color: #0366d6;\n  text-decoration: none;\n}\n\n.vmdb a:hover {\n  text-decoration: underline;\n}\n\n.vmdb strong {\n  font-weight: 600;\n}\n\n.vmdb hr {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n\n.vmdb hr:after,\n.vmdb hr:before {\n  display: table;\n  content: \"\";\n}\n\n.vmdb hr:after {\n  clear: both;\n}\n\n.vmdb table {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\n.vmdb td,\n.vmdb th {\n  padding: 0;\n}\n\n.vmdb details summary {\n  cursor: pointer;\n}\n\n.vmdb kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.vmdb h1,\n.vmdb h2,\n.vmdb h3,\n.vmdb h4,\n.vmdb h5,\n.vmdb h6 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.vmdb h1 {\n  font-size: 32px;\n}\n\n.vmdb h1,\n.vmdb h2 {\n  font-weight: 600;\n}\n\n.vmdb h2 {\n  font-size: 24px;\n}\n\n.vmdb h3 {\n  font-size: 20px;\n}\n\n.vmdb h3,\n.vmdb h4 {\n  font-weight: 600;\n}\n\n.vmdb h4 {\n  font-size: 16px;\n}\n\n.vmdb h5 {\n  font-size: 14px;\n}\n\n.vmdb h5,\n.vmdb h6 {\n  font-weight: 600;\n}\n\n.vmdb h6 {\n  font-size: 12px;\n}\n\n.vmdb p {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.vmdb blockquote {\n  margin: 0;\n}\n\n.vmdb ol,\n.vmdb ul {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.vmdb ol ol,\n.vmdb ul ol {\n  list-style-type: lower-roman;\n}\n\n.vmdb ol ol ol,\n.vmdb ol ul ol,\n.vmdb ul ol ol,\n.vmdb ul ul ol {\n  list-style-type: lower-alpha;\n}\n\n.vmdb dd {\n  margin-left: 0;\n}\n\n.vmdb code,\n.vmdb pre {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n\n.vmdb pre {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.vmdb input::-webkit-inner-spin-button,\n.vmdb input::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.vmdb :checked+.radio-label {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n\n.vmdb .border {\n  border: 1px solid #e1e4e8!important;\n}\n\n.vmdb .border-0 {\n  border: 0!important;\n}\n\n.vmdb .border-bottom {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n\n.vmdb .rounded-1 {\n  border-radius: 3px!important;\n}\n\n.vmdb .bg-white {\n  background-color: #fff!important;\n}\n\n.vmdb .bg-gray-light {\n  background-color: #fafbfc!important;\n}\n\n.vmdb .text-gray-light {\n  color: #6a737d!important;\n}\n\n.vmdb .mb-0 {\n  margin-bottom: 0!important;\n}\n\n.vmdb .my-2 {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n\n.vmdb .pl-0 {\n  padding-left: 0!important;\n}\n\n.vmdb .py-0 {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n\n.vmdb .pl-1 {\n  padding-left: 4px!important;\n}\n\n.vmdb .pl-2 {\n  padding-left: 8px!important;\n}\n\n.vmdb .py-2 {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n\n.vmdb .pl-3,\n.vmdb .px-3 {\n  padding-left: 16px!important;\n}\n\n.vmdb .px-3 {\n  padding-right: 16px!important;\n}\n\n.vmdb .pl-4 {\n  padding-left: 24px!important;\n}\n\n.vmdb .pl-5 {\n  padding-left: 32px!important;\n}\n\n.vmdb .pl-6 {\n  padding-left: 40px!important;\n}\n\n.vmdb .f6 {\n  font-size: 12px!important;\n}\n\n.vmdb .lh-condensed {\n  line-height: 1.25!important;\n}\n\n.vmdb .text-bold {\n  font-weight: 600!important;\n}\n\n.vmdb .pl-c {\n  color: #6a737d;\n}\n\n.vmdb .pl-c1,\n.vmdb .pl-s .pl-v {\n  color: #005cc5;\n}\n\n.vmdb .pl-e,\n.vmdb .pl-en {\n  color: #6f42c1;\n}\n\n.vmdb .pl-s .pl-s1,\n.vmdb .pl-smi {\n  color: #24292e;\n}\n\n.vmdb .pl-ent {\n  color: #22863a;\n}\n\n.vmdb .pl-k {\n  color: #d73a49;\n}\n\n.vmdb .pl-pds,\n.vmdb .pl-s,\n.vmdb .pl-s .pl-pse .pl-s1,\n.vmdb .pl-sr,\n.vmdb .pl-sr .pl-cce,\n.vmdb .pl-sr .pl-sra,\n.vmdb .pl-sr .pl-sre {\n  color: #032f62;\n}\n\n.vmdb .pl-smw,\n.vmdb .pl-v {\n  color: #e36209;\n}\n\n.vmdb .pl-bu {\n  color: #b31d28;\n}\n\n.vmdb .pl-ii {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n\n.vmdb .pl-c2 {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n\n.vmdb .pl-c2:before {\n  content: \"^M\";\n}\n\n.vmdb .pl-sr .pl-cce {\n  font-weight: 700;\n  color: #22863a;\n}\n\n.vmdb .pl-ml {\n  color: #735c0f;\n}\n\n.vmdb .pl-mh,\n.vmdb .pl-mh .pl-en,\n.vmdb .pl-ms {\n  font-weight: 700;\n  color: #005cc5;\n}\n\n.vmdb .pl-mi {\n  font-style: italic;\n  color: #24292e;\n}\n\n.vmdb .pl-mb {\n  font-weight: 700;\n  color: #24292e;\n}\n\n.vmdb .pl-md {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n\n.vmdb .pl-mi1 {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n\n.vmdb .pl-mc {\n  color: #e36209;\n  background-color: #ffebda;\n}\n\n.vmdb .pl-mi2 {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n\n.vmdb .pl-mdr {\n  font-weight: 700;\n  color: #6f42c1;\n}\n\n.vmdb .pl-ba {\n  color: #586069;\n}\n\n.vmdb .pl-sg {\n  color: #959da5;\n}\n\n.vmdb .pl-corl {\n  text-decoration: underline;\n  color: #032f62;\n}\n\n.vmdb .mb-0 {\n  margin-bottom: 0!important;\n}\n\n.vmdb .my-2 {\n  margin-bottom: 8px!important;\n}\n\n.vmdb .my-2 {\n  margin-top: 8px!important;\n}\n\n.vmdb .pl-0 {\n  padding-left: 0!important;\n}\n\n.vmdb .py-0 {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n\n.vmdb .pl-1 {\n  padding-left: 4px!important;\n}\n\n.vmdb .pl-2 {\n  padding-left: 8px!important;\n}\n\n.vmdb .py-2 {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n\n.vmdb .pl-3 {\n  padding-left: 16px!important;\n}\n\n.vmdb .pl-4 {\n  padding-left: 24px!important;\n}\n\n.vmdb .pl-5 {\n  padding-left: 32px!important;\n}\n\n.vmdb .pl-6 {\n  padding-left: 40px!important;\n}\n\n.vmdb .pl-7 {\n  padding-left: 48px!important;\n}\n\n.vmdb .pl-8 {\n  padding-left: 64px!important;\n}\n\n.vmdb .pl-9 {\n  padding-left: 80px!important;\n}\n\n.vmdb .pl-10 {\n  padding-left: 96px!important;\n}\n\n.vmdb .pl-11 {\n  padding-left: 112px!important;\n}\n\n.vmdb .pl-12 {\n  padding-left: 128px!important;\n}\n\n.vmdb hr {\n  border-bottom-color: #eee;\n}\n\n.vmdb kbd {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n\n.vmdb:after,\n.vmdb:before {\n  display: table;\n  content: \"\";\n}\n\n.vmdb:after {\n  clear: both;\n}\n\n.vmdb>:first-child {\n  margin-top: 0!important;\n}\n\n.vmdb>:last-child {\n  margin-bottom: 0!important;\n}\n\n.vmdb a:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n\n.vmdb blockquote,\n.vmdb details,\n.vmdb dl,\n.vmdb ol,\n.vmdb p,\n.vmdb pre,\n.vmdb table,\n.vmdb ul {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.vmdb hr {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n\n.vmdb blockquote {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n\n.vmdb blockquote>:first-child {\n  margin-top: 0;\n}\n\n.vmdb blockquote>:last-child {\n  margin-bottom: 0;\n}\n\n.vmdb h1,\n.vmdb h2,\n.vmdb h3,\n.vmdb h4,\n.vmdb h5,\n.vmdb h6 {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n\n.vmdb h1 {\n  font-size: 2em;\n}\n\n.vmdb h1,\n.vmdb h2 {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n\n.vmdb h2 {\n  font-size: 1.5em;\n}\n\n.vmdb h3 {\n  font-size: 1.25em;\n}\n\n.vmdb h4 {\n  font-size: 1em;\n}\n\n.vmdb h5 {\n  font-size: .875em;\n}\n\n.vmdb h6 {\n  font-size: .85em;\n  color: #6a737d;\n}\n\n.vmdb ol,\n.vmdb ul {\n  padding-left: 2em;\n}\n\n.vmdb ol ol,\n.vmdb ol ul,\n.vmdb ul ol,\n.vmdb ul ul {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.vmdb li {\n  word-wrap: break-all;\n}\n\n.vmdb li>p {\n  margin-top: 16px;\n}\n\n.vmdb li+li {\n  margin-top: .25em;\n}\n\n.vmdb dl {\n  padding: 0;\n}\n\n.vmdb dl dt {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n\n.vmdb dl dd {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n\n.vmdb table {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n\n.vmdb table th {\n  font-weight: 600;\n}\n\n.vmdb table td,\n.vmdb table th {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n\n.vmdb table tr {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n\n.vmdb table tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.vmdb img {\n  max-width: 100%;\n  box-sizing: initial;\n  background-color: #fff;\n}\n\n.vmdb img[align=right] {\n  padding-left: 20px;\n}\n\n.vmdb img[align=left] {\n  padding-right: 20px;\n}\n\n.vmdb code {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n\n.vmdb pre {\n  word-wrap: normal;\n}\n\n.vmdb pre>code {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n\n.vmdb .highlight {\n  margin-bottom: 16px;\n}\n\n.vmdb .highlight pre {\n  margin-bottom: 0;\n  word-break: normal;\n}\n\n.vmdb .highlight pre,\n.vmdb pre {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n\n.vmdb pre code {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: initial;\n  border: 0;\n}\n\n.vmdb .commit-tease-sha {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n\n.vmdb .full-commit .btn-outline:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n\n.vmdb .blob-wrapper {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.vmdb .blob-wrapper-embedded {\n  max-height: 240px;\n  overflow-y: auto;\n}\n\n.vmdb .blob-num {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.vmdb .blob-num:hover {\n  color: rgba(27,31,35,.6);\n}\n\n.vmdb .blob-num:before {\n  content: attr(data-line-number);\n}\n\n.vmdb .blob-code {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n\n.vmdb .blob-code-inner {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n\n.vmdb .pl-token.active,\n.vmdb .pl-token:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n\n.vmdb .tab-size[data-tab-size=\"1\"] {\n  -moz-tab-size: 1;\n  tab-size: 1;\n}\n\n.vmdb .tab-size[data-tab-size=\"2\"] {\n  -moz-tab-size: 2;\n  tab-size: 2;\n}\n\n.vmdb .tab-size[data-tab-size=\"3\"] {\n  -moz-tab-size: 3;\n  tab-size: 3;\n}\n\n.vmdb .tab-size[data-tab-size=\"4\"] {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n\n.vmdb .tab-size[data-tab-size=\"5\"] {\n  -moz-tab-size: 5;\n  tab-size: 5;\n}\n\n.vmdb .tab-size[data-tab-size=\"6\"] {\n  -moz-tab-size: 6;\n  tab-size: 6;\n}\n\n.vmdb .tab-size[data-tab-size=\"7\"] {\n  -moz-tab-size: 7;\n  tab-size: 7;\n}\n\n.vmdb .tab-size[data-tab-size=\"8\"] {\n  -moz-tab-size: 8;\n  tab-size: 8;\n}\n\n.vmdb .tab-size[data-tab-size=\"9\"] {\n  -moz-tab-size: 9;\n  tab-size: 9;\n}\n\n.vmdb .tab-size[data-tab-size=\"10\"] {\n  -moz-tab-size: 10;\n  tab-size: 10;\n}\n\n.vmdb .tab-size[data-tab-size=\"11\"] {\n  -moz-tab-size: 11;\n  tab-size: 11;\n}\n\n.vmdb .tab-size[data-tab-size=\"12\"] {\n  -moz-tab-size: 12;\n  tab-size: 12;\n}\n\n.vmdb .task-list-item {\n  list-style-type: none;\n}\n\n.vmdb .task-list-item+.task-list-item {\n  margin-top: 3px;\n}\n\n.vmdb .task-list-item input {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n";
declare const sty: HTMLStyleElement;
