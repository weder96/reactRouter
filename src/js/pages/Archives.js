import React from 'react';

import Article from '../components/Article';

export default class Archives extends React.Component {
    render() {
        const { query } = this.props.location;
        const { params } = this.props;
        const { article } = params;
        const { date, filter } = query;

        /* jshint ignore:start */
        const Articles = [
            'Some Article',
            'Some Other Article',
            'Yet Another Article',
            'Still More',
            'Fake Article',
            'Partial Article',
            'American Article',
            'Mexican Article'
        ].map((title, i) => <Article key={i} title={title} />);
        /* jshint ignore:end */

        return (
            /* jshint ignore:start */
            <div>
                <h1>Archives</h1>
                article: {article}, date: {date}, filter: {filter}
                <div class="row">{Articles}</div>
            </div>
            /* jshint ignore:end */
        );
    }
}
