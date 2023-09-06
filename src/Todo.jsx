// conditional Rendaring 1
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finshed: {task}</li>;
//   } else {
//     return <li>Work On: {task}</li>;
//   }
// }

// conditional Rendaring 2
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finshed: {task}</li>;
//   }
//   return <li>Work On: {task}</li>;
// }

// conditional Rendaring 3
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finshed" : "Work On"}: {task}
//     </li>
//    );

// }

// // conditional Rendaring 4: and Operator
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone && "Done :"} {task}
//     </li>
//   );
// }

// // conditional Rendaring 5: Or Operator
// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone || "Work On :"} {task}
//     </li>
//   );
// }

// conditional Rendaring 6: Or Operator
export default function Todo({ task, isDone }) {
  let status;
  if (isDone) {
    status = <li>Done : {task}</li>;
  } else {
    status = <li>Work On : {task}</li>;
  }

  return status;
}

// export default Todo;
