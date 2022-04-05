import { html } from "@microsoft/fast-element";

export default html`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>SSR Page Example</title>
        </head>
        <body>
            <style>
                h1 {
                    color: red;
                }

                p {
                    font-size: 1.5em;
                }
            </style>
            <h1>This is an example page</h1>
            <p>
                Ut cursus varius dui id sollicitudin. Donec ultricies vel odio ac
                pulvinar. Nam at nisi egestas, blandit nibh in, viverra lectus. Morbi
                volutpat a dui scelerisque condimentum. Pellentesque in quam ac nulla
                mollis pretium a nec ante. Ut mauris lectus, ornare in justo sit amet,
                mattis posuere turpis. Nunc et felis vel dolor sagittis tristique sed id
                sem. Nullam ut nisi facilisis, dapibus purus at, pharetra risus. Etiam
                augue felis, finibus id diam nec, tincidunt fermentum lectus. Nulla
                facilisi. Sed dignissim ac lacus eget mollis. Phasellus lacinia mauris a
                semper elementum.
            </p>

            <p>
                In accumsan quis eros eget porta. Aliquam rutrum turpis tortor, eu
                eleifend nisl tristique sit amet. Aliquam erat volutpat. Maecenas vel
                pretium felis. Pellentesque sollicitudin ipsum est, a tempus nibh laoreet
                vitae. Integer cursus at nisi dictum euismod. Morbi fermentum urna ut
                faucibus congue.
            </p>

            <p>
                Aliquam venenatis ut magna id commodo. Suspendisse potenti. Fusce odio
                lorem, efficitur nec nisl at, volutpat dictum massa. Vivamus venenatis
                facilisis orci, eget sollicitudin justo commodo vel. Aliquam vestibulum
                nisl eget tortor placerat tristique. Fusce bibendum euismod purus vel
                consequat. Cras ullamcorper interdum ligula sed placerat.
            </p>
        </body>
    </html>
`;
