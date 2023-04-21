// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { youtubeOptions } from "../../Utils/Options";
// import { Link } from "react-router-dom";

// function YoutubeVideos({ exercise }) {
//   const EXERCISE_YOUTUBE_VIDEOS_API = `https://youtube-search-and-download.p.rapidapi.com`;
//   const [videos, setVideoss] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `${EXERCISE_YOUTUBE_VIDEOS_API}/search?query=${exercise.name}`,
//           youtubeOptions
//         );
//         const data = response.data;
//         //   console.log(data);
//         setVideoss(data);
//       } catch (error) {
//         console.error(error.message);
//       }
//     };
//     console.log(videos);
//     fetchData();
//   }, []);
//   return (
//     <>
//       {videos.contents && videos.contents.length > 0 ? (
//         videos.contents.map((item) => {
//           return (
//             <>
//               {console.log(item.video?.channelName)}
//               <a
//                 className="youtubeVideos"
//                 href={`https://www.youtube.com/watch?v=}
//                 target="_blank"
//               >
//                 <div className="allExerciseCardItem">
//                   {/* {item.video.thumbnails && (
//                     <img
//                       src={item.video.thumbnails[0].url}
//                       alt={item.video.channelName}
//                       className="thumbnailImg"
//                     />
//                   )} */}
//                   {/* <p className="videoTitle">{item.video.title}</p> */}
//                 </div>
//               </a>
//             </>
//           );
//         })
//       ) : (
//         <h1>lol</h1>
//       )}
//     </>
//   );
// }

// export default YoutubeVideos;
