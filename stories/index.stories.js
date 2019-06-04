import {storiesOf} from "@storybook/vue";
import {wrapComponent} from "./helpers/decorators";

import ButtonStories from './components/button/index.js';

const stories = {
    ...ButtonStories
};

for (let story in stories) {
    storiesOf('Button', module)
        .addDecorator(story => wrapComponent(story, '', ''))
        .add(
            stories[story].storyName,
            () => stories[story],
            {
                notes: {
                    markdown: `# Notes
${stories[story].notes}

#Code
    ${stories[story].template}`
                },
            }
        );
}
