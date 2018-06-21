import React, { Component } from 'react';

class AddItem extends Component{
    constructor(props){
        super(props);

        this.state={
            title:'',
            details:''
        };

    }
    handleAddItem(event){
        event.preventDefault();

        //console.log('New Item: ', this.state);
        this.props.add(this.state);

        this.setState({
            title: '',
            details: ''
        });
    }


    render(){
        //console.log('STATE: ', this.state);

        const { title, details } = this.state;

        return (
            <form onSubmit={this.handleAddItem.bind(this)}>
                <div className='row'>
                    <div className="col s6 offset-s3">
                        <label>Title</label>
                        <input type='text' value={title} onChange={event => this.setState({title:event.target.value})}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col s6 offset-s3">
                        <label>Details</label>
                        <input type='text' value={details} onChange={event => this.setState({details:event.target.value})}/>
                    </div>
                </div>
                <div className='row'>
                    <div className="col s6 offset-s3 right-align">
                        <button className='btn blue darken-4'>Add Item</button>
                    </div>
                </div>
            </form>

        )

    }
}
export default AddItem;
