import React from "react";
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import GloMessage from './GloMessage';

const ProposalsApp = React.lazy(() => import("Proposals/App"));
const ProjectBriefApp = React.lazy(() => import("ProjectBrief/App"));

function App() {
  return (
    <div className="App">
      <h1>This is the host phoenix app. </h1>
      <p><GloMessage /></p>
      <hr></hr>
      <div>
        <h2>This is the remote Proposals part. </h2>
        <div className="proposals">
          <ErrorBoundary>
            <ProposalsApp />
          </ErrorBoundary>
        </div>
        <hr></hr>
      </div>
      <div>
        <h2>This is the remote Project Brief part. </h2>
        <div className="pb">
          <ErrorBoundary>
            <ProjectBriefApp />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}

export default App;