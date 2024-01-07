/**
 * For future navigation between projects
 */
class VideoButtons extends React.Component {
    constructor(props) {
        super(props);
        this.pageUrl = globalThis.window.location.href;
        this.state = {
            everyVideoAppears: !this.pageUrl.split('#')?.[1]
        }
    }

    render() {
        const videos = demoUrls.map((links, video) => links + ' | ' + video.title.toUpperCase(), '')
        return (
            <nav className="list-container" id="videos">
                {videos}
            </nav>
        );
    }
}
class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.pageUrl = globalThis.window.location.href;
        this.state = {
            everyVideoAppears: !this.pageUrl.split('#')?.[1]
        }
    }

    render() {
        const videos = demoUrls.map((project) => (
            <Video
                everyVideoAppears={this.state.everyVideoAppears}
                {...project}
            />));
        return (
            <section className="list-container" id="videos">
                <SectionHeader title={this.everyVideoAppears ? "Demos of the projects I built" : "Project Details"} />
                {/* <VideoButtons /> */}
                {videos}
            </section>
        );
    }
}

class Video extends React.PureComponent {
    constructor(props) {
        super(props);
        this.appears = this.props.everyVideoAppears || globalThis.window.location.href.split('#')?.[1] === this.props.id
    }


    render() {
        return this.appears && <section id={this.props.id} className="video-section">
            <video className="video" width="320" height="240" controls>
                <source src={this.props.url} type="video/webm" />
            </video>
        </section>
    }
}
ReactDOM.render(<VideoList />, document.getElementById("main"))
