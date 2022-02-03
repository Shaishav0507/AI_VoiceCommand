import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'db5477f5a85cf27fb72cd6c8f3d726be2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    useEffect(() => {
        alanBtn({
            key:alanKey,
            onCommand: ({command}) => {
                if(command === 'testCommand'){
                    alert("This code was executed");
                }
            }
        })
    }, [])

  return (
  <div>
      <h1>Alan AI News Applivations</h1>
  </div>
  );
};

export default App;