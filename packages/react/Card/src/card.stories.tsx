
import Card from './Card';
import Button from '../../Button/src/Button'

export default { title: 'composite components/Card', component: Card };

const Template = (args) => (
    <Card {...args}> 
        <Card.Header title="Card title"></Card.Header>
        <Card.Body message="card content"></Card.Body>
        <Card.Footer>
            <Button>Secondary</Button>
            <Button appearance="primary">Primary</Button>
        </Card.Footer>
    </Card>
)

//👇 Each story then reuses that template
export const Playground = Template.bind({});
