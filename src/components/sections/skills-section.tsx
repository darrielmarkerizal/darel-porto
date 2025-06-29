import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import Sparkles from "@/components/magicui/sparkles";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function SkillsSection() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Sparkles density={3}>
                <Badge
                  key={skill}
                  className="hover:scale-105 transition-transform cursor-pointer hover:bg-accent hover:text-accent-foreground"
                >
                  {skill}
                </Badge>
              </Sparkles>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
