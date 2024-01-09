class AnimatedText extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div class="content">
            <h2>Swipe or Touch Anywhere!</h2>
        </div>
    }
}

class Arrow extends React.Component {
    render() {
        return <div
            className={this.props.leftArrowContainer}
            onClick={this.props.onClick}
        >
            <div class={"arrow " + this.props.arrowContainerClassName} >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    }
}

class SwipeArrows extends React.Component {
    render() {
        return <div class="swipeArrows">
            <Arrow
                containerClassName="leftArrowContainer"
                onClick={() => { this.props.rotateCube('left') }}
                arrowContainerClassName='leftArrow'
            />
            <Arrow
                containerClassName="rightArrowContainer"
                onClick={() => { this.props.rotateCube('right') }}
                arrowContainerClassName='rightArrow'
            />

        </div>
    }
}

class Cube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spin: 0,
            pointerStartX: null,
            pointerEndX: null
        };
        this.locateStartPoint = this.locateStartPoint.bind(this);
        this.locateEndPoint = this.locateEndPoint.bind(this)
        this.rotateCube = this.rotateCube.bind(this);
        this.startX = React.createRef();
    }

    locateStartPoint(event) {
        this.startX = event.clientX
    }

    locateEndPoint(e) {
        this.endX = e.clientX
        this.swipeLeft = this.startX > this.endX;
        this.swipeLeft ? this.rotateCube('left') : this.rotateCube('right')
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

    render = () => (<>
        <nav
            id="navbar"
            onPointerDown={e => this.locateStartPoint(e)}
            onPointerUp={e => this.locateEndPoint(e)}
        >
            <ul
                id="cube"
                style={{ transform: 'rotateY(' + this.state.spin + 'deg)' }}
            >
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
        {/* <SwipeArrows rotateCube={this.rotateCube} /> */}
        {/* <AnimatedText /> */}
    </>
    );
}

class CubeSide extends React.PureComponent {
    constructor(props) {
        super(props);
        this.stopBubbling = this.stopBubbling.bind(this);
    }

    stopBubbling(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <li
                className={this.props.classNames}
                onPointerUp={e => this.stopBubbling(e)}
                onPointerDown={e => this.stopBubbling(e)}
            >
                <a
                    className="link list-item"
                    id={this.props.id}
                    href={"#" + this.props.section}
                    rel="nofollow"
                >
                    <h2 className="nav-title"> {this.props.title}</h2>
                </a>
            </li >
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