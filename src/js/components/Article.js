import React from 'react';

export default class Article extends React.Component {
    render() {
        const { title } = this.props;

        return (
            /* jshint ignore:start */
            <div class="col-md-4">
                <h4>{title}</h4>
                <p>
                    This Wikipedia is written in English. Started in 2001 (2001), it currently contains 5,844,512
                    articles. Many other Wikipedias are available; some of the largest are listed below.
                </p>
                <a class="btn btn-default" href="#">
                    More Info
                </a>
            </div>
            /* jshint ignore:end */
        );
    }
}
