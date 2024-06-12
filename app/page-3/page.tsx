"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import leafbug3 from "@/public/images/leafbug3.webp";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              03
            </span>
            <p className="pb-6 font-medium">
              The{" "}
              <a
                href="https://github.com/ingenierias-lentas/candid"
                target="_blank"
                rel="noreferrer"
                className="pb-1 text-zinc-800 dark:text-zinc-100 underline font-medium"
              >
                Candid
              </a>{" "}
              is a project aimed at better aligning job providers and job seekers
              via candid feedback data generated from Application Tracking Systems and other
              candidate application evaluation systems
            </p>
          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#ffefd6] p-9">
        <Image src={leafbug3} alt="Boy and girl playing with robot" />
      </section>
    </section>
  );
}
