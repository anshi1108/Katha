import React from 'react';
import Start from './component/Start';
import Question from './component/Question';
import Result from './component/Result';
import { DataProvider } from '../Quiz/Context/dataContext';

const Quiz = () => {
  return (
    <div>
    <DataProvider>
      {/* Welcome Page */}
      <Start/>

      {/* Quiz Page */}
      <Question/>

      {/* Result Page */}
      <Result/>

    </DataProvider>
    </div>
  )
}

export default Quiz
