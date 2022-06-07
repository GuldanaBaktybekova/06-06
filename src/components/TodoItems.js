// import React, { Component } from "react";
// class TodoItems extends Component {
//   constructor(props, context) {
//     super(props, context);

//     this.createTasks = this.createTasks.bind(this);

//   }
//   edit(key){
//     this.props.edit(key);
//   }
//   delete(key){
//     this.props.delete(key);
//   }
//   createTasks(item) {
//     return <li key={item.key}>{item.text}<a href="" className="button bg_green" onClick={()=>this.edit(item.key)}>Edit</a><a href=""className="button bg_red" onClick={()=>this.delete(item.key)}>Delete</a></li>
//   }

//   render() {
//     var todoEntries = this.props.entries;
//     var listItems = todoEntries.map(this.createTasks);

//     return (
//       <ul className="theList">
//           {listItems}
//       </ul>
//     );
//   }
// };


// export default TodoItems;