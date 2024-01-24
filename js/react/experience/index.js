/*
 ****************************************************************** Technical Experience
 */
class ExperienceList extends React.Component {
    render() {
        const experienceComponents = experience.map((experienceElement, idx) => (
            <ExperienceElement
                id={"experience-element-" + idx}
                title={experienceElement.title}
                subtitle={experienceElement.subtitle}
                dateStart={experienceElement.dateStart}
                dateEnd={experienceElement.dateEnd}
                description={experienceElement.description}
                link={experienceElement.link}
            />
        ));
        return (
            <section className="list-container" id="experience-elements">
                <SectionHeader title="Technical Experience" />
                {experienceComponents}
            </section>
        );
    }
};

class ExperienceElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: false };
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState({ isActive: !this.state.isActive })
    }

    render() {
        return (
            <section
                className="list-container experience-element-container"
                id={this.props.id}
            >
                <ExperienceTimePeriod start={this.props.dateStart} end={this.props.dateEnd} />
                <ExperienceDecorationContainer />
                <ExperienceTitleContainer title={this.props.title} subtitle={this.props.subtitle} click={this.handleToggle} />
                <ExperienceDescriptionContainer
                    link={this.props.link}
                    description={this.props.description}
                    isActive={this.state.isActive} />
            </section>
        );
    }
};

class ExperienceTimePeriod extends React.PureComponent {
    render() {
        return (
            <p className="time-period">
                <time className="date-start"> {this.props.start}</time>-
                <time className="date-end"> {this.props.end} </time>
            </p>
        );
    }
};

const ExperienceDecorationContainer = () => (
    <div className="decoration-container">
        <div className="dec-bullet"></div>
        <div className="line"></div>
    </div>
);

class ExperienceTitleContainer extends React.PureComponent {
    render() {
        return (
            <div className="exp-text-container">
                <h3 className="experience-main-title" onClick={this.props.click} >
                    {this.props.title}
                </h3>
                <h4 className="experience-secondary-title">
                    {this.props.subtitle}
                </h4>
            </div>
        );
    }
};

class ExperienceDescriptionContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.createLinks = this.createLinks.bind(this);
    }

    createLinks() {
        let linksAsJSX = [];
        for (let link of this.props.link.entries()) {
            linksAsJSX.push(<a className="link experience-link" href={link[1]} target="_blank"> {link[0]}</a>);
        }
        return linksAsJSX;
    }

    render() {
        return this.props.isActive && (
            <Text classNames="experience-description">
                {this.props.description}
                {this.props.link !== null && this.createLinks()}
            </Text>
        )
    }
};