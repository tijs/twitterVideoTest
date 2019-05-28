import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Tweet extends Component {
  render() {
    const tweet =
      '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Bruhhhhhhhh <a href="https://t.co/8u6wRlji4L">pic.twitter.com/8u6wRlji4L</a></p>&mdash; Duane Brown (@DuaneBrown76) <a href="https://twitter.com/DuaneBrown76/status/1120916039384965120?ref_src=twsrc%5Etfw">April 24, 2019</a></blockquote>\n<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n';

    const wrapper = `<!DOCTYPE html>
          <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          </head>
          <html>
              <body>
              ${tweet}
              </body></html>`;
    return (
      <WebView
        style={{ backgroundColor: '#55fcfc', width: 320, height: 240 }}
        originWhitelist={['*']}
        source={{ html: wrapper }}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        domStorageEnabled={true}
        geolocationEnabled={true}
        thirdPartyCookiesEnabled={true}
      />
    );
  }
}

export default Tweet;
