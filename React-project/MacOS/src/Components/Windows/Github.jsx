import React from "react";
import GithubData from "../../assets/github.json";
import "./Github.scss";
import MacWindow from "./MacWindow";
import 'remixicon/fonts/remixicon.css'

const Github = () => {
    return (
        <MacWindow title="GitHub Projects" icon="github">
            <div className="github-content">
                {GithubData.map((project) => (
                    <div className="github-card" key={project.id}>
                        {/* Image */}
                        <div className="card-image">
                            <img src={project.image} alt={project.title} />
                        </div>

                        {/* Content */}
                        <div className="card-body">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            {/* Tags */}
                            <div className="tags">
                                {project.tags.map((tag, index) => (
                                    <span className="tag" key={index}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="links">
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="ri-github-fill"></i> GitHub
                                </a>

                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="ri-arrow-right-line"></i> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </MacWindow>
    );
};

export default Github;
