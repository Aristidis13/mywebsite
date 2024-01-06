class SkillList extends React.Component {
    render() {
        const skillsComponents = skills.map((skill, id) => (
            <Skill
                id={'skill-' + id}
                title={skill.title}
                url={skill.url}
                image={skill.image}
                description={skill.description}
            />
        ));
        return (
            <section className="list-container" id="skills-section">
                <SectionHeader title="Skills" />
                <div id="skills">{skillsComponents}</div>
            </section>
        );
    }
}

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasDescription: false,
            classNames: ""
        };
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }

    handleTouchStart() {
        !this.state.classNames.includes("touchedSkill")
            ? this.setState({ classNames: "touchedSkill" })
            : this.setState({ classNames: "" });
    }

    handleTouchEnd(e) {
        if (this.state.classNames.includes("touchedSkill")) {
            this.setState({ classNames: "" });
        }
    }

    render() {
        return (
            <figure
                className={"skill-container " + this.state.classNames}
                id={"skill-" + this.props.id}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}
            >
                <img
                    className="skill-image"
                    src={this.props.image}
                    onTouchStart={this.handleTouchStart}
                    onTouchEnd={this.handleTouchEnd}
                />
                <figcaption className="skill-text">
                    <h3 className="skill-title"> {this.props.title} </h3>
                    <div className="skill-description">
                        {this.props.description}
                    </div>
                </figcaption>
            </figure>
        );
    }
}