/************************************************************************* Welcome
 */
class Cube extends React.Component {
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
            <nav id="navbar">
                <ul id="cube">
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
    handleTitleClick(id) {
        console.log(id+' was clicked');
    }
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
            toggleClass = {this.handleTitleClick}
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
            className: 'list-container experience-element-container'
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.props.toggleClass(this.props.id);
    }
    render() {
        return (
            <section class={this.state.className} id={this.props.id}>
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
                <p class="read-more" onClick={this.handleToggle}> Read More </p>
                <div class="experience-description-container">
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
            <article class="list-container" id="atomic-skill-container">
                <h2 className="section-header"> Skills Until Now</h2>
                <div id="skills">
                    {skillsComponents}
                </div>
            </article>
        )
    }
}

class Skill extends React.Component {
    render() {
        return (
            <figure class="skill-container" id={"skill-"+this.props.id}>
                <img class="skill-image" src={this.props.image} />
                <figcaption class="skill-text">
                    <h3 class="skill-title"> {this.props.title} </h3>
                    <div class="skill-description">
                        {this.props.description}
                    </div>
                    <a href={this.props.url} class="skill-url" target="_blank">
                        {this.props.url}
                    </a>
                </figcaption>
            </figure>
        )
    }
}

ReactDOM.render(
    <SkillList />, document.getElementById('skills-section')
);

/* 
 ************************************************************* Social Links
 */

class SocialLinksList extends React.Component {
    render() {
        const socialLinksComponents = socialLinks.map( (socialLink) => ( 
            <SocialLink 
                id= {'socialLink-' + socialLink.id}
                title = {socialLink.title}
                url = {socialLink.url}
                image = {socialLink.image}
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

class SocialLink extends React.Component {
    render() {
        return (
            <a class="link link-container social-link"
               id={this.props.id}
               href={this.props.url}
               target="_blank"
               rel="nofollow">
                <p class="social-link-title">{this.props.title}</p>
            </a>
        )
    }
}

ReactDOM.render(
    <SocialLinksList />, document.getElementById('social-links-section')
);