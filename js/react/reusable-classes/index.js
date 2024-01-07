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

const Link = ({
    linkClass, id, url, willOpenSelf = false, textClass, title
}) => {
    return (
        <a
            className={linkClass}
            id={id}
            href={url}
            target={willOpenSelf ? "_self" : "_blank"}
            rel="nofollow"
        >
            <p className={textClass}>{title}</p>
        </a>
    );
};