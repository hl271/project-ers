import React from 'react'
import {Jumbotron, Container} from 'reactstrap'

import Searchbox from '../components/SearchBox'
import Section from '../components/Section'
import Project from '../components/Project'


class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            searchBox: {
                searchField: ""
            }
        }
    }
    onSearchChange =  (event) => {
        this.setState({searchBox: {searchField: event.target.value}})
        console.log(event.target.value)
    }
    render() {
        return (
            <div>
                <Jumbotron fluid>
                <Container>
                    <h2 className="m-3 text-center">Search your next projects</h2>
                    <Searchbox className="mx-auto" searchChange={this.props.searchChange} submitSearch={() => this.props.submitSearch()}/>
                </Container>
                </Jumbotron>
                <div className="main mx-5">
                <Section title="Trending Projects">
                    <Project name="Vietcode" category="Công nghệ" text="Dự án dành cho các bạn trẻ đam mê công nghệ trên toàn thành phố Hà Nội"/>
                    <Project name="Vietcode" category="Công nghệ" text="Dự án dành cho các bạn trẻ đam mê công nghệ trên toàn thành phố Hà Nội"/>
                    <Project name="Vietcode" category="Công nghệ" text="Dự án dành cho các bạn trẻ đam mê công nghệ trên toàn thành phố Hà Nội"/>
                    <Project name="Vietcode" category="Công nghệ" text="Dự án dành cho các bạn trẻ đam mê công nghệ trên toàn thành phố Hà Nội"/>
                </Section>
                <Section title="Dự án công nghệ">
                    <Project name="Vietcode" category="Công nghệ" text="Dự án dành cho các bạn trẻ đam mê công nghệ trên toàn thành phố Hà Nội"/>
                    <Project name="Vietcode" category="Công nghệ" text="Dự án dành cho các bạn trẻ đam mê công nghệ trên toàn thành phố Hà Nội"/>
                    <Project name="Vietcode" category="Công nghệ" text="Dự án dành cho các bạn trẻ đam mê công nghệ trên toàn thành phố Hà Nội"/>
                    <Project name="Vietcode" category="Công nghệ" text="Dự án dành cho các bạn trẻ đam mê công nghệ trên toàn thành phố Hà Nội"/>
                </Section>
                </div>
            </div>            
        )
    }
}

export default Home