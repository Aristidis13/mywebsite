/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/** *********************************************************************** Intro
 */
class Text extends React.PureComponent {
  render() {
    return (
      <p className={"text " + this.props.classNames} id={this.props.propId}>
        {this.props.text || this.props.children}
      </p>
    );
  }
};
class SectionHeader extends React.PureComponent {
  render() {
    return (
      <h2
        className="section-header"
        id={this.props.id}>
        {this.props.title}
      </h2>);
  }
}

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spin: 0,
      degrees: '',
    };
  }

  componentDidMount() {
    setInterval(() => {
      const state = this.state;
      this.setState({ spin: state.spin + 90 });
      this.setState({ degrees: 'rotateY(' + this.state.spin + 'deg)' });
    }, 3000);
  }

  render = () => (
    <nav id="navbar">
      <ul id="cube" style={{ transform: this.state.degrees }}>
        {cubeSides.map((side) => (
          <CubeSide
            id={"cubeSide-" + side.id}
            title={side.title}
            section={side.section}
            classNames={side.class}
          />
        ))}
      </ul>
    </nav>
  );
}

class CubeSide extends React.PureComponent {
  render() {
    return (
      <li className={this.props.classNames}>
        <a
          className="link list-item"
          id={this.props.id}
          href={"#" + this.props.section}
          rel="nofollow"
        >
          <h2 className="nav-title"> {this.props.title}</h2>
        </a>
      </li>
    );
  }
}

ReactDOM.render(<Cube />, document.getElementById("header"));

/********************************************************************** WelcomeSection
*/
class Word extends React.PureComponent {
  render() {
    return (
      <span className="word">
        {
          this.props.word
            .split("")
            .map(letter => <span className={"letter " + this.props.textAnimation}>
              {letter}
            </span>)}
      </span>
    );
  }
}

const createHtmlFromSentence = (sentence, textAnimation) => sentence
  .text
  .split(" ")
  .map(word =>
    <Word word={word} textAnimation={textAnimation} />
  )

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
      textAnimation: " letterAnimation",
      presentationSlide: " presentation-slide-animation",
      continueAnimation: " continue-animation",
      divAnimation: " divAnimation"
    })
    document.documentElement.style.overflowY = "scroll"
  }

  render() {
    const welcomeComponents = welcome.map(sentence => <Text
      text={createHtmlFromSentence(sentence, this.state.textAnimation)}
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
 ************************************************************************* Projects
 */

class ProjectList extends React.Component {
  render() {
    const projectComponents = projects.map((project) => (
      <Project
        id={"project-" + project.id}
        title={project.title}
        description={project.description}
        link={project.link}
        coreSkills={project.coreTechnologies}
      />
    ));
    return (
      <section className="list-container" id="projects">
        <SectionHeader title=" My Most Interesting Projects" />
        {projectComponents}
      </section>
    );
  }
}

class Project extends React.PureComponent {
  constructor() {
    super();
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

/*
 ****************************************************************** Technical Experience
 */
class ExperienceList extends React.Component {
  render() {
    const experienceComponents = experience.map((experienceElement) => (
      <ExperienceElement
        id={"experience-element-" + experienceElement.id}
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

class ExperienceDecorationContainer extends React.PureComponent {
  render() {
    return (
      <div className="decoration-container">
        <div className="dec-bullet"></div>
        <div className="line"></div>
      </div>
    );
  }
};

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
    console.log(linksAsJSX);
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
    const skillsComponents = skills.map((skill) => (
      <Skill
        id={skill.id}
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
    const socialLinksComponents = socialLinks.map((socialLink) => (
      <Link
        id={"socialLink-" + socialLink.id}
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

ReactDOM.render(<App />, document.getElementById("main"));