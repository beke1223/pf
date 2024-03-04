import React from 'react'; 
import IJC from "../assets/ijc.pdf"; 
import IJC1 from "../assets/IJC(SDD).pdf"; 
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Document, Page, Text } from '@react-pdf/renderer';

const MyDocument = () => (
  <Document>
    <Page>
      <Text>Hello, this is my PDF content!</Text>
       
    </Page>
  </Document>
);

const CV=()=> {
  return  (
    <div>
     <PDFViewer width="100%" height="500px">
      <MyDocument/>
       
      </PDFViewer>
      {/* <button className='h-8 ml-3 pt-2 text-blue-500 hover:border-b-[2px] hover:border-blue-500 '>DownLoad Cv</button>
      <PDFDownloadLink document={<IJC1 />} fileName="cv@Bekalu-Atto.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now!'
        }
      </PDFDownloadLink> */}
    </div>
  );
}
export default CV;
