import React from "react";

import moment from 'moment';
import './ToDoList.css'
import {Input} from "../Input/Input";
import  {Item} from "../Item/Item";


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
			checked: false,
			editing: false
			},
			{
				id: 2, 
				value: " Learn to learn learning",
				date: "6:00 am",
				checked: false,
				editing: false
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
			checked: false,
			editing: false
		};
	
		let list = [...this.state.list];
	
		list.push(newItem);
	
		this.setState({ list, newItem, item:"" });
	}
	}

	

updateInput(key, value){
	this.setState({[key]: value})
}


setEditing(id){

	let list = this.state.list;

	const item = list.findIndex((item) => item.id === id);
	let updatedItem = list[item];
	updatedItem.editing = true;

	const newTodoList = [...list];
	newTodoList[item]= updatedItem;
	this.setState({list:newTodoList})

}

editTask(id, value, ){
	let list = this.state.list;

	const item = list.findIndex((item) => item.id === id);
	let updatedItem = list[item];

	updatedItem.value = value;
	const newTodoList = [...list];
	newTodoList[item]= updatedItem;
	this.setState({list:newTodoList})


}

crossItem(id){
	let list = this.state.list;

	const item = list.findIndex((item) => item.id === id);
	let updatedItem = list[item];

	updatedItem.checked = !updatedItem.checked;

	const newTodoList = [...list];
	newTodoList[item]= updatedItem;
	this.setState({list:newTodoList})
}

render(){
	console.log(this.state.list);
	return <div className="ToDoContainer">
		<div className="ToDoList">
			<div className="TodoHeader">
				<h2>Que hacer?</h2>
				<span className="DateHeading">{moment().format('lll')}</span>
				<Input 
				onChange={(e) => this.updateInput('item', e.target.value)}
				onSubmit={(e) => this.addItem(e)} 
				value={this.state.item}/>

			</div>
			<ul className="ListCont"></ul>
			{this.state.list.map((item) => (
				<Item 
				key={item.id}
				checked={item.checked} 
				id={item.id} 
				crossItem={() => this.crossItem(item.id)}
				value={item.value}
				date={item.date}
				/>
			)
				

			)}

		</div>
	</div>
}

}


export default TodoList;