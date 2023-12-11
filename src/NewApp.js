import React,{useState} from "react";
import Navbar3 from "./componnt_News/Navbar3";
import NewsItem from "./componnt_News/NewsItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function NewApp() {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <>

      <Router>
        <Navbar3 />
        <Routes>
          <Route exact path="/" element={
            <NewsItem
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />}/>
          <Route exact path="/business" element={
            <NewsItem
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />}/>
          <Route exact path="/entertainment" element={
            <NewsItem
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />}/>
          
          <Route exact path="/general" element={ 
            <NewsItem
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />}/>
          
          <Route exact path="/health" element={
            <NewsItem
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />}/>
          
          <Route exact path="/science" element={
            <NewsItem
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />}/>
          
          <Route exact path="/sports" element={
            <NewsItem
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />}/>
        
          <Route exact path="/technology" element={
            <NewsItem
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />}/>
        
        </Routes>
      </Router>
    </>
  );
}

export default NewApp;
