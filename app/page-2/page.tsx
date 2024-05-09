"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import leafbug2 from "@/public/images/leafbug2.webp";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              02
            </span>
            <p className="pb-6 font-medium">
              The{" "}
              <a
                href="https://github.com/ingenierias-lentas/sistema"
                target="_blank"
                rel="noreferrer"
                className="pb-1 text-zinc-800 dark:text-zinc-100 underline font-medium"
              >
                Sistema
              </a>{" "}
              project is an exploration of collaborative project development.
              This is essentially a project tracking tool tied with a voting system and
              a funding mechanism
            </p>

          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#e0f5ff] p-9">
        <Image src={leafbug2} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
