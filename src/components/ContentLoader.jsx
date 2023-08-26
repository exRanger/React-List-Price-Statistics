import React from "react";
import {default as ReactContentLoader} from "react-content-loader";

const ContentLoader = (props) => (
  <ReactContentLoader 
    speed={2}
    width={260}
    height={480}
    viewBox="0 0 476 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#24b9f9"
    {...props}
  >
    <circle cx="153" cy="117" r="121" /> 
    <rect x="33" y="257" rx="15" ry="15" width="247" height="30" /> 
    <rect x="17" y="304" rx="15" ry="15" width="281" height="92" /> 
    <rect x="21" y="429" rx="15" ry="15" width="91" height="38" /> 
    <rect x="150" y="423" rx="16" ry="16" width="143" height="51" /> 
    <rect x="75" y="434" rx="0" ry="0" width="0" height="6" />
  </ReactContentLoader>
)

export default ContentLoader;