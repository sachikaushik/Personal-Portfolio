import {  DiHtml5,DiReact,DiCloud9,DiWebplatform,DiJavascript1,DiAngularSimple,DiNodejs } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "React",
    Component: DiReact,
    title: "React",
    Description: () => <>ReactNative Apps, ReactJS</>,
  },
 
  {
    slug: "Angular",
    Component: DiAngularSimple,
    title: "AngularJS",
    Description: () => <>Websites</>,
  },
  {
    slug: "WebTools",
    Component: DiWebplatform,
    title: "Web Tools",
    Description: () => <>Webflow, Cloudflare, Cloudinary, Klaviyo, GA4</>,
  },
  {
    slug: "java script ",
    Component: DiJavascript1,
    title: "Java Script",
    Description: () => <>Android apps and Lambda functions</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "AWS ",
    Description: () => <>EC2, S3, CloudFront, RDS, ElasticBeanstalk</>,
  },
  {
    slug: "node",
    Component: DiNodejs,
    title: "Node.js",
    Description: () => <>Backend works</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, database and analytics</>,
  },
  {
    slug: "Cloud",
    Component: DiCloud9,
    title: "Cloud",
    Description: () => <>Cross-platform app development</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
  
];
