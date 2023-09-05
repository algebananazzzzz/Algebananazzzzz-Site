import React from "react"
import HomeLayout from "../components/layout/home-layout"
import PageContent from '../content/skills.yml'
import parse from 'html-react-parser';
import Text from "../components/ui/text"
import Header from "../components/ui/header"
import Svg from "../components/ui/svg"
import SvgListed from "../components/ui/svgs";

const SkillsPage = () => {

  return (
    <HomeLayout>
      <body className="min-h-screen dark:bg-slate-900">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="pt-5 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
            <div className="lg:col-span-4">
              <h1 className="flex-none font-medium text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
                Discoveries
              </h1>
              {PageContent.intro.text.map((value) => {
                return <Text classes="mt-5 text-justify" text={value}>
                </Text>
              })}
              <div className="flex flex-col space-y-4 mt-7">
                {PageContent.endeavourList.map((value) => {
                  return <Text svgFill={value.svg.fill} contrastLevel={2} svgSizeSm={value.svg.sizeSm} svgSizeMd={value.svg.sizeMd} svgViewBox={value.svg.viewbox} text={value.text} link={value.link}>
                    {parse(value.svg.path)}
                  </Text>
                })}
              </div>
            </div>
            <div className="lg:col-span-3 mt-10 lg:mt-0 hidden lg:block">
              <svg viewBox="0 0 1024 1024" fill="#000000">
                <path d="M504.82176 564.62336m-422.61504 0a422.61504 422.61504 0 1 0 845.23008 0 422.61504 422.61504 0 1 0-845.23008 0Z" fill="#cbd5e1"></path><path d="M504.82176 995.97312c-237.8496 0-431.33952-193.48992-431.33952-431.33952s193.48992-431.33952 431.33952-431.33952 431.33952 193.48992 431.33952 431.33952-193.48992 431.33952-431.33952 431.33952z m0-845.23008c-228.21376 0-413.88544 185.67168-413.88544 413.88544s185.67168 413.88544 413.88544 413.88544 413.88544-185.67168 413.88544-413.88544-185.67168-413.88544-413.88544-413.88544z" fill="#6C0000"></path><path d="M504.82176 974.65856c137.76384 0 259.75808-67.28192 335.104-170.71616l-195.54816-465.06496H365.2608L169.71264 803.9424c75.35104 103.43424 197.34528 170.71616 335.10912 170.71616z" fill="#FFEC43"></path><path d="M504.82176 983.39328c-134.73792 0-262.656-65.15712-342.17472-174.30016l-2.89792-3.9936 1.92-4.53632 197.79584-470.41536h290.7136l199.71584 474.95168-2.89792 3.9936c-79.51872 109.13792-207.4368 174.30016-342.17472 174.30016z m-325.13024-180.63872c76.416 102.272 197.5808 163.18464 325.13024 163.18464s248.71424-60.90752 325.13024-163.18464l-191.37024-455.14752h-267.52l-191.37024 455.14752z" fill="#6B0204"></path><path d="M504.82176 974.65856c98.64192 0 189.18912-34.52416 260.34688-92.07296L615.79264 344.1152H393.85088L244.47488 882.5856c71.15776 57.5488 161.70496 92.07296 260.34688 92.07296z" fill="#FFEC43"></path><path d="M504.82176 983.39328c-96.4608 0-190.8736-33.38752-265.84064-94.01344l-4.46464-3.6096L387.21024 335.39072h235.22304l152.69376 550.3744-4.46464 3.6096c-74.95168 60.62592-169.36448 94.01856-265.84064 94.01856z m-250.38848-104.0384c71.1424 55.86432 159.82592 86.5792 250.38848 86.5792 90.5728 0 179.26144-30.72 250.38848-86.5792L609.15712 352.84992H400.4864L254.43328 879.35488z" fill="#6B0204"></path><path d="M507.62752 344.1152H432.44032L331.01824 933.38624c0.3584 1.19808 0.73216 2.36544 1.09056 3.55328a412.72832 412.72832 0 0 0 172.71296 37.72416 412.672 412.672 0 0 0 172.71296-37.72416c0.3584-1.18784 0.73216-2.3552 1.09056-3.55328L577.2032 344.1152H507.62752z" fill="#FFEC43"></path><path d="M504.82176 983.39328c-61.3632 0-120.69376-12.94848-176.34816-38.52288l-3.55328-1.61792-2.85696-9.33888 0.34304-2.00192L425.07776 335.39072h159.488l103.0144 598.51776-2.57536 8.3712-3.84 2.5856c-55.64928 25.5744-114.97984 38.528-176.34304 38.528z m-164.5312-52.34176c52.03968 23.1424 107.36128 34.88256 164.5312 34.88256s112.49152-11.74016 164.5312-34.88256l-99.51232-578.2016H439.80288l-99.51232 578.2016z" fill="#6B0204"></path><path d="M504.82176 987.2384c101.49376 0 194.60608-35.80928 267.4688-95.44192-59.4688-83.59424-157.06112-138.17856-267.4688-138.17856-110.40256 0-207.99488 54.58432-267.4688 138.17856 72.8576 59.63264 165.97504 95.44192 267.4688 95.44192z" fill="#FFC700"></path><path d="M504.82176 994.51904c-98.97472 0-195.59424-34.4832-272.06656-97.1008l-5.2736-4.30592 3.95264-5.54496c62.91456-88.44288 165.11488-141.2352 273.38752-141.2352s210.47296 52.79232 273.38752 141.2352l3.95264 5.54496-5.2736 4.30592c-76.47232 62.6176-173.09184 97.1008-272.06656 97.1008zM247.32672 890.4704c73.00608 57.76896 164.17792 89.49248 257.49504 89.49248s184.48896-31.72864 257.49504-89.49248c-60.4672-81.26464-156.20608-129.58208-257.49504-129.58208s-197.02784 48.31744-257.49504 129.58208z" fill="#6C0000"></path><path d="M719.3856 249.81504c-1.58208-117.18144-97.00864-211.69664-214.56384-211.69664-117.5552 0-212.98176 94.52032-214.56384 211.69664h429.12768z" fill="#00DFD5"></path><path d="M728.24832 258.54976H281.3952l0.128-8.84224c1.64864-121.49248 101.82144-220.32384 223.29856-220.32384 121.49248 0 221.66016 98.83136 223.29856 220.32384l0.128 8.84224z m-428.9536-17.4592h411.05408c-6.11328-107.904-96.50176-194.25792-205.52704-194.25792-109.00992 0.00512-199.41376 86.35904-205.52704 194.25792z" fill="#6C0000"></path><path d="M290.18112 248.71424h429.27616v35.28192H290.18112z" fill="#FFBD00"></path><path d="M728.18688 292.72064H281.45664v-52.736h446.73536v52.736z m-429.27616-17.45408h411.82208v-17.82272H298.91072v17.82272z" fill="#6C0000"></path><path d="M742.98368 283.904H266.65984c-26.79296 0-48.512 21.71904-48.512 48.512s21.71904 48.512 48.512 48.512h43.5968c-0.00512 0.15872-0.04608 0.30208-0.04608 0.4608v16.5376a18.7392 18.7392 0 1 0 37.48864 0v-16.5376c0-0.15872-0.04096-0.30208-0.04608-0.4608h314.33216c-0.00512 0.15872-0.04608 0.30208-0.04608 0.4608v16.5376a18.7392 18.7392 0 1 0 37.48864 0v-16.5376c0-0.15872-0.04096-0.30208-0.04608-0.4608h43.5968c26.79296 0 48.512-21.71904 48.512-48.512s-21.71392-48.512-48.50688-48.512z" fill="#5EB1BE"></path><path d="M680.68352 425.40032a27.47904 27.47904 0 0 1-27.46368-27.46368v-8.27392H356.39296l0.04096 8.27392a27.4944 27.4944 0 0 1-27.47904 27.46368 27.4944 27.4944 0 0 1-27.47904-27.46368v-8.27392H266.6496c-31.56992 0-57.2416-25.67168-57.2416-57.2416s25.67168-57.2416 57.2416-57.2416h476.32896c31.56992 0 57.2416 25.67168 57.2416 57.2416s-25.67168 57.2416-57.2416 57.2416h-34.8416l0.01536 8.27392a27.47904 27.47904 0 0 1-27.4688 27.46368zM338.0992 371.8656l9.55392 0.34304H670.72l-0.04096 25.728c0 5.51424 4.49024 10.00448 10.00448 10.00448 5.5296 0 10.01984-4.49024 10.01984-10.00448v-25.27232l8.68352-0.45568h43.5968c21.93408 0 39.78752-17.85344 39.78752-39.78752s-17.85344-39.78752-39.78752-39.78752H266.65472c-21.93408 0-39.78752 17.85344-39.78752 39.78752s17.85344 39.78752 39.78752 39.78752H318.976l-0.04096 25.728a10.01984 10.01984 0 0 0 20.03968 0V381.3888l-0.87552-9.5232z" fill="#6C0000"></path><path d="M407.1424 333.60896m-19.47136 0a19.47136 19.47136 0 1 0 38.94272 0 19.47136 19.47136 0 1 0-38.94272 0Z" fill="#FFFFFF"></path><path d="M407.13728 360.36608a26.7776 26.7776 0 0 1-26.752-26.752 26.7776 26.7776 0 0 1 26.752-26.752 26.7776 26.7776 0 0 1 26.752 26.752 26.7776 26.7776 0 0 1-26.752 26.752z m0-38.94784a12.2112 12.2112 0 0 0-12.19584 12.19584c0 6.72256 5.47328 12.19584 12.19584 12.19584s12.19584-5.47328 12.19584-12.19584a12.2112 12.2112 0 0 0-12.19584-12.19584z" fill="#6C0000"></path><path d="M504.82176 333.60896m-19.47136 0a19.47136 19.47136 0 1 0 38.94272 0 19.47136 19.47136 0 1 0-38.94272 0Z" fill="#FFFFFF"></path><path d="M504.82176 360.36608a26.7776 26.7776 0 0 1-26.752-26.752 26.7776 26.7776 0 0 1 26.752-26.752 26.7776 26.7776 0 0 1 26.752 26.752 26.7776 26.7776 0 0 1-26.752 26.752z m0-38.94784a12.2112 12.2112 0 0 0-12.19584 12.19584c0 6.72256 5.47328 12.19584 12.19584 12.19584s12.19584-5.47328 12.19584-12.19584a12.2112 12.2112 0 0 0-12.19584-12.19584z" fill="#6C0000"></path><path d="M602.50112 333.60896m-19.47136 0a19.47136 19.47136 0 1 0 38.94272 0 19.47136 19.47136 0 1 0-38.94272 0Z" fill="#FFFFFF"></path><path d="M602.50624 360.36608a26.7776 26.7776 0 0 1-26.752-26.752 26.7776 26.7776 0 0 1 26.752-26.752 26.7776 26.7776 0 0 1 26.752 26.752 26.7776 26.7776 0 0 1-26.752 26.752z m0-38.94784a12.2112 12.2112 0 0 0-12.19584 12.19584 12.2112 12.2112 0 0 0 12.19584 12.19584 12.2112 12.2112 0 0 0 12.19584-12.19584 12.2112 12.2112 0 0 0-12.19584-12.19584z" fill="#6C0000"></path>
              </svg>
            </div>
          </div>
          <Header classes="pt-12 lg:pt-0" text="Professional Certificates" >
          </Header>
          <div className="mt-5 flex flex-col space-y-4 text-gray-700 dark:text-gray-300 ">
            {PageContent.certificates.map((value) => {
              return <Text svgFill={value.svg.fill} contrastLevel={2} svgSizeSm={value.svg.sizeSm} svgSizeMd={value.svg.sizeMd} svgViewBox={value.svg.viewbox} text={value.text} link={value.link}>
                {parse(value.svg.path)}
              </Text>
            })}
          </div>
          <div className="pt-12 lg:pt-24 pb-10">
            <Header text="Skills" >
            </Header>
            <div className="mt-2 flex items-center gap-x-1 md:gap-x-2">
              {PageContent.skillicons.map((value) => {
                return <SvgListed svgName={value.svgName} svgSizeSm={value.sizeSm} svgSizeMd={value.sizeMd} redirect={value.redirect}>
                </SvgListed>
              })}

            </div>
            <ul className="list-none list-inside mt-5 space-y-3 text-gray-700 dark:text-gray-400">
              {PageContent.developerskills.map((value) => {
                return <li className="flex items-center">
                  <Svg svgViewBox="0 0 24 24" svgFill="none" svgStroke="currentColor" >
                    <path d="M16 11L15.5 19M16 11C16 6.5 14.5 4 11.9999 2C9.5 4 8 6.5 8 11M16 11L18 12.5C19.259 13.4443 20 14.9262 20 16.5V19.4612C20 20.1849 19.2551 20.669 18.5939 20.375L15.5 19M8 11L8.5 19M8 11L6 12.5C4.74097 13.4443 4 14.9262 4 16.5V19.4612C4 20.1849 4.74485 20.669 5.40614 20.375L8.5 19M8.5 19H15.5M12 9V11" stroke-width="2"></path>
                  </Svg>
                  <Text sizeMd="lg" classes="ml-2" text={value} contrastLevel={2} >
                  </Text>
                </li>
              })}
            </ul>
            <ul className="mt-10 list-none list-inside space-y-3 text-gray-700 dark:text-gray-400">
              {PageContent.devopsskills.map((value) => {
                return <li className="flex items-center">
                  <Svg svgViewBox="0 0 24 24" svgFill="currentColor" svgStroke="currentColor" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6291 2.92377L1.6359 9.03126C1.27381 9.23242 1.14336 9.68902 1.34452 10.0511C1.54569 10.4132 2.00229 10.5436 2.36438 10.3425L11.0499 5.5171C10.5132 7.32327 10.8481 9.33324 12.0545 10.8851L4.46981 18.4697C4.17691 18.7626 4.17691 19.2374 4.4698 19.5303C4.7627 19.8232 5.23757 19.8232 5.53046 19.5303L13.1152 11.9457C14.667 13.152 16.6769 13.4868 18.4831 12.9502L13.6577 21.6358C13.4566 21.9979 13.587 22.4545 13.9491 22.6556C14.3112 22.8568 14.7678 22.7263 14.969 22.3642L21.0764 11.3709C23.3331 9.03243 23.3078 5.30714 21.0004 2.99975C18.693 0.692357 14.9677 0.667032 12.6291 2.92377ZM20.2732 10.0152C21.6788 8.25856 21.5676 5.6883 19.9397 4.06041C18.3118 2.43252 15.7415 2.32135 13.9849 3.72687C14.0696 3.89872 14.1859 4.11732 14.3409 4.37566C14.772 5.09432 15.504 6.12295 16.6907 7.30957C17.8773 8.49619 18.9059 9.22816 19.6245 9.65927C19.8828 9.81424 20.1014 9.93051 20.2732 10.0152ZM19.0646 11.0697C18.9966 11.0307 18.9259 10.9894 18.8529 10.9456C18.1501 10.524 17.2231 9.87143 16.1698 8.89115L14.1871 10.8738C15.6345 11.9031 17.557 11.9684 19.0646 11.0697ZM13.1264 9.81314C12.097 8.36572 12.0316 6.44317 12.9304 4.93544C12.9694 5.00355 13.0107 5.07423 13.0546 5.14735C13.4762 5.85016 14.1288 6.77721 15.1091 7.8305L13.1264 9.81314Z" ></path>
                  </Svg>
                  <Text sizeMd="lg" classes="ml-2" text={value} contrastLevel={2} >
                  </Text>
                </li>
              })}
            </ul>

          </div>
        </div>
      </body>
    </HomeLayout >
  )
}

export default SkillsPage

export const Head = () => <title>Algebananazzzzz</title>