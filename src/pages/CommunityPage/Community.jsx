// import axios from "axios";
// import React, { Component } from "react";
// import ReactLoading from "react-loading";
// import CommunityCard from "./CommunityCard";
// import { ListGroup, ListGroupItem } from "react-bootstrap";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       isloading: true,
//     };
//   }

//   async componentDidMount() {
//     //
//     await axios.get(`...`).then((res) => {
//       const users = res;
//       this.setState({ users, isloading: false });
//     });
//   }

//   render() {
//     let res = this.state.users;
//     let { isloading } = this.state;
//     return (
//       <>
//         {isloading ? (
//           <ReactLoading type={"bars"} color="#021155" />
//         ) : (
//           <>
//             {res?.data?.data?.map((x) => {
//               return (
//                 <ListGroup>
//                   <ListGroupItem>
//                     <CommunityCard />
//                   </ListGroupItem>
//                 </ListGroup>
//               );
//             })}
//           </>
//         )}
//       </>
//     );
//   }
// }
