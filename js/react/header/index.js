const SwipeArrows = ({ rotateCube }) => {
    return <div class="swipeArrows">
        <div
            className="leftArrowContainer"
            onClick={() => { rotateCube('left') }}
        >
            <div class="arrow leftArrow" >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div
            className="rightArrowContainer"
            onClick={() => { rotateCube('right') }}
        >
            <div class="arrow rightArrow">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
}

class Cube extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spin: 0 };
        this.rotateCube = this.rotateCube.bind(this)
    }
    rotateCube(direction) {
        direction === 'right'
            ? this.setState({
                ...this.state,
                spin: this.state.spin + 90,
            })
            : this.setState({
                ...this.state,
                spin: this.state.spin - 90,
            })
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ spin: this.state.spin + 90 });
        }, 10000);
    }

    render = () => (<>
        <nav id="navbar">
            <ul id="cube" style={{ transform: 'rotateY(' + this.state.spin + 'deg)' }}>
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
        <SwipeArrows rotateCube={this.rotateCube} />
    </>
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