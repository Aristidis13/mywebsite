class SocialLinksList extends React.Component {
    render() {
        const socialLinksComponents = socialLinks.map((socialLink, id) => (
            <Link
                id={"socialLink-" + id}
                title={socialLink.title}
                url={socialLink.url}
                image={socialLink.image}
                linkClass={socialLink.linkClass}
                textClass={socialLink.textClass}
            />
        ));
        return (
            <section className="list-container" id="social-links-section">
                <SectionHeader title="Contact Me" />
                <div id="social-links">{socialLinksComponents}</div>
            </section>
        );
    }
}