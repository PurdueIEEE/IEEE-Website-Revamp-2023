import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

export interface committeeInfo_T { 
  name: string, 
  logo: string, 
  desc: string, 
  pageLink: string, 
  platformName: string, 
  platformLink: string,
}

export default function CommitteeCard(props: { committeeInfo: committeeInfo_T}) {
  return(
    <>
        <Card shadow="sm" p="lg" radius="md" withBorder component='a' 
              href={props.committeeInfo.pageLink} target='_blank'>
          <Card.Section>
            <Image
              src={ props.committeeInfo.logo }
              height={160}
              alt="Committee Logo"
              withPlaceholder
            />
          </Card.Section>

          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{ props.committeeInfo.name }</Text>
          </Group>

          <Text size="sm" color="dimmed">
            { props.committeeInfo.desc }
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md"
                  component='a' href={ props.committeeInfo.platformLink } target='_blank'>
            { props.committeeInfo.platformName }
          </Button>
        </Card>
    </>
  )
}