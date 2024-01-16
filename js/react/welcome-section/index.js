class WelcomeView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idOfTextToPresent: 0,
            divAnimation: "",
            presentationSlide: "",
        };
        this.changeTextInScreen = this.changeTextInScreen.bind(this)
        this.updateState = this.updateState.bind(this);
        this.textAnimationDuration = 4000
        this.secondInMilliseconds = 1000
        this.halfTextAnimationTimeInSecs = this.textAnimationDuration / 2000
    }

    updateState(changes) {
        this.setState({
            ...this.state,
            ...changes
        })
    }

    changeTextInScreen() {
        const { state: { idOfTextToPresent },
            updateState,
            props: { hide }
        } = this

        if (idOfTextToPresent < welcome.length - 1)
            updateState({
                idOfTextToPresent: idOfTextToPresent + 1
            })
        else if (idOfTextToPresent === welcome.length - 1) {
            updateState({
                ...this.state,
                presentationSlide: "presentation-slide-animation",
                divAnimation: "divAnimation"
            })
            setTimeout(hide, this.halfTextAnimationTimeInSecs * this.secondInMilliseconds)
        }
    }

    componentDidMount() {
        setInterval(this.changeTextInScreen, this.textAnimationDuration);
    }

    render() {
        const welcomeComponents = welcome.map((sentence, index) => <Text
            id={index.toString()}
            key={"welcome-" + index}
            text={<span className="word" style={{
                opacity: 0,
                animation: index === 0
                    ? `TextFadeIn ${this.halfTextAnimationTimeInSecs}s ease ${this.halfTextAnimationTimeInSecs}s forwards,
                       TextFadeOut 1s ease ${this.textAnimationDuration / this.secondInMilliseconds - 1}s forwards`
                    : `TextFadeIn ${this.halfTextAnimationTimeInSecs}s ease 0s forwards,
                       TextFadeOut 1s ease ${this.textAnimationDuration / this.secondInMilliseconds - 1}s forwards`
            }}> {sentence.text} </span >}
            classNames={"presentation-text " + this.state.presentationSlide}
        />);


        return (
            <div id="welcome-view" className={this.state.divAnimation}>
                <section id="presentation-slide">
                    <div id="text-container">
                        {welcomeComponents?.[this.state.idOfTextToPresent]}
                    </div>
                </section>
            </div>
        )
    }
}