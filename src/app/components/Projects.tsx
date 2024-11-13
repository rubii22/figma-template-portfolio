export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Project Name",
            description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
            image: "/pexels-elly-fairytale-3823207 1.png",
        },
        {
            id: 2,
            title: "Project Name",
            description: "What was your role, your deliverables, if the project was personal, freelancing.",
            image: "/Rectangle 7 (1).png",
        },
        {
            id: 3,
            title: "Project Name",
            description: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
            image: "/Rectangle 7.png",
        },
    ];

    return (
        <section id="projects" className="py-16 bg-lightGray">

            <h2 className="text-center font-serif text-4xl font-bold mb-10 text-gray-800">
                Projects
                <span className="block w-20 h-1 bg-yellow-500 mx-auto mt-2"></span>
            </h2>

            <div className="space-y-12 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row-reverse" : ""} bg-white shadow-lg rounded-lg overflow-hidden`}
                    >
                    
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full sm:w-1/2 h-64 sm:h-auto object-cover"
                        />

                        
                        <div className="p-8 sm:w-1/2 flex flex-col justify-center items-start">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                {project.title}
                            </h3>
                            <p className="text-base text-gray-600 mb-6">
                                {project.description}
                            </p>
                            <button className="text-black font-medium border border-gray-500 px-6 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
