class WelcomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textAnimation: "",
            divAnimation: "",
            presentationSlide: "",
            continueAnimation: ""
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            presentationSlide: " presentation-slide-animation",
            continueAnimation: " continue-animation",
            divAnimation: " divAnimation"
        })
        document.documentElement.style.overflowY = "scroll"
    }

    render() {
        const welcomeComponents = welcome.map((sentence, index) => <Text
            key={"welcome-" + index}
            text={<span className={`word `}> {sentence.text} </span>}
            classNames={"presentation-text " + this.state.presentationSlide}
        />);

        return (
            <div id="welcome-view" className={this.state.divAnimation}>
                <section id="presentation-slide">
                    <div id="text-container"> {welcomeComponents}</div>
                </section>
                <span className={"button-text " + this.state.continueAnimation} onClick={this.handleClick}> View My Site!</span>
            </div>
        )
    }
}