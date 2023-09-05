import React, { useEffect } from "react"
import Prism from "prismjs"
import DirectoryScreenshot from '../../static/nocturnal_dir.png'
import NavbarPng from '../../static/nocturnal_navbar.png'
import HomepagePng from '../../static/nocturnal_homepage.png'
import SkillsPng from '../../static/nocturnal_skills.png'
import ProjectsPng from '../../static/nocturnal_projects.png'
import ExperiencesPng from '../../static/nocturnal_experiences.png'
import BlogComponent from "../../components/blog"
import DarkPng from '../../static/nocturnal_dark.png'
import LightPng from '../../static/nocturnal_light.png'
import PagesPng from '../../static/nocturnal_pages.png'
import GitPng from '../../static/nocturnal_git.png'
import DemoPng from '../../static/nocturnal_demo.png'
import CopyButton from "../../components/ui/copybutton";


const IndexPage = () => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <BlogComponent>
            <div className="space-y-5 lg:space-y-8">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl dark:text-white">Nocturnal: Create your own online portfolio page!</h2>

                <div className="flex items-center gap-x-5">
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200">
                        Tutorial
                    </span>
                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">August 31, 2023</p>
                </div>

                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">Creating a portfolio website serves as a powerful means to elevate your online presence, and IMO is the <b>simplest</b> yet <b>most effective first step</b> to securing opportunities and impressing stakeholders! This blog is a Step-By-Step guide tailored to help you craft your very own portfolio page using the Nocturnal template (used to create this site) in as little as <b>15 minutes</b>!
                </p>

                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">No prerequisites are necessary! This blog is specifically tailored for novice developers aspiring to take their first steps in the domain of Computing e.g. after JC/NS, before your NUS CS course starts :p
                </p>

                <div className="text-center">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="col-span-2 md:col-span-1 grid gap-3">
                            <figure className="relative w-full">
                                <img alt="" className="w-full h-full object-cover rounded-xl" src={DarkPng} />
                            </figure>
                            <figure className="relative w-full">
                                <img alt="" className="w-full h-full object-cover rounded-xl" src={LightPng} />
                            </figure>
                        </div>
                        <figure className="relative w-full hidden md:block">
                            <img alt="" className="w-full object-cover rounded-xl" src={DemoPng} />
                        </figure>
                    </div>

                    <span className="mt-3 block text-sm text-center text-gray-500 dark:text-gray-400">
                        I named my template "Nocturnal" in spirit of the quiet nights I spent nurturing my passion in this domain.
                    </span>
                </div>

                <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Step 1: Create new Gatsby project</h3>

                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                    In creating Nocturnal, I used the Gatsby Framework to generate production-ready static websites, ReactJS to craft dynamic and interactive components, and TailwindCSS for styling the interface.
                </p>
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                    Analogically, React specifies the blueprint of a house while Tailwind helps in decorating the furniture and rooms. Finally, GatsbyJS acts as a 3D printer translating the design into a tangible, fully-formed house.
                </p>

                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                    While the "heavy lifting" on React or Tailwind is already taken care of, we still need to download GatsbyJS to generate the final production build and preview the development site.
                </p>
                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">1. Install NodeJs and NPM</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        NodeJs allows you to use JavaScript to build applications, frequently used to build modern server applications. Node Package Manager (NPM) is similar to pip in Python, allowing you to download and manage external software packages.
                        Here are <a className="text-blue-600 decoration-2 hover:underline font-medium" href="https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#nodejs" target="blank" >detailed instructions</a> on how to install Node on your operating system.
                    </p>
                </div>
                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">2. Install Git</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Here are <a className="text-blue-600 decoration-2 hover:underline font-medium" href="https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#git" target="blank" >detailed instructions</a> on how to install Git on your operating system.
                    </p>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">3. Install Gatsby Client</h4>

                        <CopyButton type="code" copyData="npm install -g gatsby-cli"></CopyButton>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Open up a terminal/console/command prompt and execute this command
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {`$ npm install -g gatsby-cli`}
                        </code>
                    </pre>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">4. Create new Gatsby Project</h4>
                        <CopyButton type="code" copyData="gatsby new MyPortfolio https://github.com/algebananazzzzz/Nocturnal.git"></CopyButton>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Replace "MyPortfolio" with your desired project name. This clones the codebase from my remote repository into your local machine and installs all required dependencies.
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {`$ gatsby new MyPortfolio https://github.com/algebananazzzzz/Nocturnal.git`}
                        </code>
                    </pre>
                </div>

                <div className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">5. Preview Development Site</h4>
                        <CopyButton type="code" copyData={`cd MyPortfolio\ngatsby develop`}></CopyButton>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        This generates a live preview of the site at <a href="http://localhost:8000" className="text-blue-600 decoration-2 hover:underline font-medium" target="blank">localhost:8000</a>. This allows you to preview site changes as you edit the site content in the next segment.
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {`$ cd MyPortfolio
$ gatsby develop`}
                        </code>
                    </pre>
                </div>

                <div className="space-y-3 pt-5">
                    <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Step 2: Personalise Portfolio Content</h3>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Open the folder (Ctrl-O) containing the code using your preferred code editor e.g. Visual Studio Code. Code editors are essentially text editors (like Microsoft Word), but tailored specifically for viewing and writing code. Here are the <a className="text-blue-600 decoration-2 hover:underline font-medium" href="https://code.visualstudio.com/download" target="blank">instructions</a> to download Visual Studio Code.
                    </p>
                </div>
                <figure>
                    <img alt="" className="w-full object-cover rounded-xl" src={DirectoryScreenshot} />
                    <figcaption className="mt-3 text-sm text-center text-gray-500">
                        You'll see this project directory.
                    </figcaption>
                </figure>
                <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                    Do not be intimidated by the numerous files within the project directory! We will only touch the YAML configuration files within the src/content folder, which Nocturnal will source from for site content. Please follow the instructions outlined in this blog, and seek further clarififications in the comments provided in the YAML files.
                </p>

                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">1. Introduction to SVGs (Scalable Vector Graphics)</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        SVGs, unlike pixel-based formats like JPEG or PNG, use mathematical equations to depict shapes and colors. <a target="blank" className="text-blue-600 decoration-2 hover:underline font-medium" href="https://www.svgrepo.com/">SVGRepo</a> is a library of 500k+ Open-licensed SVG Vectors, which we can utilise to style our website with vibrant vectors!
                    </p>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Let's go to <a target="blank" className="text-blue-600 decoration-2 hover:underline font-medium" href="https://www.svgrepo.com/">SVGRepo</a>, find an SVG of your choice, select "edit vector," and then paste the SVG code into a blank HTML file. You'll come across a generic format that looks like this:
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-html">
                            {`<svg viewbox="0 0 x x" fill="#color" stroke="#color" ...other_fields>
    <d some_value>
        <path d="super long value" fill="#color" stroke="#color"></path>
        <path d="super long value" fill="#color" stroke="#color"></path>
        ...other path elements
    </d>
</svg>
`}
                        </code>
                    </pre>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">The <b>"svg"</b> parent element that configures the viewbox, fill (optional) and stroke (optional) colors.</li>
                        <li className="pl-2">The <b>"d"</b> wrapping element, which we will ignore.</li>
                        <li className="pl-2">The <b>"path"</b> elements, which configures the mathematical equations used to describe the SVG.</li>
                    </ul>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Under <b>`src/content`</b>, open the <b>`svgs.yml`</b> file that defines skill icons (used in project, skills page). Feel free to add icons that represent your frequently used skills!
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-yaml">
                            {`gatsbyjs: 
  viewbox: 0 0 24 24
  fill: "#744C9E" # optional
  stroke: "#ffffff" # optional
  link: https://www.gatsbyjs.com # link only exists in svgs.yml
  path: <path d="M12 0C5.32267 0 0 5.31733 0 12C0 18.6827 5.31733 24 12 24C18.6827 24 24 18.6773 24 12C24 5.32267 18.6827 0 12 0ZM2.608 12.1013L11.8987 21.3867C6.784 21.392 2.608 17.216 2.608 12.1013ZM14.0853 21.184L2.82133 9.90933C3.76 5.73333 7.51467 2.60267 12 2.60267C15.008 2.61333 17.8347 4.04267 19.616 6.464L18.2613 7.61067C16.8267 5.50933 14.4427 4.256 11.8987 4.26667C8.64533 4.24533 5.74933 6.30933 4.69333 9.38133L14.5067 19.2C16.9067 18.3627 18.784 16.2773 19.3067 13.7707H15.2373V12H21.392C21.392 16.4853 18.2613 20.2453 14.0853 21.184Z" ></path>
reactjs:
  viewbox: 0 0 32 32
  fill: "#00d8ff" # optional
  link: https://www.react.dev
  path: <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" ></path>
...other SVGs
`}
                        </code>
                    </pre>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Similarly, feel free to edit SVGs within the content files by adjusting the "viewbox," "fill," "stroke," and "path" fields as you come across them!
                    </p>
                </div>


                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">2. Edit NavBar Content</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Under <b>`src/content`</b>, open the <b>`navbar.yml`</b> file. Here are the fields you can edit:
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">The "title" field that configures the title (highlighted in pink). You can replace it by your name, alias etc.</li>
                        <li className="pl-2">The "links" section, which configures the links associated with the contact buttons (highlighted in blue)</li>
                        <li className="pl-2">The "nav" section, which configures the name and link for the navigation buttons (highlighted in green). The "active_color" field allows you to specify the color when the link is active (<a target="blank" className="text-blue-600 decoration-2 hover:underline font-medium" href="https://tailwindcss.com/docs/customizing-colors">View accepted colors</a>). To specify an external link such as a resume page, omit the "active_color" field.</li>
                    </ul>
                    <figure>
                        <img alt="" className="w-full object-cover rounded-xl" src={NavbarPng} />
                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                            Here is a reference for the Navbar.
                        </figcaption>
                    </figure>
                </div>

                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">3. Edit Page Introduction</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Under <b>`src/content`</b>, open the <b>`index.yml`</b> file, which configures the homepage. Let's start by editing the page description:
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">The "intro" section configures the title (highlighted in pink) and short paragraph description(s) (highlighted in blue). I suggest replacing it with something that reflects your personality!</li>
                        <li className="pl-2">The "endeavour" section is optional and configures (highlighted in green). We will touch on how to edit the SVG (scalable vector graphic) later.</li>
                    </ul>
                    <figure>
                        <img alt="" className="w-full object-cover rounded-xl" src={HomepagePng} />
                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                            Here's a reference
                        </figcaption>
                    </figure>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Likewise, within each of the following content files, you can edit the "intro" section using the same format as desired.
                    </p>
                </div>

                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">4. Edit the Skills page</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Under <b>`src/content`</b>, open the <b>`skills.yml`</b> file. Here are the fields you can edit:
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">As previously mentioned, each content file contains both an "intro" section and an optional "endeavour" section for your customization.</li>
                        <li className="pl-2">The "professional_certificates" section (highlighted in pink).</li>
                        <li className="pl-2">The "skill_icons" section (highlighted in blue) where you specify an "svgName" corresponding to an SVG in `svgs.yml` (e.g., gatsbyjs).</li>
                        <li className="pl-2">The "developer_skills" and "devops_skills" section (highlighted in green).</li>
                    </ul>
                    <figure>
                        <img alt="" className="w-full object-cover rounded-xl" src={SkillsPng} />
                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                            Here's a reference
                        </figcaption>
                    </figure>

                </div>
                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">5. Edit the Projects page</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Under <b>`src/content`</b>, open the <b>`projects.yml`</b> file. Here are the fields you can edit:
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">As previously mentioned, each content file contains both an "intro" section and an optional "endeavour" section for your customization.</li>
                        <li className="pl-2">The <b>"projects"</b> section (highlighted in pink):
                            <ul className="list-disc list-outside space-y-1 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                                <li className="pl-2">The <b>"svgIcons"</b> field specifies skill icons, where you specify an <b>"svgName"</b> corresponding to an SVG in <b>`svgs.yml`</b> (e.g., gatsbyjs).</li>
                                <li className="pl-2">The <b>"additional_description"</b> configures extended project descriptions (highlighted in blue) displayed on hover.</li>
                                <li className="pl-2">The "action" field configures action buttons (highlighted in green) like repository links or demo videos.<br />
                                    - To incorporate a link, specify a <b>"link"</b> attribute.<br />
                                    - To incorporate a demo video, move the video file to <b>`src/static`</b> and specify the path in the <b>"video"</b> attribute.
                                </li>
                            </ul>
                        </li>
                        <li className="pl-2">The "future_projects" section (optional) configures the future projects (highlighted in red).</li>
                    </ul>
                    <figure>
                        <img alt="" className="w-full object-cover rounded-xl" src={ProjectsPng} />
                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                            Here's a reference
                        </figcaption>
                    </figure>

                </div>
                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">6. Edit the Experiences page</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Under <b>`src/content`</b>, open the <b>`experiences.yml`</b> file. Here are the fields you can edit:
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">As previously mentioned, each content file contains both an "intro" section and an optional "endeavour" section for your customization.</li>
                        <li className="pl-2">The "experiences" section. The "action" field configures action buttons like certificate links or recommendation letters.<br />
                            - To incorporate a link, specify a <b>"link"</b> attribute.<br />
                            - To incorporate an asset, move the asset to <b>`src/static`</b> and specify the path in the <b>"asset"</b> attribute.
                        </li>
                    </ul>
                    <figure>
                        <img alt="" className="w-full object-cover rounded-xl" src={ExperiencesPng} />
                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                            Here's a reference
                        </figcaption>
                    </figure>

                </div>
                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">7. Edit the Homepage</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Under <b>`src/content`</b>, return to <b>`index.yml`</b> file. Follow these steps to populate the homepage, selecting the most relevant and impactful professional certificates, projects, and experiences to display:
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">Copy the desired professional certificates and skill icons you wish to display from <b>`skills.yml`</b>, and paste it under the "experiences" section.</li>
                        <li className="pl-2">Copy the projects you wish to display from <b>`projects.yml`</b>, and paste it under the "projects" section.</li>
                        <li className="pl-2">Copy the experiences you wish to display from <b>`experiences.yml`</b>, and paste it under the "experiences" section.</li>
                    </ul>
                </div>

                <div className="space-y-3 pt-5">
                    <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Step 3: Using Gatsby to Build Static Pages</h3>


                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        With the site content configuration finalized, it's time to initiate the Gatsby build process to generate the production-ready static pages, generated in the <b>`public`</b> folder.
                    </p>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">1. Gatsby Build</h4>

                        <CopyButton type="code" copyData="gatsby build"></CopyButton>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        In the same terminal/console/command prompt as before, execute this command
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {`$ gatsby build`}
                        </code>
                    </pre>
                </div>
                <div className="space-y-3">
                    <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Step 4: Deploy to Github Pages</h3>

                    {/* <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">As a developer, Git and GitHub is the second thing I learnt after printing "Hello World". In a nutshell, Git is <b>local</b> tool to manage code changes (i.e. what changed) and resolving conflicts (e.g. when code changes remotely), while GitHub allows you to network and collaborate with other developers, through <b>remote</b> central repositories.
                                        </p> */}
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">Git and GitHub are very important developer tools to manage code. For today, we will focus on two features of GitHub: the ability to house and showcase code in public repositories, and the ability to host static websites using Github Pages.</p>

                </div>
                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">1. Create a Github repository</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Create a Github account if you haven't done so. Next, create a GitHub Repository with the name "your_github_name.github.io", replacing "your_github_name". Finally, copy the command highlighted in pink, which we will require later.
                    </p>
                    <figure>
                        <img alt="" className="w-full object-cover rounded-xl" src={GitPng} />
                    </figure>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">2. Initialise Git and add changes</h4>

                        <CopyButton type="code" copyData={'cd public/\ngit init\ngit add -A\ngit commit -m "Initial Commit"'}></CopyButton>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        In the same terminal/console/command prompt as before, execute this command
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {'$ cd public/\n$ git init\n$ git add -A\n$ git commit -m "Initial Commit"'}
                        </code>
                    </pre>
                </div>
                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">3. Push to GitHub</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Execute the code you copied previously to set remote origin to the repository, then push the code into the remote repository
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {'$ git remote add origin...\n$ git push --set-upstream origin'}
                        </code>
                    </pre>
                </div>
                <div className="space-y-3">
                    <h4 className="text-2xl pt-4 lg:pt-7 font-semibold dark:text-white">4. Enable Github Pages</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        In your repository page, navigate to Settings, then Pages. In the "Branch" section, choose "main" as shown in the image. Finally, click on "Save."
                    </p>
                    <figure>
                        <img alt="" className="w-full object-cover rounded-xl" src={PagesPng} />
                    </figure>
                </div>
                <div className="space-y-3">
                    <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Congrats! You've created your own Portfolio Page!</h3>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Give a minute or so for GitHub Pages to complete the deployment process. Your customized portfolio site should then be accessible at the following URL:<br />https://your_github_name.github.io/</p>
                </div>
            </div>
        </BlogComponent >
    )
}

export default IndexPage

export const Head = () => <title>Algebananazzzzz</title>