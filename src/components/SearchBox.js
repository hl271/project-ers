import React from 'react'

import {InputGroup, InputGroupAddon, Button} from 'reactstrap'

class Searchbox extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
          dropdownOpen: false,
          splitButtonOpen: false
        };
    }
    
    toggleDropDown() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <div className={this.props.className}>
                <InputGroup>
                    <input type="text" className="form-control" onChange = {this.props.searchChange}/>
                    <InputGroupAddon addonType="append"><Button color="danger" onClick = {() => this.props.submitSearch()}>Search</Button></InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
}

export default Searchbox