import React , {Component} from 'react'

class AddItem extends Component {

    state ={
        name : '',
    }

    handlechange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handlesubmit= (e) => {
        e.preventDefault()
        if (e.target.name.value===''){
            return false 
        }else {
            this.props.additems(this.state)
            this.setState({
            name:'',
        })
        }
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handlesubmit}>
                    <input type="text" placeholder="What's In Your Mind...." id="name" onChange={this.handlechange} value={this.state.name}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}
    export default AddItem