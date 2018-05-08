import React from 'react';
import {withRouter} from 'react-router';

class NotFoundLayout extends React.Component {
    render() {
        return (
            <div className="reg_var2">
                <div className="page4041">
                    <div className="content_wrap">
                        <div className="content_cell">
                            <div className="content">
                                <h1>Page not found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(NotFoundLayout)

