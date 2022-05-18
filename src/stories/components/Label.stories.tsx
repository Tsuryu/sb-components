import { Label } from "../../components/Label";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "UI/Label",
  component: Label,
  argTypes: {
    size: {
      control: "select",
    },
    color: {
      control: "select",
    },
    customFontColor: {
      control: "color",
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic",
  size: "normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "normal",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: "h1",
  customFontColor: "#00e302",
};
