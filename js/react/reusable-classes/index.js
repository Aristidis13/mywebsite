/** *********************************************************************** Intro
 */
class Text extends React.PureComponent {
    render() {
        return (
            <p className={"text " + this.props.classNames} id={this.props.propId}>
                {this.props.text || this.props.children}
            </p>
        );
    }
};
class SectionHeader extends React.PureComponent {
    render() {
        return (
            <h2
                className="section-header"
                id={this.props.id}>
                {this.props.title}
            </h2>);
    }
}