import React, { useEffect } from 'react';
const FAQ_Page = () => {
  useEffect(() => { document.title = "Clock Suite | FAQ" })
  return (
    <main className={'main-background main-blue'}>
      <br></br>
      <h1 className='main-h-1'>Frequently Asked Questions</h1>
      <h2 className="text-align-center">
        Question: How do I enable translucency for Clock Suite windows?
      </h2>
      <h3 className="main-margin">
        Answer: You must open Clock Suite preferences under the Clock Suite menu 
        and select "Translucent", under "Color For Foreground Background".  
        You also must have selected, under the Colors menu, "Color for Foreground".
        To return to a dark gray background for when the chosen color is the 
        foreground, go to Clock Suite preferences under the Clock Suite menu 
        and select "Dark Gray", under "Color For Foreground Background".
      </h3>
      <br></br><br></br><br></br>
    </main>
  )
}

export default FAQ_Page