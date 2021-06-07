import React, { Component } from 'react';

class LifecycleExample extends Component {
    static getDerivedStateFromProps(){
        console.log('getDerivedStateFrom Props 호출');
        return {}
    }

    constructor(props){
        super(props);
        
        this.state={}
        console.log('constructor 호출');
    }
    componentDidMount(){
        console.log('componentDidmount호출');
        this.setState({updated : true})
    }
    componentDidUpdate(){
        console.log('componentDidUpdate호출')
    }
    componentWillUnmount(){
        console.log('compoenentWill호출');
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate호출')
        return {};
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate호출');
        return true;
    }

    render() {
        console.log('render 호출');
        return null;
        
        
    }
}

export default LifecycleExample;