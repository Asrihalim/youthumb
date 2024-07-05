import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
        </Head>
        <body>
                {/* Add your descriptive text here */}
       <div>
            <p>
              We're the undisputed best solution for converting YouTube videos
              to 1080p. Our straightforward three-step process makes it easy,
              and it's all free!
            </p>
           <ul>
              <li>No download limit: Download all the content you want.</li>
              <li>Downloads at no cost: Convert YouTube videos to WAV and download them for free.</li>
              <li>The best speeds: Our platform converts YouTube videos in seconds.</li>
              <li>Easy to use: Convert YouTube videos to WAV with just a few clicks.</li>
              <li>No need for apps: Our online tool works without any installations.</li>
            </ul>
            <p>
              How to download YouTube videos as 1080p .MP4 files:
            </p>
            <ol>
              <li>Find the YouTube video you want to convert to 1080p.</li>
              <li>Copy the video's URL and come to our site.</li>
              <li>Paste the link in the URL box above.</li>
              <li>Select MP4 1080p as the output format.</li>
              <li>Click on Download. Your video will be ready in seconds!</li>
            </ol>
            <p>
              Our platform works on all modern devices, including iPhones, iPads,
              Mac computers, Linux computers, Windows PCs, Amazon Fire, and Android
              phones and tablets.
            </p>
           <p>
              FAQs:
            </p>
            <ul>
              <li>
                <strong>What is 1080p?</strong> It's Full HD, with 1080p pixels vertically and 1920 pixels horizontally.
              </li>
              <li>
                <strong>Why convert & download YouTube videos to 1080p?</strong> Because it's the standard resolution for screens, ensuring optimal quality.
              </li>
            </ul>
           </div>
           <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
