import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

//Imports by me
import WorkExperience from "../components/render-work-experience_";


export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        {/* ...avatar and contact info... */}

        <Section>
          <h2 className="text-xl font-bold">Synopsis</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Current Job</h2>
          <WorkExperience experience={RESUME_DATA.work.slice(0, 1)} />
        </Section>

        {/* Additional sections for skills */}
        <Section>
          <h2 className="text-xl font-bold">Data Skills</h2>
          {/* Add your data skills content here */}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Visualization Skills</h2>
          {/* Add your visualization skills content here */}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Business Skills</h2>
          {/* Add your business skills content here */}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Competent Tools</h2>
          {/* Iterate over skills as you did before, but perhaps filter or split them based on type */}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">About Me</h2>
          {/* Add personal traits or soft skills here */}
        </Section>

        {/* Keep education the same */}
        
        {/* Keep projects the same */}

      </section>

      {/* ...command menu... */}
    </main>
  );
}/* old resume data work section

<Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
  */ 