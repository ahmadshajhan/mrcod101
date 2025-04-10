/* eslint-disable react/no-unescaped-entities */

import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          🧙‍♂️ Mystical Manifesto
My journey in web development is powered by an array of arcane tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating.

"Join me as I continue to explore new spells (technologies) to shape the future of the web."
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=ahmadshajahan&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false`}
            alt="MRCODE"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
  <div className="relative group">
    {/* GitHub Stats */}
    <img
      className="w-full h-auto transition-all duration-300 group-hover:opacity-90 group-hover:scale-[1.02]"
      src={`https://github-readme-stats.vercel.app/api?username=ahmadshajahan&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&icon_color=FEFE58&text_bold=false&show_icons=true&include_all_commits=true&count_private=true`}
      alt="MRCODE GitHub Stats"
      loading="lazy"
    />
    
    {/* GitHub Streak (added as overlay on hover) */}
    <img
      className="absolute inset-0 w-full h-auto opacity-0 transition-all duration-300 group-hover:opacity-100"
      src={`https://github-readme-streak-stats.herokuapp.com/?user=ahmadshajahan&theme=transparent&hide_border=true&stroke=FEFE58&ring=FEFE58&fire=FEFE58&currStreakNum=FFFFFF&sideNums=FFFFFF&currStreakLabel=FEFE58`}
      alt="MRCODE GitHub Streak"
      loading="lazy"
    />
    
    {/* Top Languages (small badge) */}
    <div className="absolute bottom-2 right-2">
      <img
        className="h-16 transition-all duration-300 group-hover:h-20"
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=ahmadshajahan&theme=transparent&hide_border=true&title_color=FEFE58&text_color=FFFFFF&layout=compact&langs_count=4`}
        alt="MRCODE Top Languages"
        loading="lazy"
      />
    </div>
  </div>
</ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="MRCODE"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=MRCODE27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="MRCODE"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/ahmadshajahan"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=MRCODE27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="MRCODE"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
