class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      welcomeSectionIsVisible: true,
    };
    this.hide = this.hide.bind(this);
    this.clickBackToTop = this.clickBackToTop.bind(this);
  }
  hide() {
    this.setState({ welcomeSectionIsVisible: false });
    document.documentElement.style.overflowY = "scroll"
  }

  clickBackToTop() {
    if(this.state.welcomeSectionIsVisible) {
      // Add the animation class
      document.getElementById('welcome-view').classList += "divAnimation";
      
      // Wait the animation before clearing it
      setTimeout(()=> {
        this.hide();
      },1500);
    } else if(!this.state.welcomeSectionIsVisible) {
      window.scrollTo(0,0);
    }
  };

  render() {
    return <>
      {this.state.welcomeSectionIsVisible && <WelcomeView hide={this.hide} />}
      <h1 style={{ display: "none" }}> Aris Barlos a Frontend Developer!</h1>
      <button onClick={this.clickBackToTop} id="back-to-top">
        <img src={this.state.welcomeSectionIsVisible ? "/photos/x.svg" : "/photos/up.svg"} />
      </button>
      <ProjectList />
      <ExperienceList />
      <SkillList />
      <SocialLinksList />
    </>
  }
}

ReactDOM.render(<Cube />, document.getElementById("header"))
ReactDOM.render(<App />, document.getElementById("main"));