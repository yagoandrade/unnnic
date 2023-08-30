/* eslint-disable no-alert */
import unnnicChatsHeader from '../components/ChatsHeader/ChatsHeader.vue';
import unnnicChatsDashboardTagLive from '../components/ChatsDashboardTagLive/ChatsDashboardTagLive.vue';

export default {
  title: 'Chats/Header',
  component: unnnicChatsHeader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { unnnicChatsHeader },
  template: '<unnnic-chats-header v-bind="$props"/>',
});

const DashboardTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { unnnicChatsHeader, unnnicChatsDashboardTagLive },
  template:
    `<unnnic-chats-header v-bind="$props">
      <unnnic-chats-dashboard-tag-live />
    </unnnic-chats-header>`,
});

const back = () => alert('back');
const close = () => alert('close');

const size = window.innerWidth < 600 ? 'small' : 'large';

const defaultArgs = {
  back,
  close,
};

export const Contact = Template.bind({});
Contact.args = {
  ...defaultArgs,
  title: 'John Doe',
  avatarName: 'John Doe',
};

export const ContactInfos = Template.bind({});
ContactInfos.args = {
  ...defaultArgs,
  title: 'Contact information',
  subtitle: 'John Doe',
  avatarName: 'John Doe',
};

export const Dashboard = DashboardTemplate.bind({});
Dashboard.args = {
  ...defaultArgs,
  title: size === 'large' ? 'Lorem Ipsum Inc.' : 'Dashboard',
  subtitle: size === 'large' ? 'Dashboard of project' : 'Lorem Ipsum Inc.',
  avatarIcon: 'graph-stats-1',
  crumbs: [
    {
      name: 'Chats',
      path: 'chats',
    },
    {
      name: 'Dashboard',
      path: 'dashboard',
    },
  ],
};

export const History = Template.bind({});
History.args = {
  ...defaultArgs,
  title: size === 'large' ? 'Lorem Ipsum Inc.' : 'History',
  subtitle: size === 'large' ? 'History of project' : 'Lorem Ipsum Inc.',
  avatarIcon: 'task-list-clock-1',
  crumbs: [
    {
      name: 'Chats',
      path: 'chats',
    },
    {
      name: 'History',
      path: 'history',
    },
  ],
};
