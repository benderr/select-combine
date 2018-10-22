import React from 'react';
import PropTypes from "prop-types";

class InternalLayout extends React.Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    }
    render() {
        return (
            <div className="poss">
                <section className="main">
                    <div className="section_content full_width">
                        {this.props.children}
                    </div>
                </section>
            </div>

        );
    }
}

export default InternalLayout;