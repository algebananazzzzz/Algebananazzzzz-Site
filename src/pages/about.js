import React from "react"
import SL2_PDF from '../static/reccltr_sl2.pdf'
import HomeLayout from "../components/layout/home-layout"

const IndexPage = () => {
  return (
    <HomeLayout>
      <body class="min-h-screen dark:bg-slate-900">
        <div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
            <div className="lg:col-span-4">
              <h1 class="flex-none font-medium text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
                Exploration
              </h1>
              <p class="mt-5 text-lg text-gray-700 dark:text-gray-400 text-justify">
                Progress in the realm of technology thrives on a journey of constant learning and perpetual inquiry.
                As someone who's naturally introspective, I highly value reflecting on the journey that have molded me into the person I am today
              </p>
              <p class="mt-5 text-lg text-gray-700 dark:text-gray-400 text-justify">
                Explore the motivations behind the projects I developed for my community and the driving force behind my pursuit of specific skills here.
              </p>
            </div>
            <div class="lg:col-span-3 mt-10 lg:mt-0 hidden lg:block">
              <svg viewBox="0 0 1024 1024" fill="#000000">
                <path d="M536.89344 516.87424C297.6768 473.99936 33.47456 483.98336 15.02208 586.95168c-18.45248 102.94784 225.8432 204.06784 465.05472 246.9376 239.21152 42.86976 503.41376 32.89088 521.86624-70.06208 18.45248-102.9632-225.83808-204.0832-465.0496-246.95296z m444.71808 243.31264c-11.84256 66.08896-227.4304 103.73632-498.22208 55.20384-270.7968-48.53248-459.88864-158.70976-448.04096-224.79872 11.84256-66.08896 227.43552-103.7568 498.2272-55.22432 270.79168 48.53248 459.88352 158.73024 448.03584 224.8192z" fill="#6B0306"></path><path d="M314.71104 345.87648c12.42112-19.82976 26.97216-38.7072 44.05248-56.08448 126.81728-128.9984 334.19776-130.7648 463.19616-3.94752 71.69536 70.48192 103.94624 165.84704 96.80384 258.816l19.54816 6.43072c9.10848-100.15232-25.088-203.43296-102.4-279.43936-136.83712-134.52288-356.8128-132.64896-491.33568 4.18816a348.19584 348.19584 0 0 0-49.40288 63.60064l19.53792 6.43584z" fill="#6B0204"></path><path d="M295.53152 360.49408m-76.56448 0a76.56448 76.56448 0 1 0 153.12896 0 76.56448 76.56448 0 1 0-153.12896 0Z" fill="#FFEC43"></path><path d="M295.53152 444.29824c-46.21312 0-83.80416-37.59616-83.80416-83.80928S249.3184 276.6848 295.53152 276.6848s83.80416 37.59616 83.80416 83.80928-37.59104 83.80416-83.80416 83.80416z m0-153.13408c-38.22592 0-69.33504 31.104-69.33504 69.3248s31.10912 69.3248 69.33504 69.3248 69.33504-31.104 69.33504-69.3248-31.10912-69.3248-69.33504-69.3248z" fill="#6B0204"></path><path d="M317.952 294.63552c22.45632 11.40736 31.95904 38.08256 28.96896 64.65024-6.528 57.98912-75.73504 64.24576-82.67264 61.93664a69.64224 69.64224 0 0 0 31.62112 7.55712c38.35904 0 69.45792-30.82752 69.45792-68.85888-0.00512-30.37184-19.84512-56.13568-47.37536-65.28512z" fill="#FFC700"></path><path d="M922.96704 527.70304m-37.90848 0a37.90848 37.90848 0 1 0 75.81696 0 37.90848 37.90848 0 1 0-75.81696 0Z" fill="#FFC700"></path><path d="M922.96704 572.85632c-24.89856 0-45.14304-20.25472-45.14304-45.15328 0-24.89344 20.24448-45.14816 45.14304-45.14816 24.89856 0 45.14304 20.25472 45.14304 45.14816 0 24.89856-20.24448 45.15328-45.14304 45.15328z m0-75.82208a30.70464 30.70464 0 0 0-30.67392 30.66368 30.70976 30.70976 0 0 0 30.67392 30.67392 30.70976 30.70976 0 0 0 30.67392-30.67392 30.70464 30.70464 0 0 0-30.67392-30.66368z" fill="#6C0000"></path><path d="M566.5024 838.17984m-49.75616 0a49.75616 49.75616 0 1 0 99.51232 0 49.75616 49.75616 0 1 0-99.51232 0Z" fill="#6C0000"></path><path d="M769.64864 507.07456c-4.12672-11.73504-14.53056-20.1728-27.13088-22.02112l-82.85184-12.12928-35.97824-73.56928c-5.60128-11.46368-17.65376-18.85696-30.73024-18.85696-13.03552 0-25.10848 7.39328-30.73024 18.85696l-35.97824 73.56928-82.83136 12.14976c-12.6208 1.80736-23.04 10.24512-27.17184 22.02112-4.1472 11.91424-1.08032 24.88832 8.02304 33.83808l60.83072 59.86816-14.09536 82.92864c-2.1248 12.42624 3.42016 25.20576 14.13632 32.5376 10.26048 6.94272 24.6528 7.72608 35.74272 1.88928l72.09472-38.24128 72.13568 38.27712a35.00032 35.00032 0 0 0 16.26112 4.02944 34.74432 34.74432 0 0 0 19.50208-5.95968c10.65472-7.31136 16.19968-20.07552 14.07488-32.49664l-14.09536-82.92864 60.83072-59.86816c9.08288-8.96512 12.12928-21.9392 7.9616-33.8944z" fill="#FFC700"></path><path d="M681.37472 729.46176a42.19904 42.19904 0 0 1-19.64032-4.86912l-68.75648-36.48512-68.7104 36.43904c-13.13792 6.92224-31.01184 5.94432-43.1872-2.28352-13.06624-8.94976-19.81952-24.54528-17.2288-39.7568l13.48096-79.19616-58.15296-57.22112c-11.1104-10.9312-14.85824-26.78272-9.7792-41.37472 5.03296-14.34624 17.67424-24.61184 32.98304-26.8032l79.03232-11.60192 34.29888-70.13888c6.8352-13.92128 21.44768-22.912 37.23264-22.912 15.82592 0 30.4384 8.99584 37.23264 22.91712l34.29888 70.13376 79.0784 11.57632c15.2832 2.24256 27.88864 12.50816 32.91136 26.78784 5.10464 14.62272 1.37728 30.49984-9.70752 41.4464L708.608 603.3408l13.47072 79.2064c2.60608 15.17568-4.11136 30.76096-17.11104 39.68a42.05568 42.05568 0 0 1-23.59296 7.23456z m-88.3968-57.74336l75.53024 40.07936c8.7808 4.64896 20.00896 4.06528 28.32896-1.54112 8.2944-5.69856 12.63104-15.62624 10.97216-25.26208l-14.71488-86.66624 63.5136-62.5152c7.07072-6.96832 9.45152-17.07008 6.21056-26.34752-3.23072-9.17504-11.40736-15.78496-21.34016-17.24416l-86.64064-12.68224-37.64736-76.99968c-4.39296-8.99072-13.90592-14.79168-24.22784-14.79168-10.31168 0-19.81952 5.8112-24.22784 14.80192l-37.64736 76.99456-86.62016 12.70784c-9.96864 1.42336-18.15552 8.0384-21.38624 17.24928-3.21536 9.23648-0.81408 19.31264 6.26688 26.27584l63.52384 62.52032-14.73024 86.65088c-1.64864 9.65632 2.69824 19.6096 11.08992 25.35424 7.78752 5.27872 19.77344 5.92896 28.27776 1.45408l75.4688-40.0384z" fill="#6C0000"></path>
              </svg>
            </div>
          </div>
          {/* <div class="flex flex-col bg-black border shadow-sm rounded-sm p-4 md:p-5 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-gray-400">
            <p class="text-lg md:text-xl text-white inline-flex items-center">
              <svg className="w-7 mr-2" viewBox="0 0 16 16" fill="#ffffff">
                <path d="M3.23 3.174a.75.75 0 00-.96 1.152L6.078 7.5 2.27 10.674a.75.75 0 10.96 1.152l4.5-3.75a.75.75 0 000-1.152l-4.5-3.75zM7.75 12a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z"></path>
              </svg>
              whoami
            </p>
            <p class="text-lg md:text-xl text-white">

            </p>
          </div> */}
          <ol class="lg:max-w-5xl text-justify relative border-l-2 border-solid border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <div className="inline-flex items-center">
                <span class="absolute flex items-center text-center justify-center w-7 h-7 bg-fuchsia-400 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-fuchsia-900">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" ></path>
                  </svg>
                </span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">The Direction Forward</h3>
              </div>
              <p class="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-400">
                Present - Future
              </p>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                As a Viper (Medic) within 1CDO, I developed numerous technical solutions to support and enhance our formation's operations
              </p>
              <ul class="ml-6 mt-2 text-md text-gray-700 dark:text-gray-400 list-disc">
                <li><a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/algebananazzzzz.github.io/tree/main/cdoViper/EqualiDuty" target="blank">EqualityDuty</a>, a script automating the equitable allocation of duties while managing conflicts arising from personal schedules</li>
                <li>A quizbot used by my formation's medics for ATEC Stage 1 preparation, made with my  <a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/python-telegram-bot-quiz" target="blank">Python-Telegram-Bot-Quiz</a> framework</li>
                <li>Automated medical item checks via a <a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/algebananazzzzz.github.io/tree/main/cdoViper" target="blank">script</a> that selects "Yes" in a FormSG form—a tool used daily in my medical center</li>
              </ul>
              <div className="mt-4 flex gap-x-2">
                <a href="https://algebananazzzzz.github.io/eunoiashining/tutorial/index.html" target="blank" rel="noreferrer">
                  <span class="inline-flex items-center py-1.5 px-3 rounded-sm text-sm font-medium bg-indigo-500 hover:bg-indigo-700 text-white">Tutorial</span>
                </a>
              </div>
            </li>
            <li class="mb-10 ml-6">
              <div className="inline-flex items-center">
                <span class="absolute flex items-center text-center justify-center w-7 h-7 bg-blue-400 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" ></path>
                  </svg>
                </span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">National Service</h3>
              </div>
              <p class="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-400">
                2022 - Present
              </p>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                As a Viper (Medic) within 1CDO, I developed numerous technical solutions to support and enhance our formation's operations
              </p>
              <ul class="ml-6 mt-2 text-md text-gray-700 dark:text-gray-400 list-disc">
                <li><a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/algebananazzzzz.github.io/tree/main/cdoViper/EqualiDuty" target="blank">EqualityDuty</a>, a script automating the equitable allocation of duties while managing conflicts arising from personal schedules</li>
                <li>A quizbot used by my formation's medics for ATEC Stage 1 preparation, made with my  <a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/python-telegram-bot-quiz" target="blank">Python-Telegram-Bot-Quiz</a> framework</li>
                <li>Automated medical item checks via a <a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/algebananazzzzz.github.io/tree/main/cdoViper" target="blank">script</a> that selects "Yes" in a FormSG form—a tool used daily in my medical center</li>
              </ul>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                Through these solution, I've come to realize that even modest solutions can profoundly benefit people.
              </p>
              <div className="mt-4 flex gap-x-2">
                <a href="https://algebananazzzzz.github.io/eunoiashining/tutorial/index.html" target="blank" rel="noreferrer">
                  <span class="inline-flex items-center py-1.5 px-3 rounded-sm text-sm font-medium bg-indigo-500 hover:bg-indigo-700 text-white">Tutorial</span>
                </a>
              </div>
            </li>
            <li class="ml-6">
              <div className="inline-flex items-center">
                <span class="absolute flex items-center text-center justify-center w-7 h-7 bg-blue-400 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" ></path>
                  </svg>
                </span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Junior College</h3>
              </div>
              <p class="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-400">
                2020 - 2022
              </p>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                As a Viper (Medic) within 1CDO, I developed numerous technical solutions to support and enhance our formation's operations
              </p>
              <ul class="ml-6 mt-2 text-md text-gray-700 dark:text-gray-400 list-disc">
                <li><a className='text-blue-500 font-bold' href="https://algebananazzzzz.github.io/organic-chemistry-mindmap.html" target="blank">Chemistry Mindmap site</a> summarising a large amount of 69 organic chemistry reactions to memorise for A level Chemistry </li>
                <li>A script to automate the mundane task of <a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/wordcount_4_PW" target="blank">counting words for PW</a> while excluding headers and citations in Google Docs</li>
                <li>Simple interface to display a <a className='text-blue-500 font-bold' href="https://algebananazzzzz.github.io/alevels.html" target="blank">countdown to A Levels</a>, created for my peers to mentally prepare themselves and plan revisions</li>
              </ul>
              <div className="mt-4 flex gap-x-2">
                <a href={SL2_PDF} target="blank" rel="noreferrer">
                  <span class="inline-flex items-center py-1.5 px-3 rounded-sm text-sm font-medium bg-indigo-500 hover:bg-indigo-700 text-white">Reccomendation letter</span>
                </a>
              </div>
            </li>
          </ol>
        </div>
      </body >
    </HomeLayout >
  )
}

export default IndexPage

export const Head = () => <title>Algebananazzzzz</title>