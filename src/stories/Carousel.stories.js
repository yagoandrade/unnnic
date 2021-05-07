import Carousel from '../components/Carousel/Carousel.vue';
import iconList from '../utils/iconList';

export default {
  title: 'Example/Carousel',
  component: Carousel,
  argTypes: {
    type: { control: { type: 'select', options: ['brand'] } },
    icon: { control: { type: 'select', options: iconList } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Carousel },
  template: '<Carousel v-bind="$props"/>',
});

export const Tag = Template.bind({});
Tag.args = {
  type: 'brand',
  tagItems: [
    { id: 1, title: 'tag' },
    { id: 2, title: 'tag' },
    { id: 3, title: 'tag' },
    { id: 4, title: 'tag' },
    { id: 5, title: 'tag' },
  ],
};