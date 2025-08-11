// import { cn } from "@/lib/utils";

// Definisikan skills dengan nama dan path image lokal
const skills = [
  // Frontend
  { name: "HTML", imagePath: "/icons/html-icon.png" },
  { name: "CSS", imagePath: "/icons/css-icon.png" },
  { name: "JavaScript", imagePath: "/icons/js-icon.png" },
  { name: "React.js", imagePath: "/icons/react-icon.png" },
  { name: "Tailwind CSS", imagePath: "/icons/tailwind-icon.png" },
  { name: "MySQL", imagePath: "/icons/mysql-icon.png" },
  { name: "Vite", imagePath: "/icons/vite-icon.png" },
  { name: "Wordpress", imagePath: "/icons/wordpress-icon.png" },
  { name: "Figma", imagePath: "/icons/figma-icon.png" },
  { name: "Canva", imagePath: "/icons/canva-icon.png" },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, key) => (
            <div
              key={key}
              className="gradient-border p-6 rounded-lg shadow-xs card-hover flex flex-col"
            >
              {/* Container untuk row - centralized */}
              <div className="flex flex-col items-center mb-3">
                <img
                  src={skill.imagePath}
                  alt={`${skill.name} icon`}
                  className="w-10 h-10 object-contain mb-2"
                  loading="lazy"
                />
                <h3 className="font-semibold text-lg text-center">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
