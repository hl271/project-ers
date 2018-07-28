import React from 'react'
import {Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

class Project extends React.Component {
    render() {
        return (
            <Col md="3" sm="6" className="py-2">
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.name}</CardTitle>
                        <CardSubtitle>{this.props.category}</CardSubtitle>
                        <CardText>{this.props.text}</CardText>
                        <Button>More</Button>
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Project