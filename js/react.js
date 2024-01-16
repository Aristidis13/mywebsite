class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      welcomeSectionIsVisible: true,
    };
    this.hide = this.hide.bind(this);
  }
  hide() {
    this.setState({ welcomeSectionIsVisible: false });
    document.documentElement.style.overflowY = "scroll"
  }
  render() {
    return <>
      {this.state.welcomeSectionIsVisible && <WelcomeView hide={this.hide} />}
      <h1 style={{ display: "none" }}> Aris Barlos a Frontend Developer!</h1>
      <ProjectList />
      <ExperienceList />
      <SkillList />
      <SocialLinksList />
    </>
  }
}

ReactDOM.render(<Cube />, document.getElementById("header"))
ReactDOM.render(<App />, document.getElementById("main"));