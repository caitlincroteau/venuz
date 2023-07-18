import useData from "./useData.jsx";

export default function Sidebar(props) {
  const { venuesDetails } = useData();

  console.log("venue details", venuesDetails)

  return (
    <>
      <h1>Sidebar</h1>
      <div> 
      {venuesDetails.map((venue) => {
        return (venue)

      })
     }
     </div>
    </>
  );
}
