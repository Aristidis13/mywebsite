class ProjectList extends React.Component {
    render() {
        const projectComponents = projects.map((project) => (<Project {...project} />));
        return (
            <section className="list-container" id="projects">
                <SectionHeader title=" My Most Interesting Projects" />
                {projectComponents}
            </section>
        );
    }
}

class Project extends React.PureComponent {
    constructor(props) {
        super(props);
        this.makeSkills = this.makeSkills.bind(this);
    }
    makeSkills() {
        let coreTechnologiesAsStr = "";
        this.props.coreSkills.forEach(skill => coreTechnologiesAsStr += skill + ', ');
        return coreTechnologiesAsStr.substring(0, coreTechnologiesAsStr.length - 2);
    }
    render() {
        return (
            <section className="atomic-project" id={this.props.id}>
                <a href={this.props.link} target="_blank">
                    <section className="project-info">
                        <h3 className="project-title"> {this.props.title}</h3>
                        <Text classNames="project-description">
                            <h4 className="project-subTitle"><i>{this.makeSkills()}</i></h4>
                            {this.props.description}
                        </Text>
                    </section>
                </a>
            </section>
        );
    }
}

