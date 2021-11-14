class ProjectList extends React.Component {
    render() {
        const projectComponents = projects.map( (project) => (
            <Project
                title = {project.title}
                description={project.description}
                link = {project.link}
            />
        ));
        return (
            <article id="projects">
            <h2 className="project-title"> My Most Interesting Projects</h2>
            <p class="project-intro">
                This is a collection of all the projects I wanted to make publicly available  and consider the nicest.
                You should view my whole work in Github.
                If you have any interesting idea that you think can help us both improve or you are searching for collaborations
                with other programmers or think that you want to say hello contact me.
            </p>
            {projectComponents}
        </article>
        );
    }
}


class Project extends React.Component {
    render() {
        return (
            <section className="project-info">
                <a href={this.props.link} target="_blank">
                    <section class="project-info">
                        <h3 class="project-title"> {this.props.title}</h3>
                        <p class="project-description">
                            {this.props.description}
                        </p>
                    </section>
                </a>
            </section>
        );
    }
}

ReactDOM.render(
    <ProjectList />, document.getElementById('projects-section')
);