import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold"></h3>

            <p className="text-muted-foreground">
              As a front-end developer with hands-on experience from a year
              internship at PT Telkom Indonesia, I focus on building responsive,
              accessible, and user-friendly interfaces using Javascript
              framework like React.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about crafting clean solutions for complex
              challenges and always eager to learn new technologies to stay
              ahead in the fast-changing world of web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="https://www.linkedin.com/in/hubertdaryantocen/"
                className="cosmic-button"
              >
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Front End Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive, fast, and accessible websites with
                    modern technologies
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-centered interfaces that
                    balance aesthetics and usability
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    SQL for Data Management
                  </h4>
                  <p className="text-muted-foreground">
                    Basic SQL knowledge for managing and querying databases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
