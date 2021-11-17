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
            <article id="projects">
                <h2 className="project-header"> My Most Interesting Projects</h2>
                {projectComponents}
        </article>
        );
    }
}


class Project extends React.Component {
    render() {
        return (
            <section className="atomic-project" id={ this.props.id}>
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
    <ProjectList />, document.getElementById('projects-section')
);


/*
 ****************************************************************** Technical Experience
 */
class ExperienceList extends React.Component {
    render() {
        const experienceComponents = experience.map((experienceElement) => 
        <experienceElement 
            id = {"experience-element-"+experience.id}
            title = {experience.title}
            subtitle = {experience.subtitle}
            dateStart = {experience.dateStart}
            dateEnd = {experience.dateEnd}
            description = {experience.description}
        />
        );
        return (
            <article id="experience-elements">
                <h2> Technical Experience</h2>
                <p id="experience-intro-paragraph"></p>
                <section id="experience">
                    {experienceComponents}
                </section>
            </article>
        )
    }
}

class experienceElement extends React.Component {
    render() {
        return (
            <section class="experience-element-container" id={this.props.id}>
                <p class="time-period">
                    <time class="date-start" dateTime=""> {this.props.dateStart}</time>
                    - <time class="date-end"dateTime=""> {this.props.dateEnd} </time>
                </p>
                <div class="experience-title">
                    <h3 class="experience-main-title"> {this.props.title} </h3>
                    <h4 class="experience-secondary-title"> {this.props.subtitle} </h4>
                </div>
                <div class="decoration-container">
                    <div class="dec-line"></div>
                    <div class="dec-bullet"></div>
                    <div class="dec-line"></div>
                </div>
                <p class="experience-description"> {this.props.description}</p>
            </section>
        )
    }
}


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
            <article id="atomic-skill-container">
                <h2 className="project-header"> Skills Until Now</h2>
                <div id="skills">
                    {skillsComponents}
                </div>
            </article>
        )
    }
}

class Skill extends React.Component {
    render(){
        return (
            <figure class="skill-container" id={"skill-"+this.props.id}>
                <img class="skill-image" src={this.props.image} />
                <figcaption class="skill-text">
                    <h3 class="skill-title"> {this.props.title} </h3>
                    <div class="skill-description">
                        {this.props.description}
                    </div>
                    <a href={this.props.url} class="skill-url">
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