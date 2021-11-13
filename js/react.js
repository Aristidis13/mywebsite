class ProjectList extends React.Component {
    render() {
        return (
            <section className="project-info">
                <h3 className="project-title"> My Projects</h3>
                &lt;&excl;-- This is the block that contains the presentational note --&gt;
                <p class="project-description">
                    This is a collection of all the projects I wanted to make publicly available. Some of them are on Github while others exist only here.
                    Also in some here can be found the exercise and in Github can be found the full implementation.
                    All projects are under the MIT License as described in Github.
                    In a nutshel, that means that you can use whatever you find useful but you cannot claim it as yours.
                </p>
            </section>
        );
    }
}
ReactDOM.render(
<ProjectList />, document.getElementById('projects')
);

class Project extends React.Component {
    render() {
        return (
            <section className="project-info">
                <h3 className="project-title"> My Projects</h3>
                <p className="project-description">
                    This is a compilation of a plethora of subjects. Fork-join programs, semaphores implemented in C, Bash Scripting and theoritical analysis
                    for a few Scheduling Algorithms (ex. Round-Robbin) are the most important elements of this project. Code can be found in Github
                    <a href="https://github.com/Aristidis13/Bash_Scripting/"> here </a> and <a href="https://github.com/Aristidis13/fork-join-semaphores-in-C/"> here </a>
                    and the queries for the exercise can be found <a href="/files/os.rar">here</a>.
                </p>
            </section>
        );
    }
}
ReactDOM.render(
<ProjectList />, document.getElementById('projects')
);