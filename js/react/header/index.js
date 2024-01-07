class Cube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spin: 0,
            degrees: '',
        };
    }

    componentDidMount() {
        setInterval(() => {
            const state = this.state;
            this.setState({ spin: state.spin + 90 });
            this.setState({ degrees: 'rotateY(' + this.state.spin + 'deg)' });
        }, 3000);
    }

    render = () => (
        <nav id="navbar">
            <ul id="cube" style={{ transform: this.state.degrees }}>
                {cubeSides.map((side, id) => (
                    <CubeSide
                        id={"cubeSide-" + id}
                        title={side.title}
                        section={side.section}
                        classNames={side.class}
                        isInProjectsPage={this.props.isInProjectsPage}
                    />
                ))}
            </ul>
        </nav>
    );
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

ReactDOM.render(
    globalThis.window.location.href.includes('/projects')
        ? <Link
            id="main-page-redirector"
            title='Return to Main Page'
            url='/'
            linkClass="link link-container return-to-main-link"
            textClass="text-link-title"
            willOpenSelf
        />
        : <Cube />,
    document.getElementById("header"));