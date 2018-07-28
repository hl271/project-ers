import React from 'react'
import {Row} from 'reactstrap'

class Section extends React.Component {
    render() {
        return (
            <div className="my-4" >
                <Row>
                    <h3 md={9}>{this.props.title}</h3>
                    <a md={3} className="ml-auto">See all</a>
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </div>
        )
    }
}
export default Section