class Cube extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spin: 0,
        };
        this.rotateCube = this.rotateCube.bind(this);
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

    render = () => (
        <nav id="navbar">
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
    );
}

class CubeSide extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handlePointerUp = this.handlePointerUp.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePointerDown = this.handlePointerDown.bind(this);
        this.handlePointerMove = this.handlePointerMove.bind(this);
        this.handleRotateState = this.handleRotateState.bind(this);
        this.state = {
            pointerStartX: null,
            cancelClick: false,
        }
    }

    handleRotateState() {
        this.setState(prev => ({
            ...prev,
            cancelClick: true,
            pointerStartX: null
        }))
    }

    handleClick() {
        if(this.state.cancelClick === false) {
            document.getElementById(this.props.section).scrollIntoView();
        }
    }

    /**
     * Locates the starting point of the animation
     * @param {object} e - The pointerDown event object
     */
    handlePointerDown(e) {
        this.setState(prev=>({
            ...prev,
            pointerStartX: e.clientX
        }));
    }

    /**
     * Stops `cancelClick` and clears `pointerStartX` state
     */
    handlePointerUp() {
        this.setState(prev => ({
            ...prev,
            cancelClick: false,
            pointerStartX: null
        }));
    }

    handlePointerMove(e) {
        if(!this.state.pointerStartX) return;

        const endPoint = e.clientX;
        const startPoint = this.state.pointerStartX;
        const movementPointerDistance = endPoint - startPoint;
        const cubeWillRotate = Math.abs(movementPointerDistance) > 7;

        const action = cubeWillRotate ? 'rotate' : null;

        if (action === 'rotate' && endPoint > startPoint) {
            this.handleRotateState()
            this.props.rotateCube('right');
        }
        else if(action === 'rotate' && endPoint < startPoint) {
            this.handleRotateState();
            this.props.rotateCube('left');
        }
    }

    render() {
        return (
            <li className={this.props.classNames}>
                <div
                    className="link listItem"
                    id={this.props.id}
                    onClick={this.handleClick}
                    onPointerUp={this.handlePointerUp}
                    onPointerCancel={this.handlePointerUp}
                    onPointerMove={this.handlePointerMove}
                    onPointerDown={this.handlePointerDown}
                >
                    <h2 className="nav-title"> {this.props.title}</h2>
                </div>
            </li >
        );
    }
}

ReactDOM.render(<Cube />, document.getElementById("header"));