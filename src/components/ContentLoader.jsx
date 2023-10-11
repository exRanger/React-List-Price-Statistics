import React from "react";
import {default as ReactContentLoader} from "react-content-loader";


const LOADER_WIDTH_SIZE = 256;

const ContentLoader = (props) => (
   <ReactContentLoader 
       speed={2}
       width={LOADER_WIDTH_SIZE}
       height={390}
       viewBox="0 0 476 690"
       backgroundColor="#f3f3f3"
       foregroundColor="#24b9f9"
       {...props}>
           <circle cx="190" cy="189" r="180" /> 
           <rect x="52" y="383" rx="35" ry="15" width="281" height="30" /> 
           <rect x="17" y="435" rx="15" ry="15" width="360" height="92" /> 
           <rect x="21" y="549" rx="15" ry="15" width="100" height="5" /> 
           <rect x="177" y="540" rx="16" ry="16" width="203" height="66" /> 
           <rect x="75" y="499" rx="0" ry="0" width="0" height="6" />
    </ReactContentLoader>
);

export default ContentLoader;
