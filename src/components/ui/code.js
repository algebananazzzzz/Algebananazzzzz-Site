import React, { useEffect, useRef, useState } from 'react';
import Prism from "prismjs"

const CodeBlock = ({ header, code, lang, copy }) => {
    const codeBlockRef = useRef();
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(code).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000); // Reset to default state after 2 seconds
        })
    };


    useEffect(() => {
        Prism.highlightElement(codeBlockRef.current);
    }, [code, lang]);

    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                {header ? <h5 className="text-xl font-semibold dark:text-white">{header}</h5> : <div className="flex-grow"></div>}
                {copy && <button type="button" onClick={handleCopyClick} class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-600 transition-all text-sm bg-slate-900 hover:bg-slate-700 border-gray-700 text-gray-400 hover:text-white focus:ring-offset-gray-800">
                    {isCopied ? <><svg class="w-5 h-5" stroke='currentColor' viewBox="0 0 24 24">
                        <path d="M4.89163 13.2687L9.16582 17.5427L18.7085 8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                        Copied!</> : <>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke-width="1.5"></path> <path opacity="0.5" d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke-width="1.5"></path>
                        </svg>
                        Copy
                    </>}
                </button>}
            </div>
            <pre className="text-sm overflow-x-scroll">
                <code ref={codeBlockRef} className={`language-${lang}`}>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default CodeBlock;
