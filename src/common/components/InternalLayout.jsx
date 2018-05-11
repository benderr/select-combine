import React from 'react';

class InternalLayout extends React.Component {
    render() {
        return (
            <div class="poss">
                <section class="main">
                    <div class="section_content full_width">
                        {this.props.children}
                    </div>
                </section>
            </div>

        );
    }
}

export default InternalLayout;