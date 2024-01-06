/*Class components that are reusable between different folders and modules across pages*/

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

const Link = (props) => {
    return (
        <a
            className={props.linkClass}
            id={props.id}
            href={props.url}
            target="_blank"
            rel="nofollow"
        >
            <p className={props.textClass}>{props.title}</p>
        </a>
    );
};