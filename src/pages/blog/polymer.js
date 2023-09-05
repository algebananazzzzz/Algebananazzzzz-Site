import React, { useEffect } from "react"
import Prism from "prismjs"
import BlogComponent from "../../components/blog"
import CopyButton from "../../components/ui/copybutton";


const IndexPage = () => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <BlogComponent>
            <div className="space-y-5 lg:space-y-8">
                <h2 className="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">Polymer: A CI/CD framework</h2>

                <div className="flex items-center gap-x-5">
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200">
                        Tutorial
                    </span>
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200">
                        Framework
                    </span>
                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">September 4, 2023</p>
                </div>

                <p className="text-lg text-gray-800 dark:text-gray-200 text-justify">Creating a portfolio website serves as a powerful means to elevate your online presence, and IMO is the <b>simplest</b> yet <b>most effective first step</b> to securing opportunities and impressing stakeholders. Not only can you showcase your skills and passion, the portfolio itself serves as a testament to your genuine interest in Computing and Web Development!
                </p>



                <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                    <div>
                        <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200" href="https://github.com/algebananazzzzz/Nocturnal">
                            Repository
                        </a>
                    </div>

                    <div className="flex justify-end items-center gap-x-1.5">

                        <CopyButton copyData="http://localhost:8000/blog/" copyText="Share Link" />
                    </div>
                </div>
            </div>
        </BlogComponent >
    )
}

export default IndexPage

export const Head = () => <title>Algebananazzzzz</title>