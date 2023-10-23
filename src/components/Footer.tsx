import { Anchor, Footer, Group, ActionIcon } from "@mantine/core";

const links = [
  { link: "https://github.com/PurdueIEEE/IEEE-Website", label: "View on GitHub" },
  { link: "mailto:webmaster@purdueieee.org", label: "Email Webmaster" }
];

const socials = [
  { link: "https://twitter.com/purdueieee", icon: "https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-128.png" },
  { link: "https://youtube.com/@PurdueIEEE", icon: "https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Youtube_svg-128.png" },
  { link: "https://www.instagram.com/purdueieee", icon: "https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-128.png" },
  { link: "https://purdueieee.slack.com/signup", icon: "https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Slack_svg2-64.png" },
  { link: "https://github.com/PurdueIEEE", icon: "https://cdn1.iconfinder.com/data/icons/logotypes/32/github-64.png" }
];

const linkItems = links.map((link) =>
  <Anchor
    c="dimmed"
    key={link.label}
    href={link.link}
    lh={1}
    target="_blank"
  >
    {link.label}
  </Anchor>
);

const socialItems = socials.map((social) =>
  <ActionIcon key={social.link}>
    <a href={social.link} target="_blank" rel="noopener noreferrer">
      <img src={social.icon} alt="Hello" />
    </a>
  </ActionIcon>
);

export default function PageFooter() {
  return (
    <Footer className="grid grid-cols-3 gap-20 items-center mt-10 pt-5" height={40}>
      <ActionIcon className="flex" size="lg">
        <img src="https://purdueieee.org/images/pieee_logo_v3.png" alt="" />
        <h3 className="whitespace-nowrap">Purdue IEEE</h3>
      </ActionIcon>

      <Group className="flex flex-col items-center color-red" c="dimmed" spacing={0}>
        <Group>{linkItems}</Group>
        <h2>Copyright © 2023 Purdue IEEE</h2>
      </Group>
      
      <Group className="flex justify-end items-center">
        {socialItems}
      </Group>
    </Footer>
  );
}
