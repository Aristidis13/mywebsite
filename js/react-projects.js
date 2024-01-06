/**
 * Projects Page
 */
class ProjectsPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const project = projects.find(({ id, title, url }) => url === this.props.url)

        return (<video width="750" height="500" controls src="mifid.webm" type />)
    }
}