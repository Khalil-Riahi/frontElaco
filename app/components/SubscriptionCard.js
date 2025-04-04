// "use client";
// import { useState } from "react";

// export default function SubscriptionCard({ sub }) {
//   async function clickToPay() {
//     const obj = {
//       subId: sub._id,
//       amount: sub.price * 1000,
//       description: `${sub.subscriptionType} subscription`,
//     };
//     try {
//       const response = await fetch("http://localhost:3001/api/v1/reservation", {
//         method: "POST",
//         body: JSON.stringify(obj),
//         credentials: "include",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) {
//         throw new Error("Error in paying");
//       }
//       const resData = await response.json();
//       window.location.href = resData.result.payUrl;
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
//       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
//         <p className="text-lg font-semibold uppercase text-gray-600">
//           {sub.subscriptionType}
//         </p>
//         <h1 className="flex justify-center gap-1 mt-4 font-bold text-gray-800 text-4xl sm:text-5xl">
//           {sub.price}
//           <span className="self-end text-xl sm:text-2xl">TND</span>
//         </h1>
//       </div>

//       <ul className="space-y-3">
//         {sub.description.map((des, index) => (
//           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
//             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//               </svg>
//             </span>
//             <p>{des}</p>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-8">
//         <button
//           className="w-full py-2 px-4 bg-gray-800 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
//           type="button"
//           onClick={clickToPay}
//         >
//           Subscribe
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";

export default function SubscriptionCard({ sub }) {
  async function clickToPay() {
    const obj = {
      subId: sub._id,
      amount: sub.price * 1000,
      description:`${sub.subscriptionType} subscription` ,
    };
    try {
      const response = await fetch("http://localhost:3001/api/v1/reservation", {
        method: "POST",
        body: JSON.stringify(obj),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Error in paying");
      }
      const resData = await response.json();
      window.location.href = resData.result.payUrl;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="pb-6 mb-6 border-b border-gray-200 text-center">
        <p className="text-lg font-semibold uppercase text-gray-600">
          {sub.subscriptionType}
        </p>
        <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950   text-4xl sm:text-5xl">
          {sub.price}
          <span className="self-end text-xl sm:text-2xl">TND</span>
        </h1>
      </div>

      <ul className="space-y-3">
        {sub.description.map((des, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-sm sm:text-base text-gray-600"
          >
            <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </span>
            <p>{des}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <button
          className="w-full py-2 px-4 bg-blue-950 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
          type="button"
          onClick={clickToPay}
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}