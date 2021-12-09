/************************************************************************* Intro
 */
class Cube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className:  ""
        }
        this.handlePointerDown = this.handlePointerDown.bind(this);
        this.handlePointerUp = this.handlePointerUp.bind(this);
    }
    handlePointerDown(event) {
        this.setState({ className:"pausedAnimation"})
        
    }
    handlePointerUp(event) {
        this.setState({ className:""})
    }
    render() {
        const sides = cubeSides.map((side)=>(
            <CubeSide
                id = {'cubeSide-'+side.id}
                title = {side.title}
                section = {side.section}
                class = {side.class}
            />
        ));
        return(
            <nav id="navbar" onPointerDown={this.handlePointerDown} onPointerUp={this.handlePointerUp}>
                <ul id="cube" class={this.state.className}>
                    {sides}
                </ul>
            </nav>
        )
    }
}

class CubeSide extends React.Component {
    render() {
        return(
            <li class={this.props.class}>
                <a
                    class= "link list-item"
                    id={ this.props.id}
                    href={"#"+this.props.section}
                    rel="nofollow">
                    <h2 class="nav-title"> {this.props.title}</h2>
                </a>
            </li>
        )
    }
}

ReactDOM.render(
    <Cube />,
    document.getElementById('header')
);

/*
 ************************************************************************* Welcome
 */
 class WelcomeSection extends React.Component {
    render() {
        const welcomeComponents = welcome.map((welcomeElement) => (
        <WelcomeElement
            id =   { "text-element-"+welcomeElement.id  }
            text = { welcomeElement.text }
        />
        )
         );
        return (
            <article class="list-container" id="welcome-elements">
                <h2 class="section-header"> Welcome</h2>
                <p id="text-container">
                        {welcomeComponents}
                </p>
                <figure id="photo-container">
                    <img class="photo"
                         id="personal-photo"
                         src="./photos/Aris_Barlos.jpg"
                         alt="Aris Barlos - Software Engineer" />
                </figure>
            </article>
        )
    }
}

class WelcomeElement extends React.Component {
    render() {
        return (
            <p class="presentation-text" id={this.props.id}>
                {this.props.text}
            </p>
        )
    }
}

ReactDOM.render(
    <WelcomeSection/>,
    document.getElementById('welcome-section')
)

/*
 ************************************************************************* Projects
 */

class ProjectList extends React.Component {
    render() {
        const projectComponents = projects.map( (project) => (
            <Project
                id = {'project-'+project.id}
                title = {project.title}
                description={project.description}
                link = {project.link}
            />
        ));
        return (
            <article class="list-container" id="projects">
                <h2 class="section-header"> My Most Interesting Projects</h2>
                {projectComponents}
        </article>
        );
    }
}


class Project extends React.Component {
    render() {
        return (
            <section class="atomic-project" id={ this.props.id}>
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
    <ProjectList />,
    document.getElementById('projects-section')
);


/*
 ****************************************************************** Technical Experience
 */
class ExperienceList extends React.Component {
    render() {
        const experienceComponents = experience.map((experienceElement) => 
        <ExperienceElement 
            id = {"experience-element-"+experienceElement.id}
            title = {experienceElement.title}
            subtitle = {experienceElement.subtitle}
            dateStart = {experienceElement.dateStart}
            dateEnd = {experienceElement.dateEnd}
            description = {experienceElement.description}
            link = {experienceElement.link}
        />
        );
        return (
            <article class="list-container" id="experience-elements">
                <h2 class="section-header"> Technical Experience</h2>
                <p id="experience-intro-paragraph"></p>
                <section id="experience">
                    {experienceComponents}
                </section>
            </article>
        )
    }
}

class ExperienceElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "experience-description-container",
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        !this.state.className.includes("descriptionVisible")
            ? this.setState({
                className: "experience-description-container descriptionVisible" 
            })
            : this.setState({
                className: "experience-description-container"
            });
    }
    render() {
        return (
            <section class='list-container experience-element-container' id={this.props.id}>
                <p class="time-period">
                    <time class="date-start"> {this.props.dateStart + " "}</time>
                    - <time class="date-end"> {" "+ this.props.dateEnd} </time>
                </p>
                <div class="decoration-container">
                    <div class="dec-bullet"></div>
                    <div class="line"></div>
                </div>
                <section class="exp-text-container">
                    <div class="experience-title">
                        <div class="titles-container">
                            <h3 class="experience-main-title" onClick={this.handleToggle}> {this.props.title} </h3>
                            <h4 class="experience-secondary-title"> {this.props.subtitle} </h4>
                        </div>
                    </div>
                </section>
                <div class={this.state.className}>
                    <p class="experience-description">{this.props.description}</p>
                    <p class="experience-link-container"> 
                        <a class="link experience-link" href={this.props.link} target="_blank"> {this.props.link} </a>
                    </p>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <ExperienceList/>,
    document.getElementById('technical-experience')
)


/*
 ********************************************************************* Skills
 */

class SkillList extends React.Component {
    render() {
        const skillsComponents = skills.map( (skill) => ( 
            <Skill 
                id= {skill.id}
                title = {skill.title}
                url = {skill.url}
                image = {skill.image}
                description = {skill.description}
            />
        ));
        return (
            <article className="list-container" 
                     id="atomic-skill-container">
                <h2 className="section-header">Skills</h2>
                <div id="skills">
                    {skillsComponents}
                </div>
            </article>
        )
    }
}

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasDescription: false,
            className: "skill-container"
        }
        this.handleTouchStart = this.handleTouchStart.bind(this);
    }
    handleTouchStart(e) {
        !this.state.className.includes("touchedSkill")
            ? this.setState({ className: "skill-container touchedSkill"})
            : this.setState({ className: "skill-container"});
    }

    render() {
        return (
            <figure class={this.state.className}
                    id={"skill-"+this.props.id}
                    onTouchStart={this.handleTouchStart} 
                ><img class="skill-image" src={this.props.image} />
                <figcaption class="skill-text"
                            onTouchStart={this.handleTouchStart}>
                    <h3 class="skill-title"> {this.props.title} </h3>
                    <div class="skill-description">
                        {this.props.description}
                        <a class="skill-url" href={this.props.url} target="_blank">
                            {this.props.url}
                        </a>
                    </div>
                </figcaption>
            </figure>
        )
    }
}

ReactDOM.render(
    <SkillList />, document.getElementById('skills-section')
);

/* 
 ************************************************************* News
 */
 class NewsList extends React.Component {
    render() {
        const newsElements = news.map( (newel) => ( 
            <New 
                id= {'new-' + newel.id}
                title = {newel.title}
                url = {newel.link}
                text = {newel.text}
            />
        ))
        return (
            <article  class="list-container"  id="news-container">
                <h2 class="section-header"> News</h2>
                <section class="news-container"  id="news">
                    {newsElements}
                </section>
            </article>
        )
    }
}

class New extends React.Component {
    render() {
        return (
            <section class="new-container" id={this.props.id}>
                    <h3 class="news-title">{this.props.title}</h3>
                    <p class="news-description">
                        {this.props.text}
                    </p>
            </section>
        )
    }
}

ReactDOM.render(
    <NewsList/>,document.getElementById('news-section')
)

/* 
 ************************************************************* Social Links
 */

class SocialLinksList extends React.Component {
    render() {
        const socialLinksComponents = socialLinks.map( (socialLink) => ( 
            <Link 
                id= {'socialLink-' + socialLink.id}
                title = {socialLink.title}
                url = {socialLink.url}
                image = {socialLink.image}
                linkClass= {socialLink.linkClass}
                textClass= {socialLink.textClass}
            />
        ))
        return (
            <article  class="list-container"  id="links-container">
                <h2 className="section-header"> Where to find me</h2>
                <div id="social-links">
                    {socialLinksComponents}
                </div>
            </article>
        )
    }
}

class Link extends React.Component {
    render() {
        return (
            <a class={this.props.linkClass}
               id={this.props.id}
               href={this.props.url}
               target="_blank"
               rel="nofollow">
                <p class={this.props.textClass}>{this.props.title}</p>
            </a>
        )
    }
}

ReactDOM.render(
    <SocialLinksList />, document.getElementById('social-links-section')
);
