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
                <h2 className="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">Polymer: Building Mature CI/CD Pipelines</h2>

                <div className="flex items-center gap-x-5">
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200">
                        Tutorial
                    </span>
                    <span className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200">
                        Framework
                    </span>
                    <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">September 4, 2023</p>
                </div>

                <p className="text-lg text-gray-800 dark:text-gray-200 text-justify">
                    As developers, we develop code that powers our applications, crafting features and functionalities that cater to users' needs.
                    However, no matter how robust our application might be, to deploy a fully functional application involves dipping oneself into the realm of <b>DevOps</b>.
                    Even after crafting an application, I frequently encounter the formidable challenge of deployment. If not executed correctly, this critical step can put both its availability and performance at risk.
                </p>

                <p className="text-lg text-gray-800 dark:text-gray-200 text-justify">
                    This is why I embarked on creating the Polymer framework, to provide developers with a framework <b>empowering</b> them to concentrate on what they do best – <b>writing code and developing their applications</b>!
                </p>

                <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Introduction to Framework</h3>

                <div className="space-y-3">
                    <h4 className="text-2xl font-semibold dark:text-white">What Polymer Does</h4>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">Simplify the configuration process by utilizing a single <b>"Source-of-Truth"</b> in the `infrastructure.yml` file.</li>
                        <li className="pl-2">Establish robust <b>CI/CD pipelines</b> with GitHub Actions for seamless, automated deployments.</li>
                        <li className="pl-2">Minimize need for constant maintenance by provisioning <b>Serverless</b> AWS resources.</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="text-2xl font-semibold dark:text-white">Templates</h4>
                    <p className="text-lg text-gray-800 dark:text-gray-200 text-justify">
                        I've developed three templates, each designed with distinct integrations to fulfill specific purposes:
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">
                            <a href="https://github.com/algebananazzzzz/PolymerFront" target="blank" className="text-blue-600 decoration-2 hover:underline font-medium">PolymerFront</a>&nbsp;—&nbsp;
                            for creating Robust React applications with Gatsby, with integrations with the AWS Amplify package and prebuilt authentication flow, suitable for Full-Stack Applications.
                        </li>
                        <li className="pl-2">
                            <a href="https://github.com/algebananazzzzz/PolymerFront-lite" target="blank" className="text-blue-600 decoration-2 hover:underline font-medium">PolymerFront-lite</a>&nbsp;—&nbsp;
                            a lite version for creating React applications with Gatsby, ideal for simpler websites.
                        </li>
                        <li className="pl-2">
                            <a href="https://github.com/algebananazzzzz/PolymerBase" target="blank" className="text-blue-600 decoration-2 hover:underline font-medium">PolymerBase</a>&nbsp;—&nbsp;
                            for provisioning Backend resources like Lambda with API Gateway Integration (optional), DynamoDB, S3, Cognito, suitable for Fullstack Development. Additionally, it includes features to enable creating GraphQL APIs using Apollo-Server.
                        </li>
                    </ul>
                </div>

                <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Installation</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-2xl font-semibold dark:text-white">PolymerFront</h4>
                        <CopyButton type="code" copyData="gatsby new MyProject https://github.com/algebananazzzzz/PolymerFront.git"></CopyButton>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        With <a className="text-blue-600 decoration-2 hover:underline font-medium" href="https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/" target="blank" >Gatsby-Client</a> installed locally, create a new project:
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {`gatsby new MyProject https://github.com/algebananazzzzz/PolymerFront.git`}
                        </code>
                    </pre>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Or for the lite version:
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {`gatsby new MyProject https://github.com/algebananazzzzz/PolymerFront-lite.git`}
                        </code>
                    </pre>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-2xl font-semibold dark:text-white">PolymerBase</h4>
                        <CopyButton type="code" copyData="git clone https://github.com/algebananazzzzz/PolymerBase.git"></CopyButton>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Clone the repository.
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {`git clone https://github.com/algebananazzzzz/PolymerFront.git`}
                        </code>
                    </pre>
                </div>

                <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Configuration</h3>

                <div className="space-y-3">
                    <h4 className="text-2xl font-semibold dark:text-white">PolymerFront</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Configuration is stored in YAML files specific to CI/CD staging environments found in <b>`.polymer/.config`</b> that adhere to the format <b>&#123;stage&#125;.env.yml</b>. For local development (gatsby develop), the configuration is sourced from <b>`.polymer/.gatsbyconfig/development.env.yml`</b> instead.
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-filesystem">
                            {`|-- .polymer
|   |-- .config
|   |   |-- dev.env.yml # for dev stage
|   |   |-- test.env.yml
|   |   |-- prod.env.yml
|   |   |-- example.env.yml # example configuration file
|   |-- .gatsbyconfig
|   |   |-- development.env.yml # gatsby develop
|   |   |-- example.env.yml # example configuration file
|-- other files and directories
`}
                        </code>
                    </pre>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Configuration follows a single format, and consists of two key aspects:
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">
                            <b>Resource Configuration</b>: configuration options for the CloudFront and S3 origin resources deployed to make site available e.g. domain customisation.
                        </li>
                        <li className="pl-2">
                            <b>Application Configuration</b>: configuration options for variables used in your application, including Cognito user and identity pool IDs, Apollo Client configuration, and S3 data bucket name.
                        </li>
                    </ul>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Please refer to the <b>example.env.yml</b> for a well-commented example of configuration, and what the arguments represent.
                    </p>
                </div>

                <div className="space-y-3 pt-3 lg:pt-5">
                    <h4 className="text-2xl font-semibold dark:text-white">PolymerBase</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Configuration consists of two key aspects:
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">
                            <b>Resource Configuration</b>: configuration options for provisioning AWS Resources (Lambda, API, Cognito, DynamoDB).
                        </li>
                        <li className="pl-2">
                            <b>Lambda Configuration</b>: configuration options for Lambda Environment Variables, VPC, IAM Role, Layers, Runtime etc.
                        </li>
                    </ul>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Resource configuration is stored in YAML files specific to CI/CD staging environments found in <b>`.polymer/.config`</b> that adhere to the format <b>&#123;stage&#125;.infrastructure.yml</b>. Similarly, by creating and specifying a directory using the <b>"envfile_basedir"</b> field for each individual functions, you can store Lambda Configuration adhering to the format <b>&#123;stage&#125;.env.yml.</b>
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-filesystem">
                            {`|-- .polymer
|   |-- .config
|   |   |-- dev.infrastructure.yml # for dev stage
|   |   |-- test.infrastructure.yml
|   |   |-- prod.infrastructure.yml
|   |   |-- example.infrastructure.yml # example configuration file
|   |-- lambda_config # configuration specific to a Lambda function
|   |   |-- dev.lambda_config.yml # for dev stage
|   |   |-- test.lambda_config.yml
|   |   |-- prod.lambda_config.yml
|   |   |-- example.lambda_config.yml # example configuration file
|   |-- handler_config # Add on for each Lambda functions
|   |   |-- ...
|-- other files and directories
`}
                        </code>
                    </pre>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        Please refer to the <b>example.infrastructure.yml</b> and <b>example.lambda_config.yml</b> for a well-commented example of configuration, and what the arguments represent.
                    </p>

                </div>

                <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Integrations</h3>
                <div className="space-y-3">
                    <h4 className="text-2xl font-semibold dark:text-white">PolymerFront</h4>
                    <p className="text-lg text-gray-800 dark:text-gray-200 text-justify">
                        The PolymerFront-lite version only includes the first integration.
                    </p>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">
                            <b>The <a href="https://www.gatsbyjs.com/" target="blank" className="text-blue-600 decoration-2 hover:underline">GatsbyJS</a> Framework</b> to bundle React applications into static files for production (within GitHub Actions).
                        </li>
                        <li className="pl-2">
                            <b><a href="https://docs.amplify.aws/lib/q/platform/js/" target="blank" className="text-blue-600 decoration-2 hover:underline">Amplify</a> Auth and Content</b> packages to enable smooth interaction with Cognito Identity and User pools, and using S3 buckets for storing, retrieving user data and resources.
                        </li>
                        <li className="pl-2">
                            <b><a href="https://www.apollographql.com/docs/react/" target="blank" className="text-blue-600 decoration-2 hover:underline">Apollo-Client</a></b> integration through <b>gatsby-plugin-apollo</b> to provide a robust platform for efficient communication with GraphQL APIs and streamlined data management.
                        </li>
                        <li className="pl-2">
                            <b><a href="https://tailwindcss.com/" target="blank" className="text-blue-600 decoration-2 hover:underline">TailWindCSS</a></b> and <b>Preline</b> to enhance your styling capabilities. To add your custom styles, navigate to <b>`src/styles/global.css`</b>.
                        </li>
                        <li className="pl-2">
                            <b>Built-in authentication flow</b> pages and components seamlessly integrated with the Amplify Auth package. They are located at <b>`/src/components/auth`</b> and <b>`/src/pages/auth/[...].js`</b>, and can be configured in <b>`.polymer/content/auth.content.yml`</b>.
                        </li>
                    </ul>

                </div>

                <div className="space-y-3 pt-3 lg:pt-5">
                    <h4 className="text-2xl font-semibold dark:text-white">PolymerBase</h4>
                    <ul className="list-decimal list-outside space-y-3 pl-5 text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">
                            <p className="text-base md:text-lg">
                                <b>The <a href="https://www.apollographql.com/" target="blank" className="text-blue-600 decoration-2 hover:underline">Apollo</a> Framework</b> to create Lambda GraphQL servers for production. To export a JSON file and GraphQL Schema for use within the application, representing the DynamoDB tables and S3 buckets provisioned, please specify within the infrastructure configuration files:
                            </p><pre className="text-sm overflow-x-scroll">
                                <code className="language-yaml">
                                    {`exports: 
  app_config_output: app/src/app_config.json # exports JSON file representing infrastructure
  graphql_schema_output: app/src/schema/models.graphql # exports GraphQL schema representing DynamoDB infrastructure
`}
                                </code>
                            </pre>
                            <p className="text-base md:text-lg">
                                Then run:
                            </p>
                            <pre className="text-sm overflow-x-scroll">
                                <code className="language-bash">
                                    {`python3 .polymer/gen.py`}
                                </code>
                            </pre>
                        </li>
                        <li className="pl-2 text-base md:text-lg">
                            The <b><a href="https://docs.amplify.aws/lib/q/platform/js/" target="blank" className="text-blue-600 decoration-2 hover:underline">WebPack</a></b> framework for efficiently bundling Apollo-Server code for production. GitHub Actions will automatically trigger this build on push.
                        </li>
                    </ul>
                </div>

                <h3 className="text-3xl pt-7 lg:pt-10 font-semibold dark:text-white">Deployment</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-2xl font-semibold dark:text-white">1. Create and initialise Git</h4>
                        <CopyButton type="code" copyData={`git init\ngit add -A\ngit commit -m "Initial Commit"\ngit checkout -b dev\ngit remote set-url origin https://github.com/{your_repository_name}.git`}></CopyButton>
                    </div>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        After creating a GitHub Repository, perform the following steps
                    </p>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {`git init
git add -A
git commit
git checkout -b dev
git remote set-url origin https://github.com/{your_repository_name}.git`}
                        </code>
                    </pre>
                </div>

                <div className="space-y-3 pt-3 lg:pt-5">
                    <h4 className="text-2xl font-semibold dark:text-white">2. Configure Action Secrets and Variables</h4>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        For secure and streamline access to AWS and Terraform Cloud, follow these steps to configure secrets and variables within your GitHub repository:
                    </p>
                    <ul className="list-disc list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        <li className="pl-2">
                            Click on the Settings tab within your repository.
                        </li>
                        <li className="pl-2">
                            Navigate to Secrets (or Environments &gt; Secrets depending on your GitHub version).
                        </li>
                        <li className="pl-2">
                            Click on New repository secret to add secrets or New repository variable to add variables.
                        </li>
                    </ul>
                    <div className="space-y-2 pt-3">
                        <h5 className="text-xl font-semibold dark:text-white">Required Secrets:</h5>
                        <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                            <li className="pl-2">
                                <b>AWS_ACCESS_KEY_ID</b>: Your AWS access key ID.
                            </li>
                            <li className="pl-2">
                                <b>AWS_SECRET_ACCESS_KEY</b>: Your AWS secret access key.
                            </li>
                            <li className="pl-2">
                                <b>TF_API_TOKEN</b>: Obtain this token by going to your Terraform Cloud tokens page.
                            </li>
                        </ul>

                        <h5 className="pt-3 text-xl font-semibold dark:text-white">Required Variables:</h5>
                        <ul className="list-decimal list-outside space-y-3 pl-5 text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                            <li className="pl-2">
                                <b>APPLICATION_NAME</b>: Set your application's name.
                            </li>
                            <li className="pl-2">
                                <b>AWS_REGION</b>: Define the AWS region you're working with.
                            </li>
                            <li className="pl-2">
                                <b>TF_ORGANISATION</b>: Terraform Cloud organization where the workspace will be created.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="space-y-3 pt-3 lg:pt-5">
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="text-2xl font-semibold dark:text-white">3. Push to GitHub, let it run!</h4>
                        <CopyButton type="code" copyData={`git push --set-upstream origin dev`}></CopyButton>
                    </div>
                    <pre className="text-sm overflow-x-scroll">
                        <code className="language-bash">
                            {`git push --set-upstream origin dev`}
                        </code>
                    </pre>
                    <p className="text-base md:text-lg text-gray-800 dark:text-gray-200 text-justify">
                        With GitHub Actions in place, this push will automatically build necessary artifacts and trigger Terraform to provision the necessary resources.
                    </p>
                </div>
            </div>
        </BlogComponent >
    )
}

export default IndexPage

export const Head = () => <title>Algebananazzzzz</title>