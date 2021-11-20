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
    <ProjectList />, document.getElementById('projects-section')
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
            isOpen:false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.props.toggleClass(this.props.id);
    }
    render() {
        return (
            <section class="list-container experience-element-container" id={this.props.id}>
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
                    <div class="experience-description-container">
                        <p class="experience-description">{this.props.description}</p>
                        <p class="experience-link-container"> 
                            <a class="link experience-link" href={this.props.link}> {this.props.link} </a>
                        </p>
                    </div>
                </section>
                <p class="read-more" onClick={this.handleToggle}> Read More </p>
            </section>
        )
    }
}

ReactDOM.render(
    <ExperienceList/>,document.getElementById('technical-experience')
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