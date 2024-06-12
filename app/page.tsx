"use client";

import Image from "next/image";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import leafbug from "@/public/images/leafbug.webp";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row">
      <section className="flex h-screen w-full flex-col justify-between p-9 lg:h-auto">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className={`-mt-14 inline-block text-[64px] font-bold text-black dark:text-white`}
            >
              01
            </span>
            <p className="pb-6 font-medium">
              The main focus of the Ingenierías Lentas group
              in the initial stages is to facilitate responsible technology usage and
              create sustainable revenue generation and resource provisioning patterns
              collaborative projects using modern techniques of computing and economics
            </p>

          </div>
        </Wrapper>
      </section>

      {/* second half */}

      <section className="hidden lg:flex h-screen w-full flex-col justify-center items-center bg-[#d6ebe9] p-9">
        <Image src={leafbug} alt="Man sitting in wheelchair" />
      </section>
    </section>
  );
}
