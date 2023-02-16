import { html } from 'lit';
import '../src/my-card.js';

export default {
  title: 'MyCard',
  component: 'my-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <my-card
      style="--my-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </my-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
