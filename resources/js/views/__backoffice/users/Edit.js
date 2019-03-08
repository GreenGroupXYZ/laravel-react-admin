import React, { Component } from 'react';
import { BackofficeTemplate } from '../../';

export class Edit extends Component {
    render() {
        const { params } = this.props.match;

        return (
            <BackofficeTemplate {...this.props} pageTitle="Edit user">
                <h1>Edit user: {params.id}</h1>
            </BackofficeTemplate>
        );
    }
}