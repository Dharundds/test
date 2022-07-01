import React, { useRef, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import toPdf from "./component/toPdf";

function App() {
  const [name,setName] = useState("");
  const [date,setDate] = useState("");
  const formRef = useRef(null);


  return (
  <div className="App">
     <input type="text" name="Receipt To" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" />
     <input type="text" name="Date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder="Date" />
     <PDFDownloadLink
                  document={
                   <toPdf 
                    name={name}
                    date={date}
                   />
                  }
                  fileName={`${name}_bill.pdf`}
                >
                  {({ loading }) =>
                    loading ? (
                      <button>Loading..</button>
                    ) : (
                      <button >download</button>
                    )
                  }
                </PDFDownloadLink>
  </div>)
}

export default App;
