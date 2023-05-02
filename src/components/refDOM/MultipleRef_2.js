import { useRef } from "react";
import "/home/troth172/Desktop/prince/react/my-react-app/src/components/refDOM/multipleRef_2.css";
export function MultipleRef_2() {
  let catsRef = useRef(null);
  function scrollTo(id) {
    let myMap = getMap();
    myMap.get(id).scrollIntoView({
      behaviour: "smooth",
      block: "center",
      inline: "center",
    });
  }
  function getMap() {
    if (!catsRef.current) {
      catsRef.current = new Map();
    }
    return catsRef.current;
  }
  return (
    <>
      <button onClick={scrollTo.bind(null, 0)}>cat group 1</button>
      <button onClick={scrollTo.bind(null, 5)}>cat group 2</button>
      <button onClick={scrollTo.bind(null, 9)}>cat group 3</button>
      <div>
        <ul>
          {catList.map((cat) => {
            return (
              <li
                key={cat.id}
                ref={(node) => {
                  let myMap = getMap();
                  console.log(myMap);
                  if (node) {
                    myMap.set(cat.id, node);
                  } else {
                    myMap.delete(cat.id);
                  }
                }}
              >
                <img src={cat.imgURL} alt="frfgr" />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({ id: i, imgURL: "https://placekitten.com/250/200?image=" + i });
}
// div {
//   width: 800px;
//   overflow: hidden;
// }
// ul,
// li {
//   white-space: nowrap;
// }
// li {
//   display: inline;
// }

// import "/home/troth172/Desktop/prince/react/my-react-app/src/components/refDOM/multipleRef_2.css";
// import { useRef } from "react";
// export function MultipleRef_2() {
//   let imagesRef = useRef(null);
//   function scrollTo(imgId) {
//     let myMap = getMap();
//     myMap.get(imgId).scrollIntoView({
//       behaviour: "smooth",
//       block: "center",
//       inline: "center",
//     });
//   }
//   function getMap() {
//     if (!imagesRef.current) {
//       imagesRef.current = new Map();
//     }
//     console.log(imagesRef.current);
//     return imagesRef.current;
//   }
//   return (
//     <>
//       <button onClick={scrollTo.bind(null, 0)}>Cat group 1</button>
//       <button onClick={scrollTo.bind(null, 3)}>Cat group 2</button>
//       <button onClick={scrollTo.bind(null, 7)}>Cat group 3</button>
//       <div>
//         <ul>
//           {catList.map((cat) => {
//             return (
//               <li
//                 key={cat.id}
//                 ref={(node) => {
//                   let myMap = getMap();
//                   if (node) {
//                     myMap.set(cat.id, node);
//                   } else {
//                     delete myMap.delete(cat.id);
//                   }
//                 }}
//               >
//                 <img src={cat.imageUrl} alt=""></img>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// }
// const catList = [];
// for (let i = 0; i < 10; i++) {
//   catList.push({
//     id: i,
//     imageUrl: "https://placekitten.com/250/200?image=" + i,
//   });
// }
