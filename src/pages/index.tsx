/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import ProjectPreview from "../../components/ProjectPreview";
import Github from "../../public/github.svg"
import Instagram from "../../public/instagram.svg";
import Twitter from "../../public/twitter.svg";
import Linkedin from "../../public/linkedin.svg";
import SocialButton from "../../components/SocialButton";


export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio v2</title>
        <meta name="description" content="Powered by NextJs and Vercel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="bg-zinc-200 h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold font-open-sauce">
            Hello, I'm Ugo, a Frontend Developer from Lagos, Nigeria.
          </h1>
          <p className="flex-1 font-open-sauce">
            I enjoy using design to create amazing user experiences powered by code and I love to build amazing things that live on the web.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <Link href={'mailto:jamesegeonu003@gmail.com'} target="_blank">
              <button className="bg-black bg-opacity-95 text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
              Contact me
              </button>
            </Link>
            <div className="flex items-center gap-4">
              {/* github */}
              <Link href={'https://github.com/hugolee003'} target="_blank">
                <SocialButton bgColor="dribbble">
                  <Github className="w-6 h-6" />
                </SocialButton>
              </Link>

              {/* instagram */}
              <Link href={'https://instagram.com/thesalad_developer'} target="_blank">
                <SocialButton bgColor="instagram">
                  <Instagram className="w-5 h-5" />
                </SocialButton>
              </Link>

              {/* twitter */}
              <Link href={'https://twitter.com/hugolee003'} target="_blank">
                <SocialButton bgColor="twitter">
                  <Twitter className="w-5 h-5" />
                </SocialButton>
              </Link>
              
              {/* linkedin */}
              <Link href={'https://www.linkedin.com/in/ugochukwu-egeonu'} target="_blank">
                <SocialButton bgColor="linkedin">
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/ugo.jpg')] bg-cover bg-center" />
      </section>

      <section id="projects" className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 font-open-sauce">
        {/* project 1 */}
       <Link href={'https://beacons-flare-gallery.vercel.app/'} target="_blank">
        <ProjectPreview
            name="Beacons Flare Gallery"
            description="A collection of lazy loaded images"
            imageUrl="/beacons-gallery.png"
            bgColor="#685cdd"
            dark
          />
       </Link>

       {/* project 2 */}
       <Link href={'https://eduverse-omega.vercel.app/'} target="_blank">
        <ProjectPreview
            name="Eduverse"
            description="Landing page for education"
            imageUrl="/eduverse1.png"
            bgColor="#4e4e56"
            // dark
          />
       </Link>

       {/* project 3 */}
        <Link href={'https://salad-developer.vercel.app/'} target="_blank">
          <ProjectPreview
            name="Portfolio v1"
            description="My first web portfolio"
            imageUrl="/portfolio-v1.1.png"
          />
        </Link>

        {/* project 4 */}
        <Link href={'https://altschool-alvin.onrender.com/'} target="_blank">
          <ProjectPreview
            name="Alvin-AI"
            description="Food ordering chatbot"
            imageUrl="/alvin.png"
            bgColor="#4e4e56"
            // dark
          />
        </Link>


        {/* project 5 */}
        <Link href={'https://z3g-ecommerce.netlify.app/'} target="_blank">
          <ProjectPreview
            name="Code Z3G"
            description="E-commerce app for a fashion brand"
            imageUrl="/z3g-1.png"
            bgColor="#171717"
            // dark
          />
        </Link>

        {/* project 6 */}
        <Link href={'https://play.tailwindcss.com/CJpfjQQ4tR'} target="_blank">
          <ProjectPreview
          name="iOS 15 Homescreen"
          description="A customized version of iOS 15"
          imageUrl="/ios-2.png"
          />
        </Link>
      </section>

      <footer className="grid grid-cols-1 lg:grid-cols-[2fr] gap-4 mb-4">
        <div className="bg-zinc-200 h-[22rem] rounded-3xl p-10 flex flex-col gap-6 bg-[url('/gradient-bg.jpg')] bg-cover sm:min-w-6">
          <h1 className="text-4xl font-semibold font-open-sauce">
            Want to work together?
          </h1>
          <div className="flex-1 font-open-sauce">
          <p className="pb-6">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <p>
            jamesegeonu003@gmail.com
          </p>
          </div>

          <div id="contact" className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <Link href={'mailto:jamesegeonu003@gmail.com'} target="_blank">
              <button className="bg-black bg-opacity-95 text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto">
              Contact me
              </button>
            </Link>
            <div className="flex items-center gap-4">
              {/* github */}
              <Link href={'https://github.com/hugolee003'} target="_blank">
                <SocialButton bgColor="dribbble">
                  <Github className="w-6 h-6" />
                </SocialButton>
              </Link>

              {/* instagram */}
              <Link href={'https://instagram.com/thesalad_developer'} target="_blank">
                <SocialButton bgColor="instagram">
                  <Instagram className="w-5 h-5" />
                </SocialButton>
              </Link>

              {/* twitter */}
              <Link href={'https://twitter.com/hugolee003'} target="_blank">
                <SocialButton bgColor="twitter">
                  <Twitter className="w-5 h-5" />
                </SocialButton>
              </Link>
              
              {/* linkedin */}
              <Link href={'https://www.linkedin.com/in/ugochukwu-egeonu'} target="_blank">
                <SocialButton bgColor="linkedin">
                  <Linkedin className="w-5 h-5" />
                </SocialButton>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
