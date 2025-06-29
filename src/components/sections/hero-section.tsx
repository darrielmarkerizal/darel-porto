import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AnimatedCounter from "@/components/magicui/animated-counter";
import TypingAnimation from "@/components/magicui/typing-animation";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function HeroSection() {
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <TypingAnimation
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                duration={100}
              />
            </BlurFade>
            <BlurFadeText
              className="max-w-[600px] md:text-xl"
              delay={BLUR_FADE_DELAY * 3}
              text={DATA.description}
            />
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <AnimatedCounter
                value={DATA.stats?.experience || 2}
                suffix="+"
                className="text-2xl font-bold"
              />
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={DATA.stats?.projects || 10}
                suffix="+"
                className="text-2xl font-bold"
              />
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={DATA.stats?.clients || 15}
                suffix="+"
                className="text-2xl font-bold"
              />
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <AnimatedCounter
                value={DATA.skills.length}
                className="text-2xl font-bold"
              />
              <p className="text-sm text-muted-foreground">Technologies</p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
