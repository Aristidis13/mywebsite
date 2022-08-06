/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/** *********************************************************************** Intro
 */

class Text extends React.PureComponent {
<<<<<<< HEAD
    render() {
        return (
            <p className={"text " + this.props.classNames} id={this.props.propId}>
                {this.props.text || this.props.children}
            </p>
        );
    }
=======
  render () {
    return (
      <p className={"text " + this.props.classNames} id={this.props.propId}>
        {this.props.text || this.props.children}
      </p>
    );
  }
}

class Container extends React.PureComponent {
    render() {
    return(
    <article className="list-container" id={this.props.id}>
        <h2 className="section-header"> {this.props.header} </h2>
        <section id={this.props.sectionId}> {this.props.children} </section>
    </article>)}
>>>>>>> 609ab16407d04bf60cffd48310f956fad17345cf
}

class Cube extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = { className: "" }
        this.handlePointerDown = this.handlePointerDown.bind(this);
        this.handlePointerUp = this.handlePointerUp.bind(this);
    }
    handlePointerDown() { this.setState({ className: "pausedAnimation" }) }
    handlePointerUp() { this.setState({ className: "" }) }
    render() {
        const sides = cubeSides.map((side) => (
            <CubeSide
                id={'cubeSide-' + side.id}
                title={side.title}
                section={side.section}
                classNames={side.class}
            />
        ));
        return (
            <nav id="navbar" onPointerDown={this.handlePointerDown} onPointerUp={this.handlePointerUp}>
                <ul id="cube" className={this.state.className}>
                    {sides}
                </ul>
            </nav>
        )
    }
}

class CubeSide extends React.PureComponent {
    render() {
        return (
            <li className={this.props.classNames}>
                <a
                    className="link list-item"
                    hreflang="en"
                    id={this.props.id}
                    href={"#" + this.props.section}
                    rel="nofollow">
                    <h2 className="nav-title"> {this.props.title}</h2>
                </a>
            </li>
        )
    }
}

ReactDOM.render(<Cube />, document.getElementById('header'));
=======

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

  componentDidUpdate () {
    console.log("Cube rerendered");
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
  componentDidUpdate () {
    console.log("CubeSide rerendered");
  }

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
>>>>>>> 609ab16407d04bf60cffd48310f956fad17345cf

/*
 ************************************************************************* Welcome
 */
class WelcomeSection extends React.Component {
<<<<<<< HEAD
    render() {
        const welcomeComponents = welcome.map((el) => <Text text={el.text} classNames={"presentation-text"} />);
        return (
            <Container id="welcome-elements" header={<>Welcome</>} sectionId="text-container">
                <section>{welcomeComponents}</section>
                <figure id="photo-container">
                    <img className="photo"
                        id="personal-photo"
                        src="./photos/Aris_Barlos.jpg"
                        alt="Aris Barlos - Software Engineer" />
                </figure>
            </Container>
        )
    }
}

ReactDOM.render(<WelcomeSection />, document.getElementById('welcome-section'));
=======
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
>>>>>>> 609ab16407d04bf60cffd48310f956fad17345cf

/*
 ************************************************************************* Projects
 */

<<<<<<< HEAD
class ProjectList extends React.Component {
    render() {
        return (
            <article className="list-container" id="projects">
                <h2 className="section-header"> My Most Interesting Projects</h2>
                {projects.map(project =>
                    <Project
                        id={'project-' + project.id}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />)}
            </article>
        );
    }
}

class Project extends React.PureComponent {
    render() {
        return (
            <section className="atomic-project" id={this.props.id}>
                <a href={this.props.link} target="_blank" hreflang="en">
                    <section className="project-info">
                        <h3 className="project-title"> {this.props.title}</h3>
                        <Text classNames="project-description" >
                            {this.props.description}
                        </Text>
                    </section>
                </a>
            </section>
        );
    }
}

ReactDOM.render(<ProjectList />, document.getElementById('projects-section'));
=======
class ProjectList extends React.PureComponent {
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
>>>>>>> 609ab16407d04bf60cffd48310f956fad17345cf

/*
 ****************************************************************** Technical Experience
 */
class ExperienceList extends React.Component {
<<<<<<< HEAD
    render() {
        const experienceComponents = experience.map((experienceElement) =>
            <ExperienceElement
                id={"experience-element-" + experienceElement.id}
                title={experienceElement.title}
                subtitle={experienceElement.subtitle}
                dateStart={experienceElement.dateStart}
                dateEnd={experienceElement.dateEnd}
                description={experienceElement.description}
                link={experienceElement.link}
            />
        );
        return (
            <Container id="experience-elements" header={<>Technical Experience</>}>
                <section id="experience">{experienceComponents}</section>
            </Container>
        )
    }
}

class ExperienceElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { classNames: "experience-description-container" }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        !this.state.classNames.includes("descriptionVisible")
            ? this.setState({
                classNames: "descriptionVisible"
            })
            : this.setState({
                classNames: ""
            });
    }
    render() {
        return (
            <section className='list-container experience-element-container' id={this.props.id}>
                <p className="time-period">
                    <time className="date-start"> {this.props.dateStart + " "}</time>
                    - <time className="date-end"> {" " + this.props.dateEnd} </time>
                </p>
                <div className="decoration-container">
                    <div className="dec-bullet"></div>
                    <div className="line"></div>
                </div>
                <section className="exp-text-container">
                    <div className="experience-title">
                        <div className="titles-container">
                            <h3 className="experience-main-title" onClick={this.handleToggle}> {this.props.title} </h3>
                            <h4 className="experience-secondary-title"> {this.props.subtitle} </h4>
                        </div>
                    </div>
                </section>
                <div className={"experience-description-container " + this.state.classNames}>
                    <Text classNames="experience-description">{this.props.description}</Text>
                    <p className="experience-link-container">
                        <a className="link experience-link" href={this.props.link} hreflang="en" target="_blank"> {this.props.link} </a>
                    </p>
                </div>
            </section>
        )
    }
}

ReactDOM.render(<ExperienceList />, document.getElementById('technical-experience'));
=======
  componentDidUpdate () {
    console.log("ExperienceList rerendered");
  }

  render () {
    const experienceComponents = experience.map((experienceElement) => (
      <ExperienceContainer
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
        <section id="experience">{experienceComponents}</section>
      </article>
    );
  }
}

class ExperienceContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isActive: false };
    this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle () { this.setState({ isActive: !this.state.isActive }); };

  render () {
    return (
      <section
        className="experience-element-container"
        id={this.props.id}
        onClick={this.handleToggle}>
        <TimeLength dateStart={this.props.dateStart} dateEnd={this.props.dateEnd} />
        <Line />
        <Experience
          isActive={this.state.isActive}
          title={this.props.title}
          subtitle={this.props.subtitle}
          description={this.props.description}
          link={this.props.link} />
      </section>
    );
  }
}

class TimeLength extends React.PureComponent {
  render () {
    return (
      <p className="time-period">
        <time className="date-start"> {this.props.dateStart}</time>-
        <time className="date-end"> {this.props.dateEnd} </time>
      </p>);
  }
}

class Line extends React.PureComponent {
  render () {
    return (
      <div className="decoration-container">
        <div className="dec-bullet"></div>
        <div className="line"></div>
      </div>);
  }
}

class Experience extends React.Component {
  render () {
    return (
      <div className="titles-container">
        <h3 className="experience-main-title" >{this.props.title}</h3>
        <h4 className="experience-secondary-title"> {this.props.subtitle} </h4>
        {this.props.isActive &&
          <ExperienceDescription
            description={this.props.description}
            link={this.props.link} />}
      </div>
    );
  }
}

class ExperienceDescription extends React.PureComponent {
  render () {
    return (
      <div className="experience-description-container" >
        <Text classNames="experience-description">
          {this.props.description}
        </Text>
        <Link
            linkClass="link experience-link"
            url={this.props.link}
            title={this.props.link}/>
      </div>);
  }
}

ReactDOM.render(
  <ExperienceList />,
  document.getElementById("technical-experience")
);
>>>>>>> 609ab16407d04bf60cffd48310f956fad17345cf

/*
 ********************************************************************* Skills
 */
class SkillList extends React.Component {
<<<<<<< HEAD
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
            <article className="list-container"
                id="atomic-skill-container">
                <h2 className="section-header">Skills</h2>
                <div id="skills"> {skillsComponents} </div>
            </article>
        )
    }
}

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasDescription: false, classNames: "" };
        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }
    handleTouchStart() {
        !this.state.classNames.includes("touchedSkill")
            ? this.setState({ classNames: "touchedSkill" })
            : this.setState({ classNames: "" });
    };
    handleTouchEnd(e) {
        if (this.state.classNames.includes("touchedSkill"))
            this.setState({ classNames: "" })
    }

    render() {
        return (
            <figure className={"skill-container " + this.state.classNames}
                id={"skill-" + this.props.id}
                onTouchStart={this.handleTouchStart}
                onTouchEnd={this.handleTouchEnd}>
                <img className="skill-image"
                    alt={this.props.title}
                    src={this.props.image}
                    onTouchStart={this.handleTouchStart}
                    onTouchEnd={this.handleTouchEnd} />
                <figcaption className="skill-text">
                    <h3 className="skill-title"> {this.props.title} </h3>
                    <div className="skill-description">
                        {this.props.description}
                        <a className="skill-url" href={this.props.url} hreflang="en" target="_blank">
                            {this.props.url}
                        </a>
                    </div>
                </figcaption>
            </figure>
        )
=======
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
>>>>>>> 609ab16407d04bf60cffd48310f956fad17345cf
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

<<<<<<< HEAD
ReactDOM.render(<SkillList />, document.getElementById('skills-section'));
=======
ReactDOM.render(<SkillList />, document.getElementById("skills-section"));
>>>>>>> 609ab16407d04bf60cffd48310f956fad17345cf

/*
 ************************************************************* Social Links
 */

class SocialLinksList extends React.Component {
<<<<<<< HEAD
    render() {
        const socialLinksComponents = socialLinks.map((socialLink) => (
            <Link
                id={'socialLink-' + socialLink.id}
                title={socialLink.title}
                url={socialLink.url}
                image={socialLink.image}
                linkClass={socialLink.linkClass}
                className={socialLink.textClass}
            >
                <p className={socialLink.textClass}>{socialLink.title}</p>
            </Link>
        ))
        return (
            <Container id="links-container" header={<>Where to find me</>} sectionId="social-links">
                {socialLinksComponents}
            </Container>
        )
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
            <p className={props?.textClass}>{props?.title}</p>
        </a>
    );
};

ReactDOM.render(
    <SocialLinksList />,
    document.getElementById("social-links-section")
);
=======
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
      <p className={props?.textClass}>{props?.title}</p>
    </a>
  );
};

ReactDOM.render(
  <SocialLinksList />,
  document.getElementById("social-links-section")
);
>>>>>>> 609ab16407d04bf60cffd48310f956fad17345cf
