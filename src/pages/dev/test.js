import React, { useEffect, useState } from "react"
import Prism from "prismjs"
import BlogComponent from "../../components/blog"
import PageContent from '../../content/blog/nocturnal.yml'


const IndexPage = () => {
    const [pageContent, setPageContent] = useState(null);

    useEffect(() => {
        Prism.highlightAll()

        const fetchPageContent = async () => {
            const elements = await Promise.all(
                PageContent.content.map(async (content) => {
                    if (typeof content === 'string') {
                        return <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify" dangerouslySetInnerHTML={{ __html: content }}></p>
                    } else {
                        return getElement(Object.keys(content)[0], Object.values(content)[0]);
                    }
                })
            );
            setPageContent(elements);

        }
        fetchPageContent()

    }, [getElement])

    const getElement = async (type, value) => {
        if (type === "h3") {
            return <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">{value}</h3>
        } else if (type === "h4") {
            return <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">{value}</h4>
        }
        else if (type === "image") {
            const module = await import(`../../static/blog/nocturnal/${value.image}`)
            return <figure>
                <img alt="" className="w-full object-cover rounded-xl" src={module.default} />
                <figcaption className="mt-3 text-sm text-center text-gray-500">
                    {value.caption}
                </figcaption>
            </figure>
        } else if (type === "imagegroup") {
            const imagesPromiseArray = value.images.map(async (image) => {
                const module = await import(`../../static/blog/nocturnal/${image.image}`)
                return (
                    <figure className={`col-span-${image.grid_cols_sm} md:col-span-${image.grid_cols_md} relative w-full`}>
                        <img alt="" className="w-full h-full object-cover rounded-xl" src={module.default} />
                    </figure>
                );
            });

            const images = await Promise.all(imagesPromiseArray);

            return (
                <div className={`grid grid-cols-${value.grid_cols} gap-3`}>
                    {images}
                </div>
            );

        }

        else if (type === "list_bullet") {
            return <ul className="list-disc list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                {value.map((value) => {
                    if (typeof value === 'string') {
                        return <li className="pl-2" dangerouslySetInnerHTML={{ __html: value }}></li>
                    } else {
                        return <li className="pl-2">{getElement(Object.keys(value)[0], Object.values(value)[0])}</li>
                    }
                })}
            </ul>
        }
        else if (type === "list_numerical") {
            const elements = await Promise.all(
                value.map(async (item, index) => {
                    if (typeof item === 'object') {
                        const element = await Promise.all(
                            item.map(async (elem) => {
                                if (typeof elem === 'string') {
                                    return <p dangerouslySetInnerHTML={{ __html: elem }} className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify"></p>
                                } else {
                                    console.log(elem)
                                    return await getElement(Object.keys(elem)[0], Object.values(elem)[0]);
                                }
                            })
                        );
                        console.log(element)
                        return <li key={index} className="pl-2 space-y-2">
                            {element}
                        </li>
                    } else {
                        return (
                            <li key={index} className="pl-2" dangerouslySetInnerHTML={{ __html: item }}>
                            </li>
                        );
                    }
                })
            );

            return <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                {elements}
            </ul>
        } else if (type === "code") {

        }
    }

    return (
        <BlogComponent>
            <div className="space-y-5 lg:space-y-8">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl dark:text-white">{PageContent.title}</h2>

                <div className="flex items-center gap-x-5">
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200">
                        Tutorial
                    </span>
                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">{PageContent.date}</p>
                </div>


                {
                    pageContent
                }
            </div>
        </BlogComponent >
    )
}

export default IndexPage

export const Head = () => <title>Algebananazzzzz</title>