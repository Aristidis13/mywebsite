/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/** *********************************************************************** Intro
 */
class Text extends React.PureComponent {
  render () {
    return (
      <p className={"text " + this.props.classNames} id={this.props.propId}>
        {this.props.text || this.props.children}
      </p>
    );
  }
}

class Cube extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      className: ""
    };
    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
  }

  handlePointerDown () {
    this.setState({ className: "pausedAnimation" });
  }

  handlePointerUp () {
    this.setState({ className: "" });
  }

  render () {
    const sides = cubeSides.map((side) => (
      <CubeSide
        id={"cubeSide-" + side.id}
        title={side.title}
        section={side.section}
        classNames={side.class}
      />
    ));
    return (
      <nav
        id="navbar"
        onPointerDown={this.handlePointerDown}
        onPointerUp={this.handlePointerUp}
      >
        <ul id="cube" className={this.state.className}>
          {sides}
        </ul>
      </nav>
    );
  }
}

class CubeSide extends React.PureComponent {
  render () {
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

/*
 ************************************************************************* Welcome
 */
class WelcomeSection extends React.Component {
  render () {
    const welcomeComponents = welcome.map((el) => (
      <Text text={el.text} classNames={"presentation-text"} />
    ));
    return (
      <article className="list-container" id="welcome-elements">
        <h2 className="section-header"> Welcome</h2>
        <div id="text-container"> {welcomeComponents} </div>
        <figure id="photo-container">
          <img
            className="photo"
            id="personal-photo"
            src="./photos/Aris_Barlos.jpg"
            alt="Aris Barlos - Software Engineer"
          />
        </figure>
      </article>
    );
  }
}

ReactDOM.render(<WelcomeSection />, document.getElementById("welcome-section"));

/*
 ************************************************************************* Projects
 */

class ProjectList extends React.Component {
  render () {
    const projectComponents = projects.map((project) => (
      <Project
        id={"project-" + project.id}
        title={project.title}
        description={project.description}
        link={project.link}
      />
    ));
    return (
      <article className="list-container" id="projects">
        <h2 className="section-header"> My Most Interesting Projects</h2>
        {projectComponents}
      </article>
    );
  }
}

class Project extends React.PureComponent {
  render () {
    return (
      <section className="atomic-project" id={this.props.id}>
        <a href={this.props.link} target="_blank">
          <section className="project-info">
            <h3 className="project-title"> {this.props.title}</h3>
            <Text classNames="project-description">
              {this.props.description}
            </Text>
          </section>
        </a>
      </section>
    );
  }
}

ReactDOM.render(<ProjectList />, document.getElementById("projects-section"));

/*
 ****************************************************************** Technical Experience
 */
class ExperienceList extends React.Component {
  render () {
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
      <article className="list-container" id="experience-elements">
        <h2 className="section-header"> Technical Experience</h2>
        <p id="experience-intro-paragraph"></p>
        <section id="experience">{experienceComponents}</section>
      </article>
    );
  }
}

class ExperienceElement extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      classNames: "experience-description-container"
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle () {
    !this.state.classNames.includes("descriptionVisible")
      ? this.setState({
        classNames: "descriptionVisible"
      })
      : this.setState({
        classNames: ""
      });
  }

  render () {
    return (
      <section
        className="list-container experience-element-container"
        id={this.props.id}
      >
        <p className="time-period">
          <time className="date-start"> {this.props.dateStart + " "}</time>-{" "}
          <time className="date-end"> {" " + this.props.dateEnd} </time>
        </p>
        <div className="decoration-container">
          <div className="dec-bullet"></div>
          <div className="line"></div>
        </div>
        <section className="exp-text-container">
          <div className="experience-title">
            <div className="titles-container">
              <h3 className="experience-main-title" onClick={this.handleToggle}>
                {this.props.title}
              </h3>
              <h4 className="experience-secondary-title">
                {this.props.subtitle}
              </h4>
            </div>
          </div>
        </section>
        <div
          className={
            "experience-description-container " + this.state.classNames
          }
        >
          <Text classNames="experience-description">
            {this.props.description}
          </Text>
          <p className="experience-link-container">
            <a
              className="link experience-link"
              href={this.props.link}
              target="_blank"
            >
              {" "}
              {this.props.link}{" "}
            </a>
          </p>
        </div>
      </section>
    );
  }
}

ReactDOM.render(
  <ExperienceList />,
  document.getElementById("technical-experience")
);

/*
 ********************************************************************* Skills
 */

class SkillList extends React.Component {
  render () {
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
      <article className="list-container" id="atomic-skill-container">
        <h2 className="section-header">Skills</h2>
        <div id="skills">{skillsComponents}</div>
      </article>
    );
  }
}

class Skill extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hasDescription: false,
      classNames: ""
    };
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  }

  handleTouchStart () {
    !this.state.classNames.includes("touchedSkill")
      ? this.setState({ classNames: "touchedSkill" })
      : this.setState({ classNames: "" });
  }

  handleTouchEnd (e) {
    if (this.state.classNames.includes("touchedSkill")) {
      this.setState({ classNames: "" });
    }
  }

  render () {
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
            <a className="skill-url" href={this.props.url} target="_blank">
              {this.props.url}
            </a>
          </div>
        </figcaption>
      </figure>
    );
  }
}

ReactDOM.render(<SkillList />, document.getElementById("skills-section"));

/*
 ************************************************************* Social Links
 */

class SocialLinksList extends React.Component {
  render () {
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
      <article className="list-container" id="links-container">
        <h2 className="section-header"> Where to find me</h2>
        <div id="social-links">{socialLinksComponents}</div>
      </article>
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

ReactDOM.render(
  <SocialLinksList />,
  document.getElementById("social-links-section")
);
