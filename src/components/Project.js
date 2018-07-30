import React from 'react'
import {Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap'

class Project extends React.Component {
    render() {
        function addDefaultSrc (ev) {
            ev.target.src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=no_avatar&w=400&h=400"
        }
        return (
            <Col md="3" sm="6" className="py-2">
                <Card>
                    <CardImg top width="100%" src={this.props.imgURL} onError={addDefaultSrc} alt="Card image cap" />
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