import React from 'react'
import {Jumbotron, Container} from 'reactstrap'

import Searchbox from '../components/SearchBox'
import Section from '../components/Section'
import Project from '../components/Project'

const AllProjects = ({allProjects}) => {
    
    const projectlist = Object.keys(allProjects).length === 0 ? <div>Loading..</div> : Object.values(allProjects).map(project => {
        return <Project key={project.name.toLowerCase()} name={project.name} text={project.intro} imgURL={project.imgURL} category={project.category.join(', ')}/>
    })
    return projectlist
}

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
                        <AllProjects allProjects={this.props.allProjects}/>
                    </Section>
                    <Section title="Dự án công nghệ">
                        
                    </Section>
                </div>
            </div>            
        )
    }
}

export default Home