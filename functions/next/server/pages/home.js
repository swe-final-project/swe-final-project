"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/header.js

function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {})
    });
}

;// CONCATENATED MODULE: ./components/textbox.js

function Textbox({ value , onChange  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: "assignment",
                className: "block text-sm font-medium leading-6 text-gray-900",
                children: "Paste your assignment instructions below."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                    rows: 4,
                    name: "assignment",
                    id: "assignment",
                    className: "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4",
                    value: value,
                    onChange: onChange
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/home.js





function Home() {
    const [assignmentInput, setAssignmentInput] = (0,external_react_.useState)("");
    const [result, setResult] = (0,external_react_.useState)();
    const [loading, setLoading] = (0,external_react_.useState)(false);
    async function onSubmit(event) {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/api/hello", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    assignment: assignmentInput
                })
            });
            const data = await response.json();
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }
            console.log(data.result);
            setResult(data.result);
            setAssignmentInput("");
        } catch (error) {
            console.error(error);
            alert(error.message);
        } finally{
            setLoading(false);
        }
    }
    function renderBulletPoints(output) {
        const lines = output.split("\n").filter((line)=>line.trim() !== "");
        function boldPhrases(line) {
            const phrasesToBold = [
                "requirements:",
                "technical requirements:",
                "formatting and submission requirements:"
            ];
            let modifiedLine = line;
            phrasesToBold.forEach((phrase)=>{
                const regex = new RegExp(phrase, "gi");
                modifiedLine = modifiedLine.replace(regex, (match)=>`<strong>${match}</strong>`);
            });
            return modifiedLine;
        }
        function getIndentLevel(line) {
            const leadingSpaces = line.match(/^(\s+)/);
            return leadingSpaces ? leadingSpaces[0].length : 0;
        }
        function renderLineWithIndent(line, index) {
            const indentLevel = getIndentLevel(line);
            const paddingLeft = indentLevel * 10; // Adjust this value to increase/decrease the indent size
            const htmlContent = boldPhrases(line.trim());
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                dangerouslySetInnerHTML: {
                    __html: htmlContent
                },
                style: {
                    paddingLeft: `${paddingLeft}px`
                }
            }, index);
        }
        return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: lines.map((line, index)=>renderLineWithIndent(line, index))
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-screen bg-pool bg-cover bg-center p-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-white  m-auto backdrop-blur-lg bg-opacity-20 rounded-3xl p-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-xl",
                        children: "Welcome!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Paste your assignment instructions below."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        children: "Name my pet"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        onSubmit: onSubmit,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Textbox, {
                                value: assignmentInput,
                                onChange: (e)=>setAssignmentInput(e.target.value)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "submit",
                                value: "Generate names"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: result && renderBulletPoints(result)
                    }),
                    loading && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 bg-black",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-400"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(426));
module.exports = __webpack_exports__;

})();