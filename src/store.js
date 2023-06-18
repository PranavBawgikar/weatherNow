import React from "react";

export default class Store extends React.Component{
    constructor(props){
        super(props);
        //Main App State
        this.state = {
            appName: "Weather UP"
        }
    }

    render(){
        return React.Children.map(this.props.Children, child => {
            return React.cloneElement(child, { ...this.state});
        });
    }
}