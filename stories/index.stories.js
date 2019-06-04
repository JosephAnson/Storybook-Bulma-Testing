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
            stories[story].name,
            () => stories[story],
            {
                notes: stories[story].notes,
            }
        );
}
