class Arrow extends React.Component {
    render() {
        return <div
            className={this.props.containerClassName}
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
        };
        this.handlePointerUp = this.handlePointerUp.bind(this);
        this.rotateCube = this.rotateCube.bind(this);
    }

    handlePointerUp(e) {
        const pointerEndX = e.clientX
        const centerOfDocument = document.body.clientWidth / 2;
        const action = pointerEndX < centerOfDocument ? 'left' : 'right';
        this.rotateCube(action);
        e.stopPropagation()
    }

    rotateCube(direction) {
        if(direction === 'right') {
            this.setState({
                ...this.state,
                spin: this.state.spin + 90,
            })
        }
        else if(direction === 'left') {
            this.setState({
                ...this.state,
                spin: this.state.spin - 90,
            })
        }
    }

    render = () => (<>
        <nav
            id="navbar"
            onPointerUp={this.handlePointerUp}
            onPointerCancel={this.handlePointerUp}
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
                        rotateCube={this.rotateCube}
                    />
                ))}
            </ul>
        </nav>
    </>
    );
}

class CubeSide extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handlePointerUp = this.handlePointerUp.bind(this);
        this.state = {
            pointerStartX: null,
        }
    }

    handlePointerUp(e) {
        const pointerEndX = e.clientX
        const movementPointerDistance = pointerEndX - this.state.pointerStartX;

        this.setState(prev => ({...prev, pointerStartX: null }));
        const action = Math.abs(movementPointerDistance) > 15 ? 'rotate' : 'navigate';

        if(action==='navigate') {
          document.getElementById(this.props.section).scrollIntoView();
        }
        else if (action === 'rotate' && pointerEndX > this.state.pointerStartX) {
            this.props.rotateCube('right');
        }
        else if(action === 'rotate' && pointerEndX < this.state.pointerStartX) {
            this.props.rotateCube('left');
        }
        e.stopPropagation()
    }

    render() {
        return (
            <li className={this.props.classNames}>
                <div
                    className="link listItem"
                    id={this.props.id}
                    onPointerUp={this.handlePointerUp}
                    onPointerCancel={this.handlePointerUp}
                    onPointerDown={e => {
                        this.setState(prev=>({
                            ...prev,
                            pointerStartX: e.clientX
                        }))
                        e.stopPropagation()
                    }}
                >
                    <h2 className="nav-title"> {this.props.title}</h2>
                </div>
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