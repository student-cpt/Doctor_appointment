// // import React, { useContext, useEffect } from 'react'
// // import { AdminContext } from '../../context/AdminContext'
// // import { AppContext } from '../../context/AppContext'
// // import { assets } from '../../assets/assets_admin/assets'

// // const AllAppointments = () => {

// //   const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
// //   const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

// //   useEffect(() => {
// //     if (aToken) {
// //       getAllAppointments()
// //     }
// //   }, [aToken])

// //   return (
// //     <div className='w-full max-w-6xl m-5'>
// //       <p className='mb-3 text-lg font-medium'>All Appointments</p>

// //       <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
// //         {/* Table Header */}
// //         <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] py-3 px-6 border-b'>
// //           <p>#</p>
// //           <p>Patient</p>
// //           <p>Age</p>
// //           <p>Date & Time</p>
// //           <p>Doctor</p>
// //           <p>Fees</p>
// //           <p>Actions</p>
// //         </div>

// //         {/* Table Rows */}
// //         {appointments.map((item, index) => (
// //           <div
// //             className='flex flex-wrap justify-between max-sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-3 border-b hover:bg-gray-50'
// //             key={index}
// //           >
// //             {/* Index */}
// //             <p className='max-sm:hidden'>{index + 1}</p>

// //             {/* Patient Info */}
// //             <div className='flex items-center gap-2'>
// //               <img className='w-8 h-8 rounded-full object-cover' src={item.userId?.image} alt="" />
// //               <p>{item.userId?.name}</p>
// //             </div>

// //             {/* Age */}
// //             <p className='max-sm:hidden'>
// //               {item.userId?.dob ? calculateAge(item.userId.dob) : "-"}
// //             </p>

// //             {/* Date & Time */}
// //             <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>

// //             {/* Doctor Info */}
// //             <div className='flex items-center gap-2'>
// //               <img className='w-8 h-8 rounded-full object-cover bg-gray-200' src={item.docId?.image} alt="" />
// //               <p>{item.docId?.name}</p>
// //             </div>

// //             {/* Fees */}
// //             <p>{currency}{item.docId?.fees}</p>

// //             {/* Cancel Button */}
// //             {
// //               item.cancelled
// //                 ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
// //                 : <img
// //                     onClick={() => cancelAppointment(item._id)}
// //                     className='w-10 cursor-pointer'
// //                     src={assets.cancel_icon}
// //                     alt="Cancel"
// //                   />
// //             }
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default AllAppointments

// import React, { useContext, useEffect } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { AppContext } from "../../context/AppContext";

// const AllAppointments = () => {
//   const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
//   const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

//   useEffect(() => {
//     if (aToken) {
//       getAllAppointments();
//     }
//   }, [aToken]);

//   return (
//     <div className="w-full max-w-6xl m-5">
//       <p className="mb-3 text-lg font-medium">All Appointments</p>

//       <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
//         <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] py-3 px-6 border-b">
//           <p>#</p>
//           <p>User</p>
//           <p>Doctor</p>
//           <p>Date & Time</p>
//           <p>Fee</p>
//           <p>Action</p>
//         </div>

//         {appointments.map((item, index) => (
//           <div
//             key={item._id}
//             className="grid grid-cols-2 sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] gap-2 py-3 px-6 border-b items-center"
//           >
//             <p>{index + 1}</p>
//             <div className="flex items-center gap-2">
//               <img src={item.userId?.image} className="w-8 h-8 rounded-full" alt="" />
//               <p>{item.userId?.name}</p>
//             </div>
//             <p>{calculateAge(item.userId?.dob)}</p>
//             <div className="flex items-center gap-2">
//               <img src={item.docId?.image} className="w-8 h-8 rounded-full" alt="" />
//               <p>{item.docId?.name}</p>
//             </div>
//             <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
//             <p>{currency}{item.amount}</p>
//             {item.cancelled 
//               ? <p className="text-red-500">Cancelled</p>
//               : <button 
//                   onClick={() => cancelAppointment(item._id)} 
//                   className="bg-red-500 text-white px-2 py-1 rounded text-xs"
//                 >
//                   Cancel
//                 </button>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllAppointments;


import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
  const { slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium">All Appointments</p>

      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_3fr_3fr_3fr_1fr] py-3 px-6 border-b">
          <p>#</p>
          <p>User</p>
          <p>Doctor</p>
          <p>Date & Time</p>
          <p>Fee</p>
          <p>Action</p>
        </div>

        {/* Table Rows */}
        {appointments.map((item, index) => (
          <div
            key={item._id}
            className="grid grid-cols-2 sm:grid-cols-[0.5fr_3fr_3fr_3fr_3fr_1fr] gap-2 py-3 px-6 border-b items-center"
          >
            <p>{index + 1}</p>
            {/* User */}
            <div className="flex items-center gap-2">
              <img src={item.userId?.image} className="w-8 h-8 rounded-full" alt="user" />
              <p>{item.userId?.name}</p>
            </div>
            {/* Doctor */}
            <div className="flex items-center gap-2">
              <img src={item.docId?.image} className="w-8 h-8 rounded-full" alt="doctor" />
              <p>{item.docId?.name}</p>
            </div>
            {/* Date & Time */}
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            {/* Fee */}
            <p>{currency}{item.amount}</p>
            {/* Action */}
            {item.cancelled 
              ? <p className="text-red-500">Cancelled</p>
              : <button 
                  onClick={() => cancelAppointment(item._id)} 
                  className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                >
                  Cancel
                </button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
