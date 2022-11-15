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
      className: ""
    };
    this.handlePointerDown = this.handlePointerDown.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
  }

  handlePointerDown() {
    this.setState({ className: "pausedAnimation" });
  }

  handlePointerUp() {
    this.setState({ className: "" });
  }

  render() {
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
class WelcomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
    this.hide = this.hide.bind(this);
  }

  hide() {
    this.setState({ isVisible: false });
  }

  render() {
    const welcomeComponents = welcome.map((el) => (
      <Text text={el.text} classNames={"presentation-text"} />
    ));


    return (
      this.state.isVisible ?
        <div id="welcome-view">
          <section id="presentation-slide">
            <div id="text-container"> {welcomeComponents}</div>
          </section>
          <span className="button-text" onClick={() => {
            this.hide();
            console.log('View my site clicked')
            console.log('a. The text disappears')
            console.log('b. The view diasppears')
          }}> View My Site!</span>
        </div> : null)
  }
}

ReactDOM.render(<WelcomeView />, document.getElementById("welcome"));

/*
 ************************************************************************* Welcome
//  */
// class WelcomeSection extends React.Component {
//   render() {
//     const welcomeComponents = welcome.map((el) => (
//       <Text text={el.text} classNames={"presentation-text"} />
//     ));
//     return (
//       <article className="list-container" id="welcome-elements">
//         <SectionHeader title="Welcome" />
//         <div id="text-container"> {welcomeComponents} </div>
//         <figure id="photo-container">
//           <img
//             className="photo"
//             id="personal-photo"
//             src="./photos/Aris_Barlos.jpg"
//             alt="Aris Barlos - Software Engineer"
//           />
//         </figure>
//       </article>
//     );
//   }
// }

// ReactDOM.render(<WelcomeSection />, document.getElementById("welcome-section"));

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
      />
    ));
    return (
      <article className="list-container" id="projects">
        <SectionHeader title=" My Most Interesting Projects" />
        {projectComponents}
      </article>
    );
  }
}

class Project extends React.PureComponent {
  render() {
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
      <article className="list-container" id="experience-elements">
        <SectionHeader title="Technical Experience" />
        {experienceComponents}
      </article>
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
  render() {
    return this.props.isActive && (
      <Text classNames="experience-description">
        {this.props.description}
        <a
          className="link experience-link"
          href={this.props.link}
          target="_blank"
        > {this.props.link} </a>
      </Text>
    )
  }
};

ReactDOM.render(
  <ExperienceList />,
  document.getElementById("technical-experience")
);

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
      <article className="list-container" id="atomic-skill-container">
        <SectionHeader title="Skills" />
        <div id="skills">{skillsComponents}</div>
      </article>
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
      <article className="list-container" id="links-container">
        <SectionHeader title="Contact Me" />
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
