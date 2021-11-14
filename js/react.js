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
            <section className="project-info">
                <h3 className="project-title"> My Most Interesting Projects</h3>
                <p class="project-intro">
                    This is a collection of all the projects I wanted to make publicly available  and consider the nicest.
                    You should view my whole work in Github.
                    If you have any interesting idea that you think can help us both improve or you are searching for collaborations
                    with other programmers or think that you want to say hello contact me.
                </p>
                {projectComponents}
            </section>
        );
    }
}


class Project extends React.Component {
    render() {
        return (
            <a href={this.props.link} target="_blank">
            <section className="project-info">
                <h3 className="project-title"> {this.props.title}</h3>
                <p className="project-description">
                    {this.props.description}
                </p>
            </section>
            </a>
        );
    }
}

ReactDOM.render(
    <ProjectList />, document.getElementById('projects')
);