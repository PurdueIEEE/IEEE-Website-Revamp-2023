import { Anchor, Card, Image, Text, Badge, Button, Group, ActionIcon } from '@mantine/core';

export interface officersInfo_T {
    name: string,
    img: string,
    title: string,
    desc: string,
    committees: string[]
    email: string
}

export default function OfficerCard(props: { officersInfo: officersInfo_T }) {
	const committeeBadges = props.officersInfo.committees.map((committee) =>
    <Badge>
			{committee}
		</Badge>
	)

	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			<Card.Section>
				<Image
					src={props.officersInfo.img}
					alt="Officer Image"
					height={200}
				/>
			</Card.Section>

			<Group className='justify-between' mt="md" mb="xs">
				<Text fw={500}>
				  {props.officersInfo.name}
				</Text>
				{committeeBadges}
			</Group>

			<Text size="sm" c="dimmed">
				{props.officersInfo.desc}
			</Text>

			<Anchor href={`mailto:${props.officersInfo.email}`} target="_blank" rel="noopener noreferrer">
				<img className='w-8 mt-5' src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-64.png" alt="" />
			</Anchor>
		</Card>
	);
}