import React, { useState } from "react"
import HomeLayout from "../components/layout/home-layout"
import VideoPopupComponent from "../components/video-popup"
import ProjectContent from '../content/project.yml'
import Text from "../components/ui/text"
import SvgListed from "../components/ui/svgs";
import Action from "../components/ui/action"

const ProjectPage = () => {
  const [popup, setPopup] = useState(null)

  return (
    <HomeLayout>
      <body className="min-h-screen dark:bg-slate-900">
        <VideoPopupComponent popup={popup} setPopup={setPopup} />

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="pt-5 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
            <div className="lg:col-span-4">
              <h1 className="flex-none font-medium text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
                Projects
              </h1>
              <Text classes="mt-5 text-justify" text="Explore my software development projects, where I channel my passion to create solutions to empower and benefit those in my community.">
              </Text>
              {/* <Link to="/motivations" className="py-3 px-4 inline-flex justify-center items-center rounded-md bg-indigo-200 font-semibold text-gray-500 hover:text-white hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:bg-indigo-700 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600 dark:text-white dark:focus:ring-offset-indigo-800">
                  Explore the driving force behind my projects
                </Link> */}
            </div>
            <div className="lg:col-span-3 mt-10 lg:mt-0 hidden lg:block">
              <svg viewBox="0 0 1024 1024" fill="#000000">
                <path d="M520.70912 515.8144m-469.69856 0a469.69856 469.69856 0 1 0 939.39712 0 469.69856 469.69856 0 1 0-939.39712 0Z" fill="#00DFD5"></path><path d="M520.71424 995.21536c-264.3456 0-479.40608-215.06048-479.40608-479.40608S256.36864 36.4032 520.71424 36.4032s479.40608 215.06048 479.40608 479.40608-215.06048 479.40608-479.40608 479.40608z m0-939.39712c-253.63968 0-459.99104 206.35136-459.99104 459.99104s206.35136 459.99104 459.99104 459.99104 459.99104-206.35136 459.99104-459.99104-206.35136-459.99104-459.99104-459.99104z" fill="#6C0000"></path><path d="M663.59296 84.89472c-161.85344-29.4656-334.05952 30.47424-440.97536 170.05056-152.07936 198.54336-114.41152 482.78016 84.13696 634.85952a452.11136 452.11136 0 0 0 128.59904 68.88448 450.71872 450.71872 0 0 1-193.8944-85.9136C42.91072 720.69632 5.24288 436.45952 157.32224 237.91104 278.784 79.33952 484.51584 23.52128 663.59296 84.89472z" fill="#99F0DD"></path><path d="M335.22176 598.41536m-47.34976 0a47.34976 47.34976 0 1 0 94.69952 0 47.34976 47.34976 0 1 0-94.69952 0Z" fill="#FFEB43"></path><path d="M335.22688 653.85472c-30.57152 0-55.44448-24.87296-55.44448-55.44448s24.87296-55.43424 55.44448-55.43424 55.43424 24.86784 55.43424 55.43424-24.86784 55.44448-55.43424 55.44448z m0-94.69952c-21.65248 0-39.26528 17.6128-39.26528 39.26016 0 21.65248 17.6128 39.26528 39.26528 39.26528 21.64224 0 39.26016-17.6128 39.26016-39.26528-0.00512-21.64736-17.61792-39.26016-39.26016-39.26016z" fill="#6B0306"></path><path d="M226.82624 335.58016m-29.98272 0a29.98272 29.98272 0 1 0 59.96544 0 29.98272 29.98272 0 1 0-59.96544 0Z" fill="#FFEB43"></path><path d="M226.82624 373.64736c-20.98688 0-38.0672-17.08032-38.0672-38.0672 0-20.99712 17.08032-38.07232 38.0672-38.07232 20.99712 0 38.07232 17.08032 38.07232 38.07232s-17.08032 38.0672-38.07232 38.0672z m0-59.96032a21.91872 21.91872 0 0 0-21.888 21.89824c0 12.06784 9.82016 21.888 21.888 21.888s21.89824-9.82016 21.89824-21.888a21.93408 21.93408 0 0 0-21.89824-21.89824z" fill="#6B0306"></path><path d="M605.39904 544.6144m-19.584 0a19.584 19.584 0 1 0 39.168 0 19.584 19.584 0 1 0-39.168 0Z" fill="#FFEB43"></path><path d="M605.39904 572.288c-15.26272 0-27.66848-12.41088-27.66848-27.66848s12.41088-27.67872 27.66848-27.67872c15.26272 0 27.66848 12.416 27.66848 27.67872s-12.40576 27.66848-27.66848 27.66848z m0-39.17312a11.50976 11.50976 0 0 0-11.4944 11.49952c0 6.33344 5.15584 11.4944 11.4944 11.4944s11.4944-5.15584 11.4944-11.4944a11.51488 11.51488 0 0 0-11.4944-11.49952z" fill="#6B0306"></path><path d="M423.74144 202.54208m-17.71008 0a17.71008 17.71008 0 1 0 35.42016 0 17.71008 17.71008 0 1 0-35.42016 0Z" fill="#FFEB43"></path><path d="M423.74144 228.33664a25.82528 25.82528 0 0 1-25.79968-25.79968c0-14.21824 11.5712-25.78944 25.79968-25.78944s25.79968 11.5712 25.79968 25.78944a25.82528 25.82528 0 0 1-25.79968 25.79968z m0-35.40992a9.6256 9.6256 0 0 0 0 19.23584 9.6256 9.6256 0 0 0 0-19.23584z" fill="#6B0306"></path><path d="M721.5872 265.33888c-2.43712-6.92736-8.576-11.904-16.01536-12.99456l-48.896-7.15776-21.23264-43.42272c-3.30752-6.76352-10.4192-11.12576-18.13504-11.12576-7.69536 0-14.81728 4.36224-18.13504 11.12576l-21.23264 43.42272-48.88576 7.17312c-7.4496 1.07008-13.59872 6.04672-16.03584 12.99456a19.01568 19.01568 0 0 0 4.736 19.968l35.90144 35.33312-8.32 48.94208c-1.2544 7.33184 2.01728 14.8736 8.34048 19.20512 6.05696 4.096 14.55104 4.56192 21.0944 1.11616l42.55232-22.56896 42.5728 22.59456a20.5312 20.5312 0 0 0 21.10464-1.13664c6.28736-4.31616 9.55904-11.84768 8.30976-19.17952l-8.32-48.94208 35.90144-35.33312a19.07712 19.07712 0 0 0 4.69504-20.01408z" fill="#FFBD00"></path><path d="M669.4912 400.40448a28.80512 28.80512 0 0 1-13.3632-3.30752l-38.8096-20.59264-38.7584 20.5568c-9.00608 4.71552-21.10464 4.04992-29.4144-1.5616-8.96-6.12864-13.57312-16.82432-11.776-27.26912l7.60832-44.7744-32.89088-32.36864c-7.62368-7.49568-10.1888-18.3808-6.69696-28.39552 3.43552-9.80992 12.06272-16.83968 22.52288-18.35008l44.63616-6.53824 19.36896-39.59296c4.66944-9.51808 14.63808-15.66208 25.40544-15.66208 10.78272 0 20.75136 6.144 25.40544 15.66208l19.35872 39.59296 44.672 6.53824c10.43456 1.52576 19.0464 8.54528 22.47168 18.31936 3.5072 10.04032 0.96256 20.93056-6.65088 28.44672l-32.90112 32.37888 7.61344 44.77952c1.77664 10.43456-2.82112 21.11488-11.70432 27.20256a28.75392 28.75392 0 0 1-16.09728 4.93568z m-52.1728-42.2144l46.36672 24.59648a12.65152 12.65152 0 0 0 12.80512-0.70144c3.64032-2.49856 5.57056-6.87104 4.84864-11.10528l-9.0368-53.10464 38.912-38.2976c3.15392-3.11296 4.17792-7.43936 2.73408-11.5712-1.42336-4.0704-5.08928-7.00416-9.54368-7.66464l-53.12-7.77216-23.10656-47.25248c-3.91168-7.99232-17.81248-8.01792-21.73952 0.01024l-23.11168 47.24736-53.10464 7.7824c-4.48 0.65024-8.13568 3.584-9.56416 7.66976a10.97728 10.97728 0 0 0 2.7648 11.53024l38.912 38.2976-9.02144 53.10464c-0.73216 4.23936 1.20832 8.61696 4.93056 11.17184 3.43552 2.31424 8.94976 2.60608 12.75904 0.62976l46.31552-24.57088z" fill="#6B0204"></path><path d="M669.37344 84.90496c147.07712 75.37152 209.3312 251.58144 189.74208 427.1104-42.74688 383.0784-496.03584 424.40192-541.4912 409.1648a452.78208 452.78208 0 0 0 207.10912 49.92512c251.2384 0 454.912-203.66848 454.912-454.912 0.00512-200.6528-129.96608-370.8416-310.272-431.28832z" fill="#00D6C8"></path><path d="M873.8304 494.61248m-39.168 0a39.168 39.168 0 1 0 78.336 0 39.168 39.168 0 1 0-78.336 0Z" fill="#FFEB43"></path><path d="M873.8304 541.87008c-26.05056 0-47.25248-21.20192-47.25248-47.26272 0-26.05056 21.20192-47.25248 47.25248-47.25248 26.0608 0 47.26272 21.20192 47.26272 47.25248-0.00512 26.0608-21.20704 47.26272-47.26272 47.26272z m0-78.336a31.10912 31.10912 0 0 0-31.07328 31.07328 31.11424 31.11424 0 0 0 31.07328 31.08352 31.11424 31.11424 0 0 0 31.08352-31.08352 31.11936 31.11936 0 0 0-31.08352-31.07328z" fill="#6B0306"></path>
              </svg>
            </div>
          </div>

          <div className="pt-12 lg:pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ProjectContent.projects.map((value) => {
              const [[name, content]] = Object.entries(value);

              return <div className="group flex flex-col bg-white hover:bg-gray-200 hover:border-gray-300 border dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-500 transition-all duration-250  shadow-sm rounded-md px-4 md:px-5 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
                <div className="child block group-hover:hidden py-4 md:py-5">
                  <p className="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-500">
                    {content.date}
                  </p>
                  <Text classes="mt-1 font-bold" sizeSm="md" sizeMd="xl" contrastLevel={1} text={name}></Text>
                  <Text classes="mt-2" sizeMd="base" text={content.description}></Text>
                  <div className="mt-2 flex items-center gap-x-5 p-2">
                    {content.svgIcons.map((value) => {
                      return <SvgListed svgName={value.svgName} svgSizeSm={5} redirect={value.redirect}>
                      </SvgListed>
                    })}
                  </div>
                </div>
                <div className="child hidden group-hover:block py-3 md:py-4">
                  <p className="text-gray-800 dark:text-gray-300 text-justify">
                    {content.additional_description}
                  </p>
                  <div className="mt-2 flex gap-x-2">
                    {content.actions.map((value) => {
                      return <Action text={value.text} action={value.video ? () => { setPopup(value.video) } : null} asset={value.asset} link={value.link} color={value.color}></Action>
                    })}
                  </div>
                </div>
              </div>
            })}
            <div className="group flex flex-col bg-white hover:bg-gray-200 hover:border-gray-300 border dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-500 transition-all duration-250  shadow-sm rounded-md px-4 md:px-5 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
              <div className="child block group-hover:hidden py-4 md:py-5">
                <p className="text-sm font-medium uppercase text-fuchsia-500 dark:text-fuchsia-500">
                  2020 - 2022
                </p>
                <Text classes="mt-1 font-bold" sizeSm="md" sizeMd="xl" contrastLevel={1} text="Others"></Text>
                <Text classes="mt-2" sizeMd="base" text="Miscellaneous websites and scripts created to address specific user stories, in my NS and JC life"></Text>

              </div>
              <div className="child hidden group-hover:block py-3 md:py-4">
                <p className="text-gray-800 dark:text-gray-300 text-justify">
                  <Action link="https://github.com/algebananazzzzz/algebananazzzzz.github.io/blob/main/cdoViper/EqualiDuty/README.md" text="EqualityDuty"></Action>
                  &nbsp;to automate distributing and resolving schedule clashes in duty planning
                </p>
                <p className="text-gray-800 dark:text-gray-300 text-justify">
                  <Action link="https://github.com/algebananazzzzz/wordcount_4_PW" text="WordCounter"></Action>
                  &nbsp;to count words in H2 PW
                </p>
                <p className="mt-2 text-gray-800 dark:text-gray-300 text-justify">
                  <Action link="https://algebananazzzzz.github.io/organic-chemistry-mindmap.html" text="Mindmap" color="purple"></Action>
                  &nbsp;to efficiently convey knowledge about H2 Organic Chemistry to my peers
                </p>
                {/* <div className="mt-2 flex gap-x-2">
                  <Link to="/motivations">
                    <span className="inline-flex items-center py-1.5 px-3 rounded-sm text-sm font-medium bg-indigo-500 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-800 text-white">View More</span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <Text classes="pt-5" text=" Upcoming...">
          </Text>
          <div className="pt-5 lg:pt-7 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ProjectContent.upcoming_projects.map((value) => {
              const [[name, content]] = Object.entries(value);
              return <div className="flex flex-col bg-white border shadow-sm rounded-md p-4 md:p-5 dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <p className="text-sm font-medium uppercase text-fuchsia-500 dark:text-fuchsia-500">
                  {content.date}
                </p>
                <Text classes="mt-1 font-bold" sizeSm="md" sizeMd="xl" contrastLevel={1} text={name}></Text>
                <Text classes="mt-2" sizeMd="base" text={content.description}></Text>
              </div>
            })}

          </div>
        </div>
      </body>
    </HomeLayout >
  )
}

export default ProjectPage

export const Head = () => <title>Projects</title>