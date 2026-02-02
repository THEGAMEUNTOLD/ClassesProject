import React from "react";
import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";
import "./Cli.scss";

const commands = {
    help: {
        description: "Show available commands",
        usage: "help",
        fn: () => `
Available commands:
• help       – Show this help menu
• whoami     – About me
• skills     – My technical skills
• projects   – Things I've built
• clear      – Clear the terminal
    `,
    },

    whoami: {
        description: "About me",
        usage: "whoami",
        fn: () => `
👋 Hi, I'm Bharat Choudhary
Full-Stack Developer | React | Node.js
I love building clean UI & scalable systems.
    `,
    },

    skills: {
        description: "List technical skills",
        usage: "skills",
        fn: () => `
⚙️ Skills:
• React / Next.js
• Node.js / Express
• MongoDB
• REST APIs
• Tailwind / SCSS
• Git & Deployment
    `,
    },

    projects: {
        description: "Show projects",
        usage: "projects",
        fn: () => `
🚀 Projects:
• Portfolio Website
• Notes App
• REST API Server
• React CLI Emulator
    `,
    },
};

const Cli = () => {
    return (
        <MacWindow title="Terminal">
            <div className="cli-container">
                <Terminal
                    commands={commands}
                    welcomeMessage={`Last login: ${new Date().toDateString()}Type 'help' to get started.`}
                    promptLabel="bharat@portfolio:~$ "
                    autoFocus
                    noDefaults
                />
            </div>
        </MacWindow>
    );
};

export default Cli;
