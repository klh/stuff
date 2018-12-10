import React from 'react';
import {AfterData, AfterRoot} from '@jaredpalmer/after';

class CustomDocument extends React.Component {
    static async getInitialProps({assets, data, renderPage}) {
        const page = await renderPage();
        return {assets, data, ...page};
    }

    render() {
        const {helmet, assets, data} = this.props;
        // get attributes from React Helmet
        const htmlAttrs = helmet.htmlAttributes.toComponent();
        const bodyAttrs = helmet.bodyAttributes.toComponent();

        return (
            <html {...htmlAttrs}>
            <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta charSet="utf-8"/>
                <title>Weather Widget - tv2</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
                {assets.client.css && (
                    <link rel="stylesheet" href={assets.client.css}/>
                )}
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                      crossOrigin="anonymous"/>
            </head>
            <body {...bodyAttrs}>
            <AfterRoot/>
            <AfterData data={data}/>
            <script
                type="text/javascript"
                src={assets.client.js}
                defer
                crossOrigin="anonymous"
            />
            </body>
            </html>
        );
    }
}

export default CustomDocument;
