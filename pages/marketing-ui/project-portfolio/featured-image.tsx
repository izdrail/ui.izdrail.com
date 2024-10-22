import { Button, Tooltip } from "flowbite-react";
import type { FC } from "react";

const ProjectPortfolioFeaturedImage: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our work
          </h2>
          <p className="text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of
            people who share your interests.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 mt-4 md:flex-row">
            <a
              href="#"
              title=""
              className="inline-flex items-center text-base font-medium shrink-0 text-primary-600 hover:underline dark:text-primary-500"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              View all projects
            </a>
            <a
              href="#"
              title=""
              className="inline-flex items-center text-base font-medium shrink-0 text-primary-600 hover:underline dark:text-primary-500"
            >
              Let's work together
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 space-y-16 sm:mt-12 lg:mt-16">
          <div className="space-y-8 lg:space-y-12">
            <img
              className="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/dashboard.png"
              alt=""
            />
            <img
              className="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:block hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/dashboard-dark.png"
              alt=""
            />
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                  Creating Flowbite's dashboard
                </h3>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  See the live website
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
                <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                  The first step in creating a dashboard is to determine who
                  will be using it and what their needs are. Are you creating a
                  dashboard for your team to track progress on a project, or for
                  executives to monitor key performance indicators (KPIs) for
                  the company? What specific data points do they need to see in
                  order to make decisions? Understanding your audience and their
                  needs will help you determine what data to include on the
                  dashboard.
                </p>
                <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                  Use charts, graphs, and other visual elements to help users
                  quickly understand the data, making sure to label all elements
                  clearly and provide context for the data being presented.
                </p>
                <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                  Test the dashboard with a few users before launching it to
                  ensure that it is meeting their needs and is easy to use.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Tooltip content="HTML5">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="CSS3">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="JavaScript">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/javascript.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="Tailwind CSS">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="TypeScript">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg"
                    alt=""
                  />
                </Tooltip>
              </div>
              <Button>
                View case study
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="space-y-8 lg:space-y-12">
            <img
              className="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/ngo-landing.jpg"
              alt=""
            />
            <img
              className="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:block hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/ngo-landing-dark.jpg"
              alt=""
            />
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                  Flowbite's landing page
                </h3>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  See the live website
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
                <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                  What action do you want visitors to take after they arrive on
                  the page? Are you trying to sell a product, capture leads, or
                  promote an event? Once you know your goal, you can identify
                  your target audience and create a message that speaks directly
                  to their needs and interests.
                </p>
                <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                  Keep the design simple and focused on your goal, using clear
                  headlines and calls-to-action to guide visitors towards the
                  desired action. Use high-quality images and graphics to make
                  the page visually appealing and highlight the benefits of your
                  offer. Make sure the page is mobile-friendly and loads quickly
                  to provide a good user experience.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Tooltip content="WordPress">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/wordpress.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="HTML5">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="CSS3">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/css-3.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="WooCommerce">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/woocommerce.svg"
                    alt=""
                  />
                </Tooltip>
              </div>
              <Button>
                View case study
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="space-y-8 lg:space-y-12">
            <img
              className="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/gallery.jpg"
              alt=""
            />
            <img
              className="object-cover object-top w-full h-auto rounded-lg shadow-lg dark:block hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/gallery-dark.jpg"
              alt=""
            />
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                  Innovative Gallery API
                </h3>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  See the live website
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
                <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                  Determine what kind of emails you will be managing, who will
                  be using the system, and what features are necessary,
                  considering features like search, filtering, categorization,
                  and sorting, as well as security and privacy requirements.
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Tooltip content="TypeScript">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/typescript.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="Java">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/java.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="Tailwind CSS">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/tailwind-css.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="React">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/react.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="HTML5">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/html5.svg"
                    alt=""
                  />
                </Tooltip>
                <Tooltip content="Amazon Web Services">
                  <img
                    className="object-contain w-auto h-8"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/technologies/amazon-web-services.svg"
                    alt=""
                  />
                </Tooltip>
              </div>
              <Button>
                View case study
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolioFeaturedImage;
