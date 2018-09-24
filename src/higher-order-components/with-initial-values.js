import React, { Component } from 'react';


export const withInitialValues = BaseComponent => (
    class extends Component {
        render(){
            return (<BaseComponent
                {...this.props}
                initialValues={this.props}
                enableReinitialize />);
        }
    }
);