import React from "react";
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className=" flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*sun icon*/}
            <SunIcon className="h-8 w-8 " />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              &quot;Explain quantum computing in simple terms&quot;
            </p>
            <p className="infoText">
              &quot;Got any ideas for a 10 year old&apos;s birthday?&quot;
            </p>
            <p className="infoText">
              &quot;How do I make an HTTP request in JavaScript?&quot;
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*sun icon*/}
            <BoltIcon className="h-8 w-8 " />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              Remembers what user said earlier in the conversation;
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText">
              Trained to decline innappropriate requests
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/*sun icon*/}
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limited knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
