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
		<Card shadow="lg" p="lg" radius="md" w={320} withBorder>
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

			<div className="flex items-center mt-5">
				<Anchor href={`mailto:${props.officersInfo.email}`} target="_blank" rel="noopener noreferrer">
					<img className="w-8" src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Email-64.png" alt="" />
				</Anchor>
      		</div>
		</Card>
	);
}