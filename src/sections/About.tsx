import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import CardHeader from "@/components/CardHeader";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";

const toolBoxItems = [
  {
    title: 'Javascript',
    icon: JavascriptIcon,
  },
  {
    title: 'HTML5',
    icon: HTMLIcon,
  },
  {
    title: 'CSS3',
    icon: CSSIcon,
  },
  {
    title: 'React',
    icon: ReactIcon,
  },
  {
    title: 'Chrome',
    icon: ChromeIcon,
  },
  {
    title: 'Github',
    icon: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
  },
  {
    title: 'Photography',
    emoji: '📷',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Hiking',
    emoji: '🚶‍♂️',
  },
  {
    title: 'Music',
    emoji: '🎵',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do, and what inspires me."
      />

      <div className="mt-20">
        <Card className="h-[320px] p-6">
          <CardHeader
            title="My Reads"
            description="Explore the books shaping my perspectives."
          />

          <div className="w-40 mx-auto mt-8">
            <Image
              src={BookImage}
              alt="Book Cover"
            />
          </div>
        </Card>

        <Card className="h-[320px] p-6">
          <CardHeader
            title="My Toolbox"
            description="Explore thetechnologies and tools I use to create digital experiences."
          />

          <div>
            {toolBoxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.icon} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="h-[320px] p-6">
          <CardHeader
            title="Beyond the Code"
            description="Explore my interests and hobbies beyond the digital world."
          />

          <div>
            {hobbies.map((hobby) => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Image
            src={mapImage}
            alt="map"
          />
          <Image
            src={smileMemoji}
            alt="smiling memoji"
          />
        </Card>
      </div>
    </div>
  );
};
