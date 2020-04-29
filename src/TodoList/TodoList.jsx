import React from "react";

import moment from 'moment';
import './ToDoList.css'
import {Input} from "../Input/Input";


class TodoList extends React.Component{

constructor(props){
	super(props);
	this.state={
		item: "",
		list: [
			{
			id: 1, 
			value: " Learn to learn",
			date: "5:00 pm",
			checked: false
			},
			{
				id: 2, 
				value: " Learn to learn learning",
				date: "6:00 am",
				checked: false
				}
		]
	}
}

addItem(e){
	e.preventDefault();
	if(this.state.item !== ""){
		
		const newItem ={
			id:1 + Math.random(),
			value: this.state.item.slice(),
			date:moment().format("LT"),
			checked: false
		};
	
		let list = [...this.state.list];
	
		list.push(newItem);
	
		this.setState({ list, newItem, item:"" });
	}
	}

	

updateInput(key, value){
	this.setState({[key]: value})
}

render(){
	console.log(this.state.list);
	return <div className="ToDoContainer">
		<div className="ToDoList">
			<div className="TodoHeader">
				<h2>To Do</h2>
				<span className="DateHeading">{moment().format('lll')}</span>
				<Input 
				onChange={(e) => this.updateInput('item', e.target.value)}
				onSubmit={(e) => this.addItem(e)} 
				value={this.state.item}/>

			</div>
			<ul className="ListCont"></ul>

		</div>
	</div>
}

}


export default TodoList;