/********************************************************************** WelcomeSection
*/

class WelcomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textAnimation: "",
      divAnimation: "",
      presentationSlide: "",
      continueAnimation: ""
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      presentationSlide: " presentation-slide-animation",
      continueAnimation: " continue-animation",
      divAnimation: " divAnimation"
    })
    document.documentElement.style.overflowY = "scroll"
  }

  render() {
    const welcomeComponents = welcome.map((sentence, index) => <Text
      key={"welcome-" + index}
      text={<span className={`word `}> {sentence.text} </span>}
      classNames={"presentation-text " + this.state.presentationSlide}
    />);

    return (
      <div id="welcome-view" className={this.state.divAnimation}>
        <section id="presentation-slide">
          <div id="text-container"> {welcomeComponents}</div>
        </section>
        <span className={"button-text " + this.state.continueAnimation} onClick={this.handleClick}> View My Site!</span>
      </div>
    )
  }
}

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

/*
 ********************************************************************* Skills
 */

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

/*
 ************************************************************* Social Links
 */

class SocialLinksList extends React.Component {
  render() {
    const socialLinksComponents = socialLinks.map((socialLink, id) => (
      <Link
        id={"socialLink-" + id}
        title={socialLink.title}
        url={socialLink.url}
        image={socialLink.image}
        linkClass={socialLink.linkClass}
        textClass={socialLink.textClass}
      />
    ));
    return (
      <section className="list-container" id="social-links-section">
        <SectionHeader title="Contact Me" />
        <div id="social-links">{socialLinksComponents}</div>
      </section>
    );
  }
}

const Link = (props) => {
  return (
    <a
      className={props.linkClass}
      id={props.id}
      href={props.url}
      target="_blank"
      rel="nofollow"
    >
      <p className={props.textClass}>{props.title}</p>
    </a>
  );
};

/** ***************************** Containner/
*/
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      welcomeSectionIsVisible: true,
    };
    this.hide = this.hide.bind(this);
  }
  hide() {
    this.setState({ welcomeSectionIsVisible: false });
  }
  render() {
    return <>
      {this.state.welcomeSectionIsVisible && <WelcomeView hide={this.hide} />}
      <h1 style={{ display: "none" }}> Aris Barlos a Frontend Developer!</h1>
      <ProjectList />
      <ExperienceList />
      <SkillList />
      <SocialLinksList />
    </>
  }
}

ReactDOM.render(<Cube />, document.getElementById("header"))
ReactDOM.render(<App />, document.getElementById("main"));